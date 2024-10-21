import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './ros.output'
test('ros-output.', () => {
    const app = new ros.App();
    const stack = new testStack.RosOutputTest(app, 'MyTestStack');
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
                    "Password": {
                        "Type": "String",
                        "Default": "JustForTest"
                    }
                },
                "Outputs": {
                    "MyPassword": {
                        "Value": {
                            "Ref": "Password"
                        },
                        "Label": "密码",
                        "NoEcho": true
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});