package alicloudroscdkdatalakeformation


// Properties for defining a `RosPermissions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
type RosPermissionsProps struct {
	CatalogId interface{} `field:"required" json:"catalogId" yaml:"catalogId"`
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
}

