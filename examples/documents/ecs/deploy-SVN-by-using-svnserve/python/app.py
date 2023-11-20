#!/usr/bin/env python3

import ros_cdk_core as core

from demo.deploy_svn_by_using_svnserve_on_ECS import ECS_SVN_svnserve_CentOS_7


app = core.App()

ECS_SVN_svnserve_CentOS_7(app, "svn-ecs-stack")

app.synth()
