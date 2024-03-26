const { expect, matchTemplate, MatchStyle } = require('@alicloud/ros-cdk-assert');
const ros = require('@alicloud/ros-cdk-core');
const Demo = require('../lib/demo-stack');

test('Stack with version.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new Demo.DemoStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
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
              "VpcName": "test-ros-cdk-javascript"
            }
          },
          "vsw-from-ros-cdk": {
            "Type": "ALIYUN::ECS::VSwitch",
            "Properties": {
              "CidrBlock": "10.0.0.0/16",
              "VpcId": {
                "Ref": "vpc-from-ros-cdk"
              },
              "ZoneId": "cn-hangzhou-i",
              "VSwitchName": "test-ros-cdk-javascript"
            }
          }
        }
      }, MatchStyle.EXACT))
});
