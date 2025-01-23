import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './dms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance
 */
export interface InstanceProps {

    /**
     * Property databasePassword: The logon password of the database instance.
     */
    readonly databasePassword: string | ros.IResolvable;

    /**
     * Property databaseUser: The logon username of the database instance.
     */
    readonly databaseUser: string | ros.IResolvable;

    /**
     * Property dbaUid: The Alibaba Cloud unique ID (UID) of the database administrator (DBA) of the database
     * instance.
     * Note To query the UID, log on to the DMS Enterprise console and choose System Management
     * > User Management.
     */
    readonly dbaUid: number | ros.IResolvable;

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
     * Property sid: The system ID (SID) of the database instance.
     * Note You must specify this parameter if the InstanceType parameter is set to PostgreSQL or Oracle.
     */
    readonly sid?: string | ros.IResolvable;

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
     * Property vpcId: The ID of the VPC to which the database instance belongs.
     * Note You must specify this parameter if the InstanceSource parameter is set to VPC_IDC.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Represents a `Instance`.
 */
export interface IInstance extends ros.IResource {
    readonly props: InstanceProps;

    /**
     * Attribute Host: The endpoint of the database instance.
     */
    readonly attrHost: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the database instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute Port: The connection port of the database instance.
     */
    readonly attrPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DMS::Instance`, which is used to register a database instance for your enterprise.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dms-instance
 */
export class Instance extends ros.Resource implements IInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Host: The endpoint of the database instance.
     */
    public readonly attrHost: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the database instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute Port: The connection port of the database instance.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInstance = new RosInstance(this, id,  {
            instanceSource: props.instanceSource,
            databasePassword: props.databasePassword,
            port: props.port,
            host: props.host,
            exportTimeout: props.exportTimeout,
            safeRule: props.safeRule,
            ddlOnline: props.ddlOnline,
            envType: props.envType,
            tid: props.tid,
            useDsql: props.useDsql,
            sid: props.sid,
            ecsInstanceId: props.ecsInstanceId,
            vpcId: props.vpcId,
            instanceAlias: props.instanceAlias,
            dbaUid: props.dbaUid,
            ecsRegion: props.ecsRegion,
            networkType: props.networkType,
            databaseUser: props.databaseUser,
            instanceType: props.instanceType,
            dataLinkName: props.dataLinkName,
            queryTimeout: props.queryTimeout,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrHost = rosInstance.attrHost;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrPort = rosInstance.attrPort;
    }
}
