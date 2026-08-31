import * as ros from '@alicloud/ros-cdk-core';
import { RosProtocolMountTarget } from './nas.generated';
export { RosProtocolMountTarget as ProtocolMountTargetProperty };
/**
 * Properties for defining a `ProtocolMountTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export interface ProtocolMountTargetProps {
    /**
     * Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * Property protocolServiceId: Agreement service ID.
     */
    readonly protocolServiceId: string | ros.IResolvable;
    /**
     * Property vpcId: Proper network ID exported by the protocol service.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The vSwitch ID of the export directory.
     * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
     * the VpcId is set, this field is required.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * Property description: The description of the export directory for the protocol service. The name of the
     * export directory appears in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property fsetId: Fileset ID needs to be exported.
     * limit:
     * The Fileset must exist.
     * A Fileset allows only one export directory.
     * Fileset and Path can only specify one.
     */
    readonly fsetId?: string | ros.IResolvable;
    /**
     * Property path: The path of the CPFS directory that you want to export.
     * Limits:
     * *   The directory already exists in the CPFS file system.
     * *   You can create only one export directory for a directory.
     * *   You can specify either a fileset or a path.
     * Format:
     * *   The path must be 1 to 1,024 characters in length.
     * *   The path must be encoded in UTF-8.
     * *   The path must start and end with a forward slash (\/). The root directory is
     * `\/`.
     */
    readonly path?: string | ros.IResolvable;
}
/**
 * Represents a `ProtocolMountTarget`.
 */
export interface IProtocolMountTarget extends ros.IResource {
    readonly props: ProtocolMountTargetProps;
    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    readonly attrExportId: ros.IResolvable | string;
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    readonly attrProtocolMountTargetDomain: ros.IResolvable | string;
    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::ProtocolMountTarget`Creates an export directory for a NAS protocol service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProtocolMountTarget`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export declare class ProtocolMountTarget extends ros.Resource implements IProtocolMountTarget {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProtocolMountTargetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    readonly attrExportId: ros.IResolvable | string;
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    readonly attrProtocolMountTargetDomain: ros.IResolvable | string;
    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProtocolMountTargetProps, enableResourcePropertyConstraint?: boolean);
}
