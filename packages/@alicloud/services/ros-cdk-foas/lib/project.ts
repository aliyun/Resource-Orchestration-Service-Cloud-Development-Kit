import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './foas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
 */
export interface ProjectProps {

    /**
     * Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    readonly deployType: string | ros.IResolvable;

    /**
     * Property managerIds: Comma delimited account Id list of managers.
     */
    readonly managerIds: string | ros.IResolvable;

    /**
     * Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;

    /**
     * Property description: Project description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property orderId: Order Id of Shared cluster.
     */
    readonly orderId?: string | ros.IResolvable;
}

/**
 * Represents a `Project`.
 */
export interface IProject extends ros.IResource {
    readonly props: ProjectProps;

    /**
     * Attribute State: Project state.
     */
    readonly attrState: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FOAS::Project`, which is used to create a project in a Realtime Compute cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-project
 */
export class Project extends ros.Resource implements IProject {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute State: Project state.
     */
    public readonly attrState: ros.IResolvable | string;

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
            deployType: props.deployType,
            managerIds: props.managerIds,
            description: props.description,
            clusterId: props.clusterId,
            orderId: props.orderId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrState = rosProject.attrState;
    }
}
