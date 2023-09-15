import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusters } from './polardb.generated';
export { RosDBClusters as DBClustersProperty };
/**
 * Properties for defining a `DATASOURCE::POLARDB::DBClusters`
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
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::POLARDB::DBClusters`
 */
export declare class DBClusters extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable;
    /**
     * Attribute DbClusterIds: The ID of the cluster.
     */
    readonly attrDbClusterIds: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::POLARDB::DBClusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DBClustersProps, enableResourcePropertyConstraint?: boolean);
}
