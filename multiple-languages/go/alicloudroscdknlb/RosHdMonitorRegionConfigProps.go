package alicloudroscdknlb


// Properties for defining a `RosHdMonitorRegionConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
type RosHdMonitorRegionConfigProps struct {
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	MetricStore interface{} `field:"required" json:"metricStore" yaml:"metricStore"`
}

