package alicloudroscdkdlf


// Properties for defining a `RosCatalog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
type RosCatalogProps struct {
	CatalogId interface{} `field:"required" json:"catalogId" yaml:"catalogId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	LocationUri interface{} `field:"optional" json:"locationUri" yaml:"locationUri"`
	Owner interface{} `field:"optional" json:"owner" yaml:"owner"`
}

