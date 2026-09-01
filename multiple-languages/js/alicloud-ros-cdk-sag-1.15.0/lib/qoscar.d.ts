import * as ros from '@alicloud/ros-cdk-core';
import { RosQosCar } from './sag.generated';
export { RosQosCar as QosCarProperty };
/**
 * Properties for defining a `QosCar`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
 */
export interface QosCarProps {
    /**
     * Property limitType: The type of the traffic throttling policy. Valid values:
     * Absolute: throttles traffic by a specific bandwidth range.
     * Percent: throttles traffic by a specific range of bandwidth percentage.
     */
    readonly limitType: string | ros.IResolvable;
    /**
     * Property priority: The priority of the traffic throttling policy. A smaller value represents a higher
     * priority. If policies are assigned the same priority, the one applied the earliest
     * prevails. Valid values: 1 to 7.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;
    /**
     * Property description: The description of the traffic throttling policy.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property maxBandwidthAbs: The maximum bandwidth value. The value must be an integer. Unit: Mbit\/s.
     * This parameter is returned when LimitType is set to Absolute.
     * >  The maximum bandwidth value must be greater than the minimum bandwidth value.
     */
    readonly maxBandwidthAbs?: number | ros.IResolvable;
    /**
     * Property maxBandwidthPercent: The maximum bandwidth percentage. Unit: percent (%). Valid values: 1 to 100.
     * This parameter is required when you set LimitType to Percent.
     * >  The maximum bandwidth percentage must be greater than the minimum bandwidth
     * percentage.
     */
    readonly maxBandwidthPercent?: number | ros.IResolvable;
    /**
     * Property minBandwidthAbs: The minimum bandwidth value. The value must be an integer. Unit: Mbit\/s.
     * This parameter is returned when LimitType is set to Absolute.
     */
    readonly minBandwidthAbs?: number | ros.IResolvable;
    /**
     * Property minBandwidthPercent: The minimum bandwidth percentage. Unit: percent (%). Valid values: 1 to 100.
     * This parameter is required when you set LimitType to Percent.
     */
    readonly minBandwidthPercent?: number | ros.IResolvable;
    /**
     * Property name: The name of the traffic throttling rule.
     * The name must be 2 to 128 characters in length, and can contain letters, digits,
     * periods (.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
     * options are available:
     * CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
     * InternetUpBandwidth: Internet upstream bandwidth.
     */
    readonly percentSourceType?: string | ros.IResolvable;
}
/**
 * Represents a `QosCar`.
 */
export interface IQosCar extends ros.IResource {
    readonly props: QosCarProps;
    /**
     * Attribute QosCarId: The ID of the traffic throttling policy.
     */
    readonly attrQosCarId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::QosCar`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQosCar`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
 */
export declare class QosCar extends ros.Resource implements IQosCar {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QosCarProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute QosCarId: The ID of the traffic throttling policy.
     */
    readonly attrQosCarId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosCarProps, enableResourcePropertyConstraint?: boolean);
}
