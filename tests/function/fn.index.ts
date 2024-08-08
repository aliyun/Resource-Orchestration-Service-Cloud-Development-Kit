import * as core from '@alicloud/ros-cdk-core'

export class FnIndexTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)
        const zoneId = new core.RosParameter(this, 'ZoneId', {
            type: core.RosParameterType.STRING,
            defaultValue: 'cn-beijing-b'
        })

        const zoneIds = new core.RosParameter(this, 'ZoneIds', {
            type: core.RosParameterType.JSON,
            defaultValue: ['cn-beijing-a', 'cn-beijing-b', 'cn-beijing-c']
        })

        new core.RosOutput(this, 'Index', {
            value: core.Fn.index(zoneId, zoneIds)
        })
    }
}