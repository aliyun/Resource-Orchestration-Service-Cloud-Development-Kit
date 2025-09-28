import * as ros from '@alicloud/ros-cdk-core';
import { RosWaitingRoom } from './esa.generated';
export { RosWaitingRoom as WaitingRoomProperty };
/**
 * Properties for defining a `WaitingRoom`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
export interface WaitingRoomProps {
    /**
     * Property cookieName: The name of the custom cookie.
     */
    readonly cookieName: string | ros.IResolvable;
    /**
     * Property hostNameAndPath: The hostname and path.
     */
    readonly hostNameAndPath: Array<RosWaitingRoom.HostNameAndPathProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property newUsersPerMinute: The maximum number of new users per minute.
     */
    readonly newUsersPerMinute: number | ros.IResolvable;
    /**
     * Property queuingMethod: The queuing method. Value:
     * - `random`: Users gain access to the origin randomly, regardless of the arrival time.
     * - `fifo`: Users gain access to the origin in order of arrival.
     * - `Passthrough`: Users pass through the waiting room and go straight to the origin.
     * - `Reject-all`: Users are blocked from reaching the origin.
     */
    readonly queuingMethod: string | ros.IResolvable;
    /**
     * Property queuingStatusCode: Waiting room status code. Value:
     * - `200`
     * - `202`
     * - `429`.
     */
    readonly queuingStatusCode: number | ros.IResolvable;
    /**
     * Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
     */
    readonly sessionDuration: number | ros.IResolvable;
    /**
     * Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property status: Waiting room enabled status. Value:
     * - 'on': Enable waiting room
     * - 'off': Disabled waiting room
     */
    readonly status: string | ros.IResolvable;
    /**
     * Property totalActiveUsers: The maximum number of active users.
     */
    readonly totalActiveUsers: string | ros.IResolvable;
    /**
     * Property waitingRoomName: The name of the waiting room.
     */
    readonly waitingRoomName: string | ros.IResolvable;
    /**
     * Property waitingRoomType: The type of the waiting room, support:
     * - `default`: Indicates the default type.
     * - `custom`: indicates a custom type.
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
     * Property disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly disableSessionRenewalEnable?: string | ros.IResolvable;
    /**
     * Property jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly jsonResponseEnable?: string | ros.IResolvable;
    /**
     * Property language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
     * - `enus`: English.
     * - `zhcn`: Simplified Chinese.
     * - `zhhk`: Traditional Chinese.
     */
    readonly language?: string | ros.IResolvable;
    /**
     * Property queueAllEnable: Specifies whether to queue all requests. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly queueAllEnable?: string | ros.IResolvable;
}
/**
 * Represents a `WaitingRoom`.
 */
export interface IWaitingRoom extends ros.IResource {
    readonly props: WaitingRoomProps;
    /**
     * Attribute CookieName: Custom Cookie name.
     */
    readonly attrCookieName: ros.IResolvable | string;
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
     * Attribute HostNameAndPath: Host name and path.
     */
    readonly attrHostNameAndPath: ros.IResolvable | string;
    /**
     * Attribute JsonResponseEnable: The JSON response. If the accept request header contains "application/json", JSON data is returned.
     */
    readonly attrJsonResponseEnable: ros.IResolvable | string;
    /**
     * Attribute Language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in.
     */
    readonly attrLanguage: ros.IResolvable | string;
    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    readonly attrNewUsersPerMinute: ros.IResolvable | string;
    /**
     * Attribute QueueAllEnable: All in line.
     */
    readonly attrQueueAllEnable: ros.IResolvable | string;
    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    readonly attrQueuingMethod: ros.IResolvable | string;
    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    readonly attrQueuingStatusCode: ros.IResolvable | string;
    /**
     * Attribute SessionDuration: Session duration in minutes.
     */
    readonly attrSessionDuration: ros.IResolvable | string;
    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    readonly attrTotalActiveUsers: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomId: The waiting room ID.
     */
    readonly attrWaitingRoomId: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomName: The name of the waiting room.
     */
    readonly attrWaitingRoomName: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomType: Waiting room type, support:.
     */
    readonly attrWaitingRoomType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::WaitingRoom`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWaitingRoom`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
export declare class WaitingRoom extends ros.Resource implements IWaitingRoom {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WaitingRoomProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CookieName: Custom Cookie name.
     */
    readonly attrCookieName: ros.IResolvable | string;
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
     * Attribute HostNameAndPath: Host name and path.
     */
    readonly attrHostNameAndPath: ros.IResolvable | string;
    /**
     * Attribute JsonResponseEnable: The JSON response. If the accept request header contains "application/json", JSON data is returned.
     */
    readonly attrJsonResponseEnable: ros.IResolvable | string;
    /**
     * Attribute Language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in.
     */
    readonly attrLanguage: ros.IResolvable | string;
    /**
     * Attribute NewUsersPerMinute: Number of new users per minute.
     */
    readonly attrNewUsersPerMinute: ros.IResolvable | string;
    /**
     * Attribute QueueAllEnable: All in line.
     */
    readonly attrQueueAllEnable: ros.IResolvable | string;
    /**
     * Attribute QueuingMethod: Way of queuing.
     */
    readonly attrQueuingMethod: ros.IResolvable | string;
    /**
     * Attribute QueuingStatusCode: Waiting room status code.
     */
    readonly attrQueuingStatusCode: ros.IResolvable | string;
    /**
     * Attribute SessionDuration: Session duration in minutes.
     */
    readonly attrSessionDuration: ros.IResolvable | string;
    /**
     * Attribute TotalActiveUsers: Total number of active users.
     */
    readonly attrTotalActiveUsers: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomId: The waiting room ID.
     */
    readonly attrWaitingRoomId: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomName: The name of the waiting room.
     */
    readonly attrWaitingRoomName: ros.IResolvable | string;
    /**
     * Attribute WaitingRoomType: Waiting room type, support:.
     */
    readonly attrWaitingRoomType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WaitingRoomProps, enableResourcePropertyConstraint?: boolean);
}
