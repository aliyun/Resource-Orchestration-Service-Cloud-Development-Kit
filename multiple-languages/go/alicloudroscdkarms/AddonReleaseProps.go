package alicloudroscdkarms


// Properties for defining a `AddonRelease`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-addonrelease
type AddonReleaseProps struct {
	// Property addonVersion: The version of the add-on.
	AddonVersion interface{} `field:"required" json:"addonVersion" yaml:"addonVersion"`
	// Property environmentId: The id of the environment.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property name: The name of the add-on.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property releaseName: The name of the add-on after it is installed.
	//
	// If you do not specify this parameter, a default rule name is generated.
	ReleaseName interface{} `field:"optional" json:"releaseName" yaml:"releaseName"`
	// Property values: The metadata.
	Values interface{} `field:"optional" json:"values" yaml:"values"`
}

