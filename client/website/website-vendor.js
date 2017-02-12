import '../../node_modules/normalize.css/normalize.css';

class Hello {
    constructor() {

    }

    static phil() {
        return _.forEach(s => {
            console.log(s)
        }, ['phil', 'hey'])
    }

    static why() {
        return 'why'
    }


}

console.log(Hello.phil());


angular.module('app');