import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './engineNamespace.stack';
import {EngineNamespaceExample} from "./engineNamespace.stack";

test('EngineNamespaceExample.', () => {
    const app = new ros.App();
    // WHEN
    const stack = new testStack.EngineNamespaceExample(app, 'MyTestStack');
    // THEN
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
                Resources: {
                    'Namespace': {
                        Type: 'ALIYUN::MSE::EngineNamespace',
                        Properties: {
                            InstanceId: 'testInstanceId',
                            Name: 'testName',
                            Desc: 'testDesc',
                            Id: 'testId',
                        },
                    },
                },
            },
            MatchStyle.EXACT,
        ),
    );
});