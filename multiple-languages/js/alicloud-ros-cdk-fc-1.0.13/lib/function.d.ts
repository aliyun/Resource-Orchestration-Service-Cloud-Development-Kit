import * as ros from '@alicloud/ros-cdk-core';
import { RosFunction } from './fc.generated';
export { RosFunction as FunctionProperty };
/**
 * Properties for defining a `ALIYUN::FC::Function`
 */
export interface FunctionProps {
    /**
     * Property functionName: Function name
     */
    readonly functionName: string | ros.IResolvable;
    /**
     * Property handler: The function execution entry point.
     */
    readonly handler: string | ros.IResolvable;
    /**
     * Property runtime: The function runtime environment. Supporting nodejs6, nodejs8, nodejs10, nodejs12, python2.7, python3, java8, custom, custom-container and so on
     */
    readonly runtime: string | ros.IResolvable;
    /**
     * Property serviceName: Service name
     */
    readonly serviceName: string | ros.IResolvable;
    /**
     * Property asyncConfiguration: Configuration of asynchronous function calls
     */
    readonly asyncConfiguration?: RosFunction.AsyncConfigurationProperty | ros.IResolvable;
    /**
     * Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to. The default value is 9000
     */
    readonly caPort?: number | ros.IResolvable;
    /**
     * Property code: The code that contains the function implementation.
     */
    readonly code?: RosFunction.CodeProperty | ros.IResolvable;
    /**
     * Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;
    /**
     * Property description: Function description
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    readonly environmentVariables?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property initializationTimeout: the max execution time of the initializer, in second
     */
    readonly initializationTimeout?: number | ros.IResolvable;
    /**
     * Property initializer: the entry point of the initializer
     */
    readonly initializer?: string | ros.IResolvable;
    /**
     * Property instanceConcurrency: Function instance concurrency. Value can be between 1 to 100.
     */
    readonly instanceConcurrency?: number | ros.IResolvable;
    /**
     * Property instanceType: Instance type. Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
     */
    readonly instanceType?: string | ros.IResolvable;
    /**
     * Property memorySize: The amount of memory that’s used to run function, in MB. Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
     */
    readonly memorySize?: number | ros.IResolvable;
    /**
     * Property timeout: The maximum time duration a function can run, in seconds. After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
     */
    readonly timeout?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::FC::Function`
 */
export declare class Function extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ARN: The ARN for ALIYUN::ROS::CustomResource
     */
    readonly attrArn: ros.IResolvable;
    /**
     * Attribute FunctionId: The function ID
     */
    readonly attrFunctionId: ros.IResolvable;
    /**
     * Attribute FunctionName: The function name
     */
    readonly attrFunctionName: ros.IResolvable;
    /**
     * Attribute ServiceId: The service ID
     */
    readonly attrServiceId: ros.IResolvable;
    /**
     * Attribute ServiceName: The service name
     */
    readonly attrServiceName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionProps, enableResourcePropertyConstraint?: boolean);
}
