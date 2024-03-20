#!/usr/bin/env python3

import ros_cdk_core as core
from demo.data_transmission_from_ecs_to_rds import DataTransmissionFromEcsToRdsStack


app = core.App()

DataTransmissionFromEcsToRdsStack(app, "data-transmission-from-ecs-to-rds-created-by-cdk")

app.synth()
