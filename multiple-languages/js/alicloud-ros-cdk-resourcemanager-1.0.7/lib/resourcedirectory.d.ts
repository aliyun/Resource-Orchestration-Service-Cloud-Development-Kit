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
     * Attribute MasterAccountId: The ID of the master account
     */
    readonly attrMasterAccountId: ros.IResolvable;
    /**
     * Attribute MasterAccountName: The name of the master account
     */
    readonly attrMasterAccountName: ros.IResolvable;
    /**
     * Attribute ResourceDirectoryId: The ID of the resource directory
     */
    readonly attrResourceDirectoryId: ros.IResolvable;
    /**
     * Attribute RootFolderId: The ID of the root folder
     */
    readonly attrRootFolderId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ResourceManager::ResourceDirectory`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ResourceDirectoryProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=resourcedirectory.d.ts.map