package alicloudroscdksae


// Properties for defining a `RosNlbBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-nlbbinding
type RosNlbBindingProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	Listeners interface{} `field:"required" json:"listeners" yaml:"listeners"`
	NlbId interface{} `field:"required" json:"nlbId" yaml:"nlbId"`
}

