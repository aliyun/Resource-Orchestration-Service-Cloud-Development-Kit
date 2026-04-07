package alicloudroscdkresourcemanager


// Properties for defining a `RosDelegatedAdministrator`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-delegatedadministrator
type RosDelegatedAdministratorProps struct {
	AccountId interface{} `field:"required" json:"accountId" yaml:"accountId"`
	ServicePrincipal interface{} `field:"required" json:"servicePrincipal" yaml:"servicePrincipal"`
}

