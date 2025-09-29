import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DMS::Instance`, which is used to register a database instance for your enterprise.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::Instance";
    /**
     * @Attribute Host: The endpoint of the database instance.
     */
    readonly attrHost: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the database instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Port: The connection port of the database instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    databasePassword: string | ros.IResolvable;
    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    databaseUser: string | ros.IResolvable;
    /**
     * @Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    dbaUid: number | ros.IResolvable;
    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    envType: string | ros.IResolvable;
    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    exportTimeout: number | ros.IResolvable;
    /**
     * @Property host: The endpoint of the database instance.
     */
    host: string | ros.IResolvable;
    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    instanceAlias: string | ros.IResolvable;
    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    instanceSource: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    networkType: string | ros.IResolvable;
    /**
     * @Property port: The connection port of the database instance.
     */
    port: number | ros.IResolvable;
    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    queryTimeout: number | ros.IResolvable;
    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    safeRule: string | ros.IResolvable;
    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    dataLinkName: string | ros.IResolvable | undefined;
    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    ddlOnline: number | ros.IResolvable | undefined;
    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    ecsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    ecsRegion: string | ros.IResolvable | undefined;
    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    sid: string | ros.IResolvable | undefined;
    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    tid: number | ros.IResolvable | undefined;
    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    useDsql: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosInstance2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
 */
export interface RosInstance2Props {
    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    readonly databasePassword: string | ros.IResolvable;
    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    readonly databaseUser: string | ros.IResolvable;
    /**
     * @Property dbaId: The user ID of the instance DBA role. You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
     */
    readonly dbaId: number | ros.IResolvable;
    /**
     * @Property enableSellTrust: Whether the instance needs to enable secure hosting.
     * - Y: Enable secure hosting mode.
     * - NULL or other: Do not enable secure hosting mode.
     */
    readonly enableSellTrust: string | ros.IResolvable;
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
     * @Property enableSellCommon: Whether the instance needs to enable the security collaboration function.
     * - Y: Enable.
     * - NULL or other: Not enable.
     */
    readonly enableSellCommon?: string | ros.IResolvable;
    /**
     * @Property enableSellSitd: Y: enables the sensitive data protection feature
     * NULL or other: disables the sensitive data protection feature
     */
    readonly enableSellSitd?: string | ros.IResolvable;
    /**
     * @Property enableSellStable: Whether the instance needs to enable the stable change function.
     * - Y: Enable.
     * - NULL or other: Do not enable.
     */
    readonly enableSellStable?: string | ros.IResolvable;
    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    readonly sid?: string | ros.IResolvable;
    /**
     * @Property skipTest: Whether the instance ignores the test connectivity. The values are as follows:
     * - true: ignore
     * - false: do not ignore
     */
    readonly skipTest?: boolean | ros.IResolvable;
    /**
     * @Property templateId: The ID of the classification template. You can call the ListClassificationTemplates operation to query the template ID.
     */
    readonly templateId?: number | ros.IResolvable;
    /**
     * @Property templateType: The type of the classification template. You can call the ListClassificationTemplates operation to query the template type.
     */
    readonly templateType?: string | ros.IResolvable;
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
     * @Property useSsl: Select whether to enable SSL connection. When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
     * - 0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.
     * - 1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.
     * - -1: Disable SSL connection.
     * Note:
     * - This configuration item only appears when the database is MySQL or Redis.
     * - SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.
     */
    readonly useSsl?: number | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    readonly vpcId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DMS::Instance2`, which is used to register a database instance in new Data Management (DMS).
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
 */
