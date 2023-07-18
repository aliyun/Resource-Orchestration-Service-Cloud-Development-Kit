import * as ros from '@alicloud/ros-cdk-core';
import { RosProjects } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProjects as ProjectsProperty };

/**
 * Properties for defining a `DATASOURCE::SLS::Projects`
 */
export interface ProjectsProps {
}

/**
 * A ROS resource type:  `DATASOURCE::SLS::Projects`
 */
export class Projects extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ProjectNames: The list of project names.
     */
    public readonly attrProjectNames: ros.IResolvable;

    /**
     * Attribute Projects: The list of projects.
     */
    public readonly attrProjects: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::SLS::Projects`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProjects = new RosProjects(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosProjects;
        this.attrProjectNames = rosProjects.attrProjectNames;
        this.attrProjects = rosProjects.attrProjects;
    }
}
