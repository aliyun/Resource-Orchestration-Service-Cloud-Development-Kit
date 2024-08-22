package alicloudroscdkmse


// Properties for defining a `RosEngineNamespace`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
type RosEngineNamespaceProps struct {
	InstanceId interface{} `field:"required" json:"instanceId" yaml:"instanceId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Desc interface{} `field:"optional" json:"desc" yaml:"desc"`
	Identity interface{} `field:"optional" json:"identity" yaml:"identity"`
}

