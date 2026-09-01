import * as ros from '@alicloud/ros-cdk-core';
import { RosKey } from './kms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKey as KeyProperty };

/**
 * Properties for defining a `Key`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
export interface KeyProps {

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the key. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property dkmsInstanceId: The ID of the KMS instance.
     * > This parameter is required when you create a key for a KMS instance. This
     * parameter is not required when you create a default key (master key).
     */
    readonly dkmsInstanceId?: string | ros.IResolvable;

    /**
     * Property enable: Specifies whether the key is enabled. Defaults to true.
     */
    readonly enable?: boolean | ros.IResolvable;

    /**
     * Property enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true\/false (default)
     */
    readonly enableAutomaticRotation?: boolean | ros.IResolvable;

    /**
     * Property keySpec: Key type. Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2
     */
    readonly keySpec?: string | ros.IResolvable;

    /**
     * Property keyUsage: The usage of the CMK. Valid values:
     * ENCRYPT\/DECRYPT: encrypts or decrypts data.
     * SIGN\/VERIFY: generates or verifies a digital signature.
     * If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
     */
    readonly keyUsage?: string | ros.IResolvable;

    /**
     * Property pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
     */
    readonly pendingWindowInDays?: number | ros.IResolvable;

    /**
     * Property policy: The policy of key.
     */
    readonly policy?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property protectionLevel: You do not need to specify this parameter. KMS automatically sets an appropriate
     * protection level for your key.
     * The protection level of the key. Valid values:
     * - SOFTWARE
     * - HSM
     * > * If you specify DKMSInstanceId, this parameter is ignored. If the instance is
     * a software key management instance, the protection level is SOFTWARE. If the
     * instance is a hardware key management instance, the protection level is HSM.
     * - If you do not specify DKMSInstanceId, leave this parameter empty. KMS sets the
     * protection level. If a managed HSM is available in the region, KMS sets this
     * parameter to HSM. Otherwise, KMS sets this parameter to SOFTWARE. For more
     * information, see [Managed HSM overview]().
     */
    readonly protectionLevel?: string | ros.IResolvable;

    /**
     * Property rotationInterval: The automatic rotation period. The format is \`integer\[unit]\`. \`integer\`
     * indicates the length of the period. \`unit\` indicates the unit of time. Valid
     * units: d (day), h (hour), m (minute), and s (second). For example, both 7d and
     * 604800s represent a period of 7 days.
     * - If the key is a default key, the value is 365d.
     * - If the key is a software-protected key, the value can be from 7d to 365d.
     * - If the key is a hardware-protected key, automatic rotation is not supported.
     * > This parameter is required if you set EnableAutomaticRotation to true.
     */
    readonly rotationInterval?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to key. Max support 20 tags to add during create key. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosKey.TagsProperty[];
}

/**
 * Represents a `Key`.
 */
export interface IKey extends ros.IResource {
    readonly props: KeyProps;

    /**
     * Attribute KeyId: The globally unique identifier for the CMK.
     */
    readonly attrKeyId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::KMS::Key`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKey`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
 */
export class Key extends ros.Resource implements IKey {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: KeyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute KeyId: The globally unique identifier for the CMK.
     */
    public readonly attrKeyId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKey = new RosKey(this, id,  {
            policy: props.policy,
            protectionLevel: props.protectionLevel,
            description: props.description,
            rotationInterval: props.rotationInterval,
            pendingWindowInDays: props.pendingWindowInDays === undefined || props.pendingWindowInDays === null ? 30 : props.pendingWindowInDays,
            enableAutomaticRotation: props.enableAutomaticRotation,
            keySpec: props.keySpec,
            keyUsage: props.keyUsage,
            enable: props.enable === undefined || props.enable === null ? true : props.enable,
            dkmsInstanceId: props.dkmsInstanceId,
            deletionProtection: props.deletionProtection,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKey;
        this.attrKeyId = rosKey.attrKeyId;
    }
}
