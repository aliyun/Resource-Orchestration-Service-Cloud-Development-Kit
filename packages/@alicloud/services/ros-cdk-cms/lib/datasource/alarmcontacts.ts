import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmContacts } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAlarmContacts as AlarmContactsProperty };

/**
 * Properties for defining a `AlarmContacts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export interface AlarmContactsProps {

    /**
     * Property alarmContactName: The name of the alert contact.
     */
    readonly alarmContactName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContacts`, which is used to query the information about alert contacts.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmContacts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export class AlarmContacts extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AlarmContactsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AlarmContactNames: The list of alarm contact names.
     */
    public readonly attrAlarmContactNames: ros.IResolvable;

    /**
     * Attribute AlarmContacts: The list of alarm contacts.
     */
    public readonly attrAlarmContacts: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AlarmContactsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAlarmContacts = new RosAlarmContacts(this, id,  {
            alarmContactName: props.alarmContactName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAlarmContacts;
        this.attrAlarmContactNames = rosAlarmContacts.attrAlarmContactNames;
        this.attrAlarmContacts = rosAlarmContacts.attrAlarmContacts;
    }
}
