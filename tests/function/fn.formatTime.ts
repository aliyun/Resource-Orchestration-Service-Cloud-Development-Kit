import * as core from '@alicloud/ros-cdk-core'

export class FnFormatTimeTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        new core.RosOutput(this, 'Result', {
            value: core.Fn.formatTime('%Y-%m-%d %H:%M:%S', 'Asia/Shanghai')
        })
    }
}