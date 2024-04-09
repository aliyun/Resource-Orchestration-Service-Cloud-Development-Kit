import * as core from '@alicloud/ros-cdk-core'

export class FnSubTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)
        const commonName = new core.RosParameter(this, 'CommonName', {
            type: core.RosParameterType.STRING,
            defaultValue: 'test'
        })

        const output1 = new core.RosOutput(this, 'Output1', {
            value: core.Fn.sub('hello, ${CommonName}')
        })

        const output2 = new core.RosOutput(this, 'Output2', {
            value: core.Fn.sub('bye, ${CommonName}', {
                CommonName: commonName
            })
        })
    }
}