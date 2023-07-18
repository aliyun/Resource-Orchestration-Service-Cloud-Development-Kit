import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVips } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHaVips as HaVipsProperty };

/**
 * Properties for defining a `DATASOURCE::VPC::HaVips`
 */
export interface HaVipsProps {

    /**
     * Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::VPC::HaVips`
 */
export class HaVips extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute HaVipIds: The list of ha vip IDs.
     */
    public readonly attrHaVipIds: ros.IResolvable;

    /**
     * Attribute HaVips: The list of ha vips.
     */
    public readonly attrHaVips: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VPC::HaVips`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosHaVips = new RosHaVips(this, id,  {
            haVipId: props.haVipId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVips;
        this.attrHaVipIds = rosHaVips.attrHaVipIds;
        this.attrHaVips = rosHaVips.attrHaVips;
    }
}
