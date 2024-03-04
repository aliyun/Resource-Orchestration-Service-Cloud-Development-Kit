import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPair } from './cloudphone.generated';
// Generated from the AliCloud ROS Resource Specification
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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CloudPhone::KeyPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cloudphone-keypair
 */
export class KeyPair extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: KeyPairProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute KeyPairFingerPrint: The Private Key of the Fingerprint.
     */
    public readonly attrKeyPairFingerPrint: ros.IResolvable;

    /**
     * Attribute KeyPairName: The Key Name.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyPairProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKeyPair = new RosKeyPair(this, id,  {
            keyPairName: props.keyPairName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPair;
        this.attrCreateTime = rosKeyPair.attrCreateTime;
        this.attrKeyPairFingerPrint = rosKeyPair.attrKeyPairFingerPrint;
        this.attrKeyPairName = rosKeyPair.attrKeyPairName;
    }
}
