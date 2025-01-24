import {expect as expectCDK, matchTemplate, MatchStyle} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import {QueueExample} from "./queue.stack";

test('From queue arn test.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new QueueExample(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(
        matchTemplate(
            {
                "Parameters": {
                    "QueueArn": {
                        "Type": "String",
                        "Default": "acs:mns:cn-beijing:1754580903499898:/queues/cdk-test-2"
                    }
                },
                "Metadata": {
                    "ALIYUN::ROS::Interface": {
                        "TemplateTags": [
                            "Create by ROS CDK"
                        ]
                    }
                },
                "ROSTemplateFormatVersion": "2015-09-01",
                "Outputs": {
                    "QueueName": {
                        "Value": "cdk-test"
                    },
                    "QueueUrl": {
                        "Value": "http://1754580903499898.mns.cn-beijing.aliyuncs.com/queues/cdk-test"
                    },
                    "ArnWithSlash": {
                        "Value": "acs:mns:cn-beijing:1754580903499898:/queues/cdk-test"
                    },
                    "QueueName2": {
                        "Value": {
                            "Fn::Select": [
                                2,
                                {
                                    "Fn::Split": [
                                        "/",
                                        {
                                            "Fn::Select": [
                                                4,
                                                {
                                                    "Fn::Split": [
                                                        ":",
                                                        {
                                                            "Ref": "QueueArn"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    },
                    "QueueUrl2": {
                        "Value": {
                            "Fn::Join": [
                                "",
                                [
                                    "http://",
                                    {
                                        "Fn::Select": [
                                            3,
                                            {
                                                "Fn::Split": [
                                                    ":",
                                                    {
                                                        "Ref": "QueueArn"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    ".mns.",
                                    {
                                        "Fn::Select": [
                                            2,
                                            {
                                                "Fn::Split": [
                                                    ":",
                                                    {
                                                        "Ref": "QueueArn"
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    ".aliyuncs.com/queues/",
                                    {
                                        "Fn::Select": [
                                            2,
                                            {
                                                "Fn::Split": [
                                                    "/",
                                                    {
                                                        "Fn::Select": [
                                                            4,
                                                            {
                                                                "Fn::Split": [
                                                                    ":",
                                                                    {
                                                                        "Ref": "QueueArn"
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            ]
                        }
                    },
                    "ArnWithSlash2": {
                        "Value": {
                            "Ref": "QueueArn"
                        }
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});