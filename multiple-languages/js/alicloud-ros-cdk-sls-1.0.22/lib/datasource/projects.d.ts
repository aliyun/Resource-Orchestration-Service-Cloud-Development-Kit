import * as ros from '@alicloud/ros-cdk-core';
import { RosProjects } from './sls.generated';
export { RosProjects as ProjectsProperty };
/**
 * Properties for defining a `Projects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export interface ProjectsProps {
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLS::Projects`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProjects`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export declare class Projects extends ros.Resource {
    /**
     * Attribute ProjectNames: The list of project names.
     */
    readonly attrProjectNames: ros.IResolvable;
    /**
     * Attribute Projects: The list of projects.
     */
    readonly attrProjects: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ProjectsProps, enableResourcePropertyConstraint?: boolean);
}
