import * as ros from '@alicloud/ros-cdk-core';
import { RosAcl } from './rocketmq5.generated';
export { RosAcl as AclProperty };
/**
 * Properties for defining a `Acl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
 */
export interface AclProps {
    /**
     * Property actions: The type of operation authorized.
     */
    readonly actions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property decision: The decision result of the authorization. Valid values:
     * * Deny: Access is denied.
     * * Allow: Allow access.
     */
    readonly decision: string | ros.IResolvable;
    /**
     * Property instanceId: The ID of the RocketMQ instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property resourceName: The name of the resource on which you want to grant permissions.
     */
    readonly resourceName: string | ros.IResolvable;
    /**
     * Property resourceType: The type of the resource on which you want to grant permissions. Valid values:
     * * Group: consumer Group.
     * * Topic: Topic.
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * Property username: The username of the account.
     */
    readonly username: string | ros.IResolvable;
    /**
     * Property ipWhitelists: The IP addresses in the whitelist.
     */
    readonly ipWhitelists?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `Acl`.
 */
export interface IAcl extends ros.IResource {
    readonly props: AclProps;
    /**
     * Attribute Actions: The type of operation authorized.
     */
    readonly attrActions: ros.IResolvable | string;
    /**
     * Attribute Decision: The decision result of the authorization.
     */
    readonly attrDecision: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute IpWhitelists: The IP addresses in the whitelist.
     */
    readonly attrIpWhitelists: ros.IResolvable | string;
    /**
     * Attribute ResourceName: The name of the resource on which you want to grant permissions.
     */
    readonly attrResourceName: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The type of the resource on which you want to grant permissions.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute Username: The username of the account.
     */
    readonly attrUsername: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROCKETMQ5::Acl`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcl`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rocketmq5-acl
 */
export declare class Acl extends ros.Resource implements IAcl {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AclProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Actions: The type of operation authorized.
     */
    readonly attrActions: ros.IResolvable | string;
    /**
     * Attribute Decision: The decision result of the authorization.
     */
    readonly attrDecision: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the RocketMQ instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute IpWhitelists: The IP addresses in the whitelist.
     */
    readonly attrIpWhitelists: ros.IResolvable | string;
    /**
     * Attribute ResourceName: The name of the resource on which you want to grant permissions.
     */
    readonly attrResourceName: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The type of the resource on which you want to grant permissions.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute Username: The username of the account.
     */
    readonly attrUsername: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclProps, enableResourcePropertyConstraint?: boolean);
}
