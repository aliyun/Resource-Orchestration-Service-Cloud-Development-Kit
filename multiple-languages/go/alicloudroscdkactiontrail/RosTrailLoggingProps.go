package alicloudroscdkactiontrail


// Properties for defining a `RosTrailLogging`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-actiontrail-traillogging
type RosTrailLoggingProps struct {
	Enable interface{} `field:"required" json:"enable" yaml:"enable"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
}

