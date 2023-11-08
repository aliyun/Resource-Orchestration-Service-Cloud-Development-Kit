import * as ros from '@alicloud/ros-cdk-core';
import { RosPipelineRun } from './devops.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPipelineRun as PipelineRunProperty };

/**
 * Properties for defining a `ALIYUN::DEVOPS::PipelineRun`
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
    readonly params?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * A ROS resource type:  `ALIYUN::DEVOPS::PipelineRun`
 */
export class PipelineRun extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute PipelineRunId: Pipeline run id.
     */
    public readonly attrPipelineRunId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DEVOPS::PipelineRun`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PipelineRunProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPipelineRun = new RosPipelineRun(this, id,  {
            timeout: props.timeout === undefined || props.timeout === null ? 10 : props.timeout,
            pipelineId: props.pipelineId,
            params: props.params,
            organizationId: props.organizationId,
            sync: props.sync === undefined || props.sync === null ? false : props.sync,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPipelineRun;
        this.attrPipelineRunId = rosPipelineRun.attrPipelineRunId;
    }
}
