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
