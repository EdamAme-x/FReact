// deno bundle src/index.js dist/index.js
import { copy } from "https://deno.land/std/fs/mod.ts";

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
    Deno.run({
        cmd: ["deno", "bundle", "src/index.js", "dist/index.js"],
    });
}