package alicloudroscdkesa


// Properties for defining a `RosCustomScenePolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
type RosCustomScenePolicyProps struct {
	CreateTime interface{} `field:"required" json:"createTime" yaml:"createTime"`
	CustomScenePolicyName interface{} `field:"required" json:"customScenePolicyName" yaml:"customScenePolicyName"`
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	Objects interface{} `field:"required" json:"objects" yaml:"objects"`
	Template interface{} `field:"required" json:"template" yaml:"template"`
}

