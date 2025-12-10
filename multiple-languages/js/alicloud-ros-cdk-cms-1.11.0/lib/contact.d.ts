import * as ros from '@alicloud/ros-cdk-core';
import { RosContact } from './cms.generated';
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
 * Represents a `Contact`.
 */
export interface IContact extends ros.IResource {
    readonly props: ContactProps;
    /**
     * Attribute ContactName: The name of the alarm contact.
     */
    readonly attrContactName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::Contact`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosContact`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-contact
 */
export declare class Contact extends ros.Resource implements IContact {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ContactProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ContactName: The name of the alarm contact.
     */
    readonly attrContactName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ContactProps, enableResourcePropertyConstraint?: boolean);
}
