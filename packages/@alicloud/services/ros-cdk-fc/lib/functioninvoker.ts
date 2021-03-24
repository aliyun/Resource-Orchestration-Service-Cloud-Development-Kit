import * as ros from '@alicloud/ros-cdk-core';
import { RosFunctionInvoker } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFunctionInvoker as FunctionInvokerProperty };

/**
 * Properties for defining a `ALIYUN::FC::FunctionInvoker`
 */
export interface FunctionInvokerProps {

    /**
     * Property functionName: Function name
     */
    readonly functionName: string;

    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string;

    /**
     * Property async: Invocation type, Sync or Async. Defaults to Sync.
     */
    readonly async?: boolean | ros.IResolvable;

    /**
     * Property checkError: Whether check error for function invocation result.
     * If set true and function invocation result has error, the resource creation will be regard as failed.
     * Default is false
     */
    readonly checkError?: boolean | ros.IResolvable;

    /**
     * Property event: This value is passed to function as utf-8 encoded string.It’s function’s responsibility to interpret the value.
     * If the value needs to be binary, encode it via base64 before passing to this property.
     */
    readonly event?: string;

    /**
     * Property executeVersion: If the property is not specified for creation and update, the function will not be invoked. The change of the property leads to the invoke of the function.
     */
    readonly executeVersion?: number;

    /**
     * Property qualifier: service version, can be versionId or aliasName
     */
    readonly qualifier?: string;

    /**
     * Property serviceRegionId: Which region service belongs to.
     */
    readonly serviceRegionId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::FC::FunctionInvoker`
 */
export class FunctionInvoker extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute Result: Depends on result type:
NoResult: Async invoke has no result.
Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
Failure: Error Message.
     */
    public readonly attrResult: any;

    /**
     * Attribute ResultType: Result type:
NoResult: Async invoke has no result.
Success: Sync invoke succeeds.
Failure: Sync invoke fails.
     */
    public readonly attrResultType: any;

    /**
     * Create a new `ALIYUN::FC::FunctionInvoker`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionInvokerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFunctionInvoker = new RosFunctionInvoker(this, id,  {
            functionName: props.functionName,
            executeVersion: props.executeVersion,
            serviceRegionId: props.serviceRegionId,
            serviceName: props.serviceName,
            async: props.async ? props.async : false,
            event: props.event,
            qualifier: props.qualifier,
            checkError: props.checkError,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunctionInvoker;
        this.attrResult = rosFunctionInvoker.attrResult;
        this.attrResultType = rosFunctionInvoker.attrResultType;
    }
}
