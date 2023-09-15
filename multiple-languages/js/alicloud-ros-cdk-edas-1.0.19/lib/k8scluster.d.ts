import * as ros from '@alicloud/ros-cdk-core';
import { RosK8sCluster } from './edas.generated';
export { RosK8sCluster as K8sClusterProperty };
/**
 * Properties for defining a `ALIYUN::EDAS::K8sCluster`
 */
export interface K8sClusterProps {
    /**
     * Property csClusterId: The ID of the CS cluster.
     */
    readonly csClusterId: string | ros.IResolvable;
    /**
     * Property enableAsm: Whether enable ASM.
     */
    readonly enableAsm?: string | ros.IResolvable;
    /**
     * Property namespaceId: The ID of the namespace to which the cluster that you want to import belongs.
     */
    readonly namespaceId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::EDAS::K8sCluster`
 */
export declare class K8sCluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ClusterName: The name of the cluster.
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * Attribute ClusterType: The type of the cluster:
2: ECS cluster
5: Container Service K8s cluster or Serverless K8s cluster
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * Attribute CsClusterId: The ID of the K8s cluster.
     */
    readonly attrCsClusterId: ros.IResolvable;
    /**
     * Attribute NetworkMode: Network node:
1: Classic network
2: VPC
     */
    readonly attrNetworkMode: ros.IResolvable;
    /**
     * Attribute NodeNum: Number of nodes.
     */
    readonly attrNodeNum: ros.IResolvable;
    /**
     * Attribute SubNetCidr: Sub net CIDR.
     */
    readonly attrSubNetCidr: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the cluster.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute VswitchId: The ID of the cluster.
     */
    readonly attrVswitchId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EDAS::K8sCluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: K8sClusterProps, enableResourcePropertyConstraint?: boolean);
}
