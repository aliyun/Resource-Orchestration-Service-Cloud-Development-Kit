import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerAttachment } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackendServerAttachment as BackendServerAttachmentProperty };

/**
 * Properties for defining a `BackendServerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
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
 * Represents a `BackendServerAttachment`.
 */
export interface IBackendServerAttachment extends ros.IResource {
    readonly props: BackendServerAttachmentProps;

    /**
     * Attribute BackendServers: The collection of attached backend server.
     */
    readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::BackendServerAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackendServerAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
 */
export class BackendServerAttachment extends ros.Resource implements IBackendServerAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BackendServerAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackendServers: The collection of attached backend server.
     */
    public readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackendServerAttachment = new RosBackendServerAttachment(this, id,  {
            backendServerList: props.backendServerList,
            loadBalancerId: props.loadBalancerId,
            backendServerWeightList: props.backendServerWeightList,
            backendServers: props.backendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackendServerAttachment;
        this.attrBackendServers = rosBackendServerAttachment.attrBackendServers;
        this.attrLoadBalancerId = rosBackendServerAttachment.attrLoadBalancerId;
    }
}
