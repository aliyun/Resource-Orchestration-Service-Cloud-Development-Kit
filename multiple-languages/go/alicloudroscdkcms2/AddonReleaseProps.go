package alicloudroscdkcms2


// Properties for defining a `AddonRelease`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-addonrelease
type AddonReleaseProps struct {
	// Property addonName: The name of the add-on.
	AddonName interface{} `field:"required" json:"addonName" yaml:"addonName"`
	// Property addonVersion: The version of the add-on.
	AddonVersion interface{} `field:"required" json:"addonVersion" yaml:"addonVersion"`
	// Property policyId: The ID of the integration policy.
	PolicyId interface{} `field:"required" json:"policyId" yaml:"policyId"`
	// Property entityRules: Entity discovery rules model.
	EntityRules interface{} `field:"optional" json:"entityRules" yaml:"entityRules"`
	// Property envType: The environment type.
	EnvType interface{} `field:"optional" json:"envType" yaml:"envType"`
	// Property lang: The language of the add-on.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property parentAddonReleaseId: The ID of the parent add-on release.
	ParentAddonReleaseId interface{} `field:"optional" json:"parentAddonReleaseId" yaml:"parentAddonReleaseId"`
	// Property releaseName: The name of the add-on release.
	ReleaseName interface{} `field:"optional" json:"releaseName" yaml:"releaseName"`
	// Property values: The values of the add-on release.
	Values interface{} `field:"optional" json:"values" yaml:"values"`
	// Property workspace: The workspace of the add-on release.
	Workspace interface{} `field:"optional" json:"workspace" yaml:"workspace"`
}

