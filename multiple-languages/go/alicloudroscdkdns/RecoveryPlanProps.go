package alicloudroscdkdns


// Properties for defining a `RecoveryPlan`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-recoveryplan
type RecoveryPlanProps struct {
	// Property faultAddrPool: The fault address pool of the recovery plan.
	//
	// The value must be encoded in UTF-8.
	FaultAddrPool interface{} `field:"required" json:"faultAddrPool" yaml:"faultAddrPool"`
	// Property name: The name of the recovery plan.
	//
	// The value can be up to 128 bytes in length. The value must be encoded in UTF-8.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property lang: The language of the request.
	Lang interface{} `field:"optional" json:"lang" yaml:"lang"`
	// Property remark: The remark of the recovery plan.
	//
	// The value can be up to 256 bytes in length. The value must be encoded in UTF-8.
	Remark interface{} `field:"optional" json:"remark" yaml:"remark"`
}

