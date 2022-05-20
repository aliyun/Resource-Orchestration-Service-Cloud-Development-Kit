import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './edas.generated';
export { RosCluster as ClusterProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::Cluster`
 */
export interface ClusterProps {
    /**
     * Property clusterName: Cluster name
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
     */
    readonly clusterType: number | ros.IResolvable;
    /**
     * Property networkMode: Network Type. 1- classic network, 2-VPC
     */
    readonly networkMode: number | ros.IResolvable;
    /**
     * Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
     */
    readonly logicalRegionId?: string | ros.IResolvable;
    /**
     * Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
     */
    readonly oversoldFactor?: number | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::EDAS::Cluster`
 */
export declare class Cluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: Cluster ID
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ClusterName: Cluster name
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * Attribute IaasProvider: Provider
     */
    readonly attrIaasProvider: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=cluster.d.ts.map