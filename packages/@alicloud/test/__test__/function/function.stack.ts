import * as ros from '@alicloud/ros-cdk-core'
import { VSwitch, Vpc } from '@alicloud/ecs';

export class JoinFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'VpcName', {
      type: ros.RosParameterType.STRING,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.join('', ['VPC', '_', firstPara.valueAsString]),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class StrAndRefFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const vpcId = new ros.RosParameter(this, 'VpcId', {
      type: ros.RosParameterType.NUMBER,
    });

    const description = new ros.RosParameter(this, 'description', {
      type: ros.RosParameterType.STRING,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'VPC_' + ros.Fn.str(vpcId.valueAsNumber),
      cidrBlock: ros.Fn.str('10.0.0.0/8'),
      enableIpv6: false,
      description: ros.Fn.ref('description'),
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class Base64FunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'VpcName', {
      type: ros.RosParameterType.STRING,
    });

    const secondPara = new ros.RosParameter(this, 'VpcDesc', {
      type: ros.RosParameterType.STRING,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.base64Encode(firstPara.valueAsString),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: ros.Fn.base64Decode(secondPara.valueAsString),
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class SelectFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstCidr = new ros.RosParameter(this, 'firstCidr', {
      type: ros.RosParameterType.STRING,
    });
    const secondCidr = new ros.RosParameter(this, 'secondCidr', {
      type: ros.RosParameterType.STRING,
    });
    const thirdCidr = new ros.RosParameter(this, 'thirdCidr', {
      type: ros.RosParameterType.STRING,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.select(2, ['vpcName1', 'vpcName2', 'vpcName3']),
      cidrBlock: ros.Fn.select(1, [firstCidr.valueAsString, secondCidr.valueAsString, thirdCidr.valueAsString]),
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class GetAZsFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.select(2, ['vpcName1', 'vpcName2', 'vpcName3']),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const vswitch = new VSwitch(this, 'ROS-VSwitch', {
      vpcId: vpc.getAtt('VpcId'),
      vSwitchName: 'example_VSwtich_Name',
      cidrBlock: '10.0.0.0/20',
      zoneId: ros.Fn.select(0, ros.Fn.getAzs(ros.Fn.ref('ALIYUN::Region'))),
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });
  }
}

export class ReplaceFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'VpcName', {
      type: ros.RosParameterType.STRING,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.replace({ NAME: 'name' }, firstPara.valueAsString),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class SplitFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const firstPara = new ros.RosParameter(this, 'VpcName', {
      type: ros.RosParameterType.STRING,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.select(1, ros.Fn.split(',', firstPara.valueAsString)),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class AndOrNotFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const envType = new ros.RosParameter(this, 'EnvType', {
      type: ros.RosParameterType.STRING,
    });

    const region = new ros.RosParameter(this, 'region', {
      type: ros.RosParameterType.STRING,
    });

    const isProd = new ros.RosCondition(this, 'IsProduction', {
      expression: ros.Fn.conditionEquals('Production', envType.valueAsString),
    });

    const isBeijingRegion = new ros.RosCondition(this, 'isBeijingRegion', {
      expression: ros.Fn.conditionEquals('cn-beijing-h', region.valueAsString),
    });

    const testAnd = new ros.RosCondition(this, 'testAnd', {
      expression: ros.Fn.conditionAnd(isProd, isBeijingRegion),
    });

    const testNot = new ros.RosCondition(this, 'testNot', {
      expression: ros.Fn.conditionNot(isProd),
    });

    const testOr = new ros.RosCondition(this, 'testOr', {
      expression: ros.Fn.conditionOr(isProd, isBeijingRegion),
    });

    const vpcAnd = new Vpc(this, 'ROS-VPC-And', {
      vpcName: 'VpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const vpcNot = new Vpc(this, 'ROS-VPC-Not', {
      vpcName: 'VpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    const vpcOr = new Vpc(this, 'ROS-VPC-Or', {
      vpcName: 'VpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });

    vpcAnd.addCondition(testAnd);
    vpcNot.addCondition(testNot);
    vpcOr.addCondition(testOr);
  }
}

export class IfAndListMergeFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const envType = new ros.RosParameter(this, 'envType', {
      type: ros.RosParameterType.STRING,
    });

    const vpcName1 = new ros.RosParameter(this, 'vpcName1', {
      type: ros.RosParameterType.STRING,
    });

    const vpcName2 = new ros.RosParameter(this, 'vpcName2', {
      type: ros.RosParameterType.STRING,
    });

    const vpcName3 = new ros.RosParameter(this, 'vpcName3', {
      type: ros.RosParameterType.STRING,
    });

    const isProd = new ros.RosCondition(this, 'IsProduction', {
      expression: ros.Fn.conditionEquals('Production', envType.valueAsString),
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.conditionIf(
        isProd.node.id,
        ros.Fn.select(
          2,
          ros.Fn.listMerge([[vpcName1.valueAsString, vpcName2.valueAsString], [vpcName3.valueAsString]]),
        ),
        'defaultName',
      ).toString(),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class GetJsonValueFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpcInfo = new ros.RosParameter(this, 'vpcInfo', {
      type: ros.RosParameterType.JSON,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: ros.Fn.getJsonValue(['vpcName', vpcInfo.valueAsAny]),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class AverageFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const ndigits = new ros.RosParameter(this, 'ndigits', {
      type: ros.RosParameterType.NUMBER,
    });

    const values = new ros.RosParameter(this, 'values', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName' + ros.Fn.avg(ndigits.valueAsNumber, values.valueAsList),
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
    });
  }
}

export class AddFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    // add list
    const descList1 = new ros.RosParameter(this, 'descList1', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });
    const descList2 = new ros.RosParameter(this, 'descList2', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });

    // add number
    const number1 = new ros.RosParameter(this, 'number1', {
      type: ros.RosParameterType.NUMBER,
    });
    const number2 = new ros.RosParameter(this, 'number2', {
      type: ros.RosParameterType.NUMBER,
    });
    const number3 = new ros.RosParameter(this, 'number3', {
      type: ros.RosParameterType.NUMBER,
    });

    // add map
    const map1 = new ros.RosParameter(this, 'map1', {
      type: ros.RosParameterType.JSON,
    });
    const map2 = new ros.RosParameter(this, 'map2', {
      type: ros.RosParameterType.JSON,
    });

    const output1 = new ros.RosOutput(this, 'testFunction1', {
      value: ros.Fn.add([number1.valueAsNumber, number3.valueAsNumber, number2.valueAsNumber, 8.4]),
      description: 'number type add',
    });

    const output3 = new ros.RosOutput(this, 'testFunction3', {
      value: ros.Fn.add([descList1.valueAsList, descList2.valueAsList]),
      description: 'list add',
    });

    const output4 = new ros.RosOutput(this, 'testFunction4', {
      value: ros.Fn.add([map1.valueAsAny, map2.valueAsAny]),
      description: 'map add',
    });
  }
}

export class CalculationFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const ndigits = new ros.RosParameter(this, 'ndigits', {
      type: ros.RosParameterType.NUMBER,
    });

    const para1 = new ros.RosParameter(this, 'para1', {
      type: ros.RosParameterType.NUMBER,
    });
    const para2 = new ros.RosParameter(this, 'para2', {
      type: ros.RosParameterType.NUMBER,
    });

    const output = new ros.RosOutput(this, 'output', {
      value: ros.Fn.calculate('({1}+3)/2*3-1', ndigits.valueAsNumber, [para1.valueAsNumber, para2.valueAsNumber]),
      description: 'test calculate function',
    });
  }
}

export class GetAttFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'ROS-VPC', {
      vpcName: 'vpcName',
      cidrBlock: '10.0.0.0/8',
      enableIpv6: false,
      description: 'This is the description of VPC',
      resourceGroupId: 'rg-acfm2xwmxvrzq6q',
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });

