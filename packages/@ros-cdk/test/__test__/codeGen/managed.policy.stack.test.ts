import { expect as expectCDK, matchTemplate, MatchStyle } from '@ros-cdk/assert'
import * as ros from '@ros-cdk/core'
import * as testStack from './managed.policy.stack';
test('Test managed policy.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ManagedPolicyTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          description: {
            Type: 'String',
            Description: 'Specifies the authorization policy description, containing up to 1024 characters.',
            MaxLength: 1024,
          },
          groups: {
            Type: 'CommaDelimitedList',
            Description: 'The names of groups to attach to this policy.',
          },
          policyName: {
            Type: 'String',
            Description: 'Specifies the authorization policy name, containing up to 128 characters.',
          },
          policyDocumentUnchecked: {
            Type: 'Json',
            Description:
              'A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.',
          },
          policyDocument: {
            Type: 'Json',
            Description: 'A policy document that describes what actions are allowed on which resources.',
          },
          roles: {
            Type: 'CommaDelimitedList',
            Description: 'The names of roles to attach to this policy.',
          },
          users: {
            Type: 'CommaDelimitedList',
            Description: 'The names of users to attach to this policy.',
          },
        },
        Resources: {
          policy: {
            Type: 'ALIYUN::RAM::ManagedPolicy',
            Properties: {
              PolicyName: {
                Ref: 'policyName',
              },
              Description: {
                Ref: 'description',
              },
              Groups: {
                Ref: 'groups',
              },
              PolicyDocument: {
                Ref: 'policyDocument',
              },
              PolicyDocumentUnchecked: {
                Ref: 'policyDocumentUnchecked',
              },
              Roles: {
                Ref: 'roles',
              },
              Users: {
                Ref: 'users',
              },
            },
          },
        },
        Outputs: {
          policyNameOutput: {
            Description:
              'When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.',
            Value: {
              'Fn::GetAtt': ['policy', 'PolicyName'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});

test('Test managed policy which can be deployed in ros console.', () => {
  const app = new ros.App();
  // WHEN
  const stack = new testStack.ManagedPolicyDeployTest(app, 'MyTestStack');
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        ROSTemplateFormatVersion: '2015-09-01',
        Parameters: {
          UserName: {
            Type: 'String',
            Description: 'Specifies the user name, containing up to 64 characters.',
            Default: 'ros-test-tt',
          },
          PolicyName: {
            Type: 'String',
            Description: 'Policy name.',
            Default: 'ros-test-tt',
          },
        },
        Resources: {
          ManagePolicy: {
            DependsOn: ['SubAccount'],
            Type: 'ALIYUN::RAM::ManagedPolicy',
            Properties: {
              PolicyName: {
                Ref: 'PolicyName',
              },
              PolicyDocument: {
                Version: '1',
                Statement: [
                  {
                    Action: ['*'],
                    Resource: ['*'],
                    Effect: 'Allow',
                  },
                ],
              },
              Users: [
                {
                  'Fn::GetAtt': ['SubAccount', 'UserName'],
                },
              ],
            },
          },
          SubAccount: {
            Type: 'ALIYUN::RAM::User',
            Properties: {
              UserName: {
                Ref: 'UserName',
              },
            },
          },
        },
        Outputs: {
          PolicyNameOutput: {
            Value: {
              'Fn::GetAtt': ['ManagePolicy', 'PolicyName'],
            },
          },
        },
      },
      MatchStyle.EXACT,
    ),
  );
});
