package datasource


// Properties for defining a `RosPrometheus`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
type RosPrometheusProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

