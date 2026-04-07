import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './dashvector.generated';
export { RosCluster as ClusterProperty };
/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
export interface ClusterProps {
    /**
     * Property clusterName: The name of cluster.
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * Property clusterType: The type of cluster.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * Property replicaCount: The number of replicas.
     */
    readonly replicaCount: number | ros.IResolvable;
    /**
     * Property ignoreExisting: Whether to ignore existing dash vector cluster
     * False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
     * If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
}
/**
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;
    /**
     * Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable | string;
    /**
     * Attribute Endpoint: The endpoint of the cluster.
     */
    readonly attrEndpoint: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the cluster.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DashVector::Cluster`, which is used to create a DashVector cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
export declare class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable | string;
    /**
     * Attribute Endpoint: The endpoint of the cluster.
     */
    readonly attrEndpoint: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the cluster.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
