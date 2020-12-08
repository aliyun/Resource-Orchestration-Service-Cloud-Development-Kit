import * as ros from '@alicloud/ros-cdk-core';
import { RosGroup } from './apigateway.generated';
export { RosGroup as GroupProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Group`
 */
export interface GroupProps {
    /**
     * @Property groupName: The name of the Group.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly groupName: string;
    /**
     * @Property description: Description of the Group, less than 180 characters.
     */
    readonly description?: string;
    /**
     * @Property instanceId: API gateway instance ID. For example, "api-shared-vpc-001" means vpc instance, while "api-shared-classic-001" means classic instance.
     */
    readonly instanceId?: string;
    /**
     * @Property passthroughHeaders: Pass through headers setting. values:
     * host: pass through host headers
     */
    readonly passthroughHeaders?: string;
    /**
     * @Property tags: Tags to attach to group. Max support 20 tags to add during create group. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
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
     * @Attribute GroupId: The id of the created Group resource
     */
    readonly attrGroupId: any;
    /**
     * @Attribute SubDomain: The sub domain assigned to the Group by the system
     */
    readonly attrSubDomain: any;
    /**
     * @Attribute Tags: Tags of app
     */
    readonly attrTags: any;
    /**
     * Create a new `ALIYUN::ApiGateway::Group`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GroupProps, enableResourcePropertyConstraint?: boolean);
}
