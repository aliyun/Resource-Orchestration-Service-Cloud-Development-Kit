import * as ros from '@alicloud/ros-cdk-core';
import { RosClientInstanceAttachment } from './eais.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class ClientInstanceAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

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
     * Create a new `ALIYUN::EAIS::ClientInstanceAttachment`.
     *
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
