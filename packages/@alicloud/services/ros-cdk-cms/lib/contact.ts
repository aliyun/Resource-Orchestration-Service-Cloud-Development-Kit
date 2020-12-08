import * as ros from '@alicloud/ros-cdk-core';
import { RosContact } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosContact as ContactProperty };

/**
 * Properties for defining a `ALIYUN::CMS::Contact`
 */
export interface ContactProps {

    /**
     * @Property channels: undefined
     */
    readonly channels: RosContact.ChannelsProperty | ros.IResolvable;

    /**
     * @Property contactName: The name of the alarm contact.
     */
    readonly contactName: string;

    /**
     * @Property describe: The description of the alert contact.
     */
    readonly describe: string;
}

/**
 * A ROS resource type:  `ALIYUN::CMS::Contact`
 */
export class Contact extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ContactName: The name of the alarm contact.
     */
    public readonly attrContactName: any;

    /**
     * Create a new `ALIYUN::CMS::Contact`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosContact = new RosContact(this, id,  {
            describe: props.describe,
            contactName: props.contactName,
            channels: props.channels,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosContact;
        this.attrContactName = rosContact.attrContactName;
    }
}
