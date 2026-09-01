import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPairs } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosKeyPairs as KeyPairsProperty };

/**
 * Properties for defining a `KeyPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
 */
export interface KeyPairsProps {

    /**
     * Property keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    readonly keyPairFingerPrint?: string | ros.IResolvable;

    /**
     * Property keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
     * *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * SshKey: queries the key pair named SshKey.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of keypair.
     */
    readonly tags?: RosKeyPairs.TagsProperty[];
}

/**
 * Represents a `KeyPairs`.
 */
export interface IKeyPairs extends ros.IResource {
    readonly props: KeyPairsProps;

    /**
     * Attribute KeyPairNames: The list of key pair names.
     */
    readonly attrKeyPairNames: ros.IResolvable | string;

    /**
     * Attribute KeyPairs: The list of key pairs.
     */
    readonly attrKeyPairs: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::KeyPairs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosKeyPairs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
 */
export class KeyPairs extends ros.Resource implements IKeyPairs {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: KeyPairsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute KeyPairNames: The list of key pair names.
     */
    public readonly attrKeyPairNames: ros.IResolvable | string;

    /**
     * Attribute KeyPairs: The list of key pairs.
     */
    public readonly attrKeyPairs: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: KeyPairsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosKeyPairs = new RosKeyPairs(this, id,  {
            keyPairFingerPrint: props.keyPairFingerPrint,
            keyPairName: props.keyPairName,
            resourceGroupId: props.resourceGroupId,
            tags: props.tags,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosKeyPairs;
        this.attrKeyPairNames = rosKeyPairs.attrKeyPairNames;
        this.attrKeyPairs = rosKeyPairs.attrKeyPairs;
    }
}
