import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './appflow.generated';
// Generated from the AliCloud ROS Resource Specification
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
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property template: The template of the flow.
     */
    readonly template?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property templateId: The ID of the template.
     */
    readonly templateId?: string | ros.IResolvable;
}

/**
 * Represents a `Flow`.
 */
export interface IFlow extends ros.IResource {
    readonly props: FlowProps;

    /**
     * Attribute FlowId: The ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable | string;

    /**
     * Attribute WebhookAddress: The webhook address of the flow.
     */
    readonly attrWebhookAddress: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::Flow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export class Flow extends ros.Resource implements IFlow {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FlowProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FlowId: The ID of the flow.
     */
    public readonly attrFlowId: ros.IResolvable | string;

    /**
     * Attribute WebhookAddress: The webhook address of the flow.
     */
    public readonly attrWebhookAddress: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFlow = new RosFlow(this, id,  {
            flowId: props.flowId,
            parameters: props.parameters,
            flowDesc: props.flowDesc,
            flowName: props.flowName,
            launchFlow: props.launchFlow === undefined || props.launchFlow === null ? true : props.launchFlow,
            flowStatus: props.flowStatus === undefined || props.flowStatus === null ? 'Enable' : props.flowStatus,
            templateId: props.templateId,
            template: props.template,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlow;
        this.attrFlowId = rosFlow.attrFlowId;
        this.attrWebhookAddress = rosFlow.attrWebhookAddress;
    }
}
