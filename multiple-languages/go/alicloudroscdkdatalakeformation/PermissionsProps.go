package alicloudroscdkdatalakeformation


// Properties for defining a `Permissions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
type PermissionsProps struct {
	// Property catalogId: The catalog id.
	CatalogId interface{} `field:"required" json:"catalogId" yaml:"catalogId"`
	// Property permissions: The permissions list.
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
}

