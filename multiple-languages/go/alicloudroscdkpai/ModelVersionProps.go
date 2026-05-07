package alicloudroscdkpai


// Properties for defining a `ModelVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
type ModelVersionProps struct {
	// Property modelId: Model ID.
	//
	// For details about how to obtain the model ID.
	ModelId interface{} `field:"required" json:"modelId" yaml:"modelId"`
	// Property uri: Model version URI, that is, the location where the model is stored.
	//
	// Possible values are:
	// - The HTTP(S) address of the model, for example: 'https:\/\/myweb.com\/mymodel.tar.gz '.
	// - If the model is stored in OSS, the format is 'oss:\/\/<bucket>.<endpoint>\/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:\/\/ mybucket\/'.
	Uri interface{} `field:"required" json:"uri" yaml:"uri"`
	// Property approvalStatus: Admission status, with values as follows: - Pending: to be determined.
	//
	// - Approved: Allow to go online.
	// - Rejected: Online is not allowed.
	ApprovalStatus interface{} `field:"optional" json:"approvalStatus" yaml:"approvalStatus"`
	// Property extraInfo: The additional information.
	ExtraInfo interface{} `field:"optional" json:"extraInfo" yaml:"extraInfo"`
	// Property formatType: Model format, possible values: - OfflineModel - SavedModel - Keras H5 - Frozen Pb - Caffe Prototxt - TorchScript - XGBoost - PMML - AlinkModel - ONNX.
	FormatType interface{} `field:"optional" json:"formatType" yaml:"formatType"`
	// Property frameworkType: Model framework, possible values: - Pytorch - XGBoost - Keras - Caffe - Alink - Xflow - TensorFlow.
	FrameworkType interface{} `field:"optional" json:"frameworkType" yaml:"frameworkType"`
	// Property inferenceSpec: Describes how to apply to downstream inference services.
	//
	// For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
	InferenceSpec interface{} `field:"optional" json:"inferenceSpec" yaml:"inferenceSpec"`
	// Property labels: List of model version labels.
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	// Property metrics: The metrics for the model.
	//
	// The length after serialization is limited to 8,192. Example:
	// { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss:\/\/xxxx\/" }, "Metrics": { "cer": 0.172 } }] }
	Metrics interface{} `field:"optional" json:"metrics" yaml:"metrics"`
	// Property options: The extended field.
	//
	// This is a JSON string.
	Options interface{} `field:"optional" json:"options" yaml:"options"`
	// Property sourceId: Source ID.
	//
	// * When the source type is Custom, this field is not restricted.
	// * When the source is PAIFlow or TrainingService, the format is:
	// region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
	// Among them:
	// - region is the Alibaba Cloud region ID.
	// - workspaceId indicates the workspace ID.
	// - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
	// - id: is a unique identifier.
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	// Property sourceType: Model source type, possible values: - Custom: Custom.
	//
	// - PAIFlow:PAI workflow.
	// - TrainingService:PAI training service.
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
	// Property trainingSpec: Training configuration.
	//
	// Configuration for fine-tuning, incremental training.
	TrainingSpec interface{} `field:"optional" json:"trainingSpec" yaml:"trainingSpec"`
	// Property versionDescription: Model version description.
	VersionDescription interface{} `field:"optional" json:"versionDescription" yaml:"versionDescription"`
	// Property versionName: The model version, which is unique for each model.
	//
	// If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
	VersionName interface{} `field:"optional" json:"versionName" yaml:"versionName"`
}

