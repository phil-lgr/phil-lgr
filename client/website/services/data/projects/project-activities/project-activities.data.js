import ProjectActivityModel from './project-activity.model';

let activities = {
    integration: new ProjectActivityModel(
        '1',
        'Integration',
        'Implementation of the UI/UX design into code.'
    ),
    programmingFrontEnd: new ProjectActivityModel(
        '2',
        'Business Logic Programming (Front End)',
        `General programming, implementation of code to fulfill business logic requirements. 
        (e.g. data processing/filtering/grouping, front end security, client side authentication, routing policy, caching behavior, 
        local storage, offline/service-worker logic, ...).`
    ),
    devop: new ProjectActivityModel(
        '3',
        'DevOp',
        `Maintain, automate and improve the deployment process 
        (e.g. build, test, host, cloud services configuration, ...).`
    ),
    design: new ProjectActivityModel(
        '4',
        'UI/UX Design',
        'Create original UI/UX'
    ),
    requirementsGathering: new ProjectActivityModel(
        '5',
        'Requirements Gathering',
        'Analysis of stakeholders, application goals, creation of the information architecture, ...'
    ),
    programmingBackendAPI: new ProjectActivityModel(
        '6',
        'Backend Programming (API)',
        `Implementation of server side code to fulfill business logic requirements for endpoints.`
    ),
};

export default activities;