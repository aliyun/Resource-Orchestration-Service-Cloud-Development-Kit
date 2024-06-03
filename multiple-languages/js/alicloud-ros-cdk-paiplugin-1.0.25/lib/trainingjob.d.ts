import * as ros from '@alicloud/ros-cdk-core';
import { RosTrainingJob } from './paiplugin.generated';
export { RosTrainingJob as TrainingJobProperty };
/**
 * Properties for defining a `TrainingJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export interface TrainingJobProps {
    /**
     * Property algorithm: The algorithm used in training.
     */
    readonly algorithm: string | ros.IResolvable;
    /**
     * Property campaignId: The related campaign Id.
     */
    readonly campaignId: string | ros.IResolvable;
    /**
     * Property dataPath: The training data path in OSS bucket.
     */
    readonly dataPath: string | ros.IResolvable;
    /**
     * Property name: The name of training job.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property userConfig: User configuration is used to set parameters such as start_date and end_date to delineate the time range of modeling data.
     */
    readonly userConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property remark: The remark of training job.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * Property waitForTrainingFinish: Whether resource creation waits for the training task to complete.The longest waiting time is 40 minutes
     */
    readonly waitForTrainingFinish?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAIPlugin::TrainingJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrainingJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-paiplugin-trainingjob
 */
export declare class TrainingJob extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TrainingJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TrainingJobId: The training job id.
     */
    readonly attrTrainingJobId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrainingJobProps, enableResourcePropertyConstraint?: boolean);
}
