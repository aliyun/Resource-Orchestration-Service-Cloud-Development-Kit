import * as ros from '@alicloud/ros-cdk-core';
import { RosSynDb } from './clickhouse.generated';
export { RosSynDb as SynDbProperty };
/**
 * Properties for defining a `ALIYUN::ClickHouse::SynDb`
 */
export interface SynDbProps {
    /**
     * Property ckPassword: The password of the database account
     */
    readonly ckPassword: string | ros.IResolvable;
    /**
     * Property ckUserName: The account of the clickhouse database.
     */
    readonly ckUserName: string | ros.IResolvable;
    /**
     * Property dbClusterId: Clickhouse cluster id.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * Property rdsId: The instance id of RDS.
     */
    readonly rdsId: string | ros.IResolvable;
    /**
     * Property rdsPassword: The password of the RDS database account.
     */
    readonly rdsPassword: string | ros.IResolvable;
    /**
     * Property rdsUserName: The account of the RDS database.
     */
    readonly rdsUserName: string | ros.IResolvable;
    /**
     * Property skipUnsupported: Skip unsupported table or not.
     */
    readonly skipUnsupported: boolean | ros.IResolvable;
    /**
     * Property synDbTables: The tables to syn.
     */
    readonly synDbTables: Array<RosSynDb.SynDbTablesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property clickhousePort: The port of clickhouse id.
     */
    readonly clickhousePort?: number | ros.IResolvable;
    /**
     * Property limitUpper: The maximum number of rows to sync per second.
     */
    readonly limitUpper?: number | ros.IResolvable;
    /**
     * Property rdsPort: The port of rds.
     */
    readonly rdsPort?: number | ros.IResolvable;
    /**
     * Property rdsVpcId: The vpc of rds.
     */
    readonly rdsVpcId?: string | ros.IResolvable;
    /**
     * Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.
     */
    readonly rdsVpcUrl?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ClickHouse::SynDb`
 */
export declare class SynDb extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DbClusterId: The id of clickhouse.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * Attribute RdsId: The id of RDS
     */
    readonly attrRdsId: ros.IResolvable;
    /**
     * Attribute SynDbs: Sync Dbs
     */
    readonly attrSynDbs: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ClickHouse::SynDb`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SynDbProps, enableResourcePropertyConstraint?: boolean);
}
