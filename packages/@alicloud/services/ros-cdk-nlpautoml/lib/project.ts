import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './nlpautoml.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `ALIYUN::NLPAUTOML::Project`
 */
export interface ProjectProps {

    /**
     * Property projectDescription: The description of project.Cannot start with numbers and symbols, and the length cannot be greater than 256 characters.
     */
    readonly projectDescription: string | ros.IResolvable;

    /**
     * Property projectName: The name of project. Cannot start with numbers and symbols, and the length cannot be greater than 32 characters.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * Property projectType: The type of nlp project. The following value is allowed: ner, textCategorybaseRelation, textMatching, sentimentAnalysis, resumeExtract, reviewAnalysis
     */
    readonly projectType: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::NLPAUTOML::Project`
 */
export class Project extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ProjectId: The project ID
     */
    public readonly attrProjectId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::NLPAUTOML::Project`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProject = new RosProject(this, id,  {
            projectName: props.projectName,
            projectType: props.projectType,
            projectDescription: props.projectDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrProjectId = rosProject.attrProjectId;
    }
}
