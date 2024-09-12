import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCampaign`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export interface RosCampaignProps {
    /**
     * @Property name: The name of the campaign.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the campaign.
     */
    readonly remark?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::Campaign`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Campaign` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-campaign
 */
export declare class RosCampaign extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::Campaign";
    /**
     * @Attribute CampaignId: The Campaign ID created this time.
     */
    readonly attrCampaignId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the campaign.
     */
    name: string | ros.IResolvable;
    /**
     * @Property remark: The remark of the campaign.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCampaignProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosInferenceJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export interface RosInferenceJobProps {
    /**
     * @Property algorithm: The algorithm of inference job.
     */
    readonly algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The campaign id of inference job.
     */
    readonly campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The input data path of inference job.
     */
    readonly dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of inference job.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property targetPath: The output result path of inference job.
     */
    readonly targetPath: string | ros.IResolvable;
    /**
     * @Property trainingJobId: The training job id of inference job.
     */
    readonly trainingJobId: string | ros.IResolvable;
    /**
     * @Property userConfig: The user config of inference job.
     */
    readonly userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of inference job.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForInferenceFinish?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::InferenceJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InferenceJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-inferencejob
 */
export declare class RosInferenceJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::InferenceJob";
    /**
     * @Attribute GroupId: The related group id of infernce job result.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * @Attribute InferenceJobId: The id of inference job.
     */
    readonly attrInferenceJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property algorithm: The algorithm of inference job.
     */
    algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The campaign id of inference job.
     */
    campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The input data path of inference job.
     */
    dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of inference job.
     */
    name: string | ros.IResolvable;
    /**
     * @Property targetPath: The output result path of inference job.
     */
    targetPath: string | ros.IResolvable;
    /**
     * @Property trainingJobId: The training job id of inference job.
     */
    trainingJobId: string | ros.IResolvable;
    /**
     * @Property userConfig: The user config of inference job.
     */
    userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of inference job.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property waitForInferenceFinish: Whether resource creation waits for the inference task to complete.The longest waiting time is 40 minutes
     */
    waitForInferenceFinish: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInferenceJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosTrainingJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export interface RosTrainingJobProps {
    /**
     * @Property algorithm: The algorithm used in training.
     */
    readonly algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The related campaign Id.
     */
    readonly campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The training data path in OSS bucket.
     */
    readonly dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of training job.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    readonly userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of training job.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * @Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForTrainingFinish?: boolean | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::PAIPlugin::TrainingJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `TrainingJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export declare class RosTrainingJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::PAIPlugin::TrainingJob";
    /**
     * @Attribute TrainingJobId: The training job id.
     */
    readonly attrTrainingJobId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property algorithm: The algorithm used in training.
     */
    algorithm: string | ros.IResolvable;
    /**
     * @Property campaignId: The related campaign Id.
     */
    campaignId: string | ros.IResolvable;
    /**
     * @Property dataPath: The training data path in OSS bucket.
     */
    dataPath: string | ros.IResolvable;
    /**
     * @Property name: The name of training job.
     */
    name: string | ros.IResolvable;
    /**
     * @Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property remark: The remark of training job.
     */
    remark: string | ros.IResolvable | undefined;
    /**
     * @Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    waitForTrainingFinish: boolean | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTrainingJobProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
