package alicloudroscdkthreatdetection


// Properties for defining a `AttackPathWhitelist`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-attackpathwhitelist
type AttackPathWhitelistProps struct {
	// Property pathName: The whitelist path name.
	PathName interface{} `field:"required" json:"pathName" yaml:"pathName"`
	// Property pathType: The whitelist path type.
	PathType interface{} `field:"required" json:"pathType" yaml:"pathType"`
	// Property whitelistName: The whitelist name.
	WhitelistName interface{} `field:"required" json:"whitelistName" yaml:"whitelistName"`
	// Property whitelistType: The whitelist type.
	//
	// Values:
	// * ALL_ASSET: All assets.
	// * PART_ASSET: Partial assets.
	WhitelistType interface{} `field:"required" json:"whitelistType" yaml:"whitelistType"`
	// Property attackPathAssetList: List of attack path assets.
	AttackPathAssetList interface{} `field:"optional" json:"attackPathAssetList" yaml:"attackPathAssetList"`
	// Property remark: Remark information.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

