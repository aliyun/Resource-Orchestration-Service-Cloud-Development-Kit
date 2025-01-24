import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceDirectory } from './resourcemanager.generated';
export { RosResourceDirectory as ResourceDirectoryProperty };
/**
 * Properties for defining a `ResourceDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export interface ResourceDirectoryProps {
}
/**
 * Represents a `ResourceDirectory`.
 */
export interface IResourceDirectory extends ros.IResource {
    readonly props: ResourceDirectoryProps;
    /**
     * Attribute MasterAccountId: The ID of the master account
     */
    readonly attrMasterAccountId: ros.IResolvable | string;
    /**
     * Attribute MasterAccountName: The name of the master account
     */
    readonly attrMasterAccountName: ros.IResolvable | string;
    /**
     * Attribute ResourceDirectoryId: The ID of the resource directory
     */
    readonly attrResourceDirectoryId: ros.IResolvable | string;
    /**
     * Attribute RootFolderId: The ID of the root folder
     */
    readonly attrRootFolderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceDirectory`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceDirectory`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export declare class ResourceDirectory extends ros.Resource implements IResourceDirectory {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ResourceDirectoryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute MasterAccountId: The ID of the master account
     */
    readonly attrMasterAccountId: ros.IResolvable | string;
    /**
     * Attribute MasterAccountName: The name of the master account
     */
    readonly attrMasterAccountName: ros.IResolvable | string;
    /**
     * Attribute ResourceDirectoryId: The ID of the resource directory
     */
    readonly attrResourceDirectoryId: ros.IResolvable | string;
    /**
     * Attribute RootFolderId: The ID of the root folder
     */
    readonly attrRootFolderId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ResourceDirectoryProps, enableResourcePropertyConstraint?: boolean);
}
