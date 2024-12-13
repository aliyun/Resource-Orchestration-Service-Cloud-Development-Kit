import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlow as FlowProperty };

/**
 * Properties for defining a `Flow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export interface FlowProps {

    /**
     * Property flowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Flow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export class Flow extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the flow was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
     */
    public readonly attrDefinition: ros.IResolvable;

    /**
     * Attribute Description: The description of the flow.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute FlowId: The unique ID of the flow.
     */
    public readonly attrFlowId: ros.IResolvable;

    /**
     * Attribute FlowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    public readonly attrFlowName: ros.IResolvable;

    /**
     * Attribute LastModifiedTime: The time when the flow was last modified.
     */
    public readonly attrLastModifiedTime: ros.IResolvable;

    /**
     * Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
     */
    public readonly attrRoleArn: ros.IResolvable;

    /**
     * Attribute Type: The type of the flow. Valid values are FDL or DEFAULT.
     */
    public readonly attrType: ros.IResolvable;

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
            flowName: props.flowName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlow;
        this.attrCreateTime = rosFlow.attrCreateTime;
        this.attrDefinition = rosFlow.attrDefinition;
        this.attrDescription = rosFlow.attrDescription;
        this.attrFlowId = rosFlow.attrFlowId;
        this.attrFlowName = rosFlow.attrFlowName;
        this.attrLastModifiedTime = rosFlow.attrLastModifiedTime;
        this.attrRoleArn = rosFlow.attrRoleArn;
        this.attrType = rosFlow.attrType;
    }
}
