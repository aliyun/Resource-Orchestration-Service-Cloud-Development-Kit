import * as core from '@alicloud/ros-cdk-core'

export class FnIndentTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)
        const p1 = new core.RosParameter(this, 'P1', {
            type: core.RosParameterType.STRING,
            defaultValue: '[client]\nport=3306\npassword=123'
        })

        new core.RosOutput(this, 'Output1', {
            value: p1
        })

        new core.RosOutput(this, 'Output2', {
            value: core.Fn.sub('data:\n${p1}', {p1: core.Fn.indent(p1, 1)})
        })

    }
}