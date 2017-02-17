class ProjectLibraryModel {
    constructor(id,
                name = 'default name',
                logoURL = null) {
        this.id = id;
        this.name = name;
        this.logoURL = logoURL;
    }

}

export default ProjectLibraryModel;