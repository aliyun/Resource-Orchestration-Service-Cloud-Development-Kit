import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroup } from './alb.generated';
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
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property protocol: The backend protocol. Valid values:
     * HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
     * HTTPS: The server group can be associated with HTTPS listeners.
     * gRPC: The server group can be associated with HTTPS and QUIC listeners.
     * Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
     */
    readonly protocol?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property scheduler: The scheduling algorithm. Valid values:
     * Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
     * Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
     * Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
     * Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * Property serverGroupType: The type of the server group. Valid values:
     * Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
     * Ip: allows you to add servers by specifying IP addresses.
     * Fc: allows you to add servers by specifying functions of Function Compute.
     */
    readonly serverGroupType?: string | ros.IResolvable;
    /**
     * Property serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
     */
    readonly serviceName?: string | ros.IResolvable;
    /**
     * Property stickySessionConfig: The configuration of session persistence.
     * Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
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
export declare class ServerGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ServerGroupId: The ID of the server group.
     */
    readonly attrServerGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ALB::ServerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupProps, enableResourcePropertyConstraint?: boolean);
}
