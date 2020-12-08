import { expect as expectCDK, matchTemplate, MatchStyle } from '@alicloud/ros-cdk-assert'
import * as ros from '@alicloud/ros-cdk-core'
import * as testStack from './nested.stack';

test('Nested stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.UseParameterDefineNestedResource(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          Nested1: {
            Type: 'ALIYUN::ROS::Stack',
            Properties: {
              TemplateBody: {
                ROSTemplateFormatVersion: '2015-09-01',
                Parameters: {
                  forNestedStack: {
                    Type: 'String',
                  },
                  vpcName: {
                    Type: 'String',
                  },
                },
                Resources: {
                  'ROS-VPC': {
                    Type: 'ALIYUN::ECS::VPC',
                    Properties: {
                      ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
                      VpcName: {
                        Ref: 'vpcName',
                      },
                      CidrBlock: '10.0.0.0/8',
                      Description: 'This is the description of VPC',
                      EnableIpv6: false,
                      Tags: [
                        {
                          Key: {
                            'Fn::Join': [
                              '',
                              [
                                'KeyExample',
                                {
                                  Ref: 'forNestedStack',
                                },
                              ],
                            ],
                          },
                          Value: 'ValueExample',
                        },
                      ],
                    },
                  },
                },
              },
              Parameters: {
                forNestedStack: 'valueForNestedStackResources',
                vpcName: 'vpcNameExample',
              },
              TimeoutMins: 11,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Nested stack with build-in function(setParameter).', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.UseFunctionDefineNestedResource(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          Nested1: {
            Type: 'ALIYUN::ROS::Stack',
            Properties: {
              TemplateBody: {
                ROSTemplateFormatVersion: '2015-09-01',
                Parameters: {
                  forNestedStack: {
                    Type: 'String',
                  },
                  vpcName: {
                    Type: 'String',
                  },
                },
                Resources: {
                  'ROS-VPC': {
                    Type: 'ALIYUN::ECS::VPC',
                    Properties: {
                      ResourceGroupId: 'rg-acfm2xwmxvrzq6q',
                      VpcName: {
                        Ref: 'vpcName',
                      },
                      CidrBlock: '10.0.0.0/8',
                      Description: 'This is the description of VPC',
                      EnableIpv6: false,
                      Tags: [
                        {
                          Key: {
                            'Fn::Join': [
                              '',
                              [
                                'KeyExample',
                                {
                                  Ref: 'forNestedStack',
                                },
                              ],
                            ],
                          },
                          Value: 'ValueExample',
                        },
                      ],
                    },
                  },
                },
              },
              Parameters: {
                forNestedStack: 'valueForNestedStackResources',
                vpcName: 'vpcNameExample',
              },
              TimeoutMins: 11,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Use nested stack via url.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.UseUrlDefineNestedResource(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          Nested1: {
            Type: 'ALIYUN::ROS::Stack',
            Properties: {
              TemplateURL: 'https://www.aliyun.com/',
              Parameters: {
                KeyExample: 'ValueExample',
              },
              TimeoutMins: 11,
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Five levels nested stack.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.Level5NestedStack(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Resources: {
          Nested5: {
            Type: 'ALIYUN::ROS::Stack',
            Properties: {
              TemplateBody: {
                ROSTemplateFormatVersion: '2015-09-01',
                Resources: {
                  Nested4: {
                    Type: 'ALIYUN::ROS::Stack',
                    Properties: {
                      TemplateBody: {
                        ROSTemplateFormatVersion: '2015-09-01',
                        Resources: {
                          Nested3: {
                            Type: 'ALIYUN::ROS::Stack',
                            Properties: {
                              TemplateBody: {
                                ROSTemplateFormatVersion: '2015-09-01',
                                Resources: {
                                  Nested2: {
                                    Type: 'ALIYUN::ROS::Stack',
                                    Properties: {
                                      TemplateBody: {
                                        ROSTemplateFormatVersion: '2015-09-01',
                                        Resources: {
                                          'ROS-VPC': {
                                            Type: 'ALIYUN::ECS::VPC',
                                            Properties: {
                                              VpcName: 'vpcName',
                                              CidrBlock: '10.0.0.0/8',
                                              EnableIpv6: false,
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
