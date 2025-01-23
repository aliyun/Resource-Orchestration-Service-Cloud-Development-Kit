import * as ros from '@alicloud/ros-cdk-core';
import { RosFolder } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Folder extends ros.Resource implements IFolder {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FolderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FolderId: The ID of the folder
     */
    public readonly attrFolderId: ros.IResolvable | string;

    /**
     * Attribute FolderName: The name of the folder
     */
    public readonly attrFolderName: ros.IResolvable | string;

    /**
     * Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    public readonly attrParentFolderId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FolderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFolder = new RosFolder(this, id,  {
            folderName: props.folderName,
            parentFolderId: props.parentFolderId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFolder;
        this.attrFolderId = rosFolder.attrFolderId;
        this.attrFolderName = rosFolder.attrFolderName;
        this.attrParentFolderId = rosFolder.attrParentFolderId;
    }
}
