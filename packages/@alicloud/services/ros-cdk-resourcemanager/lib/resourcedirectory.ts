import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceDirectory } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceDirectory as ResourceDirectoryProperty };

/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceDirectory`
 */
export interface ResourceDirectoryProps {
}

/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ResourceDirectory`
 */
export class ResourceDirectory extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute MasterAccountId: The ID of the master account
     */
    public readonly attrMasterAccountId: any;

    /**
     * @Attribute MasterAccountName: The name of the master account
     */
    public readonly attrMasterAccountName: any;

    /**
     * @Attribute ResourceDirectoryId: The ID of the resource directory
     */
    public readonly attrResourceDirectoryId: any;

    /**
     * @Attribute RootFolderId: The ID of the root folder
     */
    public readonly attrRootFolderId: any;

    /**
     * Create a new `ALIYUN::ResourceManager::ResourceDirectory`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
