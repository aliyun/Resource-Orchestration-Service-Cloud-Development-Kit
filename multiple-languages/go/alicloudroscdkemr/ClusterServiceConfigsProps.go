package alicloudroscdkemr


// Properties for defining a `ClusterServiceConfigs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
type ClusterServiceConfigsProps struct {
	// Property clusterId: The ID of the cluster.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property serviceConfigs: Server configs.
	ServiceConfigs interface{} `field:"required" json:"serviceConfigs" yaml:"serviceConfigs"`
}

