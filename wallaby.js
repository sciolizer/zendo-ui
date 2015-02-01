module.exports = {
    'files': [
        'src/*.js'
    ],
    'tests': [
        'test/*.js'
    ],
    env: {
        type: 'node',
        params: {
            runner: '--harmony --harmony_arrow_functions',
            //env: 'PARAM1=true;PARAM2=false'
        }
    }
};
