import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorFilter } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficMirrorFilter as TrafficMirrorFilterProperty };

/**
 * Properties for defining a `TrafficMirrorFilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export interface TrafficMirrorFilterProps {

    /**
     * Property trafficMirrorFilterId: The first ID of the resource.
     */
    readonly trafficMirrorFilterId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilter`, which is used to query a filter for traffic mirroring.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorFilter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export class TrafficMirrorFilter extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TrafficMirrorFilterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EgressRules: EgressRules.
     */
    public readonly attrEgressRules: ros.IResolvable;

    /**
     * Attribute IngressRules: IngressRules.
     */
    public readonly attrIngressRules: ros.IResolvable;

    /**
     * Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
     */
    public readonly attrTrafficMirrorFilterDescription: ros.IResolvable;

    /**
     * Attribute TrafficMirrorFilterId: The first ID of the resource.
     */
    public readonly attrTrafficMirrorFilterId: ros.IResolvable;

    /**
     * Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    public readonly attrTrafficMirrorFilterName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorFilterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTrafficMirrorFilter = new RosTrafficMirrorFilter(this, id,  {
            trafficMirrorFilterId: props.trafficMirrorFilterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficMirrorFilter;
        this.attrEgressRules = rosTrafficMirrorFilter.attrEgressRules;
        this.attrIngressRules = rosTrafficMirrorFilter.attrIngressRules;
        this.attrTrafficMirrorFilterDescription = rosTrafficMirrorFilter.attrTrafficMirrorFilterDescription;
        this.attrTrafficMirrorFilterId = rosTrafficMirrorFilter.attrTrafficMirrorFilterId;
        this.attrTrafficMirrorFilterName = rosTrafficMirrorFilter.attrTrafficMirrorFilterName;
    }
}
