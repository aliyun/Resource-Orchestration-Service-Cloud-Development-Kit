import * as ros from '@alicloud/ros-cdk-core';
import { RosQosCar } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    readonly maxBandwidthAbs?: number | ros.IResolvable;

    /**
     * Property maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    readonly maxBandwidthPercent?: number | ros.IResolvable;

    /**
     * Property minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
     */
    readonly minBandwidthAbs?: number | ros.IResolvable;

    /**
     * Property minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
     * instance.
     * This parameter is required when LimitType is set to Percent.
     */
    readonly minBandwidthPercent?: number | ros.IResolvable;

    /**
     * Property name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
     * length, and can contain Chinese characters, letters, digits, periods (.), underscores
     * (_), and hyphens (-).
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::QosCar`, which is used to create a traffic throttling rule for a quality of service (QoS) policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQosCar`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
 */
export class QosCar extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: QosCarProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute QosCarId: The ID of the traffic throttling policy.
     */
    public readonly attrQosCarId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosCarProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosQosCar = new RosQosCar(this, id,  {
            minBandwidthAbs: props.minBandwidthAbs,
            description: props.description,
            priority: props.priority,
            maxBandwidthPercent: props.maxBandwidthPercent,
            maxBandwidthAbs: props.maxBandwidthAbs,
            qosId: props.qosId,
            percentSourceType: props.percentSourceType,
            minBandwidthPercent: props.minBandwidthPercent,
            limitType: props.limitType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQosCar;
        this.attrQosCarId = rosQosCar.attrQosCarId;
    }
}
