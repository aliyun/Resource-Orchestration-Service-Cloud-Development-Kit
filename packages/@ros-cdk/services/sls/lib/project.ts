import * as ros from '@ros-cdk/core';
import { RosProject } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `ALIYUN::SLS::Project`
 */
export interface ProjectProps {

    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly name: string;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    readonly description?: string;
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
     * @Attribute Name: Project name.
     */
    public readonly attrName: any;

    /**
     * Create a new `ALIYUN::SLS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosProject = new RosProject(this, id,  {
            description: props.description,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrName = rosProject.attrName;
    }
}
