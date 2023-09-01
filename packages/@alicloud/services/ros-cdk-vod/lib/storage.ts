import * as ros from '@alicloud/ros-cdk-core';
import { RosStorage } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStorage as StorageProperty };

/**
 * Properties for defining a `ALIYUN::VOD::Storage`
 */
export interface StorageProps {

    /**
     * Property storageLocation: Storage address.
     */
    readonly storageLocation: string | ros.IResolvable;

    /**
     * Property storageType: Storage Type.
     */
    readonly storageType: string | ros.IResolvable;

    /**
     * Property defaultUpload: Whether to upload by default.
     */
    readonly defaultUpload?: boolean | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VOD::Storage`
 */
export class Storage extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CreateTime: The creation time of the storage.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DefaultUpload: Whether to upload by default.
     */
    public readonly attrDefaultUpload: ros.IResolvable;

    /**
     * Attribute GmtModified: Modification time.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * Attribute GroupId: Group id.
     */
    public readonly attrGroupId: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute StorageAcl: Storage ACL.
     */
    public readonly attrStorageAcl: ros.IResolvable;

    /**
     * Attribute StorageLocation: Storage address.
     */
    public readonly attrStorageLocation: ros.IResolvable;

    /**
     * Attribute StorageUsage: Storage usage.
     */
    public readonly attrStorageUsage: ros.IResolvable;

    /**
     * Attribute Type: Storage type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VOD::Storage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosStorage = new RosStorage(this, id,  {
            storageType: props.storageType,
            defaultUpload: props.defaultUpload,
            storageLocation: props.storageLocation,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStorage;
        this.attrCreateTime = rosStorage.attrCreateTime;
        this.attrDefaultUpload = rosStorage.attrDefaultUpload;
        this.attrGmtModified = rosStorage.attrGmtModified;
        this.attrGroupId = rosStorage.attrGroupId;
        this.attrResourceGroupId = rosStorage.attrResourceGroupId;
        this.attrStorageAcl = rosStorage.attrStorageAcl;
        this.attrStorageLocation = rosStorage.attrStorageLocation;
        this.attrStorageUsage = rosStorage.attrStorageUsage;
        this.attrType = rosStorage.attrType;
    }
}
