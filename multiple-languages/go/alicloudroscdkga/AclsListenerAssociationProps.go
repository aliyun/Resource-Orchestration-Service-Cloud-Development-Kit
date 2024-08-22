package alicloudroscdkga


// Properties for defining a `AclsListenerAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-aclslistenerassociation
type AclsListenerAssociationProps struct {
	// Property aclIds: The ID of the ACL.
	//
	// You can associate up to two ACL IDs.
	AclIds interface{} `field:"required" json:"aclIds" yaml:"aclIds"`
	// Property aclType: The type of ACL.
	//
	// Valid values:white: a whitelist. Only requests from the IP addresses or CIDR blocks in the ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the whitelist is not properly configured. After you configure a whitelist for a listener, only requests from the IP addresses that are added to the whitelist are forwarded by the listener. If the whitelist is enabled but no IP addresses are added to it, the listener does not forward requests.
	// black: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are denied. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application. If the blacklist is enabled but no IP addresses are added to it, the listener forwards all requests.
	AclType interface{} `field:"required" json:"aclType" yaml:"aclType"`
	// Property listenerId: The ID of the listener.
	ListenerId interface{} `field:"required" json:"listenerId" yaml:"listenerId"`
}

