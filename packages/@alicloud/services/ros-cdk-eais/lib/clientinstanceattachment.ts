import * as ros from '@alicloud/ros-cdk-core';
import { RosClientInstanceAttachment } from './eais.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::EAIS::ClientInstanceAttachment`, which is used to attach an Elastic Accelerated Computing Instances (EAIS) instance to an Elastic Compute Service (ECS) instance or elastic container instance of a user.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClientInstanceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eais-clientinstanceattachment
 */
export class ClientInstanceAttachment extends ros.Resource {

    /**
     * Attribute ClientInstanceId: The ID of the ECS or ECI instance bound to the EAIS instance.
     */
    public readonly attrClientInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceId: The EAIS instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute VSwitchId: Switch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClientInstanceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosClientInstanceAttachment = new RosClientInstanceAttachment(this, id,  {
            instanceId: props.instanceId,
            clientInstanceId: props.clientInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClientInstanceAttachment;
        this.attrClientInstanceId = rosClientInstanceAttachment.attrClientInstanceId;
        this.attrInstanceId = rosClientInstanceAttachment.attrInstanceId;
        this.attrVSwitchId = rosClientInstanceAttachment.attrVSwitchId;
    }
}
