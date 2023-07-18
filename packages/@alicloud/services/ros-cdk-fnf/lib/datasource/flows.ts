import * as ros from '@alicloud/ros-cdk-core';
import { RosFlows } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlows as FlowsProperty };

/**
 * Properties for defining a `DATASOURCE::FNF::Flows`
 */
export interface FlowsProps {
}

/**
 * A ROS resource type:  `DATASOURCE::FNF::Flows`
 */
export class Flows extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute FlowNames: The list of flow names.
     */
    public readonly attrFlowNames: ros.IResolvable;

    /**
     * Attribute Flows: The details about flows.
     */
    public readonly attrFlows: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::FNF::Flows`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFlows = new RosFlows(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosFlows;
        this.attrFlowNames = rosFlows.attrFlowNames;
        this.attrFlows = rosFlows.attrFlows;
    }
}
