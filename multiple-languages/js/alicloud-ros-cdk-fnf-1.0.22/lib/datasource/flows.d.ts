import * as ros from '@alicloud/ros-cdk-core';
import { RosFlows } from './fnf.generated';
export { RosFlows as FlowsProperty };
/**
 * Properties for defining a `Flows`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export interface FlowsProps {
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Flows`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlows`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export declare class Flows extends ros.Resource {
    /**
     * Attribute FlowNames: The list of flow names.
     */
    readonly attrFlowNames: ros.IResolvable;
    /**
     * Attribute Flows: The details about flows.
     */
    readonly attrFlows: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: FlowsProps, enableResourcePropertyConstraint?: boolean);
}
