package alicloudroscdkthreatdetection


// Properties for defining a `AttackPathSensitiveAssetConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathsensitiveassetconfig
type AttackPathSensitiveAssetConfigProps struct {
	// Property attackPathAssetList: The attack path sensitive asset configuration list.
	AttackPathAssetList interface{} `field:"required" json:"attackPathAssetList" yaml:"attackPathAssetList"`
}

