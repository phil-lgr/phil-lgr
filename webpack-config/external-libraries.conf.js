// indicate to webpack what external lib should be external (i.e. can be imported but won't be bundled)

module.exports = {
    common: [
        {
            name: 'moment',
            importName: 'moment'
        }
    ],
    app: [
        {
            name: 'Modernizr',
            importname: 'Modernizr'
        }
    ],
    website: []
};