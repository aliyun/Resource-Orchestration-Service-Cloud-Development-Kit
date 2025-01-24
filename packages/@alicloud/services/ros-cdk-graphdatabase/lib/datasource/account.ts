import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
 */
export interface AccountProps {

    /**
     * Property accountName: The name of the GDB Account.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property dbInstanceId: The ID of the GDB Instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

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
     * Attribute AccountDescription: GDB Account description.
     */
    readonly attrAccountDescription: ros.IResolvable | string;

    /**
     * Attribute AccountName: The name of the GDB Account.
     */
    readonly attrAccountName: ros.IResolvable | string;

    /**
     * Attribute AccountType: GDB Account Type.
     */
    readonly attrAccountType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GraphDatabase::Account`, which is used to query the information about an account of a Graph Database (GDB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-account
 */
export class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountDescription: GDB Account description.
     */
    public readonly attrAccountDescription: ros.IResolvable | string;

    /**
     * Attribute AccountName: The name of the GDB Account.
     */
    public readonly attrAccountName: ros.IResolvable | string;

    /**
     * Attribute AccountType: GDB Account Type.
     */
    public readonly attrAccountType: ros.IResolvable | string;

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
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountDescription = rosAccount.attrAccountDescription;
        this.attrAccountName = rosAccount.attrAccountName;
        this.attrAccountType = rosAccount.attrAccountType;
    }
}
