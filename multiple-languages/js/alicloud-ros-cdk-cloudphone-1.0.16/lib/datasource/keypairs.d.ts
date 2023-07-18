import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPairs } from './cloudphone.generated';
export { RosKeyPairs as KeyPairsProperty };
/**
 * Properties for defining a `DATASOURCE::CloudPhone::KeyPairs`
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
 * A ROS resource type:  `DATASOURCE::CloudPhone::KeyPairs`
 */
export declare class KeyPairs extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute KeyPairNames: The list of key pair names.
     */
    readonly attrKeyPairNames: ros.IResolvable;
    /**
     * Attribute KeyPairs: The list of key pairs.
     */
    readonly attrKeyPairs: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CloudPhone::KeyPairs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: KeyPairsProps, enableResourcePropertyConstraint?: boolean);
}
