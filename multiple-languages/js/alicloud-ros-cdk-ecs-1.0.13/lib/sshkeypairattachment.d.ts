import * as ros from '@alicloud/ros-cdk-core';
import { RosSSHKeyPairAttachment } from './ecs.generated';
export { RosSSHKeyPairAttachment as SSHKeyPairAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`
 */
export interface SSHKeyPairAttachmentProps {
    /**
     * Property instanceIds: The comma delimited ECS instance id list. Only support Linux.
     */
    readonly instanceIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property keyPairName: SSH key pair name.
     */
    readonly keyPairName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::SSHKeyPairAttachment`
 */
export declare class SSHKeyPairAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ECS::SSHKeyPairAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SSHKeyPairAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
