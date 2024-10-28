import ros_cdk_core as core
import ros_cdk_ecs as ecs


class DemoStack(core.Stack):

    def __init__(self, scope: core.Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # The code that defines your stack goes here
        core.RosInfo(self, core.RosInfo.description, "Deploy 2048 game through ROS CDK.")

        zone_id = core.RosParameter(self, "ZoneId", type=core.RosParameterType.STRING)

        vpc = ecs.Vpc(self, "Vpc", ecs.VPCProps(cidr_block="192.168.0.0/16"))

        sg = ecs.SecurityGroup(self, "SecurityGroup", ecs.SecurityGroupProps(vpc_id=vpc.ref))

        vsw = ecs.VSwitch(self, "VSwitch", ecs.VSwitchProps(
            cidr_block='192.168.0.0/24',
            vpc_id=vpc.ref,
            zone_id=zone_id,
        ))

        instance = ecs.Instance(self, "Instance", ecs.InstanceProps(
            vpc_id=vpc.ref,
            instance_type="ecs.c6e.large",
            image_id="centos_7_8",
            security_group_id=sg.ref,
            v_switch_id=vsw.ref,
            zone_id=zone_id,
            system_disk_category="cloud_essd",
            io_optimized="optimized"
        ))

        sg_ingress = ecs.SecurityGroupIngress(self, "SecurityGroupIngress", ecs.SecurityGroupIngressProps(
            security_group_id=sg.ref,
            port_range="80/80",
            ip_protocol="tcp",
            source_cidr_ip="0.0.0.0/0",
            nic_type="intranet"
        ))

        run_command = ecs.RunCommand(self, "RunCommand", ecs.RunCommandProps(
            instance_ids=[instance.ref],
            command_content= "yum install -y httpd wget\nsystemctl start httpd\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\ntar xvf 2048.tgz\nmv 2048/* /var/www/html && rm -rf 2048",
            type="RunShellScript",
            timeout=3600,
            sync=True
        ))
        run_command.add_dependency(sg_ingress)

        core.RosOutput(self, "Url", value="http://{}:80".format(instance.attr_public_ip.to_string()))
