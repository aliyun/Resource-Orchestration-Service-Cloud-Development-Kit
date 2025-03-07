import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGroup as GroupProperty };

/**
 * Properties for defining a `Group`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
 */
export interface GroupProps {

    /**
     * Property groupName: The name of the Group.It must be 4 to 128 characters in length, and can contain letters, digits, underscores (_), dashes (-), spaces and dots (.), It must start with a letter.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * Property basePath: The base path of API.
     */
    readonly basePath?: string | ros.IResolvable;

    /**
     * Property description: Description of the Group, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * Property internetEnable: Enable or disable internet subdomain. True for enable.
     */
    readonly internetEnable?: boolean | ros.IResolvable;

    /**
     * Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    readonly passthroughHeaders?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosGroup.TagsProperty[];

    /**
     * Property vpcIntranetEnable: Enable or disable VPC intranet subdomain. True for enable.
     */
    readonly vpcIntranetEnable?: boolean | ros.IResolvable;
}

/**
 * Represents a `Group`.
 */
export interface IGroup extends ros.IResource {
    readonly props: GroupProps;

    /**
     * Attribute GroupId: The id of the created Group resource
     */
    readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    readonly attrSubDomain: ros.IResolvable | string;

    /**
     * Attribute Tags: Tags of app
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Group`, which is used to create an API group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-group
 */
export class Group extends ros.Resource implements IGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupId: The id of the created Group resource
     */
    public readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    public readonly attrSubDomain: ros.IResolvable | string;

    /**
     * Attribute Tags: Tags of app
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGroup = new RosGroup(this, id,  {
            internetEnable: props.internetEnable,
            groupName: props.groupName,
            description: props.description,
            instanceId: props.instanceId,
            vpcIntranetEnable: props.vpcIntranetEnable,
            basePath: props.basePath,
            tags: props.tags,
            passthroughHeaders: props.passthroughHeaders,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupId = rosGroup.attrGroupId;
        this.attrSubDomain = rosGroup.attrSubDomain;
        this.attrTags = rosGroup.attrTags;
    }
}
