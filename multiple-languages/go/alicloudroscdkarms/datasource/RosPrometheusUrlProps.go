package datasource


// Properties for defining a `RosPrometheusUrl`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusurl
type RosPrometheusUrlProps struct {
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

