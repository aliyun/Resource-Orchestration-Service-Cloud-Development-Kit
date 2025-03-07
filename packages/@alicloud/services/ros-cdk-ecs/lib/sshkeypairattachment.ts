import * as ros from '@alicloud/ros-cdk-core';
import { RosSSHKeyPairAttachment } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSSHKeyPairAttachment as SSHKeyPairAttachmentProperty };

/**
 * Properties for defining a `SSHKeyPairAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
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

    /**
     * Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
     * Default: false
     */
    readonly autoReboot?: boolean | ros.IResolvable;
}

/**
 * Represents a `SSHKeyPairAttachment`.
 */
export interface ISSHKeyPairAttachment extends ros.IResource {
    readonly props: SSHKeyPairAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::SSHKeyPairAttachment`, which is used to attach an SSH key pair to Elastic Compute Service (ECS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSSHKeyPairAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
 */
export class SSHKeyPairAttachment extends ros.Resource implements ISSHKeyPairAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SSHKeyPairAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SSHKeyPairAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSSHKeyPairAttachment = new RosSSHKeyPairAttachment(this, id,  {
            keyPairName: props.keyPairName,
            autoReboot: props.autoReboot === undefined || props.autoReboot === null ? false : props.autoReboot,
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSSHKeyPairAttachment;
    }
}
