package alicloudroscdkddospro


// Properties for defining a `RosSceneDefensePolicy`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-scenedefensepolicy
type RosSceneDefensePolicyProps struct {
	EndTime interface{} `field:"required" json:"endTime" yaml:"endTime"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	StartTime interface{} `field:"required" json:"startTime" yaml:"startTime"`
	Template interface{} `field:"required" json:"template" yaml:"template"`
}

