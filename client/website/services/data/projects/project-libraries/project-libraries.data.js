import ProjectLibraryModel from './project-library.model';

let libraries = {
    angular: new ProjectLibraryModel(1, 'Angular', require('../../../../images/logos/angular.svg')),
    angularJS: new ProjectLibraryModel(2, 'AngularJS', require('../../../../images/logos/angularjs.png')),
    jQuery: new ProjectLibraryModel(3, 'jQuery', require('../../../../images/logos/jquery.png')),
    cordova: new ProjectLibraryModel(4, 'Cordova/PhoneGap', require('../../../../images/logos/cordova.png')),
    materialDesignNG1: new ProjectLibraryModel(5, 'Material Design (AngularJS 1.x.x)', null),
    firebase: new ProjectLibraryModel(6, 'Firebase PaaS', null),
    dotNET: new ProjectLibraryModel(7, '.NET', null)
};

export default libraries;