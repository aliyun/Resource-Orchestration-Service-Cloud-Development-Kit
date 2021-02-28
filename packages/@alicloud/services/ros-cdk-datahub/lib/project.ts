import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './datahub.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `ALIYUN::DATAHUB::Project`
 */
export interface ProjectProps {

    /**
     * Property comment: The comment of project.
     */
    readonly comment: string;

    /**
     * Property projectName: The name of the project. Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
     */
    readonly projectName: string;
}

/**
 * A ROS resource type:  `ALIYUN::DATAHUB::Project`
 */
export class Project extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ProjectName: Project name
     */
    public readonly attrProjectName: any;

    /**
     * Create a new `ALIYUN::DATAHUB::Project`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProject = new RosProject(this, id,  {
            comment: props.comment,
            projectName: props.projectName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrProjectName = rosProject.attrProjectName;
    }
}
