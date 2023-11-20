#!/usr/bin/env node
import * as ros from '@alicloud/ros-cdk-core';
import { DemoStack } from '../lib/demo-stack';

const app = new ros.App({outdir: './cdk.out'});
new DemoStack(app, 'DemoStack');
app.synth();