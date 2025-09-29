import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorFilter } from './vpc.generated';
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
 * Represents a `TrafficMirrorFilter`.
 */
export interface ITrafficMirrorFilter extends ros.IResource {
    readonly props: TrafficMirrorFilterProps;
    /**
     * Attribute EgressRules: EgressRules.
     */
    readonly attrEgressRules: ros.IResolvable | string;
    /**
     * Attribute IngressRules: IngressRules.
     */
    readonly attrIngressRules: ros.IResolvable | string;
    /**
     * Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
     */
    readonly attrTrafficMirrorFilterDescription: ros.IResolvable | string;
    /**
     * Attribute TrafficMirrorFilterId: The first ID of the resource.
     */
    readonly attrTrafficMirrorFilterId: ros.IResolvable | string;
    /**
     * Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly attrTrafficMirrorFilterName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::TrafficMirrorFilter`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorFilter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-trafficmirrorfilter
 */
export declare class TrafficMirrorFilter extends ros.Resource implements ITrafficMirrorFilter {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TrafficMirrorFilterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EgressRules: EgressRules.
     */
    readonly attrEgressRules: ros.IResolvable | string;
    /**
     * Attribute IngressRules: IngressRules.
     */
    readonly attrIngressRules: ros.IResolvable | string;
    /**
     * Attribute TrafficMirrorFilterDescription: The description of the TrafficMirrorFilter.
     */
    readonly attrTrafficMirrorFilterDescription: ros.IResolvable | string;
    /**
     * Attribute TrafficMirrorFilterId: The first ID of the resource.
     */
    readonly attrTrafficMirrorFilterId: ros.IResolvable | string;
    /**
     * Attribute TrafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly attrTrafficMirrorFilterName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorFilterProps, enableResourcePropertyConstraint?: boolean);
}
