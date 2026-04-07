// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
 */
export interface RosVaultProps {

    /**
     * @Property vaultId: The ID of the backup vault.
     */
    readonly vaultId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVaultProps`
 *
 * @param properties - the TypeScript properties of a `RosVaultProps`
 *
 * @returns the result of the validation.
 */
function RosVaultPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vaultId', ros.requiredValidator)(properties.vaultId));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVaultProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::HBR::Vault` resource
 *
 * @param properties - the TypeScript properties of a `RosVaultProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::HBR::Vault` resource.
 */
// @ts-ignore TS6133
function rosVaultPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVaultPropsValidator(properties).assertSuccess();
    }
    return {
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::HBR::Vault`, which is used to query the information about a backup vault.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vault` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
 */
export class RosVault extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::HBR::Vault";

    /**
     * @Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    public readonly attrBackupPlanStatistics: ros.IResolvable;

    /**
     * @Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    public readonly attrBytesDone: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the backup vault.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    public readonly attrDedup: ros.IResolvable;

    /**
     * @Attribute Description: The description of the backup vault.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    public readonly attrIndexAvailable: ros.IResolvable;

    /**
     * @Attribute IndexLevel: The index level.
     */
    public readonly attrIndexLevel: ros.IResolvable;

    /**
     * @Attribute IndexUpdateTime: The time when the index was updated.
     */
    public readonly attrIndexUpdateTime: ros.IResolvable;

    /**
     * @Attribute LatestReplicationTime: The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrLatestReplicationTime: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the backup vault.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute RedundancyType: The data redundancy type of the backup vault.
     */
    public readonly attrRedundancyType: ros.IResolvable;

    /**
     * @Attribute Replication: Indicates whether the backup vault is a remote backup vault.
     */
    public readonly attrReplication: ros.IResolvable;

    /**
     * @Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    public readonly attrReplicationProgress: ros.IResolvable;

    /**
     * @Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
     */
    public readonly attrReplicationSourceRegionId: ros.IResolvable;

    /**
     * @Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    public readonly attrReplicationSourceVaultId: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    public readonly attrRetention: ros.IResolvable;

    /**
     * @Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    public readonly attrSearchEnabled: ros.IResolvable;

    /**
     * @Attribute SourceTypes: The data source types of the backup vault.
     */
    public readonly attrSourceTypes: ros.IResolvable;

    /**
     * @Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    public readonly attrStorageSize: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the backup vault.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TrialInfo: The free trial information.
     */
    public readonly attrTrialInfo: ros.IResolvable;

    /**
     * @Attribute UpdatedTime: The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrUpdatedTime: ros.IResolvable;

    /**
     * @Attribute VaultId: The ID of the backup vault.
     */
    public readonly attrVaultId: ros.IResolvable;

    /**
     * @Attribute VaultName: The name of the backup vault.
     */
    public readonly attrVaultName: ros.IResolvable;

    /**
     * @Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.
     */
    public readonly attrVaultStatusMessage: ros.IResolvable;

    /**
     * @Attribute VaultStorageClass: Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    public readonly attrVaultStorageClass: ros.IResolvable;

    /**
     * @Attribute VaultType: The type of the backup vault.
     */
    public readonly attrVaultType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vaultId: The ID of the backup vault.
     */
    public vaultId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVaultProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVault.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupPlanStatistics = this.getAtt('BackupPlanStatistics');
        this.attrBytesDone = this.getAtt('BytesDone');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDedup = this.getAtt('Dedup');
        this.attrDescription = this.getAtt('Description');
        this.attrIndexAvailable = this.getAtt('IndexAvailable');
        this.attrIndexLevel = this.getAtt('IndexLevel');
        this.attrIndexUpdateTime = this.getAtt('IndexUpdateTime');
        this.attrLatestReplicationTime = this.getAtt('LatestReplicationTime');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRedundancyType = this.getAtt('RedundancyType');
        this.attrReplication = this.getAtt('Replication');
        this.attrReplicationProgress = this.getAtt('ReplicationProgress');
        this.attrReplicationSourceRegionId = this.getAtt('ReplicationSourceRegionId');
        this.attrReplicationSourceVaultId = this.getAtt('ReplicationSourceVaultId');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRetention = this.getAtt('Retention');
        this.attrSearchEnabled = this.getAtt('SearchEnabled');
        this.attrSourceTypes = this.getAtt('SourceTypes');
        this.attrStorageSize = this.getAtt('StorageSize');
        this.attrTags = this.getAtt('Tags');
        this.attrTrialInfo = this.getAtt('TrialInfo');
        this.attrUpdatedTime = this.getAtt('UpdatedTime');
        this.attrVaultId = this.getAtt('VaultId');
        this.attrVaultName = this.getAtt('VaultName');
        this.attrVaultStatusMessage = this.getAtt('VaultStatusMessage');
        this.attrVaultStorageClass = this.getAtt('VaultStorageClass');
        this.attrVaultType = this.getAtt('VaultType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vaultId = props.vaultId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vaultId: this.vaultId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVaultPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVaults`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
 */
export interface RosVaultsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property vaultId: VaultId.
     */
    readonly vaultId?: string | ros.IResolvable;

    /**
     * @Property vaultType: Vault type. Value
     * - **STANDARD**, which indicates a common backup vault.
     * - **OTS_BACKUP**, indicating OTS backup vault.
     */
    readonly vaultType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVaultsProps`
 *
 * @param properties - the TypeScript properties of a `RosVaultsProps`
 *
 * @returns the result of the validation.
 */
function RosVaultsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vaultType', ros.validateString)(properties.vaultType));
    errors.collect(ros.propertyValidator('vaultId', ros.validateString)(properties.vaultId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosVaultsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::HBR::Vaults` resource
 *
 * @param properties - the TypeScript properties of a `RosVaultsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::HBR::Vaults` resource.
 */
// @ts-ignore TS6133
function rosVaultsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVaultsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'VaultId': ros.stringToRosTemplate(properties.vaultId),
      'VaultType': ros.stringToRosTemplate(properties.vaultType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::HBR::Vaults`, which is used to query the basic information about backup vaults.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vaults` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
 */
export class RosVaults extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::HBR::Vaults";

    /**
     * @Attribute VaultIds: The list of vault IDs.
     */
    public readonly attrVaultIds: ros.IResolvable;

    /**
     * @Attribute Vaults: The list of vaults.
     */
    public readonly attrVaults: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property vaultId: VaultId.
     */
    public vaultId: string | ros.IResolvable | undefined;

    /**
     * @Property vaultType: Vault type. Value
     * - **STANDARD**, which indicates a common backup vault.
     * - **OTS_BACKUP**, indicating OTS backup vault.
     */
    public vaultType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVaultsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVaults.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVaultIds = this.getAtt('VaultIds');
        this.attrVaults = this.getAtt('Vaults');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
        this.vaultId = props.vaultId;
        this.vaultType = props.vaultType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
            vaultId: this.vaultId,
            vaultType: this.vaultType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVaultsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
