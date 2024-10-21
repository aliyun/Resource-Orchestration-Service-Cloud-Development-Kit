import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './ros.rule'

test('ros-rule.', () => {
    const app = new ros.App();
    const stack = new testStack.RosRuleTest(app, 'MyTestStack');
    expectCDK(stack).to(
        matchTemplate(
            {
                "Metadata": {
                    "ALIYUN::ROS::Interface": {
                        "TemplateTags": [
                            "Create by ROS CDK"
                        ]
                    }
                },
                "ROSTemplateFormatVersion": "2015-09-01",
                "Parameters": {
                    "Env": {
                        "Type": "String",
                        "Default": "prod",
                        "AllowedValues": [
                            "prod",
                            "pre"
                        ]
                    },
                    "InternetMaxBandwidthOut": {
                        "Type": "Number",
                        "Default": 0,
                        "MaxValue": 100,
                        "MinValue": 0
                    },
                    "InstanceChargeType": {
                        "Type": "String",
                        "Default": "PostPaid",
                        "AllowedValues": [
                            "PostPaid",
                            "PrePaid"
                        ]
                    }
                },
                "Rules": {
                    "PublicNet": {
                        "RuleCondition": {
                            "Fn::Equals": [
                                {
                                    "Ref": "Env"
                                },
                                "prod"
                            ]
                        },
                        "Assertions": {
                            "Assert": {
                                "Fn::Equals": [
                                    {
                                        "Ref": "InternetMaxBandwidthOut"
                                    },
                                    1
                                ]
                            },
                            "AssertDescription": "ECS instance should be intranet when the environment is prod."
                        }
                    },
                    "ChargeType": {
                        "RuleCondition": {
                            "Fn::Equals": [
                                {
                                    "Ref": "Env"
                                },
                                "pre"
                            ]
                        },
                        "Assertions": {
                            "Assert": {
                                "Fn::Equals": [
                                    {
                                        "Ref": "InstanceChargeType"
                                    },
                                    "PrePaid"
                                ]
                            }
                        }
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});