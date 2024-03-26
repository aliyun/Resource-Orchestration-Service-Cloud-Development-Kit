package com.myorg;

import com.aliyun.ros.cdk.core.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.junit.Test;
import com.fasterxml.jackson.databind.node.ArrayNode;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class DemoTest {
    private final static ObjectMapper JSON =
        new ObjectMapper().configure(SerializationFeature.INDENT_OUTPUT, true);

    @Test
    public void testStack() throws IOException {
        App app = new App();
        DemoStack stack = new DemoStack(app, "test");

        // synthesize the stack to a ROS template and compare against
        // a checked-in JSON file.
        JsonNode actual = JSON.valueToTree(app.synth().getStackArtifact(stack.getArtifactId()).getTemplate());
        ObjectNode expected = new ObjectMapper().createObjectNode();
        expected.put("ROSTemplateFormatVersion", "2015-09-01");
        ObjectNode metadata = expected.putObject("Metadata");
        ObjectNode rosInterface = metadata.putObject("ALIYUN::ROS::Interface");
        ArrayNode templateTags = rosInterface.putArray("TemplateTags");
        templateTags.add("Create by ROS CDK");
        ObjectNode resources = expected.putObject("Resources");

        ObjectNode vpc = resources.putObject("vpc-from-ros-cdk");
        vpc.put("Type","ALIYUN::ECS::VPC");
        ObjectNode vpcProperties = vpc.putObject("Properties");
        vpcProperties.put("CidrBlock","10.0.0.0/8");
        vpcProperties.put("Description","This is ros java cdk test");
        vpcProperties.put("EnableIpv6",false);
        vpcProperties.put("VpcName","TestJavaCDK");

        ObjectNode vsw = resources.putObject("vsw-from-ros-cdk");
        vsw.put("Type","ALIYUN::ECS::VSwitch");
        ObjectNode vswProperties = vsw.putObject("Properties");
        vswProperties.put("CidrBlock","10.0.0.0/16");
        ObjectNode vpcId = vswProperties.putObject("VpcId");
        vpcId.put("Ref","vpc-from-ros-cdk");
        vswProperties.put("ZoneId","cn-hangzhou-i");
        vswProperties.put("VSwitchName","TestJavaCDK");

        assertEquals(expected, actual);
    }
}