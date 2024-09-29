package alicloudroscdkfc3


// Properties for defining a `Function`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
type FunctionProps struct {
	// Property functionName: The name of the function.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property handler: The handler of the function.
	Handler interface{} `field:"required" json:"handler" yaml:"handler"`
	// Property runtime: The programming language of the function.
	Runtime interface{} `field:"required" json:"runtime" yaml:"runtime"`
	// Property code: Function code ZIP package.
	//
	// Choose one of Code and CustomContainerConfig.
	Code interface{} `field:"optional" json:"code" yaml:"code"`
	// Property cpu: The CPU size of the function in vCPU as a multiple of 0.05 vCPU. The minimum value is 0.05 and the maximum value is 16. At the same time, the ratio of cpu to memorySize (in GB) should be between 1:1 and 1:4.
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	// Property customContainerConfig: Custom container configuration.
	//
	// Choose one of Code and CustomContainerConfig.
	CustomContainerConfig interface{} `field:"optional" json:"customContainerConfig" yaml:"customContainerConfig"`
	// Property customDns: Custom DNS configuration.
	CustomDns interface{} `field:"optional" json:"customDns" yaml:"customDns"`
	// Property customRuntimeConfig: Custom runtime configuration.
	CustomRuntimeConfig interface{} `field:"optional" json:"customRuntimeConfig" yaml:"customRuntimeConfig"`
	// Property description: Function description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property diskSize: The disk size of the function, in MB.
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	// Property environmentVariables: The environment variables of the function.
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	// Property gpuConfig: The GPU configuration of the function.
	GpuConfig interface{} `field:"optional" json:"gpuConfig" yaml:"gpuConfig"`
	// Property instanceConcurrency: The maximum number of concurrent instances of the function.
	InstanceConcurrency interface{} `field:"optional" json:"instanceConcurrency" yaml:"instanceConcurrency"`
	// Property instanceLifecycleConfig: The instance lifecycle configuration of the function.
	InstanceLifecycleConfig interface{} `field:"optional" json:"instanceLifecycleConfig" yaml:"instanceLifecycleConfig"`
	// Property internetAccess: Whether the function can access the Internet.
	InternetAccess interface{} `field:"optional" json:"internetAccess" yaml:"internetAccess"`
	// Property layers: The layers of the function.
	Layers interface{} `field:"optional" json:"layers" yaml:"layers"`
	// Property logConfig: The log configuration of the function.
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	// Property memorySize: The memory size of the function, in MB.
	MemorySize interface{} `field:"optional" json:"memorySize" yaml:"memorySize"`
	// Property nasConfig: The NAS configuration of the function.
	NasConfig interface{} `field:"optional" json:"nasConfig" yaml:"nasConfig"`
	// Property ossMountConfig: The OSS mount configuration of the function.
	OssMountConfig interface{} `field:"optional" json:"ossMountConfig" yaml:"ossMountConfig"`
	// Property role: The user is authorized to the RAM role of Function Compute.
	//
	// After setting, Function Compute will assume the role and generate temporary access credentials. The temporary access credentials of this role can be used in functions to access specified Alibaba Cloud services, such as OSS and OTS.
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	// Property timeout: The timeout of the function.
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	// Property tracingConfig: The tracing configuration of the function.
	TracingConfig interface{} `field:"optional" json:"tracingConfig" yaml:"tracingConfig"`
	// Property vpcConfig: The VPC configuration of the function.
	VpcConfig interface{} `field:"optional" json:"vpcConfig" yaml:"vpcConfig"`
}

