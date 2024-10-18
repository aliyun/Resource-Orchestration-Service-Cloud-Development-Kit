import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './ros.parameter'
test('ros-parameter.', () => {
    const app = new ros.App();
    const stack = new testStack.RosParameterTest(app, 'MyTestStack');
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
                        ],
                        "AssociationProperty": "ALIYUN::CEN::Instance::CenId",
                        "Required": true,
                        "Placeholder": {
                            "en": "Environment",
                            "zh": "环境"
                        }
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});