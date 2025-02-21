import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `Account`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export interface AccountProps {

    /**
     * Property displayName: Member name
     */
    readonly displayName: string | ros.IResolvable;

    /**
     * Property deleteAccount: Whether delete the account. Default value is false.
     */
    readonly deleteAccount?: boolean | ros.IResolvable;

    /**
     * Property folderId: The ID of the parent folder
     */
    readonly folderId?: string | ros.IResolvable;

    /**
     * Property payerAccountId:
     */
    readonly payerAccountId?: string | ros.IResolvable;
}

/**
 * Represents a `Account`.
 */
export interface IAccount extends ros.IResource {
    readonly props: AccountProps;

    /**
     * Attribute AccountId: This ID of Resource Manager Account
     */
    readonly attrAccountId: ros.IResolvable | string;

    /**
     * Attribute DisplayName: Member name
     */
    readonly attrDisplayName: ros.IResolvable | string;

    /**
     * Attribute FolderId: The ID of the parent folder
     */
    readonly attrFolderId: ros.IResolvable | string;

    /**
     * Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    readonly attrJoinMethod: ros.IResolvable | string;

    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: ros.IResolvable | string;

    /**
     * Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Account`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccount`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-account
 */
export class Account extends ros.Resource implements IAccount {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AccountProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountId: This ID of Resource Manager Account
     */
    public readonly attrAccountId: ros.IResolvable | string;

    /**
     * Attribute DisplayName: Member name
     */
    public readonly attrDisplayName: ros.IResolvable | string;

    /**
     * Attribute FolderId: The ID of the parent folder
     */
    public readonly attrFolderId: ros.IResolvable | string;

    /**
     * Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    public readonly attrJoinMethod: ros.IResolvable | string;

    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: ros.IResolvable | string;

    /**
     * Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    public readonly attrType: ros.IResolvable | string;

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
            payerAccountId: props.payerAccountId,
            displayName: props.displayName,
            folderId: props.folderId,
            deleteAccount: props.deleteAccount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccount;
        this.attrAccountId = rosAccount.attrAccountId;
        this.attrDisplayName = rosAccount.attrDisplayName;
        this.attrFolderId = rosAccount.attrFolderId;
        this.attrJoinMethod = rosAccount.attrJoinMethod;
        this.attrResourceDirectoryId = rosAccount.attrResourceDirectoryId;
        this.attrType = rosAccount.attrType;
    }
}
