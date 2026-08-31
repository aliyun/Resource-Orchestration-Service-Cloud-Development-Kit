import * as ros from '@alicloud/ros-cdk-core';
import { RosMessageContact } from './resourcemanager.generated';
export { RosMessageContact as MessageContactProperty };
/**
 * Properties for defining a `MessageContact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
 */
export interface MessageContactProps {
    /**
     * Property emailAddress: The email address of the contact.
     */
    readonly emailAddress: string | ros.IResolvable;
    /**
     * Property messageContactName: The name of the contact. The name must be unique in your resource directory. The name must be 2 to 12 characters in length and can contain only letters.
     */
    readonly messageContactName: string | ros.IResolvable;
    /**
     * Property messageTypes: The types of messages received by the contact.
     */
    readonly messageTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property title: The job title of the contact. Valid values:
     * * FinanceDirector.
     * * TechnicalDirector.
     * * MaintenanceDirector.
     * * CEO.
     * * ProjectDirector.
     * * Other.
     */
    readonly title: string | ros.IResolvable;
    /**
     * Property phoneNumber: The mobile phone number of the contact.
     */
    readonly phoneNumber?: string | ros.IResolvable;
}
/**
 * Represents a `MessageContact`.
 */
export interface IMessageContact extends ros.IResource {
    readonly props: MessageContactProps;
    /**
     * Attribute CreateTime: Creation time of Message Contact.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EmailAddress: The email address of the contact.
     */
    readonly attrEmailAddress: ros.IResolvable | string;
    /**
     * Attribute MessageContactId: The ID of Message Contact.
     */
    readonly attrMessageContactId: ros.IResolvable | string;
    /**
     * Attribute MessageContactName: The name of the contact.
     */
    readonly attrMessageContactName: ros.IResolvable | string;
    /**
     * Attribute MessageTypes: The types of messages received by the contact.
     */
    readonly attrMessageTypes: ros.IResolvable | string;
    /**
     * Attribute PhoneNumber: The mobile phone number of the contact.
     */
    readonly attrPhoneNumber: ros.IResolvable | string;
    /**
     * Attribute Title: The job title of the contact.
     */
    readonly attrTitle: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::MessageContact`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMessageContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-messagecontact
 */
export declare class MessageContact extends ros.Resource implements IMessageContact {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MessageContactProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Creation time of Message Contact.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EmailAddress: The email address of the contact.
     */
    readonly attrEmailAddress: ros.IResolvable | string;
    /**
     * Attribute MessageContactId: The ID of Message Contact.
     */
    readonly attrMessageContactId: ros.IResolvable | string;
    /**
     * Attribute MessageContactName: The name of the contact.
     */
    readonly attrMessageContactName: ros.IResolvable | string;
    /**
     * Attribute MessageTypes: The types of messages received by the contact.
     */
    readonly attrMessageTypes: ros.IResolvable | string;
    /**
     * Attribute PhoneNumber: The mobile phone number of the contact.
     */
    readonly attrPhoneNumber: ros.IResolvable | string;
    /**
     * Attribute Title: The job title of the contact.
     */
    readonly attrTitle: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MessageContactProps, enableResourcePropertyConstraint?: boolean);
}
