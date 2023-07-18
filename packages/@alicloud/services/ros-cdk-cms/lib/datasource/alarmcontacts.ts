import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmContacts } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlarmContacts as AlarmContactsProperty };

/**
 * Properties for defining a `DATASOURCE::CMS::AlarmContacts`
 */
export interface AlarmContactsProps {

    /**
     * Property alarmContactName: The name of the alert contact.
     */
    readonly alarmContactName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::CMS::AlarmContacts`
 */
export class AlarmContacts extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AlarmContactNames: The list of alarm contact names.
     */
    public readonly attrAlarmContactNames: ros.IResolvable;

    /**
     * Attribute AlarmContacts: The list of alarm contacts.
     */
    public readonly attrAlarmContacts: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::CMS::AlarmContacts`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmContactsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAlarmContacts = new RosAlarmContacts(this, id,  {
            alarmContactName: props.alarmContactName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlarmContacts;
        this.attrAlarmContactNames = rosAlarmContacts.attrAlarmContactNames;
        this.attrAlarmContacts = rosAlarmContacts.attrAlarmContacts;
    }
}
