import * as ros from '@alicloud/ros-cdk-core';
import { RosProtocolService } from './nas.generated';
export { RosProtocolService as ProtocolServiceProperty };
/**
 * Properties for defining a `ProtocolService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
 */
export interface ProtocolServiceProps {
    /**
     * Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;
    /**
     * Property protocolSpec: The spec of protocol service. Default: General. Values: General
     */
    readonly protocolSpec: string | ros.IResolvable;
    /**
     * Property protocolType: The protocol type of agreement service.
     * Ranges:
     * NFS: Agreement service supports NFS protocol access.
     * The default value: NFS.
     */
    readonly protocolType: string | ros.IResolvable;
    /**
     * Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: Agreement service vswitchid.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property description: Description of protocol service.The console shows the "protocol service name".
     * limit:
     * The length is 2 to 128 English or Chinese characters.
     * Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property throughput: The bandwidth of the agreement service.
     * Unit: MB\/S.
     */
    readonly throughput?: number | ros.IResolvable;
}
/**
 * Represents a `ProtocolService`.
 */
export interface IProtocolService extends ros.IResource {
    readonly props: ProtocolServiceProps;
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Attribute ProtocolServiceId: Agreement cluster group ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NAS::ProtocolService`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProtocolService`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
 */
export declare class ProtocolService extends ros.Resource implements IProtocolService {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProtocolServiceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable | string;
    /**
     * Attribute ProtocolServiceId: Agreement cluster group ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProtocolServiceProps, enableResourcePropertyConstraint?: boolean);
}
