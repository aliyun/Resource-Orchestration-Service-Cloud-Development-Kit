import * as ros from '@alicloud/ros-cdk-core';
import { RosBinding } from './amqp.generated';
export { RosBinding as BindingProperty };
/**
 * Properties for defining a `Binding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export interface BindingProps {
    /**
     * Property argument: The key-value pairs for the message header attributes. The message header
     * attributes consist of one or more key-value pairs. The x-match attribute is
     * required. Other attributes are custom. The x-match attribute supports the
     * following values:
     * - all: This is the default value. All key-value pairs in the message header must
     * match.
     * - any: At least one key-value pair in the message header must match.
     * Separate attributes with semicolons (;) and separate keys from values with colons
     * (:). Example: x-match:all;type:report;format:pdf
     * This parameter is valid only for headers exchanges. For other types of exchanges,
     * this parameter is ignored.
     */
    readonly argument: string | ros.IResolvable;
    /**
     * Property bindingKey: The binding key.
     * - If the source exchange is not a topic exchange:
     * - It can contain letters, digits, hyphens (-), underscores (_), periods (.),
     * forward slashes (\/), and at signs (@).
     * - The length must be 1 to 255 characters.
     * - If the source exchange is a topic exchange:
     * - It can contain letters, digits, hyphens (-), underscores (_), asterisks (\*),
     * periods (.), number signs (#), forward slashes (\/), and at signs (@).
     * - The key cannot start or end with a period (.). If the key starts with a number
     * sign (#) or an asterisk (\*), a period (.) must immediately follow. If the key
     * ends with a number sign (#) or an asterisk (\*), a period (.) must immediately
     * precede it. If a number sign (#) or an asterisk (\*) is in the middle of the key,
     * it must have a period (.) on both sides.
     * - The length must be 1 to 255 characters.
     */
    readonly bindingKey: string | ros.IResolvable;
    /**
     * Property bindingType: The type of the destination object. Valid values:
     * - 0: Queue
     * - 1: Exchange
     */
    readonly bindingType: string | ros.IResolvable;
    /**
     * Property destinationName: The name of the binding destination. The destination must be created in the
     * console. It must belong to the same vhost as `SourceExchange`. The `VirtualHost`
     * parameter specifies the vhost.
     */
    readonly destinationName: string | ros.IResolvable;
    /**
     * Property instanceId: InstanceId
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property sourceExchange: The Source Exchange Name.
     */
    readonly sourceExchange: string | ros.IResolvable;
    /**
     * Property virtualHost: The name of the virtual host.
     */
    readonly virtualHost: string | ros.IResolvable;
}
/**
 * Represents a `Binding`.
 */
export interface IBinding extends ros.IResource {
    readonly props: BindingProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AMQP::Binding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-binding
 */
export declare class Binding extends ros.Resource implements IBinding {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BindingProps, enableResourcePropertyConstraint?: boolean);
}
