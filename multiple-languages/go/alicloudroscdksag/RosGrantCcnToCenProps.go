package alicloudroscdksag


// Properties for defining a `RosGrantCcnToCen`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-grantccntocen
type RosGrantCcnToCenProps struct {
	CcnInstanceId interface{} `field:"required" json:"ccnInstanceId" yaml:"ccnInstanceId"`
	CenInstanceId interface{} `field:"required" json:"cenInstanceId" yaml:"cenInstanceId"`
	CenUid interface{} `field:"required" json:"cenUid" yaml:"cenUid"`
}

