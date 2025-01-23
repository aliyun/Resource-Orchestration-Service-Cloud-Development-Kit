import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './drds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
 */
export interface AccountProps {

    /**
     * Property drdsAccountName: The name of the account.
     */
    readonly drdsAccountName: string | ros.IResolvable;

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
     * Attribute AccountType: Indicates the type of an instance account. Valid values: 
0: The instance account is a privileged account.
1: The instance account is a standard account.
     */
    readonly attrAccountType: ros.IResolvable | string;

    /**
     * Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
     */
    readonly attrDbPrivileges: ros.IResolvable | string;

    /**
     * Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DrdsAccountName: Indicates the username of an instance account.
     */
    readonly attrDrdsAccountName: ros.IResolvable | string;

    /**
     * Attribute Host: Indicates an IP address that is allowed to access the database. The value % indicates that each IP address is allowed to access the database.
     */
    readonly attrHost: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DRDS::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
 */
export class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountType: Indicates the type of an instance account. Valid values: 
0: The instance account is a privileged account.
1: The instance account is a standard account.
     */
    public readonly attrAccountType: ros.IResolvable | string;

    /**
     * Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
     */
    public readonly attrDbPrivileges: ros.IResolvable | string;

    /**
     * Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DrdsAccountName: Indicates the username of an instance account.
     */
    public readonly attrDrdsAccountName: ros.IResolvable | string;

    /**
     * Attribute Host: Indicates an IP address that is allowed to access the database. The value % indicates that each IP address is allowed to access the database.
     */
    public readonly attrHost: ros.IResolvable | string;

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
            drdsAccountName: props.drdsAccountName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountType = rosAccount.attrAccountType;
        this.attrDbPrivileges = rosAccount.attrDbPrivileges;
        this.attrDescription = rosAccount.attrDescription;
        this.attrDrdsAccountName = rosAccount.attrDrdsAccountName;
        this.attrHost = rosAccount.attrHost;
    }
}
