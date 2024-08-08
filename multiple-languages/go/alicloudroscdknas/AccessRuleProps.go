package alicloudroscdknas


// Properties for defining a `AccessRule`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
type AccessRuleProps struct {
	// Property accessGroupName: Permission group name.
	AccessGroupName interface{} `field:"required" json:"accessGroupName" yaml:"accessGroupName"`
	// Property fileSystemType: The type of file system.
	//
	// Values:
	// standard: the general NAS
	// extreme: the extreme NAS.
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	// Property ipv6SourceCidrIp: Source IPv6 CIDR address segment.
	//
	// IP addresses in CIDR format and IPv6 format are supported.
	// Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
	// Only VPC private network is supported.
	// IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
	Ipv6SourceCidrIp interface{} `field:"optional" json:"ipv6SourceCidrIp" yaml:"ipv6SourceCidrIp"`
	// Property priority: Priority level.
	//
	// Range: 1-100. Default value: 1
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	// Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
	RwAccessType interface{} `field:"optional" json:"rwAccessType" yaml:"rwAccessType"`
	// Property sourceCidrIp: Address or address segment.
	SourceCidrIp interface{} `field:"optional" json:"sourceCidrIp" yaml:"sourceCidrIp"`
	// Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
	UserAccessType interface{} `field:"optional" json:"userAccessType" yaml:"userAccessType"`
}

