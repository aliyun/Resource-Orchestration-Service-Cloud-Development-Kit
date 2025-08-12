import * as ros from '@alicloud/ros-cdk-core';
import { RosSecret } from './kms.generated';
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
 * Represents a `Secret`.
 */
export interface ISecret extends ros.IResource {
    readonly props: SecretProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
     */
    readonly attrAutomaticRotation: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the secret was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
     */
    readonly attrDkmsInstanceId: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the secret.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
     */
    readonly attrEncryptionKeyId: ros.IResolvable | string;
    /**
     * Attribute ExtendedConfig: The extended configuration of the secret.
     */
    readonly attrExtendedConfig: ros.IResolvable | string;
    /**
     * Attribute LastRotationDate: The time when the last rotation was performed.
     */
    readonly attrLastRotationDate: ros.IResolvable | string;
    /**
     * Attribute NextRotationDate: The time when the next rotation will be performed.
     */
    readonly attrNextRotationDate: ros.IResolvable | string;
    /**
     * Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
     */
    readonly attrPlannedDeleteTime: ros.IResolvable | string;
    /**
     * Attribute RotationInterval: The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
     */
    readonly attrRotationInterval: ros.IResolvable | string;
    /**
     * Attribute SecretName: The name of the secret.
     */
    readonly attrSecretName: ros.IResolvable | string;
    /**
     * Attribute SecretType: The type of the secret.
     */
    readonly attrSecretType: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the secret was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KMS::Secret`, which is used to query the information about a secret.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSecret`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secret
 */
export declare class Secret extends ros.Resource implements ISecret {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SecretProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN) of the secret.
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute AutomaticRotation: Indicates whether automatic rotation is enabled.
     */
    readonly attrAutomaticRotation: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the secret was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DKMSInstanceId: The ID of the dedicated KMS instance.
     */
    readonly attrDkmsInstanceId: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the secret.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EncryptionKeyId: The ID of the customer master key (CMK) that is used to encrypt the secret value.
     */
    readonly attrEncryptionKeyId: ros.IResolvable | string;
    /**
     * Attribute ExtendedConfig: The extended configuration of the secret.
     */
    readonly attrExtendedConfig: ros.IResolvable | string;
    /**
     * Attribute LastRotationDate: The time when the last rotation was performed.
     */
    readonly attrLastRotationDate: ros.IResolvable | string;
    /**
     * Attribute NextRotationDate: The time when the next rotation will be performed.
     */
    readonly attrNextRotationDate: ros.IResolvable | string;
    /**
     * Attribute PlannedDeleteTime: The time when the secret is scheduled to be deleted.
     */
    readonly attrPlannedDeleteTime: ros.IResolvable | string;
    /**
     * Attribute RotationInterval: The interval for automatic rotation. The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.The value is in the integer[unit] format. integer indicates the length of time. unit: indicates the time unit. The value of unit is fixed as s. For example, if the value is 604800s, automatic rotation is performed at a 7-day interval.
     */
    readonly attrRotationInterval: ros.IResolvable | string;
    /**
     * Attribute SecretName: The name of the secret.
     */
    readonly attrSecretName: ros.IResolvable | string;
    /**
     * Attribute SecretType: The type of the secret.
     */
    readonly attrSecretType: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: The time when the secret was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SecretProps, enableResourcePropertyConstraint?: boolean);
}
