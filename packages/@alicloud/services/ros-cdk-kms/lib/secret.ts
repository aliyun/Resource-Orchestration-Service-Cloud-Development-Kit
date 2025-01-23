import * as ros from '@alicloud/ros-cdk-core';
import { RosSecret } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecret as SecretProperty };

/**
 * Properties for defining a `Secret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
export interface SecretProps {

    /**
     * Property secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
     * value and stores it in the initial version.
     */
    readonly secretData: string | ros.IResolvable;

    /**
     * Property secretName: The name of the secret.
     */
    readonly secretName: string | ros.IResolvable;

    /**
     * Property versionId: The version number of the initial version. Version numbers are unique in each secret
     * object.
     */
    readonly versionId: string | ros.IResolvable;

    /**
     * Property description: The description of the secret.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    readonly dkmsInstanceId?: string | ros.IResolvable;

    /**
     * Property enableAutomaticRotation: Specifies whether to enable automatic rotation. Valid values:
     * true: specifies to enable automatic rotation.
     * false: specifies to disable automatic rotation. This is the default value.
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;

    /**
     * Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
     * If you do not specify this parameter, Secrets Manager automatically creates an encryption
     * key to encrypt the secret.
     * Note The KMS CMK must be a symmetric key.
     */
    readonly encryptionKeyId?: string | ros.IResolvable;

    /**
     * Property extendedConfig: The extended configuration of the secret. This parameter specifies the properties of the secret of the specific type.
     */
    readonly extendedConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
     * true
     * false (default value)
     */
    readonly forceDeleteWithoutRecovery?: boolean | ros.IResolvable;

    /**
     * Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
     */
    readonly recoveryWindowInDays?: number | ros.IResolvable;

    /**
     * Property rotationInterval: The interval for automatic rotation. Valid values: 6 hours to 8,760 hours (365 days).
     * The value is in the integer[unit] format.
     * The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
     */
    readonly rotationInterval?: string | ros.IResolvable;

    /**
     * Property secretDataType: The type of the secret value. Valid values:
     * text (default value)
     * binary
     */
    readonly secretDataType?: string | ros.IResolvable;

    /**
     * Property secretType: The type of the secret. Valid values:
     * Generic: specifies a generic secret.
     * Rds: specifies a managed ApsaraDB RDS secret.
     * RAMCredentials: specifies a managed RAM secret.
     * ECS: specifies a managed ECS secret.
     */
    readonly secretType?: string | ros.IResolvable;

    /**
     * Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    readonly versionStages?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Secret`.
 */
export interface ISecret extends ros.IResource {
    readonly props: SecretProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute SecretName: The name of the secret.
     */
    readonly attrSecretName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Secret`, which is used to create a secret and store the initial version of the secret.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecret`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
 */
export class Secret extends ros.Resource implements ISecret {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SecretProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute SecretName: The name of the secret.
     */
    public readonly attrSecretName: ros.IResolvable | string;

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
            versionId: props.versionId,
            description: props.description,
            rotationInterval: props.rotationInterval,
            secretType: props.secretType,
            secretDataType: props.secretDataType,
            dkmsInstanceId: props.dkmsInstanceId,
            versionStages: props.versionStages,
            secretName: props.secretName,
            enableAutomaticRotation: props.enableAutomaticRotation,
            extendedConfig: props.extendedConfig,
            secretData: props.secretData,
            encryptionKeyId: props.encryptionKeyId,
            recoveryWindowInDays: props.recoveryWindowInDays === undefined || props.recoveryWindowInDays === null ? 30 : props.recoveryWindowInDays,
            forceDeleteWithoutRecovery: props.forceDeleteWithoutRecovery === undefined || props.forceDeleteWithoutRecovery === null ? false : props.forceDeleteWithoutRecovery,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecret;
        this.attrArn = rosSecret.attrArn;
        this.attrSecretName = rosSecret.attrSecretName;
    }
}
