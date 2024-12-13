import * as ros from '@alicloud/ros-cdk-core';
import { RosFlow } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property executionMode: The execution mode of the flow.
     */
    readonly executionMode?: string | ros.IResolvable;

    /**
     * Property externalStorageLocation: The external storage location for the flow.
     */
    readonly externalStorageLocation?: string | ros.IResolvable;

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
export class Flow extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: FlowProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreatedTime: Flow creation time.
     */
    public readonly attrCreatedTime: ros.IResolvable;

    /**
     * Attribute Id: The unique ID of the flow.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    public readonly attrLastModifiedTime: ros.IResolvable;

    /**
     * Attribute Name: The name of the flow created.
     */
    public readonly attrName: ros.IResolvable;

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
            description: props.description,
            requestId: props.requestId,
            definition: props.definition,
            executionMode: props.executionMode,
            externalStorageLocation: props.externalStorageLocation,
            roleArn: props.roleArn,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFlow;
        this.attrCreatedTime = rosFlow.attrCreatedTime;
        this.attrId = rosFlow.attrId;
        this.attrLastModifiedTime = rosFlow.attrLastModifiedTime;
        this.attrName = rosFlow.attrName;
    }
}
