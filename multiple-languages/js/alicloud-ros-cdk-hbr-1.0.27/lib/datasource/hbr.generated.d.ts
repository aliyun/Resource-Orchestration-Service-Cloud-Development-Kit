import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosVaults`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::HBR::Vaults`, which is used to query the basic information about backup vaults.
 * @Note This class does not contain additional functions, so it is recommended to use the `Vaults` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
 */
export declare class RosVaults extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::HBR::Vaults";
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
