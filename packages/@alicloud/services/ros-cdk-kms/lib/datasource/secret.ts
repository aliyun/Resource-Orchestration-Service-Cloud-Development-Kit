import * as ros from '@alicloud/ros-cdk-core';
import { RosSecret } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecret as SecretProperty };

/**
 * Properties for defining a `Secret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
 */
export interface SecretProps {

    /**
     * Property secretName: The name of the secret.
     */
    readonly secretName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Secret`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecret`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
 */
export class Secret extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SecretProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
     */
    public readonly attrAutomaticRotation: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the secret was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
     */
    public readonly attrDkmsInstanceId: ros.IResolvable;

    /**
     * Attribute Description: The description of the secret.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
     */
    public readonly attrEncryptionKeyId: ros.IResolvable;

    /**
     * Attribute ExtendedConfig: The extended configuration of the secret.
     */
    public readonly attrExtendedConfig: ros.IResolvable;

    /**
     * Attribute LastRotationDate: The time when the last rotation was performed.
     */
    public readonly attrLastRotationDate: ros.IResolvable;

    /**
     * Attribute NextRotationDate: The time when the next rotation will be performed.
     */
    public readonly attrNextRotationDate: ros.IResolvable;

    /**
     * Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
     */
    public readonly attrPlannedDeleteTime: ros.IResolvable;

    /**
     * Attribute RotationInterval: The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
     */
    public readonly attrRotationInterval: ros.IResolvable;

    /**
     * Attribute SecretName: The name of the secret.
     */
    public readonly attrSecretName: ros.IResolvable;

    /**
     * Attribute SecretType: The type of the secret.
     */
    public readonly attrSecretType: ros.IResolvable;

    /**
     * Attribute UpdateTime: The time when the secret was updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSecret = new RosSecret(this, id,  {
            secretName: props.secretName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecret;
        this.attrArn = rosSecret.attrArn;
        this.attrAutomaticRotation = rosSecret.attrAutomaticRotation;
        this.attrCreateTime = rosSecret.attrCreateTime;
        this.attrDkmsInstanceId = rosSecret.attrDkmsInstanceId;
        this.attrDescription = rosSecret.attrDescription;
        this.attrEncryptionKeyId = rosSecret.attrEncryptionKeyId;
        this.attrExtendedConfig = rosSecret.attrExtendedConfig;
        this.attrLastRotationDate = rosSecret.attrLastRotationDate;
        this.attrNextRotationDate = rosSecret.attrNextRotationDate;
        this.attrPlannedDeleteTime = rosSecret.attrPlannedDeleteTime;
        this.attrRotationInterval = rosSecret.attrRotationInterval;
        this.attrSecretName = rosSecret.attrSecretName;
        this.attrSecretType = rosSecret.attrSecretType;
        this.attrUpdateTime = rosSecret.attrUpdateTime;
    }
}
