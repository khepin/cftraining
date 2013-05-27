describe("CRMFactory", function() {
    it("is a company", function() {
        var cf = new CRMFactory();
        expect(cf.getType()).toBe('company');
    });

    it("has an employee named Sebastien Armand", function(){
        var cf = new CRMFactory();
        expect(cf.isEmployee('sebastien.armand')).toBe(true);
    });

    it("does not have an employee named Meow Cat", function(){
        var cf = new CRMFactory();
        expect(cf.isEmployee('meow.cat')).toBe(false);
    });

    it("has a whole list of employees", function(){
        var cf = new CRMFactory();
        // Note how intuitive it is in JavaScript to test if something is an array!!!
        // I mean ... seriously...
        expect(toString.call(cf.getEmployees())).toBe('[object Array]');
    });

});



























/**
 * Boiler plate code to run the tests described above
 */


(function() {
    var jasmineEnv = jasmine.getEnv();
    jasmineEnv.updateInterval = 250;

    /**
    Create the `HTMLReporter`, which Jasmine calls to provide results of each spec and each suite. The Reporter is responsible for presenting results to the user.
    */
    var htmlReporter = new jasmine.HtmlReporter();
    jasmineEnv.addReporter(htmlReporter);

    /**
    Delegate filtering of specs to the reporter. Allows for clicking on single suites or specs in the results to only run a subset of the suite.
    */
    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec);
    };

    /**
    Run all of the tests when the page finishes loading - and make sure to run any previous `onload` handler

    ### Test Results

    Scroll down to see the results of all of these specs.
    */
    var currentWindowOnload = window.onload;
    window.onload = function() {
        if (currentWindowOnload) {
          currentWindowOnload();
        }

        execJasmine();
    };

    function execJasmine() {
    jasmineEnv.execute();
    }
})();