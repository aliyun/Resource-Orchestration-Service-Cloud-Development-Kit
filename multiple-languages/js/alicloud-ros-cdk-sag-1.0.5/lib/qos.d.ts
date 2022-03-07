import * as ros from '@alicloud/ros-cdk-core';
import { RosQos } from './sag.generated';
export { RosQos as QosProperty };
/**
 * Properties for defining a `ALIYUN::SAG::Qos`
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
 * A ROS resource type:  `ALIYUN::SAG::Qos`
 */
export declare class Qos extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute QosId: The ID of the QoS policy.
     */
    readonly attrQosId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SAG::Qos`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosProps, enableResourcePropertyConstraint?: boolean);
}
