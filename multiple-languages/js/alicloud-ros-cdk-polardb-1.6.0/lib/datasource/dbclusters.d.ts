import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusters } from './polardb.generated';
export { RosDBClusters as DBClustersProperty };
/**
 * Properties for defining a `DBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
 */
export interface DBClustersProps {
    /**
     * Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * Property dbType: The database engine that the cluster runs.
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * Property dbVersion: The version of the database engine that the cluster runs.
     * The range of the MySQL version number is as follows:
     * *** 5.6 * * *
     * *** 5.7 * * *
     * *** 8.0 * * *
     * The value range of PostgreSQL version number is as follows:
     * *** 11 * * *
     * *** 14 * * *
     * The Oracle version number is 11.
     */
    readonly dbVersion?: string | ros.IResolvable;
    /**
     * Property description: The description of the cluster.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property expired: Indicates whether the cluster has expired.
     * Valid values:
     * true
     * false
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `DBClusters`.
 */
export interface IDBClusters extends ros.IResource {
    readonly props: DBClustersProps;
    /**
     * Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable | string;
    /**
     * Attribute DbClusterIds: The ID of the cluster.
     */
    readonly attrDbClusterIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::POLARDB::DBClusters`, which is used to query the information about PolarDB clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbclusters
 */
export declare class DBClusters extends ros.Resource implements IDBClusters {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBClustersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable | string;
    /**
     * Attribute DbClusterIds: The ID of the cluster.
     */
    readonly attrDbClusterIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DBClustersProps, enableResourcePropertyConstraint?: boolean);
}
