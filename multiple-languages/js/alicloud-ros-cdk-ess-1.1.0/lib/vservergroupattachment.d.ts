import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroupAttachment } from './ess.generated';
export { RosVServerGroupAttachment as VServerGroupAttachmentProperty };
/**
 * Properties for defining a `VServerGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
 */
export interface VServerGroupAttachmentProps {
    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * Property vServerGroups: A list of vserver groups attached on scaling group
     */
    readonly vServerGroups: Array<RosVServerGroupAttachment.VServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property forceAttach: If instances of scaling group are attached\/removed from slb backend server when attach\/detach vserver group from scaling group.
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESS::VServerGroupAttachment`, which is used to associate vServer groups of a Sever Load Balancer (SLB) instance with a scaling group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-vservergroupattachment
 */
export declare class VServerGroupAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VServerGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    readonly attrScalingGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
