package alicloudroscdkthreatdetection


// Properties for defining a `RosHoneyPot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypot
type RosHoneyPotProps struct {
	HoneypotImageId interface{} `field:"required" json:"honeypotImageId" yaml:"honeypotImageId"`
	HoneypotImageName interface{} `field:"required" json:"honeypotImageName" yaml:"honeypotImageName"`
	HoneypotName interface{} `field:"required" json:"honeypotName" yaml:"honeypotName"`
	NodeId interface{} `field:"required" json:"nodeId" yaml:"nodeId"`
	Meta interface{} `field:"optional" json:"meta" yaml:"meta"`
}

