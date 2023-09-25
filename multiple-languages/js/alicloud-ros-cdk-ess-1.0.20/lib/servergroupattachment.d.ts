import * as ros from '@alicloud/ros-cdk-core';
import { RosServerGroupAttachment } from './ess.generated';
export { RosServerGroupAttachment as ServerGroupAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ESS::ServerGroupAttachment`
 */
export interface ServerGroupAttachmentProps {
    /**
     * Property scalingGroupId: The ID of the scaling group.
     */
    readonly scalingGroupId: string | ros.IResolvable;
    /**
     * Property serverGroups: A collection of information about server groups.
     */
    readonly serverGroups: Array<RosServerGroupAttachment.ServerGroupsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly forceAttach?: boolean | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ESS::ServerGroupAttachment`
 */
export declare class ServerGroupAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
Note This parameter is returned only after you set the ForceAttach parameter to true.
     */
    readonly attrScalingActivityId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ESS::ServerGroupAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ServerGroupAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
