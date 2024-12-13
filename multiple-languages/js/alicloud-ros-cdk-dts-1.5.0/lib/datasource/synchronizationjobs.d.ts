import * as ros from '@alicloud/ros-cdk-core';
import { RosSynchronizationJobs } from './dts.generated';
export { RosSynchronizationJobs as SynchronizationJobsProperty };
/**
 * Properties for defining a `SynchronizationJobs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export interface SynchronizationJobsProps {
    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::SynchronizationJobs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSynchronizationJobs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export declare class SynchronizationJobs extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SynchronizationJobsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable;
    /**
     * Attribute SynchronizationInstances: The list of synchronization instances.
     */
    readonly attrSynchronizationInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: SynchronizationJobsProps, enableResourcePropertyConstraint?: boolean);
}
