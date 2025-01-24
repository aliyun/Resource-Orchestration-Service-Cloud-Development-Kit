import * as ros from '@alicloud/ros-cdk-core';
import { RosFlows } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlows as FlowsProperty };

/**
 * Properties for defining a `Flows`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export interface FlowsProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Flows`.
 */
export interface IFlows extends ros.IResource {
    readonly props: FlowsProps;

    /**
     * Attribute FlowNames: The list of flow names.
     */
    readonly attrFlowNames: ros.IResolvable | string;

    /**
     * Attribute Flows: The details about flows.
     */
    readonly attrFlows: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Flows`, which is used to query multiple flows at a time.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlows`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export class Flows extends ros.Resource implements IFlows {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: FlowsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FlowNames: The list of flow names.
     */
    public readonly attrFlowNames: ros.IResolvable | string;

    /**
     * Attribute Flows: The details about flows.
     */
    public readonly attrFlows: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosFlows = new RosFlows(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlows;
        this.attrFlowNames = rosFlows.attrFlowNames;
        this.attrFlows = rosFlows.attrFlows;
    }
}
