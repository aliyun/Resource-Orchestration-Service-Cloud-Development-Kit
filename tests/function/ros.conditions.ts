import * as core from '@alicloud/ros-cdk-core'
import * as ecs from '@alicloud/ros-cdk-ecs'
import * as console from "console";

export class RosConditionsTest extends core.Stack {
    constructor(scope: core.Construct, id: string, props?: core.StackProps) {
        super(scope, id, props)
        const whetherCreateVpc = new core.RosParameter(this, 'WhetherCreateVpc', {
            type: core.RosParameterType.BOOLEAN,
            defaultValue: true
        });

        const vpc = new ecs.Vpc(this, 'Vpc', {});
        const createVpc = new core.RosCondition(this, 'CreateVpc', {
            expression: core.Fn.conditionEquals(whetherCreateVpc, true)
        });

        console.log("添加条件前: " + vpc.fetchCondition());
        vpc.addCondition(createVpc);
        console.log("添加条件后: " + vpc.fetchCondition());
    }
}