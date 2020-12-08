import * as ros from '@alicloud/ros-cdk-core'

export class PureConditionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const isProduction = new ros.RosParameter(this, 'env', {
      type: ros.RosParameterType.STRING,
      defaultValue: 'Production',
    });

    const isProd = new ros.RosCondition(this, 'IsProduction', {
      expression: ros.Fn.conditionEquals('Production', isProduction.valueAsString),
    });
  }
}
