import * as ros from '@alicloud/ros-cdk-core';
import { RosReplicationVault } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosReplicationVault as ReplicationVaultProperty };

/**
 * Properties for defining a `ReplicationVault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
 */
export interface ReplicationVaultProps {

    /**
     * Property replicationSourceRegionId: The region ID of the source vault for replication.
     */
    readonly replicationSourceRegionId: string | ros.IResolvable;

    /**
     * Property replicationSourceVaultId: The ID of the source vault for replication.
     */
    readonly replicationSourceVaultId: string | ros.IResolvable;

    /**
     * Property vaultName: The name of the vault.
     */
    readonly vaultName: string | ros.IResolvable;

    /**
     * Property description: The description of the vault.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property encryptType: The encryption type of the vault.
     */
    readonly encryptType?: string | ros.IResolvable;

    /**
     * Property kmsKeyId: The KMS key ID used for encryption.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property redundancyType: The redundancy type of the vault.
     */
    readonly redundancyType?: string | ros.IResolvable;

    /**
     * Property vaultStorageClass: The storage class of the vault.
     */
    readonly vaultStorageClass?: string | ros.IResolvable;
}

/**
 * Represents a `ReplicationVault`.
 */
export interface IReplicationVault extends ros.IResource {
    readonly props: ReplicationVaultProps;

    /**
     * Attribute VaultId: The ID of the vault.
     */
    readonly attrVaultId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::ReplicationVault`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosReplicationVault`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
 */
export class ReplicationVault extends ros.Resource implements IReplicationVault {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ReplicationVaultProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VaultId: The ID of the vault.
     */
    public readonly attrVaultId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ReplicationVaultProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosReplicationVault = new RosReplicationVault(this, id,  {
            description: props.description,
            encryptType: props.encryptType,
            kmsKeyId: props.kmsKeyId,
            vaultName: props.vaultName,
            vaultStorageClass: props.vaultStorageClass,
            redundancyType: props.redundancyType,
            replicationSourceRegionId: props.replicationSourceRegionId,
            replicationSourceVaultId: props.replicationSourceVaultId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosReplicationVault;
        this.attrVaultId = rosReplicationVault.attrVaultId;
    }
}
