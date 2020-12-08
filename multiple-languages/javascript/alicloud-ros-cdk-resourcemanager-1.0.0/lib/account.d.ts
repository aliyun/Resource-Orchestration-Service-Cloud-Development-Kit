import * as ros from '@alicloud/ros-cdk-core';
import { RosAccount } from './resourcemanager.generated';
export { RosAccount as AccountProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::Account`
 */
export interface AccountProps {
    /**
     * @Property displayName: Member name
     */
    readonly displayName: string;
    /**
     * @Property folderId: The ID of the parent folder
     */
    readonly folderId?: string;
    /**
     * @Property payerAccountId:
     */
    readonly payerAccountId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ResourceManager::Account`
 */
export declare class Account extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AccountId: This ID of Resource Manager Account
     */
    readonly attrAccountId: any;
    /**
     * @Attribute DisplayName: Member name
     */
    readonly attrDisplayName: any;
    /**
     * @Attribute FolderId: The ID of the parent folder
     */
    readonly attrFolderId: any;
    /**
     * @Attribute JoinMethod: Ways for members to join the resource directory. Valid values: invited, created
     */
    readonly attrJoinMethod: any;
    /**
     * @Attribute ResourceDirectoryId: Resource directory ID
     */
    readonly attrResourceDirectoryId: any;
    /**
     * @Attribute Type: Member type. The value of ResourceAccount indicates the resource account
     */
    readonly attrType: any;
    /**
     * Create a new `ALIYUN::ResourceManager::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccountProps, enableResourcePropertyConstraint?: boolean);
}
