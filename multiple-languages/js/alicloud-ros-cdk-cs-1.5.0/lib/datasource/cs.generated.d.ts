import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosClusterApplicationResources`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
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
     * @Property apiVersion: The api version of kubernetes resource to query.
     */
    readonly apiVersion?: string | ros.IResolvable;
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
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::ClusterApplicationResources`, which is used to query the information about resources of a specified type in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterApplicationResources` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusterapplicationresources
 */
export declare class RosClusterApplicationResources extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterApplicationResources";
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
     * @Property apiVersion: The api version of kubernetes resource to query.
     */
    apiVersion: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosClusterNodePools`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export interface RosClusterNodePoolsProps {
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::ClusterNodePools`, which is used to query the information about all node pools in a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterNodePools` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusternodepools
 */
export declare class RosClusterNodePools extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterNodePools";
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
 * Properties for defining a `RosClusterUserKubeconfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    readonly temporaryDurationMinutes?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::ClusterUserKubeconfig`, which is used to query the kubeconfig file of a Container Service for Kubernetes (ACK) cluster by cluster ID.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClusterUserKubeconfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
 */
export declare class RosClusterUserKubeconfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::ClusterUserKubeconfig";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property temporaryDurationMinutes: The validity period of a temporary kubeconfig file. Unit: minutes. Valid values: 15 to 4320.
     * Note If you do not specify this parameter, the system automatically specifies a validity period, which is indicated by the expiration field in the response.
     */
    temporaryDurationMinutes: number | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosKubernetesCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
export interface RosKubernetesClusterProps {
    /**
     * @Property clusterId: Cluster instance ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::KubernetesCluster`, which is used to query the information about a Container Service for Kubernetes (ACK) cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `KubernetesCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetescluster
 */
export declare class RosKubernetesCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::KubernetesCluster";
    /**
     * @Attribute ClusterId: Cluster instance ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute ClusterSpec: The type of the managed Kubernetes cluster. This parameter is returned for a managed Kubernetes cluster. Valid values:
- ack.pro.small: professional managed Kubernetes cluster.
- ack.standard: standard managed Kubernetes cluster.
     */
    readonly attrClusterSpec: ros.IResolvable;
    /**
     * @Attribute ClusterType: The type of the cluster. Valid values:
- Kubernetes: dedicated Kubernetes cluster
- ManagedKubernetes: managed Kubernetes cluster
- Ask: ASK cluster
- ExternalKubernetes: registered external Kubernetes cluster
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * @Attribute Created: The time when the cluster was created.
     */
    readonly attrCreated: ros.IResolvable;
    /**
     * @Attribute CurrentVersion: The current Kubernetes version of the cluster. For more information about the Kubernetes versions supported by ACK, see Release notes for Kubernetes versions.
     */
    readonly attrCurrentVersion: ros.IResolvable;
    /**
     * @Attribute DeletionProtection: Indicates whether deletion protection is enabled. If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling the API. Valid values:
- true: Deletion protection is enabled. You cannot delete the cluster in the ACK console or by calling the API.
- false: Deletion protection is not enabled. You can delete the cluster in the ACK console or by calling the API.
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * @Attribute DockerVersion: The Docker version that is used by the cluster.
     */
    readonly attrDockerVersion: ros.IResolvable;
    /**
     * @Attribute ExternalLoadbalancerId: The ID of the Server Load Balancer (SLB) instance that is used for the Ingress of the cluster.
     */
    readonly attrExternalLoadbalancerId: ros.IResolvable;
    /**
     * @Attribute InitVersion: The Kubernetes version that is initially used by the cluster.
     */
    readonly attrInitVersion: ros.IResolvable;
    /**
     * @Attribute MaintenanceWindow: The maintenance window of the cluster. This feature is available in only professional managed Kubernetes clusters.
     */
    readonly attrMaintenanceWindow: ros.IResolvable;
    /**
     * @Attribute MasterUrl: The address of the cluster. It includes an internal endpoint and a public endpoint.
     */
    readonly attrMasterUrl: ros.IResolvable;
    /**
     * @Attribute MetaData: The metadata of the cluster.
     */
    readonly attrMetaData: ros.IResolvable;
    /**
     * @Attribute Name: The name of the cluster. The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute NetworkMode: The network mode of the cluster. Valid values:
- classic: the classic network
- vpc: virtual private cloud (VPC)
- overlay: overlay network
- calico: network powered by Calico
Default value: vpc.
     */
    readonly attrNetworkMode: ros.IResolvable;
    /**
     * @Attribute NextVersion: The Kubernetes version to which the cluster can be upgraded.
     */
    readonly attrNextVersion: ros.IResolvable;
    /**
     * @Attribute Parameters: A collection of cluster ROS parameters.
     */
    readonly attrParameters: ros.IResolvable;
    /**
     * @Attribute PrivateZone: Indicates whether Alibaba Cloud DNS PrivateZone is enabled.
- true: indicates that Alibaba Cloud DNS PrivateZone is enabled.- false: indicates that Alibaba Cloud DNS PrivateZone is not enabled.
     */
    readonly attrPrivateZone: ros.IResolvable;
    /**
     * @Attribute Profile: Indicates the scenario in which the cluster is used. Valid values:
- Default: indicates that the cluster is used in non-edge computing scenarios.
- Edge: indicates that the ACK cluster is used in edge computing scenarios.
     */
    readonly attrProfile: ros.IResolvable;
    /**
     * @Attribute RegionId: The ID of the region where the cluster is deployed.
     */
    readonly attrRegionId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the cluster belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: The ID of the security group to which the instances of the cluster belong.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute Size: The number of nodes in the cluster. Master nodes and worker nodes are included.
     */
    readonly attrSize: ros.IResolvable;
    /**
     * @Attribute State: The state of the cluster. Valid values:
- initial: The cluster is being created.
- failed: The cluster failed to be created.
- running: The cluster is running.
- updating: The cluster is being upgraded.
- updating_failed: The cluster failed to be upgraded.
- scaling: The cluster is being scaled.
- waiting: The registered cluster is waiting for connecting.
- disconnected: The registeredcluster is disconnected.
- stopped: The cluster is stopped.
- deleting: The cluster is being deleted.
- deleted: The cluster is deleted.
- delete_failed: The cluster failed to be deleted.
     */
    readonly attrState: ros.IResolvable;
    /**
     * @Attribute SubnetCidr: The pod CIDR block. It must be a valid and private CIDR block, and must be one of the following CIDR blocks or their subnets:
- 10.0.0.0/8
- 172.16-31.0.0/12-16
- 192.168.0.0/16
The pod CIDR block cannot overlap with that of the VPC or those of the ACK clusters that are deployed in the VPC. For more information about the network segmentation of ACK clusters, see Plan CIDR blocks for ACK clusters in a VPC.
     */
    readonly attrSubnetCidr: ros.IResolvable;
    /**
     * @Attribute Tags: The labels of the cluster.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute Updated: The time when the cluster was updated.
     */
    readonly attrUpdated: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The IDs of the vSwitches. You can select one to three vSwitches when you create an ACK cluster. vSwitches in different zones are recommended to ensure high availability.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC where the cluster is deployed. This parameter is required when you create an ACK cluster.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute WorkerRamRoleName: The name of the worker RAM role.
The RAM role is assigned to the worker nodes of the cluster and allows the worker nodes to manage Elastic Compute Service (ECS) instances.
     */
    readonly attrWorkerRamRoleName: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the zone where the cluster is deployed.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterId: Cluster instance ID.
     */
    clusterId: string | ros.IResolvable | undefined;
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
    constructor(scope: ros.Construct, id: string, props: RosKubernetesClusterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosKubernetesClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
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
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CS::KubernetesClusters`, which is used to query Container Service for Kubernetes (ACK) clusters.
 * @Note This class does not contain additional functions, so it is recommended to use the `KubernetesClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
 */
export declare class RosKubernetesClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CS::KubernetesClusters";
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
