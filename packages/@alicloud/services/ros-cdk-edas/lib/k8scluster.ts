import * as ros from '@alicloud/ros-cdk-core';
import { RosK8sCluster } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosK8sCluster as K8sClusterProperty };

/**
 * Properties for defining a `K8sCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::K8sCluster`, which is used to create a cluster of Container Service for Kubernetes (ACK).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosK8sCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-k8scluster
 */
export class K8sCluster extends ros.Resource {

    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterName: The name of the cluster.
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * Attribute ClusterType: The type of the cluster:
2: ECS cluster
5: Container Service K8s cluster or Serverless K8s cluster
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute CsClusterId: The ID of the K8s cluster.
     */
    public readonly attrCsClusterId: ros.IResolvable;

    /**
     * Attribute NetworkMode: Network node:
1: Classic network
2: VPC
     */
    public readonly attrNetworkMode: ros.IResolvable;

    /**
     * Attribute NodeNum: Number of nodes.
     */
    public readonly attrNodeNum: ros.IResolvable;

    /**
     * Attribute SubNetCidr: Sub net CIDR.
     */
    public readonly attrSubNetCidr: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the cluster.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VswitchId: The ID of the cluster.
     */
    public readonly attrVswitchId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: K8sClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosK8sCluster = new RosK8sCluster(this, id,  {
            enableAsm: props.enableAsm,
            namespaceId: props.namespaceId,
            csClusterId: props.csClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosK8sCluster;
        this.attrClusterId = rosK8sCluster.attrClusterId;
        this.attrClusterName = rosK8sCluster.attrClusterName;
        this.attrClusterType = rosK8sCluster.attrClusterType;
        this.attrCsClusterId = rosK8sCluster.attrCsClusterId;
        this.attrNetworkMode = rosK8sCluster.attrNetworkMode;
        this.attrNodeNum = rosK8sCluster.attrNodeNum;
        this.attrSubNetCidr = rosK8sCluster.attrSubNetCidr;
        this.attrVpcId = rosK8sCluster.attrVpcId;
        this.attrVswitchId = rosK8sCluster.attrVswitchId;
    }
}
