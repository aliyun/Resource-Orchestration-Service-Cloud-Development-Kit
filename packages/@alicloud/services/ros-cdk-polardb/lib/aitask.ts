import * as ros from '@alicloud/ros-cdk-core';
import { RosAITask } from './polardb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAITask as AITaskProperty };

/**
 * Properties for defining a `AITask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
export interface AITaskProps {

    /**
     * Property dbClusterId: The ID of the DB cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;

    /**
     * Property password: The password of the database account that enables the PolarDB for AI function is required.
     */
    readonly password: string | ros.IResolvable;

    /**
     * Property username: The database account that enables the PolarDB for AI function is required.
     */
    readonly username: string | ros.IResolvable;

    /**
     * Property nodeType: The type of the node. Valid values:
     * DLNode: AI node(default).
     * SearchNode: Search ai node.
     */
    readonly nodeType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::POLARDB::AITask`DATASOURCE::POLARDB::DBNodeClasses is used to query the available resources of a PolarDB cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAITask`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-aitask
 */
export class AITask extends ros.Resource {

    /**
     * Attribute DBClusterId: The ID of the DB cluster.
     */
    public readonly attrDbClusterId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AITaskProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAITask = new RosAITask(this, id,  {
            username: props.username,
            nodeType: props.nodeType === undefined || props.nodeType === null ? 'DLNode' : props.nodeType,
            dbClusterId: props.dbClusterId,
            password: props.password,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAITask;
        this.attrDbClusterId = rosAITask.attrDbClusterId;
    }
}
