import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './fnf.generated';
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
 * Represents a `Flow`.
 */
export interface IFlow extends ros.IResource {
    readonly props: FlowProps;
    /**
     * Attribute CreateTime: The time when the flow was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
     */
    readonly attrDefinition: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the flow.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowId: The unique ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable | string;
    /**
     * Attribute FlowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    readonly attrFlowName: ros.IResolvable | string;
    /**
     * Attribute LastModifiedTime: The time when the flow was last modified.
     */
    readonly attrLastModifiedTime: ros.IResolvable | string;
    /**
     * Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
     */
    readonly attrRoleArn: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the flow. Valid values are FDL or DEFAULT.
     */
    readonly attrType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::FNF::Flow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export declare class Flow extends ros.Resource implements IFlow {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FlowProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the flow was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
     */
    readonly attrDefinition: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the flow.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowId: The unique ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable | string;
    /**
     * Attribute FlowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    readonly attrFlowName: ros.IResolvable | string;
    /**
     * Attribute LastModifiedTime: The time when the flow was last modified.
     */
    readonly attrLastModifiedTime: ros.IResolvable | string;
    /**
     * Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
     */
    readonly attrRoleArn: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the flow. Valid values are FDL or DEFAULT.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProps, enableResourcePropertyConstraint?: boolean);
}
