#!/usr/bin/env python3

import ros_cdk_core as core

from %name.PythonModule%.%name.PythonModule%_stack import %name.PascalCased%Stack


app = core.App()

%name.PascalCased%Stack(app, "%name.StackName%")

app.synth()
