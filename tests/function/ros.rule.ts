import * as core from '@alicloud/ros-cdk-core'

export class RosRuleTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)

        const env = new core.RosParameter(this, 'Env', {
            type: core.RosParameterType.STRING,
            defaultValue: 'prod',
            allowedValues: ['prod', 'pre']
        })

        const internetMaxBandwidthOut = new core.RosParameter(this, 'InternetMaxBandwidthOut', {
            type: core.RosParameterType.NUMBER,
            defaultValue: 0,
            minValue: 0,
            maxValue: 100
        })

        const instanceChargeType = new core.RosParameter(this, 'InstanceChargeType', {
            type: core.RosParameterType.STRING,
            defaultValue: 'PostPaid',
            allowedValues: ['PostPaid', 'PrePaid']
        })

        new core.RosRule(this, 'PublicNet', {
            ruleCondition: new core.FnEquals(env, 'prod'),
            assertions: {
                assert: new core.FnEquals(internetMaxBandwidthOut, 1),
                assertDescription: 'ECS instance should be intranet when the environment is prod.'
            }
        })

        new core.RosRule(this, 'ChargeType', {
            ruleCondition: new core.FnEquals(env, 'pre'),
            assertions: {
                assert: new core.FnEquals(instanceChargeType, 'PrePaid'),
            }
        })
    }
}