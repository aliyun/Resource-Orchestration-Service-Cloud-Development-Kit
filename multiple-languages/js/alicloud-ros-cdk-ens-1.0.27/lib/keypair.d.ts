import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPair } from './ens.generated';
export { RosKeyPair as KeyPairProperty };
/**
 * Properties for defining a `KeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
 */
export interface KeyPairProps {
    /**
     * Property keyPairName: The name of the key pair. The name must conform to the following naming conventions:
     * The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
     * It must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly keyPairName: string | ros.IResolvable;
    /**
     * Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    readonly publicKeyBody?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::KeyPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
 */
export declare class KeyPair extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: KeyPairProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute KeyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable;
    /**
     * Attribute KeyPairName: SSH Key pair name.
     */
    readonly attrKeyPairName: ros.IResolvable;
    /**
     * Attribute PrivateKeyBody: The private key of the key pair. The private key is encoded with PEM in the PKCS#8 format.
     */
    readonly attrPrivateKeyBody: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyPairProps, enableResourcePropertyConstraint?: boolean);
}
