import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::EMR::Cluster2`
 */
export interface RosCluster2Props {
    /**
     * @Property clusterIds: The list of emr cluster id.
     */
    readonly clusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterName: The name of cluster.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * @Property clusterStates: The list of emr cluster state.
     */
    readonly clusterStates?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property clusterType: The list of emr cluster type.
     */
    readonly clusterType?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property paymentTypes: The payment type of emr cluster.
     */
    readonly paymentTypes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The resource group id of emr cluster.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of emr cluster.
     */
    readonly tags?: RosCluster2.TagsProperty[];
}
/**
 * A ROS template type:  `DATASOURCE::EMR::Cluster2`
 */
export declare class RosCluster2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::Cluster2";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterIds: The list of the cluster id.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * @Attribute Clusters: The detail of the cluster.
     */
    readonly attrClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterIds: The list of emr cluster id.
     */
    clusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clusterName: The name of cluster.
     */
    clusterName: string | ros.IResolvable | undefined;
    /**
     * @Property clusterStates: The list of emr cluster state.
     */
    clusterStates: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property clusterType: The list of emr cluster type.
     */
    clusterType: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property paymentTypes: The payment type of emr cluster.
     */
    paymentTypes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group id of emr cluster.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of emr cluster.
     */
    tags: RosCluster2.TagsProperty[] | undefined;
    /**
     * Create a new `DATASOURCE::EMR::Cluster2`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCluster2Props, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster2 {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `DATASOURCE::EMR::FlowProjects`
 */
export interface RosFlowProjectsProps {
    /**
     * @Property flowProjectId: The first ID of the resource
     */
    readonly flowProjectId?: string | ros.IResolvable;
    /**
     * @Property flowProjectName: Project name.
     */
    readonly flowProjectName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::EMR::FlowProjects`
 */
export declare class RosFlowProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::FlowProjects";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute FlowProjectIds: The list of flow project IDs.
     */
    readonly attrFlowProjectIds: ros.IResolvable;
    /**
     * @Attribute FlowProjects: The list of flow projects.
     */
    readonly attrFlowProjects: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowProjectId: The first ID of the resource
     */
    flowProjectId: string | ros.IResolvable | undefined;
    /**
     * @Property flowProjectName: Project name.
     */
    flowProjectName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::EMR::FlowProjects`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProjectsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
