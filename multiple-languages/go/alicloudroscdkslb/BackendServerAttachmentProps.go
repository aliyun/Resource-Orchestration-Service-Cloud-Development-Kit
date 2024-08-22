package alicloudroscdkslb


// Properties for defining a `BackendServerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
type BackendServerAttachmentProps struct {
	// Property loadBalancerId: The id of load balancer.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
	BackendServerList interface{} `field:"optional" json:"backendServerList" yaml:"backendServerList"`
	// Property backendServers: The list of ECS instance, which will attached to load balancer.
	BackendServers interface{} `field:"optional" json:"backendServers" yaml:"backendServers"`
	// Property backendServerWeightList: The comma delimited weight list.
	//
	// If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
	BackendServerWeightList interface{} `field:"optional" json:"backendServerWeightList" yaml:"backendServerWeightList"`
}

