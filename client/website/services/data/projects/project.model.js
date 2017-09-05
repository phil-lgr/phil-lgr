class ProjectModel {
    constructor(id,
                name = 'default name',
                activities = [], // ProjectActivityModel[]
                shortDescription = '',
                longDescription = '',
                highlights = [], // string[]
                platforms = [], // ProjectPlatformModel
                languages = [], // ProjectProjectTechModel
                libraries = [], // ProjectLibraryModel
                releaseDate = Date.now(),
                imagesURLs = [],
                team = 'one front end',
                duration = '',
                client = 'N/A') {
        this.id = id;
        this.name = name;
        this.activities = activities;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.highlights = highlights;
        this.languages = languages;
        this.libraries = libraries;
        this.platforms = platforms;
        this.releaseDate = releaseDate;
        this.imagesURLs = imagesURLs;
        this.team = team;
        this.duration = duration;
        this.client = client;
    }

}

export default ProjectModel;