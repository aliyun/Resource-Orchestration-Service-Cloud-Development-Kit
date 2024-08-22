import * as ros from '@alicloud/ros-cdk-core';
import { RosFileSystem } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::FileSystem`, which is used to query the information about a file system.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFileSystem`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
export class FileSystem extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FileSystemProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Bandwidth: Maximum file system throughput.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute Capacity: File system capacity.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * Attribute CreateTime: CreateTime.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: File system description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EncryptType: Whether the file system is encrypted.
     */
    public readonly attrEncryptType: ros.IResolvable;

    /**
     * Attribute ExpiredTime: ExpiredTime.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * Attribute FileSystemId: The ID of the file system to be created.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * Attribute FileSystemType: File system type.
     */
    public readonly attrFileSystemType: ros.IResolvable;

    /**
     * Attribute KmsKeyId: The ID of the KMS key.
     */
    public readonly attrKmsKeyId: ros.IResolvable;

    /**
     * Attribute Ldap: Ldap.
     */
    public readonly attrLdap: ros.IResolvable;

    /**
     * Attribute MeteredSize: MeteredSize.
     */
    public readonly attrMeteredSize: ros.IResolvable;

    /**
     * Attribute PaymentType: ChargeType.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute ProtocolType: File transfer protocol type.
     */
    public readonly attrProtocolType: ros.IResolvable;

    /**
     * Attribute StorageType: Storage type.
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * Attribute Tags: Tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FileSystemProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFileSystem = new RosFileSystem(this, id,  {
            fileSystemId: props.fileSystemId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFileSystem;
        this.attrBandwidth = rosFileSystem.attrBandwidth;
        this.attrCapacity = rosFileSystem.attrCapacity;
        this.attrCreateTime = rosFileSystem.attrCreateTime;
        this.attrDescription = rosFileSystem.attrDescription;
        this.attrEncryptType = rosFileSystem.attrEncryptType;
        this.attrExpiredTime = rosFileSystem.attrExpiredTime;
        this.attrFileSystemId = rosFileSystem.attrFileSystemId;
        this.attrFileSystemType = rosFileSystem.attrFileSystemType;
        this.attrKmsKeyId = rosFileSystem.attrKmsKeyId;
        this.attrLdap = rosFileSystem.attrLdap;
        this.attrMeteredSize = rosFileSystem.attrMeteredSize;
        this.attrPaymentType = rosFileSystem.attrPaymentType;
        this.attrProtocolType = rosFileSystem.attrProtocolType;
        this.attrStorageType = rosFileSystem.attrStorageType;
        this.attrTags = rosFileSystem.attrTags;
        this.attrZoneId = rosFileSystem.attrZoneId;
    }
}
