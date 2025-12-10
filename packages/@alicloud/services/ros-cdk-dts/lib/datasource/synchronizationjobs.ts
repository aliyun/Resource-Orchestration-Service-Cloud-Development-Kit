import * as ros from '@alicloud/ros-cdk-core';
import { RosSynchronizationJobs } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `SynchronizationJobs`.
 */
export interface ISynchronizationJobs extends ros.IResource {
    readonly props: SynchronizationJobsProps;

    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    readonly attrDtsInstanceIds: ros.IResolvable | string;

    /**
     * Attribute SynchronizationInstances: The list of synchronization instances.
     */
    readonly attrSynchronizationInstances: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::SynchronizationJobs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSynchronizationJobs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
 */
export class SynchronizationJobs extends ros.Resource implements ISynchronizationJobs {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SynchronizationJobsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DtsInstanceIds: The list of dts instance IDs.
     */
    public readonly attrDtsInstanceIds: ros.IResolvable | string;

    /**
     * Attribute SynchronizationInstances: The list of synchronization instances.
     */
    public readonly attrSynchronizationInstances: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SynchronizationJobsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSynchronizationJobs = new RosSynchronizationJobs(this, id,  {
            dtsInstanceId: props.dtsInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSynchronizationJobs;
        this.attrDtsInstanceIds = rosSynchronizationJobs.attrDtsInstanceIds;
        this.attrSynchronizationInstances = rosSynchronizationJobs.attrSynchronizationInstances;
    }
}
