import * as ros from '@alicloud/ros-cdk-core';
import { RosAccounts } from './redis.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccounts as AccountsProperty };

/**
 * Properties for defining a `Accounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export interface AccountsProps {

    /**
     * Property instanceId: The ID of the Redis instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property accountName: The name of the Redis account.
     */
    readonly accountName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Accounts`.
 */
export interface IAccounts extends ros.IResource {
    readonly props: AccountsProps;

    /**
     * Attribute AccountNames: The list of The Redis account names.
     */
    readonly attrAccountNames: ros.IResolvable | string;

    /**
     * Attribute Accounts: The list of The Redis accounts.
     */
    readonly attrAccounts: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::REDIS::Accounts`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccounts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-accounts
 */
export class Accounts extends ros.Resource implements IAccounts {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountNames: The list of The Redis account names.
     */
    public readonly attrAccountNames: ros.IResolvable | string;

    /**
     * Attribute Accounts: The list of The Redis accounts.
     */
    public readonly attrAccounts: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAccounts = new RosAccounts(this, id,  {
            instanceId: props.instanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccounts;
        this.attrAccountNames = rosAccounts.attrAccountNames;
        this.attrAccounts = rosAccounts.attrAccounts;
    }
}
