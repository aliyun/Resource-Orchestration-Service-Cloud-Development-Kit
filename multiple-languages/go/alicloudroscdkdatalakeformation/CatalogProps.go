package alicloudroscdkdatalakeformation


// Properties for defining a `Catalog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-catalog
type CatalogProps struct {
	// Property name: Catalog name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property isShared: Whether it is a shared data catalog.
	IsShared interface{} `field:"optional" json:"isShared" yaml:"isShared"`
	// Property options: Configuration parameters.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	// Property shareId: Share ID.
	ShareId interface{} `field:"optional" json:"shareId" yaml:"shareId"`
	// Property type: Catalog type.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
}

