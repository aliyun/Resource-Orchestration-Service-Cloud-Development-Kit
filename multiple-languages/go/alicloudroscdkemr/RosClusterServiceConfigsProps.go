package alicloudroscdkemr


// Properties for defining a `RosClusterServiceConfigs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
type RosClusterServiceConfigsProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	ServiceConfigs interface{} `field:"required" json:"serviceConfigs" yaml:"serviceConfigs"`
}

