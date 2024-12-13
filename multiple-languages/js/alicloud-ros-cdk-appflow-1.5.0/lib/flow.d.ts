import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './appflow.generated';
export { RosFlow as FlowProperty };
/**
 * Properties for defining a `Flow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export interface FlowProps {
    /**
     * Property flowName: The name of the flow.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * Property flowDesc: The description of the flow.
     */
    readonly flowDesc?: string | ros.IResolvable;
    /**
     * Property flowId: The ID of the flow.
     */
    readonly flowId?: string | ros.IResolvable;
    /**
     * Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    readonly flowStatus?: string | ros.IResolvable;
    /**
     * Property launchFlow: Whether to launch the flow.
     */
    readonly launchFlow?: boolean | ros.IResolvable;
    /**
     * Property parameters: The parameters of the flow.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property template: The template of the flow.
     */
    readonly template?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property templateId: The ID of the template.
     */
    readonly templateId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::Flow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export declare class Flow extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute FlowId: The ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable;
    /**
     * Attribute WebhookAddress: The webhook address of the flow.
     */
    readonly attrWebhookAddress: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProps, enableResourcePropertyConstraint?: boolean);
}