    const vswitch = new VSwitch(this, 'ROS-VSwitch', {
      vpcId: ros.Fn.getAtt(vpc.node.id, 'VpcId').toString(),
      zoneId: 'cn-beijing-h',
      vSwitchName: 'example_VSwtich_Name',
      cidrBlock: '10.0.0.0/20',
      tags: [
        {
          key: 'KeyExample',
          value: 'ValueExample',
        },
      ],
    });
  }
}

export class MaxFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const para1 = new ros.RosParameter(this, 'para1', {
      type: ros.RosParameterType.NUMBER,
    });
    const para2 = new ros.RosParameter(this, 'para2', {
      type: ros.RosParameterType.NUMBER,
    });

    const maxVal = new ros.RosOutput(this, 'maxVal', {
      value: ros.Fn.max([para1.valueAsNumber, para2.valueAsNumber, 1, 777]),
      description: 'test max function',
    });

    const minVal = new ros.RosOutput(this, 'minVal', {
      value: ros.Fn.min([para1.valueAsNumber, para2.valueAsNumber, 1, 777]),
      description: 'test min function',
    });
  }
}

export class GetOutputFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const stackID = new ros.RosParameter(this, 'stackID', {
      type: ros.RosParameterType.STRING,
    });
    const outputID = new ros.RosParameter(this, 'outoutID', {
      type: ros.RosParameterType.STRING,
    });

    const maxVal = new ros.RosOutput(this, 'maxVal', {
      value: ros.Fn.getStackOutput(stackID.valueAsString, outputID.valueAsString),
      description: 'other stack output',
    });
  }
}

