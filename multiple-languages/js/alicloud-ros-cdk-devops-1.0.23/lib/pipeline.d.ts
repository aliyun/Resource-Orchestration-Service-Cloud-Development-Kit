import * as ros from '@alicloud/ros-cdk-core';
import { RosPipeline } from './devops.generated';
export { RosPipeline as PipelineProperty };
/**
 * Properties for defining a `Pipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
export interface PipelineProps {
    /**
     * Property content: Pipeline description in YAML format.
     */
    readonly content: string | ros.IResolvable;
    /**
     * Property name: Pipeline name.
     */
    readonly name: string | ros.IResolvable;
    /**
     * Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DEVOPS::Pipeline`, which is used to create a pipeline. YAML-based pipelines are supported.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPipeline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
export declare class Pipeline extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PipelineProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute PipelineId: Pipeline id.
     */
    readonly attrPipelineId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PipelineProps, enableResourcePropertyConstraint?: boolean);
}
