import RollupPluginBabel from 'rollup-plugin-babel';
import {terser} from "rollup-plugin-terser";

export default {
    input: './index.mjs',
    output: [
        {
            file: './dist/index.mjs',
            format: 'es'
        },
        {
            file: './dist/index.js',
            format: 'cjs'
        }
    ],
    plugins: [
        RollupPluginBabel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
}