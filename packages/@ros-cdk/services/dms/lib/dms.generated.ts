// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::DMS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    readonly databasePassword: string;

    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    readonly databaseUser: string;

    /**
     * @Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    readonly dbaUid: number;

    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    readonly envType: string;

    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    readonly exportTimeout: number;

    /**
     * @Property host: The endpoint of the database instance.
     */
    readonly host: string;

    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    readonly instanceAlias: string;

    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    readonly instanceSource: string;

    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    readonly instanceType: string;

    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    readonly networkType: string;

    /**
     * @Property port: The connection port of the database instance.
     */
    readonly port: number;

    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    readonly queryTimeout: number;

    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    readonly safeRule: string;

    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    readonly tid: number;

    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    readonly dataLinkName?: string;

    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    readonly ddlOnline?: number;

    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    readonly ecsInstanceId?: string;

    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    readonly ecsRegion?: string;

    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    readonly sid?: string;

    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    readonly useDsql?: number;

    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    readonly vpcId?: string;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceSource', ros.requiredValidator)(properties.instanceSource));
    errors.collect(ros.propertyValidator('instanceSource', ros.validateString)(properties.instanceSource));
    errors.collect(ros.propertyValidator('databasePassword', ros.requiredValidator)(properties.databasePassword));
    errors.collect(ros.propertyValidator('databasePassword', ros.validateString)(properties.databasePassword));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('host', ros.requiredValidator)(properties.host));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    errors.collect(ros.propertyValidator('exportTimeout', ros.requiredValidator)(properties.exportTimeout));
    errors.collect(ros.propertyValidator('exportTimeout', ros.validateNumber)(properties.exportTimeout));
    errors.collect(ros.propertyValidator('safeRule', ros.requiredValidator)(properties.safeRule));
    errors.collect(ros.propertyValidator('safeRule', ros.validateString)(properties.safeRule));
    errors.collect(ros.propertyValidator('ddlOnline', ros.validateNumber)(properties.ddlOnline));
    errors.collect(ros.propertyValidator('envType', ros.requiredValidator)(properties.envType));
    errors.collect(ros.propertyValidator('envType', ros.validateString)(properties.envType));
    errors.collect(ros.propertyValidator('tid', ros.requiredValidator)(properties.tid));
    errors.collect(ros.propertyValidator('tid', ros.validateNumber)(properties.tid));
    if(properties.useDsql && (typeof properties.useDsql) !== 'object') {
        errors.collect(ros.propertyValidator('useDsql', ros.validateAllowedValues)({
          data: properties.useDsql,
          allowedValues: [0,1],
        }));
    }
    errors.collect(ros.propertyValidator('useDsql', ros.validateNumber)(properties.useDsql));
    errors.collect(ros.propertyValidator('sid', ros.validateString)(properties.sid));
    errors.collect(ros.propertyValidator('ecsInstanceId', ros.validateString)(properties.ecsInstanceId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('instanceAlias', ros.requiredValidator)(properties.instanceAlias));
    errors.collect(ros.propertyValidator('instanceAlias', ros.validateString)(properties.instanceAlias));
    errors.collect(ros.propertyValidator('dbaUid', ros.requiredValidator)(properties.dbaUid));
    errors.collect(ros.propertyValidator('dbaUid', ros.validateNumber)(properties.dbaUid));
    errors.collect(ros.propertyValidator('ecsRegion', ros.validateString)(properties.ecsRegion));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["CLASSIC","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('databaseUser', ros.requiredValidator)(properties.databaseUser));
    errors.collect(ros.propertyValidator('databaseUser', ros.validateString)(properties.databaseUser));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","Oracle","DRDS","OceanBase","Mongo","Redis"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('dataLinkName', ros.validateString)(properties.dataLinkName));
    errors.collect(ros.propertyValidator('queryTimeout', ros.requiredValidator)(properties.queryTimeout));
    errors.collect(ros.propertyValidator('queryTimeout', ros.validateNumber)(properties.queryTimeout));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DMS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DMS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DatabasePassword: ros.stringToRosTemplate(properties.databasePassword),
      DatabaseUser: ros.stringToRosTemplate(properties.databaseUser),
      DbaUid: ros.numberToRosTemplate(properties.dbaUid),
      EnvType: ros.stringToRosTemplate(properties.envType),
      ExportTimeout: ros.numberToRosTemplate(properties.exportTimeout),
      Host: ros.stringToRosTemplate(properties.host),
      InstanceAlias: ros.stringToRosTemplate(properties.instanceAlias),
      InstanceSource: ros.stringToRosTemplate(properties.instanceSource),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      Port: ros.numberToRosTemplate(properties.port),
      QueryTimeout: ros.numberToRosTemplate(properties.queryTimeout),
      SafeRule: ros.stringToRosTemplate(properties.safeRule),
      Tid: ros.numberToRosTemplate(properties.tid),
      DataLinkName: ros.stringToRosTemplate(properties.dataLinkName),
      DdlOnline: ros.numberToRosTemplate(properties.ddlOnline),
      EcsInstanceId: ros.stringToRosTemplate(properties.ecsInstanceId),
      EcsRegion: ros.stringToRosTemplate(properties.ecsRegion),
      Sid: ros.stringToRosTemplate(properties.sid),
      UseDsql: ros.numberToRosTemplate(properties.useDsql),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::DMS::Instance`
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::Instance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Host: The endpoint of the database instance.
     */
    public readonly attrHost: any;

    /**
     * @Attribute InstanceId: The ID of the database instance.
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute Port: The connection port of the database instance.
     */
    public readonly attrPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    public databasePassword: string;

    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    public databaseUser: string;

    /**
     * @Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    public dbaUid: number;

    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    public envType: string;

    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    public exportTimeout: number;

    /**
     * @Property host: The endpoint of the database instance.
     */
    public host: string;

    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    public instanceAlias: string;

    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    public instanceSource: string;

    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    public instanceType: string;

    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    public networkType: string;

    /**
     * @Property port: The connection port of the database instance.
     */
    public port: number;

    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    public queryTimeout: number;

    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    public safeRule: string;

    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    public tid: number;

    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    public dataLinkName: string | undefined;

    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    public ddlOnline: number | undefined;

    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    public ecsInstanceId: string | undefined;

    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    public ecsRegion: string | undefined;

    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    public sid: string | undefined;

    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    public useDsql: number | undefined;

    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    public vpcId: string | undefined;

    /**
     * Create a new `ALIYUN::DMS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHost = ros.Token.asString(this.getAtt('Host'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrPort = ros.Token.asString(this.getAtt('Port'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.databasePassword = props.databasePassword;
        this.databaseUser = props.databaseUser;
        this.dbaUid = props.dbaUid;
        this.envType = props.envType;
        this.exportTimeout = props.exportTimeout;
        this.host = props.host;
        this.instanceAlias = props.instanceAlias;
        this.instanceSource = props.instanceSource;
        this.instanceType = props.instanceType;
        this.networkType = props.networkType;
        this.port = props.port;
        this.queryTimeout = props.queryTimeout;
        this.safeRule = props.safeRule;
        this.tid = props.tid;
        this.dataLinkName = props.dataLinkName;
        this.ddlOnline = props.ddlOnline;
        this.ecsInstanceId = props.ecsInstanceId;
        this.ecsRegion = props.ecsRegion;
        this.sid = props.sid;
        this.useDsql = props.useDsql;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            databasePassword: this.databasePassword,
            databaseUser: this.databaseUser,
            dbaUid: this.dbaUid,
            envType: this.envType,
            exportTimeout: this.exportTimeout,
            host: this.host,
            instanceAlias: this.instanceAlias,
            instanceSource: this.instanceSource,
            instanceType: this.instanceType,
            networkType: this.networkType,
            port: this.port,
            queryTimeout: this.queryTimeout,
            safeRule: this.safeRule,
            tid: this.tid,
            dataLinkName: this.dataLinkName,
            ddlOnline: this.ddlOnline,
            ecsInstanceId: this.ecsInstanceId,
            ecsRegion: this.ecsRegion,
            sid: this.sid,
            useDsql: this.useDsql,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
