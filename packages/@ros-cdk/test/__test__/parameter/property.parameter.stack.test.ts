import { expect as expectCDK, matchTemplate, MatchStyle } from '@ros-cdk/assert'
import * as ros from '@ros-cdk/core'
import * as testStack from './property.parameter.stack';

test('Parameter with properties.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.parameterWithManyProperties(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          parameter: {
            Type: 'String',
            Description: 'VSwtich zone ID',
            MaxLength: 20,
            MinLength: 5,
            NoEcho: false,
            Label: 'VPC Name Label',
            AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId',
            Confirm: false,
          },
        },
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
              VpcName: 'VPC_name',
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
              ZoneId: {
                Ref: 'parameter',
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

test('Parameter with constrains.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.parameterWithConstrain(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          parameter: {
            Type: 'String',
            AllowedPattern: '[a-zA-Z0-9]{6,}',
            ConstraintDescription:
              'The min length of vpc name is 6 and it should be uppercase, lowercase letters or number',
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
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Parameter with invalid minLength and maxLength.', () => {
  const app = new ros.App();
  expect(() => {
    const stack = new testStack.invalidMinLength(app, 'MyTestStack');
  }).toThrowError('The max length of string of the parameter MyTestStack/parameter is lower than its min length.');
});

test('Parameter with invalid minValue and maxValue.', () => {
  const app = new ros.App();
  expect(() => {
    const stack = new testStack.invalidMinValue(app, 'MyTestStack');
  }).toThrowError('The max value of the parameter MyTestStack/parameter is lower than its min value.');
});

test('Parameter with invalid Association Property.', () => {
  const app = new ros.App();
  expect(() => {
    const stack = new testStack.invalidAssociationProperty(app, 'MyTestStack');
  }).toThrowError(
    'The property associationProperty (value: theWrongProperty) of MyTestStack/parameter is not allowed.\nIts value should be in ALIYUN::ECS::Instance::ImageId,ALIYUN::ECS::Instance::ZoneId,ALIYUN::ECS::VPC::VPCId,ALIYUN::ECS::VSwitch::VSwitchId',
  );
});
