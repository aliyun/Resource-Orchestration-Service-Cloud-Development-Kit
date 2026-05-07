import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
export interface RosClusterProps {
    /**
     * @Property clusterName: The name of cluster.
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * @Property clusterType: The type of cluster.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * @Property replicaCount: The number of replicas.
     */
    readonly replicaCount: number | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing dash vector cluster
     * False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
     * If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
     */
    readonly ignoreExisting?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DashVector::Cluster`, which is used to create a DashVector cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DashVector::Cluster";
    /**
     * @Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * @Attribute Endpoint: The endpoint of the cluster.
     */
    readonly attrEndpoint: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the cluster.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterName: The name of cluster.
     */
    clusterName: string | ros.IResolvable;
    /**
     * @Property clusterType: The type of cluster.
     */
    clusterType: string | ros.IResolvable;
    /**
     * @Property replicaCount: The number of replicas.
     */
    replicaCount: number | ros.IResolvable;
    /**
     * @Property ignoreExisting: Whether to ignore existing dash vector cluster
     * False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it.
     * True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored.
     * If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.
     */
    ignoreExisting: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
