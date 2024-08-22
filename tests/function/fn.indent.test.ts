import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.indent'

test('fn.indent.', () => {
    const app = new ros.App();
    const stack = new testStack.FnIndentTest(app, 'MyTestStack');
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
                Parameters: {
                    'P1': {
                        Type: 'String',
                        Default: '[client]\nport=3306\npassword=123',
                    },
                },
                Outputs: {
                    'Output1': {
                        'Value': {'Ref': 'P1'}
                    },
                    'Output2': {
                        'Value': {'Fn::Sub': ['data:\n${p1}', {'p1': {'Fn::Indent': [{'Ref': 'P1'}, 1]}}]}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});