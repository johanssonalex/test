/// <reference path="../../scripts/typings/durandal/durandal.d.ts" />
/// <reference path="../../scripts/typings/durandal/durandal-1.x.d.ts" />


import router = module('plugins/router');
import app = module('durandal/app');

    class Shell
    {
        router = router;
        public search()
        {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        }
        public activate()
        {
            router.map([
                { route: '', title: 'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true },
            ]).buildNavigationModel();


            return router.activate();
        }
    }

    // Magic happens here:
    export = Shell;



