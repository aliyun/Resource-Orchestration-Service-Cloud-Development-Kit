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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `HaVips`.
 */
export interface IHaVips extends ros.IResource {
    readonly props: HaVipsProps;

    /**
     * Attribute HaVipIds: The list of ha vip IDs.
     */
    readonly attrHaVipIds: ros.IResolvable | string;

    /**
     * Attribute HaVips: The list of ha vips.
     */
    readonly attrHaVips: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::HaVips`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVips`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export class HaVips extends ros.Resource implements IHaVips {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: HaVipsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute HaVipIds: The list of ha vip IDs.
     */
    public readonly attrHaVipIds: ros.IResolvable | string;

    /**
     * Attribute HaVips: The list of ha vips.
     */
    public readonly attrHaVips: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVips;
        this.attrHaVipIds = rosHaVips.attrHaVipIds;
        this.attrHaVips = rosHaVips.attrHaVips;
    }
}
