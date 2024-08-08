import * as core from '@alicloud/ros-cdk-core'

export class FnEachMemberInTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        new core.RosOutput(this, 'Result', {
            value: core.Fn.eachMemberIn([1, 2, 3], [1, 2, 3, 3, 4])
        })
    }
}