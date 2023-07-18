import * as ros from '@alicloud/ros-cdk-core';
import { RosKubernetesClusters } from './cs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKubernetesClusters as KubernetesClustersProperty };

/**
 * Properties for defining a `DATASOURCE::CS::KubernetesClusters`
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
 * A ROS resource type:  `DATASOURCE::CS::KubernetesClusters`
 */
export class KubernetesClusters extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * Attribute Clusters: The list of clusters.
     */
    public readonly attrClusters: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CS::KubernetesClusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KubernetesClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosKubernetesClusters = new RosKubernetesClusters(this, id,  {
            clusterSpec: props.clusterSpec,
            clusterType: props.clusterType,
            profile: props.profile,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKubernetesClusters;
        this.attrClusterIds = rosKubernetesClusters.attrClusterIds;
        this.attrClusters = rosKubernetesClusters.attrClusters;
    }
}
