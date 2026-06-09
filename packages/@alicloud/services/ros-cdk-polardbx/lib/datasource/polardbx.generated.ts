// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
 */
export interface RosAccountProps {

    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    readonly polarDbxAccountName: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('polarDbxAccountName', ros.requiredValidator)(properties.polarDbxAccountName));
    errors.collect(ros.propertyValidator('polarDbxAccountName', ros.validateString)(properties.polarDbxAccountName));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'PolarDBXAccountName': ros.stringToRosTemplate(properties.polarDbxAccountName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Account";

    /**
     * @Attribute AccountDescription: The description of the account.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * @Attribute AccountType: The type of the account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * @Attribute CreateTime: The point in time when the account was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute PolarDBXAccountName: The username of the account.
     */
    public readonly attrPolarDbxAccountName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    public polarDbxAccountName: string | ros.IResolvable;

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
        this.attrAccountDescription = this.getAtt('AccountDescription');
        this.attrAccountType = this.getAtt('AccountType');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrPolarDbxAccountName = this.getAtt('PolarDBXAccountName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.polarDbxAccountName = props.polarDbxAccountName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            polarDbxAccountName: this.polarDbxAccountName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
export interface RosAccountsProps {

    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the account. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    readonly accountType?: number | ros.IResolvable;

    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    readonly polarDbxAccountName?: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('polarDbxAccountName', ros.validateString)(properties.polarDbxAccountName));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateNumber)(properties.accountType));
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'AccountType': ros.numberToRosTemplate(properties.accountType),
      'PolarDBXAccountName': ros.stringToRosTemplate(properties.polarDbxAccountName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Accounts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-accounts
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Accounts";

    /**
     * @Attribute PolarDBXAccountNames: The list of PolarDB-X 2.0 account names.
     */
    public readonly attrPolarDbxAccountNames: ros.IResolvable;

    /**
     * @Attribute PolarDBXAccounts: The list of PolarDB-X 2.0 accounts.
     */
    public readonly attrPolarDbxAccounts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountType: The type of the account. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    public accountType: number | ros.IResolvable | undefined;

    /**
     * @Property polarDbxAccountName: The username of the account that you want to query. If you want to query information about a specific account, you must specify this parameter.
     */
    public polarDbxAccountName: string | ros.IResolvable | undefined;

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
        this.attrPolarDbxAccountNames = this.getAtt('PolarDBXAccountNames');
        this.attrPolarDbxAccounts = this.getAtt('PolarDBXAccounts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.accountType = props.accountType;
        this.polarDbxAccountName = props.polarDbxAccountName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            accountType: this.accountType,
            polarDbxAccountName: this.polarDbxAccountName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
export interface RosDatabaseProps {

    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    readonly polarDbxDatabaseName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatabaseProps`
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the result of the validation.
 */
function RosDatabasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('polarDbxDatabaseName', ros.requiredValidator)(properties.polarDbxDatabaseName));
    errors.collect(ros.propertyValidator('polarDbxDatabaseName', ros.validateString)(properties.polarDbxDatabaseName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDatabaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Database` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Database` resource.
 */
// @ts-ignore TS6133
function rosDatabasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasePropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'PolarDBXDatabaseName': ros.stringToRosTemplate(properties.polarDbxDatabaseName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Database`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-database
 */
export class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Database";

    /**
     * @Attribute Accounts: The list of accounts that can be used to access the database.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * @Attribute CharacterSetName: The character set that is supported by the database.
     */
    public readonly attrCharacterSetName: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DatabaseDescription: The description of the database.
     */
    public readonly attrDatabaseDescription: ros.IResolvable;

    /**
     * @Attribute PolarDBXDatabaseName: The name of the PolarDB-X instance.
     */
    public readonly attrPolarDbxDatabaseName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    public polarDbxDatabaseName: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabase.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccounts = this.getAtt('Accounts');
        this.attrCharacterSetName = this.getAtt('CharacterSetName');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDatabaseDescription = this.getAtt('DatabaseDescription');
        this.attrPolarDbxDatabaseName = this.getAtt('PolarDBXDatabaseName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.polarDbxDatabaseName = props.polarDbxDatabaseName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            polarDbxDatabaseName: this.polarDbxDatabaseName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDatabases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
 */
export interface RosDatabasesProps {

    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    readonly polarDbxDatabaseName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatabasesProps`
 *
 * @param properties - the TypeScript properties of a `RosDatabasesProps`
 *
 * @returns the result of the validation.
 */
function RosDatabasesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('polarDbxDatabaseName', ros.validateString)(properties.polarDbxDatabaseName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDatabasesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Databases` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabasesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::PolarDBX::Databases` resource.
 */
// @ts-ignore TS6133
function rosDatabasesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasesPropsValidator(properties).assertSuccess();
    }
    return {
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'PolarDBXDatabaseName': ros.stringToRosTemplate(properties.polarDbxDatabaseName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::PolarDBX::Databases`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Databases` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardbx-databases
 */
export class RosDatabases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::PolarDBX::Databases";

    /**
     * @Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.
     */
    public readonly attrPolarDbxDatabaseNames: ros.IResolvable;

    /**
     * @Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.
     */
    public readonly attrPolarDbxDatabases: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the PolarDB-X 2.0 instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property polarDbxDatabaseName: The name of the PolarDB-X 2.0 instance.
     */
    public polarDbxDatabaseName: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosDatabasesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabases.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPolarDbxDatabaseNames = this.getAtt('PolarDBXDatabaseNames');
        this.attrPolarDbxDatabases = this.getAtt('PolarDBXDatabases');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.polarDbxDatabaseName = props.polarDbxDatabaseName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            polarDbxDatabaseName: this.polarDbxDatabaseName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
