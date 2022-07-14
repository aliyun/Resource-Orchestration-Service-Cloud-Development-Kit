import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodes } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
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

    /**
     * Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
     */
    readonly imciSwitch?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBNodes`
 */
export class DBNodes extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    public readonly attrDbNodeIds: ros.IResolvable;

    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    public readonly attrOrderIds: ros.IResolvable;

    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBNodes = new RosDBNodes(this, id,  {
            amount: props.amount,
            dbClusterId: props.dbClusterId,
            imciSwitch: props.imciSwitch,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBNodes;
        this.attrDbNodeIds = rosDBNodes.attrDbNodeIds;
        this.attrOrderIds = rosDBNodes.attrOrderIds;
    }
}
