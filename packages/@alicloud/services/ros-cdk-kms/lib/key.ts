import * as ros from '@alicloud/ros-cdk-core';
import { RosKey } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKey as KeyProperty };

/**
 * Properties for defining a `ALIYUN::KMS::Key`
 */
export interface KeyProps {

    /**
     * Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property dkmsInstanceId: The ID of the dedicated KMS instance.
     */
    readonly dkmsInstanceId?: string | ros.IResolvable;

    /**
     * Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;

    /**
     * Property keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
     */
    readonly keySpec?: string | ros.IResolvable;

    /**
     * Property keyUsage: The usage of the CMK. Valid values:
     * ENCRYPT/DECRYPT: encrypts or decrypts data.
     * SIGN/VERIFY: generates or verifies a digital signature.
     * If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
     */
    readonly keyUsage?: string | ros.IResolvable;

    /**
     * Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
     */
    readonly pendingWindowInDays?: number | ros.IResolvable;

    /**
     * Property protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
     * If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
     * If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
     */
    readonly protectionLevel?: string | ros.IResolvable;

    /**
     * Property rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
     */
    readonly rotationInterval?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::KMS::Key`
 */
export class Key extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute KeyId: The globally unique identifier for the CMK.
     */
    public readonly attrKeyId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::KMS::Key`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosKey = new RosKey(this, id,  {
            protectionLevel: props.protectionLevel,
            description: props.description,
            rotationInterval: props.rotationInterval,
            pendingWindowInDays: props.pendingWindowInDays === undefined || props.pendingWindowInDays === null ? 30 : props.pendingWindowInDays,
            enableAutomaticRotation: props.enableAutomaticRotation,
            keySpec: props.keySpec,
            enable: props.enable === undefined || props.enable === null ? true : props.enable,
            keyUsage: props.keyUsage,
            dkmsInstanceId: props.dkmsInstanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKey;
        this.attrKeyId = rosKey.attrKeyId;
    }
}
