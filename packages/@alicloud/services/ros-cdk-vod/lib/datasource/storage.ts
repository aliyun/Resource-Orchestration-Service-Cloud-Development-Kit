import * as ros from '@alicloud/ros-cdk-core';
import { RosStorage } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStorage as StorageProperty };

/**
 * Properties for defining a `Storage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
 */
export interface StorageProps {

    /**
     * Property storageLocation: The ID of the Storage.
     */
    readonly storageLocation: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Storage`.
 */
export interface IStorage extends ros.IResource {
    readonly props: StorageProps;

    /**
     * Attribute CreateTime: The creation time of the Storage.
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
     * Attribute GroupId: Storage Group Id.
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
     * Attribute StorageLocation: The ID of the Storage.
     */
    readonly attrStorageLocation: ros.IResolvable | string;

    /**
     * Attribute StorageUsage: Storage Use.
     */
    readonly attrStorageUsage: ros.IResolvable | string;

    /**
     * Attribute Type: The storage class.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::Storage`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-storage
 */
export class Storage extends ros.Resource implements IStorage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StorageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the Storage.
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
     * Attribute GroupId: Storage Group Id.
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
     * Attribute StorageLocation: The ID of the Storage.
     */
    public readonly attrStorageLocation: ros.IResolvable | string;

    /**
     * Attribute StorageUsage: Storage Use.
     */
    public readonly attrStorageUsage: ros.IResolvable | string;

    /**
     * Attribute Type: The storage class.
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
            storageLocation: props.storageLocation,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
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
