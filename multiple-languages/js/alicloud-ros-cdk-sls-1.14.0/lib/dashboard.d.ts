import * as ros from '@alicloud/ros-cdk-core';
import { RosDashboard } from './sls.generated';
export { RosDashboard as DashboardProperty };
/**
 * Properties for defining a `Dashboard`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
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
 * Represents a `Dashboard`.
 */
export interface IDashboard extends ros.IResource {
    readonly props: DashboardProps;
    /**
     * Attribute DashboardName: Dashboard name.
     */
    readonly attrDashboardName: ros.IResolvable | string;
    /**
     * Attribute DisplayName: Display name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Dashboard`, which is used to create a dashboard.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDashboard`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-dashboard
 */
export declare class Dashboard extends ros.Resource implements IDashboard {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DashboardProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DashboardName: Dashboard name.
     */
    readonly attrDashboardName: ros.IResolvable | string;
    /**
     * Attribute DisplayName: Display name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DashboardProps, enableResourcePropertyConstraint?: boolean);
}
