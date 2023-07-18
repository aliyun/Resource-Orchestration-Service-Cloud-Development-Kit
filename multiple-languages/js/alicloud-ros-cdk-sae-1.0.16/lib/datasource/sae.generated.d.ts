import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::SAE::Applications`
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
}
/**
 * A ROS template type:  `DATASOURCE::SAE::Applications`
 */
export declare class RosApplications extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Applications";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::SAE::Applications`.
     *
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
 * Properties for defining a `DATASOURCE::SAE::Namespaces`
 */
export interface RosNamespacesProps {
}
/**
 * A ROS template type:  `DATASOURCE::SAE::Namespaces`
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SAE::Namespaces";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::SAE::Namespaces`.
     *
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
