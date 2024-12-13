import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './polardbx.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
 */
export interface AccountProps {

    /**
     * Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    readonly polarDbxAccountName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PolarDBX::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
 */
export class Account extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountDescription: The description of the account.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * Attribute AccountType: The type of the account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * Attribute CreateTime: The point in time when the account was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * Attribute PolarDBXAccountName: The username of the account.
     */
    public readonly attrPolarDbxAccountName: ros.IResolvable;

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
            polarDbxAccountName: props.polarDbxAccountName,
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountDescription = rosAccount.attrAccountDescription;
        this.attrAccountType = rosAccount.attrAccountType;
        this.attrCreateTime = rosAccount.attrCreateTime;
        this.attrDbInstanceId = rosAccount.attrDbInstanceId;
        this.attrPolarDbxAccountName = rosAccount.attrPolarDbxAccountName;
    }
}
