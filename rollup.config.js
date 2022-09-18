import RollupPluginBabel from 'rollup-plugin-babel';

export default {
    input: './index.js',
    output: [
        {
            file: './dist/bundle-es.js',
            format: 'es'
        },
        {
            file: './dist/bundle-cjs.js',
            format: 'cjs'
        }
    ],
    plugins: [
        RollupPluginBabel({
            exclude: 'node_modules/**'
        })
    ]
}