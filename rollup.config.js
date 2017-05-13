export default {
  entry: 'dist/index.js',
  dest: 'dist/bundles/x-ng4-http-interceptor-test.umd.js',
  sourceMap: false,
  format: 'umd',
  moduleName: 'ng.x-ng4-http-interceptor-test',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/http': 'ng.http',
    'rxjs/Observable': 'Rx',
    'rxjs/add/observable/empty': 'Rx.Observable',
    'rxjs/add/observable/of': 'Rx.Observable',
    'rxjs/add/observable/throw': 'Rx.Observable',
    'rxjs/add/operator/catch': 'Rx.Observable.prototype',
    'rxjs/add/operator/mergeMap': 'Rx.Observable.prototype'
  }
}
