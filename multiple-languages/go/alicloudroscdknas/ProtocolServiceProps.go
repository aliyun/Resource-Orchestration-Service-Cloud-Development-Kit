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
	// Property protocolType: The protocol type of agreement service.
	//
	// Ranges:
	// NFS: Agreement service supports NFS protocol access.
	// The default value: NFS.
	ProtocolType interface{} `field:"required" json:"protocolType" yaml:"protocolType"`
	// Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Agreement service vswitchid.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property description: Description of protocol service.The console shows the "protocol service name". limit: The length is 2 to 128 English or Chinese characters. Start with a lowercase letter or Chinese, and you cannot start with http:\/\/ and https: \/\/. It can contain numbers, half-horn colon (:), down line (_) or short lines (-).
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property throughput: The bandwidth of the agreement service.
	//
	// Unit: MB\/S.
	Throughput interface{} `field:"optional" json:"throughput" yaml:"throughput"`
}

