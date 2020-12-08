import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceDirectory } from './resourcemanager.generated';
export { RosResourceDirectory as ResourceDirectoryProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceDirectory`
 */
export interface ResourceDirectoryProps {
}
/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ResourceDirectory`
 */
export declare class ResourceDirectory extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute MasterAccountId: The ID of the master account
     */
    readonly attrMasterAccountId: any;
    /**
     * @Attribute MasterAccountName: The name of the master account
     */
    readonly attrMasterAccountName: any;
    /**
     * @Attribute ResourceDirectoryId: The ID of the resource directory
     */
    readonly attrResourceDirectoryId: any;
    /**
     * @Attribute RootFolderId: The ID of the root folder
     */
    readonly attrRootFolderId: any;
    /**
     * Create a new `ALIYUN::ResourceManager::ResourceDirectory`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ResourceDirectoryProps, enableResourcePropertyConstraint?: boolean);
}
