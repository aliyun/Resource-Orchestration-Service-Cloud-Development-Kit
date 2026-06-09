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
     * Property masterSlaveBackendServers: A list of active\/standby server group.
     * An active\/standby server group can only contain two backend servers.
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
