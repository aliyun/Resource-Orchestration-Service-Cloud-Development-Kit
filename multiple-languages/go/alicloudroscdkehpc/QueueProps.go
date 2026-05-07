package alicloudroscdkehpc


// Properties for defining a `Queue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
type QueueProps struct {
	// Property clusterId: The cluster ID.
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	// Property computeNodes: The hardware configurations of the compute nodes in the queue.
	//
	// Valid values of N: 1 to 10.
	ComputeNodes interface{} `field:"optional" json:"computeNodes" yaml:"computeNodes"`
	// Property enableScaleIn: Specifies whether to enable auto scale-in for the queue.
	//
	// Valid values:
	// *   true
	// *   false.
	EnableScaleIn interface{} `field:"optional" json:"enableScaleIn" yaml:"enableScaleIn"`
	// Property enableScaleOut: Specifies whether to enable auto scale-out for the queue.
	//
	// Valid values:
	// *   true
	// *   false.
	EnableScaleOut interface{} `field:"optional" json:"enableScaleOut" yaml:"enableScaleOut"`
	// Property hostnamePrefix: The hostname prefix of the added compute nodes.
	HostnamePrefix interface{} `field:"optional" json:"hostnamePrefix" yaml:"hostnamePrefix"`
	// Property hostnameSuffix: The hostname suffix of the compute nodes in the queue.
	HostnameSuffix interface{} `field:"optional" json:"hostnameSuffix" yaml:"hostnameSuffix"`
	// Property initialCount: The initial number of compute nodes in the queue.
	InitialCount interface{} `field:"optional" json:"initialCount" yaml:"initialCount"`
	// Property interConnect: The type of the network for interconnecting compute nodes in the queue.
	InterConnect interface{} `field:"optional" json:"interConnect" yaml:"interConnect"`
	// Property maxCount: The maximum number of compute nodes that the queue can contain.
	MaxCount interface{} `field:"optional" json:"maxCount" yaml:"maxCount"`
	// Property minCount: The minimum number of compute nodes that the queue must contain.
	MinCount interface{} `field:"optional" json:"minCount" yaml:"minCount"`
	// Property queueName: The queue name.
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
	// Property vSwitchIds: The VSwitches available for use by compute nodes in the queue.
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

