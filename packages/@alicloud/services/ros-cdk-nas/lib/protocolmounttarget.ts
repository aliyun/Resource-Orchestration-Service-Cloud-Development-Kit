import * as ros from '@alicloud/ros-cdk-core';
import { RosProtocolMountTarget } from './nas.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
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
     * It must start with the positive oblique line (\/), and the root directory must be\/.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::ProtocolMountTarget`, which is used to create an export directory for a protocol service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProtocolMountTarget`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export class ProtocolMountTarget extends ros.Resource implements IProtocolMountTarget {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ProtocolMountTargetProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ExportId: The protocol service exports directory ID.
     */
    public readonly attrExportId: ros.IResolvable | string;

    /**
     * Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable | string;

    /**
     * Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    public readonly attrProtocolMountTargetDomain: ros.IResolvable | string;

    /**
     * Attribute ProtocolServiceId: Protocol service ID.
     */
    public readonly attrProtocolServiceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProtocolMountTargetProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosProtocolMountTarget = new RosProtocolMountTarget(this, id,  {
            fsetId: props.fsetId,
            path: props.path,
            description: props.description,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            accessGroupName: props.accessGroupName,
            fileSystemId: props.fileSystemId,
            protocolServiceId: props.protocolServiceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProtocolMountTarget;
        this.attrExportId = rosProtocolMountTarget.attrExportId;
        this.attrFileSystemId = rosProtocolMountTarget.attrFileSystemId;
        this.attrProtocolMountTargetDomain = rosProtocolMountTarget.attrProtocolMountTargetDomain;
        this.attrProtocolServiceId = rosProtocolMountTarget.attrProtocolServiceId;
    }
}
