import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.index'

test('fn.index.', () => {
    const app = new ros.App();
    const stack = new testStack.FnIndexTest(app, 'MyTestStack');
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
                    'ZoneId': {
                        Type: 'String',
                        Default: 'cn-beijing-b',
                    },
                    'ZoneIds': {
                        Type: 'Json',
                        Default: ['cn-beijing-a', 'cn-beijing-b', 'cn-beijing-c']
                    }
                },
                Outputs: {
                    'Index': {
                        'Value': {'Fn::Index': [{'Ref': 'ZoneId'}, {'Ref': 'ZoneIds'}]}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});