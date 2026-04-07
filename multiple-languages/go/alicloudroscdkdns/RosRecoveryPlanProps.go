package alicloudroscdkdns


// Properties for defining a `RosRecoveryPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
type RosRecoveryPlanProps struct {
	FaultAddrPool interface{} `field:"required" json:"faultAddrPool" yaml:"faultAddrPool"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

