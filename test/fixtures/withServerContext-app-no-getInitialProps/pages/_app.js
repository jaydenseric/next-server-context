'use strict';

const { default: App } = require('next/app');
const withServerContext = require('../../../../public/withServerContext.js');

module.exports = withServerContext(App);
