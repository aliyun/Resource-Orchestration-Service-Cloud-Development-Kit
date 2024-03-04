import * as ros from '@alicloud/ros-cdk-core';
import { RosFlows } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Flows extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute FlowNames: The list of flow names.
     */
    public readonly attrFlowNames: ros.IResolvable;

    /**
     * Attribute Flows: The details about flows.
     */
    public readonly attrFlows: ros.IResolvable;

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
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosFlows;
        this.attrFlowNames = rosFlows.attrFlowNames;
        this.attrFlows = rosFlows.attrFlows;
    }
}
