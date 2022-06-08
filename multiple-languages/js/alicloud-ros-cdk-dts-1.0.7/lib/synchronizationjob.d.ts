import * as ros from '@alicloud/ros-cdk-core';
import { RosSynchronizationJob } from './dts.generated';
export { RosSynchronizationJob as SynchronizationJobProperty };
/**
 * Properties for defining a `ALIYUN::DTS::SynchronizationJob`
 */
export interface SynchronizationJobProps {
    /**
     * Property destinationEndpoint: Migration target configuration
     */
    readonly destinationEndpoint: RosSynchronizationJob.DestinationEndpointProperty | ros.IResolvable;
    /**
     * Property destRegion: Region where the synchronization target instance is located.
     */
    readonly destRegion: string | ros.IResolvable;
    /**
     * Property sourceEndpoint: Migration source configuration
     */
    readonly sourceEndpoint: RosSynchronizationJob.SourceEndpointProperty | ros.IResolvable;
    /**
     * Property sourceRegion: Region where the synchronization source instance is located.
     */
    readonly sourceRegion: string | ros.IResolvable;
    /**
     * Property synchronizationJobClass: Synchronous instance specifications, which can be:
     * micro, small, medium, large and so on. The default value is: small
     */
    readonly synchronizationJobClass: string | ros.IResolvable;
    /**
     * Property dataInitialization: Whether to perform full data initialization before synchronization. The values include:true: means full data initialization
     * false: no full data initialization
     * The default value is: true
     */
    readonly dataInitialization?: boolean | ros.IResolvable;
    /**
     * Property networkType: When synchronization geographies, the type of data transmission network used. Value include: Internet, Intranet. The default value is: Internet
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property payType: Payment type, which include:
     * Postpaid: postpaid type, Prepaid: Prepaid type. Default is Postpaid
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property period: If prepaid payment type, then the parameters specified in the purchase package instance or instances as examples of a monthly subscription, which can be:
     * Year: Annual, Month: monthly
     */
    readonly period?: string | ros.IResolvable;
    /**
     * Property structureInitialization: Whether to initialize the structure object before synchronization. The values include:true: indicates that the structure object is initialized
     * false: no result object initialization
     * The default value is: true
     */
    readonly structureInitialization?: boolean | ros.IResolvable;
    /**
     * Property synchronizationObjects: Objects that need to be synchronized
     */
    readonly synchronizationObjects?: Array<RosSynchronizationJob.SynchronizationObjectsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property topology: Synchronous topology, the value includes: oneway, bidirectional.the default value is: oneway, only MySQL-> MySQL synchronization, this parameter can receive the value bidirectional
     */
    readonly topology?: string | ros.IResolvable;
    /**
     * Property usedTime: f the payment type is prepaid, then this parameter is the length of the purchase, and parameters such as 1, 2, 3 can be passed in as needed
     */
    readonly usedTime?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DTS::SynchronizationJob`
 */
export declare class SynchronizationJob extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute SynchronizationJobId: Synchronization instance ID
     */
    readonly attrSynchronizationJobId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DTS::SynchronizationJob`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SynchronizationJobProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=synchronizationjob.d.ts.map