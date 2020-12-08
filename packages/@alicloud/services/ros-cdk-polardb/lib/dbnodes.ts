import * as ros from '@alicloud/ros-cdk-core';
import { RosDBNodes } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBNodes as DBNodesProperty };

/**
 * Properties for defining a `ALIYUN::POLARDB::DBNodes`
 */
export interface DBNodesProps {

    /**
     * @Property amount: Number of nodes to be added to cluster.
     */
    readonly amount: number;

    /**
     * @Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
     */
    readonly dbClusterId: string;
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
     * @Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    public readonly attrDbNodeIds: any;

    /**
     * @Attribute OrderIds: The order ID list of added cluster nodes.
     */
    public readonly attrOrderIds: any;

    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBNodesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBNodes = new RosDBNodes(this, id,  {
            amount: props.amount,
            dbClusterId: props.dbClusterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBNodes;
        this.attrDbNodeIds = rosDBNodes.attrDbNodeIds;
        this.attrOrderIds = rosDBNodes.attrOrderIds;
    }
}
