import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './serverlessdev.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
 */
export interface ProjectProps {

    /**
     * Property name: The name of the project. It needs to be unique and cannot be changed.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property description: The description of the project.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property labels: The labels for the project
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property spec: The project configuration.
     */
    readonly spec?: RosProject.SpecProperty | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ServerlessDev::Project`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
 */
export class Project extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the project.
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
            labels: props.labels,
            spec: props.spec,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrName = rosProject.attrName;
    }
}
