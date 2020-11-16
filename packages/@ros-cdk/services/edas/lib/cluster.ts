import * as ros from '@ros-cdk/core';
import { RosCluster } from './edas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::EDAS::Cluster`
 */
export interface ClusterProps {

    /**
     * @Property clusterName: Cluster name
     */
    readonly clusterName: string;

    /**
     * @Property clusterType: Cluster type. 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster
     */
    readonly clusterType: number;

    /**
     * @Property networkMode: Network Type. 1- classic network, 2-VPC
     */
    readonly networkMode: number;

    /**
     * @Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier)
     */
    readonly logicalRegionId?: string;

    /**
     * @Property oversoldFactor: Docker CPU cluster oversold. Support 2 (1: 2 ratio) / 4 (1: 4) / 8 (1: 8 ratio)
     */
    readonly oversoldFactor?: number;

    /**
     * @Property vpcId: VPC network ID. If network selection VPC, this parameter Required
     */
    readonly vpcId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::EDAS::Cluster`
 */
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ClusterId: Cluster ID
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute ClusterName: Cluster name
     */
    public readonly attrClusterName: any;

    /**
     * @Attribute ClusterType: Cluster type
     */
    public readonly attrClusterType: any;

    /**
     * @Attribute IaasProvider: Provider
     */
    public readonly attrIaasProvider: any;

    /**
     * Create a new `ALIYUN::EDAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            logicalRegionId: props.logicalRegionId,
            oversoldFactor: props.oversoldFactor,
            vpcId: props.vpcId,
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
