package alicloudroscdkgpdb


// Properties for defining a `SupabaseProject`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-supabaseproject
type SupabaseProjectProps struct {
	// Property accountPassword: The password for the initial account.
	//
	// It consists of three or more types of capital letters, lowercase letters, numbers, and special characters.
	// Supported special characters: !@#$%^&*()_+-=
	// The length is 8~32 characters.
	AccountPassword interface{} `field:"required" json:"accountPassword" yaml:"accountPassword"`
	// Property projectName: Project name.The naming rules are as follows: The length is 1~128 characters. Only English letters, numbers, dash (-) and underscore (_). Must start with English letters or underscores (_).
	ProjectName interface{} `field:"required" json:"projectName" yaml:"projectName"`
	// Property projectSpec: Supabase instance specification, default is 1C1G.
	ProjectSpec interface{} `field:"required" json:"projectSpec" yaml:"projectSpec"`
	// Property securityIpList: IP whitelist.
	//
	// 127.0.0.1 means that any external IP access is prohibited. You can call the ModifySecurityIps interface to modify the IP whitelist after the instance is created.
	SecurityIpList interface{} `field:"required" json:"securityIpList" yaml:"securityIpList"`
	// Property vpcId: VPC ID.
	//
	// illustrate
	// You can call the DescribeRdsVpcs interface to view the available VPC IDs.
	// This parameter must be passed in.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: vSwitch ID.
	//
	// illustrate
	// vSwitchId is required.
	// The Availability Zone where the vSwitch is located must be consistent with the ZoneId.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: Availability Zone ID.
	//
	// Description You can call the DescribeRegions interface to view the available Availability Zone ID.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property diskPerformanceLevel: Cloud disk PL level, default PL0.
	//
	// Selectable value:
	// PL0
	// PL1.
	DiskPerformanceLevel interface{} `field:"optional" json:"diskPerformanceLevel" yaml:"diskPerformanceLevel"`
	// Property storageSize: Storage space size, unit GB, default 1GB.
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
}

