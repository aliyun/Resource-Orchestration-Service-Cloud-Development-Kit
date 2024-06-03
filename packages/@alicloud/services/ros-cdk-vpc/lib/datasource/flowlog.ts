import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLog } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlowLog as FlowLogProperty };

/**
 * Properties for defining a `FlowLog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export interface FlowLogProps {

    /**
     * Property flowLogId: The flow log ID.
     */
    readonly flowLogId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::FlowLog`, which is used to query a flow log by log ID.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export class FlowLog extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowLogProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AggregationInterval: Data aggregation interval.
     */
    public readonly attrAggregationInterval: ros.IResolvable;

    /**
     * Attribute BusinessStatus: Business status.
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * Attribute CreateTime: the time of creation.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The Description of flow log.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute FlowLogId: The flow log ID.
     */
    public readonly attrFlowLogId: ros.IResolvable;

    /**
     * Attribute FlowLogName: The flow log name.
     */
    public readonly attrFlowLogName: ros.IResolvable;

    /**
     * Attribute LogStoreName: The log store name.
     */
    public readonly attrLogStoreName: ros.IResolvable;

    /**
     * Attribute ProjectName: The project name.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute TrafficType: The traffic type.
     */
    public readonly attrTrafficType: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFlowLog = new RosFlowLog(this, id,  {
            flowLogId: props.flowLogId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlowLog;
        this.attrAggregationInterval = rosFlowLog.attrAggregationInterval;
        this.attrBusinessStatus = rosFlowLog.attrBusinessStatus;
        this.attrCreateTime = rosFlowLog.attrCreateTime;
        this.attrDescription = rosFlowLog.attrDescription;
        this.attrFlowLogId = rosFlowLog.attrFlowLogId;
        this.attrFlowLogName = rosFlowLog.attrFlowLogName;
        this.attrLogStoreName = rosFlowLog.attrLogStoreName;
        this.attrProjectName = rosFlowLog.attrProjectName;
        this.attrResourceId = rosFlowLog.attrResourceId;
        this.attrResourceType = rosFlowLog.attrResourceType;
        this.attrTrafficType = rosFlowLog.attrTrafficType;
    }
}
