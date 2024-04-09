import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVips } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHaVips as HaVipsProperty };

/**
 * Properties for defining a `HaVips`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export interface HaVipsProps {

    /**
     * Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::HaVips`, which is used to query the high-availability virtual IP addresses (HAVIPs) in a specified region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVips`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export class HaVips extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HaVipsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute HaVipIds: The list of ha vip IDs.
     */
    public readonly attrHaVipIds: ros.IResolvable;

    /**
     * Attribute HaVips: The list of ha vips.
     */
    public readonly attrHaVips: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosHaVips = new RosHaVips(this, id,  {
            haVipId: props.haVipId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVips;
        this.attrHaVipIds = rosHaVips.attrHaVipIds;
        this.attrHaVips = rosHaVips.attrHaVips;
    }
}
