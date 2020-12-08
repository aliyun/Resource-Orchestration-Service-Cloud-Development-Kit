import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './gws.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::GWS::Cluster`
 */
export interface ClusterProps {

    /**
     * @Property clusterType: Cluster Type:
     * gws.s1.standard
     */
    readonly clusterType: string;

    /**
     * @Property vpcId: VPC id
     */
    readonly vpcId: string;

    /**
     * @Property name: Cluster name
     */
    readonly name?: string;

    /**
     * @Property policy: Cluster policy
     */
    readonly policy?: RosCluster.PolicyProperty | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch id
     */
    readonly vSwitchId?: string;
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
     * @Attribute ClusterId: Cluster id
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute Name: Cluster name
     */
    public readonly attrName: any;

    /**
     * Create a new `ALIYUN::GWS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
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
