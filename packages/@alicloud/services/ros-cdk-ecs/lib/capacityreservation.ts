import * as ros from '@alicloud/ros-cdk-core';
import { RosCapacityReservation } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCapacityReservation as CapacityReservationProperty };

/**
 * Properties for defining a `CapacityReservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
 */
export interface CapacityReservationProps {

    /**
     * Property instanceAmount: The total number of instances for which to reserve capacity of an instance type.
     */
    readonly instanceAmount: number | ros.IResolvable;

    /**
     * Property instanceType: The instance type. A capacity reservation can be created to reserve the capacity of only a single instance type. You can call the DescribeInstanceTypes operation to query the instance types provided by ECS.
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property zoneId: The ID of zone N within the region in which to create the capacity reservation. A capacity reservation can reserve resources within only a single zone.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property description: The description of the capacity reservation. The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     * This parameter is empty by default.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property endTime: The time when the capacity reservation expires. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC. For more information, see ISO 8601.
     */
    readonly endTime?: string | ros.IResolvable;

    /**
     * Property endTimeType: The release mode of the capacity reservation. Valid values:
     * Limited: The capacity reservation is automatically released at the specified time. If you specify this parameter, you must also specify the EndTime parameter.
     * Unlimited: The capacity reservation must be manually released. You can release it anytime.
     */
    readonly endTimeType?: string | ros.IResolvable;

    /**
     * Property privatePoolOptions:
     */
    readonly privatePoolOptions?: RosCapacityReservation.PrivatePoolOptionsProperty | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the capacity reservation.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags:
     */
    readonly tags?: RosCapacityReservation.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::CapacityReservation`, which is used to create a capacity reservation.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCapacityReservation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-capacityreservation
 */
export class CapacityReservation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CapacityReservationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PrivatePoolOptionsId: The ID of the capacity reservation.
     */
    public readonly attrPrivatePoolOptionsId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CapacityReservationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCapacityReservation = new RosCapacityReservation(this, id,  {
            instanceAmount: props.instanceAmount,
            description: props.description,
            privatePoolOptions: props.privatePoolOptions,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            endTime: props.endTime,
            endTimeType: props.endTimeType,
            instanceType: props.instanceType,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCapacityReservation;
        this.attrPrivatePoolOptionsId = rosCapacityReservation.attrPrivatePoolOptionsId;
    }
}
