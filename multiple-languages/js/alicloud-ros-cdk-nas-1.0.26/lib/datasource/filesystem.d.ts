import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './nas.generated';
export { RosFileSystem as FileSystemProperty };
/**
 * Properties for defining a `FileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
export interface FileSystemProps {
    /**
     * Property fileSystemId: The ID of the file system to be created.
     */
    readonly fileSystemId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::FileSystem`, which is used to query the information about a file system.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileSystem`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
export declare class FileSystem extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FileSystemProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Bandwidth: Maximum file system throughput.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute Capacity: File system capacity.
     */
    readonly attrCapacity: ros.IResolvable;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: File system description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute EncryptType: Whether the file system is encrypted.
     */
    readonly attrEncryptType: ros.IResolvable;
    /**
     * Attribute ExpiredTime: ExpiredTime.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute FileSystemId: The ID of the file system to be created.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * Attribute FileSystemType: File system type.
     */
    readonly attrFileSystemType: ros.IResolvable;
    /**
     * Attribute KmsKeyId: The ID of the KMS key.
     */
    readonly attrKmsKeyId: ros.IResolvable;
    /**
     * Attribute Ldap: Ldap.
     */
    readonly attrLdap: ros.IResolvable;
    /**
     * Attribute MeteredSize: MeteredSize.
     */
    readonly attrMeteredSize: ros.IResolvable;
    /**
     * Attribute PaymentType: ChargeType.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute ProtocolType: File transfer protocol type.
     */
    readonly attrProtocolType: ros.IResolvable;
    /**
     * Attribute StorageType: Storage type.
     */
    readonly attrStorageType: ros.IResolvable;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint?: boolean);
}
