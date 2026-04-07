import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EMR::Cluster2`, which is used to query E-MapReduce (EMR) clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-cluster2
 */
export declare class RosCluster2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::Cluster2";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The resource group id of emr cluster.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of emr cluster.
     */
    tags: RosCluster2.TagsProperty[] | undefined;
    /**
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
 * Properties for defining a `RosFlowProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
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
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::EMR::FlowProjects`, which is used to query projects.
 * @Note This class does not contain additional functions, so it is recommended to use the `FlowProjects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
 */
export declare class RosFlowProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EMR::FlowProjects";
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
