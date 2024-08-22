package alicloudroscdkarms


// Properties for defining a `RosAddonRelease`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
type RosAddonReleaseProps struct {
	AddonVersion interface{} `field:"required" json:"addonVersion" yaml:"addonVersion"`
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	ReleaseName interface{} `field:"optional" json:"releaseName" yaml:"releaseName"`
	Values interface{} `field:"optional" json:"values" yaml:"values"`
}

