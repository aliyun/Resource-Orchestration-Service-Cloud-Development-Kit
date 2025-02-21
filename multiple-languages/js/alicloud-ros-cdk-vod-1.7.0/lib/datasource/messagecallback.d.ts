import * as ros from '@alicloud/ros-cdk-core';
import { RosMessageCallback } from './vod.generated';
export { RosMessageCallback as MessageCallbackProperty };
/**
 * Properties for defining a `MessageCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
 */
export interface MessageCallbackProps {
    /**
     * Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `MessageCallback`.
 */
export interface IMessageCallback extends ros.IResource {
    readonly props: MessageCallbackProps;
    /**
     * Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute AuthKey: The cryptographic key. This parameter is returned only for HTTP callbacks.
     */
    readonly attrAuthKey: ros.IResolvable | string;
    /**
     * Attribute AuthSwitch: Indicates whether callback authentication is enabled. This parameter is returned only for HTTP callbacks.
     */
    readonly attrAuthSwitch: ros.IResolvable | string;
    /**
     * Attribute CallbackType: The callback method.
     */
    readonly attrCallbackType: ros.IResolvable | string;
    /**
     * Attribute CallbackUrl: The callback URL. This parameter is returned only for HTTP callbacks.
     */
    readonly attrCallbackUrl: ros.IResolvable | string;
    /**
     * Attribute EventTypeList: The type of the callback event.
     */
    readonly attrEventTypeList: ros.IResolvable | string;
    /**
     * Attribute MnsEndpoint: The public endpoint of MNS. This parameter is returned only for MNS callbacks.
     */
    readonly attrMnsEndpoint: ros.IResolvable | string;
    /**
     * Attribute MnsQueueName: The name of the Message Service (MNS) queue. This parameter is returned only for MNS callbacks.
     */
    readonly attrMnsQueueName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::MessageCallback`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMessageCallback`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallback
 */
export declare class MessageCallback extends ros.Resource implements IMessageCallback {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MessageCallbackProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute AuthKey: The cryptographic key. This parameter is returned only for HTTP callbacks.
     */
    readonly attrAuthKey: ros.IResolvable | string;
    /**
     * Attribute AuthSwitch: Indicates whether callback authentication is enabled. This parameter is returned only for HTTP callbacks.
     */
    readonly attrAuthSwitch: ros.IResolvable | string;
    /**
     * Attribute CallbackType: The callback method.
     */
    readonly attrCallbackType: ros.IResolvable | string;
    /**
     * Attribute CallbackUrl: The callback URL. This parameter is returned only for HTTP callbacks.
     */
    readonly attrCallbackUrl: ros.IResolvable | string;
    /**
     * Attribute EventTypeList: The type of the callback event.
     */
    readonly attrEventTypeList: ros.IResolvable | string;
    /**
     * Attribute MnsEndpoint: The public endpoint of MNS. This parameter is returned only for MNS callbacks.
     */
    readonly attrMnsEndpoint: ros.IResolvable | string;
    /**
     * Attribute MnsQueueName: The name of the Message Service (MNS) queue. This parameter is returned only for MNS callbacks.
     */
    readonly attrMnsQueueName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MessageCallbackProps, enableResourcePropertyConstraint?: boolean);
}
