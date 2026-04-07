package alicloudroscdkthreatdetection


// Properties for defining a `RosAttackPathWhitelist`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
type RosAttackPathWhitelistProps struct {
	PathName interface{} `field:"required" json:"pathName" yaml:"pathName"`
	PathType interface{} `field:"required" json:"pathType" yaml:"pathType"`
	WhitelistName interface{} `field:"required" json:"whitelistName" yaml:"whitelistName"`
	WhitelistType interface{} `field:"required" json:"whitelistType" yaml:"whitelistType"`
	AttackPathAssetList interface{} `field:"optional" json:"attackPathAssetList" yaml:"attackPathAssetList"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

