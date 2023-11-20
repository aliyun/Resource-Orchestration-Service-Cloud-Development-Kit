#!/usr/bin/env python3
import unittest
import ros_cdk_core as core
from demo.demo_stack import DemoStack


class TestStack(unittest.TestCase):
    def setUp(self):
        pass

    def test_stack(self):
        app = core.App()
        stack = DemoStack(app, "testdemo")
        artifact = app.synth().get_stack_artifact(stack.artifact_id).template
        expect = {
            "Metadata": {
                "ALIYUN::ROS::Interface": {
                    "TemplateTags": [
                        "Create by ROS CDK"
                    ]
                }
            },
            "ROSTemplateFormatVersion": "2015-09-01",
            "Resources": {
                "VPC": {
                    "Type": "ALIYUN::ECS::VPC",
                    "Properties": {
                        "CidrBlock": "10.0.0.0/8",
                        "Description": "This is ros python cdk test",
                        "EnableIpv6": False,
                        "VpcName": "test-ros-cdk"
                    }
                }
            }
        }
        self.assertDictEqual(artifact, expect)

    def tearDown(self):
        pass


if __name__ == '__main__':
    unittest.main()