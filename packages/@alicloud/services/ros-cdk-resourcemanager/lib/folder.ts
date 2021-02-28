import * as ros from '@alicloud/ros-cdk-core';
import { RosFolder } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFolder as FolderProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::Folder`
 */
export interface FolderProps {

    /**
     * Property folderName: The name of the folder
     */
    readonly folderName: string;

    /**
     * Property parentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    readonly parentFolderId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::Folder`
 */
export class Folder extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FolderId: The ID of the folder
     */
    public readonly attrFolderId: any;

    /**
     * Attribute FolderName: The name of the folder
     */
    public readonly attrFolderName: any;

    /**
     * Attribute ParentFolderId: The ID of the parent folder. If not set, the system default value will be used
     */
    public readonly attrParentFolderId: any;

    /**
     * Create a new `ALIYUN::ResourceManager::Folder`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FolderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
