import * as ros from '@alicloud/ros-cdk-core';
import { RosStorage } from './vod.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VOD::Storage`, which is used to add an Object Storage Service (OSS) bucket in ApsaraVideo VOD (VOD).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStorage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-storage
 */
export declare class Storage extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: StorageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the storage.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DefaultUpload: Whether to upload by default.
     */
    readonly attrDefaultUpload: ros.IResolvable;
    /**
     * Attribute GmtModified: Modification time.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * Attribute GroupId: Group id.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute StorageAcl: Storage ACL.
     */
    readonly attrStorageAcl: ros.IResolvable;
    /**
     * Attribute StorageLocation: Storage address.
     */
    readonly attrStorageLocation: ros.IResolvable;
    /**
     * Attribute StorageUsage: Storage usage.
     */
    readonly attrStorageUsage: ros.IResolvable;
    /**
     * Attribute Type: Storage type.
     */
    readonly attrType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StorageProps, enableResourcePropertyConstraint?: boolean);
}
