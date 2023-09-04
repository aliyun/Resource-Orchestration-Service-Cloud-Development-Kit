import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::EDAS::Applications`
 */
export interface RosApplicationsProps {
    /**
     * @Property appName: The application name keyword.
     */
    readonly appName?: string | ros.IResolvable;
    /**
     * @Property clusterId: The ID of the cluster.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EDAS::Applications`
 */
export declare class RosApplications extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EDAS::Applications";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AppIds: The list of application IDs.
     */
    readonly attrAppIds: ros.IResolvable;
    /**
     * @Attribute Applications: The list of applications.
     */
    readonly attrApplications: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The application name keyword.
     */
    appName: string | ros.IResolvable | undefined;
    /**
     * @Property clusterId: The ID of the cluster.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    logicalRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EDAS::Applications`.
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
 * Properties for defining a `DATASOURCE::EDAS::Clusters`
 */
export interface RosClustersProps {
    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EDAS::Clusters`
 */
export declare class RosClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EDAS::Clusters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * @Attribute Clusters: The list of clusters.
     */
    readonly attrClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property logicalRegionId: The ID of the namespace.
     */
    logicalRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EDAS::Clusters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::EDAS::UserDefineRegions`
 */
export interface RosUserDefineRegionsProps {
}
/**
 * A ROS template type:  `DATASOURCE::EDAS::UserDefineRegions`
 */
export declare class RosUserDefineRegions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EDAS::UserDefineRegions";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Ids: The list of user define region IDs.
     */
    readonly attrIds: ros.IResolvable;
    /**
     * @Attribute UserDefineRegions: The list of user define regions.
     */
    readonly attrUserDefineRegions: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * Create a new `DATASOURCE::EDAS::UserDefineRegions`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserDefineRegionsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
