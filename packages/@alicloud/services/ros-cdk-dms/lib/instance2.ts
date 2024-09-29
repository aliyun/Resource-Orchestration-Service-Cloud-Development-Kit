import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance2 } from './dms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance2 as Instance2Property };

/**
 * Properties for defining a `Instance2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
 */
export interface Instance2Props {

    /**
     * Property databasePassword: The logon password of the database instance.
     */
    readonly databasePassword: string | ros.IResolvable;

    /**
     * Property databaseUser: The logon username of the database instance.
     */
    readonly databaseUser: string | ros.IResolvable;

    /**
     * Property dbaId: The user ID of the instance DBA role. You can call the ListUsers or GetInstance operation to obtain the value of this parameter.
     */
    readonly dbaId: number | ros.IResolvable;

    /**
     * Property enableSellTrust: Whether the instance needs to enable secure hosting.
     * - Y: Enable secure hosting mode.
     * - NULL or other: Do not enable secure hosting mode.
     */
    readonly enableSellTrust: string | ros.IResolvable;

    /**
     * Property envType: The type of the environment to which the database instance belongs. Valid values:
     * product: the production environment.
     * dev: the test environment.
     */
    readonly envType: string | ros.IResolvable;

    /**
     * Property exportTimeout: The timeout period for exporting the database instance. Unit: seconds.
     */
    readonly exportTimeout: number | ros.IResolvable;

    /**
     * Property host: The endpoint of the database instance.
     */
    readonly host: string | ros.IResolvable;

    /**
     * Property instanceAlias: The alias of the database instance. The alias helps you quickly find the required
     * instance.
     */
    readonly instanceAlias: string | ros.IResolvable;

    /**
     * Property instanceSource: The source of the database instance. Valid values:
     * PUBLIC_OWN: an on-premises database built on the public network.
     * RDS: an ApsaraDB for RDS (RDS) instance.
     * ECS_OWN: an on-premises database built on an Elastic Compute Service (ECS) instance.
     * VPC_IDC: an on-premises database built in an Internet data center (IDC) in Virtual Private
     * Cloud (VPC).
     */
    readonly instanceSource: string | ros.IResolvable;

    /**
     * Property instanceType: The type of the database instance. Valid values: MySQL, SQLServer, PostgreSQL, Oracle, DRDS, OceanBase, Mongo, Redis
     */
    readonly instanceType: string | ros.IResolvable;

    /**
     * Property networkType: The network type of the database instance. Valid values:
     * CLASSIC
     * VPC
     */
    readonly networkType: string | ros.IResolvable;

    /**
     * Property port: The connection port of the database instance.
     */
    readonly port: number | ros.IResolvable;

    /**
     * Property queryTimeout: The timeout period for querying the database instance. Unit: seconds.
     */
    readonly queryTimeout: number | ros.IResolvable;

    /**
     * Property safeRule: The security rule of the database instance. Enter the name of the security rule for
     * your enterprise.
     * Note To query a specified security rule, log on to the DMS Enterprise console and choose
     * System Management > Security Rules. The security rule appears in the security rule
     * list.
     */
    readonly safeRule: string | ros.IResolvable;

    /**
     * Property dataLinkName: The name of the data link for cross-database query.
     */
    readonly dataLinkName?: string | ros.IResolvable;

    /**
     * Property ddlOnline: [Important] Specifies whether to enable the online data description language (DDL)
     * service. Currently, this service is available only for the MySQL and PolarDB databases.
     * 0: The service is disabled.
     * 1: The native online DDL service prevails.
     * 2: Data change without table locking provided by DMS prevails.
     */
    readonly ddlOnline?: number | ros.IResolvable;

    /**
     * Property ecsInstanceId: The ID of the ECS instance to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN.
     */
    readonly ecsInstanceId?: string | ros.IResolvable;

    /**
     * Property ecsRegion: The region where the database instance resides.
     * Note You must specify this parameter if the InstanceSource parameter is set to ECS_OWN or VPC_IDC.
     */
    readonly ecsRegion?: string | ros.IResolvable;

