import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './nls.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export interface ProjectProps {

    /**
     * Property name: Name of the project.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property projectType: Type of the project.
     */
    readonly projectType: string | ros.IResolvable;

    /**
     * Property description: Description of the project.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property sdkType: Type of the SDK.
     */
    readonly sdkType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLS::Project`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export class Project extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppKey: The app key of the project.
     */
    public readonly attrAppKey: ros.IResolvable;

    /**
     * Attribute ProjectId: The ID of the project.
     */
    public readonly attrProjectId: ros.IResolvable;

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
            sdkType: props.sdkType,
            description: props.description,
            projectType: props.projectType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrAppKey = rosProject.attrAppKey;
        this.attrProjectId = rosProject.attrProjectId;
    }
}
