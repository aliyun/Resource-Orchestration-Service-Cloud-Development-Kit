import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
 */
export interface AccountProps {

    /**
     * Property accountName: The name of the account that you want to query.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;

    /**
     * Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable | string;

    /**
     * Attribute AccountPrivilege: The permission of the account. Default value: RoleReadWrite. Valid values:
* RoleReadOnly: The account has the read-only permissions.
* RoleReadWrite: The account has the read and write permissions.
     */
    readonly attrAccountPrivilege: ros.IResolvable | string;

    /**
     * Attribute AccountType: The type of the account. Valid values:
* Normal: standard account
* Super: super account
     */
    readonly attrAccountType: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the account.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the Redis instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Account`, which is used to query an account in an ApsaraDB for Redis instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-account
 */
export class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountName: The name of the account.
     */
    public readonly attrAccountName: ros.IResolvable | string;

    /**
     * Attribute AccountPrivilege: The permission of the account. Default value: RoleReadWrite. Valid values:
* RoleReadOnly: The account has the read-only permissions.
* RoleReadWrite: The account has the read and write permissions.
     */
    public readonly attrAccountPrivilege: ros.IResolvable | string;

    /**
     * Attribute AccountType: The type of the account. Valid values:
* Normal: standard account
* Super: super account
     */
    public readonly attrAccountType: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the account.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the Redis instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccount = new RosAccount(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountName = rosAccount.attrAccountName;
        this.attrAccountPrivilege = rosAccount.attrAccountPrivilege;
        this.attrAccountType = rosAccount.attrAccountType;
        this.attrDescription = rosAccount.attrDescription;
        this.attrInstanceId = rosAccount.attrInstanceId;
    }
}
