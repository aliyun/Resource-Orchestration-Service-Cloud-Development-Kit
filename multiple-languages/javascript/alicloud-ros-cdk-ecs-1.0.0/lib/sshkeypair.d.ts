import * as ros from '@alicloud/ros-cdk-core';
import { RosSSHKeyPair } from './ecs.generated';
export { RosSSHKeyPair as SSHKeyPairProperty };
/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPair`
 */
export interface SSHKeyPairProps {
    /**
     * @Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
     */
    readonly keyPairName: string;
    /**
     * @Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    readonly publicKeyBody?: string;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::SSHKeyPair`
 */
export declare class SSHKeyPair extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute KeyPairFingerPrint: The fingerprint of the key pair. The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    readonly attrKeyPairFingerPrint: any;
    /**
     * @Attribute KeyPairName: SSH Key pair name.
     */
    readonly attrKeyPairName: any;
    /**
     * @Attribute PrivateKeyBody: The private key of the key pair. Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    readonly attrPrivateKeyBody: any;
    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SSHKeyPairProps, enableResourcePropertyConstraint?: boolean);
}
