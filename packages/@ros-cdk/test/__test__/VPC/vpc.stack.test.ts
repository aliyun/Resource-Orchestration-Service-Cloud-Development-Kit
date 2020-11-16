import { expect as expectCDK, matchTemplate, MatchStyle } from '@ros-cdk/assert'
import * as ros from '@ros-cdk/core'
import * as testStack from './vpc.stack';

test('Stack with VPC.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VpcExample(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              VpcName: 'vpcName',
              CidrBlock: '10.0.0.0/8',
              Description: 'This is the description of VPC',
              EnableIpv6: false,
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
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

// in specification there is no default vaule for cidrblock
// test('VPC without cidr block will be add a default cirdBlock properties.', () => {
//   const app = new ros.App();
//   // WHEN
//   const stack = new testStack.VPCWithoutCidrBlock(app, 'MyTestStack');
//   // THEN
//   expectCDK(stack).to(
//     matchTemplate(
//       {
//         ROSTemplateFormatVersion: '2015-09-01',
//         Resources: {
//           'ROS-VPC': {
//             Type: 'ALIYUN::ECS::VPC',
//             Properties: {
//               VpcName: 'vpcName',
//               CidrBlock: '172.16.0.0/12',
//               Description: 'This is the description of VPC',
//               EnableIpv6: false,
//               ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
//               Tags: [
//                 {
//                   Key: 'KeyExample',
//                   Value: 'ValueExample',
//                 },
//               ],
//             },
//           },
//         },
//       },
//       MatchStyle.EXACT,
//     ),
//   );
// });

test('VPC without EnableIpv6 will be add a default value.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.VPCWithoutEnableIpv6(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          'ROS-VPC': {
            Type: 'ALIYUN::ECS::VPC',
            Properties: {
              VpcName: 'vpcName',
              CidrBlock: '172.16.0.0/12',
              ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
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
