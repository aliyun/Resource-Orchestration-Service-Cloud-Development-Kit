import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './gws.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::GWS::Cluster`
 */
export interface ClusterProps {

    /**
     * Property clusterType: Cluster Type:
     * gws.s1.standard
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * Property vpcId: VPC id
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property name: Cluster name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property policy: Cluster policy
     */
    readonly policy?: RosCluster.PolicyProperty | ros.IResolvable;

    /**
     * Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::GWS::Cluster`
 */
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute Name: Cluster name
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::GWS::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            policy: props.policy,
            vpcId: props.vpcId,
            vSwitchId: props.vSwitchId,
            clusterType: props.clusterType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrName = rosCluster.attrName;
    }
}
