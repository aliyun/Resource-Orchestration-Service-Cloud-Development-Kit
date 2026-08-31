import * as ros from '@alicloud/ros-cdk-core';
import { RosModelVersion } from './pai.generated';
export { RosModelVersion as ModelVersionProperty };
/**
 * Properties for defining a `ModelVersion`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
 */
export interface ModelVersionProps {
    /**
     * Property modelId: Model ID. For details about how to obtain the model ID.
     */
    readonly modelId: string | ros.IResolvable;
    /**
     * Property uri: Model version URI, that is, the location where the model is stored. Possible values are:
     * - The HTTP(S) address of the model, for example: 'https:\/\/myweb.com\/mymodel.tar.gz '.
     * - If the model is stored in OSS, the format is 'oss:\/\/<bucket>.<endpoint>\/object '. For the endpoint configuration, see [Access domain name and data center](~~ 31837 ~~). For example, see OSS:\/\/ mybucket\/'.
     */
    readonly uri: string | ros.IResolvable;
    /**
     * Property approvalStatus: Admission status, with values as follows:
     * - Pending: to be determined.
     * - Approved: Allow to go online.
     * - Rejected: Online is not allowed.
     */
    readonly approvalStatus?: string | ros.IResolvable;
    /**
     * Property extraInfo: The additional information.
     */
    readonly extraInfo?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property formatType: Model format, possible values:
     * - OfflineModel
     * - SavedModel
     * - Keras H5
     * - Frozen Pb
     * - Caffe Prototxt
     * - TorchScript
     * - XGBoost
     * - PMML
     * - AlinkModel
     * - ONNX.
     */
    readonly formatType?: string | ros.IResolvable;
    /**
     * Property frameworkType: Model framework, possible values:
     * - Pytorch
     * - XGBoost
     * - Keras
     * - Caffe
     * - Alink
     * - Xflow
     * - TensorFlow.
     */
    readonly frameworkType?: string | ros.IResolvable;
    /**
     * Property inferenceSpec: Describes how to apply to downstream inference services. For example, describe the processor and container of EAS. Example: { "processor": "tensorflow_gpu_1.12" }
     */
    readonly inferenceSpec?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property labels: List of model version labels.
     */
    readonly labels?: Array<RosModelVersion.LabelsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property metrics: The metrics for the model. The length after serialization is limited to 8,192. Example:
     * { "Results": [{ "Dataset": { "DatasetId": "d-sdkjanksaklerhfd" }, "Metrics": { "cer": 0.175 } }, { "Dataset": { "Uri": "oss:\/\/xxxx\/" }, "Metrics": { "cer": 0.172 } }] }
     */
    readonly metrics?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property options: The extended field. This is a JSON string.
     */
    readonly options?: string | ros.IResolvable;
    /**
     * Property sourceId: Source ID.
     * * When the source type is Custom, this field is not restricted.
     * * When the source is PAIFlow or TrainingService, the format is:
     * region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
     * Among them:
     * - region is the Alibaba Cloud region ID.
     * - workspaceId indicates the workspace ID.
     * - kind: is a type. Value: PipelineRun(PAIFlow workflow);ServiceJob (training service).
     * - id: is a unique identifier.
     */
    readonly sourceId?: string | ros.IResolvable;
    /**
     * Property sourceType: Model source type, possible values:
     * - Custom: Custom.
     * - PAIFlow:PAI workflow.
     * - TrainingService:PAI training service.
     */
    readonly sourceType?: string | ros.IResolvable;
    /**
     * Property trainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
     */
    readonly trainingSpec?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property versionDescription: Model version description.
     */
    readonly versionDescription?: string | ros.IResolvable;
    /**
     * Property versionName: The model version, which is unique for each model. If you leave this parameter empty, the first version is 0.1.0 by default. After that, the minor version number is increased by 1 in sequence. For example, the second version number is 0.2.0. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). The major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
     */
    readonly versionName?: string | ros.IResolvable;
}
/**
 * Represents a `ModelVersion`.
 */
