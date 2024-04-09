import * as ros from '@alicloud/ros-cdk-core';
import { RosMessageCallback } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMessageCallback as MessageCallbackProperty };

/**
 * Properties for defining a `MessageCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
 */
export interface MessageCallbackProps {

    /**
     * Property callbackType: Callback method.
     */
    readonly callbackType: string | ros.IResolvable;

    /**
     * Property appId: App ID. If it is not passed, it is the ID of the default 
     * application of the system, with a fixed value: app-1000000.
     */
    readonly appId?: string | ros.IResolvable;

    /**
     * Property authKey: Authentication Key, up to 32 characters, must contain both uppercase 
     * and lowercase letters and numbers. This parameter can be set when the callback method is HTTP.
     */
    readonly authKey?: string | ros.IResolvable;

    /**
     * Property authSwitch: The authentication switch of the HTTP callback, 
     * this parameter is valid when the callback method is set to HTTP.
     */
    readonly authSwitch?: string | ros.IResolvable;

    /**
     * Property callbackUrl: Callback address. When the callback method is HTTP, 
     * this parameter needs to be set. The length of the callback address 
     * URL cannot exceed 256 bytes, and setting multiple callback addresses is not supported.
     */
    readonly callbackUrl?: string | ros.IResolvable;

    /**
     * Property eventTypeList: Callback event type. When the value is empty, all message notifications are turned off, 
     * and when the value is ALL, all message notifications are turned on. 
     * You can also specify to enable certain message notifications, 
     * and use a comma (,) to separate multiple event types.
     */
    readonly eventTypeList?: string | ros.IResolvable;

    /**
     * Property mnsEndpoint: This parameter needs to be set when the callback method is MNS for the 
     * message queue public network endpoint. You can log in to the message service 
     * console and click the Get Endpoint button in the upper right corner to get it.
     */
    readonly mnsEndpoint?: string | ros.IResolvable;

    /**
     * Property mnsQueueName: The name of the message queue, which can be viewed in the queue 
     * list by logging in to the message service console. 
     * When the callback method is MNS, this parameter needs to be set.
     */
    readonly mnsQueueName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VOD::MessageCallback`, which is used to configure the callback method, callback URL, and event types for an event notification.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMessageCallback`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vod-messagecallback
 */
export class MessageCallback extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: MessageCallbackProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppId: appid.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute AuthKey: auth key.
     */
    public readonly attrAuthKey: ros.IResolvable;

    /**
     * Attribute AuthSwitch: auth swith.
     */
    public readonly attrAuthSwitch: ros.IResolvable;

    /**
     * Attribute CallbackType: callback type.
     */
    public readonly attrCallbackType: ros.IResolvable;

    /**
     * Attribute CallbackUrl: url.
     */
    public readonly attrCallbackUrl: ros.IResolvable;

    /**
     * Attribute EventTypeList: event type.
     */
    public readonly attrEventTypeList: ros.IResolvable;

    /**
     * Attribute MnsEndpoint: mns endpoint.
     */
    public readonly attrMnsEndpoint: ros.IResolvable;

    /**
     * Attribute MnsQueueName: queue name.
     */
    public readonly attrMnsQueueName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MessageCallbackProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMessageCallback = new RosMessageCallback(this, id,  {
            mnsEndpoint: props.mnsEndpoint,
            callbackUrl: props.callbackUrl,
            authSwitch: props.authSwitch,
            appId: props.appId,
            callbackType: props.callbackType,
            eventTypeList: props.eventTypeList,
            mnsQueueName: props.mnsQueueName,
            authKey: props.authKey,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMessageCallback;
        this.attrAppId = rosMessageCallback.attrAppId;
        this.attrAuthKey = rosMessageCallback.attrAuthKey;
        this.attrAuthSwitch = rosMessageCallback.attrAuthSwitch;
        this.attrCallbackType = rosMessageCallback.attrCallbackType;
        this.attrCallbackUrl = rosMessageCallback.attrCallbackUrl;
        this.attrEventTypeList = rosMessageCallback.attrEventTypeList;
        this.attrMnsEndpoint = rosMessageCallback.attrMnsEndpoint;
        this.attrMnsQueueName = rosMessageCallback.attrMnsQueueName;
    }
}
