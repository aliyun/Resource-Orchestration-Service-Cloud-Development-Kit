import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './fnf.generated';
export { RosFlow as FlowProperty };
/**
 * Properties for defining a `Flow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-flow
 */
export interface FlowProps {
    /**
     * Property definition: The definition of the created flow following the FDL syntax standard.
     */
    readonly definition: string | ros.IResolvable;
    /**
     * Property name: The name of the flow created. This name is unique under the account.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property description: Create a description of the flow.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    readonly requestId?: string | ros.IResolvable;
    /**
     * Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    readonly roleArn?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FNF::Flow`, which is used to create a flow.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-flow
 */
export declare class Flow extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreatedTime: Flow creation time.
     */
    readonly attrCreatedTime: ros.IResolvable;
    /**
     * Attribute Id: The unique ID of the flow.
     */
    readonly attrId: ros.IResolvable;
    /**
     * Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    readonly attrLastModifiedTime: ros.IResolvable;
    /**
     * Attribute Name: The name of the flow created.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProps, enableResourcePropertyConstraint?: boolean);
}
