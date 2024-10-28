package com.myorg;

import com.aliyun.ros.cdk.core.*;
import com.aliyun.ros.cdk.ecs.*;

import java.util.ArrayList;
import java.util.Arrays;

public class DemoStack extends Stack {
    public DemoStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public DemoStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        // The code that defines your stack goes here
        RosInfo.setDescription("Deploy 2048 game through ROS CDK.");
        RosParameter zoneId = RosParameter.Builder.create(this, "ZoneId")
                .type(RosParameterType.STRING)
                .build();

        Vpc vpc = Vpc.Builder.create(this, "Vpc")
                .cidrBlock("192.168.0.0/16")
                .build();

        SecurityGroup securityGroup = SecurityGroup.Builder.create(this, "SecurityGroup")
                .vpcId(vpc.getRef())
                .build();

        VSwitch vSwitch = VSwitch.Builder.create(this, "VSwitch")
                .cidrBlock("192.168.0.0/24")
                .zoneId(zoneId.getValue())
                .vpcId(vpc.getRef())
                .build();

        Instance instance = Instance.Builder.create(this, "Instance")
                .vpcId(vpc.getRef())
                .vSwitchId(vSwitch.getRef())
                .securityGroupId(securityGroup.getRef())
                .zoneId(zoneId.getValue())
                .instanceType("ecs.c6e.large")
                .imageId("centos_7_8")
                .systemDiskCategory("cloud_essd")
                .ioOptimized("optimized")
                .build();

        SecurityGroupIngress securityGroupIngress = SecurityGroupIngress.Builder.create(this, "SecurityGroupIngress")
                .ipProtocol("tcp")
                .portRange("80/80")
                .sourceCidrIp("0.0.0.0/0")
                .securityGroupId(securityGroup.getRef())
                .nicType("intranet")
                .build();

        RunCommand runCommand = RunCommand.Builder.create(this, "RunCommand")
                .instanceIds(new ArrayList<>(Arrays.asList(instance.getRef())))
                .type("RunShellScript")
                .sync(true)
                .timeout(3600)
                .commandContent("yum install -y httpd wget\nsystemctl start httpd\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\ntar xvf 2048.tgz\nmv 2048/* /var/www/html && rm -rf 2048")
                .build();
        runCommand.addDependency(securityGroupIngress);

        RosOutput.Builder.create(this, "Url")
                .value("http://" + instance.getAttrPublicIp().toString() +":80")
                .build();
    }
}
