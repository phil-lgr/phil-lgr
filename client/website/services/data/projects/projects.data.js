import ProjectModel from './project.model';

import libraries from './project-libraries/project-libraries.data';
import techs from './project-technologies/project-techs.data';
import platforms from './project-platforms/project-platforms.data';
import activities from './project-activities/project-activities.data';

let projects = [];

projects.push(
    new ProjectModel(
        2,
        'Client Facing iPad Application',
        [
            activities.integration,
            activities.programmingFrontEnd
        ],
        'This is a top quality app for iPad using web technologies (Cordova). Design was provided by UX/UI designer, main role was to integrate design into code and add dynamics.',
        '',
        [
            'Angular 2+ application',
            'Carefully crafted SCSS style code to ensure rendering performance (CSS3 animations) and pixel perfect result',
            'Enhanced the provided static design with smooth animations, like notifications popping out on the top right, panels sliding...'
        ],
        [
            platforms.iosCordova
        ],
        [
            techs.html, techs.scss, techs.javascript, techs.svg
        ],
        [
            libraries.angular, libraries.jQuery, libraries.cordova
        ],
        new Date('2017-02'),
        [],
        'two backend (TSQL + .NET), two front end (Angular + Cordova)',
        '4 months',
        'eCommerce company based in the US'
    )
);


projects.push(
    new ProjectModel(
        4,
        'Landing Page for Startup + Web App for Video Listing',
        [
            activities.integration,
            activities.design,
            activities.programmingFrontEnd,
        ],
        'Landing page and web application for mobile.',
        '',
        [
            'Async loading of heavy/dynamic parts of the landing page using Webpack',
            'Leveraged many SaaS/APIs like One Signal for push, Contentful for DB, and Firebase for auth/fb login',
            'Custom look with some fanciness like custom loaders and animated notifications'
        ],
        [
            platforms.chromeDesktop,
            platforms.chromeiOS,
            platforms.safariDesktop,
            platforms.safariIOS,
            platforms.firefox,
            platforms.ie11,
            platforms.edge,

        ],
        [
            techs.html, techs.scss, techs.javascript, techs.svg
        ],
        [
            libraries.angular,
            libraries.jQuery,
            libraries.firebase
        ],
        new Date('2016-11'),
        [
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487324621/phil-lgr/promo-site.png',
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487324621/phil-lgr/promo-site2-ipad.png',
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487324621/phil-lgr/app-site-notif.png',
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487324621/phil-lgr/promo-site-iphone.png',
        ],
        'one developer',
        '2 months',
        'startup based in the US'
    )
);

projects.push(
    new ProjectModel(
        3,
        'AngularJS + D3JS Dashboard & Back Office Tool',
        [
            activities.integration,
            activities.design,
            activities.programmingFrontEnd,
            activities.programmingBackendAPI
        ],
        'Desktop application for analytics and back office tasks',
        '',
        [
            'Was responsible for layout design, integration with APIs, code to process live data',
            'Custom D3.js charts organized as components',
            'Requirements was to use bootstrap'
        ],
        [
            platforms.chromeDesktop
        ],
        [
            techs.html, techs.scss, techs.javascript, techs.svg, techs.csharp
        ],
        [
            libraries.angular, libraries.jQuery, libraries.cordova, libraries.dotNET
        ],
        new Date('2016-08'),
        [],
        'one backend (me) (TSQL + .NET), one front end (me) (Angular + Cordova)',
        '3 months',
        'eCommerce company based in the US'
    )
);


projects.push(
    new ProjectModel(
        1,
        'Conspector Construction App',
        [
            activities.design, activities.integration, activities.requirementsGathering,
            activities.programmingFrontEnd, activities.devop,
        ],
        'Cloud based tasks and data management application for construction companies',
        '',
        [
            'Designed the UI of the web application starting from user requirements to final mockups',
            'Produced pixel perfect mockups using Illustrator',
            'Implemented the design to create a modern and beautiful front-end application'
        ],
        [
            platforms.chromeDesktop, platforms.firefox, platforms.iosCordova
        ],
        [
            techs.html, techs.less, techs.javascript
        ],
        [
            libraries.angularJS, libraries.materialDesignNG1, libraries.jQuery, libraries.cordova
        ],
        new Date('2014-09'),
        [
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487324621/phil-lgr/conspector-1.png',
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487325898/phil-lgr/conspector-2.jpg',
            'https://res.cloudinary.com/dtsgw3gx6/image/upload/f_auto,q_auto,h_400/v1487324621/phil-lgr/conspector-3.png',
        ],
        'one backend, one full stack and one front end (Cordova, AngularJS, design)',
        '11 months',
        'Construction company in Montreal area'
    )
);


export default projects;
