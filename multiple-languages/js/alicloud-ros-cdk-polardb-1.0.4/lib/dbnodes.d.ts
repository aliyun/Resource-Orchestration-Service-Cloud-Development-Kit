import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodes } from './polardb.generated';
export { RosDBNodes as DBNodesProperty };
/**
 * Properties for defining a `ALIYUN::POLARDB::DBNodes`
 */
export interface DBNodesProps {
    /**
     * Property amount: Number of nodes to be added to cluster.
     */
    readonly amount: number | ros.IResolvable;
    /**
     * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    readonly dbClusterId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBNodes`
 */
export declare class DBNodes extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    readonly attrDbNodeIds: ros.IResolvable;
    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    readonly attrOrderIds: ros.IResolvable;
    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodesProps, enableResourcePropertyConstraint?: boolean);
}
