import * as ros from '@alicloud/ros-cdk-core';
import { RosVaults } from './hbr.generated';
export { RosVaults as VaultsProperty };
/**
 * Properties for defining a `Vaults`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
 */
export interface VaultsProps {
    /**
     * Property vaultId: VaultId.
     */
    readonly vaultId?: string | ros.IResolvable;
    /**
     * Property vaultType: Vault type. Value
     * - **STANDARD**, which indicates a common backup vault.
     * - **OTS_BACKUP**, indicating OTS backup vault.
     */
    readonly vaultType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::HBR::Vaults`, which is used to query the basic information about backup vaults.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVaults`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
 */
export declare class Vaults extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VaultsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VaultIds: The list of vault IDs.
     */
    readonly attrVaultIds: ros.IResolvable;
    /**
     * Attribute Vaults: The list of vaults.
     */
    readonly attrVaults: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VaultsProps, enableResourcePropertyConstraint?: boolean);
}
