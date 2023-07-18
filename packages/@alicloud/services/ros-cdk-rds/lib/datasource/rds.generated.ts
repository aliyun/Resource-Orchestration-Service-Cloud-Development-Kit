// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::RDS::Accounts`
 */
export interface RosAccountsProps {

    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the RDS account.
     */
    readonly accountName?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      AccountName: ros.stringToRosTemplate(properties.accountName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::RDS::Accounts`
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Accounts";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccountNames: The list of The RDS account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * @Attribute Accounts: The list of The RDS accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the RDS account.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::RDS::Accounts`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccounts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountNames = this.getAtt('AccountNames');
        this.attrAccounts = this.getAtt('Accounts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.accountName = props.accountName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            accountName: this.accountName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::RDS::DBInstances`
 */
export interface RosDBInstancesProps {

    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    readonly connectionMode?: string | ros.IResolvable;

    /**
     * @Property connectionString: The endpoint of the instance.
     */
    readonly connectionString?: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;

    /**
     * @Property dbInstanceType: The role of the instances.
     */
    readonly dbInstanceType?: string | ros.IResolvable;

    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;

    /**
     * @Property engine: The database engine that is run by the instances.
     */
    readonly engine?: string | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    readonly expired?: string | ros.IResolvable;

    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    readonly instanceLevel?: number | ros.IResolvable;

    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    readonly instanceNetworkType?: string | ros.IResolvable;

    /**
     * @Property payType: The billing method of the instances.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    readonly proxyId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    readonly searchKey?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDBInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('dbInstanceStatus', ros.validateString)(properties.dbInstanceStatus));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.dbInstanceType && (typeof properties.dbInstanceType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceType', ros.validateAllowedValues)({
          data: properties.dbInstanceType,
          allowedValues: ["Primary","Readonly","Guard","Temp"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceType', ros.validateString)(properties.dbInstanceType));
    errors.collect(ros.propertyValidator('instanceLevel', ros.validateNumber)(properties.instanceLevel));
    if(properties.expired && (typeof properties.expired) !== 'object') {
        errors.collect(ros.propertyValidator('expired', ros.validateAllowedValues)({
          data: properties.expired,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('expired', ros.validateString)(properties.expired));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Postpaid","Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.instanceNetworkType && (typeof properties.instanceNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceNetworkType', ros.validateAllowedValues)({
          data: properties.instanceNetworkType,
          allowedValues: ["VPC","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceNetworkType', ros.validateString)(properties.instanceNetworkType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('searchKey', ros.validateString)(properties.searchKey));
    if(properties.connectionMode && (typeof properties.connectionMode) !== 'object') {
        errors.collect(ros.propertyValidator('connectionMode', ros.validateAllowedValues)({
          data: properties.connectionMode,
          allowedValues: ["Standard","Safe"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionMode', ros.validateString)(properties.connectionMode));
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('proxyId', ros.validateString)(properties.proxyId));
    return errors.wrap('supplied properties not correct for "RosDBInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::DBInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::DBInstances` resource.
 */
// @ts-ignore TS6133
function rosDBInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      ConnectionMode: ros.stringToRosTemplate(properties.connectionMode),
      ConnectionString: ros.stringToRosTemplate(properties.connectionString),
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBInstanceStatus: ros.stringToRosTemplate(properties.dbInstanceStatus),
      DBInstanceType: ros.stringToRosTemplate(properties.dbInstanceType),
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
      Engine: ros.stringToRosTemplate(properties.engine),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      Expired: ros.stringToRosTemplate(properties.expired),
      InstanceLevel: ros.numberToRosTemplate(properties.instanceLevel),
      InstanceNetworkType: ros.stringToRosTemplate(properties.instanceNetworkType),
      PayType: ros.stringToRosTemplate(properties.payType),
      proxyId: ros.stringToRosTemplate(properties.proxyId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SearchKey: ros.stringToRosTemplate(properties.searchKey),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::RDS::DBInstances`
 */
export class RosDBInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::DBInstances";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    public readonly attrDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute DBInstances: The list of The RDS Database instances.
     */
    public readonly attrDbInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    public connectionMode: string | ros.IResolvable | undefined;

    /**
     * @Property connectionString: The endpoint of the instance.
     */
    public connectionString: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    public dbInstanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    public dbInstanceStatus: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceType: The role of the instances.
     */
    public dbInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    public dedicatedHostId: string | ros.IResolvable | undefined;

    /**
     * @Property engine: The database engine that is run by the instances.
     */
    public engine: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    public expired: string | ros.IResolvable | undefined;

    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    public instanceLevel: number | ros.IResolvable | undefined;

    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    public instanceNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instances.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    public proxyId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    public searchKey: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::RDS::DBInstances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceIds = this.getAtt('DBInstanceIds');
        this.attrDbInstances = this.getAtt('DBInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.connectionMode = props.connectionMode;
        this.connectionString = props.connectionString;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceStatus = props.dbInstanceStatus;
        this.dbInstanceType = props.dbInstanceType;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.dedicatedHostId = props.dedicatedHostId;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.expired = props.expired;
        this.instanceLevel = props.instanceLevel;
        this.instanceNetworkType = props.instanceNetworkType;
        this.payType = props.payType;
        this.proxyId = props.proxyId;
        this.resourceGroupId = props.resourceGroupId;
        this.searchKey = props.searchKey;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            connectionMode: this.connectionMode,
            connectionString: this.connectionString,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceId: this.dbInstanceId,
            dbInstanceStatus: this.dbInstanceStatus,
            dbInstanceType: this.dbInstanceType,
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            dedicatedHostId: this.dedicatedHostId,
            engine: this.engine,
            engineVersion: this.engineVersion,
            expired: this.expired,
            instanceLevel: this.instanceLevel,
            instanceNetworkType: this.instanceNetworkType,
            payType: this.payType,
            proxyId: this.proxyId,
            resourceGroupId: this.resourceGroupId,
            searchKey: this.searchKey,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::RDS::Databases`
 */
export interface RosDatabasesProps {

    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    readonly dbName?: string | ros.IResolvable;

    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    readonly dbStatus?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    if(properties.dbStatus && (typeof properties.dbStatus) !== 'object') {
        errors.collect(ros.propertyValidator('dbStatus', ros.validateAllowedValues)({
          data: properties.dbStatus,
          allowedValues: ["Creating","Running","Deleting"],
        }));
    }
    errors.collect(ros.propertyValidator('dbStatus', ros.validateString)(properties.dbStatus));
    return errors.wrap('supplied properties not correct for "RosDatabasesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Databases` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabasesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Databases` resource.
 */
// @ts-ignore TS6133
function rosDatabasesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasesPropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBName: ros.stringToRosTemplate(properties.dbName),
      DBStatus: ros.stringToRosTemplate(properties.dbStatus),
    };
}

/**
 * A ROS template type:  `DATASOURCE::RDS::Databases`
 */
export class RosDatabases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Databases";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBNames: The list of The RDS database names.
     */
    public readonly attrDbNames: ros.IResolvable;

    /**
     * @Attribute Databases: The list of The RDS databases.
     */
    public readonly attrDatabases: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    public dbName: string | ros.IResolvable | undefined;

    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    public dbStatus: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::RDS::Databases`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabasesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabases.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbNames = this.getAtt('DBNames');
        this.attrDatabases = this.getAtt('Databases');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.dbName = props.dbName;
        this.dbStatus = props.dbStatus;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            dbName: this.dbName,
            dbStatus: this.dbStatus,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::RDS::Zones`
 */
export interface RosZonesProps {

    /**
     * @Property engine: The database engine that is run by the instance.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    readonly category?: string | ros.IResolvable;

    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    readonly commodityCode?: string | ros.IResolvable;

    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    readonly dispenseMode?: string | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone in which the instance is located. 
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the result of the validation.
 */
function RosZonesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.dispenseMode && (typeof properties.dispenseMode) !== 'object') {
        errors.collect(ros.propertyValidator('dispenseMode', ros.validateAllowedValues)({
          data: properties.dispenseMode,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('dispenseMode', ros.validateString)(properties.dispenseMode));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.commodityCode && (typeof properties.commodityCode) !== 'object') {
        errors.collect(ros.propertyValidator('commodityCode', ros.validateAllowedValues)({
          data: properties.commodityCode,
          allowedValues: ["bards","rds","rords","rds_rordspre_public_cn","bards_intl","rds_intl","rords_intl","rds_rordspre_public_intl"],
        }));
    }
    errors.collect(ros.propertyValidator('commodityCode', ros.validateString)(properties.commodityCode));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    return errors.wrap('supplied properties not correct for "RosZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Zones` resource
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Zones` resource.
 */
// @ts-ignore TS6133
function rosZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonesPropsValidator(properties).assertSuccess();
    }
    return {
      Engine: ros.stringToRosTemplate(properties.engine),
      Category: ros.stringToRosTemplate(properties.category),
      CommodityCode: ros.stringToRosTemplate(properties.commodityCode),
      DispenseMode: ros.stringToRosTemplate(properties.dispenseMode),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::RDS::Zones`
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Zones";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * @Attribute Zones: The list of The Zones.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property engine: The database engine that is run by the instance.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    public commodityCode: string | ros.IResolvable | undefined;

    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    public dispenseMode: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone in which the instance is located. 
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::RDS::Zones`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.engine = props.engine;
        this.category = props.category;
        this.commodityCode = props.commodityCode;
        this.dispenseMode = props.dispenseMode;
        this.engineVersion = props.engineVersion;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            engine: this.engine,
            category: this.category,
            commodityCode: this.commodityCode,
            dispenseMode: this.dispenseMode,
            engineVersion: this.engineVersion,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
