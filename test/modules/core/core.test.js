const path = require('path');
const { expect } = require('chai');
const { describe, it } = require('mocha');
const freeCore = require('free-be-core');

const app = require(path.resolve('app.js'));

/**
 * @description Test core module
 * 
 **/
describe('core', () => {
    it('should be an object', () => {
        expect(freeCore).to.be.an('object');
    });

    it('should have lifecycle hooks', () => {
        expect(freeCore).has.property('onBegin');
        expect(freeCore).has.property('onModulesReady');
        expect(freeCore).has.property('onAppReady');
        expect(freeCore).has.property('onRoutersReady');
        expect(freeCore).has.property('onLoadRouters');
        expect(freeCore).has.property('loadModules');
        expect(freeCore).has.property('loadRouters');
    });
})

/**
 * @description Test app
 * 
 * **/
describe('app', () => {
    it('app has modules loaded', () => {
        expect(app.modules).to.be.an('object');
        expect(app.modules).has.property('account');
        expect(app.modules).has.property('core-modules');
        expect(app.modules).has.property('db');
    })
})
