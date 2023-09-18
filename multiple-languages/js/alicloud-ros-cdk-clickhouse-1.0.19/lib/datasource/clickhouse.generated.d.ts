import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::ClickHouse::DBClusters`
 */
export interface RosDBClustersProps {
    /**
     * @Property dbClusterId: Instance ID.
     */
    readonly dbClusterId?: string | ros.IResolvable;
    /**
     * @Property dbClusterName: The cluster description information.
     */
    readonly dbClusterName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::ClickHouse::DBClusters`
 */
export declare class RosDBClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ClickHouse::DBClusters";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBClusterIds: The list of db cluster IDs.
     */
    readonly attrDbClusterIds: ros.IResolvable;
    /**
     * @Attribute DBClusters: The list of db clusters.
     */
    readonly attrDbClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: Instance ID.
     */
    dbClusterId: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterName: The cluster description information.
     */
    dbClusterName: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::ClickHouse::DBClusters`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClustersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
