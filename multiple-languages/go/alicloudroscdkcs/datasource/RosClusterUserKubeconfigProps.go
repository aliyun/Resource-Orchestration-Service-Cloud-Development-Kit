package datasource


// Properties for defining a `RosClusterUserKubeconfig`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-clusteruserkubeconfig
type RosClusterUserKubeconfigProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TemporaryDurationMinutes interface{} `field:"optional" json:"temporaryDurationMinutes" yaml:"temporaryDurationMinutes"`
}

