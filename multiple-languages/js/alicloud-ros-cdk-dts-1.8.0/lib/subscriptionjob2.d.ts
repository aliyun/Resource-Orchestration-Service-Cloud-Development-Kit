import * as ros from '@alicloud/ros-cdk-core';
import { RosSubscriptionJob2 } from './dts.generated';
export { RosSubscriptionJob2 as SubscriptionJob2Property };
/**
 * Properties for defining a `SubscriptionJob2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
export interface SubscriptionJob2Props {
    /**
     * Property dbList: The objects for which you want to track data changes.
     */
    readonly dbList: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property dtsJobName: The name of the DTS instance.
     */
    readonly dtsJobName: string | ros.IResolvable;
    /**
     * Property sourceEndpoint: Source instance configuration.
     */
    readonly sourceEndpoint: RosSubscriptionJob2.SourceEndpointProperty | ros.IResolvable;
    /**
     * Property subscriptionInstance: Subscription instance configuration.
     */
    readonly subscriptionInstance: RosSubscriptionJob2.SubscriptionInstanceProperty | ros.IResolvable;
    /**
     * Property checkpoint: The start offset of incremental data migration or synchronization. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    readonly checkpoint?: string | ros.IResolvable;
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
     * Property reserve: The reserved parameter of DTS. You can specify this parameter to add more configurations of the source or destination instance to the DTS task. For example, you can specify the data storage format of the destination Kafka database and the ID of the CEN instance.
     */
    readonly reserve?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property status: The status of the resource. Valid values:
     * - **Subscribing**: Start the task.
     * - **Suspending**: Suspend the task.
     * - **Stopping**: Stop the task.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property subscriptionDataType: Subscription data type.
     */
    readonly subscriptionDataType?: RosSubscriptionJob2.SubscriptionDataTypeProperty | ros.IResolvable;
}
/**
 * Represents a `SubscriptionJob2`.
 */
export interface ISubscriptionJob2 extends ros.IResource {
    readonly props: SubscriptionJob2Props;
    /**
     * Attribute DtsInstanceId: The ID of the DTS instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable | string;
    /**
     * Attribute DtsJobId: The ID of the task.
     */
    readonly attrDtsJobId: ros.IResolvable | string;
    /**
     * Attribute DtsJobName: The name of the DTS job.
     */
    readonly attrDtsJobName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DTS::SubscriptionJob2`, which is used to configure a change tracking task.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSubscriptionJob2`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-subscriptionjob2
 */
export declare class SubscriptionJob2 extends ros.Resource implements ISubscriptionJob2 {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: SubscriptionJob2Props;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DtsInstanceId: The ID of the DTS instance.
     */
    readonly attrDtsInstanceId: ros.IResolvable | string;
    /**
     * Attribute DtsJobId: The ID of the task.
     */
    readonly attrDtsJobId: ros.IResolvable | string;
    /**
     * Attribute DtsJobName: The name of the DTS job.
     */
    readonly attrDtsJobName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SubscriptionJob2Props, enableResourcePropertyConstraint?: boolean);
}
