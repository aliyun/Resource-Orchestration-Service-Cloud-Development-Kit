import * as ros from '@alicloud/ros-cdk-core';
import { RosProtocolService } from './nas.generated';
export { RosProtocolService as ProtocolServiceProperty };
/**
 * Properties for defining a `ALIYUN::NAS::ProtocolService`
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
     * Start with a lowercase letter or Chinese, and you cannot start with http:// and https: //.
     * It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property throughput: The bandwidth of the agreement service.
     * Unit: MB/S.
     */
    readonly throughput?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::NAS::ProtocolService`
 */
export declare class ProtocolService extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute FileSystemId: File system ID.
     */
    readonly attrFileSystemId: ros.IResolvable;
    /**
     * Attribute ProtocolServiceId: Agreement cluster group ID.
     */
    readonly attrProtocolServiceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::NAS::ProtocolService`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProtocolServiceProps, enableResourcePropertyConstraint?: boolean);
}
