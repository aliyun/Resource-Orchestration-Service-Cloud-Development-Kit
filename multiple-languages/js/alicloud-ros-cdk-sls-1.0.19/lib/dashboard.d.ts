import * as ros from '@alicloud/ros-cdk-core';
import { RosDashboard } from './sls.generated';
export { RosDashboard as DashboardProperty };
/**
 * Properties for defining a `ALIYUN::SLS::Dashboard`
 */
export interface DashboardProps {
    /**
     * Property charts: Chart list.
     */
    readonly charts: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * Property dashboardName: Dashboard name.
     */
    readonly dashboardName: string | ros.IResolvable;
    /**
     * Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property description: Dashboard description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property displayName: Dashboard display name.
     */
    readonly displayName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLS::Dashboard`
 */
export declare class Dashboard extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DashboardName: Dashboard name.
     */
    readonly attrDashboardName: ros.IResolvable;
    /**
     * Attribute DisplayName: Display name.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLS::Dashboard`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DashboardProps, enableResourcePropertyConstraint?: boolean);
}
