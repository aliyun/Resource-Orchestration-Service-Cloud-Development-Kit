import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusters } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBClusters as DBClustersProperty };

/**
 * Properties for defining a `DATASOURCE::ClickHouse::DBClusters`
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
 * A ROS resource type:  `DATASOURCE::ClickHouse::DBClusters`
 */
export class DBClusters extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DBClusterIds: The list of db cluster IDs.
     */
    public readonly attrDbClusterIds: ros.IResolvable;

    /**
     * Attribute DBClusters: The list of db clusters.
     */
    public readonly attrDbClusters: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::ClickHouse::DBClusters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBClusters = new RosDBClusters(this, id,  {
            dbClusterName: props.dbClusterName,
            dbClusterId: props.dbClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBClusters;
        this.attrDbClusterIds = rosDBClusters.attrDbClusterIds;
        this.attrDbClusters = rosDBClusters.attrDbClusters;
    }
}
