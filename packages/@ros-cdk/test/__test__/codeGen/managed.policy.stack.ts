import * as ros from '@ros-cdk/core'
import * as ram from '@ros-cdk/ram';
export class ManagedPolicyTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    const description = new ros.RosParameter(this, 'description', {
      type: ros.RosParameterType.STRING,
      description: `Specifies the authorization policy description, containing up to 1024 characters.`,
      maxLength: 1024,
    });

    const groups = new ros.RosParameter(this, 'groups', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
      description: `The names of groups to attach to this policy.`,
    });
    const policyName = new ros.RosParameter(this, 'policyName', {
      type: ros.RosParameterType.STRING,
      description: `Specifies the authorization policy name, containing up to 128 characters.`,
    });

    const policyDocumentUnchecked = new ros.RosParameter(this, 'policyDocumentUnchecked', {
      type: ros.RosParameterType.JSON,
      description: `A policy document that describes what actions are allowed on which resources. If it is specified, PolicyDocument will be ignored.`,
    });
    const policyDocument = new ros.RosParameter(this, 'policyDocument', {
      type: ros.RosParameterType.JSON,
      description: `A policy document that describes what actions are allowed on which resources.`,
    });

    const roles = new ros.RosParameter(this, 'roles', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
      description: `The names of roles to attach to this policy.`,
    });
    const users = new ros.RosParameter(this, 'users', {
      type: ros.RosParameterType.COMMAD_ELIMITED_LIST,
      description: `The names of users to attach to this policy.`,
    });
    const policy = new ram.ManagedPolicy(this, 'policy', {
      description: description.valueAsString,
      groups: groups.valueAsList,
      policyName: policyName.valueAsString,
      policyDocument: policyDocument.valueAsAny,
      policyDocumentUnchecked: policyDocumentUnchecked.valueAsAny,
      roles: roles.valueAsList,
      users: users.valueAsList,
    });

    const policyNameOutput = new ros.RosOutput(this, 'policyNameOutput', {
      description: `When the logical ID of this resource is provided to the Ref intrinsic function, Ref returns the ARN.`,
      value: policy.attrPolicyName,
    });
  }
}

export class ManagedPolicyDeployTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);

    const policyName = new ros.RosParameter(this, 'PolicyName', {
      type: ros.RosParameterType.STRING,
      description: `Policy name.`,
      defaultValue: 'ros-test-tt',
    });
    const usersName = new ros.RosParameter(this, 'UserName', {
      type: ros.RosParameterType.STRING,
      description: `Specifies the user name, containing up to 64 characters.`,
      defaultValue: 'ros-test-tt',
    });

    const subAccount = new ram.User(this, 'SubAccount', {
      userName: usersName.valueAsString,
    });

    const statement: ram.ManagedPolicyProperty.StatementProperty = {
      action: ['*'],
      resource: ['*'],
      effect: 'Allow',
    };
    const policyDocument: ram.ManagedPolicyProperty.PolicyDocumentProperty = {
      version: '1',
      statement: [statement],
    };
    const policy = new ram.ManagedPolicy(this, 'ManagePolicy', {
      policyName: policyName.valueAsString,
      users: [subAccount.attrUserName],
      policyDocument: policyDocument,
    });

    policy.addDependency(subAccount);

    const policyNameOutput = new ros.RosOutput(this, 'PolicyNameOutput', {
      value: policy.attrPolicyName,
    });
  }
}
