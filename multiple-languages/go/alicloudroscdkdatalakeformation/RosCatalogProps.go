package alicloudroscdkdatalakeformation


// Properties for defining a `RosCatalog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
type RosCatalogProps struct {
	Name interface{} `field:"required" json:"name" yaml:"name"`
	IsShared interface{} `field:"optional" json:"isShared" yaml:"isShared"`
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	ShareId interface{} `field:"optional" json:"shareId" yaml:"shareId"`
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

