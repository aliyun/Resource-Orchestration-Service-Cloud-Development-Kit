import * as ros from '@alicloud/ros-cdk-core';
import { RosMasterSlaveServerGroup } from './slb.generated';
export { RosMasterSlaveServerGroup as MasterSlaveServerGroupProperty };
/**
 * Properties for defining a `MasterSlaveServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
export interface MasterSlaveServerGroupProps {
    /**
     * Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property masterSlaveBackendServers: The backend servers in the primary\/secondary server group. Each primary\/secondary
     * server group consists of two backend servers.
     * Configure the following parameters:
     * - ServerId: required. The IDs of the backend servers. Specify the IDs in a
     * string. You can specify the IDs of Elastic Compute Service (ECS) instances,
     * elastic network interfaces (ENIs), and elastic container instances. If you set
     * ServerId to the IDs of ENIs or elastic container instances, you must configure
     * the Type parameter.
     * - Weight: the weight of the backend server. Valid values: 0 to 100. Default
     * value: 100. If you set the weight of a backend server to 0, no requests are
     * forwarded to the backend server.
     * - Description: optional. The description of the backend servers. Specify the
     * description in a string. The description must be 1 to 80 characters in length,
     * and can contain letters, digits, hyphens (-), forward slashes (\/). periods (.),
     * and underscores (_).
     * - Type: the type of the backend server. Valid values:
     * - ecs (default): ECS instance
     * - eni: ENI
     * - eci: elastic container instance
     * > You can specify ENIs and elastic container instances as backend servers only
     * for high-performance CLB instances.
     * - ServerIp: the IP address of the ENI or elastic container instance.
     * - Port: the backend port.
     * - ServerType: Specify the primary and secondary backend servers in a string.
     * Valid values:
     * - Master: primary server
     * - Slave: secondary server
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property masterSlaveServerGroupName: The name of the active\/standby server group.
     */
    readonly masterSlaveServerGroupName?: string | ros.IResolvable;
}
/**
 * Represents a `MasterSlaveServerGroup`.
 */
export interface IMasterSlaveServerGroup extends ros.IResource {
    readonly props: MasterSlaveServerGroupProps;
    /**
     * Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::MasterSlaveServerGroup`, which is used to create a primary/secondary server group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMasterSlaveServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
 */
export declare class MasterSlaveServerGroup extends ros.Resource implements IMasterSlaveServerGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MasterSlaveServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MasterSlaveServerGroupProps, enableResourcePropertyConstraint?: boolean);
}
