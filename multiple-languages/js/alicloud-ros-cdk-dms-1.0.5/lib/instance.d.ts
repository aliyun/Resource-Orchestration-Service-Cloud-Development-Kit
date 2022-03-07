import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './dms.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::DMS::Instance`
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
     * Property tid: The ID of the tenant.
     * Note To query the ID, log on to the DMS Enterprise console and choose System Management
     * > Instance Management or System Management > User Management. The ID of the tenant
     * appears in the Service Specification section.
     */
    readonly tid: number | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::DMS::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Host: The endpoint of the database instance.
     */
    readonly attrHost: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the database instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute Port: The connection port of the database instance.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DMS::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
