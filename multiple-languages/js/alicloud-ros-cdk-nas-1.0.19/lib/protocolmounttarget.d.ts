import * as ros from '@alicloud/ros-cdk-core';
import { RosProtocolMountTarget } from './nas.generated';
export { RosProtocolMountTarget as ProtocolMountTargetProperty };
/**
 * Properties for defining a `ALIYUN::NAS::ProtocolMountTarget`
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
     * Property vSwitchId: Switch ID exported by the protocol service.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    readonly accessGroupName?: string | ros.IResolvable;
    /**
     * Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name.
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
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
     * Property path: The path of the CPFS directory that needs to be exported.
     * limit:
     * This directory must be existing directory on CPFS.
     * The same directory allows only one export.
     * Fileset and Path can only specify one.
     * Format:
     * The length is 1 to 1024 characters.
     * Use UTF-8 encoding.
     * It must start with the positive oblique line (/), and the root directory must be/.
     */
    readonly path?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::NAS::ProtocolMountTarget`
 */
export declare class ProtocolMountTarget extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    readonly attrExportId: ros.IResolvable;
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    readonly attrProtocolMountTargetDomain: ros.IResolvable;
    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::NAS::ProtocolMountTarget`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProtocolMountTargetProps, enableResourcePropertyConstraint?: boolean);
}
