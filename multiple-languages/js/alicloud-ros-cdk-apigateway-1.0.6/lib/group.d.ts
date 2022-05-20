import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './apigateway.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Group`
 */
export interface GroupProps {
    /**
     * Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly groupName: string | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::ApiGateway::Group`
 */
export declare class Group extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GroupId: The id of the created Group resource
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    readonly attrSubDomain: ros.IResolvable;
    /**
     * Attribute Tags: Tags of app
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::Group`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=group.d.ts.map