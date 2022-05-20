import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './fnf.generated';
export { RosFlow as FlowProperty };
/**
 * Properties for defining a `ALIYUN::FNF::Flow`
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
 * A ROS resource type:  `ALIYUN::FNF::Flow`
 */
export declare class Flow extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::FNF::Flow`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=flow.d.ts.map