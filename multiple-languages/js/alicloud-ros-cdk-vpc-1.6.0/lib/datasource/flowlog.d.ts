import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLog } from './vpc.generated';
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
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `FlowLog`.
 */
export interface IFlowLog extends ros.IResource {
    readonly props: FlowLogProps;
    /**
     * Attribute AggregationInterval: Data aggregation interval.
     */
    readonly attrAggregationInterval: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: Business status.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CreateTime: the time of creation.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The Description of flow log.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowLogId: The flow log ID.
     */
    readonly attrFlowLogId: ros.IResolvable | string;
    /**
     * Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable | string;
    /**
     * Attribute LogStoreName: The log store name.
     */
    readonly attrLogStoreName: ros.IResolvable | string;
    /**
     * Attribute ProjectName: The project name.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute TrafficType: The traffic type.
     */
    readonly attrTrafficType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::FlowLog`, which is used to query a flow log by log ID.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export declare class FlowLog extends ros.Resource implements IFlowLog {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FlowLogProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AggregationInterval: Data aggregation interval.
     */
    readonly attrAggregationInterval: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: Business status.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CreateTime: the time of creation.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The Description of flow log.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowLogId: The flow log ID.
     */
    readonly attrFlowLogId: ros.IResolvable | string;
    /**
     * Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable | string;
    /**
     * Attribute LogStoreName: The log store name.
     */
    readonly attrLogStoreName: ros.IResolvable | string;
    /**
     * Attribute ProjectName: The project name.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute TrafficType: The traffic type.
     */
    readonly attrTrafficType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogProps, enableResourcePropertyConstraint?: boolean);
}
