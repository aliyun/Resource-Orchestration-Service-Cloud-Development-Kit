import * as ros from '@alicloud/ros-cdk-core';
import { RosInstanceSecurityGroupAttachment } from './ens.generated';
export { RosInstanceSecurityGroupAttachment as InstanceSecurityGroupAttachmentProperty };
/**
 * Properties for defining a `InstanceSecurityGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export interface InstanceSecurityGroupAttachmentProps {
    /**
     * Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;
    /**
     * Property instanceId: Instance ID.
     */
    readonly instanceId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::InstanceSecurityGroupAttachment`, which is used to add an Edge Node Service (ENS) instance to a security group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstanceSecurityGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-instancesecuritygroupattachment
 */
export declare class InstanceSecurityGroupAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceSecurityGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute SecurityGroupId: Security group ID.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceSecurityGroupAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
