import * as ros from '@ros-cdk/core';
import { RosFlow } from './fnf.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFlow as FlowProperty };

/**
 * Properties for defining a `ALIYUN::FNF::Flow`
 */
export interface FlowProps {

    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    readonly definition: string;

    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    readonly name: string;

    /**
     * @Property description: Create a description of the flow.
     */
    readonly description?: string;

    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    readonly requestId?: string;

    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    readonly roleArn?: string;
}

/**
 * A ROS resource type:  `ALIYUN::FNF::Flow`
 */
export class Flow extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CreatedTime: Flow creation time.
     */
    public readonly attrCreatedTime: any;

    /**
     * @Attribute Id: The unique ID of the flow.
     */
    public readonly attrId: any;

    /**
     * @Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    public readonly attrLastModifiedTime: any;

    /**
     * @Attribute Name: The name of the flow created.
     */
    public readonly attrName: any;

    /**
     * Create a new `ALIYUN::FNF::Flow`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFlow = new RosFlow(this, id,  {
            description: props.description,
            requestId: props.requestId,
            definition: props.definition,
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
