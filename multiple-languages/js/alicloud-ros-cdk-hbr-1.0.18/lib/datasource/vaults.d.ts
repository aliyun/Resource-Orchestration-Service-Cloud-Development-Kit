import * as ros from '@alicloud/ros-cdk-core';
import { RosVaults } from './hbr.generated';
export { RosVaults as VaultsProperty };
/**
 * Properties for defining a `DATASOURCE::HBR::Vaults`
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
 * A ROS resource type:  `DATASOURCE::HBR::Vaults`
 */
export declare class Vaults extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute VaultIds: The list of vault IDs.
     */
    readonly attrVaultIds: ros.IResolvable;
    /**
     * Attribute Vaults: The list of vaults.
     */
    readonly attrVaults: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::HBR::Vaults`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VaultsProps, enableResourcePropertyConstraint?: boolean);
}
