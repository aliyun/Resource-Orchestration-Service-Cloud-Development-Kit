import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::HBR::Vaults`
 */
export interface RosVaultsProps {
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
 * A ROS template type:  `DATASOURCE::HBR::Vaults`
 */
export declare class RosVaults extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::HBR::Vaults";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute VaultIds: The list of vault IDs.
     */
    readonly attrVaultIds: ros.IResolvable;
    /**
     * @Attribute Vaults: The list of vaults.
     */
    readonly attrVaults: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property vaultId: VaultId.
     */
    vaultId: string | ros.IResolvable | undefined;
    /**
     * @Property vaultType: Vault type. Value
     * - **STANDARD**, which indicates a common backup vault.
     * - **OTS_BACKUP**, indicating OTS backup vault.
     */
    vaultType: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::HBR::Vaults`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVaultsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
