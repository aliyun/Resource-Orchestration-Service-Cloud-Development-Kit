package alicloudroscdkice


// Properties for defining a `RosCategory`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-category
type RosCategoryProps struct {
	CateName interface{} `field:"required" json:"cateName" yaml:"cateName"`
	ParentId interface{} `field:"optional" json:"parentId" yaml:"parentId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

