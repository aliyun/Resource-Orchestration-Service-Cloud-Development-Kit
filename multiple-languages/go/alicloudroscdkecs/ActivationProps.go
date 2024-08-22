package alicloudroscdkecs


// Properties for defining a `Activation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-activation
type ActivationProps struct {
	// Property description: The description of the activation code.
	//
	// It must be 1 to 100 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property instanceCount: The maximum number of times that you can use the activation code to register managed instances.
	//
	// Valid values: 1 to 1000.Default value: 10.
	InstanceCount interface{} `field:"optional" json:"instanceCount" yaml:"instanceCount"`
	// Property instanceName: The default instance name prefix.
	//
	// The instance name prefix must be 2 to 50 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:). If you use the activation code that is created by calling this operation (CreateActivation) to register managed instances, the instances are assigned sequential names that are prefixed by the value of this parameter. You can also specify a new instance name to replace the assigned sequential name when you register a managed instance.If you specify InstanceName when you register a managed instance, an instance name in theformat of <InstanceName>-<Number> is generated. The number of digits in the <Number> value isdetermined by that in the InstanceCount value. Example: 001. If you do not specify InstanceName, the hostname (Hostname) is used as the instance name.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property ipAddressRange: The IP addresses of hosts that are allowed to use the activation code.
	//
	// The value can be IPv4 addresses, IPv6 addresses, or CIDR blocks.
	IpAddressRange interface{} `field:"optional" json:"ipAddressRange" yaml:"ipAddressRange"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosActivation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property timeToLiveInHours: The validity period of the activation code.
	//
	// The activation code can no longer be used to register instances after the period ends. Unit: hours. Valid values: 1 to 876576, which represents a range of time from 1 hour to 100 years.Default value: 4.
	TimeToLiveInHours interface{} `field:"optional" json:"timeToLiveInHours" yaml:"timeToLiveInHours"`
}

