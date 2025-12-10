import * as ros from '@alicloud/ros-cdk-core';
import { RosDBClusters } from './clickhouse.generated';
// Generated from the AliCloud ROS Resource Specification
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

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `DBClusters`.
 */
export interface IDBClusters extends ros.IResource {
    readonly props: DBClustersProps;

    /**
     * Attribute DBClusterIds: The list of db cluster IDs.
     */
    readonly attrDbClusterIds: ros.IResolvable | string;

    /**
     * Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ClickHouse::DBClusters`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
 */
export class DBClusters extends ros.Resource implements IDBClusters {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBClustersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBClusterIds: The list of db cluster IDs.
     */
    public readonly attrDbClusterIds: ros.IResolvable | string;

    /**
     * Attribute DBClusters: The list of db clusters.
     */
    public readonly attrDbClusters: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBClusters = new RosDBClusters(this, id,  {
            dbClusterName: props.dbClusterName,
            dbClusterId: props.dbClusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBClusters;
        this.attrDbClusterIds = rosDBClusters.attrDbClusterIds;
        this.attrDbClusters = rosDBClusters.attrDbClusters;
    }
}
