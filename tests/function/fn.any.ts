import * as core from '@alicloud/ros-cdk-core'

export class FnAnyTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        new core.RosOutput(this, 'Result', {
            value: core.Fn.any([1, 0, 1])
        })
    }
}