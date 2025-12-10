// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCatalog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
export interface RosCatalogProps {

    /**
     * @Property name: Catalog name.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property isShared: Whether it is a shared data catalog.
     */
    readonly isShared?: boolean | ros.IResolvable;

    /**
     * @Property options: Configuration parameters.
     */
    readonly options?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property shareId: Share ID.
     */
    readonly shareId?: string | ros.IResolvable;

    /**
     * @Property type: Catalog type.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCatalogProps`
 *
 * @param properties - the TypeScript properties of a `RosCatalogProps`
 *
 * @returns the result of the validation.
 */
function RosCatalogPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('options', ros.hashValidator(ros.validateAny))(properties.options));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('isShared', ros.validateBoolean)(properties.isShared));
    errors.collect(ros.propertyValidator('shareId', ros.validateString)(properties.shareId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[a-zA-Z][a-zA-Z0-9_]{1,255}$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCatalogProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::Catalog` resource
 *
 * @param properties - the TypeScript properties of a `RosCatalogProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::Catalog` resource.
 */
// @ts-ignore TS6133
function rosCatalogPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCatalogPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'IsShared': ros.booleanToRosTemplate(properties.isShared),
      'Options': ros.hashMapper(ros.objectToRosTemplate)(properties.options),
      'ShareId': ros.stringToRosTemplate(properties.shareId),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataLakeFormation::Catalog`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Catalog` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
 */
export class RosCatalog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataLakeFormation::Catalog";

    /**
     * @Attribute CatalogId: Catalog ID.
     */
    public readonly attrCatalogId: ros.IResolvable;

    /**
     * @Attribute IsShared: Whether it is a shared data catalog.
     */
    public readonly attrIsShared: ros.IResolvable;

    /**
     * @Attribute Name: Catalog name.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Options: Configuration parameters.
     */
    public readonly attrOptions: ros.IResolvable;

    /**
     * @Attribute ShareId: Share ID.
     */
    public readonly attrShareId: ros.IResolvable;

    /**
     * @Attribute Type: Catalog type.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Catalog name.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property isShared: Whether it is a shared data catalog.
     */
    public isShared: boolean | ros.IResolvable | undefined;

    /**
     * @Property options: Configuration parameters.
     */
    public options: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property shareId: Share ID.
     */
    public shareId: string | ros.IResolvable | undefined;

    /**
     * @Property type: Catalog type.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCatalogProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCatalog.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCatalogId = this.getAtt('CatalogId');
        this.attrIsShared = this.getAtt('IsShared');
        this.attrName = this.getAtt('Name');
        this.attrOptions = this.getAtt('Options');
        this.attrShareId = this.getAtt('ShareId');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.isShared = props.isShared;
        this.options = props.options;
        this.shareId = props.shareId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            isShared: this.isShared,
            options: this.options,
            shareId: this.shareId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCatalogPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPermissions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
export interface RosPermissionsProps {

    /**
     * @Property catalogId: The catalog id.
     */
    readonly catalogId: string | ros.IResolvable;

    /**
     * @Property permissions: The permissions list.
     */
    readonly permissions: Array<RosPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions. Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
     */
    readonly refreshUserSync?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPermissionsProps`
 *
 * @param properties - the TypeScript properties of a `RosPermissionsProps`
 *
 * @returns the result of the validation.
 */
function RosPermissionsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('refreshUserSync', ros.validateBoolean)(properties.refreshUserSync));
    errors.collect(ros.propertyValidator('permissions', ros.requiredValidator)(properties.permissions));
    if(properties.permissions && (Array.isArray(properties.permissions) || (typeof properties.permissions) === 'string')) {
        errors.collect(ros.propertyValidator('permissions', ros.validateLength)({
            data: properties.permissions.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('permissions', ros.listValidator(RosPermissions_PermissionsPropertyValidator))(properties.permissions));
    errors.collect(ros.propertyValidator('catalogId', ros.requiredValidator)(properties.catalogId));
    errors.collect(ros.propertyValidator('catalogId', ros.validateString)(properties.catalogId));
    return errors.wrap('supplied properties not correct for "RosPermissionsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::Permissions` resource
 *
 * @param properties - the TypeScript properties of a `RosPermissionsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::Permissions` resource.
 */
// @ts-ignore TS6133
function rosPermissionsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPermissionsPropsValidator(properties).assertSuccess();
    }
    return {
      'CatalogId': ros.stringToRosTemplate(properties.catalogId),
      'Permissions': ros.listMapper(rosPermissionsPermissionsPropertyToRosTemplate)(properties.permissions),
      'RefreshUserSync': ros.booleanToRosTemplate(properties.refreshUserSync),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataLakeFormation::Permissions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Permissions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
 */
export class RosPermissions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataLakeFormation::Permissions";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property catalogId: The catalog id.
     */
    public catalogId: string | ros.IResolvable;

    /**
     * @Property permissions: The permissions list.
     */
    public permissions: Array<RosPermissions.PermissionsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions. Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
     */
    public refreshUserSync: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPermissionsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPermissions.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.catalogId = props.catalogId;
        this.permissions = props.permissions;
        this.refreshUserSync = props.refreshUserSync;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            catalogId: this.catalogId,
            permissions: this.permissions,
            refreshUserSync: this.refreshUserSync,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPermissionsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPermissions {
    /**
     * @stability external
     */
    export interface PermissionsProperty {
        /**
         * @Property access: The access action of the granted permission.
         */
        readonly access: string | ros.IResolvable;
        /**
         * @Property resourceType: The resource type of the granted permission.
         */
        readonly resourceType: string | ros.IResolvable;
        /**
         * @Property principal: The role of the granted permissions.
         */
        readonly principal: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PermissionsProperty`
 *
 * @param properties - the TypeScript properties of a `PermissionsProperty`
 *
 * @returns the result of the validation.
 */
function RosPermissions_PermissionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('access', ros.requiredValidator)(properties.access));
    if(properties.access && (typeof properties.access) !== 'object') {
        errors.collect(ros.propertyValidator('access', ros.validateAllowedValues)({
          data: properties.access,
          allowedValues: ["ALL","GRANT","CREATEDATABASE","ALTER","DROP","UPDATE","SELECT","DESCRIBE","LIST","CREATETABLE"],
        }));
    }
    errors.collect(ros.propertyValidator('access', ros.validateString)(properties.access));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["CATALOG","CATALOG_ALL"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('principal', ros.requiredValidator)(properties.principal));
    errors.collect(ros.propertyValidator('principal', ros.validateString)(properties.principal));
    return errors.wrap('supplied properties not correct for "PermissionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::Permissions.Permissions` resource
 *
 * @param properties - the TypeScript properties of a `PermissionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::Permissions.Permissions` resource.
 */
// @ts-ignore TS6133
function rosPermissionsPermissionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPermissions_PermissionsPropertyValidator(properties).assertSuccess();
    return {
      'Access': ros.stringToRosTemplate(properties.access),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
      'Principal': ros.stringToRosTemplate(properties.principal),
    };
}

/**
 * Properties for defining a `RosVpcConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
export interface RosVpcConfigProps {

    /**
     * @Property vpcId: The VPC ID to be config.
     */
    readonly vpcId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcConfigProps`
 *
 * @returns the result of the validation.
 */
function RosVpcConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    return errors.wrap('supplied properties not correct for "RosVpcConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::VpcConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataLakeFormation::VpcConfig` resource.
 */
// @ts-ignore TS6133
function rosVpcConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataLakeFormation::VpcConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VpcConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-vpcconfig
 */
export class RosVpcConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataLakeFormation::VpcConfig";

    /**
     * @Attribute VpcId: VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The VPC ID to be config.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
