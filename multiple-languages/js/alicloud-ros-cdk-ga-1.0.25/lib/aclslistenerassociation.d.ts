import * as ros from '@alicloud/ros-cdk-core';
import { RosAclsListenerAssociation } from './ga.generated';
export { RosAclsListenerAssociation as AclsListenerAssociationProperty };
/**
 * Properties for defining a `AclsListenerAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
export interface AclsListenerAssociationProps {
    /**
     * Property aclIds: The ID of the ACL. You can associate up to two ACL IDs.
     */
    readonly aclIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property aclType: The type of ACL. Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
     * black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
     */
    readonly aclType: string | ros.IResolvable;
    /**
     * Property listenerId: The ID of the listener.
     */
    readonly listenerId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::AclsListenerAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAclsListenerAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
 */
export declare class AclsListenerAssociation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AclsListenerAssociationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AclIds: The IDs of the ACL.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * Attribute ListenerId: The ID of the listener.
     */
    readonly attrListenerId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclsListenerAssociationProps, enableResourcePropertyConstraint?: boolean);
}
