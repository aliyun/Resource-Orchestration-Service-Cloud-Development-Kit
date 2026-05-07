import * as ros from '@alicloud/ros-cdk-core';
import { RosStorage } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStorage as StorageProperty };

/**
 * Properties for defining a `Storage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
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
 * Represents a `Storage`.
 */
export interface IStorage extends ros.IResource {
    readonly props: StorageProps;

    /**
     * Attribute CreateTime: The creation time of the storage.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DefaultUpload: Whether to upload by default.
     */
    readonly attrDefaultUpload: ros.IResolvable | string;

    /**
     * Attribute GmtModified: Modification time.
     */
    readonly attrGmtModified: ros.IResolvable | string;

    /**
     * Attribute GroupId: Group id.
     */
    readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute StorageAcl: Storage ACL.
     */
    readonly attrStorageAcl: ros.IResolvable | string;

    /**
     * Attribute StorageLocation: Storage address.
     */
    readonly attrStorageLocation: ros.IResolvable | string;

    /**
     * Attribute StorageUsage: Storage usage.
     */
    readonly attrStorageUsage: ros.IResolvable | string;

    /**
     * Attribute Type: Storage type.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VOD::Storage`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
 */
export class Storage extends ros.Resource implements IStorage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StorageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the storage.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DefaultUpload: Whether to upload by default.
     */
    public readonly attrDefaultUpload: ros.IResolvable | string;

    /**
     * Attribute GmtModified: Modification time.
     */
    public readonly attrGmtModified: ros.IResolvable | string;

    /**
     * Attribute GroupId: Group id.
     */
    public readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute StorageAcl: Storage ACL.
     */
    public readonly attrStorageAcl: ros.IResolvable | string;

    /**
     * Attribute StorageLocation: Storage address.
     */
    public readonly attrStorageLocation: ros.IResolvable | string;

    /**
     * Attribute StorageUsage: Storage usage.
     */
    public readonly attrStorageUsage: ros.IResolvable | string;

    /**
     * Attribute Type: Storage type.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

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
