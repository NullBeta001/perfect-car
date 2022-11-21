// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    API: 'http://localhost:8080/',
    BASE_URL: '/api',
    firebase: {
        projectId: 'perfectcar-3b99d',
        appId: '1:259335628096:web:2fb129afed1484c05a86a5',
        storageBucket: 'perfectcar-3b99d.appspot.com',
        apiKey: 'AIzaSyCr6Qcqtgggt0lS-xsDujEIubfyQVhdzJQ',
        authDomain: 'perfectcar-3b99d.firebaseapp.com',
        messagingSenderId: '259335628096',
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.