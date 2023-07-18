import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorFilters } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTrafficMirrorFilters as TrafficMirrorFiltersProperty };

/**
 * Properties for defining a `DATASOURCE::VPC::TrafficMirrorFilters`
 */
export interface TrafficMirrorFiltersProps {

    /**
     * Property trafficMirrorFilterName: The name of the TrafficMirrorFilter.
     */
    readonly trafficMirrorFilterName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::VPC::TrafficMirrorFilters`
 */
export class TrafficMirrorFilters extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute TrafficMirrorFilterIds: The list of traffic mirror filter IDs.
     */
    public readonly attrTrafficMirrorFilterIds: ros.IResolvable;

    /**
     * Attribute TrafficMirrorFilters: The list of traffic mirror filters.
     */
    public readonly attrTrafficMirrorFilters: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VPC::TrafficMirrorFilters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorFiltersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTrafficMirrorFilters = new RosTrafficMirrorFilters(this, id,  {
            trafficMirrorFilterName: props.trafficMirrorFilterName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTrafficMirrorFilters;
        this.attrTrafficMirrorFilterIds = rosTrafficMirrorFilters.attrTrafficMirrorFilterIds;
        this.attrTrafficMirrorFilters = rosTrafficMirrorFilters.attrTrafficMirrorFilters;
    }
}
