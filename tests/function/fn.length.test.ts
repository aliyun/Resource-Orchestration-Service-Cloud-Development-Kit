import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.length'

test('fn.length.', () => {
    const app = new ros.App();
    const stack = new testStack.FnLengthTest(app, 'MyTestStack');
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
                    'ZoneIds': {
                        Type: 'Json',
                        Default: ['cn-beijing-a', 'cn-beijing-b', 'cn-beijing-c']
                    }
                },
                Outputs: {
                    'Length': {
                        'Value': {'Fn::Length': {'Ref': 'ZoneIds'}}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});