package alicloudroscdkddospro


// Properties for defining a `RosPort`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-port
type RosPortProps struct {
	FrontendProtocol interface{} `field:"required" json:"frontendProtocol" yaml:"frontendProtocol"`
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	RealServers interface{} `field:"required" json:"realServers" yaml:"realServers"`
	BackendPort interface{} `field:"optional" json:"backendPort" yaml:"backendPort"`
	FrontendPort interface{} `field:"optional" json:"frontendPort" yaml:"frontendPort"`
}

