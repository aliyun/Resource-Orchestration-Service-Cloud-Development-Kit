import * as ros from '@alicloud/ros-cdk-core';
import { RosVirtualCapacityReservation } from './acs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVirtualCapacityReservation as VirtualCapacityReservationProperty };

/**
 * Properties for defining a `VirtualCapacityReservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
 */
export interface VirtualCapacityReservationProps {

    /**
     * Property podPostpaidSpec: Postpaid pod spec for inquiry.
     */
    readonly podPostpaidSpec?: RosVirtualCapacityReservation.PodPostpaidSpecProperty | ros.IResolvable;
}

/**
 * Represents a `VirtualCapacityReservation`.
 */
export interface IVirtualCapacityReservation extends ros.IResource {
    readonly props: VirtualCapacityReservationProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ACS::VirtualCapacityReservation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVirtualCapacityReservation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-acs-virtualcapacityreservation
 */
export class VirtualCapacityReservation extends ros.Resource implements IVirtualCapacityReservation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VirtualCapacityReservationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VirtualCapacityReservationProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVirtualCapacityReservation = new RosVirtualCapacityReservation(this, id,  {
            podPostpaidSpec: props.podPostpaidSpec,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVirtualCapacityReservation;
    }
}
