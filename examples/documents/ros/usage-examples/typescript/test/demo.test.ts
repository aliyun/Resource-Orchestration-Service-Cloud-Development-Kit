import {expect as expectCDK, matchTemplate, MatchStyle} from '@alicloud/ros-cdk-assert';
import * as ros from '@alicloud/ros-cdk-core';
import * as Demo from '../lib/demo-stack';

test('Stack with version.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new Demo.DemoStack(app, 'MyDemoStack');
    // THEN
    expectCDK(stack).to(
        matchTemplate(
            {
                "Description": "This is the simple ros cdk app example.",
                "Metadata": {
                    "ALIYUN::ROS::Interface": {
                        "TemplateTags": [
                            "Create by ROS CDK"
                        ]
                    }
                },
                "ROSTemplateFormatVersion": "2015-09-01",
                "Resources": {
                    "vpc-from-ros-cdk": {
                        "Type": "ALIYUN::ECS::VPC",
                        "Properties": {
                            "CidrBlock": "10.0.0.0/8",
                            "Description": "This is ros cdk test",
                            "EnableIpv6": false,
                            "VpcName": "test-ros-cdk"
                        }
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});