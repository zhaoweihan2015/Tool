require.config({
    baseUrl: './js/',
    paths: {
        "jquery": 'jquery.min',
        "bootstrap": 'bootstrap.min'
    },
    shim: {
        "bootstrap": {
            deps: ['jquery'],
            exports: 'bootstrap'
        }
    }
})