import * as core from '@alicloud/ros-cdk-core'

export class RosParameterTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)
        new core.RosParameter(this, 'Env', {
            type: core.RosParameterType.STRING,
            defaultValue: 'prod',
            allowedValues: ['prod', 'pre'],
            required: true,
            placeholder: {'en': 'Environment', 'zh': '环境'},
            associationProperty: core.RosParameter.AssociationProperty.CEN_INSTANCE_CEN_ID,
        })
    }
}