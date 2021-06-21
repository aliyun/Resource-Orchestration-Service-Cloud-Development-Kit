import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowLog } from './vpc.generated';
export { RosFlowLog as FlowLogProperty };
/**
 * Properties for defining a `ALIYUN::VPC::FlowLog`
 */
export interface FlowLogProps {
    /**
     * Property logStoreName: The log store name.
     */
    readonly logStoreName: string | ros.IResolvable;
    /**
     * Property projectName: The project name.
     */
    readonly projectName: string | ros.IResolvable;
    /**
     * Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;
    /**
     * Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * Property trafficType: The traffic type.
     */
    readonly trafficType: string | ros.IResolvable;
    /**
     * Property description: The Description of flow log.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property flowLogName: The flow log name.
     */
    readonly flowLogName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::FlowLog`
 */
export declare class FlowLog extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::FlowLog`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowLogProps, enableResourcePropertyConstraint?: boolean);
}
