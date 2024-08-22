package alicloudroscdkslb


// Properties for defining a `RosBackendServerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendserverattachment
type RosBackendServerAttachmentProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	BackendServerList interface{} `field:"optional" json:"backendServerList" yaml:"backendServerList"`
	BackendServers interface{} `field:"optional" json:"backendServers" yaml:"backendServers"`
	BackendServerWeightList interface{} `field:"optional" json:"backendServerWeightList" yaml:"backendServerWeightList"`
}

