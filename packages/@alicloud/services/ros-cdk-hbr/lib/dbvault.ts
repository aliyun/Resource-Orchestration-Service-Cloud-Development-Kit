import * as ros from '@alicloud/ros-cdk-core';
import { RosDbVault } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDbVault as DbVaultProperty };

/**
 * Properties for defining a `DbVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
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
 * Represents a `DbVault`.
 */
export interface IDbVault extends ros.IResource {
    readonly props: DbVaultProps;

    /**
     * Attribute Description: Description of the vault.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    readonly attrRetentionDays: ros.IResolvable | string;

    /**
     * Attribute VaultId: Vault ID.
     */
    readonly attrVaultId: ros.IResolvable | string;

    /**
     * Attribute VaultName: Display name of the vault.
     */
    readonly attrVaultName: ros.IResolvable | string;

    /**
     * Attribute VaultRegionId: The region ID to create the vault.
     */
    readonly attrVaultRegionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::DbVault`, which is used to create a mirror vault.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDbVault`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-dbvault
 */
export class DbVault extends ros.Resource implements IDbVault {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DbVaultProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Description: Description of the vault.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute RetentionDays: Data retention days of the vault. Data will be deleted when it's older than this time.
     */
    public readonly attrRetentionDays: ros.IResolvable | string;

    /**
     * Attribute VaultId: Vault ID.
     */
    public readonly attrVaultId: ros.IResolvable | string;

    /**
     * Attribute VaultName: Display name of the vault.
     */
    public readonly attrVaultName: ros.IResolvable | string;

    /**
     * Attribute VaultRegionId: The region ID to create the vault.
     */
    public readonly attrVaultRegionId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DbVaultProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDbVault = new RosDbVault(this, id,  {
            description: props.description,
            vaultName: props.vaultName,
            retentionDays: props.retentionDays,
            vaultRegionId: props.vaultRegionId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDbVault;
        this.attrDescription = rosDbVault.attrDescription;
        this.attrRetentionDays = rosDbVault.attrRetentionDays;
        this.attrVaultId = rosDbVault.attrVaultId;
        this.attrVaultName = rosDbVault.attrVaultName;
        this.attrVaultRegionId = rosDbVault.attrVaultRegionId;
    }
}
