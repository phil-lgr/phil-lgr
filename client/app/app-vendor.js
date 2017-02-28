import _forEach from "lodash-es/forEach";
import moment from 'moment';

// loaded from CDN see external-libraries.conf.js
console.log(moment.now());

_forEach([1, 2], x => {
    console.log(x);
});