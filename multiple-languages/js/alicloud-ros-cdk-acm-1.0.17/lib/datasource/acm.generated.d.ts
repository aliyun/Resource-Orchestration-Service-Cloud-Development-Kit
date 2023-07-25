import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::ACM::Configurations`
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
}
/**
 * A ROS template type:  `DATASOURCE::ACM::Configurations`
 */
export declare class RosConfigurations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ACM::Configurations";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ACM::Configurations`.
     *
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
 * Properties for defining a `DATASOURCE::ACM::Namespaces`
 */
export interface RosNamespacesProps {
}
/**
 * A ROS template type:  `DATASOURCE::ACM::Namespaces`
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ACM::Namespaces";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::ACM::Namespaces`.
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
