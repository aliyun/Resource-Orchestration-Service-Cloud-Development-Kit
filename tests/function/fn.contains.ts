import * as core from '@alicloud/ros-cdk-core'

export class FnContainsTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        new core.RosOutput(this, 'Result', {
            value: core.Fn.contains([1, 2, 3], 3)
        })
    }
}