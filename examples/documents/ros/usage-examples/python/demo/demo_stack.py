import ros_cdk_core as core
import ros_cdk_ecs as ecs


class DemoStack(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # The code that defines your stack goes here
        ecs.Vpc(self, "VPC", ecs.VPCProps(
            cidr_block='10.0.0.0/8',
            vpc_name='test-ros-cdk',
            description='This is ros python cdk test'
        ))