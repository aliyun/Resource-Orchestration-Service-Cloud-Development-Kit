// Generated from the AliCloud ROS Resource Specification

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
      VaultId: ros.stringToRosTemplate(properties.vaultId),
      VaultType: ros.stringToRosTemplate(properties.vaultType),
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
        this.vaultId = props.vaultId;
        this.vaultType = props.vaultType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vaultId: this.vaultId,
            vaultType: this.vaultType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVaultsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
