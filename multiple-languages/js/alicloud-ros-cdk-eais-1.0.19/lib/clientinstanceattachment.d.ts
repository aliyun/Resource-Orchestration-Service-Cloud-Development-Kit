import * as ros from '@alicloud/ros-cdk-core';
import { RosClientInstanceAttachment } from './eais.generated';
export { RosClientInstanceAttachment as ClientInstanceAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::EAIS::ClientInstanceAttachment`
 */
export interface ClientInstanceAttachmentProps {
    /**
     * Property clientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly clientInstanceId: string | ros.IResolvable;
    /**
     * Property instanceId: The EAIS instance ID.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::EAIS::ClientInstanceAttachment`
 */
export declare class ClientInstanceAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly attrClientInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceId: The EAIS instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::EAIS::ClientInstanceAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClientInstanceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
