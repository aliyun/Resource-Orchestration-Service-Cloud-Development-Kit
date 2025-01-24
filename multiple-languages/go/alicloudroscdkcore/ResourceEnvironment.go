package alicloudroscdkcore


type ResourceEnvironment struct {
	// The Alibaba Cloud account ID that this resource belongs to.
	//
	// Since this can be a Token
	// (for example, when the account is ROS's ALIYUN::AccountId intrinsic),
	// make sure to use Token.compareStrings()
	// instead of just comparing the values for equality.
	Account *string `field:"required" json:"account" yaml:"account"`
	// The Alibaba Cloud region that this resource belongs to.
	//
	// Since this can be a Token
	// (for example, when the region is ROS's ALIYUN::Region intrinsic),
	// make sure to use Token.compareStrings()
	// instead of just comparing the values for equality.
	Region *string `field:"required" json:"region" yaml:"region"`
}

