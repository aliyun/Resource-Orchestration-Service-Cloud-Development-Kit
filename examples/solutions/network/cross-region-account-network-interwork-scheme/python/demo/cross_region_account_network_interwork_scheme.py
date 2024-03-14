import ros_cdk_core as core


class CrossRegionAccountNetworkInterworkSchemeStack(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        core.RosInfo(self, core.RosInfo.description, {
            "en": "Cross-regional cross-account network interoperability scheme",
            "zh-cn": "跨地域跨账号网络互通方案"
        })
