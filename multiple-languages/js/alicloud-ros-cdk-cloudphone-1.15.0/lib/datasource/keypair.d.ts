import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPair } from './cloudphone.generated';
export { RosKeyPair as KeyPairProperty };
/**
 * Properties for defining a `KeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export interface KeyPairProps {
    /**
     * Property keyPairName: The Key Name.
     */
    readonly keyPairName: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `KeyPair`.
 */
export interface IKeyPair extends ros.IResource {
    readonly props: KeyPairProps;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute KeyPairFingerPrint: The Private Key of the Fingerprint.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable | string;
    /**
     * Attribute KeyPairName: The Key Name.
     */
    readonly attrKeyPairName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::KeyPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export declare class KeyPair extends ros.Resource implements IKeyPair {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: KeyPairProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute KeyPairFingerPrint: The Private Key of the Fingerprint.
     */
    readonly attrKeyPairFingerPrint: ros.IResolvable | string;
    /**
     * Attribute KeyPairName: The Key Name.
     */
    readonly attrKeyPairName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyPairProps, enableResourcePropertyConstraint?: boolean);
}
