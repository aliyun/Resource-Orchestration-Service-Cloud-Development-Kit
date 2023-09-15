import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerAttachment } from './slb.generated';
export { RosBackendServerAttachment as BackendServerAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::SLB::BackendServerAttachment`
 */
export interface BackendServerAttachmentProps {
    /**
     * Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerWeightList?: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLB::BackendServerAttachment`
 */
export declare class BackendServerAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BackendServers: The collection of attached backend server.
     */
    readonly attrBackendServers: ros.IResolvable;
    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::BackendServerAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
