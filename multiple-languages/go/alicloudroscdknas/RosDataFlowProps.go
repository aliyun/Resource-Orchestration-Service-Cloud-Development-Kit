package alicloudroscdknas


// Properties for defining a `RosDataFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
type RosDataFlowProps struct {
	FileSystemId interface{} `field:"required" json:"fileSystemId" yaml:"fileSystemId"`
	FsetId interface{} `field:"required" json:"fsetId" yaml:"fsetId"`
	SourceStorage interface{} `field:"required" json:"sourceStorage" yaml:"sourceStorage"`
	Throughput interface{} `field:"required" json:"throughput" yaml:"throughput"`
	AutoRefreshInterval interface{} `field:"optional" json:"autoRefreshInterval" yaml:"autoRefreshInterval"`
	AutoRefreshPolicy interface{} `field:"optional" json:"autoRefreshPolicy" yaml:"autoRefreshPolicy"`
	AutoRefreshs interface{} `field:"optional" json:"autoRefreshs" yaml:"autoRefreshs"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	SourceSecurityType interface{} `field:"optional" json:"sourceSecurityType" yaml:"sourceSecurityType"`
}

