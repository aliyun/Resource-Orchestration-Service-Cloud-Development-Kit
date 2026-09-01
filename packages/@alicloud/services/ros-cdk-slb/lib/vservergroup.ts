import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroup } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVServerGroup as VServerGroupProperty };

/**
 * Properties for defining a `VServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export interface VServerGroupProps {

    /**
     * Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property vServerGroupName: The name of the vServer group.
     * The name must be 1 to 80 characters in length, and can contain letters, digits,
     * hyphens (-), forward slashes (\/), periods (.),and underscores (_).
     */
    readonly vServerGroupName: string | ros.IResolvable;

    /**
     * Property backendServers: The backend servers that you want to add. Configure the following parameters:
     * - ServerId: required. The ID of the backend server. Specify the ID in a string.
     * You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
     * network interface (ENI), or an elastic container instance. If you set ServerId to
     * the ID of an ENI or an elastic container instance, you must configure the Type
     * parameter.
     * - Weight: the weight of the backend server. Valid values: 0 to 100. Default
     * value: 100. If you set the weight of a backend server to 0, no requests are
     * forwarded to the backend server.
     * - Description: optional. The description of the backend server. Specify the
     * description in a string. The description must be 1 to 80 characters in length,
     * and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.),
     * and underscores (_).
     * - Type: the type of the backend server. Valid values:
     * - ecs (default): ECS instance
     * - eni: ENI.
     * - eni: elastic container instance.
     * > You can specify ENIs and elastic container instances as backend servers only
     * for high-performance SLB instances.
     * - ServerIp: The IP address of the ECS instance or ENI.
     * - Port: the backend port.
     * Examples:
     * - Add an ECS instance:
     * `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",
     * "Port":"80","Description":"test-112" }]`
     * - Add an ENI:
     * `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp":
     * "192.168..", "Port":"80","Description":"test-112" }]`
     * - Add an ENI with multiple IP addresses:
     * `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp":
     * "192.168..", "Port":"80","Description":"test-113" },{ "ServerId":
     * "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..",
     * "Port":"80","Description":"test-113" }]`
     * - Add an elastic container instance:
     * `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp":
     * "192.168..", "Port":"80","Description":"test-114" }]`
     * > You can add only running backend servers to SLB instances. You can specify at
     * most 20 backend servers.
     */
    readonly backendServers?: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVServerGroup.TagsProperty[];
}

/**
 * Represents a `VServerGroup`.
 */
export interface IVServerGroup extends ros.IResource {
    readonly props: VServerGroupProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    readonly attrVServerGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::VServerGroup`, which is used to create a server group and attach backend servers to a Server Load Balancer (SLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export class VServerGroup extends ros.Resource implements IVServerGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    public readonly attrVServerGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVServerGroup = new RosVServerGroup(this, id,  {
            vServerGroupName: props.vServerGroupName,
            loadBalancerId: props.loadBalancerId,
            backendServers: props.backendServers,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroup;
        this.attrArn = rosVServerGroup.attrArn;
        this.attrBackendServers = rosVServerGroup.attrBackendServers;
        this.attrLoadBalancerId = rosVServerGroup.attrLoadBalancerId;
        this.attrVServerGroupId = rosVServerGroup.attrVServerGroupId;
    }
}
