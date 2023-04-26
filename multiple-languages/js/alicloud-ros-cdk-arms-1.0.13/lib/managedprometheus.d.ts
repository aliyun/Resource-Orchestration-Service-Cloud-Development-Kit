import * as ros from '@alicloud/ros-cdk-core';
import { RosManagedPrometheus } from './arms.generated';
export { RosManagedPrometheus as ManagedPrometheusProperty };
/**
 * Properties for defining a `ALIYUN::ARMS::ManagedPrometheus`
 */
export interface ManagedPrometheusProps {
    /**
     * Property clusterType: The type of the cluster.
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
     * Property clusterName: The name of the cluster.
     */
    readonly clusterName?: string | ros.IResolvable;
    /**
     * Property grafanaInstanceId: The ID of the managed Grafana workspace bound to the cluster. When empty or "free", binds to the shared version of Grafana.
     */
    readonly grafanaInstanceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ARMS::ManagedPrometheus`
 */
export declare class ManagedPrometheus extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterType: The type of the cluster.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * Attribute VpcId: The vpc ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ARMS::ManagedPrometheus`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ManagedPrometheusProps, enableResourcePropertyConstraint?: boolean);
}
