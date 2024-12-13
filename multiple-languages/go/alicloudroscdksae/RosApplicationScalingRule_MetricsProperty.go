package alicloudroscdksae


type RosApplicationScalingRule_MetricsProperty struct {
	MetricTargetAverageUtilization interface{} `field:"required" json:"metricTargetAverageUtilization" yaml:"metricTargetAverageUtilization"`
	MetricType interface{} `field:"required" json:"metricType" yaml:"metricType"`
	SlbId interface{} `field:"optional" json:"slbId" yaml:"slbId"`
	SlbLogstore interface{} `field:"optional" json:"slbLogstore" yaml:"slbLogstore"`
	SlbProject interface{} `field:"optional" json:"slbProject" yaml:"slbProject"`
	Vport interface{} `field:"optional" json:"vport" yaml:"vport"`
}

