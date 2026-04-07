import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './graphdatabase.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export interface AccountProps {

    /**
     * Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * Property accountPassword: Account password.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * Property dbInstanceId: Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * Property accountDescription: Account description.
     */
    readonly accountDescription?: string | ros.IResolvable;
}

/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;

    /**
     * Attribute AccountDescription: Account description.
     */
    readonly attrAccountDescription: ros.IResolvable | string;

    /**
     * Attribute AccountName: Account name.
     */
    readonly attrAccountName: ros.IResolvable | string;

    /**
     * Attribute AccountType: Account Type.
     */
    readonly attrAccountType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GraphDatabase::Account`, which is used to create an account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-account
 */
export class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountDescription: Account description.
     */
    public readonly attrAccountDescription: ros.IResolvable | string;

    /**
     * Attribute AccountName: Account name.
     */
    public readonly attrAccountName: ros.IResolvable | string;

    /**
     * Attribute AccountType: Account Type.
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
            accountDescription: props.accountDescription,
            dbInstanceId: props.dbInstanceId,
            accountPassword: props.accountPassword,
            accountName: props.accountName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountDescription = rosAccount.attrAccountDescription;
        this.attrAccountName = rosAccount.attrAccountName;
        this.attrAccountType = rosAccount.attrAccountType;
    }
}