export declare class RosInstance2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::Instance2";
    /**
     * @Attribute Host: The endpoint of the database instance.
     */
    readonly attrHost: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the database instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute Port: The connection port of the database instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property databasePassword: The logon password of the database instance.
     */
    databasePassword: string | ros.IResolvable;
    /**
     * @Property databaseUser: The logon username of the database instance.
     */
    databaseUser: string | ros.IResolvable;
    /**
     * @Property dbaId: The user ID of the instance DBA role. You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
     */
    dbaId: number | ros.IResolvable;
    /**
     * @Property enableSellTrust: Whether the instance needs to enable secure hosting.
     * - Y: Enable secure hosting mode.
     * - NULL or other: Do not enable secure hosting mode.
     */
    enableSellTrust: string | ros.IResolvable;
    /**
     * @Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    envType: string | ros.IResolvable;
    /**
     * @Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    exportTimeout: number | ros.IResolvable;
    /**
     * @Property host: The endpoint of the database instance.
     */
    host: string | ros.IResolvable;
    /**
     * @Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    instanceAlias: string | ros.IResolvable;
    /**
     * @Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    instanceSource: string | ros.IResolvable;
    /**
     * @Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    instanceType: string | ros.IResolvable;
    /**
     * @Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    networkType: string | ros.IResolvable;
    /**
     * @Property port: The connection port of the database instance.
     */
    port: number | ros.IResolvable;
    /**
     * @Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    queryTimeout: number | ros.IResolvable;
    /**
     * @Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    safeRule: string | ros.IResolvable;
    /**
     * @Property dataLinkName: The name of the data link for cross-database query.
     */
    dataLinkName: string | ros.IResolvable | undefined;
    /**
     * @Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    ddlOnline: number | ros.IResolvable | undefined;
    /**
     * @Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    ecsInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    ecsRegion: string | ros.IResolvable | undefined;
    /**
     * @Property enableSellCommon: Whether the instance needs to enable the security collaboration function.
     * - Y: Enable.
     * - NULL or other: Not enable.
     */
    enableSellCommon: string | ros.IResolvable | undefined;
    /**
     * @Property enableSellSitd: Y: enables the sensitive data protection feature
     * NULL or other: disables the sensitive data protection feature
     */
    enableSellSitd: string | ros.IResolvable | undefined;
    /**
     * @Property enableSellStable: Whether the instance needs to enable the stable change function.
     * - Y: Enable.
     * - NULL or other: Do not enable.
     */
    enableSellStable: string | ros.IResolvable | undefined;
    /**
     * @Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    sid: string | ros.IResolvable | undefined;
    /**
     * @Property skipTest: Whether the instance ignores the test connectivity. The values are as follows:
     * - true: ignore
     * - false: do not ignore
     */
    skipTest: boolean | ros.IResolvable | undefined;
    /**
     * @Property templateId: The ID of the classification template. You can call the ListClassificationTemplates operation to query the template ID.
     */
    templateId: number | ros.IResolvable | undefined;
    /**
     * @Property templateType: The type of the classification template. You can call the ListClassificationTemplates operation to query the template type.
     */
    templateType: string | ros.IResolvable | undefined;
    /**
     * @Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    tid: number | ros.IResolvable | undefined;
    /**
     * @Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    useDsql: number | ros.IResolvable | undefined;
    /**
     * @Property useSsl: Select whether to enable SSL connection. When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
     * - 0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.
     * - 1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.
     * - -1: Disable SSL connection.
     * Note:
     * - This configuration item only appears when the database is MySQL or Redis.
     * - SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.
     */
    useSsl: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstance2Props, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DMS::User`, which is used to add a user to Data Management (DMS).
 * @Note This class does not contain additional functions, so it is recommended to use the `User` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-user
 */
export declare class RosUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DMS::User";
    /**
     * @Attribute Mobile: UserMobile
     */
    readonly attrMobile: ros.IResolvable;
    /**
     * @Attribute ParentUid: ParentAliYunUid
     */
    readonly attrParentUid: ros.IResolvable;
    /**
     * @Attribute RoleIds: UserRoleId
     */
    readonly attrRoleIds: ros.IResolvable;
    /**
     * @Attribute RoleNames: UserRole
     */
    readonly attrRoleNames: ros.IResolvable;
    /**
     * @Attribute Uid: UserAliYunUid
     */
    readonly attrUid: ros.IResolvable;
    /**
     * @Attribute UserId: UserId
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * @Attribute UserName: UserNickName
     */
    readonly attrUserName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property uid: UserAliYunUid
     */
    uid: string | ros.IResolvable;
    /**
     * @Property mobile: UserMobile
     */
    mobile: string | ros.IResolvable | undefined;
    /**
     * @Property roleNames: UserRole
     */
    roleNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property status: UserStatus
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property tid:
     */
    tid: string | ros.IResolvable | undefined;
    /**
     * @Property userName: UserNickName
     */
    userName: string | ros.IResolvable | undefined;
    /**
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
