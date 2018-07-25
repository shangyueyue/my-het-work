import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name:'test'
  },
  plugins: [ 
    resolve(),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/react/index.js': ['Component', 'PureComponent', 'Children', 'createElement'],
      }
    }),
    // babel({
    //   exclude: 'node_modules/**'
    // })
  ],
  
}