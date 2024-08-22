package alicloudroscdkedas


// Properties for defining a `RosDeployGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-deploygroup
type RosDeployGroupProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	GroupName interface{} `field:"required" json:"groupName" yaml:"groupName"`
}

