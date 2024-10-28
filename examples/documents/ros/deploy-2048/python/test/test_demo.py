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
        "Description": "Deploy 2048 game through ROS CDK.",
        "Metadata": {
            "ALIYUN::ROS::Interface": {
                "TemplateTags": [
                    "Create by ROS CDK"
                ]
            }
        },
        "ROSTemplateFormatVersion": "2015-09-01",
        "Parameters": {
            "ZoneId": {
                "Type": "String"
            }
        },
        "Resources": {
            "Vpc": {
                "Type": "ALIYUN::ECS::VPC",
                "Properties": {
                    "CidrBlock": "192.168.0.0/16",
                    "EnableIpv6": False
                }
            },
            "SecurityGroup": {
                "Type": "ALIYUN::ECS::SecurityGroup",
                "Properties": {
                    "VpcId": {
                        "Ref": "Vpc"
                    }
                }
            },
            "VSwitch": {
                "Type": "ALIYUN::ECS::VSwitch",
                "Properties": {
                    "CidrBlock": "192.168.0.0/24",
                    "VpcId": {
                        "Ref": "Vpc"
                    },
                    "ZoneId": {
                        "Ref": "ZoneId"
                    }
                }
            },
            "Instance": {
                "Type": "ALIYUN::ECS::Instance",
                "Properties": {
                    "InstanceType": "ecs.c6e.large",
                    "AllocatePublicIP": True,
                    "AutoRenew": "False",
                    "AutoRenewPeriod": 1,
                    "ImageId": "centos_7_8",
                    "InstanceChargeType": "PostPaid",
                    "InternetChargeType": "PayByTraffic",
                    "InternetMaxBandwidthOut": 1,
                    "IoOptimized": "optimized",
                    "Period": 1,
                    "PeriodUnit": "Month",
                    "SecurityGroupId": {
                        "Ref": "SecurityGroup"
                    },
                    "SpotInterruptionBehavior": "Terminate",
                    "SystemDiskCategory": "cloud_essd",
                    "VpcId": {
                        "Ref": "Vpc"
                    },
                    "VSwitchId": {
                        "Ref": "VSwitch"
                    },
                    "ZoneId": {
                        "Ref": "ZoneId"
                    }
                }
            },
            "SecurityGroupIngress": {
                "Type": "ALIYUN::ECS::SecurityGroupIngress",
                "Properties": {
                    "IpProtocol": "tcp",
                    "PortRange": "80/80",
                    "NicType": "intranet",
                    "Priority": 1,
                    "SecurityGroupId": {
                        "Ref": "SecurityGroup"
                    },
                    "SourceCidrIp": "0.0.0.0/0"
                }
            },
            "RunCommand": {
                "Type": "ALIYUN::ECS::RunCommand",
                "Properties": {
                    "CommandContent": "yum install -y httpd wget\nsystemctl start httpd\nwget 'https://computenest-artifacts-cn-hangzhou.oss-cn-hangzhou-internal.aliyuncs.com/1853370294850618/cn-beijing/1697533575326/2048.tgz' -O 2048.tgz\ntar xvf 2048.tgz\nmv 2048/* /var/www/html && rm -rf 2048",
                    "InstanceIds": [
                        {
                            "Ref": "Instance"
                        }
                    ],
                    "Type": "RunShellScript",
                    "Sync": True,
                    "Timeout": 3600
                },
                "DependsOn": [
                    "SecurityGroupIngress"
                ]
            }
        },
        "Outputs": {
            "Url": {
                "Value": {
                    "Fn::Join": [
                        "",
                        [
                            "http://",
                            {
                                "Fn::GetAtt": [
                                    "Instance",
                                    "PublicIp"
                                ]
                            },
                            ":80"
                        ]
                    ]
                }
            }
        }
    }
        self.assertDictContainsSubset(artifact, expect)

    def tearDown(self):
        pass


if __name__ == '__main__':
    unittest.main()