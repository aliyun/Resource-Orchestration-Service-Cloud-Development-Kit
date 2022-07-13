import * as ros from '@alicloud/ros-cdk-core';
import { RosContactGroup } from './cms.generated';
export { RosContactGroup as ContactGroupProperty };
/**
 * Properties for defining a `ALIYUN::CMS::ContactGroup`
 */
export interface ContactGroupProps {
    /**
     * Property contactGroupName: The name of the alert contact group.
     */
    readonly contactGroupName: string | ros.IResolvable;
    /**
     * Property contactNames: The name of the alert contact.
     */
    readonly contactNames: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property describe: The description of the alert contact group.
     */
    readonly describe: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CMS::ContactGroup`
 */
export declare class ContactGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ContactGroupName: The name of the alert contact group.
     */
    readonly attrContactGroupName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactGroupProps, enableResourcePropertyConstraint?: boolean);
}