    /**
     * Property enableSellCommon: Whether the instance needs to enable the security collaboration function.
     * - Y: Enable.
     * - NULL or other: Not enable.
     */
    readonly enableSellCommon?: string | ros.IResolvable;

    /**
     * Property enableSellSitd: Y: enables the sensitive data protection feature
     * NULL or other: disables the sensitive data protection feature
     */
    readonly enableSellSitd?: string | ros.IResolvable;

    /**
     * Property enableSellStable: Whether the instance needs to enable the stable change function.
     * - Y: Enable.
     * - NULL or other: Do not enable.
     */
    readonly enableSellStable?: string | ros.IResolvable;

    /**
     * Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    readonly sid?: string | ros.IResolvable;

    /**
     * Property skipTest: Whether the instance ignores the test connectivity. The values are as follows:
     * - true: ignore
     * - false: do not ignore
     */
    readonly skipTest?: boolean | ros.IResolvable;

    /**
     * Property templateId: The ID of the classification template. You can call the ListClassificationTemplates operation to query the template ID.
     */
    readonly templateId?: number | ros.IResolvable;

    /**
     * Property templateType: The type of the classification template. You can call the ListClassificationTemplates operation to query the template type.
     */
    readonly templateType?: string | ros.IResolvable;

    /**
     * Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    readonly tid?: number | ros.IResolvable;

    /**
     * Property useDsql: Specifies whether to enable cross-database query for the database instance. Valid
     * values:
     * 0: disabled
     * 1: enabled
     */
    readonly useDsql?: number | ros.IResolvable;

    /**
     * Property useSsl: Select whether to enable SSL connection. When enabled, DMS will connect to the database via SSL. The premise of using this parameter is that the database has enabled SSL connection. Currently, the following options are supported:
     * - 0: Default value (DMS and database service automatically negotiate whether to enable it) The system will automatically identify whether the target database has enabled SSL connection. If the database has enabled SSL connection, DMS will connect to the database via SSL; if the database has not enabled SSL connection, it will connect in a normal way.
     * - 1: Enable SSL connection. If the database has not enabled SSL connection, this parameter is invalid.
     * - -1: Disable SSL connection.
     * Note:
     * - This configuration item only appears when the database is MySQL or Redis.
     * - SSL (Secure Sockets Layer) can encrypt network connections at the transport layer to improve the security and integrity of communication data, but it will increase the network connection response time.
     */
    readonly useSsl?: number | ros.IResolvable;

    /**
     * Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DMS::Instance2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance2
 */
export class Instance2 extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: Instance2Props;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Host: The endpoint of the database instance.
     */
    public readonly attrHost: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the database instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute Port: The connection port of the database instance.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: Instance2Props, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance2 = new RosInstance2(this, id,  {
            databasePassword: props.databasePassword,
            port: props.port,
            safeRule: props.safeRule,
            exportTimeout: props.exportTimeout,
            envType: props.envType,
            dbaId: props.dbaId,
            ecsRegion: props.ecsRegion,
            instanceAlias: props.instanceAlias,
            networkType: props.networkType,
            enableSellTrust: props.enableSellTrust,
            instanceType: props.instanceType,
            enableSellSitd: props.enableSellSitd,
            dataLinkName: props.dataLinkName,
            queryTimeout: props.queryTimeout,
            templateId: props.templateId,
            instanceSource: props.instanceSource,
            enableSellStable: props.enableSellStable,
            skipTest: props.skipTest,
            host: props.host,
            enableSellCommon: props.enableSellCommon,
            useSsl: props.useSsl,
            templateType: props.templateType,
            ddlOnline: props.ddlOnline,
            tid: props.tid,
            sid: props.sid,
            useDsql: props.useDsql,
            ecsInstanceId: props.ecsInstanceId,
            vpcId: props.vpcId,
            databaseUser: props.databaseUser,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance2;
        this.attrHost = rosInstance2.attrHost;
        this.attrInstanceId = rosInstance2.attrInstanceId;
        this.attrPort = rosInstance2.attrPort;
    }
}
