import * as core from '@alicloud/ros-cdk-core'

export class FnLengthTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        const zoneIds = new core.RosParameter(this, 'ZoneIds', {
            type: core.RosParameterType.JSON,
            defaultValue: ['cn-beijing-a', 'cn-beijing-b', 'cn-beijing-c']
        })

        new core.RosOutput(this, 'Length', {
            value: core.Fn.lengthOf(zoneIds)
        })
    }
}