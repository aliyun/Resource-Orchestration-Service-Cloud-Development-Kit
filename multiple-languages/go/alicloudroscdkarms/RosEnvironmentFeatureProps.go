package alicloudroscdkarms


// Properties for defining a `RosEnvironmentFeature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
type RosEnvironmentFeatureProps struct {
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	FeatureName interface{} `field:"required" json:"featureName" yaml:"featureName"`
	FeatureVersion interface{} `field:"required" json:"featureVersion" yaml:"featureVersion"`
	Config interface{} `field:"optional" json:"config" yaml:"config"`
}

