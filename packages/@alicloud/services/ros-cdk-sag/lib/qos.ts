import * as ros from '@alicloud/ros-cdk-core';
import { RosQos } from './sag.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosQos as QosProperty };

/**
 * Properties for defining a `Qos`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
 */
export interface QosProps {

    /**
     * Property qosName: The name of the QoS policy.
     * The name must be 2 to 100 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly qosName: string | ros.IResolvable;

    /**
     * Property qosDescription: The description of the QoS policy.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly qosDescription?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::Qos`ALIYUN::SAG::QoS is used to create a quality of service (QoS) policy for a Smart Access Gateway (SAG) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQos`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qos
 */
export class Qos extends ros.Resource {

    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    public readonly attrQosId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosQos = new RosQos(this, id,  {
            qosName: props.qosName,
            qosDescription: props.qosDescription,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosQos;
        this.attrQosId = rosQos.attrQosId;
    }
}
