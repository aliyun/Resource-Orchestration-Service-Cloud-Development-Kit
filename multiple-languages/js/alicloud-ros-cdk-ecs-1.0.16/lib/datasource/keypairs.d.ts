import * as ros from '@alicloud/ros-cdk-core';
import { RosKeyPairs } from './ecs.generated';
export { RosKeyPairs as KeyPairsProperty };
/**
 * Properties for defining a `DATASOURCE::ECS::KeyPairs`
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
     * Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of keypair.
     */
    readonly tags?: RosKeyPairs.TagsProperty[];
}
/**
 * A ROS resource type:  `DATASOURCE::ECS::KeyPairs`
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
     * Create a new `DATASOURCE::ECS::KeyPairs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: KeyPairsProps, enableResourcePropertyConstraint?: boolean);
}
