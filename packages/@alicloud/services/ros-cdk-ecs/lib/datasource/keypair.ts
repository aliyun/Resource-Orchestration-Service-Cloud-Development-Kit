import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPair } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKeyPair as KeyPairProperty };

/**
 * Properties for defining a `KeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
export interface KeyPairProps {

    /**
     * Property keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
     * - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * - SshKey: queries the key pair named SshKey.
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
     * Attribute CreateTime: The time when the key pair was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute FingerPrint: The fingerprint of the key pair.
     */
    readonly attrFingerPrint: ros.IResolvable | string;

    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    readonly attrKeyPairName: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the key pair.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::KeyPair`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPair`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
export class KeyPair extends ros.Resource implements IKeyPair {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: KeyPairProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the key pair was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute FingerPrint: The fingerprint of the key pair.
     */
    public readonly attrFingerPrint: ros.IResolvable | string;

    /**
     * Attribute KeyPairName: The name of the key pair.
     */
    public readonly attrKeyPairName: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the key pair.
     */
    public readonly attrTags: ros.IResolvable | string;

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
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPair;
        this.attrCreateTime = rosKeyPair.attrCreateTime;
        this.attrFingerPrint = rosKeyPair.attrFingerPrint;
        this.attrKeyPairName = rosKeyPair.attrKeyPairName;
        this.attrResourceGroupId = rosKeyPair.attrResourceGroupId;
        this.attrTags = rosKeyPair.attrTags;
    }
}
