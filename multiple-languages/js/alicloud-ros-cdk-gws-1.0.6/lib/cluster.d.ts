import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './gws.generated';
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
export declare class Cluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClusterId: Cluster id
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute Name: Cluster name
     */
    readonly attrName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::GWS::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=cluster.d.ts.map