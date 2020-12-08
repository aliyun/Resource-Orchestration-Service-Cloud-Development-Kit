import * as ros from '@alicloud/ros-cdk-core';
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
 * A ROS template type:  `ALIYUN::DMS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Host: The endpoint of the database instance.
     */
    readonly attrHost: any;
    /**
     * @Attribute InstanceId: The ID of the database instance.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute Port: The connection port of the database instance.
     */
    readonly attrPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    databasePassword: string;
    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    databaseUser: string;
    /**
     * @Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    dbaUid: number;
    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    envType: string;
    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    exportTimeout: number;
    /**
     * @Property host: The endpoint of the database instance.
     */
    host: string;
    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    instanceAlias: string;
    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    instanceSource: string;
    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    instanceType: string;
    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    networkType: string;
    /**
     * @Property port: The connection port of the database instance.
     */
    port: number;
    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    queryTimeout: number;
    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    safeRule: string;
    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    tid: number;
    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    dataLinkName: string | undefined;
    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    ddlOnline: number | undefined;
    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    ecsInstanceId: string | undefined;
    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    ecsRegion: string | undefined;
    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    sid: string | undefined;
    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    useDsql: number | undefined;
    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    vpcId: string | undefined;
    /**
     * Create a new `ALIYUN::DMS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `ALIYUN::DMS::User`
 */
export interface RosUserProps {
    /**
     * @Property uid: UserAliYunUid
     */
    readonly uid: string;
    /**
     * @Property mobile: UserMobile
     */
    readonly mobile?: string;
    /**
     * @Property roleNames: UserRole
     */
    readonly roleNames?: string[];
    /**
     * @Property status: UserStatus
     */
    readonly status?: string;
    /**
     * @Property tid:
     */
    readonly tid?: string;
    /**
     * @Property userName: UserNickName
     */
    readonly userName?: string;
}
/**
 * A ROS template type:  `ALIYUN::DMS::User`
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::User";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Mobile: UserMobile
     */
    readonly attrMobile: any;
    /**
     * @Attribute ParentUid: ParentAliYunUid
     */
    readonly attrParentUid: any;
    /**
     * @Attribute RoleIds: UserRoleId
     */
    readonly attrRoleIds: any;
    /**
     * @Attribute RoleNames: UserRole
     */
    readonly attrRoleNames: any;
    /**
     * @Attribute Uid: UserAliYunUid
     */
    readonly attrUid: any;
    /**
     * @Attribute UserId: UserId
     */
    readonly attrUserId: any;
    /**
     * @Attribute UserName: UserNickName
     */
    readonly attrUserName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property uid: UserAliYunUid
     */
    uid: string;
    /**
     * @Property mobile: UserMobile
     */
    mobile: string | undefined;
    /**
     * @Property roleNames: UserRole
     */
    roleNames: string[] | undefined;
    /**
     * @Property status: UserStatus
     */
    status: string | undefined;
    /**
     * @Property tid:
     */
    tid: string | undefined;
    /**
     * @Property userName: UserNickName
     */
    userName: string | undefined;
    /**
     * Create a new `ALIYUN::DMS::User`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
