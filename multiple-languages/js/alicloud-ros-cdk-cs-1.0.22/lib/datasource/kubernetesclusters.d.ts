import * as ros from '@alicloud/ros-cdk-core';
import { RosKubernetesClusters } from './cs.generated';
export { RosKubernetesClusters as KubernetesClustersProperty };
/**
 * Properties for defining a `KubernetesClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
 */
export interface KubernetesClustersProps {
    /**
     * Property clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
     * ack.pro.small: professional managed Kubernetes cluster
     * ack.standard: standard managed Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    readonly clusterSpec?: string | ros.IResolvable;
    /**
     * Property clusterType: The type of the cluster. Valid values:
     * Kubernetes: dedicated Kubernetes cluster
     * ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
     * Ask: ASK cluster
     * ExternalKubernetes: registered external cluster
     * When you query an ASK cluster, the value specified when the cluster was created is returned.
     */
    readonly clusterType?: string | ros.IResolvable;
    /**
     * Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
     * Default: managed Kubernetes cluster
     * Serverless: ASK cluster
     * Edge: edge Kubernetes cluster
     * By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
     */
    readonly profile?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CS::KubernetesClusters`, which is used to query Container Service for Kubernetes (ACK) clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKubernetesClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
 */
export declare class KubernetesClusters extends ros.Resource {
    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * Attribute Clusters: The list of clusters.
     */
    readonly attrClusters: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: KubernetesClustersProps, enableResourcePropertyConstraint?: boolean);
}
