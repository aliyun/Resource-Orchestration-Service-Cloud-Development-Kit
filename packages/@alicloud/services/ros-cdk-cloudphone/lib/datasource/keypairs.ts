import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPairs } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKeyPairs as KeyPairsProperty };

/**
 * Properties for defining a `KeyPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
 */
export interface KeyPairsProps {

    /**
     * Property keyPairFingerPrint: The Private Key of the Fingerprint.
     */
    readonly keyPairFingerPrint?: string | ros.IResolvable;

    /**
     * Property keyPairName: The Key Name.
     */
    readonly keyPairName?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::KeyPairs`, which is used to query the information about key pairs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPairs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypairs
 */
export class KeyPairs extends ros.Resource {

    /**
     * Attribute KeyPairNames: The list of key pair names.
     */
    public readonly attrKeyPairNames: ros.IResolvable;

    /**
     * Attribute KeyPairs: The list of key pairs.
     */
    public readonly attrKeyPairs: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyPairsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosKeyPairs = new RosKeyPairs(this, id,  {
            keyPairFingerPrint: props.keyPairFingerPrint,
            keyPairName: props.keyPairName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPairs;
        this.attrKeyPairNames = rosKeyPairs.attrKeyPairNames;
        this.attrKeyPairs = rosKeyPairs.attrKeyPairs;
    }
}
