import * as ros from '@alicloud/ros-cdk-core';
import { RosSSHKeyPair } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSSHKeyPair as SSHKeyPairProperty };

/**
 * Properties for defining a `ALIYUN::ECS::SSHKeyPair`
 */
export interface SSHKeyPairProps {

    /**
     * Property keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
     */
    readonly keyPairName: string;

    /**
     * Property publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
     */
    readonly publicKeyBody?: string;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
}

/**
 * A ROS resource type:  `ALIYUN::ECS::SSHKeyPair`
 */
export class SSHKeyPair extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute KeyPairFingerPrint: The fingerprint of the key pair. The public key fingerprint format defined in RFC4716: MD5 message digest algorithm. Refer to http://tools.ietf.org/html/rfc4716.
     */
    public readonly attrKeyPairFingerPrint: any;

    /**
     * Attribute KeyPairName: SSH Key pair name.
     */
    public readonly attrKeyPairName: any;

    /**
     * Attribute PrivateKeyBody: The private key of the key pair. Content of the RSA private key in the PKCS#8 format of the unencrypted PEM encoding. Refer to: https://www.openssl.org/docs/apps/pkcs8.html.User only can get the private key one time when and only when SSH key pair is created.
     */
    public readonly attrPrivateKeyBody: any;

    /**
     * Create a new `ALIYUN::ECS::SSHKeyPair`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SSHKeyPairProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosSSHKeyPair = new RosSSHKeyPair(this, id,  {
            keyPairName: props.keyPairName,
            resourceGroupId: props.resourceGroupId,
            publicKeyBody: props.publicKeyBody,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSSHKeyPair;
        this.attrKeyPairFingerPrint = rosSSHKeyPair.attrKeyPairFingerPrint;
        this.attrKeyPairName = rosSSHKeyPair.attrKeyPairName;
        this.attrPrivateKeyBody = rosSSHKeyPair.attrPrivateKeyBody;
    }
}
