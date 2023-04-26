import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorFilter } from './vpc.generated';
export { RosTrafficMirrorFilter as TrafficMirrorFilterProperty };
/**
 * Properties for defining a `ALIYUN::VPC::TrafficMirrorFilter`
 */
export interface TrafficMirrorFilterProps {
    /**
     * Property egressRules: Egress rules.
     */
    readonly egressRules?: Array<RosTrafficMirrorFilter.EgressRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property ingressRules: Ingress rules.
     */
    readonly ingressRules?: Array<RosTrafficMirrorFilter.IngressRulesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property trafficMirrorFilterDescription: The description of the filter. The description must be 1 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly trafficMirrorFilterDescription?: string | ros.IResolvable;
    /**
     * Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:// or https://.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::TrafficMirrorFilter`
 */
export declare class TrafficMirrorFilter extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute EgressRules: Egress rules.
     */
    readonly attrEgressRules: ros.IResolvable;
    /**
     * Attribute IngressRules: Ingress rules.
     */
    readonly attrIngressRules: ros.IResolvable;
    /**
     * Attribute TrafficMirrorFilterDescription: The description of the filter.
     */
    readonly attrTrafficMirrorFilterDescription: ros.IResolvable;
    /**
     * Attribute TrafficMirrorFilterId: The ID of the filter.
     */
    readonly attrTrafficMirrorFilterId: ros.IResolvable;
    /**
     * Attribute TrafficMirrorFilterName: The name of the filter.
     */
    readonly attrTrafficMirrorFilterName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::TrafficMirrorFilter`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: TrafficMirrorFilterProps, enableResourcePropertyConstraint?: boolean);
}
