import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusters } from './clickhouse.generated';
export { RosDBClusters as DBClustersProperty };
/**
 * Properties for defining a `DBClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export interface DBClustersProps {
    /**
     * Property dbClusterId: Instance ID.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * Property dbClusterName: The cluster description information.
     */
    readonly dbClusterName?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBClusters`, which is used to query the information about ApsaraDB for ClickHouse clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export declare class DBClusters extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBClustersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBClusterIds: The list of db cluster IDs.
     */
    readonly attrDbClusterIds: ros.IResolvable;
    /**
     * Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DBClustersProps, enableResourcePropertyConstraint?: boolean);
}
