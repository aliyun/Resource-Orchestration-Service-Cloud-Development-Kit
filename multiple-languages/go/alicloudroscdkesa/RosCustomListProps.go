package alicloudroscdkesa


// Properties for defining a `RosCustomList`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
type RosCustomListProps struct {
	Items interface{} `field:"required" json:"items" yaml:"items"`
	Kind interface{} `field:"required" json:"kind" yaml:"kind"`
	ListName interface{} `field:"required" json:"listName" yaml:"listName"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

