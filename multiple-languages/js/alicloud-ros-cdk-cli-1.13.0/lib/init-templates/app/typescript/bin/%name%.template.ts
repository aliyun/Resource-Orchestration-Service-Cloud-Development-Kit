#!/usr/bin/env node
import * as ros from '@alicloud/ros-cdk-core';
import { %name.PascalCased%Stack } from '../lib/%name%-stack';

const app = new ros.App();
new %name.PascalCased%Stack(app, '%name.PascalCased%Stack');
app.synth();