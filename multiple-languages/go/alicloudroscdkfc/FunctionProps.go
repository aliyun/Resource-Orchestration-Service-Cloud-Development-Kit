package alicloudroscdkfc


// Properties for defining a `Function`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
type FunctionProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property handler: The function execution entry point.
	Handler interface{} `field:"required" json:"handler" yaml:"handler"`
	// Property runtime: The function runtime environment.
	//
	// Supporting nodejs16、nodejs14、nodejs12、nodejs10、nodejs8、nodejs6、nodejs4.4、python3.10、python3.9、python3、python2.7、java11、java8、go1、php7.2、dotnetcore3.1、dotnetcore2.1、custom.debian10、custom和custom-container and so on
	Runtime interface{} `field:"required" json:"runtime" yaml:"runtime"`
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property asyncConfiguration: Configuration of asynchronous function calls.
	AsyncConfiguration interface{} `field:"optional" json:"asyncConfiguration" yaml:"asyncConfiguration"`
	// Property caPort: Custom runtime and custom container runtime dedicated fields, which represent the port that the started custom http server listens to.
	//
	// The default value is 9000.
	CaPort interface{} `field:"optional" json:"caPort" yaml:"caPort"`
	// Property code: The code that contains the function implementation.
	Code interface{} `field:"optional" json:"code" yaml:"code"`
	// Property cpu: The number of vCPUs of the function.
	//
	// The value must be a multiple of 0.05.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property customContainerConfig: Custom container runtime related configuration.
	//
	// After configuration, the function can be replaced with a custom container to execute the function.
	CustomContainerConfig interface{} `field:"optional" json:"customContainerConfig" yaml:"customContainerConfig"`
	// Property customDns: The custom DNS configurations of the function.
	CustomDns interface{} `field:"optional" json:"customDns" yaml:"customDns"`
	// Property customHealthCheckConfig: The health check configurations for the custom runtime and custom container.
	CustomHealthCheckConfig interface{} `field:"optional" json:"customHealthCheckConfig" yaml:"customHealthCheckConfig"`
	// Property customRuntimeConfig: Custom runtime related configuration.
	CustomRuntimeConfig interface{} `field:"optional" json:"customRuntimeConfig" yaml:"customRuntimeConfig"`
	// Property description: Function description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskSize: The disk size of the function.
	//
	// Unit: MB. Valid values: 512 and 10240.
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	// Property environmentVariables: The environment variable set for the function, you can get the value of the environment variable in the function.
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	// Property gpuMemorySize: The GPU memory capacity for the function.
	//
	// Unit: MB. The value must be a multiple of 1,024.
	GpuMemorySize interface{} `field:"optional" json:"gpuMemorySize" yaml:"gpuMemorySize"`
	// Property initializationTimeout: the max execution time of the initializer, in second.
	InitializationTimeout interface{} `field:"optional" json:"initializationTimeout" yaml:"initializationTimeout"`
	// Property initializer: the entry point of the initializer.
	Initializer interface{} `field:"optional" json:"initializer" yaml:"initializer"`
	// Property instanceConcurrency: Function instance concurrency.
	//
	// Value can be between 1 to 100.
	InstanceConcurrency interface{} `field:"optional" json:"instanceConcurrency" yaml:"instanceConcurrency"`
	// Property instanceLifecycleConfig: The configuration of the instance lifecycle function.
	InstanceLifecycleConfig interface{} `field:"optional" json:"instanceLifecycleConfig" yaml:"instanceLifecycleConfig"`
	// Property instanceSoftConcurrency: The soft concurrency of the instance.
	//
	// You can use this parameter to implement graceful scale-up of instances. If the number of concurrent requests on an instance is greater than the value of soft concurrency, an instance scale-up is triggered. For example, if your instance requires a long time to start, you can specify a suitable soft concurrency to start the instance in advance.The value must be less than or equal to that of the instanceConcurrency parameter.
	InstanceSoftConcurrency interface{} `field:"optional" json:"instanceSoftConcurrency" yaml:"instanceSoftConcurrency"`
	// Property instanceType: Instance type.
	//
	// Value:e1: flexible instance. Memory size between 128 and 3072c1: performance instance. Memory size allow values are 4096, 8192, 16384 and 32768
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property memorySize: The amount of memory that’s used to run function, in MB.
	//
	// Function Compute uses this value to allocate CPU resources proportionally. Defaults to 128 MB. It can be multiple of 64 MB and between 128 MB and 3072 MB.
	MemorySize interface{} `field:"optional" json:"memorySize" yaml:"memorySize"`
	// Property timeout: The maximum time duration a function can run, in seconds.
	//
	// After which Function Compute terminates the execution. Defaults to 3 seconds, and can be between 1 to 86400 seconds.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

