import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccount as AccountProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::Account`
 */
export interface AccountProps {

    /**
     * Property displayName: Member name
     */
    readonly displayName: string | ros.IResolvable;

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
 * A ROS resource type:  `ALIYUN::ResourceManager::Account`
 */
export class Account extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccountId: This ID of Resource Manager Account
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * Attribute DisplayName: Member name
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * Attribute FolderId: The ID of the parent folder
     */
    public readonly attrFolderId: ros.IResolvable;

    /**
     * Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    public readonly attrJoinMethod: ros.IResolvable;

    /**
     * Attribute ResourceDirectoryId: Resource directory ID
     */
    public readonly attrResourceDirectoryId: ros.IResolvable;

    /**
     * Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ResourceManager::Account`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccount = new RosAccount(this, id,  {
            payerAccountId: props.payerAccountId,
            displayName: props.displayName,
            folderId: props.folderId,
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
