import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.formatTime'

test('fn.formatTime.', () => {
    const app = new ros.App();
    const stack = new testStack.FnFormatTimeTest(app, 'MyTestStack');
    expectCDK(stack).to(
        matchTemplate(
            {
                ROSTemplateFormatVersion: '2015-09-01',
                Metadata: {
                    'ALIYUN::ROS::Interface': {
                        'TemplateTags': [
                            'Create by ROS CDK'
                        ]
                    }
                },
                Outputs: {
                    'Result': {
                        'Value': {'Fn::FormatTime': ['%Y-%m-%d %H:%M:%S', 'Asia/Shanghai']}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});