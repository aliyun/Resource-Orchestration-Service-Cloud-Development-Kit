#!/usr/bin/env node

const ros = require('@alicloud/ros-cdk-core');
const { DemoStack } = require('../lib/demo-stack');

const app = new ros.App();
new DemoStack(app, 'DemoStack');
app.synth();
