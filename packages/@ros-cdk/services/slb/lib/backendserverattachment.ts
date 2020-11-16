import * as ros from '@ros-cdk/core';
import { RosBackendServerAttachment } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackendServerAttachment as BackendServerAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::SLB::BackendServerAttachment`
 */
export interface BackendServerAttachmentProps {

    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string;

    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerList?: string[];

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerWeightList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::BackendServerAttachment`
 */
export class BackendServerAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute BackendServers: The collection of attached backend server.
     */
    public readonly attrBackendServers: any;

    /**
     * @Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: any;

    /**
     * Create a new `ALIYUN::SLB::BackendServerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
