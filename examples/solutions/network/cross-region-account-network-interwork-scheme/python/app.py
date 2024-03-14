#!/usr/bin/env python3

import ros_cdk_core as core

from demo.cross_region_account_network_interwork_scheme import CrossRegionAccountNetworkInterworkSchemeStack


app = core.App()

CrossRegionAccountNetworkInterworkSchemeStack(app, "cross-region-account-network-interwork-scheme-created-by-cdk")

app.synth()
