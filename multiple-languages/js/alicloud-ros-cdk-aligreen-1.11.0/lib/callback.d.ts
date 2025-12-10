import * as ros from '@alicloud/ros-cdk-core';
import { RosCallback } from './aligreen.generated';
export { RosCallback as CallbackProperty };
/**
 * Properties for defining a `Callback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
 */
export interface CallbackProps {
    /**
     * Property callbackName: The Callback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    readonly callbackName: string | ros.IResolvable;
    /**
     * Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    readonly callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    readonly callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property callbackUrl: The detection result will be called back to the url.
     */
    readonly callbackUrl: string | ros.IResolvable;
    /**
     * Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service. Value: 0:SHA256,1: SM3.
     */
    readonly cryptType?: number | ros.IResolvable;
}
/**
 * Represents a `Callback`.
 */
export interface ICallback extends ros.IResource {
    readonly props: CallbackProps;
    /**
     * Attribute CallbackId: The ID of the primary key of the Callback.
     */
    readonly attrCallbackId: ros.IResolvable | string;
    /**
     * Attribute CallbackName: The Callback name defined by the customer.
     */
    readonly attrCallbackName: ros.IResolvable | string;
    /**
     * Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    readonly attrCallbackSuggestions: ros.IResolvable | string;
    /**
     * Attribute CallbackTypes: The list of Callback types.
     */
    readonly attrCallbackTypes: ros.IResolvable | string;
    /**
     * Attribute CallbackUrl: The detection result will be called back to the url.
     */
    readonly attrCallbackUrl: ros.IResolvable | string;
    /**
     * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
     */
    readonly attrCryptType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::Callback`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCallback`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-callback
 */
export declare class Callback extends ros.Resource implements ICallback {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CallbackProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CallbackId: The ID of the primary key of the Callback.
     */
    readonly attrCallbackId: ros.IResolvable | string;
    /**
     * Attribute CallbackName: The Callback name defined by the customer.
     */
    readonly attrCallbackName: ros.IResolvable | string;
    /**
     * Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    readonly attrCallbackSuggestions: ros.IResolvable | string;
    /**
     * Attribute CallbackTypes: The list of Callback types.
     */
    readonly attrCallbackTypes: ros.IResolvable | string;
    /**
     * Attribute CallbackUrl: The detection result will be called back to the url.
     */
    readonly attrCallbackUrl: ros.IResolvable | string;
    /**
     * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
     */
    readonly attrCryptType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CallbackProps, enableResourcePropertyConstraint?: boolean);
}
