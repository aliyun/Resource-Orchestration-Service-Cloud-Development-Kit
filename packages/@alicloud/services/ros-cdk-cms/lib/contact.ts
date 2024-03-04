import * as ros from '@alicloud/ros-cdk-core';
import { RosContact } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosContact as ContactProperty };

/**
 * Properties for defining a `Contact`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
 */
export interface ContactProps {

    /**
     * Property channels: undefined
     */
    readonly channels: RosContact.ChannelsProperty | ros.IResolvable;

    /**
     * Property contactName: The name of the alarm contact.
     */
    readonly contactName: string | ros.IResolvable;

    /**
     * Property describe: The description of the alert contact.
     */
    readonly describe: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::Contact`, which is used to create an alert contact.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
 */
export class Contact extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ContactProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ContactName: The name of the alarm contact.
     */
    public readonly attrContactName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosContact = new RosContact(this, id,  {
            describe: props.describe,
            contactName: props.contactName,
            channels: props.channels,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosContact;
        this.attrContactName = rosContact.attrContactName;
    }
}
