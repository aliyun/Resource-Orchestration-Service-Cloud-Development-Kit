import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroup } from './gwlb.generated';
export { RosServerGroup as ServerGroupProperty };
/**
 * Properties for defining a `ServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
export interface ServerGroupProps {
    /**
     * Property vpcId: The VPC instance ID.
     * > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property connectionDrainConfig: Connected graceful interrupt configuration.
     */
    readonly connectionDrainConfig?: RosServerGroup.ConnectionDrainConfigProperty | ros.IResolvable;
    /**
     * Property healthCheckConfig: Health check configurations.
     */
    readonly healthCheckConfig?: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;
    /**
     * Property protocol: Backend Protocol. Value:
     * **GENEVE (default)**.
     */
    readonly protocol?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property scheduler: Scheduling algorithm. Value:
     * - **5TCH (default)**: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.
     * - **3TCH**: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.
     * - **2TCH**: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.
     */
    readonly scheduler?: string | ros.IResolvable;
    /**
     * Property serverGroupName: The server group name.
     * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    readonly serverGroupName?: string | ros.IResolvable;
    /**
     * Property serverGroupType: The server group type. Value:
     * - **Instance (default)**: The instance type. You can add Ecs, Eni, and Eci instances to the server group.
     * - **Ip**: The Ip address type. You can directly add backend servers of the Ip address type to the server group.
     */
    readonly serverGroupType?: string | ros.IResolvable;
    /**
     * Property servers: List of servers.
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: Tags of server group.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}
/**
 * Represents a `ServerGroup`.
 */
export interface IServerGroup extends ros.IResource {
    readonly props: ServerGroupProps;
    /**
     * Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
     */
    readonly attrConnectionDrainConfig: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the server group.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConfig: Health check configurations.
     */
    readonly attrHealthCheckConfig: ros.IResolvable | string;
    /**
     * Attribute Protocol: Backend Protocol.
     */
    readonly attrProtocol: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Scheduler: Scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable | string;
    /**
     * Attribute ServerGroupId: The server group ID.
     */
    readonly attrServerGroupId: ros.IResolvable | string;
    /**
     * Attribute ServerGroupName: The server group name.
     */
    readonly attrServerGroupName: ros.IResolvable | string;
    /**
     * Attribute ServerGroupType: The server group type.
     */
    readonly attrServerGroupType: ros.IResolvable | string;
    /**
     * Attribute Servers: List of servers.
     */
    readonly attrServers: ros.IResolvable | string;
    /**
     * Attribute Tags: List of resource tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC instance ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GWLB::ServerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
export declare class ServerGroup extends ros.Resource implements IServerGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
     */
    readonly attrConnectionDrainConfig: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the server group.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConfig: Health check configurations.
     */
    readonly attrHealthCheckConfig: ros.IResolvable | string;
    /**
     * Attribute Protocol: Backend Protocol.
     */
    readonly attrProtocol: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Scheduler: Scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable | string;
    /**
     * Attribute ServerGroupId: The server group ID.
     */
    readonly attrServerGroupId: ros.IResolvable | string;
    /**
     * Attribute ServerGroupName: The server group name.
     */
    readonly attrServerGroupName: ros.IResolvable | string;
    /**
     * Attribute ServerGroupType: The server group type.
     */
    readonly attrServerGroupType: ros.IResolvable | string;
    /**
     * Attribute Servers: List of servers.
     */
    readonly attrServers: ros.IResolvable | string;
    /**
     * Attribute Tags: List of resource tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC instance ID.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupProps, enableResourcePropertyConstraint?: boolean);
}
