import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceDirectory } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceDirectory as ResourceDirectoryProperty };

/**
 * Properties for defining a `ResourceDirectory`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export interface ResourceDirectoryProps {
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceDirectory`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceDirectory`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
 */
export class ResourceDirectory extends ros.Resource {

    /**
     * Attribute MasterAccountId: The ID of the master account
     */
    public readonly attrMasterAccountId: ros.IResolvable;

    /**
     * Attribute MasterAccountName: The name of the master account
     */
    public readonly attrMasterAccountName: ros.IResolvable;

    /**
     * Attribute ResourceDirectoryId: The ID of the resource directory
     */
    public readonly attrResourceDirectoryId: ros.IResolvable;

    /**
     * Attribute RootFolderId: The ID of the root folder
     */
    public readonly attrRootFolderId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceDirectoryProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosResourceDirectory = new RosResourceDirectory(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosResourceDirectory;
        this.attrMasterAccountId = rosResourceDirectory.attrMasterAccountId;
        this.attrMasterAccountName = rosResourceDirectory.attrMasterAccountName;
        this.attrResourceDirectoryId = rosResourceDirectory.attrResourceDirectoryId;
        this.attrRootFolderId = rosResourceDirectory.attrRootFolderId;
    }
}
