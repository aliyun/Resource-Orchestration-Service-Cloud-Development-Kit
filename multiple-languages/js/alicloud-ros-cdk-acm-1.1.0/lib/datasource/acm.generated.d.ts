import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosConfigurations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
 */
export interface RosConfigurationsProps {
    /**
     * @Property namespaceId: The namespace ID of configuration
     */
    readonly namespaceId: string | ros.IResolvable;
    /**
     * @Property appName: The app name of configuration
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * @Property dataId: The data ID of configuration
     */
    readonly dataId?: string | ros.IResolvable;
    /**
     * @Property group: The group of configuration
     */
    readonly group?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ACM::Configurations`, which is used to query the details of configurations.
 * @Note This class does not contain additional functions, so it is recommended to use the `Configurations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-configurations
 */
export declare class RosConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ACM::Configurations";
    /**
     * @Attribute Configurations: The list of configurations.
     */
    readonly attrConfigurations: ros.IResolvable;
    /**
     * @Attribute DataIds: The list of configuration data IDs.
     */
    readonly attrDataIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property namespaceId: The namespace ID of configuration
     */
    namespaceId: string | ros.IResolvable;
    /**
     * @Property appName: The app name of configuration
     */
    appName: string | ros.IResolvable | undefined;
    /**
     * @Property dataId: The data ID of configuration
     */
    dataId: string | ros.IResolvable | undefined;
    /**
     * @Property group: The group of configuration
     */
    group: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosConfigurationsProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ACM::Namespaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ACM::Namespaces";
    /**
     * @Attribute NamespaceIds: The list of namespace IDs.
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
