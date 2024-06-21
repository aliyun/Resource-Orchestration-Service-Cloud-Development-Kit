import * as ros from '@alicloud/ros-cdk-core';
import { RosAlertContact } from './arms.generated';
export { RosAlertContact as AlertContactProperty };
/**
 * Properties for defining a `AlertContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export interface AlertContactProps {
    /**
     * Property contactName: The name of the alert contact that you want to create.
     */
    readonly contactName: string | ros.IResolvable;
    /**
     * Property dingRobotWebhookUrl: The DingTalk Chatbot address of the contact.
     */
    readonly dingRobotWebhookUrl?: string | ros.IResolvable;
    /**
     * Property email: The email address of the contact.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * Property phoneNum: The phone number of the contact.
     */
    readonly phoneNum?: string | ros.IResolvable;
    /**
     * Property proxyUserId: Internal parameters
     */
    readonly proxyUserId?: string | ros.IResolvable;
    /**
     * Property regionId: Region ID. Default to region of stack.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * Property systemNoc: Specifies whether to receive system alerts.
     */
    readonly systemNoc?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::AlertContact`, which is used to create an alert contact.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlertContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-alertcontact
 */
export declare class AlertContact extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AlertContactProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ContactId: The ID of the alert contact that you created.
     */
    readonly attrContactId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertContactProps, enableResourcePropertyConstraint?: boolean);
}
