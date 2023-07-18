import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroups } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMonitorGroups as MonitorGroupsProperty };

/**
 * Properties for defining a `DATASOURCE::CMS::MonitorGroups`
 */
export interface MonitorGroupsProps {

    /**
     * Property dynamicTagRuleId: The ID of the tag rule.
     */
    readonly dynamicTagRuleId?: string | ros.IResolvable;

    /**
     * Property groupId: The IDs of the application groups.
     */
    readonly groupId?: number | ros.IResolvable;

    /**
     * Property monitorGroupName: The name of the application group.
     */
    readonly monitorGroupName?: string | ros.IResolvable;

    /**
     * Property type: The type of the application group. Valid values:
     * custom: a self-managed application group.
     * ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.
     * kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::CMS::MonitorGroups`
 */
export class MonitorGroups extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute GroupIds: The list of group IDs.
     */
    public readonly attrGroupIds: ros.IResolvable;

    /**
     * Attribute MonitorGroups: The list of monitor groups.
     */
    public readonly attrMonitorGroups: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CMS::MonitorGroups`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MonitorGroupsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosMonitorGroups = new RosMonitorGroups(this, id,  {
            type: props.type,
            dynamicTagRuleId: props.dynamicTagRuleId,
            monitorGroupName: props.monitorGroupName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroups;
        this.attrGroupIds = rosMonitorGroups.attrGroupIds;
        this.attrMonitorGroups = rosMonitorGroups.attrMonitorGroups;
    }
}