export class JqFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const method = new ros.RosParameter(this, 'method', {
      type: ros.RosParameterType.STRING,
    });

    const script = new ros.RosParameter(this, 'script', {
      type: ros.RosParameterType.STRING,
    });

    const inputString = new ros.RosParameter(this, 'inputString', {
      type: ros.RosParameterType.JSON,
    });

    const maxVal = new ros.RosOutput(this, 'result', {
      value: ros.Fn.jq(method.valueAsString, script.valueAsString, inputString.valueAsAny),
      description: 'test jq function result',
    });
  }
}

export class MergeMapToListFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const port = new ros.RosParameter(this, 'port', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });

    const serverId = new ros.RosParameter(this, 'ServerId', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });

    const weight = new ros.RosParameter(this, 'Weight', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
    });

    const mergeResult = new ros.RosOutput(this, 'result', {
      value: ros.Fn.mergeMapToList([
        { port: port.valueAsList },
        { ServerId: serverId.valueAsList },
        { Weight: weight.valueAsList },
      ]),
      description: 'test MergeMapToList function result',
    });
  }
}

export class SelectMapListFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const key = new ros.RosParameter(this, 'key', {
      type: ros.RosParameterType.STRING,
    });

    const map1 = new ros.RosParameter(this, 'map1', {
      type: ros.RosParameterType.JSON,
    });

    const map2 = new ros.RosParameter(this, 'map2', {
      type: ros.RosParameterType.JSON,
    });

    const map3 = new ros.RosParameter(this, 'map3', {
      type: ros.RosParameterType.JSON,
    });

    const selectResult = new ros.RosOutput(this, 'result', {
      value: ros.Fn.selectMapList(key.valueAsString, [map1, map2, map3]),
      description: 'test SelectMapList function result',
    });
  }
}

export class SubFunctionStack extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const selectResult = new ros.RosOutput(this, 'result', {
      value: ros.Fn.sub('Var1: ${Var1}, Var2: ${Var2}, StackName: ${ALIYUN::StackName}, Region: ${ALIYUN::Region}', {
        Var1: 'Var1Value',
        Var2: 'Var2Value',
      }),
      description: 'test Sub function result',
    });
  }
}
