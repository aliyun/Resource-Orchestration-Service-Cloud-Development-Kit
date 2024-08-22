package alicloudroscdknas


// Properties for defining a `ProtocolMountTarget`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
type ProtocolMountTargetProps struct {
	// Property fileSystemId: File system ID.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property protocolServiceId: Agreement service ID.
	ProtocolServiceId interface{} `field:"required" json:"protocolServiceId" yaml:"protocolServiceId"`
	// Property vpcId: Proper network ID exported by the protocol service.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Switch ID exported by the protocol service.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property accessGroupName: The name of the permissions group.
	//
	// Default value: DEFAULT_VPC_GROUP_NAME.
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	// Property description: Description of the protocol service to export the directory.The console is displayed as the export directory name. limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fsetId: Fileset ID needs to be exported.
	//
	// limit:
	// The Fileset must exist.
	// A Fileset allows only one export directory.
	// Fileset and Path can only specify one.
	FsetId interface{} `field:"optional" json:"fsetId" yaml:"fsetId"`
	// Property path: The path of the CPFS directory that needs to be exported.
	//
	// limit:
	// This directory must be existing directory on CPFS.
	// The same directory allows only one export.
	// Fileset and Path can only specify one.
	// Format:
	// The length is 1 to 1024 characters.
	// Use UTF-8 encoding.
	// It must start with the positive oblique line (\/), and the root directory must be\/.
	Path interface{} `field:"optional" json:"path" yaml:"path"`
}

