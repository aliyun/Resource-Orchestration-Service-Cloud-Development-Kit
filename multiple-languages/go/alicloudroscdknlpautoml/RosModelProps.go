package alicloudroscdknlpautoml


// Properties for defining a `RosModel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
type RosModelProps struct {
	DatasetIdList interface{} `field:"required" json:"datasetIdList" yaml:"datasetIdList"`
	ModelName interface{} `field:"required" json:"modelName" yaml:"modelName"`
	ModelType interface{} `field:"required" json:"modelType" yaml:"modelType"`
	ProjectId interface{} `field:"required" json:"projectId" yaml:"projectId"`
	Lr interface{} `field:"optional" json:"lr" yaml:"lr"`
	Nepochs interface{} `field:"optional" json:"nepochs" yaml:"nepochs"`
	TestDatasetIdList interface{} `field:"optional" json:"testDatasetIdList" yaml:"testDatasetIdList"`
}

