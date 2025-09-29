import * as ros from '@alicloud/ros-cdk-core';
import { RosSynchronizationJob } from './dts.generated';
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
 * Represents a `SynchronizationJob`.
 */
export interface ISynchronizationJob extends ros.IResource {
    readonly props: SynchronizationJobProps;
    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    readonly attrDestinationEndpointEngineName: ros.IResolvable | string;
    /**
     * Attribute DestinationEndpointRegion: Region of source instance.
     */
    readonly attrDestinationEndpointRegion: ros.IResolvable | string;
    /**
     * Attribute DtsInstanceId: Synchronization instance ID.
     */
    readonly attrDtsInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    readonly attrInstanceClass: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointEngineName: Source instance database engine type.
     */
    readonly attrSourceEndpointEngineName: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointRegion: Region of source instance.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DTS::SynchronizationJob`, which is used to query the execution information about a data synchronization task in Data Transmission Service (DTS).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSynchronizationJob`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
 */
export declare class SynchronizationJob extends ros.Resource implements ISynchronizationJob {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SynchronizationJobProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The task creation time, which follows the yyyy-MM-ddTHH:mm:ssZ(UTC time).
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DestinationEndpointEngineName: The target database engine type.
     */
    readonly attrDestinationEndpointEngineName: ros.IResolvable | string;
    /**
     * Attribute DestinationEndpointRegion: Region of source instance.
     */
    readonly attrDestinationEndpointRegion: ros.IResolvable | string;
    /**
     * Attribute DtsInstanceId: Synchronization instance ID.
     */
    readonly attrDtsInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceClass: The specification of the migration or synchronization instance.
     */
    readonly attrInstanceClass: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointEngineName: Source instance database engine type.
     */
    readonly attrSourceEndpointEngineName: ros.IResolvable | string;
    /**
     * Attribute SourceEndpointRegion: Region of source instance.
     */
    readonly attrSourceEndpointRegion: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SynchronizationJobProps, enableResourcePropertyConstraint?: boolean);
}
