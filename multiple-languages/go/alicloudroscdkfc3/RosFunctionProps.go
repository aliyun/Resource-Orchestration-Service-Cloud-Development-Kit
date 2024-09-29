package alicloudroscdkfc3


// Properties for defining a `RosFunction`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-function
type RosFunctionProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	Handler interface{} `field:"required" json:"handler" yaml:"handler"`
	Runtime interface{} `field:"required" json:"runtime" yaml:"runtime"`
	Code interface{} `field:"optional" json:"code" yaml:"code"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	CustomContainerConfig interface{} `field:"optional" json:"customContainerConfig" yaml:"customContainerConfig"`
	CustomDns interface{} `field:"optional" json:"customDns" yaml:"customDns"`
	CustomRuntimeConfig interface{} `field:"optional" json:"customRuntimeConfig" yaml:"customRuntimeConfig"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	GpuConfig interface{} `field:"optional" json:"gpuConfig" yaml:"gpuConfig"`
	InstanceConcurrency interface{} `field:"optional" json:"instanceConcurrency" yaml:"instanceConcurrency"`
	InstanceLifecycleConfig interface{} `field:"optional" json:"instanceLifecycleConfig" yaml:"instanceLifecycleConfig"`
	InternetAccess interface{} `field:"optional" json:"internetAccess" yaml:"internetAccess"`
	Layers interface{} `field:"optional" json:"layers" yaml:"layers"`
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	MemorySize interface{} `field:"optional" json:"memorySize" yaml:"memorySize"`
	NasConfig interface{} `field:"optional" json:"nasConfig" yaml:"nasConfig"`
	OssMountConfig interface{} `field:"optional" json:"ossMountConfig" yaml:"ossMountConfig"`
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
	TracingConfig interface{} `field:"optional" json:"tracingConfig" yaml:"tracingConfig"`
	VpcConfig interface{} `field:"optional" json:"vpcConfig" yaml:"vpcConfig"`
}

