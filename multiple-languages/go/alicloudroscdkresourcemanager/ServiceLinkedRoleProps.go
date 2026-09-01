package alicloudroscdkresourcemanager


// Properties for defining a `ServiceLinkedRole`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-servicelinkedrole
type ServiceLinkedRoleProps struct {
	// Property serviceName: The service identifier of the service-linked role.
	//
	// For example: cloudmilvus.aliyuncs.com.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property customSuffix: The suffix of the service-linked role name.
	//
	// Specify this property only if the service supports custom suffixes.
	CustomSuffix interface{} `field:"optional" json:"customSuffix" yaml:"customSuffix"`
	// Property description: The description of the service-linked role.
	//
	// The description must be 1 to 1,024 characters in length.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
}

