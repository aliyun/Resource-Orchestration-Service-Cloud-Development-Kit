import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './function.stack';

test('Stack with Fn::Join function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.JoinFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          VpcName: {
            Type: 'String',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Join': [
                  '',
                  [
                    'VPC_',
                    {
                      Ref: 'VpcName',
                    },
                  ],
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack with Fn::Str and Fn::Ref function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.StrAndRefFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          VpcId: {
            Type: 'Number',
          },
          description: {
            Type: 'String',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Join': [
                  '',
                  [
                    'VPC_',
                    {
                      'Fn::Str': {
                        Ref: 'VpcId',
                      },
                    },
                  ],
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: {
                Ref: 'description',
              },
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Base64 function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.Base64FunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          VpcName: {
            Type: 'String',
          },
          VpcDesc: {
            Type: 'String',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Base64Encode': {
                  Ref: 'VpcName',
                },
              },
              CidrBlock: '10.0.0.0/8',
              Description: {
                'Fn::Base64Decode': {
                  Ref: 'VpcDesc',
                },
              },
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Select function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.SelectFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          firstCidr: {
            Type: 'String',
          },
          secondCidr: {
            Type: 'String',
          },
          thirdCidr: {
            Type: 'String',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Select': [2, ['vpcName1', 'vpcName2', 'vpcName3']],
              },
              CidrBlock: {
                'Fn::Select': [
                  1,
                  [
                    {
                      Ref: 'firstCidr',
                    },
                    {
                      Ref: 'secondCidr',
                    },
                    {
                      Ref: 'thirdCidr',
                    },
                  ],
                ],
              },
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::GetAZs function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.GetAZsFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Select': [2, ['vpcName1', 'vpcName2', 'vpcName3']],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              ZoneId: {
                'Fn::Select': [
                  0,
                  {
                    'Fn::GetAZs': {
                      Ref: 'ALIYUN::Region',
                    },
                  },
                ],
              },
              VSwitchName: 'example_VSwtich_Name',
              CidrBlock: '10.0.0.0/20',
              Tags: [
                {
                  Key: 'KeyExample',
                  Value: 'ValueExample',
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Replace function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ReplaceFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          VpcName: {
            Type: 'String',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Replace': [
                  {
                    NAME: 'name',
                  },
                  {
                    Ref: 'VpcName',
                  },
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Split function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.SplitFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          VpcName: {
            Type: 'String',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Select': [
                  1,
                  {
                    'Fn::Split': [
                      ',',
                      {
                        Ref: 'VpcName',
                      },
                    ],
                  },
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::And, Fn::Not, Fn::Or function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.AndOrNotFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          EnvType: {
            Type: 'String',
          },
          region: {
            Type: 'String',
          },
        },
        Conditions: {
          IsProduction: {
            'Fn::Equals': [
              'Production',
              {
                Ref: 'EnvType',
              },
            ],
          },
          isBeijingRegion: {
            'Fn::Equals': [
              'cn-beijing-h',
              {
                Ref: 'region',
              },
            ],
          },
          testAnd: {
            'Fn::And': [
              {
                Condition: 'IsProduction',
              },
              {
                Condition: 'isBeijingRegion',
              },
            ],
          },
          testNot: {
            'Fn::Not': [
              {
                Condition: 'IsProduction',
              },
            ],
          },
          testOr: {
            'Fn::Or': [
              {
                Condition: 'IsProduction',
              },
              {
                Condition: 'isBeijingRegion',
              },
            ],
          },
        },
        Resources: {
          'ROS-VPC-And': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'VpcName',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
            Condition: 'testAnd',
          },
          'ROS-VPC-Not': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'VpcName',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
            Condition: 'testNot',
          },
          'ROS-VPC-Or': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'VpcName',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
            Condition: 'testOr',
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::If and Fn:ListMerge function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.IfAndListMergeFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          envType: {
            Type: 'String',
          },
          vpcName1: {
            Type: 'String',
          },
          vpcName2: {
            Type: 'String',
          },
          vpcName3: {
            Type: 'String',
          },
        },
        Conditions: {
          IsProduction: {
            'Fn::Equals': [
              'Production',
              {
                Ref: 'envType',
              },
            ],
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::If': [
                  'IsProduction',
                  {
                    'Fn::Select': [
                      2,
                      {
                        'Fn::ListMerge': [
                          [
                            {
                              Ref: 'vpcName1',
                            },
                            {
                              Ref: 'vpcName2',
                            },
                          ],
                          [
                            {
                              Ref: 'vpcName3',
                            },
                          ],
                        ],
                      },
                    ],
                  },
                  'defaultName',
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Split function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.GetJsonValueFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          vpcInfo: {
            Type: 'Json',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::GetJsonValue': [
                  'vpcName',
                  {
                    Ref: 'vpcInfo',
                  },
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Avg function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.AverageFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          ndigits: {
            Type: 'Number',
          },
          values: {
            Type: 'CommaDelimitedList',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                'Fn::Join': [
                  '',
                  [
                    'vpcName',
                    {
                      'Fn::Avg': [
                        {
                          Ref: 'ndigits',
                        },
                        {
                          Ref: 'values',
                        },
                      ],
                    },
                  ],
                ],
              },
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Add function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.AddFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          descList1: {
            Type: 'CommaDelimitedList',
          },
          descList2: {
            Type: 'CommaDelimitedList',
          },
          number1: {
            Type: 'Number',
          },
          number2: {
            Type: 'Number',
          },
          number3: {
            Type: 'Number',
          },
          map1: {
            Type: 'Json',
          },
          map2: {
            Type: 'Json',
          },
        },
        Outputs: {
          testFunction1: {
            Description: 'number type add',
            Value: {
              'Fn::Add': [
                {
                  Ref: 'number1',
                },
                {
                  Ref: 'number3',
                },
                {
                  Ref: 'number2',
                },
                8.4,
              ],
            },
          },
          testFunction3: {
            Description: 'list add',
            Value: {
              'Fn::Add': [
                {
                  Ref: 'descList1',
                },
                {
                  Ref: 'descList2',
                },
              ],
            },
          },
          testFunction4: {
            Description: 'map add',
            Value: {
              'Fn::Add': [
                {
                  Ref: 'map1',
                },
                {
                  Ref: 'map2',
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Calculate function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.CalculationFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          ndigits: {
            Type: 'Number',
          },
          para1: {
            Type: 'Number',
          },
          para2: {
            Type: 'Number',
          },
        },
        Outputs: {
          output: {
            Description: 'test calculate function',
            Value: {
              'Fn::Calculate': [
                '({1}+3)/2*3-1',
                {
                  Ref: 'ndigits',
                },
                [
                  {
                    Ref: 'para1',
                  },
                  {
                    Ref: 'para2',
                  },
                ],
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::GetAtt function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.GetAttFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'vpcName',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
              Tags: [
                {
                  Key: 'KeyExample',
                  Value: 'ValueExample',
                },
              ],
            },
          },
          'ROS-VSwitch': {
            Type: 'ALIYUN::ECS::VSwitch',
            Properties: {
              VpcId: {
                'Fn::GetAtt': ['ROS-VPC', 'VpcId'],
              },
              ZoneId: 'cn-beijing-h',
              VSwitchName: 'example_VSwtich_Name',
              CidrBlock: '10.0.0.0/20',
              Tags: [
                {
                  Key: 'KeyExample',
                  Value: 'ValueExample',
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Max and Fn::Min function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MaxFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          para1: {
            Type: 'Number',
          },
          para2: {
            Type: 'Number',
          },
        },
        Outputs: {
          maxVal: {
            Description: 'test max function',
            Value: {
              'Fn::Max': [
                {
                  Ref: 'para1',
                },
                {
                  Ref: 'para2',
                },
                1,
                777,
              ],
            },
          },
          minVal: {
            Description: 'test min function',
            Value: {
              'Fn::Min': [
                {
                  Ref: 'para1',
                },
                {
                  Ref: 'para2',
                },
                1,
                777,
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Jq function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.JqFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          method: {
            Type: 'String',
          },
          script: {
            Type: 'String',
          },
          inputString: {
            Type: 'Json',
          },
        },
        Outputs: {
          result: {
            Description: 'test jq function result',
            Value: {
              'Fn::Jq': [
                {
                  Ref: 'method',
                },
                {
                  Ref: 'script',
                },
                {
                  Ref: 'inputString',
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::MergeMapToList function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.MergeMapToListFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          port: {
            Type: 'CommaDelimitedList',
          },
          ServerId: {
            Type: 'CommaDelimitedList',
          },
          Weight: {
            Type: 'CommaDelimitedList',
          },
        },
        Outputs: {
          result: {
            Description: 'test MergeMapToList function result',
            Value: {
              'Fn::MergeMapToList': [
                {
                  port: {
                    Ref: 'port',
                  },
                },
                {
                  ServerId: {
                    Ref: 'ServerId',
                  },
                },
                {
                  Weight: {
                    Ref: 'Weight',
                  },
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::SelectMapList function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.SelectMapListFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          key: {
            Type: 'String',
          },
          map1: {
            Type: 'Json',
          },
          map2: {
            Type: 'Json',
          },
          map3: {
            Type: 'Json',
          },
        },
        Outputs: {
          result: {
            Description: 'test SelectMapList function result',
            Value: {
              'Fn::SelectMapList': [
                {
                  Ref: 'key',
                },
                [
                  {
                    Ref: 'map1',
                  },
                  {
                    Ref: 'map2',
                  },
                  {
                    Ref: 'map3',
                  },
                ],
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Stack about Fn::Sub function.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.SubFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Outputs: {
          result: {
            Description: 'test Sub function result',
            Value: {
              'Fn::Sub': [
                'Var1: ${Var1}, Var2: ${Var2}, StackName: ${ALIYUN::StackName}, Region: ${ALIYUN::Region}',
                {
                  Var1: 'Var1Value',
                  Var2: 'Var2Value',
                },
              ],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
