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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::FlowLog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowLog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-flowlog
 */
export declare class FlowLog extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowLogProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AggregationInterval: Data aggregation interval.
     */
    readonly attrAggregationInterval: ros.IResolvable;
    /**
     * Attribute BusinessStatus: Business status.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * Attribute CreateTime: the time of creation.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: The Description of flow log.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute FlowLogId: The flow log ID.
     */
    readonly attrFlowLogId: ros.IResolvable;
    /**
     * Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable;
    /**
     * Attribute LogStoreName: The log store name.
     */
    readonly attrLogStoreName: ros.IResolvable;
    /**
     * Attribute ProjectName: The project name.
     */
    readonly attrProjectName: ros.IResolvable;
    /**
     * Attribute ResourceId: The resource id.
     */
    readonly attrResourceId: ros.IResolvable;
    /**
     * Attribute ResourceType: The resource type.
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * Attribute TrafficType: The traffic type.
     */
    readonly attrTrafficType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogProps, enableResourcePropertyConstraint?: boolean);
}
