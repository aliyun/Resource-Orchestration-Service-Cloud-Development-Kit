import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::CR::Instances`
 */
export interface RosInstancesProps {
    /**
     * @Property instanceName: InstanceName.
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CR::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceIds: The list of instance IDs.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceName: InstanceName.
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CR::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::CR::Namespaces`
 */
export interface RosNamespacesProps {
    /**
     * @Property status: The status of namespace.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CR::Namespaces`
 */
export declare class RosNamespaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Namespaces";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NamespaceNames: The list of namespace names.
     */
    readonly attrNamespaceNames: ros.IResolvable;
    /**
     * @Attribute Namespaces: The list of namespaces.
     */
    readonly attrNamespaces: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property status: The status of namespace.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CR::Namespaces`.
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
/**
 * Properties for defining a `DATASOURCE::CR::Repositories`
 */
export interface RosRepositoriesProps {
    /**
     * @Property repoNamespace: The namespace of repository.
     */
    readonly repoNamespace?: string | ros.IResolvable;
    /**
     * @Property status: The status of repository.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CR::Repositories`
 */
export declare class RosRepositories extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CR::Repositories";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute RepoNames: The list of repository names.
     */
    readonly attrRepoNames: ros.IResolvable;
    /**
     * @Attribute Repos: The list of repositories.
     */
    readonly attrRepos: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property repoNamespace: The namespace of repository.
     */
    repoNamespace: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of repository.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CR::Repositories`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepositoriesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
