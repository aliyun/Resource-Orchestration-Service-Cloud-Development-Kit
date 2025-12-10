package alicloudroscdkdatalakeformation


// Properties for defining a `Permissions`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-datalakeformation-permissions
type PermissionsProps struct {
	// Property catalogId: The catalog id.
	CatalogId interface{} `field:"required" json:"catalogId" yaml:"catalogId"`
	// Property permissions: The permissions list.
	Permissions interface{} `field:"required" json:"permissions" yaml:"permissions"`
	// Property refreshUserSync: Specifies whether to refresh user synchronization before creating permissions.
	//
	// Newly created RAM users may not be immediately synchronized, requiring a refresh to ensure they are available. Set to true to enable user synchronization refresh, which may cause a 30-second wait. Set to false to skip the refresh and avoid the 30-second wait. Default value: false.
	RefreshUserSync interface{} `field:"optional" json:"refreshUserSync" yaml:"refreshUserSync"`
}

