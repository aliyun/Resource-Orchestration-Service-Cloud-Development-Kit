import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './type.parameter.stack';

test('Parameter with no type.', () => {
  const app = new ros.App();
  expect(() => {
    const stack = new testStack.noTypeParameter(app, 'MyTestStack');
  }).toThrowError('MyTestStack/parameter is missing required property: type');
});

test('Parameter with string type.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.stringParameter(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          parameter: {
            Type: 'String',
            Description: 'VPC name',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: {
                Ref: 'parameter',
              },
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
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Parameter with boolean type.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.booleanParameter(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          parameter: {
            Type: 'Boolean',
            Description: 'enableIpv6(boolean type)',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'nameOfVPC',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: {
                Ref: 'parameter',
              },
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

test('Parameter with list type.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.CommaDelimitedListFunctionStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          cidrList: {
            Type: 'CommaDelimitedList',
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'vpcName1',
              CidrBlock: {
                'Fn::Select': [
                  1,
                  {
                    Ref: 'cidrList',
                  },
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

test('Parameter with number type.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.numberParameter(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          inputNumber: {
            Type: 'Number',
            MaxValue: 20,
            MinValue: 10,
          },
        },
        Outputs: {
          result: {
            Description: 'result',
            Value: {
              Ref: 'inputNumber',
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
