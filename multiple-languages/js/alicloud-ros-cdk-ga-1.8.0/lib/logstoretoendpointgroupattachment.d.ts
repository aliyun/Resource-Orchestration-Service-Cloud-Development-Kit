import * as ros from '@alicloud/ros-cdk-core';
import { RosLogStoreToEndpointGroupAttachment } from './ga.generated';
export { RosLogStoreToEndpointGroupAttachment as LogStoreToEndpointGroupAttachmentProperty };
/**
 * Properties for defining a `LogStoreToEndpointGroupAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
 */
export interface LogStoreToEndpointGroupAttachmentProps {
    /**
     * Property acceleratorId: Global Acceleration Instance ID.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property endpointGroupIds: Endpoint Group ID List.
     */
    readonly endpointGroupIds: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property listenerId: Listener ID.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * Property slsLogStoreName: SLS log library name.
     */
    readonly slsLogStoreName: string | ros.IResolvable;
    /**
     * Property slsProjectName: SLS project name.
     */
    readonly slsProjectName: string | ros.IResolvable;
    /**
     * Property slsRegionId: SLS Region ID.
     */
    readonly slsRegionId: string | ros.IResolvable;
}
/**
 * Represents a `LogStoreToEndpointGroupAttachment`.
 */
export interface ILogStoreToEndpointGroupAttachment extends ros.IResource {
    readonly props: LogStoreToEndpointGroupAttachmentProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::LogStoreToEndpointGroupAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLogStoreToEndpointGroupAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-logstoretoendpointgroupattachment
 */
export declare class LogStoreToEndpointGroupAttachment extends ros.Resource implements ILogStoreToEndpointGroupAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LogStoreToEndpointGroupAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LogStoreToEndpointGroupAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
