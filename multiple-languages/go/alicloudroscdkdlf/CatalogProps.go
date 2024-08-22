package alicloudroscdkdlf


// Properties for defining a `Catalog`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dlf-catalog
type CatalogProps struct {
	// Property catalogId: Catalog ID.
	CatalogId interface{} `field:"required" json:"catalogId" yaml:"catalogId"`
	// Property description: Description.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property locationUri: Location uri, for example: oss:\/\/dlf-test-oss-location\/.
	LocationUri interface{} `field:"optional" json:"locationUri" yaml:"locationUri"`
	// Property owner: Person in charge, principal format.
	//
	// Empty auto-fill with current creator identity.
	Owner interface{} `field:"optional" json:"owner" yaml:"owner"`
}

