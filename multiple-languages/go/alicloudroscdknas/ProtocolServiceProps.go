package alicloudroscdknas


// Properties for defining a `ProtocolService`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
type ProtocolServiceProps struct {
	// Property fileSystemId: File system ID.
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	// Property protocolSpec: The spec of protocol service.
	//
	// Default: General. Values: General
	ProtocolSpec interface{} `field:"required" json:"protocolSpec" yaml:"protocolSpec"`
	// Property protocolType: The protocol type of the protocol service.
	//
	// Valid value: NFS (default). Only NFSv3 is supported.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Agreement service vswitchid.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property description: The description of the protocol service.
	//
	// The name of the protocol service appears
	// in the console.
	// Limits:
	// *   The description must be 2 to 128 characters in length.
	// *   The description must start with a letter but cannot start with `http:\/\/` or
	// `https:\/\/`.
	// *   The description can contain letters, digits, colons (:), underscores (_), and
	// hyphens (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property throughput: The bandwidth of the agreement service.
	//
	// Unit: MB\/S.
	Throughput interface{} `field:"optional" json:"throughput" yaml:"throughput"`
}

