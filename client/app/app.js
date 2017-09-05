import ExampleAppService from './services/app.service';

console.log("Modernizer from CDN... flexbox support ?  " +  Modernizr.flexbox);
console.log(ExampleAppService.hello());

import _forEach from "lodash-es/forEach";
import moment from 'moment';

import 'jquery/dist/jquery.slim';

// loaded from CDN see external-libraries.conf.js
console.log(moment.now());

_forEach([1, 2], x => {
    console.log(x);
});
