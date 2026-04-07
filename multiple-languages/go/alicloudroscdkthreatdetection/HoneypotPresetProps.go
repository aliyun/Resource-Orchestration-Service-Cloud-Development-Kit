package alicloudroscdkthreatdetection


// Properties for defining a `HoneypotPreset`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotpreset
type HoneypotPresetProps struct {
	// Property honeypotImageName: The name of the honeypot image.
	HoneypotImageName interface{} `field:"required" json:"honeypotImageName" yaml:"honeypotImageName"`
	// Property meta: The custom configurations of the honeypot template.
	//
	// The value is a JSON string that contains the following fields:
	// *   **PortraitOption**: Social Source Tracing
	// *   **Burp**: Burp-specific Defense
	// *   **TrojanGit**: Git-specific Defense.
	Meta interface{} `field:"required" json:"meta" yaml:"meta"`
	// Property nodeId: The ID of the management node.
	NodeId interface{} `field:"required" json:"nodeId" yaml:"nodeId"`
	// Property presetName: The custom name of the honeypot template.
	PresetName interface{} `field:"required" json:"presetName" yaml:"presetName"`
}

