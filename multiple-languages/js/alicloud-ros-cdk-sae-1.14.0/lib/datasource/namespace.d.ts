import * as ros from '@alicloud/ros-cdk-core';
import { RosNamespace } from './sae.generated';
export { RosNamespace as NamespaceProperty };
/**
 * Properties for defining a `Namespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
 */
export interface NamespaceProps {
    /**
     * Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * Property nameSpaceShortId: The ID of the short namespace.
     */
    readonly nameSpaceShortId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Namespace`.
 */
export interface INamespace extends ros.IResource {
    readonly props: NamespaceProps;
    /**
     * Attribute AppCount: The number of applications.
     */
    readonly attrAppCount: ros.IResolvable | string;
    /**
     * Attribute BelongRegion: The region to which the namespace belongs.
     */
    readonly attrBelongRegion: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute JumpServerAppId: The ID of the jump server application.
     */
    readonly attrJumpServerAppId: ros.IResolvable | string;
    /**
     * Attribute JumpServerIp: The IP address of the jump server.
     */
    readonly attrJumpServerIp: ros.IResolvable | string;
    /**
     * Attribute LastChangeOrderId: The ID of the change order.
     */
    readonly attrLastChangeOrderId: ros.IResolvable | string;
    /**
     * Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
     */
    readonly attrLastChangeOrderRunning: ros.IResolvable | string;
    /**
     * Attribute LastChangeOrderStatus: The status of the latest change order.
     */
    readonly attrLastChangeOrderStatus: ros.IResolvable | string;
    /**
     * Attribute NameSpaceShortId: The ID of the short namespace.
     */
    readonly attrNameSpaceShortId: ros.IResolvable | string;
    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable | string;
    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    readonly attrNamespaceName: ros.IResolvable | string;
    /**
     * Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
     */
    readonly attrNotificationExpired: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute TenantId: The ID of the tenant in the SAE namespace.
     */
    readonly attrTenantId: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the user.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VSwitchName: The name of the vSwitch.
     */
    readonly attrVSwitchName: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SAE::Namespace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
 */
export declare class Namespace extends ros.Resource implements INamespace {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NamespaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppCount: The number of applications.
     */
    readonly attrAppCount: ros.IResolvable | string;
    /**
     * Attribute BelongRegion: The region to which the namespace belongs.
     */
    readonly attrBelongRegion: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute JumpServerAppId: The ID of the jump server application.
     */
    readonly attrJumpServerAppId: ros.IResolvable | string;
    /**
     * Attribute JumpServerIp: The IP address of the jump server.
     */
    readonly attrJumpServerIp: ros.IResolvable | string;
    /**
     * Attribute LastChangeOrderId: The ID of the change order.
     */
    readonly attrLastChangeOrderId: ros.IResolvable | string;
    /**
     * Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
     */
    readonly attrLastChangeOrderRunning: ros.IResolvable | string;
    /**
     * Attribute LastChangeOrderStatus: The status of the latest change order.
     */
    readonly attrLastChangeOrderStatus: ros.IResolvable | string;
    /**
     * Attribute NameSpaceShortId: The ID of the short namespace.
     */
    readonly attrNameSpaceShortId: ros.IResolvable | string;
    /**
     * Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable | string;
    /**
     * Attribute NamespaceName: The name of the namespace.
     */
    readonly attrNamespaceName: ros.IResolvable | string;
    /**
     * Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
     */
    readonly attrNotificationExpired: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute TenantId: The ID of the tenant in the SAE namespace.
     */
    readonly attrTenantId: ros.IResolvable | string;
    /**
     * Attribute UserId: The ID of the user.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VSwitchName: The name of the vSwitch.
     */
    readonly attrVSwitchName: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NamespaceProps, enableResourcePropertyConstraint?: boolean);
}
