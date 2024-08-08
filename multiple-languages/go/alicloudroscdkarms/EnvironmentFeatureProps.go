package alicloudroscdkarms


// Properties for defining a `EnvironmentFeature`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environmentfeature
type EnvironmentFeatureProps struct {
	// Property environmentId: The id of the environment.
	EnvironmentId interface{} `field:"required" json:"environmentId" yaml:"environmentId"`
	// Property featureName: The name of the feature.
	//
	// Valid values:
	// app-agent-pilot
	// metric-agent.
	FeatureName interface{} `field:"required" json:"featureName" yaml:"featureName"`
	// Property featureVersion: The version of the feature.
	FeatureVersion interface{} `field:"required" json:"featureVersion" yaml:"featureVersion"`
	// Property config: The metadata of the feature.
	Config interface{} `field:"optional" json:"config" yaml:"config"`
}

