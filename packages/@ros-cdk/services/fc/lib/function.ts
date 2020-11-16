import * as ros from '@ros-cdk/core';
import { RosFunction } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosFunction as FunctionProperty };

/**
 * Properties for defining a `ALIYUN::FC::Function`
 */
export interface FunctionProps {

    /**
     * @Property code: The code that contains the function implementation.
     */
    readonly code: RosFunction.CodeProperty | ros.IResolvable;

    /**
     * @Property functionName: Function name
     */
    readonly functionName: string;

    /**
     * @Property handler: The function execution entry point.
     */
    readonly handler: string;

    /**
     * @Property runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8 and so on
     */
    readonly runtime: string;

    /**
     * @Property serviceName: Service name
     */
    readonly serviceName: string;

    /**
     * @Property description: Function description
     */
    readonly description?: string;

    /**
     * @Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property initializationTimeout: the max execution time of the initializer, in second
     */
    readonly initializationTimeout?: number;

    /**
     * @Property initializer: the entry point of the initializer
     */
    readonly initializer?: string;

    /**
     * @Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
     */
    readonly instanceConcurrency?: number;

    /**
     * @Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
     */
    readonly memorySize?: number;

    /**
     * @Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 600 seconds.
     */
    readonly timeout?: number;
}

/**
 * A ROS resource type:  `ALIYUN::FC::Function`
 */
export class Function extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute ARN: The ARN for ALIYUN::ROS::CustomResource
     */
    public readonly attrArn: any;

    /**
     * @Attribute FunctionId: The function ID
     */
    public readonly attrFunctionId: any;

    /**
     * @Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: any;

    /**
     * @Attribute ServiceName: The service name
     */
    public readonly attrServiceName: any;

    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFunction = new RosFunction(this, id,  {
            functionName: props.functionName,
            memorySize: props.memorySize ? props.memorySize : 128,
            runtime: props.runtime,
            environmentVariables: props.environmentVariables,
            description: props.description,
            initializer: props.initializer,
            serviceName: props.serviceName,
            initializationTimeout: props.initializationTimeout,
            timeout: props.timeout ? props.timeout : 3,
            handler: props.handler,
            instanceConcurrency: props.instanceConcurrency,
            code: props.code,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunction;
        this.attrArn = rosFunction.attrArn;
        this.attrFunctionId = rosFunction.attrFunctionId;
        this.attrFunctionName = rosFunction.attrFunctionName;
        this.attrServiceName = rosFunction.attrServiceName;
    }
}
