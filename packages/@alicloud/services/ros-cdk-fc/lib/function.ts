import * as ros from '@alicloud/ros-cdk-core';
import { RosFunction } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property runtime: The function runtime environment. Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
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
     * Property cpu: The number of vCPUs of the function. The value must be a multiple of 0.05.
     */
    readonly cpu?: number | ros.IResolvable;

    /**
     * Property customContainerConfig: Custom container runtime related configuration. After configuration, the function can be replaced with a custom container to execute the function
     */
    readonly customContainerConfig?: RosFunction.CustomContainerConfigProperty | ros.IResolvable;

    /**
     * Property customDns: The custom DNS configurations of the function.
     */
    readonly customDns?: RosFunction.CustomDNSProperty | ros.IResolvable;

    /**
     * Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.
     */
    readonly customHealthCheckConfig?: RosFunction.CustomHealthCheckConfigProperty | ros.IResolvable;

    /**
     * Property customRuntimeConfig: Custom runtime related configuration.
     */
    readonly customRuntimeConfig?: RosFunction.CustomRuntimeConfigProperty | ros.IResolvable;

    /**
     * Property description: Function description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property diskSize: The disk size of the function. Unit: MB. Valid values: 512 and 10240.
     */
    readonly diskSize?: number | ros.IResolvable;

    /**
     * Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
     */
    readonly environmentVariables?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property gpuMemorySize: The GPU memory capacity for the function. Unit: MB. The value must be a multiple of 1,024.
     */
    readonly gpuMemorySize?: number | ros.IResolvable;

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
     * Property instanceLifecycleConfig: The configuration of the instance lifecycle function.
     */
    readonly instanceLifecycleConfig?: RosFunction.InstanceLifecycleConfigProperty | ros.IResolvable;

    /**
     * Property instanceSoftConcurrency: The soft concurrency of the instance. You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
     */
    readonly instanceSoftConcurrency?: number | ros.IResolvable;

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
export class Function extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ARN: The ARN for ALIYUN::ROS::CustomResource
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * Attribute FunctionId: The function ID
     */
    public readonly attrFunctionId: ros.IResolvable;

    /**
     * Attribute FunctionName: The function name
     */
    public readonly attrFunctionName: ros.IResolvable;

    /**
     * Attribute ServiceId: The service ID
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * Attribute ServiceName: The service name
     */
    public readonly attrServiceName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::FC::Function`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FunctionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosFunction = new RosFunction(this, id,  {
            memorySize: props.memorySize === undefined || props.memorySize === null ? 128 : props.memorySize,
            description: props.description,
            timeout: props.timeout === undefined || props.timeout === null ? 3 : props.timeout,
            instanceLifecycleConfig: props.instanceLifecycleConfig,
            handler: props.handler,
            cpu: props.cpu,
            customHealthCheckConfig: props.customHealthCheckConfig,
            customContainerConfig: props.customContainerConfig,
            code: props.code,
            asyncConfiguration: props.asyncConfiguration,
            caPort: props.caPort === undefined || props.caPort === null ? 9000 : props.caPort,
            functionName: props.functionName,
            runtime: props.runtime,
            environmentVariables: props.environmentVariables,
            customRuntimeConfig: props.customRuntimeConfig,
            initializationTimeout: props.initializationTimeout,
            serviceName: props.serviceName,
            initializer: props.initializer,
            gpuMemorySize: props.gpuMemorySize,
            diskSize: props.diskSize,
            customDns: props.customDns,
            instanceConcurrency: props.instanceConcurrency,
            instanceType: props.instanceType,
            instanceSoftConcurrency: props.instanceSoftConcurrency,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosFunction;
        this.attrArn = rosFunction.attrArn;
        this.attrFunctionId = rosFunction.attrFunctionId;
        this.attrFunctionName = rosFunction.attrFunctionName;
        this.attrServiceId = rosFunction.attrServiceId;
        this.attrServiceName = rosFunction.attrServiceName;
    }
}
