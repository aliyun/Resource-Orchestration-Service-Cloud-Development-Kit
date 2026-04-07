import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodes } from './polardb.generated';
export { RosDBNodes as DBNodesProperty };
/**
 * Properties for defining a `DBNodes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
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
    /**
     * Property dbNodeType: Node type. Ranges: RO|STANDBY|DLNode|RW
     */
    readonly dbNodeType?: string | ros.IResolvable;
    /**
     * Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
     */
    readonly endpointBindList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    readonly imciSwitch?: string | ros.IResolvable;
    /**
     * Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
     */
    readonly plannedEndTime?: string | ros.IResolvable;
    /**
     * Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period). The format is YYYY-MM-DDThh:mm:ssZ (UTC).
     */
    readonly plannedStartTime?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `DBNodes`.
 */
export interface IDBNodes extends ros.IResource {
    readonly props: DBNodesProps;
    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    readonly attrDbNodeIds: ros.IResolvable | string;
    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    readonly attrOrderIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::DBNodes`, which is used to add nodes to a PolarDB cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBNodes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbnodes
 */
export declare class DBNodes extends ros.Resource implements IDBNodes {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DBNodesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    readonly attrDbNodeIds: ros.IResolvable | string;
    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    readonly attrOrderIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodesProps, enableResourcePropertyConstraint?: boolean);
}
