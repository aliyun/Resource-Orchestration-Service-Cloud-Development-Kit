#!/usr/bin/env python3

import ros_cdk_core as core

from demo.demo_stack import DemoStack


app = core.App()

DemoStack(app, "demo")

app.synth()
