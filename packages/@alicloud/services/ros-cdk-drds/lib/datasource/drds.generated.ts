// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
 */
export interface RosAccountProps {

    /**
     * @Property drdsAccountName: The name of the account.
     */
    readonly drdsAccountName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('drdsAccountName', ros.requiredValidator)(properties.drdsAccountName));
    errors.collect(ros.propertyValidator('drdsAccountName', ros.validateString)(properties.drdsAccountName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'DrdsAccountName': ros.stringToRosTemplate(properties.drdsAccountName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Account";

    /**
     * @Attribute AccountType: Indicates the type of an instance account. Valid values: 
0: The instance account is a privileged account.
1: The instance account is a standard account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * @Attribute DbPrivileges: Indicates the information about the permissions of an account on a database.
     */
    public readonly attrDbPrivileges: ros.IResolvable;

    /**
     * @Attribute Description: Account remarks. The default value of the advanced account is **Created by DRDS**, and the normal account does not have any comments. Remarks can be customized in account management.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DrdsAccountName: Indicates the username of an instance account.
     */
    public readonly attrDrdsAccountName: ros.IResolvable;

    /**
     * @Attribute Host: Indicates an IP address that is allowed to access the database. The value % indicates that each IP address is allowed to access the database.
     */
    public readonly attrHost: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property drdsAccountName: The name of the account.
     */
    public drdsAccountName: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountType = this.getAtt('AccountType');
        this.attrDbPrivileges = this.getAtt('DbPrivileges');
        this.attrDescription = this.getAtt('Description');
        this.attrDrdsAccountName = this.getAtt('DrdsAccountName');
        this.attrHost = this.getAtt('Host');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.drdsAccountName = props.drdsAccountName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            drdsAccountName: this.drdsAccountName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export interface RosAccountsProps {

    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountsProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the result of the validation.
 */
function RosAccountsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAccountsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-accounts
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::Accounts";

    /**
     * @Attribute Accounts: Indicates the information about the instance accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * @Attribute DrdsAccountNames: Indicates the username of an instance accounts.
     */
    public readonly attrDrdsAccountNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the PolarDB-X 1.0 instance.
     */
    public instanceId: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccounts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccounts = this.getAtt('Accounts');
        this.attrDrdsAccountNames = this.getAtt('DrdsAccountNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDrdsDB`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
export interface RosDrdsDBProps {

    /**
     * @Property drdsDatabaseName: The name of the Drds database.
     */
    readonly drdsDatabaseName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsDBProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsDBPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('drdsDatabaseName', ros.requiredValidator)(properties.drdsDatabaseName));
    errors.collect(ros.propertyValidator('drdsDatabaseName', ros.validateString)(properties.drdsDatabaseName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDrdsDBProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsDB` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsDB` resource.
 */
// @ts-ignore TS6133
function rosDrdsDBPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsDBPropsValidator(properties).assertSuccess();
    }
    return {
      'DrdsDatabaseName': ros.stringToRosTemplate(properties.drdsDatabaseName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsDB`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDB` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdb
 */
export class RosDrdsDB extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDB";

    /**
     * @Attribute CreateTime: Database creation timestamp.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DrdsDatabaseName: The name of the Drds database.
     */
    public readonly attrDrdsDatabaseName: ros.IResolvable;

    /**
     * @Attribute InstRole: Database type: MASTER primary instance, SLAVE read-only instance.
     */
    public readonly attrInstRole: ros.IResolvable;

    /**
     * @Attribute Schema: The schema ID that is assigned to the partitioned database by the system.
     */
    public readonly attrSchema: ros.IResolvable;

    /**
     * @Attribute SplitMode: The partition mode of the database.Valid values: 
* HORIZONTAL: The database is horizontally partitioned.
* VERTICAL: The database is vertically partitioned.
     */
    public readonly attrSplitMode: ros.IResolvable;

    /**
     * @Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    public readonly attrStorageType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property drdsDatabaseName: The name of the Drds database.
     */
    public drdsDatabaseName: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsDB.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDrdsDatabaseName = this.getAtt('DrdsDatabaseName');
        this.attrInstRole = this.getAtt('InstRole');
        this.attrSchema = this.getAtt('Schema');
        this.attrSplitMode = this.getAtt('SplitMode');
        this.attrStorageType = this.getAtt('StorageType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.drdsDatabaseName = props.drdsDatabaseName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            drdsDatabaseName: this.drdsDatabaseName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsDBPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDrdsDBs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export interface RosDrdsDBsProps {

    /**
     * @Property instanceId: Drds Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsDBsProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBsProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsDBsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDrdsDBsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsDBs` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsDBsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsDBs` resource.
 */
// @ts-ignore TS6133
function rosDrdsDBsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsDBsPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsDBs`, which is used to query the details of databases on an instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsDBs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsdbs
 */
export class RosDrdsDBs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsDBs";

    /**
     * @Attribute Databases: The list of drds databases.
     */
    public readonly attrDatabases: ros.IResolvable;

    /**
     * @Attribute DrdsDatabaseNames: The list of drds database names.
     */
    public readonly attrDrdsDatabaseNames: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Drds Instance ID.
     */
    public instanceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDrdsDBsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsDBs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDatabases = this.getAtt('Databases');
        this.attrDrdsDatabaseNames = this.getAtt('DrdsDatabaseNames');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsDBsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDrdsInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
export interface RosDrdsInstanceProps {

    /**
     * @Property drdsInstanceId: The ID of the Drds instance.
     */
    readonly drdsInstanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('drdsInstanceId', ros.requiredValidator)(properties.drdsInstanceId));
    errors.collect(ros.propertyValidator('drdsInstanceId', ros.validateString)(properties.drdsInstanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDrdsInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsInstance` resource.
 */
// @ts-ignore TS6133
function rosDrdsInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DrdsInstanceId': ros.stringToRosTemplate(properties.drdsInstanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstance
 */
export class RosDrdsInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstance";

    /**
     * @Attribute CommodityCode: The commodity code of the service.
     */
    public readonly attrCommodityCode: ros.IResolvable;

    /**
     * @Attribute CreateTime: The timestamp that indicates when the instance is created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description of the instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DrdsInstanceId: The ID of the Drds instance.
     */
    public readonly attrDrdsInstanceId: ros.IResolvable;

    /**
     * @Attribute ExpireDate: The timestamp that indicates when the instance expires.
     */
    public readonly attrExpireDate: ros.IResolvable;

    /**
     * @Attribute InstRole: The role of the instance. Valid values:
* MASTER: The instance is a primary instance.
* SLAVE: The instance is a read-only instance to analyze complex queries.
* SLAVE_FLOW: The instance is a read-only instance for high-concurrency scenarios.
     */
    public readonly attrInstRole: ros.IResolvable;

    /**
     * @Attribute InstanceSeries: The edition of the instance. Valid values:
* starter: Starter Edition
* enterprise: Enterprise Edition
* standard: Standard Edition
     */
    public readonly attrInstanceSeries: ros.IResolvable;

    /**
     * @Attribute InstanceSpec: The specification of the instance.
     */
    public readonly attrInstanceSpec: ros.IResolvable;

    /**
     * @Attribute Label: The tag of the instance. Valid values:
* NORMAL: The instance is a standard instance.
* HA: The instance is a high-availability (HA) instance.
* VPC: The instance is a VPC-based instance.
     */
    public readonly attrLabel: ros.IResolvable;

    /**
     * @Attribute MachineType: The machine type of the instance. Valid value: ecs.
     */
    public readonly attrMachineType: ros.IResolvable;

    /**
     * @Attribute MasterInstanceId: The ID of the primary instance.
     */
    public readonly attrMasterInstanceId: ros.IResolvable;

    /**
     * @Attribute MysqlVersion: Engine version.
     */
    public readonly attrMysqlVersion: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type of the instance. Valid values:
* CLASSIC
* VPC
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute OrderInstanceId: The ID of the purchased instance.
     */
    public readonly attrOrderInstanceId: ros.IResolvable;

    /**
     * @Attribute ReadOnlyDBInstanceIds: The IDs of read-only instances that are associated with the instance.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute StorageType: The storage type of the Drds database. Valid values:
* RDS
* PolarDB
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * @Attribute Type: The type of the instance. Valid values:
* PUBLIC: The returned instance is a shared instance.
* PRIVATE: The returned instance is a dedicated instance.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute Version: The version of the instance.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * @Attribute VersionAction: Indicates whether the version of the instance can be upgraded.
     */
    public readonly attrVersionAction: ros.IResolvable;

    /**
     * @Attribute Vips: The list of returned virtual IP addresses (VIPs).
     */
    public readonly attrVips: ros.IResolvable;

    /**
     * @Attribute VpcCloudInstanceId: The ID of the instance that is deployed in the VPC.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone in which the resource is located.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property drdsInstanceId: The ID of the Drds instance.
     */
    public drdsInstanceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommodityCode = this.getAtt('CommodityCode');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrDrdsInstanceId = this.getAtt('DrdsInstanceId');
        this.attrExpireDate = this.getAtt('ExpireDate');
        this.attrInstRole = this.getAtt('InstRole');
        this.attrInstanceSeries = this.getAtt('InstanceSeries');
        this.attrInstanceSpec = this.getAtt('InstanceSpec');
        this.attrLabel = this.getAtt('Label');
        this.attrMachineType = this.getAtt('MachineType');
        this.attrMasterInstanceId = this.getAtt('MasterInstanceId');
        this.attrMysqlVersion = this.getAtt('MysqlVersion');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrOrderInstanceId = this.getAtt('OrderInstanceId');
        this.attrReadOnlyDbInstanceIds = this.getAtt('ReadOnlyDBInstanceIds');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrStorageType = this.getAtt('StorageType');
        this.attrType = this.getAtt('Type');
        this.attrVersion = this.getAtt('Version');
        this.attrVersionAction = this.getAtt('VersionAction');
        this.attrVips = this.getAtt('Vips');
        this.attrVpcCloudInstanceId = this.getAtt('VpcCloudInstanceId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.drdsInstanceId = props.drdsInstanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            drdsInstanceId: this.drdsInstanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDrdsInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export interface RosDrdsInstancesProps {

    /**
     * @Property description: Example description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property type: Instance type. 
     * Enumeration Value: 
     * 1: PRIVATE 
     * 0: PUBLIC
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDrdsInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosDrdsInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDrdsInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosDrdsInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DRDS::DrdsInstances` resource.
 */
// @ts-ignore TS6133
function rosDrdsInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDrdsInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'Description': ros.stringToRosTemplate(properties.description),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DRDS::DrdsInstances`, which is used to query instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DrdsInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-drds-drdsinstances
 */
export class RosDrdsInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DRDS::DrdsInstances";

    /**
     * @Attribute InstanceIds: The list of drds instance IDs.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of drds instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property description: Example description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property type: Instance type. 
     * Enumeration Value: 
     * 1: PRIVATE 
     * 0: PUBLIC
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDrdsInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDrdsInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            description: this.description,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDrdsInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
