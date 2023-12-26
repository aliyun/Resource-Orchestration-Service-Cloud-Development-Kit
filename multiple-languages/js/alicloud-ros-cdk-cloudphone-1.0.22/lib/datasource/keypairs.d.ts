import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPairs } from './cloudphone.generated';
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
export declare class KeyPairs extends ros.Resource {
    /**
     * Attribute KeyPairNames: The list of key pair names.
     */
    readonly attrKeyPairNames: ros.IResolvable;
    /**
     * Attribute KeyPairs: The list of key pairs.
     */
    readonly attrKeyPairs: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: KeyPairsProps, enableResourcePropertyConstraint?: boolean);
}
