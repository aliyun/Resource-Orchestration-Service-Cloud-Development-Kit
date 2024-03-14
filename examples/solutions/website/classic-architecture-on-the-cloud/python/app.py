#!/usr/bin/env python3

import ros_cdk_core as core

from demo.classic_architecture_on_the_cloud import ClassicArchitectureOnTheCloudStack


app = core.App()

ClassicArchitectureOnTheCloudStack(app, "classic-architecture-on-the-cloud-created-by-cdk")

app.synth()
