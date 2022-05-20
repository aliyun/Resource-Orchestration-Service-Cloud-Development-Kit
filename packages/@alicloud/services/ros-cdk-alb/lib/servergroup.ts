import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroup } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosServerGroup as ServerGroupProperty };

/**
 * Properties for defining a `ALIYUN::ALB::ServerGroup`
 */
export interface ServerGroupProps {

    /**
     * Property healthCheckConfig: The configuration of health checks.
     */
    readonly healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * Property serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
     * can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
     * must start with a letter.
     */
    readonly serverGroupName: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
     * in the specified VPC to the server group.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property protocol: The server protocol. Valid values:
     * HTTP: allows you to associate HTTPS, HTTP, or QUIC listeners with backend servers. This
     * is the default value.
     * HTTPS: allows you to associate HTTPS listeners with backend servers.
     */
    readonly protocol?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property scheduler: The scheduling algorithm. Valid values:
     * Wrr: Backend servers that have higher weights receive more requests than those that have
     * lower weights. This is the default value.
     * Wlc: Requests are distributed based on the weight and load of each backend server. The
     * load refers to the number of connections to a backend server. If multiple backend
     * servers have the same weight, requests are routed to the backend server with the least
     * connections.
     * Sch: specifies consistent hashing that is based on source IP addresses.
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * Property serverGroupType: The type of the server group. Valid values:
     * Instance: a server group that consists of servers. You can add Elastic Compute Service (ECS)
     * instances, elastic network interfaces (ENIs), and elastic container instances to this
     * type of server group. This is the default value.
     * Ip: a server group that consists of IP addresses. You can add IP addresses to this type
     * of server group.
     */
    readonly serverGroupType?: string | ros.IResolvable;

    /**
     * Property stickySessionConfig: The configuration of session persistence.
     * Note This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly stickySessionConfig?: RosServerGroup.StickySessionConfigProperty | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}

/**
 * A ROS resource type:  `ALIYUN::ALB::ServerGroup`
 */
export class ServerGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    public readonly attrServerGroupId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosServerGroup = new RosServerGroup(this, id,  {
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            scheduler: props.scheduler,
            stickySessionConfig: props.stickySessionConfig,
            healthCheckConfig: props.healthCheckConfig,
            protocol: props.protocol,
            serverGroupType: props.serverGroupType,
            tags: props.tags,
            serverGroupName: props.serverGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosServerGroup;
        this.attrServerGroupId = rosServerGroup.attrServerGroupId;
    }
}
