import * as ros from '@alicloud/ros-cdk-core';
import { RosMigrationJob2 } from './dts.generated';
export { RosMigrationJob2 as MigrationJob2Property };
/**
 * Properties for defining a `MigrationJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
export interface MigrationJob2Props {
    /**
     * Property dataInitialization: Specifies whether to perform full data migration or full data synchronization. Default value: **true**. Valid values: **true** and **false**.
     */
    readonly dataInitialization: boolean | ros.IResolvable;
    /**
     * Property dataSynchronization: Specifies whether to perform incremental data migration or incremental data synchronization. Default value: **false**. Valid values: **true** and **false**.
     */
    readonly dataSynchronization: boolean | ros.IResolvable;
    /**
     * Property dbList: The objects that you want to migrate or synchronize.
     */
    readonly dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property destinationEndpoint: Destination instance configuration.
     */
    readonly destinationEndpoint: RosMigrationJob2.DestinationEndpointProperty | ros.IResolvable;
    /**
     * Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;
    /**
     * Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosMigrationJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * Property structureInitialization: Specifies whether to perform schema migration or schema synchronization. Default value: true. Valid values: **true** and **false**.
     */
    readonly structureInitialization: boolean | ros.IResolvable;
    /**
     * Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;
    /**
     * Property dataCheckConfigure: The data verification task for a data migration or synchronization instance.
     */
    readonly dataCheckConfigure?: RosMigrationJob2.DataCheckConfigureProperty | ros.IResolvable;
    /**
     * Property dedicatedClusterId: The ID of the DTS dedicated cluster on which the task runs.
     */
    readonly dedicatedClusterId?: string | ros.IResolvable;
    /**
     * Property delayNotice: Specifies whether to monitor the task latency. Valid values: **true** and **false**
     */
    readonly delayNotice?: boolean | ros.IResolvable;
    /**
     * Property delayPhone: The mobile numbers that receive latency-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly delayPhone?: string | ros.IResolvable;
    /**
     * Property delayRuleTime: The threshold for latency alerts. Unit: seconds. You can set the threshold based on your business requirements. To prevent jitters caused by network and database overloads, we recommend that you set the threshold to more than 10 seconds.
     */
    readonly delayRuleTime?: number | ros.IResolvable;
    /**
     * Property disasterRecoveryJob: Specifies whether the instance is a disaster recovery instance. Valid values: **true** and **false**
     */
    readonly disasterRecoveryJob?: boolean | ros.IResolvable;
    /**
     * Property dtsBisLabel: The environment tag of the DTS instance. Valid values: **normal** and **online**.
     */
    readonly dtsBisLabel?: string | ros.IResolvable;
    /**
     * Property dtsInstanceId: The ID of the DTS instance.
     */
    readonly dtsInstanceId?: string | ros.IResolvable;
    /**
     * Property dtsJobId: The ID of the DTS task.
     */
    readonly dtsJobId?: string | ros.IResolvable;
    /**
     * Property errorNotice: Specifies whether to monitor the task status. Valid values: **true** and **false**.
     */
    readonly errorNotice?: boolean | ros.IResolvable;
    /**
     * Property errorPhone: The mobile numbers that receive status-related alerts. Separate multiple mobile numbers with commas (,).
     * **Note**: This parameter is available only for users of the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers. Users of the international site (alibabacloud.com) cannot receive alerts by using mobile numbers, but can configure alert rules for DTS tasks in the CloudMonitor console.
     */
    readonly errorPhone?: string | ros.IResolvable;
    /**
     * Property fileOssUrl: The URL of the Object Storage Service (OSS) bucket that stores the files related to the DTS task.
     */
    readonly fileOssUrl?: string | ros.IResolvable;
    /**
     * Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property status: The status of the resource. Valid values:
     * - **Migrating**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::MigrationJob2`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMigrationJob2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-migrationjob2
 */
export declare class MigrationJob2 extends ros.Resource {
    /**
     * Attribute DtsInstanceId: The ID of the DTS instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable;
    /**
     * Attribute DtsJobId: The ID of the task.
     */
    readonly attrDtsJobId: ros.IResolvable;
    /**
     * Attribute DtsJobName: The name of the DTS job.
     */
    readonly attrDtsJobName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MigrationJob2Props, enableResourcePropertyConstraint?: boolean);
}
