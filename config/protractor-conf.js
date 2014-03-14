exports.config = {
    allScriptsTimeout:11000,

    specs:[
        '../test/e2e/*.js'
    ],

    capabilities:{
        'browserName':'chrome'
    },

    baseUrl:'http://localhost:8000/app/',

    framework:'jasmine',

    jasmineNodeOpts:{
        defaultTimeoutInterval:30000,
        isVerbose:false,
        showColors:true,
        includeStackTrace:true
    },

    onPrepare:function () {
        // The require statement must be down here, since jasmine-reporters
        // needs jasmine to be in the global and protractor does not guarantee
        // this until inside the onPrepare function.
        require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('logs/', true, true, 'myApp-'));
    }
};
