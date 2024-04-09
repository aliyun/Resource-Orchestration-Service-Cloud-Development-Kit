import * as ros from '@alicloud/ros-cdk-core';
import { RosMonitorGroups } from './cms.generated';
export { RosMonitorGroups as MonitorGroupsProperty };
/**
 * Properties for defining a `MonitorGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::MonitorGroups`, which is used to query the basic information about application groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMonitorGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-monitorgroups
 */
export declare class MonitorGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MonitorGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupIds: The list of group IDs.
     */
    readonly attrGroupIds: ros.IResolvable;
    /**
     * Attribute MonitorGroups: The list of monitor groups.
     */
    readonly attrMonitorGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: MonitorGroupsProps, enableResourcePropertyConstraint?: boolean);
}
