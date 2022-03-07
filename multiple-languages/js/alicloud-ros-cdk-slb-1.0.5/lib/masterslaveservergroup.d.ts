import * as ros from '@alicloud/ros-cdk-core';
import { RosMasterSlaveServerGroup } from './slb.generated';
export { RosMasterSlaveServerGroup as MasterSlaveServerGroupProperty };
/**
 * Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export interface MasterSlaveServerGroupProps {
    /**
     * Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    readonly masterSlaveServerGroupName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export declare class MasterSlaveServerGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    readonly attrMasterSlaveServerGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MasterSlaveServerGroupProps, enableResourcePropertyConstraint?: boolean);
}
