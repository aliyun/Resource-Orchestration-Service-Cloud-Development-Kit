package alicloudroscdknlb


// Properties for defining a `HdMonitorRegionConfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-hdmonitorregionconfig
type HdMonitorRegionConfigProps struct {
	// Property logProject: The name of the LogProject.
	LogProject interface{} `field:"required" json:"logProject" yaml:"logProject"`
	// Property metricStore: The name of the MetricStore.
	MetricStore interface{} `field:"required" json:"metricStore" yaml:"metricStore"`
}

