import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.sub'

test('fn.sub.', () => {
    const app = new ros.App();
    const stack = new testStack.FnSubTest(app, 'MyTestStack');
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
                    'CommonName': {
                        Type: 'String',
                        Default: 'test',
                    },
                },
                Outputs: {
                    'Output1': {
                        'Value': {'Fn::Sub': 'hello, ${CommonName}'}
                    },
                    'Output2': {
                        'Value': {'Fn::Sub': ['bye, ${CommonName}', {CommonName: {'Ref': 'CommonName'}}]}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});