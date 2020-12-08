import * as ros from '@alicloud/ros-cdk-core';
import { RosFolder } from './resourcemanager.generated';
export { RosFolder as FolderProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::Folder`
 */
export interface FolderProps {
    /**
     * @Property folderName: The name of the folder
     */
    readonly folderName: string;
    /**
     * @Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly parentFolderId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ResourceManager::Folder`
 */
export declare class Folder extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute FolderId: The ID of the folder
     */
    readonly attrFolderId: any;
    /**
     * @Attribute FolderName: The name of the folder
     */
    readonly attrFolderName: any;
    /**
     * @Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly attrParentFolderId: any;
    /**
     * Create a new `ALIYUN::ResourceManager::Folder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FolderProps, enableResourcePropertyConstraint?: boolean);
}
