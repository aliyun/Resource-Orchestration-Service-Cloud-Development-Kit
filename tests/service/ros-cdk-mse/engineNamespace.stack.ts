import * as ros from '@alicloud/ros-cdk-core'
import { EngineNamespace } from '@alicloud/ros-cdk-mse';

export class EngineNamespaceExample extends ros.Stack {
    constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
        super(scope, id, props);

        new EngineNamespace(this, 'Namespace', {
            instanceId: 'testInstanceId',
            name: 'testName',
            desc: 'testDesc',
            identity: 'testId'
        });
    }
}
