import ProjectPlatformModel from './project-platform.model';

let platforms = {
    ie10:               new ProjectPlatformModel(1, 'IE10'),
    ie11:               new ProjectPlatformModel(2, 'IE11'),
    edge:               new ProjectPlatformModel(3, 'Edge'),
    firefox:            new ProjectPlatformModel(4, 'Firefox'),
    chromeDesktop:      new ProjectPlatformModel(5, 'Chrome (desktop)'),
    chromeAndroid:      new ProjectPlatformModel(6, 'Chrome (android)'),
    chromeiOS:          new ProjectPlatformModel(7, 'Chrome (iOS)'),
    safariDesktop:      new ProjectPlatformModel(8, 'Safari (desktop'),
    safariIOS:          new ProjectPlatformModel(9, 'Safari (iOS)'),
    iosCordova:         new ProjectPlatformModel(10, 'Cordova/PhoneGap (iOS)'),
    iosNative:          new ProjectPlatformModel(11, 'iOS (native)'),
    androidCordova:     new ProjectPlatformModel(12, 'Cordova/PhoneGap (Android)'),
    androidNative:      new ProjectPlatformModel(13, 'Android (native)'),
};

export default platforms;