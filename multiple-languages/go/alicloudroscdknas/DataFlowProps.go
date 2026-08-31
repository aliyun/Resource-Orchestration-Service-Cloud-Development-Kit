package alicloudroscdknas


// Properties for defining a `DataFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
type DataFlowProps struct {
	// Property fileSystemId: The ID of the file system.
	//
	// *   The IDs of CPFS file systems must start with `cpfs-`. Example:
	// cpfs-125487\*\*\*\*.
	// *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
	// bmcpfs-0015\*\*\*\*.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property fsetId: The fileset ID.
	//
	// >  This parameter is required for CPFS file systems.
	FsetId interface{} `field:"required" json:"fsetId" yaml:"fsetId"`
	// Property sourceStorage: The access path of the source storage.
	//
	// Format: `<storage type>:\/\/[<account
	// id>:]<path>`.
	// Parameters:
	// *   storage type: Only OSS is supported.
	// *   account id (optional): the UID of the account of the source storage. This
	// parameter is required when you use OSS buckets across accounts.
	// *   path: the name of the OSS bucket. Limits:
	// *   The name can contain only lowercase letters, digits, and hyphens (-). The
	// name must start and end with a lowercase letter or digit.
	// *   The name can be up to 128 characters in length.
	// *   The name must be encoded in UTF-8.
	// > *   The OSS bucket must be an existing bucket in the region.
	// > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
	SourceStorage interface{} `field:"required" json:"sourceStorage" yaml:"sourceStorage"`
	// Property throughput: The maximum data flow throughput.
	//
	// Unit: MB\/s. Valid values:
	// *   600
	// *   1200
	// *   1500
	// >  The data flow throughput must be less than the I\/O throughput of the file
	// system. This parameter is required for CPFS file systems.
	Throughput interface{} `field:"required" json:"throughput" yaml:"throughput"`
	// Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory.
	//
	// If there is data update, start the automatic update task, unit: minute.
	// Scope of value: 5 ~ 525600, default value: 10.
	AutoRefreshInterval interface{} `field:"optional" json:"autoRefreshInterval" yaml:"autoRefreshInterval"`
	// Property autoRefreshPolicy: The automatic update policy.
	//
	// The updated data in the source storage is imported
	// into the CPFS file system based on the policy.
	// *   None (default): Updated data in the source storage is not automatically
	// imported into the CPFS file system. You can run a data flow task to import the
	// updated data from the source storage.
	// *   ImportChanged: Updated data in the source storage is automatically imported
	// into the CPFS file system.
	// >  This parameter takes effect only for CPFS file systems.
	AutoRefreshPolicy interface{} `field:"optional" json:"autoRefreshPolicy" yaml:"autoRefreshPolicy"`
	// Property autoRefreshs:.
	AutoRefreshs interface{} `field:"optional" json:"autoRefreshs" yaml:"autoRefreshs"`
	// Property description: The description of the dataflow.
	//
	// Limits:
	// *   The description must be 2 to 128 characters in length.
	// *   The description must start with a letter but cannot start with `http:\/\/` or
	// `https:\/\/`.
	// *   The description can contain letters, digits, colons (:), underscores (_), and
	// hyphens (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property sourceSecurityType: The type of safety protection types of the source storage.
	//
	// If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
	// No (default value): It means that the source storage does not need to be accessed by safe protection.
	// SSL: Protective access through SSL certificates.
	SourceSecurityType interface{} `field:"optional" json:"sourceSecurityType" yaml:"sourceSecurityType"`
}

