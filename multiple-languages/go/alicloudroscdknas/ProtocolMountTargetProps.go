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
	// Property vSwitchId: The vSwitch ID of the export directory.
	//
	// If the storage redundancy type of the file system is not zone-redundant (ZRS) and
	// the VpcId is set, this field is required.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property accessGroupName: The name of the permissions group.
	//
	// Default value: DEFAULT_VPC_GROUP_NAME.
	AccessGroupName interface{} `field:"optional" json:"accessGroupName" yaml:"accessGroupName"`
	// Property description: The description of the export directory for the protocol service.
	//
	// The name of the
	// export directory appears in the console.
	// Limits:
	// *   The description must be 2 to 128 characters in length.
	// *   The description must start with a letter but cannot start with `http:\/\/` or
	// `https:\/\/`.
	// *   The description can contain letters, digits, colons (:), underscores (_), and
	// hyphens (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property fsetId: Fileset ID needs to be exported.
	//
	// limit:
	// The Fileset must exist.
	// A Fileset allows only one export directory.
	// Fileset and Path can only specify one.
	FsetId interface{} `field:"optional" json:"fsetId" yaml:"fsetId"`
	// Property path: The path of the CPFS directory that you want to export.
	//
	// Limits:
	// *   The directory already exists in the CPFS file system.
	// *   You can create only one export directory for a directory.
	// *   You can specify either a fileset or a path.
	// Format:
	// *   The path must be 1 to 1,024 characters in length.
	// *   The path must be encoded in UTF-8.
	// *   The path must start and end with a forward slash (\/). The root directory is
	// `\/`.
	Path interface{} `field:"optional" json:"path" yaml:"path"`
}

