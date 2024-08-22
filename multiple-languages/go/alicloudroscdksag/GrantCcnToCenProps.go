package alicloudroscdksag


// Properties for defining a `GrantCcnToCen`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
type GrantCcnToCenProps struct {
	// Property ccnInstanceId: The ID of the CCN instance.
	CcnInstanceId interface{} `field:"required" json:"ccnInstanceId" yaml:"ccnInstanceId"`
	// Property cenInstanceId: The ID of the CEN instance.
	CenInstanceId interface{} `field:"required" json:"cenInstanceId" yaml:"cenInstanceId"`
	// Property cenUid: The ID of the account to which the CEN instance belongs.
	CenUid interface{} `field:"required" json:"cenUid" yaml:"cenUid"`
}

