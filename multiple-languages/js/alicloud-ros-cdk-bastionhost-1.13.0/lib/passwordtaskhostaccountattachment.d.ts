import * as ros from '@alicloud/ros-cdk-core';
import { RosPasswordTaskHostAccountAttachment } from './bastionhost.generated';
export { RosPasswordTaskHostAccountAttachment as PasswordTaskHostAccountAttachmentProperty };
/**
 * Properties for defining a `PasswordTaskHostAccountAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
 */
export interface PasswordTaskHostAccountAttachmentProps {
    /**
     * Property hostAccountIds: The IDs of the host accounts to be attached to the password task.
     */
    readonly hostAccountIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property instanceId: The ID of the bastion host instance.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * Property taskId: The ID of the password task.
     */
    readonly taskId: string | ros.IResolvable;
}
/**
 * Represents a `PasswordTaskHostAccountAttachment`.
 */
export interface IPasswordTaskHostAccountAttachment extends ros.IResource {
    readonly props: PasswordTaskHostAccountAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::BastionHost::PasswordTaskHostAccountAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPasswordTaskHostAccountAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-passwordtaskhostaccountattachment
 */
export declare class PasswordTaskHostAccountAttachment extends ros.Resource implements IPasswordTaskHostAccountAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PasswordTaskHostAccountAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PasswordTaskHostAccountAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
