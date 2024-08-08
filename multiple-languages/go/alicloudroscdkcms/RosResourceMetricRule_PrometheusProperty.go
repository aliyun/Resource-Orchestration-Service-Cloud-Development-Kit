package alicloudroscdkcms


type RosResourceMetricRule_PrometheusProperty struct {
	Level interface{} `field:"required" json:"level" yaml:"level"`
	PromQl interface{} `field:"required" json:"promQl" yaml:"promQl"`
	Times interface{} `field:"required" json:"times" yaml:"times"`
	Annotations interface{} `field:"optional" json:"annotations" yaml:"annotations"`
}

