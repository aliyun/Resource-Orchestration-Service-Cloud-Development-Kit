import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitingRoomEvent } from './esa.generated';
export { RosWaitingRoomEvent as WaitingRoomEventProperty };
/**
 * Properties for defining a `WaitingRoomEvent`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
 */
export interface WaitingRoomEventProps {
    /**
     * Property endTime: The timestamp of the end time of the event.
     */
    readonly endTime: string | ros.IResolvable;
    /**
     * Property newUsersPerMinute: Number of new users per minute.
     */
    readonly newUsersPerMinute: number | ros.IResolvable;
    /**
     * Property queuingMethod: Way of queuing. Value:
     * - `random`: random.
     * - `fifo`: first in, first out.
     * - `passthrough`: through.
     * - `reject-all`: reject all.
     */
    readonly queuingMethod: string | ros.IResolvable;
    /**
     * Property queuingStatusCode: Waiting room status code. Value:
     * - `200`
     * - `202`
     * - `429`.
     */
    readonly queuingStatusCode: string | ros.IResolvable;
    /**
     * Property sessionDuration: User session duration in minutes.
     */
    readonly sessionDuration: number | ros.IResolvable;
    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property startTime: The timestamp of the event start time.
     */
    readonly startTime: string | ros.IResolvable;
    /**
     * Property totalActiveUsers: Total number of active users.
     */
    readonly totalActiveUsers: number | ros.IResolvable;
    /**
     * Property waitingRoomEventName: Event name, custom event description.
     */
    readonly waitingRoomEventName: string | ros.IResolvable;
    /**
     * Property waitingRoomType: Waiting room type. The following types are supported:
     * - `default`: the default type.
     * - `custom`: custom type.
     */
    readonly waitingRoomType: string | ros.IResolvable;
    /**
     * Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    readonly customPageHtml?: string | ros.IResolvable;
    /**
     * Property description: Waiting room description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property disableSessionRenewalEnable: Disable session renewal. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly disableSessionRenewalEnable?: string | ros.IResolvable;
    /**
     * Property jsonResponseEnable: JSON response switch. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly jsonResponseEnable?: string | ros.IResolvable;
    /**
     * Property language: Default language setting. Values include:
     * - `enus`: English.
     * - `zhcn`: Simplified Chinese.
     * - `zhhk`: Traditional Chinese.
     */
    readonly language?: string | ros.IResolvable;
    /**
     * Property preQueueEnable: Pre-queue switch.
     * - `on`: open.
     * - `off`: closed.
     */
    readonly preQueueEnable?: string | ros.IResolvable;
    /**
     * Property preQueueStartTime: Pre-queue start time.
     */
    readonly preQueueStartTime?: string | ros.IResolvable;
    /**
     * Property randomPreQueueEnable: Random queue switch.
     * - `on`: open.
     * - `off`: closed.
     */
    readonly randomPreQueueEnable?: string | ros.IResolvable;
    /**
     * Property waitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
     */
    readonly waitingRoomId?: string | ros.IResolvable;
}
/**
 * Represents a `WaitingRoomEvent`.
 */
export interface IWaitingRoomEvent extends ros.IResource {
    readonly props: WaitingRoomEventProps;
    /**
     * Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    readonly attrCustomPageHtml: ros.IResolvable | string;
    /**
     * Attribute Description: Waiting room description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisableSessionRenewalEnable: Disable session renewal.
     */
    readonly attrDisableSessionRenewalEnable: ros.IResolvable | string;
    /**
     * Attribute EndTime: The timestamp of the end time of the event.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute JsonResponseEnable: JSON response switch.
     */
    readonly attrJsonResponseEnable: ros.IResolvable | string;
    /**
     * Attribute Language: Default language setting.
     */
    readonly attrLanguage: ros.IResolvable | string;
    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    readonly attrNewUsersPerMinute: ros.IResolvable | string;
    /**
     * Attribute PreQueueEnable: Pre-queue switch.
     */
    readonly attrPreQueueEnable: ros.IResolvable | string;
    /**
     * Attribute PreQueueStartTime: Pre-queue start time.
     */
    readonly attrPreQueueStartTime: ros.IResolvable | string;
    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    readonly attrQueuingMethod: ros.IResolvable | string;
    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    readonly attrQueuingStatusCode: ros.IResolvable | string;
    /**
     * Attribute RandomPreQueueEnable: Random queue switch.
     */
    readonly attrRandomPreQueueEnable: ros.IResolvable | string;
    /**
     * Attribute SessionDuration: User session duration in minutes.
     */
    readonly attrSessionDuration: ros.IResolvable | string;
    /**
     * Attribute StartTime: The timestamp of the event start time.
     */
    readonly attrStartTime: ros.IResolvable | string;
    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    readonly attrTotalActiveUsers: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.
     */
    readonly attrWaitingRoomEventId: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomEventName: Event name, custom event description.
     */
    readonly attrWaitingRoomEventName: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https://help.aliyun.com/document_detail/2850279.html) interface.
     */
    readonly attrWaitingRoomId: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomType: Waiting room type.
     */
    readonly attrWaitingRoomType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::WaitingRoomEvent`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitingRoomEvent`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomevent
 */
export declare class WaitingRoomEvent extends ros.Resource implements IWaitingRoomEvent {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WaitingRoomEventProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    readonly attrCustomPageHtml: ros.IResolvable | string;
    /**
     * Attribute Description: Waiting room description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisableSessionRenewalEnable: Disable session renewal.
     */
    readonly attrDisableSessionRenewalEnable: ros.IResolvable | string;
    /**
     * Attribute EndTime: The timestamp of the end time of the event.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute JsonResponseEnable: JSON response switch.
     */
    readonly attrJsonResponseEnable: ros.IResolvable | string;
    /**
     * Attribute Language: Default language setting.
     */
    readonly attrLanguage: ros.IResolvable | string;
    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    readonly attrNewUsersPerMinute: ros.IResolvable | string;
    /**
     * Attribute PreQueueEnable: Pre-queue switch.
     */
    readonly attrPreQueueEnable: ros.IResolvable | string;
    /**
     * Attribute PreQueueStartTime: Pre-queue start time.
     */
    readonly attrPreQueueStartTime: ros.IResolvable | string;
    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    readonly attrQueuingMethod: ros.IResolvable | string;
    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    readonly attrQueuingStatusCode: ros.IResolvable | string;
    /**
     * Attribute RandomPreQueueEnable: Random queue switch.
     */
    readonly attrRandomPreQueueEnable: ros.IResolvable | string;
    /**
     * Attribute SessionDuration: User session duration in minutes.
     */
    readonly attrSessionDuration: ros.IResolvable | string;
    /**
     * Attribute StartTime: The timestamp of the event start time.
     */
    readonly attrStartTime: ros.IResolvable | string;
    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    readonly attrTotalActiveUsers: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomEventId: The waiting room event ID, which can be obtained by calling the [ListWaitingRoomEvents](https://help.aliyun.com/document_detail/2850279.html) operation.
     */
    readonly attrWaitingRoomEventId: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomEventName: Event name, custom event description.
     */
    readonly attrWaitingRoomEventName: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https://help.aliyun.com/document_detail/2850279.html) interface.
     */
    readonly attrWaitingRoomId: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomType: Waiting room type.
     */
    readonly attrWaitingRoomType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitingRoomEventProps, enableResourcePropertyConstraint?: boolean);
}
