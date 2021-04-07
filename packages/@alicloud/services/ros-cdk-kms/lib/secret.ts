import * as ros from '@alicloud/ros-cdk-core';
import { RosSecret } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSecret as SecretProperty };

/**
 * Properties for defining a `ALIYUN::KMS::Secret`
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
     * Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
     * If you do not specify this parameter, Secrets Manager automatically creates an encryption
     * key to encrypt the secret.
     * Note The KMS CMK must be a symmetric key.
     */
    readonly encryptionKeyId?: string | ros.IResolvable;

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
     * Property secretDataType: The type of the secret value. Valid values:
     * text (default value)
     * binary
     */
    readonly secretDataType?: string | ros.IResolvable;

    /**
     * Property versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
     */
    readonly versionStages?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::KMS::Secret`
 */
export class Secret extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute SecretName: The name of the secret.
     */
    public readonly attrSecretName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::KMS::Secret`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSecret = new RosSecret(this, id,  {
            versionId: props.versionId,
            secretName: props.secretName,
            description: props.description,
            secretDataType: props.secretDataType,
            secretData: props.secretData,
            versionStages: props.versionStages,
            encryptionKeyId: props.encryptionKeyId,
            recoveryWindowInDays: props.recoveryWindowInDays ? props.recoveryWindowInDays : 30,
            forceDeleteWithoutRecovery: props.forceDeleteWithoutRecovery ? props.forceDeleteWithoutRecovery : false,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSecret;
        this.attrArn = rosSecret.attrArn;
        this.attrSecretName = rosSecret.attrSecretName;
    }
}
