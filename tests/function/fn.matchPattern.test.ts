import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.matchPattern'

test('fn.matchPattern.', () => {
    const app = new ros.App();
    const stack = new testStack.FnMatchPatternTest(app, 'MyTestStack');
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
                        'Value': {'Fn::MatchPattern': ['[a-z]+', '12b']}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});