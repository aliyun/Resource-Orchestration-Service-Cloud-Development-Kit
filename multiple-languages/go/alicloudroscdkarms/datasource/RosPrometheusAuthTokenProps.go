package datasource


// Properties for defining a `RosPrometheusAuthToken`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
type RosPrometheusAuthTokenProps struct {
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

