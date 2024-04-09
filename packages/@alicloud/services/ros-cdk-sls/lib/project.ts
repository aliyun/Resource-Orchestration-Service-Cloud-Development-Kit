import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './sls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLS::Project`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sls-project
 */
export class Project extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: Project name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ProjectProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosProject = new RosProject(this, id,  {
            description: props.description,
            tags: props.tags,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrName = rosProject.attrName;
    }
}
