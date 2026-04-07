import * as ros from '@alicloud/ros-cdk-core';
import { RosFolder } from './resourcemanager.generated';
export { RosFolder as FolderProperty };
/**
 * Properties for defining a `Folder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
 */
export interface FolderProps {
    /**
     * Property folderName: The name of the folder
     */
    readonly folderName: string | ros.IResolvable;
    /**
     * Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly parentFolderId?: string | ros.IResolvable;
}
/**
 * Represents a `Folder`.
 */
export interface IFolder extends ros.IResource {
    readonly props: FolderProps;
    /**
     * Attribute FolderId: The ID of the folder
     */
    readonly attrFolderId: ros.IResolvable | string;
    /**
     * Attribute FolderName: The name of the folder
     */
    readonly attrFolderName: ros.IResolvable | string;
    /**
     * Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly attrParentFolderId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::Folder`, which is used to create a folder.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFolder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-folder
 */
export declare class Folder extends ros.Resource implements IFolder {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FolderProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FolderId: The ID of the folder
     */
    readonly attrFolderId: ros.IResolvable | string;
    /**
     * Attribute FolderName: The name of the folder
     */
    readonly attrFolderName: ros.IResolvable | string;
    /**
     * Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly attrParentFolderId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FolderProps, enableResourcePropertyConstraint?: boolean);
}
