import * as ros from '@alicloud/ros-cdk-core';
import { RosPipelineRun } from './devops.generated';
export { RosPipelineRun as PipelineRunProperty };
/**
 * Properties for defining a `PipelineRun`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
 */
export interface PipelineRunProps {
    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
    /**
     * Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    readonly pipelineId: number | ros.IResolvable;
    /**
     * Property params: Pipeline operating parameters. Keys:
     * - **branchModeBranchs**: Branch mode runs branches.
     * - **envs**: Running variables.
     * - **runningBranchs**: Running branches whose key is the warehouse address.
     * - **runningTags**: Running tags whose key is the warehouse address.
     */
    readonly params?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
     * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
     */
    readonly sync?: boolean | ros.IResolvable;
    /**
     * Property timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
     */
    readonly timeout?: number | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DEVOPS::PipelineRun`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPipelineRun`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
 */
export declare class PipelineRun extends ros.Resource {
    /**
     * Attribute PipelineRunId: Pipeline run id.
     */
    readonly attrPipelineRunId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PipelineRunProps, enableResourcePropertyConstraint?: boolean);
}
