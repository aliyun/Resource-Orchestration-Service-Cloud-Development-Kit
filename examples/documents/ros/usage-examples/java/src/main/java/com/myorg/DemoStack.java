package com.myorg;

import com.aliyun.ros.cdk.core.*;
import com.aliyun.ros.cdk.ecs.*;

public class DemoStack extends Stack {
    public DemoStack(final Construct scope, final String id) {
        this(scope, id, null);
    }

    public DemoStack(final Construct scope, final String id, final StackProps props) {
        super(scope, id, props);

        // The code that defines your stack goes here

        Vpc vpc = Vpc.Builder.create(this, "vpc-from-ros-cdk").vpcName("TestJavaCDK").description("This is ros java cdk test").
                cidrBlock("10.0.0.0/8").build();

        VSwitch vsw = VSwitch.Builder.create(this, "vsw-from-ros-cdk").vSwitchName("TestJavaCDK").zoneId("cn-hangzhou-i").
                cidrBlock("10.0.0.0/16").vpcId(vpc.getRef()).build();
    }
}