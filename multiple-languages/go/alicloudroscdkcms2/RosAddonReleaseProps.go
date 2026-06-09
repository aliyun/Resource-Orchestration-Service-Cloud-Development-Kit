package alicloudroscdkcms2


// Properties for defining a `RosAddonRelease`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
type RosAddonReleaseProps struct {
	AddonName interface{} `field:"required" json:"addonName" yaml:"addonName"`
	AddonVersion interface{} `field:"required" json:"addonVersion" yaml:"addonVersion"`
	PolicyId interface{} `field:"required" json:"policyId" yaml:"policyId"`
	EntityRules interface{} `field:"optional" json:"entityRules" yaml:"entityRules"`
	EnvType interface{} `field:"optional" json:"envType" yaml:"envType"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	ParentAddonReleaseId interface{} `field:"optional" json:"parentAddonReleaseId" yaml:"parentAddonReleaseId"`
	ReleaseName interface{} `field:"optional" json:"releaseName" yaml:"releaseName"`
	Values interface{} `field:"optional" json:"values" yaml:"values"`
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

