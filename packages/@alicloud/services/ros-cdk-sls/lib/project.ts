import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `ALIYUN::SLS::Project`
 */
export interface ProjectProps {

    /**
     * Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to project. Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProject.TagsProperty[];
}

/**
 * A ROS resource type:  `ALIYUN::SLS::Project`
 */
export class Project extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Name: Project name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLS::Project`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProject = new RosProject(this, id,  {
            description: props.description,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrName = rosProject.attrName;
    }
}
