package alicloudroscdkresourcemanager


// Properties for defining a `DelegatedAdministrator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
type DelegatedAdministratorProps struct {
	// Property accountId: The Alibaba Cloud account ID of the member in the resource directory.
	AccountId interface{} `field:"required" json:"accountId" yaml:"accountId"`
	// Property servicePrincipal: The identifier of the trusted service.
	ServicePrincipal interface{} `field:"required" json:"servicePrincipal" yaml:"servicePrincipal"`
}

