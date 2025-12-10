import * as ros from '@alicloud/ros-cdk-core';
import { RosContactGroup } from './cms.generated';
export { RosContactGroup as ContactGroupProperty };
/**
 * Properties for defining a `ContactGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
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
 * Represents a `ContactGroup`.
 */
export interface IContactGroup extends ros.IResource {
    readonly props: ContactGroupProps;
    /**
     * Attribute ContactGroupName: The name of the alert contact group.
     */
    readonly attrContactGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::ContactGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosContactGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contactgroup
 */
export declare class ContactGroup extends ros.Resource implements IContactGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ContactGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ContactGroupName: The name of the alert contact group.
     */
    readonly attrContactGroupName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactGroupProps, enableResourcePropertyConstraint?: boolean);
}
