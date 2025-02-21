import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorFilter } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficMirrorFilter as TrafficMirrorFilterProperty };

/**
 * Properties for defining a `TrafficMirrorFilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
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
     * Property trafficMirrorFilterDescription: The description of the filter. The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorFilterDescription?: string | ros.IResolvable;

    /**
     * Property trafficMirrorFilterName: The name of the filter.The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}

/**
 * Represents a `TrafficMirrorFilter`.
 */
export interface ITrafficMirrorFilter extends ros.IResource {
    readonly props: TrafficMirrorFilterProps;

    /**
     * Attribute EgressRules: Egress rules.
     */
    readonly attrEgressRules: ros.IResolvable | string;

    /**
     * Attribute IngressRules: Ingress rules.
     */
    readonly attrIngressRules: ros.IResolvable | string;

    /**
     * Attribute TrafficMirrorFilterDescription: The description of the filter.
     */
    readonly attrTrafficMirrorFilterDescription: ros.IResolvable | string;

    /**
     * Attribute TrafficMirrorFilterId: The ID of the filter.
     */
    readonly attrTrafficMirrorFilterId: ros.IResolvable | string;

    /**
     * Attribute TrafficMirrorFilterName: The name of the filter.
     */
    readonly attrTrafficMirrorFilterName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficMirrorFilter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorFilter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorfilter
 */
export class TrafficMirrorFilter extends ros.Resource implements ITrafficMirrorFilter {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TrafficMirrorFilterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EgressRules: Egress rules.
     */
    public readonly attrEgressRules: ros.IResolvable | string;

    /**
     * Attribute IngressRules: Ingress rules.
     */
    public readonly attrIngressRules: ros.IResolvable | string;

    /**
     * Attribute TrafficMirrorFilterDescription: The description of the filter.
     */
    public readonly attrTrafficMirrorFilterDescription: ros.IResolvable | string;

    /**
     * Attribute TrafficMirrorFilterId: The ID of the filter.
     */
    public readonly attrTrafficMirrorFilterId: ros.IResolvable | string;

    /**
     * Attribute TrafficMirrorFilterName: The name of the filter.
     */
    public readonly attrTrafficMirrorFilterName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorFilterProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficMirrorFilter = new RosTrafficMirrorFilter(this, id,  {
            trafficMirrorFilterDescription: props.trafficMirrorFilterDescription,
            egressRules: props.egressRules,
            trafficMirrorFilterName: props.trafficMirrorFilterName,
            ingressRules: props.ingressRules,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficMirrorFilter;
        this.attrEgressRules = rosTrafficMirrorFilter.attrEgressRules;
        this.attrIngressRules = rosTrafficMirrorFilter.attrIngressRules;
        this.attrTrafficMirrorFilterDescription = rosTrafficMirrorFilter.attrTrafficMirrorFilterDescription;
        this.attrTrafficMirrorFilterId = rosTrafficMirrorFilter.attrTrafficMirrorFilterId;
        this.attrTrafficMirrorFilterName = rosTrafficMirrorFilter.attrTrafficMirrorFilterName;
    }
}
