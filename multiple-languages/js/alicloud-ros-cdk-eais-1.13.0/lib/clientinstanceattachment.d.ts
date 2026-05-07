import * as ros from '@alicloud/ros-cdk-core';
import { RosClientInstanceAttachment } from './eais.generated';
export { RosClientInstanceAttachment as ClientInstanceAttachmentProperty };
/**
 * Properties for defining a `ClientInstanceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
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
 * Represents a `ClientInstanceAttachment`.
 */
export interface IClientInstanceAttachment extends ros.IResource {
    readonly props: ClientInstanceAttachmentProps;
    /**
     * Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly attrClientInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The EAIS instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EAIS::ClientInstanceAttachment`, which is used to attach an Elastic Accelerated Computing Instances (EAIS) instance to an Elastic Compute Service (ECS) instance or elastic container instance of a user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClientInstanceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
 */
export declare class ClientInstanceAttachment extends ros.Resource implements IClientInstanceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClientInstanceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    readonly attrClientInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The EAIS instance ID.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Switch ID.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClientInstanceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
