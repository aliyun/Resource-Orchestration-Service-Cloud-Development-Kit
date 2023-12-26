import * as ros from '@alicloud/ros-cdk-core';
import { RosAlarmContacts } from './cms.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CMS::AlarmContacts`, which is used to query the basic information about alert contacts.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAlarmContacts`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
 */
export declare class AlarmContacts extends ros.Resource {
    /**
     * Attribute AlarmContactNames: The list of alarm contact names.
     */
    readonly attrAlarmContactNames: ros.IResolvable;
    /**
     * Attribute AlarmContacts: The list of alarm contacts.
     */
    readonly attrAlarmContacts: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AlarmContactsProps, enableResourcePropertyConstraint?: boolean);
}
