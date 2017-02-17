import ProjectTechModel from './project-tech.model';

let techs = {
    html:       new ProjectTechModel(1, 'HTML'),
    javascript: new ProjectTechModel(2, 'JavaScript'),
    typescript: new ProjectTechModel(3, 'TypeScript'),
    csharp:     new ProjectTechModel(4, 'C#'),
    scss:       new ProjectTechModel(5, 'SASS/SCSS'),
    less:       new ProjectTechModel(6, 'LESS'),
    svg:        new ProjectTechModel(7, 'SVG'),
    css:        new ProjectTechModel(8, 'CSS'),
    java:       new ProjectTechModel(9, 'Java'),
};

export default techs;