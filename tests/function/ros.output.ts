import * as core from '@alicloud/ros-cdk-core'

export class RosOutputTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)
        const password = new core.RosParameter(this, 'Password', {
            type: core.RosParameterType.STRING,
            defaultValue: 'JustForTest',
        })

        new core.RosOutput(this, 'MyPassword', {
            value: password.value,
            noEcho: true,
            label: '密码',
        })
    }
}