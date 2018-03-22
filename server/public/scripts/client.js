let kittyFoo = angular.module('kittyFoo', []);

kittyFoo.controller('xboxController', function(){
    console.log('controller has started');
    let josh = this;

    josh.ballin = "I love fortnite";
});