// deno bundle src/index.js dist/index.js
import esbuildCachePlugin from "https://deno.land/x/esbuild_plugin_cache_deno/mod.ts";
import deno_json from "./deno.json" assert { type: "json" };
const importMap = deno_json.imports;

import { copy } from "https://deno.land/std/fs/mod.ts";

import * as esbuild from "https://deno.land/x/esbuild@v0.15.10/wasm.js";

import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";


async function copyDirectory(source, destination) {
    await copy(source, destination, { overwrite: true });
}

try {

    const sourceDir = "./base";
    const destDir = "./dist";

    await copyDirectory(sourceDir, destDir);
}
catch (e) {
    console.log(e);
}
finally {
    const result = await esbuild.build({
        plugins: [denoPlugin(), esbuildCachePlugin({
            importMap
        })],
        entryPoints: ["./src/index.js"],
        outfile: "./dist/index.js",
        bundle: true,
        format: "esm",
    });

    if (result.outputFiles) {
        for (const { path, contents } of result.outputFiles) {
            await Deno.writeFile(path, contents);
        }
    }

    esbuild.stop();

}