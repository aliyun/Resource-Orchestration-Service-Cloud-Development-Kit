import * as ros from '@ros-cdk/core';
import { RosMasterSlaveServerGroup } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMasterSlaveServerGroup as MasterSlaveServerGroupProperty };

/**
 * Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export interface MasterSlaveServerGroupProps {

    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string;

    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    readonly masterSlaveServerGroupName?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export class MasterSlaveServerGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    public readonly attrMasterSlaveServerGroupId: any;

    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MasterSlaveServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMasterSlaveServerGroup = new RosMasterSlaveServerGroup(this, id,  {
            loadBalancerId: props.loadBalancerId,
            masterSlaveServerGroupName: props.masterSlaveServerGroupName,
            masterSlaveBackendServers: props.masterSlaveBackendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMasterSlaveServerGroup;
        this.attrMasterSlaveServerGroupId = rosMasterSlaveServerGroup.attrMasterSlaveServerGroupId;
    }
}
