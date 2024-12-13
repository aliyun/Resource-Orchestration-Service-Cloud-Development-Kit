package alicloudroscdkcs


// Properties for defining a `RosApplicationDeployment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-applicationdeployment
type RosApplicationDeploymentProps struct {
	ChartUrl interface{} `field:"required" json:"chartUrl" yaml:"chartUrl"`
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	Namespace interface{} `field:"required" json:"namespace" yaml:"namespace"`
	Type interface{} `field:"required" json:"type" yaml:"type"`
	Values interface{} `field:"optional" json:"values" yaml:"values"`
}