export interface IModelVersion extends ros.IResource {
    readonly props: ModelVersionProps;
    /**
     * Attribute ApprovalStatus: Admission status, with values as follows:.
     */
    readonly attrApprovalStatus: ros.IResolvable | string;
    /**
     * Attribute ExtraInfo: Other information.
     */
    readonly attrExtraInfo: ros.IResolvable | string;
    /**
     * Attribute FormatType: Model format, possible values:.
     */
    readonly attrFormatType: ros.IResolvable | string;
    /**
     * Attribute FrameworkType: Model framework, possible values:.
     */
    readonly attrFrameworkType: ros.IResolvable | string;
    /**
     * Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
     */
    readonly attrGmtCreateTime: ros.IResolvable | string;
    /**
     * Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
     */
    readonly attrGmtModifiedTime: ros.IResolvable | string;
    /**
     * Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
     */
    readonly attrInferenceSpec: ros.IResolvable | string;
    /**
     * Attribute Labels: List of model version labels.
     */
    readonly attrLabels: ros.IResolvable | string;
    /**
     * Attribute Metrics: Model indicators.
     */
    readonly attrMetrics: ros.IResolvable | string;
    /**
     * Attribute Options: Extension field. The JsonString type.
     */
    readonly attrOptions: ros.IResolvable | string;
    /**
     * Attribute OwnerId: The Alibaba Cloud account ID.
     */
    readonly attrOwnerId: ros.IResolvable | string;
    /**
     * Attribute SourceId: Source ID.
     */
    readonly attrSourceId: ros.IResolvable | string;
    /**
     * Attribute SourceType: Model source type, possible values:.
     */
    readonly attrSourceType: ros.IResolvable | string;
    /**
     * Attribute TrainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
     */
    readonly attrTrainingSpec: ros.IResolvable | string;
    /**
     * Attribute Uri: Model version URI, that is, the location where the model is stored.
     */
    readonly attrUri: ros.IResolvable | string;
    /**
     * Attribute UserId: The user ID.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute VersionDescription: Model version description.
     */
    readonly attrVersionDescription: ros.IResolvable | string;
    /**
     * Attribute VersionName: Model version.
     */
    readonly attrVersionName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::ModelVersion`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosModelVersion`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
 */
export declare class ModelVersion extends ros.Resource implements IModelVersion {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ModelVersionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApprovalStatus: Admission status, with values as follows:.
     */
    readonly attrApprovalStatus: ros.IResolvable | string;
    /**
     * Attribute ExtraInfo: Other information.
     */
    readonly attrExtraInfo: ros.IResolvable | string;
    /**
     * Attribute FormatType: Model format, possible values:.
     */
    readonly attrFormatType: ros.IResolvable | string;
    /**
     * Attribute FrameworkType: Model framework, possible values:.
     */
    readonly attrFrameworkType: ros.IResolvable | string;
    /**
     * Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.
     */
    readonly attrGmtCreateTime: ros.IResolvable | string;
    /**
     * Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.
     */
    readonly attrGmtModifiedTime: ros.IResolvable | string;
    /**
     * Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.
     */
    readonly attrInferenceSpec: ros.IResolvable | string;
    /**
     * Attribute Labels: List of model version labels.
     */
    readonly attrLabels: ros.IResolvable | string;
    /**
     * Attribute Metrics: Model indicators.
     */
    readonly attrMetrics: ros.IResolvable | string;
    /**
     * Attribute Options: Extension field. The JsonString type.
     */
    readonly attrOptions: ros.IResolvable | string;
    /**
     * Attribute OwnerId: The Alibaba Cloud account ID.
     */
    readonly attrOwnerId: ros.IResolvable | string;
    /**
     * Attribute SourceId: Source ID.
     */
    readonly attrSourceId: ros.IResolvable | string;
    /**
     * Attribute SourceType: Model source type, possible values:.
     */
    readonly attrSourceType: ros.IResolvable | string;
    /**
     * Attribute TrainingSpec: Training configuration. Configuration for fine-tuning, incremental training.
     */
    readonly attrTrainingSpec: ros.IResolvable | string;
    /**
     * Attribute Uri: Model version URI, that is, the location where the model is stored.
     */
    readonly attrUri: ros.IResolvable | string;
    /**
     * Attribute UserId: The user ID.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute VersionDescription: Model version description.
     */
    readonly attrVersionDescription: ros.IResolvable | string;
    /**
     * Attribute VersionName: Model version.
     */
    readonly attrVersionName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ModelVersionProps, enableResourcePropertyConstraint?: boolean);
}
