package alicloudroscdkddospro


// Properties for defining a `SceneDefensePolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
type SceneDefensePolicyProps struct {
	// Property endTime: The end time of the policy.
	//
	// This value is a UNIX timestamp. Units: milliseconds.
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	// Property name: The name of the policy.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property startTime: The start time of the policy.
	//
	// This value is a UNIX timestamp. Units: milliseconds.
	StartTime interface{} `field:"required" json:"startTime" yaml:"startTime"`
	// Property template: The template of the policy.
	//
	// Valid values:
	// promotion: important activity
	// bypass: all traffic forwarded.
	Template interface{} `field:"required" json:"template" yaml:"template"`
}

