import * as ros from '@alicloud/ros-cdk-core';
import { RosTranscodeJob } from './mps.generated';
export { RosTranscodeJob as TranscodeJobProperty };
/**
 * Properties for defining a `TranscodeJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
 */
export interface TranscodeJobProps {
    /**
     * Property input: Job input.
     * > - In ApsaraVideo Media Processing APIs, the Object value must be URL-encoded
     * using UTF-8 encoding.
     * - The OSS region must match the region where MPS is deployed.
     */
    readonly input: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property outputBucket: The name of the OSS bucket where the output files are stored.
     */
    readonly outputBucket: string | ros.IResolvable;
    /**
     * Property outputs: The output configuration of the job. Consists of a list of Output objects, JSON array, with a maximum size of 30.
     */
    readonly outputs: Array<{
        [key: string]: any;
    }> | ros.IResolvable;
    /**
     * Property pipelineId: The ID of the pipeline.
     */
    readonly pipelineId: string | ros.IResolvable;
    /**
     * Property outputLocation: The OSS region (OSS Region) where the output bucket resides.
     * - The OSS bucket must be in the same region as the ApsaraVideo Media Processing
     * service.
     * - Follows the OSS bucket definition.
     */
    readonly outputLocation?: string | ros.IResolvable;
}
/**
 * Represents a `TranscodeJob`.
 */
export interface ITranscodeJob extends ros.IResource {
    readonly props: TranscodeJobProps;
    /**
     * Attribute JobIds: The IDs of the jobs.
     */
    readonly attrJobIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MPS::TranscodeJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTranscodeJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mps-transcodejob
 */
export declare class TranscodeJob extends ros.Resource implements ITranscodeJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TranscodeJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute JobIds: The IDs of the jobs.
     */
    readonly attrJobIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TranscodeJobProps, enableResourcePropertyConstraint?: boolean);
}
