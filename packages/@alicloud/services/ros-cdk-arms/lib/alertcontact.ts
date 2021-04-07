import * as ros from '@alicloud/ros-cdk-core';
import { RosAlertContact } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlertContact as AlertContactProperty };

/**
 * Properties for defining a `ALIYUN::ARMS::AlertContact`
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
 * A ROS resource type:  `ALIYUN::ARMS::AlertContact`
 */
export class AlertContact extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ContactId: The ID of the alert contact that you created.
     */
    public readonly attrContactId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ARMS::AlertContact`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlertContactProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAlertContact = new RosAlertContact(this, id,  {
            proxyUserId: props.proxyUserId,
            email: props.email,
            dingRobotWebhookUrl: props.dingRobotWebhookUrl,
            phoneNum: props.phoneNum,
            regionId: props.regionId,
            systemNoc: props.systemNoc,
            contactName: props.contactName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlertContact;
        this.attrContactId = rosAlertContact.attrContactId;
    }
}
