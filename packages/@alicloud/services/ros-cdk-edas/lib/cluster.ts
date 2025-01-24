import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
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
     * Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) \/ 4 (1: 4) \/ 8 (1: 8 ratio)
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
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;

    /**
     * Attribute ClusterId: Cluster ID
     */
    readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ClusterName: Cluster name
     */
    readonly attrClusterName: ros.IResolvable | string;

    /**
     * Attribute ClusterType: Cluster type
     */
    readonly attrClusterType: ros.IResolvable | string;

    /**
     * Attribute IaasProvider: Provider
     */
    readonly attrIaasProvider: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EDAS::Cluster`, which is used to create a cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
 */
export class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: Cluster ID
     */
    public readonly attrClusterId: ros.IResolvable | string;

    /**
     * Attribute ClusterName: Cluster name
     */
    public readonly attrClusterName: ros.IResolvable | string;

    /**
     * Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: ros.IResolvable | string;

    /**
     * Attribute IaasProvider: Provider
     */
    public readonly attrIaasProvider: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCluster = new RosCluster(this, id,  {
            logicalRegionId: props.logicalRegionId,
            oversoldFactor: props.oversoldFactor,
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            clusterName: props.clusterName,
            networkMode: props.networkMode,
            clusterType: props.clusterType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrClusterName = rosCluster.attrClusterName;
        this.attrClusterType = rosCluster.attrClusterType;
        this.attrIaasProvider = rosCluster.attrIaasProvider;
    }
}
