package alicloudroscdkfc


// Properties for defining a `Service`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-service
type ServiceProps struct {
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property deletionForce: Whether force delete the service without waiting for network interfaces to be cleaned up if VpcConfig is specified.
	//
	// Default value is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property description: Service description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property internetAccess: Set it to true to enable Internet access.
	InternetAccess interface{} `field:"optional" json:"internetAccess" yaml:"internetAccess"`
	// Property logConfig: Log configuration.
	//
	// Function Compute pushes function execution logs to the configured log store.
	LogConfig interface{} `field:"optional" json:"logConfig" yaml:"logConfig"`
	// Property nasConfig: NAS configuration.
	//
	// Function Compute uses a specified NAS configured on the service.
	NasConfig interface{} `field:"optional" json:"nasConfig" yaml:"nasConfig"`
	// Property ossMountConfig: The OSS mount configurations.
	OssMountConfig interface{} `field:"optional" json:"ossMountConfig" yaml:"ossMountConfig"`
	// Property role: The role grants Function Compute the permission to access user’s cloud resources, such as pushing logs to user’s log store.
	//
	// The temporary STS token generated from this role can be retrieved from function context and used to access cloud resources.
	Role interface{} `field:"optional" json:"role" yaml:"role"`
	// Property tags: Tags to attach to service.
	//
	// Max support 20 tags to add during create service. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosService_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tracingConfig: The Tracing Analysis configuration.
	//
	// After Function Compute integrates with Tracing Analysis, you can record the stay time of a request in Function Compute, view the cold start time for a function, and record the execution time of a function.
	TracingConfig interface{} `field:"optional" json:"tracingConfig" yaml:"tracingConfig"`
	// Property vpcBindings: Function Invocation only by Specified VPCs.
	//
	// By default, you can invoke the function by using the Internet endpoint and internal endpoint after a function is created. If you want the function to be invoked only by using specified VPCs, but not the Internet endpoint or internal endpoint, you must bind the specified VPCs to the service.
	VpcBindings interface{} `field:"optional" json:"vpcBindings" yaml:"vpcBindings"`
	// Property vpcConfig: VPC configuration.
	//
	// Function Compute uses the config to setup ENI in the specific VPC.
	VpcConfig interface{} `field:"optional" json:"vpcConfig" yaml:"vpcConfig"`
}

