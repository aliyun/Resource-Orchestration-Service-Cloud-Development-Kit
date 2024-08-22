package alicloudroscdkfc


// Properties for defining a `RosFunction`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-function
type RosFunctionProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	Handler interface{} `field:"required" json:"handler" yaml:"handler"`
	Runtime interface{} `field:"required" json:"runtime" yaml:"runtime"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	AsyncConfiguration interface{} `field:"optional" json:"asyncConfiguration" yaml:"asyncConfiguration"`
	CaPort interface{} `field:"optional" json:"caPort" yaml:"caPort"`
	Code interface{} `field:"optional" json:"code" yaml:"code"`
	Cpu interface{} `field:"optional" json:"cpu" yaml:"cpu"`
	CustomContainerConfig interface{} `field:"optional" json:"customContainerConfig" yaml:"customContainerConfig"`
	CustomDns interface{} `field:"optional" json:"customDns" yaml:"customDns"`
	CustomHealthCheckConfig interface{} `field:"optional" json:"customHealthCheckConfig" yaml:"customHealthCheckConfig"`
	CustomRuntimeConfig interface{} `field:"optional" json:"customRuntimeConfig" yaml:"customRuntimeConfig"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	EnvironmentVariables interface{} `field:"optional" json:"environmentVariables" yaml:"environmentVariables"`
	GpuMemorySize interface{} `field:"optional" json:"gpuMemorySize" yaml:"gpuMemorySize"`
	InitializationTimeout interface{} `field:"optional" json:"initializationTimeout" yaml:"initializationTimeout"`
	Initializer interface{} `field:"optional" json:"initializer" yaml:"initializer"`
	InstanceConcurrency interface{} `field:"optional" json:"instanceConcurrency" yaml:"instanceConcurrency"`
	InstanceLifecycleConfig interface{} `field:"optional" json:"instanceLifecycleConfig" yaml:"instanceLifecycleConfig"`
	InstanceSoftConcurrency interface{} `field:"optional" json:"instanceSoftConcurrency" yaml:"instanceSoftConcurrency"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	MemorySize interface{} `field:"optional" json:"memorySize" yaml:"memorySize"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

