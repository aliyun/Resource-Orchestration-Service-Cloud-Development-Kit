// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::DMS::Instance`
 */
export interface RosInstanceProps {

    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    readonly databasePassword: string | ros.IResolvable;

    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    readonly databaseUser: string | ros.IResolvable;

    /**
     * @Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    readonly dbaUid: number | ros.IResolvable;

    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    readonly envType: string | ros.IResolvable;

    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    readonly exportTimeout: number | ros.IResolvable;

    /**
     * @Property host: The endpoint of the database instance.
     */
    readonly host: string | ros.IResolvable;

    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    readonly instanceAlias: string | ros.IResolvable;

    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    readonly instanceSource: string | ros.IResolvable;

    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    readonly networkType: string | ros.IResolvable;

    /**
     * @Property port: The connection port of the database instance.
     */
    readonly port: number | ros.IResolvable;

    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    readonly queryTimeout: number | ros.IResolvable;

    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    readonly safeRule: string | ros.IResolvable;

    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    readonly dataLinkName?: string | ros.IResolvable;

    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    readonly ddlOnline?: number | ros.IResolvable;

    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    readonly ecsInstanceId?: string | ros.IResolvable;

    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    readonly ecsRegion?: string | ros.IResolvable;

    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    readonly sid?: string | ros.IResolvable;

    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    readonly tid?: number | ros.IResolvable;

    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    readonly useDsql?: number | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    readonly vpcId?: string | ros.IResolvable;
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
      DataLinkName: ros.stringToRosTemplate(properties.dataLinkName),
      DdlOnline: ros.numberToRosTemplate(properties.ddlOnline),
      EcsInstanceId: ros.stringToRosTemplate(properties.ecsInstanceId),
      EcsRegion: ros.stringToRosTemplate(properties.ecsRegion),
      Sid: ros.stringToRosTemplate(properties.sid),
      Tid: ros.numberToRosTemplate(properties.tid),
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
    public readonly attrHost: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the database instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Port: The connection port of the database instance.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    public databasePassword: string | ros.IResolvable;

    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    public databaseUser: string | ros.IResolvable;

    /**
     * @Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    public dbaUid: number | ros.IResolvable;

    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    public envType: string | ros.IResolvable;

    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    public exportTimeout: number | ros.IResolvable;

    /**
     * @Property host: The endpoint of the database instance.
     */
    public host: string | ros.IResolvable;

    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    public instanceAlias: string | ros.IResolvable;

    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    public instanceSource: string | ros.IResolvable;

    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    public instanceType: string | ros.IResolvable;

    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    public networkType: string | ros.IResolvable;

    /**
     * @Property port: The connection port of the database instance.
     */
    public port: number | ros.IResolvable;

    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    public queryTimeout: number | ros.IResolvable;

    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    public safeRule: string | ros.IResolvable;

    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    public dataLinkName: string | ros.IResolvable | undefined;

    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    public ddlOnline: number | ros.IResolvable | undefined;

    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    public ecsInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    public ecsRegion: string | ros.IResolvable | undefined;

    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    public sid: string | ros.IResolvable | undefined;

    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    public tid: number | ros.IResolvable | undefined;

    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    public useDsql: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DMS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHost = this.getAtt('Host');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPort = this.getAtt('Port');

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
        this.dataLinkName = props.dataLinkName;
        this.ddlOnline = props.ddlOnline;
        this.ecsInstanceId = props.ecsInstanceId;
        this.ecsRegion = props.ecsRegion;
        this.sid = props.sid;
        this.tid = props.tid;
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
            dataLinkName: this.dataLinkName,
            ddlOnline: this.ddlOnline,
            ecsInstanceId: this.ecsInstanceId,
            ecsRegion: this.ecsRegion,
            sid: this.sid,
            tid: this.tid,
            useDsql: this.useDsql,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::DMS::User`
 */
export interface RosUserProps {

    /**
     * @Property uid: UserAliYunUid
     */
    readonly uid: string | ros.IResolvable;

    /**
     * @Property mobile: UserMobile
     */
    readonly mobile?: string | ros.IResolvable;

    /**
     * @Property roleNames: UserRole
     */
    readonly roleNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property status: UserStatus
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tid:
     */
    readonly tid?: string | ros.IResolvable;

    /**
     * @Property userName: UserNickName
     */
    readonly userName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserProps`
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the result of the validation.
 */
function RosUserPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('uid', ros.requiredValidator)(properties.uid));
    errors.collect(ros.propertyValidator('uid', ros.validateString)(properties.uid));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('roleNames', ros.listValidator(ros.validateString))(properties.roleNames));
    errors.collect(ros.propertyValidator('mobile', ros.validateString)(properties.mobile));
    errors.collect(ros.propertyValidator('tid', ros.validateString)(properties.tid));
    return errors.wrap('supplied properties not correct for "RosUserProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DMS::User` resource
 *
 * @param properties - the TypeScript properties of a `RosUserProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DMS::User` resource.
 */
// @ts-ignore TS6133
function rosUserPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserPropsValidator(properties).assertSuccess();
    }
    return {
      Uid: ros.stringToRosTemplate(properties.uid),
      Mobile: ros.stringToRosTemplate(properties.mobile),
      RoleNames: ros.listMapper(ros.stringToRosTemplate)(properties.roleNames),
      Status: ros.stringToRosTemplate(properties.status),
      Tid: ros.stringToRosTemplate(properties.tid),
      UserName: ros.stringToRosTemplate(properties.userName),
    };
}

/**
 * A ROS template type:  `ALIYUN::DMS::User`
 */
export class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::User";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Mobile: UserMobile
     */
    public readonly attrMobile: ros.IResolvable;

    /**
     * @Attribute ParentUid: ParentAliYunUid
     */
    public readonly attrParentUid: ros.IResolvable;

    /**
     * @Attribute RoleIds: UserRoleId
     */
    public readonly attrRoleIds: ros.IResolvable;

    /**
     * @Attribute RoleNames: UserRole
     */
    public readonly attrRoleNames: ros.IResolvable;

    /**
     * @Attribute Uid: UserAliYunUid
     */
    public readonly attrUid: ros.IResolvable;

    /**
     * @Attribute UserId: UserId
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * @Attribute UserName: UserNickName
     */
    public readonly attrUserName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property uid: UserAliYunUid
     */
    public uid: string | ros.IResolvable;

    /**
     * @Property mobile: UserMobile
     */
    public mobile: string | ros.IResolvable | undefined;

    /**
     * @Property roleNames: UserRole
     */
    public roleNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property status: UserStatus
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tid:
     */
    public tid: string | ros.IResolvable | undefined;

    /**
     * @Property userName: UserNickName
     */
    public userName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::DMS::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUser.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMobile = this.getAtt('Mobile');
        this.attrParentUid = this.getAtt('ParentUid');
        this.attrRoleIds = this.getAtt('RoleIds');
        this.attrRoleNames = this.getAtt('RoleNames');
        this.attrUid = this.getAtt('Uid');
        this.attrUserId = this.getAtt('UserId');
        this.attrUserName = this.getAtt('UserName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.uid = props.uid;
        this.mobile = props.mobile;
        this.roleNames = props.roleNames;
        this.status = props.status;
        this.tid = props.tid;
        this.userName = props.userName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            uid: this.uid,
            mobile: this.mobile,
            roleNames: this.roleNames,
            status: this.status,
            tid: this.tid,
            userName: this.userName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
