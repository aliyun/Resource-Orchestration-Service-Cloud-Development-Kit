// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export interface RosPackageProps {

    /**
     * @Property packageName: The name of the project package.
     */
    readonly packageName: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property acl: The access-control list (ACL).
     */
    readonly acl?: RosPackage.AclProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosPackageProps`
 *
 * @returns the result of the validation.
 */
function RosPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('packageName', ros.requiredValidator)(properties.packageName));
    errors.collect(ros.propertyValidator('packageName', ros.validateString)(properties.packageName));
    errors.collect(ros.propertyValidator('acl', RosPackage_AclPropertyValidator)(properties.acl));
    return errors.wrap('supplied properties not correct for "RosPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package` resource
 *
 * @param properties - the TypeScript properties of a `RosPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package` resource.
 */
// @ts-ignore TS6133
function rosPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPackagePropsValidator(properties).assertSuccess();
    }
    return {
      'PackageName': ros.stringToRosTemplate(properties.packageName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'Acl': rosPackageAclPropertyToRosTemplate(properties.acl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Package`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Package` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-package
 */
export class RosPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Package";

    /**
     * @Attribute PackageName: The name of the project package.
     */
    public readonly attrPackageName: ros.IResolvable;

    /**
     * @Attribute ProjectName: The name of the MaxCompute project.
     */
    public readonly attrProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property packageName: The name of the project package.
     */
    public packageName: string | ros.IResolvable;

    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property acl: The access-control list (ACL).
     */
    public acl: RosPackage.AclProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPackageName = this.getAtt('PackageName');
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.packageName = props.packageName;
        this.projectName = props.projectName;
        this.acl = props.acl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            packageName: this.packageName,
            projectName: this.projectName,
            acl: this.acl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPackage {
    /**
     * @stability external
     */
    export interface AclProperty {
        /**
         * @Property function: undefined
         */
        readonly function?: Array<RosPackage.FunctionProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property table: undefined
         */
        readonly table?: Array<RosPackage.TableProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: undefined
         */
        readonly resource?: Array<RosPackage.ResourceProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AclProperty`
 *
 * @param properties - the TypeScript properties of a `AclProperty`
 *
 * @returns the result of the validation.
 */
function RosPackage_AclPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('function', ros.listValidator(RosPackage_FunctionPropertyValidator))(properties.function));
    errors.collect(ros.propertyValidator('table', ros.listValidator(RosPackage_TablePropertyValidator))(properties.table));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(RosPackage_ResourcePropertyValidator))(properties.resource));
    return errors.wrap('supplied properties not correct for "AclProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Acl` resource
 *
 * @param properties - the TypeScript properties of a `AclProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Acl` resource.
 */
// @ts-ignore TS6133
function rosPackageAclPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPackage_AclPropertyValidator(properties).assertSuccess();
    return {
      'Function': ros.listMapper(rosPackageFunctionPropertyToRosTemplate)(properties.function),
      'Table': ros.listMapper(rosPackageTablePropertyToRosTemplate)(properties.table),
      'Resource': ros.listMapper(rosPackageResourcePropertyToRosTemplate)(properties.resource),
    };
}

export namespace RosPackage {
    /**
     * @stability external
     */
    export interface FunctionProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FunctionProperty`
 *
 * @param properties - the TypeScript properties of a `FunctionProperty`
 *
 * @returns the result of the validation.
 */
function RosPackage_FunctionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "FunctionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Function` resource
 *
 * @param properties - the TypeScript properties of a `FunctionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Function` resource.
 */
// @ts-ignore TS6133
function rosPackageFunctionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPackage_FunctionPropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosPackage {
    /**
     * @stability external
     */
    export interface ResourceProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceProperty`
 *
 * @returns the result of the validation.
 */
function RosPackage_ResourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ResourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Resource` resource
 *
 * @param properties - the TypeScript properties of a `ResourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Resource` resource.
 */
// @ts-ignore TS6133
function rosPackageResourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPackage_ResourcePropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosPackage {
    /**
     * @stability external
     */
    export interface TableProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TableProperty`
 *
 * @param properties - the TypeScript properties of a `TableProperty`
 *
 * @returns the result of the validation.
 */
function RosPackage_TablePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "TableProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Table` resource
 *
 * @param properties - the TypeScript properties of a `TableProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Package.Table` resource.
 */
// @ts-ignore TS6133
function rosPackageTablePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPackage_TablePropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export interface RosProjectProps {

    /**
     * @Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property comment: The comments of project.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property defaultQuota: Default Computing Resource Group.
     */
    readonly defaultQuota?: string | ros.IResolvable;

    /**
     * @Property ipWhiteList: IP whitelist.
     */
    readonly ipWhiteList?: RosProject.IpWhiteListProperty | ros.IResolvable;

    /**
     * @Property properties: Project base attributes.
     */
    readonly properties?: RosProject.PropertiesProperty | ros.IResolvable;

    /**
     * @Property supportSchemaLevels: Whether to support schema level. Default: False
     */
    readonly supportSchemaLevels?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('defaultQuota', ros.validateString)(properties.defaultQuota));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('ipWhiteList', RosProject_IpWhiteListPropertyValidator)(properties.ipWhiteList));
    errors.collect(ros.propertyValidator('supportSchemaLevels', ros.validateBoolean)(properties.supportSchemaLevels));
    errors.collect(ros.propertyValidator('properties', RosProject_PropertiesPropertyValidator)(properties.properties));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[a-z][a-z0-9_]{2,27}$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'Comment': ros.stringToRosTemplate(properties.comment),
      'DefaultQuota': ros.stringToRosTemplate(properties.defaultQuota),
      'IpWhiteList': rosProjectIpWhiteListPropertyToRosTemplate(properties.ipWhiteList),
      'Properties': rosProjectPropertiesPropertyToRosTemplate(properties.properties),
      'SupportSchemaLevels': ros.booleanToRosTemplate(properties.supportSchemaLevels),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Project`, which is used to create a MaxCompute project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Project";

    /**
     * @Attribute Name: The name of the project.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the project.
     * It must start with a lower-case letter and contain lower-case letters, digits, and underscores (_). The value must contain 3 to 28 characters
     */
    public name: string | ros.IResolvable;

    /**
     * @Property chargeType: Quota payment type, support PayAsYouGo, Subscription.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property comment: The comments of project.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property defaultQuota: Default Computing Resource Group.
     */
    public defaultQuota: string | ros.IResolvable | undefined;

    /**
     * @Property ipWhiteList: IP whitelist.
     */
    public ipWhiteList: RosProject.IpWhiteListProperty | ros.IResolvable | undefined;

    /**
     * @Property properties: Project base attributes.
     */
    public properties: RosProject.PropertiesProperty | ros.IResolvable | undefined;

    /**
     * @Property supportSchemaLevels: Whether to support schema level. Default: False
     */
    public supportSchemaLevels: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.chargeType = props.chargeType;
        this.comment = props.comment;
        this.defaultQuota = props.defaultQuota;
        this.ipWhiteList = props.ipWhiteList;
        this.properties = props.properties;
        this.supportSchemaLevels = props.supportSchemaLevels;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            chargeType: this.chargeType,
            comment: this.comment,
            defaultQuota: this.defaultQuota,
            ipWhiteList: this.ipWhiteList,
            properties: this.properties,
            supportSchemaLevels: this.supportSchemaLevels,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface EncryptionProperty {
        /**
         * @Property enable: Whether to open encryption.
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property algorithm: Encryption Algorithm.
         */
        readonly algorithm?: string | ros.IResolvable;
        /**
         * @Property key: Encryption algorithm key.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EncryptionProperty`
 *
 * @param properties - the TypeScript properties of a `EncryptionProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_EncryptionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('algorithm', ros.validateString)(properties.algorithm));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "EncryptionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Encryption` resource
 *
 * @param properties - the TypeScript properties of a `EncryptionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Encryption` resource.
 */
// @ts-ignore TS6133
function rosProjectEncryptionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_EncryptionPropertyValidator(properties).assertSuccess();
    return {
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'Algorithm': ros.stringToRosTemplate(properties.algorithm),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface IpWhiteListProperty {
        /**
         * @Property vpcIpList: VPC network whitelist. Separate multiple items with commas.
         */
        readonly vpcIpList?: string | ros.IResolvable;
        /**
         * @Property ipList: Classic network IP white list. Separate multiple items with commas.
         */
        readonly ipList?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpWhiteListProperty`
 *
 * @param properties - the TypeScript properties of a `IpWhiteListProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_IpWhiteListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcIpList', ros.validateString)(properties.vpcIpList));
    errors.collect(ros.propertyValidator('ipList', ros.validateString)(properties.ipList));
    return errors.wrap('supplied properties not correct for "IpWhiteListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.IpWhiteList` resource
 *
 * @param properties - the TypeScript properties of a `IpWhiteListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.IpWhiteList` resource.
 */
// @ts-ignore TS6133
function rosProjectIpWhiteListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_IpWhiteListPropertyValidator(properties).assertSuccess();
    return {
      'VpcIpList': ros.stringToRosTemplate(properties.vpcIpList),
      'IpList': ros.stringToRosTemplate(properties.ipList),
    };
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface PropertiesProperty {
        /**
         * @Property sqlMeteringMax: SQL charge limit.
         */
        readonly sqlMeteringMax?: number | ros.IResolvable;
        /**
         * @Property typeSystem: Type system.
         */
        readonly typeSystem?: string | ros.IResolvable;
        /**
         * @Property retentionDays: Job default retention time.
         */
        readonly retentionDays?: number | ros.IResolvable;
        /**
         * @Property encryption: Whether encryption is turned on.
         */
        readonly encryption?: RosProject.EncryptionProperty | ros.IResolvable;
        /**
         * @Property allowFullScan: Whether to allow full table scan.
         */
        readonly allowFullScan?: boolean | ros.IResolvable;
        /**
         * @Property enableDecimal2: Whether to turn on Decimal2.0.
         */
        readonly enableDecimal2?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PropertiesProperty`
 *
 * @param properties - the TypeScript properties of a `PropertiesProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_PropertiesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sqlMeteringMax', ros.validateNumber)(properties.sqlMeteringMax));
    if(properties.typeSystem && (typeof properties.typeSystem) !== 'object') {
        errors.collect(ros.propertyValidator('typeSystem', ros.validateAllowedValues)({
          data: properties.typeSystem,
          allowedValues: ["1","2","hive"],
        }));
    }
    errors.collect(ros.propertyValidator('typeSystem', ros.validateString)(properties.typeSystem));
    errors.collect(ros.propertyValidator('retentionDays', ros.validateNumber)(properties.retentionDays));
    errors.collect(ros.propertyValidator('encryption', RosProject_EncryptionPropertyValidator)(properties.encryption));
    errors.collect(ros.propertyValidator('allowFullScan', ros.validateBoolean)(properties.allowFullScan));
    errors.collect(ros.propertyValidator('enableDecimal2', ros.validateBoolean)(properties.enableDecimal2));
    return errors.wrap('supplied properties not correct for "PropertiesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Properties` resource
 *
 * @param properties - the TypeScript properties of a `PropertiesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Project.Properties` resource.
 */
// @ts-ignore TS6133
function rosProjectPropertiesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_PropertiesPropertyValidator(properties).assertSuccess();
    return {
      'SqlMeteringMax': ros.numberToRosTemplate(properties.sqlMeteringMax),
      'TypeSystem': ros.stringToRosTemplate(properties.typeSystem),
      'RetentionDays': ros.numberToRosTemplate(properties.retentionDays),
      'Encryption': rosProjectEncryptionPropertyToRosTemplate(properties.encryption),
      'AllowFullScan': ros.booleanToRosTemplate(properties.allowFullScan),
      'EnableDecimal2': ros.booleanToRosTemplate(properties.enableDecimal2),
    };
}

/**
 * Properties for defining a `RosQuota`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
export interface RosQuotaProps {

    /**
     * @Property payType: The billing method of the odps quota instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    readonly payType: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property cu: The compute unit of the odps quota instance. When the specification is the StandardCompute, this parameter is required.
     */
    readonly cu?: number | ros.IResolvable;

    /**
     * @Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9
     * If periodUnit is year, the valid range is 1, 2, 3, 4, 5
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property quotaNickname: The nickname of the odps quota instance.
     */
    readonly quotaNickname?: string | ros.IResolvable;

    /**
     * @Property specification: The specification of the odps quota instance.
     */
    readonly specification?: string | ros.IResolvable;

    /**
     * @Property tunnel: The tunnel unit of the odps quota instance. When the specification is the Tunnel, this parameter is required
     */
    readonly tunnel?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosQuotaProps`
 *
 * @param properties - the TypeScript properties of a `RosQuotaProps`
 *
 * @returns the result of the validation.
 */
function RosQuotaPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cu', ros.validateNumber)(properties.cu));
    errors.collect(ros.propertyValidator('quotaNickname', ros.validateString)(properties.quotaNickname));
    errors.collect(ros.propertyValidator('tunnel', ros.validateNumber)(properties.tunnel));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.specification && (typeof properties.specification) !== 'object') {
        errors.collect(ros.propertyValidator('specification', ros.validateAllowedValues)({
          data: properties.specification,
          allowedValues: ["StandardCompute","Tunnel"],
        }));
    }
    errors.collect(ros.propertyValidator('specification', ros.validateString)(properties.specification));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosQuotaProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Quota` resource
 *
 * @param properties - the TypeScript properties of a `RosQuotaProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Quota` resource.
 */
// @ts-ignore TS6133
function rosQuotaPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosQuotaPropsValidator(properties).assertSuccess();
    }
    return {
      'PayType': ros.stringToRosTemplate(properties.payType),
      'AutoPay': ros.booleanToRosTemplate(properties.autoPay),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'CU': ros.numberToRosTemplate(properties.cu),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'QuotaNickname': ros.stringToRosTemplate(properties.quotaNickname),
      'Specification': ros.stringToRosTemplate(properties.specification),
      'Tunnel': ros.numberToRosTemplate(properties.tunnel),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Quota`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Quota` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-quota
 */
export class RosQuota extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Quota";

    /**
     * @Attribute DefaultSubQuotaNickname: The default sub quota nickname of the odps quota instance.
     */
    public readonly attrDefaultSubQuotaNickname: ros.IResolvable;

    /**
     * @Attribute Nickname: The nickname of the odps quota instance.
     */
    public readonly attrNickname: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property payType: The billing method of the odps quota instance. Valid values:
     * PayAsYouGo: pay-as-you-go
     * Subscription: subscription
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to auto pay the bill.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Whether to auto renew the prepay instance.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property cu: The compute unit of the odps quota instance. When the specification is the StandardCompute, this parameter is required.
     */
    public cu: number | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the odps quotaIf PeriodUnit is month, the valid range is 1-9
     * If periodUnit is year, the valid range is 1, 2, 3, 4, 5
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property quotaNickname: The nickname of the odps quota instance.
     */
    public quotaNickname: string | ros.IResolvable | undefined;

    /**
     * @Property specification: The specification of the odps quota instance.
     */
    public specification: string | ros.IResolvable | undefined;

    /**
     * @Property tunnel: The tunnel unit of the odps quota instance. When the specification is the Tunnel, this parameter is required
     */
    public tunnel: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosQuotaProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosQuota.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDefaultSubQuotaNickname = this.getAtt('DefaultSubQuotaNickname');
        this.attrNickname = this.getAtt('Nickname');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.payType = props.payType;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.cu = props.cu;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.quotaNickname = props.quotaNickname;
        this.specification = props.specification;
        this.tunnel = props.tunnel;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            payType: this.payType,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            cu: this.cu,
            period: this.period,
            periodUnit: this.periodUnit,
            quotaNickname: this.quotaNickname,
            specification: this.specification,
            tunnel: this.tunnel,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosQuotaPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRole`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
export interface RosRoleProps {

    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property roleName: The name of the project role
     */
    readonly roleName: string | ros.IResolvable;

    /**
     * @Property type: Role types, MaxCompute provides administrator roles and resource roles. Valid values:
     * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
     * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
     */
    readonly acl?: RosRole.AclProperty | ros.IResolvable;

    /**
     * @Property policy: The document of the policy. This parameter is not required if an access-control list (ACL) is used.
     */
    readonly policy?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRoleProps`
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the result of the validation.
 */
function RosRolePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.hashValidator(ros.validateAny))(properties.policy));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Admin","Resource"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('roleName', ros.requiredValidator)(properties.roleName));
    errors.collect(ros.propertyValidator('roleName', ros.validateString)(properties.roleName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('acl', RosRole_AclPropertyValidator)(properties.acl));
    return errors.wrap('supplied properties not correct for "RosRoleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role` resource
 *
 * @param properties - the TypeScript properties of a `RosRoleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role` resource.
 */
// @ts-ignore TS6133
function rosRolePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRolePropsValidator(properties).assertSuccess();
    }
    return {
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'RoleName': ros.stringToRosTemplate(properties.roleName),
      'Type': ros.stringToRosTemplate(properties.type),
      'Acl': rosRoleAclPropertyToRosTemplate(properties.acl),
      'Policy': ros.hashMapper(ros.objectToRosTemplate)(properties.policy),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Role`, which is used to create a role at the MaxCompute project level.
 * @Note This class does not contain additional functions, so it is recommended to use the `Role` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-role
 */
export class RosRole extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Role";

    /**
     * @Attribute ProjectName: The name of the MaxCompute project.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * @Attribute RoleName: The name of the project role.
     */
    public readonly attrRoleName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property projectName: The name of the MaxCompute project.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property roleName: The name of the project role
     */
    public roleName: string | ros.IResolvable;

    /**
     * @Property type: Role types, MaxCompute provides administrator roles and resource roles. Valid values:
     * Admin: You can grant management-related permissions to administrator roles by using policies instead of access control lists (ACLs). You cannot grant resource-related permissions to administrator roles.
     * Resource: You can grant resource-related permissions but not management-related permissions to resource roles.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property acl: The access-control list (ACL), This parameter is not required if a policy is used.
     */
    public acl: RosRole.AclProperty | ros.IResolvable | undefined;

    /**
     * @Property policy: The document of the policy. This parameter is not required if an access-control list (ACL) is used.
     */
    public policy: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRoleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRole.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectName = this.getAtt('ProjectName');
        this.attrRoleName = this.getAtt('RoleName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectName = props.projectName;
        this.roleName = props.roleName;
        this.type = props.type;
        this.acl = props.acl;
        this.policy = props.policy;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            projectName: this.projectName,
            roleName: this.roleName,
            type: this.type,
            acl: this.acl,
            policy: this.policy,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRolePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface AclProperty {
        /**
         * @Property function: undefined
         */
        readonly function?: Array<RosRole.FunctionProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property project: undefined
         */
        readonly project?: Array<RosRole.ProjectProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property table: undefined
         */
        readonly table?: Array<RosRole.TableProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property instance: undefined
         */
        readonly instance?: Array<RosRole.InstanceProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property resource: undefined
         */
        readonly resource?: Array<RosRole.ResourceProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property package: undefined
         */
        readonly package?: Array<RosRole.PackageProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AclProperty`
 *
 * @param properties - the TypeScript properties of a `AclProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_AclPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('function', ros.listValidator(RosRole_FunctionPropertyValidator))(properties.function));
    errors.collect(ros.propertyValidator('project', ros.listValidator(RosRole_ProjectPropertyValidator))(properties.project));
    errors.collect(ros.propertyValidator('table', ros.listValidator(RosRole_TablePropertyValidator))(properties.table));
    errors.collect(ros.propertyValidator('instance', ros.listValidator(RosRole_InstancePropertyValidator))(properties.instance));
    errors.collect(ros.propertyValidator('resource', ros.listValidator(RosRole_ResourcePropertyValidator))(properties.resource));
    errors.collect(ros.propertyValidator('package', ros.listValidator(RosRole_PackagePropertyValidator))(properties.package));
    return errors.wrap('supplied properties not correct for "AclProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Acl` resource
 *
 * @param properties - the TypeScript properties of a `AclProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Acl` resource.
 */
// @ts-ignore TS6133
function rosRoleAclPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_AclPropertyValidator(properties).assertSuccess();
    return {
      'Function': ros.listMapper(rosRoleFunctionPropertyToRosTemplate)(properties.function),
      'Project': ros.listMapper(rosRoleProjectPropertyToRosTemplate)(properties.project),
      'Table': ros.listMapper(rosRoleTablePropertyToRosTemplate)(properties.table),
      'Instance': ros.listMapper(rosRoleInstancePropertyToRosTemplate)(properties.instance),
      'Resource': ros.listMapper(rosRoleResourcePropertyToRosTemplate)(properties.resource),
      'Package': ros.listMapper(rosRolePackagePropertyToRosTemplate)(properties.package),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface FunctionProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FunctionProperty`
 *
 * @param properties - the TypeScript properties of a `FunctionProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_FunctionPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "FunctionProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Function` resource
 *
 * @param properties - the TypeScript properties of a `FunctionProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Function` resource.
 */
// @ts-ignore TS6133
function rosRoleFunctionPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_FunctionPropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface InstanceProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `InstanceProperty`
 *
 * @param properties - the TypeScript properties of a `InstanceProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_InstancePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "InstanceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Instance` resource
 *
 * @param properties - the TypeScript properties of a `InstanceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Instance` resource.
 */
// @ts-ignore TS6133
function rosRoleInstancePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_InstancePropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface PackageProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PackageProperty`
 *
 * @param properties - the TypeScript properties of a `PackageProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_PackagePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "PackageProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Package` resource
 *
 * @param properties - the TypeScript properties of a `PackageProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Package` resource.
 */
// @ts-ignore TS6133
function rosRolePackagePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_PackagePropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface ProjectProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ProjectProperty`
 *
 * @param properties - the TypeScript properties of a `ProjectProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_ProjectPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ProjectProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Project` resource
 *
 * @param properties - the TypeScript properties of a `ProjectProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Project` resource.
 */
// @ts-ignore TS6133
function rosRoleProjectPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_ProjectPropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface ResourceProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_ResourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ResourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Resource` resource
 *
 * @param properties - the TypeScript properties of a `ResourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Resource` resource.
 */
// @ts-ignore TS6133
function rosRoleResourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_ResourcePropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosRole {
    /**
     * @stability external
     */
    export interface TableProperty {
        /**
         * @Property actions: undefined
         */
        readonly actions?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property name: undefined
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TableProperty`
 *
 * @param properties - the TypeScript properties of a `TableProperty`
 *
 * @returns the result of the validation.
 */
function RosRole_TablePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('actions', ros.listValidator(ros.validateAny))(properties.actions));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "TableProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Table` resource
 *
 * @param properties - the TypeScript properties of a `TableProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Role.Table` resource.
 */
// @ts-ignore TS6133
function rosRoleTablePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRole_TablePropertyValidator(properties).assertSuccess();
    return {
      'Actions': ros.listMapper(ros.objectToRosTemplate)(properties.actions),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosTable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
export interface RosTableProps {

    /**
     * @Property name: Table name
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    readonly project: string | ros.IResolvable;

    /**
     * @Property comment: Table comment
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property ifNotExists: If you create a table by using the name of an existing table and 
     * the parameter set to false, an error is returned. 
     * If you specify the if not exists parameter, a success message 
     * is returned when you create a table by using the name of an 
     * existing table. The success message is returned even if the 
     * schema of the existing table is different from that of the table you want to create. 
     * If you create a table by using the name of an existing table, 
     * the table is not created and the metadata of the existing table is not changed.
     */
    readonly ifNotExists?: boolean | ros.IResolvable;

    /**
     * @Property lifecycle: Table's lifecycle.
     */
    readonly lifecycle?: number | ros.IResolvable;

    /**
     * @Property schema: Table schema
     */
    readonly schema?: RosTable.SchemaProperty | ros.IResolvable;

    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    readonly stringSchema?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosTableProps`
 *
 * @param properties - the TypeScript properties of a `RosTableProps`
 *
 * @returns the result of the validation.
 */
function RosTablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('ifNotExists', ros.validateBoolean)(properties.ifNotExists));
    errors.collect(ros.propertyValidator('lifecycle', ros.validateNumber)(properties.lifecycle));
    errors.collect(ros.propertyValidator('schema', RosTable_SchemaPropertyValidator)(properties.schema));
    errors.collect(ros.propertyValidator('stringSchema', ros.validateString)(properties.stringSchema));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[A-Za-z0-9_]{1,128}$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosTableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table` resource
 *
 * @param properties - the TypeScript properties of a `RosTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table` resource.
 */
// @ts-ignore TS6133
function rosTablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTablePropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Project': ros.stringToRosTemplate(properties.project),
      'Comment': ros.stringToRosTemplate(properties.comment),
      'IfNotExists': ros.booleanToRosTemplate(properties.ifNotExists),
      'Lifecycle': ros.numberToRosTemplate(properties.lifecycle),
      'Schema': rosTableSchemaPropertyToRosTemplate(properties.schema),
      'StringSchema': ros.stringToRosTemplate(properties.stringSchema),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MaxCompute::Table`, which is used to create a table.
 * @Note This class does not contain additional functions, so it is recommended to use the `Table` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-maxcompute-table
 */
export class RosTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MaxCompute::Table";

    /**
     * @Attribute Name: Table name
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Project: Project name
     */
    public readonly attrProject: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Table name
     */
    public name: string | ros.IResolvable;

    /**
     * @Property project: Project name, if not provided, will be the default project
     */
    public project: string | ros.IResolvable;

    /**
     * @Property comment: Table comment
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property ifNotExists: If you create a table by using the name of an existing table and 
     * the parameter set to false, an error is returned. 
     * If you specify the if not exists parameter, a success message 
     * is returned when you create a table by using the name of an 
     * existing table. The success message is returned even if the 
     * schema of the existing table is different from that of the table you want to create. 
     * If you create a table by using the name of an existing table, 
     * the table is not created and the metadata of the existing table is not changed.
     */
    public ifNotExists: boolean | ros.IResolvable | undefined;

    /**
     * @Property lifecycle: Table's lifecycle.
     */
    public lifecycle: number | ros.IResolvable | undefined;

    /**
     * @Property schema: Table schema
     */
    public schema: RosTable.SchemaProperty | ros.IResolvable | undefined;

    /**
     * @Property stringSchema: Create a table with field names and field type strings.
     * Example: 'num bigint, num2 double', 'pt string'
     */
    public stringSchema: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');
        this.attrProject = this.getAtt('Project');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.project = props.project;
        this.comment = props.comment;
        this.ifNotExists = props.ifNotExists;
        this.lifecycle = props.lifecycle;
        this.schema = props.schema;
        this.stringSchema = props.stringSchema;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            project: this.project,
            comment: this.comment,
            ifNotExists: this.ifNotExists,
            lifecycle: this.lifecycle,
            schema: this.schema,
            stringSchema: this.stringSchema,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface ColumnsProperty {
        /**
         * @Property comment: Column comment.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property type: Column type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Column name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ColumnsProperty`
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_ColumnsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ColumnsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Columns` resource
 *
 * @param properties - the TypeScript properties of a `ColumnsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Columns` resource.
 */
// @ts-ignore TS6133
function rosTableColumnsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_ColumnsPropertyValidator(properties).assertSuccess();
    return {
      'Comment': ros.stringToRosTemplate(properties.comment),
      'Type': ros.stringToRosTemplate(properties.type),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface PartitionsProperty {
        /**
         * @Property comment: Partition comment.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property type: Partition type.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property name: Partition name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PartitionsProperty`
 *
 * @param properties - the TypeScript properties of a `PartitionsProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_PartitionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "PartitionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Partitions` resource
 *
 * @param properties - the TypeScript properties of a `PartitionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Partitions` resource.
 */
// @ts-ignore TS6133
function rosTablePartitionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_PartitionsPropertyValidator(properties).assertSuccess();
    return {
      'Comment': ros.stringToRosTemplate(properties.comment),
      'Type': ros.stringToRosTemplate(properties.type),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosTable {
    /**
     * @stability external
     */
    export interface SchemaProperty {
        /**
         * @Property partitions:
         */
        readonly partitions?: Array<RosTable.PartitionsProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property columns:
         */
        readonly columns: Array<RosTable.ColumnsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SchemaProperty`
 *
 * @param properties - the TypeScript properties of a `SchemaProperty`
 *
 * @returns the result of the validation.
 */
function RosTable_SchemaPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('partitions', ros.listValidator(RosTable_PartitionsPropertyValidator))(properties.partitions));
    errors.collect(ros.propertyValidator('columns', ros.requiredValidator)(properties.columns));
    errors.collect(ros.propertyValidator('columns', ros.listValidator(RosTable_ColumnsPropertyValidator))(properties.columns));
    return errors.wrap('supplied properties not correct for "SchemaProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Schema` resource
 *
 * @param properties - the TypeScript properties of a `SchemaProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MaxCompute::Table.Schema` resource.
 */
// @ts-ignore TS6133
function rosTableSchemaPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosTable_SchemaPropertyValidator(properties).assertSuccess();
    return {
      'Partitions': ros.listMapper(rosTablePartitionsPropertyToRosTemplate)(properties.partitions),
      'Columns': ros.listMapper(rosTableColumnsPropertyToRosTemplate)(properties.columns),
    };
}
