package alicloudroscdksae


// Properties for defining a `RosSlbBinding`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sae-slbbinding
type RosSlbBindingProps struct {
	AppId interface{} `field:"required" json:"appId" yaml:"appId"`
	Internet interface{} `field:"optional" json:"internet" yaml:"internet"`
	InternetSlbId interface{} `field:"optional" json:"internetSlbId" yaml:"internetSlbId"`
	Intranet interface{} `field:"optional" json:"intranet" yaml:"intranet"`
	IntranetSlbId interface{} `field:"optional" json:"intranetSlbId" yaml:"intranetSlbId"`
}

