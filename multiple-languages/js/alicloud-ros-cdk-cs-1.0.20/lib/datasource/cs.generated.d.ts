import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::CS::ClusterApplicationResources`
 */
export interface RosClusterApplicationResourcesProps {
    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property kind: The kind of kubernetes resources to query.
     */
    readonly kind: string | ros.IResolvable;
    /**
     * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
     */
    readonly firstMatch?: boolean | ros.IResolvable;
    /**
     * @Property jsonPath: Json path expression to filter the output.
     */
    readonly jsonPath?: string | ros.IResolvable;
    /**
     * @Property name: The name of the kubernetes resource to query.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property namespace: The namespace of kubernetes containing the resource. Default value is default
     */
    readonly namespace?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CS::ClusterApplicationResources`
 */
export declare class RosClusterApplicationResources extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterApplicationResources";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Response: Query result of kubernetes resource(s).
     */
    readonly attrResponse: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The ID of the kubernetes cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property kind: The kind of kubernetes resources to query.
     */
    kind: string | ros.IResolvable;
    /**
     * @Property firstMatch: Only the first matching result in jsonpath's filtered results is returned. Default False
     */
    firstMatch: boolean | ros.IResolvable | undefined;
    /**
     * @Property jsonPath: Json path expression to filter the output.
     */
    jsonPath: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the kubernetes resource to query.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property namespace: The namespace of kubernetes containing the resource. Default value is default
     */
    namespace: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CS::ClusterApplicationResources`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterApplicationResourcesProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::CS::ClusterNodePools`
 */
export interface RosClusterNodePoolsProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CS::ClusterNodePools`
 */
export declare class RosClusterNodePools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterNodePools";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute NodePoolIds: The list of node_pool IDs.
     */
    readonly attrNodePoolIds: ros.IResolvable;
    /**
     * @Attribute NodePools: The list of node_pools.
     */
    readonly attrNodePools: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CS::ClusterNodePools`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterNodePoolsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::CS::ClusterUserKubeconfig`
 */
export interface RosClusterUserKubeconfigProps {
    /**
     * @Property clusterId: The ID of the ACK cluster.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
     * true: obtains the credential that is used to connect to the cluster over the internal network.
     * false: obtains the credential that is used to connect to the cluster over the Internet.
     * Default value: false.
     */
    readonly privateIpAddress?: boolean | ros.IResolvable;
    /**
     * @Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    readonly temporaryDurationMinutes?: number | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CS::ClusterUserKubeconfig`
 */
export declare class RosClusterUserKubeconfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterUserKubeconfig";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: The ID of the ACK cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute Config: The content of the kubeconfig file.
     */
    readonly attrConfig: ros.IResolvable;
    /**
     * @Attribute Expiration: The expiration time of the kubeconfig file. The value is the UTC time displayed in RFC3339 format.
     */
    readonly attrExpiration: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: The ID of the ACK cluster.
     */
    clusterId: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: Specifies whether to obtain the credential that is used to connect to the cluster over the internal network. Valid values:
     * true: obtains the credential that is used to connect to the cluster over the internal network.
     * false: obtains the credential that is used to connect to the cluster over the Internet.
     * Default value: false.
     */
    privateIpAddress: boolean | ros.IResolvable | undefined;
    /**
     * @Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    temporaryDurationMinutes: number | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CS::ClusterUserKubeconfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterUserKubeconfigProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `DATASOURCE::CS::KubernetesClusters`
 */
export interface RosKubernetesClustersProps {
    /**
     * @Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
     * ack.pro.small: professional managed Kubernetes cluster
     * ack.standard: standard managed Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * @Property clusterType: The type of the cluster. Valid values:
     * Kubernetes: dedicated Kubernetes cluster
     * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
     * Ask: ASK cluster
     * ExternalKubernetes: registered external cluster
     * When you query an ASK cluster, the value specified when the cluster was created is returned.
     */
    readonly clusterType?: string | ros.IResolvable;
    /**
     * @Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
     * Default: managed Kubernetes cluster
     * Serverless: ASK cluster
     * Edge: edge Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    readonly profile?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::CS::KubernetesClusters`
 */
export declare class RosKubernetesClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::KubernetesClusters";
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
     * @Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
     * ack.pro.small: professional managed Kubernetes cluster
     * ack.standard: standard managed Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    clusterSpec: string | ros.IResolvable | undefined;
    /**
     * @Property clusterType: The type of the cluster. Valid values:
     * Kubernetes: dedicated Kubernetes cluster
     * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
     * Ask: ASK cluster
     * ExternalKubernetes: registered external cluster
     * When you query an ASK cluster, the value specified when the cluster was created is returned.
     */
    clusterType: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
     * Default: managed Kubernetes cluster
     * Serverless: ASK cluster
     * Edge: edge Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    profile: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::CS::KubernetesClusters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClustersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
