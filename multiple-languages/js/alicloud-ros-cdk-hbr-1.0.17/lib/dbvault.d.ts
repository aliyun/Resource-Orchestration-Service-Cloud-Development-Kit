import * as ros from '@alicloud/ros-cdk-core';
import { RosDbVault } from './hbr.generated';
export { RosDbVault as DbVaultProperty };
/**
 * Properties for defining a `ALIYUN::HBR::DbVault`
 */
export interface DbVaultProps {
    /**
     * Property retentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    readonly retentionDays: number | ros.IResolvable;
    /**
     * Property vaultName: Display name of the vault.
     */
    readonly vaultName: string | ros.IResolvable;
    /**
     * Property vaultRegionId: The region ID to create the vault.
     */
    readonly vaultRegionId: string | ros.IResolvable;
    /**
     * Property description: Description of the vault.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDbVault.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::HBR::DbVault`
 */
export declare class DbVault extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Description: Description of the vault.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    readonly attrRetentionDays: ros.IResolvable;
    /**
     * Attribute VaultId: Vault ID.
     */
    readonly attrVaultId: ros.IResolvable;
    /**
     * Attribute VaultName: Display name of the vault.
     */
    readonly attrVaultName: ros.IResolvable;
    /**
     * Attribute VaultRegionId: The region ID to create the vault.
     */
    readonly attrVaultRegionId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::HBR::DbVault`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbVaultProps, enableResourcePropertyConstraint?: boolean);
}
