import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApplications`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
export interface RosApplicationsProps {
    /**
     * @Property appName: The name of application.
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * @Property fieldType: Set the dimension of the filter application. Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    readonly fieldType?: string | ros.IResolvable;
    /**
     * @Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    readonly fieldValue?: string | ros.IResolvable;
    /**
     * @Property namespaceId: The ID of namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SAE::Applications`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Applications` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
 */
export declare class RosApplications extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Applications";
    /**
     * @Attribute ApplicationIds: The list of application IDs.
     */
    readonly attrApplicationIds: ros.IResolvable;
    /**
     * @Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The name of application.
     */
    appName: string | ros.IResolvable | undefined;
    /**
     * @Property fieldType: Set the dimension of the filter application. Valid values:
     * appName: The application name.
     * appIds: App IDs.
     * slbIps: SLB IP address.
     * instanceIps: Instance IP address.
     */
    fieldType: string | ros.IResolvable | undefined;
    /**
     * @Property fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
     */
    fieldValue: string | ros.IResolvable | undefined;
    /**
     * @Property namespaceId: The ID of namespace.
     */
    namespaceId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplicationsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
 */
export interface RosNamespaceProps {
    /**
     * @Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;
    /**
     * @Property nameSpaceShortId: The ID of the short namespace.
     */
    readonly nameSpaceShortId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SAE::Namespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespace
 */
export declare class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Namespace";
    /**
     * @Attribute AppCount: The number of applications.
     */
    readonly attrAppCount: ros.IResolvable;
    /**
     * @Attribute BelongRegion: The region to which the namespace belongs.
     */
    readonly attrBelongRegion: ros.IResolvable;
    /**
     * @Attribute Description: The description of the namespace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute JumpServerAppId: The ID of the jump server application.
     */
    readonly attrJumpServerAppId: ros.IResolvable;
    /**
     * @Attribute JumpServerIp: The IP address of the jump server.
     */
    readonly attrJumpServerIp: ros.IResolvable;
    /**
     * @Attribute LastChangeOrderId: The ID of the change order.
     */
    readonly attrLastChangeOrderId: ros.IResolvable;
    /**
     * @Attribute LastChangeOrderRunning: Indicates whether a change order is being executed in the namespace.
     */
    readonly attrLastChangeOrderRunning: ros.IResolvable;
    /**
     * @Attribute LastChangeOrderStatus: The status of the latest change order.
     */
    readonly attrLastChangeOrderStatus: ros.IResolvable;
    /**
     * @Attribute NameSpaceShortId: The ID of the short namespace.
     */
    readonly attrNameSpaceShortId: ros.IResolvable;
    /**
     * @Attribute NamespaceId: The ID of the namespace.
     */
    readonly attrNamespaceId: ros.IResolvable;
    /**
     * @Attribute NamespaceName: The name of the namespace.
     */
    readonly attrNamespaceName: ros.IResolvable;
    /**
     * @Attribute NotificationExpired: Indicates whether the notification of a change order is expired.
     */
    readonly attrNotificationExpired: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute TenantId: The ID of the tenant in the SAE namespace.
     */
    readonly attrTenantId: ros.IResolvable;
    /**
     * @Attribute UserId: The ID of the user.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VSwitchName: The name of the vSwitch.
     */
    readonly attrVSwitchName: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespaceId: The ID of the namespace.
     */
    namespaceId: string | ros.IResolvable | undefined;
    /**
     * @Property nameSpaceShortId: The ID of the short namespace.
     */
    nameSpaceShortId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosNamespaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
 */
export interface RosNamespacesProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SAE::Namespaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Namespaces";
    /**
     * @Attribute NamespaceIds: The list of namespace names.
     */
    readonly attrNamespaceIds: ros.IResolvable;
    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespacesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
