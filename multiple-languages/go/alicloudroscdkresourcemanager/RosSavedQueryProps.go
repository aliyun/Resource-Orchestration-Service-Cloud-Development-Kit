package alicloudroscdkresourcemanager


// Properties for defining a `RosSavedQuery`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-savedquery
type RosSavedQueryProps struct {
	Expression interface{} `field:"required" json:"expression" yaml:"expression"`
	SavedQueryName interface{} `field:"required" json:"savedQueryName" yaml:"savedQueryName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

