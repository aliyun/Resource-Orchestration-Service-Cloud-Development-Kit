#!/usr/bin/env node

const ros = require('@alicloud/ros-cdk-core');
const { %name.PascalCased%Stack } = require('../lib/%name%-stack');

const app = new ros.App();
new %name.PascalCased%Stack(app, '%name.PascalCased%Stack');
app.synth();
