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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `FileSystem`.
 */
export interface IFileSystem extends ros.IResource {
    readonly props: FileSystemProps;
    /**
     * Attribute Bandwidth: Maximum file system throughput.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute Capacity: File system capacity.
     */
    readonly attrCapacity: ros.IResolvable | string;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: File system description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EncryptType: Whether the file system is encrypted.
     */
    readonly attrEncryptType: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: ExpiredTime.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute FileSystemId: The ID of the file system to be created.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Attribute FileSystemType: File system type.
     */
    readonly attrFileSystemType: ros.IResolvable | string;
    /**
     * Attribute KmsKeyId: The ID of the KMS key.
     */
    readonly attrKmsKeyId: ros.IResolvable | string;
    /**
     * Attribute Ldap: Ldap.
     */
    readonly attrLdap: ros.IResolvable | string;
    /**
     * Attribute MeteredSize: MeteredSize.
     */
    readonly attrMeteredSize: ros.IResolvable | string;
    /**
     * Attribute PaymentType: ChargeType.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ProtocolType: File transfer protocol type.
     */
    readonly attrProtocolType: ros.IResolvable | string;
    /**
     * Attribute StorageType: Storage type.
     */
    readonly attrStorageType: ros.IResolvable | string;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::FileSystem`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileSystem`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
export declare class FileSystem extends ros.Resource implements IFileSystem {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FileSystemProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Bandwidth: Maximum file system throughput.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute Capacity: File system capacity.
     */
    readonly attrCapacity: ros.IResolvable | string;
    /**
     * Attribute CreateTime: CreateTime.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: File system description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EncryptType: Whether the file system is encrypted.
     */
    readonly attrEncryptType: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: ExpiredTime.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute FileSystemId: The ID of the file system to be created.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Attribute FileSystemType: File system type.
     */
    readonly attrFileSystemType: ros.IResolvable | string;
    /**
     * Attribute KmsKeyId: The ID of the KMS key.
     */
    readonly attrKmsKeyId: ros.IResolvable | string;
    /**
     * Attribute Ldap: Ldap.
     */
    readonly attrLdap: ros.IResolvable | string;
    /**
     * Attribute MeteredSize: MeteredSize.
     */
    readonly attrMeteredSize: ros.IResolvable | string;
    /**
     * Attribute PaymentType: ChargeType.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute ProtocolType: File transfer protocol type.
     */
    readonly attrProtocolType: ros.IResolvable | string;
    /**
     * Attribute StorageType: Storage type.
     */
    readonly attrStorageType: ros.IResolvable | string;
    /**
     * Attribute Tags: Tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint?: boolean);
}
