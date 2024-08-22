import * as core from '@alicloud/ros-cdk-core'

export class FnCidrTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        new core.RosOutput(this, 'Result', {
            value: core.Fn.cidr('192.168.0.0/24', 6, 5)
        })
    }
}