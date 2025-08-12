package alicloudroscdkcloudsiem


// Properties for defining a `RosUserSourceLogConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsiem-usersourcelogconfig
type RosUserSourceLogConfigProps struct {
	SourceLogCode interface{} `field:"required" json:"sourceLogCode" yaml:"sourceLogCode"`
	SourceLogInfo interface{} `field:"required" json:"sourceLogInfo" yaml:"sourceLogInfo"`
	SourceProdCode interface{} `field:"required" json:"sourceProdCode" yaml:"sourceProdCode"`
	SubUserId interface{} `field:"required" json:"subUserId" yaml:"subUserId"`
}

