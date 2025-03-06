import * as ros from '@alicloud/ros-cdk-core';
import { RosProject } from './maxcompute.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosProject as ProjectProperty };

/**
 * Properties for defining a `Project`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export interface ProjectProps {

    /**
     * Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property comment: The comments of project.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * Property defaultQuota: Default Computing Resource Group.
     */
    readonly defaultQuota?: string | ros.IResolvable;

    /**
     * Property ipWhiteList: IP whitelist.
     */
    readonly ipWhiteList?: RosProject.IpWhiteListProperty | ros.IResolvable;

    /**
     * Property properties: Project base attributes.
     */
    readonly properties?: RosProject.PropertiesProperty | ros.IResolvable;
}

/**
 * Represents a `Project`.
 */
export interface IProject extends ros.IResource {
    readonly props: ProjectProps;

    /**
     * Attribute Name: The name of the project.
     */
    readonly attrName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MaxCompute::Project`, which is used to create a MaxCompute project.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export class Project extends ros.Resource implements IProject {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ProjectProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the project.
     */
    public readonly attrName: ros.IResolvable | string;

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
            comment: props.comment,
            defaultQuota: props.defaultQuota,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PayAsYouGo' : props.chargeType,
            ipWhiteList: props.ipWhiteList,
            properties: props.properties,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosProject;
        this.attrName = rosProject.attrName;
    }
}
