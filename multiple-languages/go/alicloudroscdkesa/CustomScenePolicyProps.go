package alicloudroscdkesa


// Properties for defining a `CustomScenePolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
type CustomScenePolicyProps struct {
	// Property createTime: The time when the policy takes effect.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	CreateTime interface{} `field:"required" json:"createTime" yaml:"createTime"`
	// Property customScenePolicyName: The policy name.
	CustomScenePolicyName interface{} `field:"required" json:"customScenePolicyName" yaml:"customScenePolicyName"`
	// Property endTime: The time when the policy expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	// Property objects: The IDs of the websites that you want to associate with the policy.
	//
	// Separate multiple IDs with commas (,).
	Objects interface{} `field:"required" json:"objects" yaml:"objects"`
	// Property template: The name of the policy template.
	//
	// Valid value:
	// promotion: major events.
	Template interface{} `field:"required" json:"template" yaml:"template"`
}

