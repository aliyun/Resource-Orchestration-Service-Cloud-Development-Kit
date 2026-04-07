import * as ros from '@alicloud/ros-cdk-core';
import { RosProjects } from './sls.generated';
export { RosProjects as ProjectsProperty };
/**
 * Properties for defining a `Projects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export interface ProjectsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Projects`.
 */
export interface IProjects extends ros.IResource {
    readonly props: ProjectsProps;
    /**
     * Attribute ProjectNames: The list of project names.
     */
    readonly attrProjectNames: ros.IResolvable | string;
    /**
     * Attribute Projects: The list of projects.
     */
    readonly attrProjects: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLS::Projects`, which is used to query the information about Simple Log Service (SLS) projects.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProjects`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export declare class Projects extends ros.Resource implements IProjects {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ProjectsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ProjectNames: The list of project names.
     */
    readonly attrProjectNames: ros.IResolvable | string;
    /**
     * Attribute Projects: The list of projects.
     */
    readonly attrProjects: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ProjectsProps, enableResourcePropertyConstraint?: boolean);
}
