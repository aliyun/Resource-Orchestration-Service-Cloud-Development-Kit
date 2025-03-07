import * as ros from '@alicloud/ros-cdk-core';
import { RosInferenceJob } from './paiplugin.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInferenceJob as InferenceJobProperty };

/**
 * Properties for defining a `InferenceJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export interface InferenceJobProps {

    /**
     * Property algorithm: The algorithm of inference job.
     */
    readonly algorithm: string | ros.IResolvable;

    /**
     * Property campaignId: The campaign id of inference job.
     */
    readonly campaignId: string | ros.IResolvable;

    /**
     * Property dataPath: The input data path of inference job.
     */
    readonly dataPath: string | ros.IResolvable;

    /**
     * Property name: The name of inference job.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property targetPath: The output result path of inference job.
     */
    readonly targetPath: string | ros.IResolvable;

    /**
     * Property trainingJobId: The training job id of inference job.
     */
    readonly trainingJobId: string | ros.IResolvable;

    /**
     * Property userConfig: The user config of inference job.
     */
    readonly userConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property remark: The remark of inference job.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForInferenceFinish?: boolean | ros.IResolvable;
}

/**
 * Represents a `InferenceJob`.
 */
export interface IInferenceJob extends ros.IResource {
    readonly props: InferenceJobProps;

    /**
     * Attribute GroupId: The related group id of infernce job result.
     */
    readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute InferenceJobId: The id of inference job.
     */
    readonly attrInferenceJobId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::InferenceJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInferenceJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export class InferenceJob extends ros.Resource implements IInferenceJob {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InferenceJobProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupId: The related group id of infernce job result.
     */
    public readonly attrGroupId: ros.IResolvable | string;

    /**
     * Attribute InferenceJobId: The id of inference job.
     */
    public readonly attrInferenceJobId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InferenceJobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInferenceJob = new RosInferenceJob(this, id,  {
            dataPath: props.dataPath,
            trainingJobId: props.trainingJobId,
            campaignId: props.campaignId,
            targetPath: props.targetPath,
            userConfig: props.userConfig,
            algorithm: props.algorithm,
            waitForInferenceFinish: props.waitForInferenceFinish === undefined || props.waitForInferenceFinish === null ? true : props.waitForInferenceFinish,
            remark: props.remark,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInferenceJob;
        this.attrGroupId = rosInferenceJob.attrGroupId;
        this.attrInferenceJobId = rosInferenceJob.attrInferenceJobId;
    }
}
