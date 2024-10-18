// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export interface RosAccountProps {

    /**
     * @Property accountName: Account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the account.
     */
    readonly accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: Account description information.
     */
    readonly accountDescription?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('accountDescription', ros.validateString)(properties.accountDescription));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      'AccountName': ros.stringToRosTemplate(properties.accountName),
      'AccountPassword': ros.stringToRosTemplate(properties.accountPassword),
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'AccountDescription': ros.stringToRosTemplate(properties.accountDescription),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PolarDBX::Account`, which is used to create an account.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-account
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::Account";

    /**
     * @Attribute AccountDescription: Account description information.
     */
    public readonly attrAccountDescription: ros.IResolvable;

    /**
     * @Attribute AccountName: Account name.
     */
    public readonly attrAccountName: ros.IResolvable;

    /**
     * @Attribute AccountType: Account type. 0 represents an ordinary account, and 1 represents a high-privilege account.
     */
    public readonly attrAccountType: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: Account name.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The password of the account.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: Account description information.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountDescription = this.getAtt('AccountDescription');
        this.attrAccountName = this.getAtt('AccountName');
        this.attrAccountType = this.getAtt('AccountType');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.dbInstanceId = props.dbInstanceId;
        this.accountDescription = props.accountDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            dbInstanceId: this.dbInstanceId,
            accountDescription: this.accountDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
export interface RosDBInstanceProps {

    /**
     * @Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    readonly dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    readonly dbNodeCount: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property primaryZone: The primary zone.
     */
    readonly primaryZone: string | ros.IResolvable;

    /**
     * @Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    readonly topologyType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    readonly period?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property secondaryZone: The secondary zone.
     */
    readonly secondaryZone?: string | ros.IResolvable;

    /**
     * @Property securityIpConfig: Instance whitelist configuration.
     */
    readonly securityIpConfig?: RosDBInstance.SecurityIpConfigProperty | ros.IResolvable;

    /**
     * @Property tertiaryZone: The tertiary zone.
     */
    readonly tertiaryZone?: string | ros.IResolvable;

    /**
     * @Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    readonly usedTime?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('topologyType', ros.requiredValidator)(properties.topologyType));
    if(properties.topologyType && (typeof properties.topologyType) !== 'object') {
        errors.collect(ros.propertyValidator('topologyType', ros.validateAllowedValues)({
          data: properties.topologyType,
          allowedValues: ["1azone","3azones"],
        }));
    }
    errors.collect(ros.propertyValidator('topologyType', ros.validateString)(properties.topologyType));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('period', ros.validateString)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.requiredValidator)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('dbNodeClass', ros.validateString)(properties.dbNodeClass));
    errors.collect(ros.propertyValidator('secondaryZone', ros.validateString)(properties.secondaryZone));
    errors.collect(ros.propertyValidator('tertiaryZone', ros.validateString)(properties.tertiaryZone));
    errors.collect(ros.propertyValidator('securityIpConfig', RosDBInstance_SecurityIpConfigPropertyValidator)(properties.securityIpConfig));
    errors.collect(ros.propertyValidator('dbNodeCount', ros.requiredValidator)(properties.dbNodeCount));
    if(properties.dbNodeCount && (typeof properties.dbNodeCount) !== 'object') {
        errors.collect(ros.propertyValidator('dbNodeCount', ros.validateRange)({
            data: properties.dbNodeCount,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('dbNodeCount', ros.validateNumber)(properties.dbNodeCount));
    errors.collect(ros.propertyValidator('usedTime', ros.validateNumber)(properties.usedTime));
    errors.collect(ros.propertyValidator('primaryZone', ros.requiredValidator)(properties.primaryZone));
    errors.collect(ros.propertyValidator('primaryZone', ros.validateString)(properties.primaryZone));
    if(properties.dbInstanceDescription && (Array.isArray(properties.dbInstanceDescription) || (typeof properties.dbInstanceDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateLength)({
            data: properties.dbInstanceDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DBNodeClass': ros.stringToRosTemplate(properties.dbNodeClass),
      'DBNodeCount': ros.numberToRosTemplate(properties.dbNodeCount),
      'EngineVersion': ros.stringToRosTemplate(properties.engineVersion),
      'PrimaryZone': ros.stringToRosTemplate(properties.primaryZone),
      'TopologyType': ros.stringToRosTemplate(properties.topologyType),
      'VPCId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'DBInstanceDescription': ros.stringToRosTemplate(properties.dbInstanceDescription),
      'PayType': ros.stringToRosTemplate(properties.payType),
      'Period': ros.stringToRosTemplate(properties.period),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecondaryZone': ros.stringToRosTemplate(properties.secondaryZone),
      'SecurityIpConfig': rosDBInstanceSecurityIpConfigPropertyToRosTemplate(properties.securityIpConfig),
      'TertiaryZone': ros.stringToRosTemplate(properties.tertiaryZone),
      'UsedTime': ros.numberToRosTemplate(properties.usedTime),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PolarDBX::DBInstance`, which is used to create a PolarDB for Xscale (PolarDB-X) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-dbinstance
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::DBInstance";

    /**
     * @Attribute ConnectionString: Intranet connection string.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBInstanceName: The name of the instance that you create.
     */
    public readonly attrDbInstanceName: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the order.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute Port: Intranet connection port.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbNodeClass: The specification of the nodes in the instance you want to create.
     */
    public dbNodeClass: string | ros.IResolvable;

    /**
     * @Property dbNodeCount: The number of nodes in the instance you want to create.
     */
    public dbNodeCount: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property primaryZone: The primary zone.
     */
    public primaryZone: string | ros.IResolvable;

    /**
     * @Property topologyType: The topology type of the instance. Valid values: 3azones: The instance is deployed in three zones. 1azone: The instance is deployed in only one zone.
     */
    public topologyType: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the instance belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal for the instance. Default value: true. true: Enable auto-renewal. false: Disable auto-renewal.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instance. Default: POSTPAY.Valid values: PREPAY: subscription POSTPAY: pay-as-you-go
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The unit of the billing cycle for the instance. The valid values vary based on the billing method. If you use the subscription billing method, set the value to Year or Month. If you use the pay-as-you-go billing method, the value is automatically set to Hour.
     */
    public period: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property secondaryZone: The secondary zone.
     */
    public secondaryZone: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpConfig: Instance whitelist configuration.
     */
    public securityIpConfig: RosDBInstance.SecurityIpConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property tertiaryZone: The tertiary zone.
     */
    public tertiaryZone: string | ros.IResolvable | undefined;

    /**
     * @Property usedTime: The subscription period of the instance. Unit: month or year. Note When period is set to year, the supported values of this parameter are 1, 2 and 3.
     */
    public usedTime: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbInstanceName = this.getAtt('DBInstanceName');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbNodeClass = props.dbNodeClass;
        this.dbNodeCount = props.dbNodeCount;
        this.engineVersion = props.engineVersion;
        this.primaryZone = props.primaryZone;
        this.topologyType = props.topologyType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.autoRenew = props.autoRenew;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.payType = props.payType;
        this.period = props.period;
        this.resourceGroupId = props.resourceGroupId;
        this.secondaryZone = props.secondaryZone;
        this.securityIpConfig = props.securityIpConfig;
        this.tertiaryZone = props.tertiaryZone;
        this.usedTime = props.usedTime;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbNodeClass: this.dbNodeClass,
            dbNodeCount: this.dbNodeCount,
            engineVersion: this.engineVersion,
            primaryZone: this.primaryZone,
            topologyType: this.topologyType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            autoRenew: this.autoRenew,
            dbInstanceDescription: this.dbInstanceDescription,
            payType: this.payType,
            period: this.period,
            resourceGroupId: this.resourceGroupId,
            secondaryZone: this.secondaryZone,
            securityIpConfig: this.securityIpConfig,
            tertiaryZone: this.tertiaryZone,
            usedTime: this.usedTime,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBInstance {
    /**
     * @stability external
     */
    export interface SecurityIpConfigProperty {
        /**
         * @Property groupName: The whitelist group name of the instance.
         */
        readonly groupName?: string | ros.IResolvable;
        /**
         * @Property securityIpList: The IP list in the whitelist group, multiple IP whitelists are separated by commas (,).
         */
        readonly securityIpList?: string | ros.IResolvable;
        /**
         * @Property modifyMode: Whitelist modification mode, the value range is as follows:
     * 0: Overwrite and modify the whitelist group;1: Add a whitelist group;2: Delete the whitelist group.
         */
        readonly modifyMode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SecurityIpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `SecurityIpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstance_SecurityIpConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('modifyMode', ros.validateString)(properties.modifyMode));
    return errors.wrap('supplied properties not correct for "SecurityIpConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::DBInstance.SecurityIpConfig` resource
 *
 * @param properties - the TypeScript properties of a `SecurityIpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::DBInstance.SecurityIpConfig` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceSecurityIpConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstance_SecurityIpConfigPropertyValidator(properties).assertSuccess();
    return {
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'SecurityIPList': ros.stringToRosTemplate(properties.securityIpList),
      'ModifyMode': ros.stringToRosTemplate(properties.modifyMode),
    };
}

/**
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
export interface RosDatabaseProps {

    /**
     * @Property accounts: List of accounts.
     */
    readonly accounts: Array<RosDatabase.AccountsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property characterSetName: Character set, which supports the following character sets:
     * - **utf8 * *
     * - **gbk**
     * - **latin1 * *
     * - **utf8mb4 * *.
     */
    readonly characterSetName: string | ros.IResolvable;

    /**
     * @Property databaseName: The name of the database.
     */
    readonly databaseName: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property databaseDescription: Database description information.
     */
    readonly databaseDescription?: string | ros.IResolvable;

    /**
     * @Property mode: The mode selected when creating the database. The values are as follows:
     * - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
     * - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
     */
    readonly mode?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    if(properties.characterSetName && (typeof properties.characterSetName) !== 'object') {
        errors.collect(ros.propertyValidator('characterSetName', ros.validateAllowedValues)({
          data: properties.characterSetName,
          allowedValues: ["utf8","gbk","latin1","utf8mb4"],
        }));
    }
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('databaseName', ros.requiredValidator)(properties.databaseName));
    errors.collect(ros.propertyValidator('databaseName', ros.validateString)(properties.databaseName));
    errors.collect(ros.propertyValidator('databaseDescription', ros.validateString)(properties.databaseDescription));
    errors.collect(ros.propertyValidator('accounts', ros.requiredValidator)(properties.accounts));
    errors.collect(ros.propertyValidator('accounts', ros.listValidator(RosDatabase_AccountsPropertyValidator))(properties.accounts));
    return errors.wrap('supplied properties not correct for "RosDatabaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::Database` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::Database` resource.
 */
// @ts-ignore TS6133
function rosDatabasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasePropsValidator(properties).assertSuccess();
    }
    return {
      'Accounts': ros.listMapper(rosDatabaseAccountsPropertyToRosTemplate)(properties.accounts),
      'CharacterSetName': ros.stringToRosTemplate(properties.characterSetName),
      'DatabaseName': ros.stringToRosTemplate(properties.databaseName),
      'DBInstanceId': ros.stringToRosTemplate(properties.dbInstanceId),
      'DatabaseDescription': ros.stringToRosTemplate(properties.databaseDescription),
      'Mode': ros.stringToRosTemplate(properties.mode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PolarDBX::Database`, which is used to create a database.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
 */
export class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PolarDBX::Database";

    /**
     * @Attribute Accounts: List of accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    /**
     * @Attribute CharacterSetName: Character set, which supports the following character sets:.
     */
    public readonly attrCharacterSetName: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DatabaseDescription: Database description information.
     */
    public readonly attrDatabaseDescription: ros.IResolvable;

    /**
     * @Attribute DatabaseName: The name of the database.
     */
    public readonly attrDatabaseName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accounts: List of accounts.
     */
    public accounts: Array<RosDatabase.AccountsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property characterSetName: Character set, which supports the following character sets:
     * - **utf8 * *
     * - **gbk**
     * - **latin1 * *
     * - **utf8mb4 * *.
     */
    public characterSetName: string | ros.IResolvable;

    /**
     * @Property databaseName: The name of the database.
     */
    public databaseName: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property databaseDescription: Database description information.
     */
    public databaseDescription: string | ros.IResolvable | undefined;

    /**
     * @Property mode: The mode selected when creating the database. The values are as follows:
     * - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
     * - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
     */
    public mode: string | ros.IResolvable | undefined;

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
        this.attrDatabaseName = this.getAtt('DatabaseName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accounts = props.accounts;
        this.characterSetName = props.characterSetName;
        this.databaseName = props.databaseName;
        this.dbInstanceId = props.dbInstanceId;
        this.databaseDescription = props.databaseDescription;
        this.mode = props.mode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accounts: this.accounts,
            characterSetName: this.characterSetName,
            databaseName: this.databaseName,
            dbInstanceId: this.dbInstanceId,
            databaseDescription: this.databaseDescription,
            mode: this.mode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDatabase {
    /**
     * @stability external
     */
    export interface AccountsProperty {
        /**
         * @Property accountPrivilege: Permission.
         */
        readonly accountPrivilege: string | ros.IResolvable;
        /**
         * @Property accountName: Account name.
         */
        readonly accountName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AccountsProperty`
 *
 * @param properties - the TypeScript properties of a `AccountsProperty`
 *
 * @returns the result of the validation.
 */
function RosDatabase_AccountsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountPrivilege', ros.requiredValidator)(properties.accountPrivilege));
    if(properties.accountPrivilege && (typeof properties.accountPrivilege) !== 'object') {
        errors.collect(ros.propertyValidator('accountPrivilege', ros.validateAllowedValues)({
          data: properties.accountPrivilege,
          allowedValues: ["ReadWrite","ReadOnly","DMLOnly","DDLOnly"],
        }));
    }
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "AccountsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::Database.Accounts` resource
 *
 * @param properties - the TypeScript properties of a `AccountsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::PolarDBX::Database.Accounts` resource.
 */
// @ts-ignore TS6133
function rosDatabaseAccountsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDatabase_AccountsPropertyValidator(properties).assertSuccess();
    return {
      'AccountPrivilege': ros.stringToRosTemplate(properties.accountPrivilege),
      'AccountName': ros.stringToRosTemplate(properties.accountName),
    };
}
