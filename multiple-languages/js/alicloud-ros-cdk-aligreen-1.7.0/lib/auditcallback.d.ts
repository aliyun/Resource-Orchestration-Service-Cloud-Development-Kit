import * as ros from '@alicloud/ros-cdk-core';
import { RosAuditCallback } from './aligreen.generated';
export { RosAuditCallback as AuditCallbackProperty };
/**
 * Properties for defining a `AuditCallback`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
 */
export interface AuditCallbackProps {
    /**
     * Property auditCallbackName: The AuditCallback name defined by the customer. It can contain no more than 20 characters in Chinese, English, underscore (_), and digits.
     */
    readonly auditCallbackName: string | ros.IResolvable;
    /**
     * Property callbackSuggestions: List of audit results supported by message notification. Value: block: confirmed violation, review: Suspected violation, pass: normal.
     */
    readonly callbackSuggestions: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property callbackTypes: A list of Callback types. Value: machineScan: Machine audit result notification, selfAudit: self-service audit notification.
     */
    readonly callbackTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property cryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service. The value is SHA256:SHA256 encryption algorithm and SM3: SM3 encryption algorithm.
     */
    readonly cryptType: string | ros.IResolvable;
    /**
     * Property url: The detection result will be called back to the url.
     */
    readonly url: string | ros.IResolvable;
}
/**
 * Represents a `AuditCallback`.
 */
export interface IAuditCallback extends ros.IResource {
    readonly props: AuditCallbackProps;
    /**
     * Attribute AuditCallbackName: The AuditCallback name defined by the customer.
     */
    readonly attrAuditCallbackName: ros.IResolvable | string;
    /**
     * Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    readonly attrCallbackSuggestions: ros.IResolvable | string;
    /**
     * Attribute CallbackTypes: A list of Callback types.
     */
    readonly attrCallbackTypes: ros.IResolvable | string;
    /**
     * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     */
    readonly attrCryptType: ros.IResolvable | string;
    /**
     * Attribute Url: The detection result will be called back to the url.
     */
    readonly attrUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Aligreen::AuditCallback`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAuditCallback`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-auditcallback
 */
export declare class AuditCallback extends ros.Resource implements IAuditCallback {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AuditCallbackProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuditCallbackName: The AuditCallback name defined by the customer.
     */
    readonly attrAuditCallbackName: ros.IResolvable | string;
    /**
     * Attribute CallbackSuggestions: List of audit results supported by message notification.
     */
    readonly attrCallbackSuggestions: ros.IResolvable | string;
    /**
     * Attribute CallbackTypes: A list of Callback types.
     */
    readonly attrCallbackTypes: ros.IResolvable | string;
    /**
     * Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
     */
    readonly attrCryptType: ros.IResolvable | string;
    /**
     * Attribute Url: The detection result will be called back to the url.
     */
    readonly attrUrl: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuditCallbackProps, enableResourcePropertyConstraint?: boolean);
}
