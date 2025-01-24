import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './ros.conditions'

test('ros-conditions.', () => {
    const app = new ros.App();
    const stack = new testStack.RosConditionsTest(app, 'MyTestStack');
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
                    "WhetherCreateVpc": {
                        "Type": "Boolean",
                        "Default": true
                    }
                },
                "Resources": {
                    "Vpc": {
                        "Type": "ALIYUN::ECS::VPC",
                        "Condition": "CreateVpc"
                    }
                },
                "Conditions": {
                    "CreateVpc": {
                        "Fn::Equals": [
                            {
                                "Ref": "WhetherCreateVpc"
                            },
                            true
                        ]
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});