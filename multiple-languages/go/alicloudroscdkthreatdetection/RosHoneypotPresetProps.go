package alicloudroscdkthreatdetection


// Properties for defining a `RosHoneypotPreset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
type RosHoneypotPresetProps struct {
	HoneypotImageName interface{} `field:"required" json:"honeypotImageName" yaml:"honeypotImageName"`
	Meta interface{} `field:"required" json:"meta" yaml:"meta"`
	NodeId interface{} `field:"required" json:"nodeId" yaml:"nodeId"`
	PresetName interface{} `field:"required" json:"presetName" yaml:"presetName"`
}

