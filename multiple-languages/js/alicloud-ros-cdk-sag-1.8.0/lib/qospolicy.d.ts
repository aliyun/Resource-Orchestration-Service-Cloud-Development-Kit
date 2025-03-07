import * as ros from '@alicloud/ros-cdk-core';
import { RosQosPolicy } from './sag.generated';
export { RosQosPolicy as QosPolicyProperty };
/**
 * Properties for defining a `QosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
 */
export interface QosPolicyProps {
    /**
     * Property destCidr: The range of the destination IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.10.0\/24.
     */
    readonly destCidr: string | ros.IResolvable;
    /**
     * Property destPortRange: The range of destination ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1\/200: a port range from 1 to 200
     * 80\/80: port 80
     * -1\/-1: all ports
     */
    readonly destPortRange: string | ros.IResolvable;
    /**
     * Property ipProtocol: The type of the protocol that applies to the traffic classification rule.
     * The supported protocols provided in this topic are for reference only. The actual
     * protocols in the console shall prevail.
     */
    readonly ipProtocol: string | ros.IResolvable;
    /**
     * Property priority: The priority of the traffic throttling policy to which the traffic classification
     * rule belongs.
     */
    readonly priority: number | ros.IResolvable;
    /**
     * Property qosId: The ID of the QoS policy.
     */
    readonly qosId: string | ros.IResolvable;
    /**
     * Property sourceCidr: The range of the source IP addresses.
     * Specify the value of this parameter in CIDR notation. Example: 192.168.1.0\/24.
     */
    readonly sourceCidr: string | ros.IResolvable;
    /**
     * Property sourcePortRange: The range of source ports.
     * Valid values: 1 to 65535 and -1.
     * Set this parameter in one of the following formats:
     * 1\/200: a port range from 1 to 200
     * 80\/80: port 80
     * -1\/-1: all ports
     */
    readonly sourcePortRange: string | ros.IResolvable;
    /**
     * Property description: The description of the traffic classification rule.
     * The description must be 1 to 512 characters in length and can contain letters, digits,
     * underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property dpiGroupIds: The ID of the application group.
     * You can enter at most 100 application group IDs at a time.
     * You can call the ListDpiGroups operation to query application group IDs and information about the applications.
     */
    readonly dpiGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property dpiSignatureIds: The ID of the application.
     * You can enter at most 100 application IDs at a time.
     * You can call the ListDpiSignatures operation to query application IDs and information about the applications.
     */
    readonly dpiSignatureIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property endTime: The time when the traffic classification rule becomes invalid.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    readonly endTime?: string | ros.IResolvable;
    /**
     * Property name: The name of the traffic classification rule.
     * The name must be 2 to 100 characters in length, and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property startTime: The time when the traffic classification rule takes effect.
     * Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
     * The time must be in UTC+8.
     */
    readonly startTime?: string | ros.IResolvable;
}
/**
 * Represents a `QosPolicy`.
 */
export interface IQosPolicy extends ros.IResource {
    readonly props: QosPolicyProps;
    /**
     * Attribute QosPolicyId: The ID of the traffic classification rule.
     */
    readonly attrQosPolicyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::QosPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosQosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
 */
export declare class QosPolicy extends ros.Resource implements IQosPolicy {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: QosPolicyProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute QosPolicyId: The ID of the traffic classification rule.
     */
    readonly attrQosPolicyId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: QosPolicyProps, enableResourcePropertyConstraint?: boolean);
}
