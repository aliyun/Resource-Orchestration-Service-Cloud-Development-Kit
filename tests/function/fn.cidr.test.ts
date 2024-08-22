import {expect as expectCDK, matchTemplate, MatchStyle, StackInspector} from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './fn.cidr'

test('fn.cidr.', () => {
    const app = new ros.App();
    const stack = new testStack.FnCidrTest(app, 'MyTestStack');
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
                        'Value': {'Fn::Cidr': ['192.168.0.0/24', 6, 5]}
                    }
                }
            },
            MatchStyle.EXACT,
        ),
    );
});