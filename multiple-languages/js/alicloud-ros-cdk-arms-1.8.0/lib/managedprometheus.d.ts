import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedPrometheus } from './arms.generated';
export { RosManagedPrometheus as ManagedPrometheusProperty };
/**
 * Properties for defining a `ManagedPrometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export interface ManagedPrometheusProps {
    /**
     * Property clusterType: The type of the cluster. Currently, only ask, ecs and one clusters are supported. Default is ecs.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * Property securityGroupId: The security group ID of the cluster.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * Property vpcId: The vpc ID of the cluster.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The vswith ID of the cluster.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property clusterId: The ID of the Kubernetes cluster of Alibaba Cloud Container Service for Kubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property clusterName: The name of the cluster. Required when the ClusterType is ecs.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    readonly grafanaInstanceId?: string | ros.IResolvable;
}
/**
 * Represents a `ManagedPrometheus`.
 */
export interface IManagedPrometheus extends ros.IResource {
    readonly props: ManagedPrometheusProps;
    /**
     * Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute VpcId: The vpc ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::ManagedPrometheus`, which is used to install a Prometheus instance to monitor a serverless Kubernetes (ASK) cluster or an Elastic Compute Service (ECS) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosManagedPrometheus`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-managedprometheus
 */
export declare class ManagedPrometheus extends ros.Resource implements IManagedPrometheus {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ManagedPrometheusProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute VpcId: The vpc ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedPrometheusProps, enableResourcePropertyConstraint?: boolean);
}
