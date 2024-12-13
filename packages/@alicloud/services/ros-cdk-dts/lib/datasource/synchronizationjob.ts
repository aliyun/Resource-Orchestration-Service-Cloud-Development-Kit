import * as ros from '@alicloud/ros-cdk-core';
import { RosSynchronizationJob } from './dts.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSynchronizationJob as SynchronizationJobProperty };

/**
 * Properties for defining a `SynchronizationJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export interface SynchronizationJobProps {

    /**
     * Property dtsInstanceId: Synchronization instance ID.
     */
    readonly dtsInstanceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::SynchronizationJob`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSynchronizationJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export class SynchronizationJob extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SynchronizationJobProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    public readonly attrDestinationEndpointEngineName: ros.IResolvable;

    /**
     * Attribute DestinationEndpointRegion: Region of source instance.
     */
    public readonly attrDestinationEndpointRegion: ros.IResolvable;

    /**
     * Attribute DtsInstanceId: Synchronization instance ID.
     */
    public readonly attrDtsInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    public readonly attrInstanceClass: ros.IResolvable;

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute SourceEndpointEngineName: Source instance database engine type.
     */
    public readonly attrSourceEndpointEngineName: ros.IResolvable;

    /**
     * Attribute SourceEndpointRegion: Region of source instance.
     */
    public readonly attrSourceEndpointRegion: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SynchronizationJobProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSynchronizationJob = new RosSynchronizationJob(this, id,  {
            dtsInstanceId: props.dtsInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSynchronizationJob;
        this.attrCreateTime = rosSynchronizationJob.attrCreateTime;
        this.attrDestinationEndpointEngineName = rosSynchronizationJob.attrDestinationEndpointEngineName;
        this.attrDestinationEndpointRegion = rosSynchronizationJob.attrDestinationEndpointRegion;
        this.attrDtsInstanceId = rosSynchronizationJob.attrDtsInstanceId;
        this.attrInstanceClass = rosSynchronizationJob.attrInstanceClass;
        this.attrPaymentType = rosSynchronizationJob.attrPaymentType;
        this.attrSourceEndpointEngineName = rosSynchronizationJob.attrSourceEndpointEngineName;
        this.attrSourceEndpointRegion = rosSynchronizationJob.attrSourceEndpointRegion;
    }
}
