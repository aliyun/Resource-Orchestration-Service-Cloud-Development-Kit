package alicloudroscdknlpautoml


// Properties for defining a `Model`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlpautoml-model
type ModelProps struct {
	// Property datasetIdList: The uploaded dataset must be under the same project, and the total number of marked data is greater than or equal to 4.
	DatasetIdList interface{} `field:"required" json:"datasetIdList" yaml:"datasetIdList"`
	// Property modelName: The name of model.
	ModelName interface{} `field:"required" json:"modelName" yaml:"modelName"`
	// Property modelType: The type of model.
	//
	// Please refer to the documentation for the parameter values corresponding to different types of models.
	// Using the specified model type under different project, and the backend will do the verification. If the model type does not exist under the project, it will prompt that the base model is not found
	ModelType interface{} `field:"required" json:"modelType" yaml:"modelType"`
	// Property projectId: The project id to which the model belongs.
	ProjectId interface{} `field:"required" json:"projectId" yaml:"projectId"`
	// Property lr: Learning rate.
	Lr interface{} `field:"optional" json:"lr" yaml:"lr"`
	// Property nepochs: Number of training dataset iterations.
	Nepochs interface{} `field:"optional" json:"nepochs" yaml:"nepochs"`
	// Property testDatasetIdList: Test set ID list.
	//
	// Some models under text classification support adding test set data.
	TestDatasetIdList interface{} `field:"optional" json:"testDatasetIdList" yaml:"testDatasetIdList"`
}

