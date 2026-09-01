import * as ros from '@alicloud/ros-cdk-core';
import { RosFlowlog } from './cen.generated';
export { RosFlowlog as FlowlogProperty };
/**
 * Properties for defining a `Flowlog`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
 */
export interface FlowlogProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property description: The description of the flow log.
     * The description is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property flowLogName: The flow log name.
     * The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly flowLogName?: string | ros.IResolvable;
    /**
     * Property interval: The time window for collecting log data. Unit: seconds. Valid values: 60 and 600. Default value: 600.
     */
    readonly interval?: number | ros.IResolvable;
    /**
     * Property logFormatString: The strings that define the fields in the flow log.
     * Format: ${Field 1}${Field 2}${Field 3}...{Field n}
     *     * If you do not configure this parameter, all fields are included in the flow log.
     *     * If you configure this parameter, start the string with ${srcaddr}${dstaddr}${bytes} because ${srcaddr}${dstaddr}${bytes} are required variables.
     */
    readonly logFormatString?: string | ros.IResolvable;
    /**
     * Property logStoreName: The Logstore that stores the captured traffic data.
     * * If a Logstore is already created in the selected region, enter the name of the Logstore.
     * * If no Logstores are created in the selected region, enter a name and the system automatically creates a Logstore. The name of the Logstore. The name must meet the following requirements:
     *     ** The name must be unique in a project.
     *     ** The name can contain only lowercase letters, digits, hyphens (-), and underscores (_).
     *     ** The name must start and end with a lowercase letter or a digit.
     *     ** The name must be 3 to 63 characters in length.
     */
    readonly logStoreName?: string | ros.IResolvable;
    /**
     * Property projectName: The project that stores the captured traffic data.
     * * If a project is already created in the selected region, enter the name of the project.
     * * If no projects are created in the selected region, enter a name and the system automatically creates a project.
     *     The project name must be unique in a region. You cannot change the name after the project is created. The name must meet the following requirements:
     *         ** The name must be globally unique.
     *         ** The name can contain only lowercase letters, digits, and hyphens (-).
     *         ** The name must start and end with a lowercase letter or a digit.
     *         ** The name must be 3 to 63 characters in length.
     */
    readonly projectName?: string | ros.IResolvable;
    /**
     * Property tags: Tags of flow log.
     */
    readonly tags?: RosFlowlog.TagsProperty[];
    /**
     * Property transitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
     * If you create the flow log for a transfer router, skip this parameter.
     */
    readonly transitRouterAttachmentId?: string | ros.IResolvable;
    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}
/**
 * Represents a `Flowlog`.
 */
export interface IFlowlog extends ros.IResource {
    readonly props: FlowlogProps;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the flow log was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the flow log.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowLogId: The ID of the flow log.
     */
    readonly attrFlowLogId: ros.IResolvable | string;
    /**
     * Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable | string;
    /**
     * Attribute FlowLogVersion: The flow log version.
     */
    readonly attrFlowLogVersion: ros.IResolvable | string;
    /**
     * Attribute Interval: The time window for collecting log data.
     */
    readonly attrInterval: ros.IResolvable | string;
    /**
     * Attribute LogFormatString: The strings that define the fields in the flow log.
     */
    readonly attrLogFormatString: ros.IResolvable | string;
    /**
     * Attribute LogStoreName: The Logstore that stores the captured traffic data.
     */
    readonly attrLogStoreName: ros.IResolvable | string;
    /**
     * Attribute ProjectName: The project that stores the captured traffic data.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the flow log.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    readonly attrTransitRouterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::Flowlog`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosFlowlog`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-flowlog
 */
export declare class Flowlog extends ros.Resource implements IFlowlog {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: FlowlogProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the flow log was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the flow log.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute FlowLogId: The ID of the flow log.
     */
    readonly attrFlowLogId: ros.IResolvable | string;
    /**
     * Attribute FlowLogName: The flow log name.
     */
    readonly attrFlowLogName: ros.IResolvable | string;
    /**
     * Attribute FlowLogVersion: The flow log version.
     */
    readonly attrFlowLogVersion: ros.IResolvable | string;
    /**
     * Attribute Interval: The time window for collecting log data.
     */
    readonly attrInterval: ros.IResolvable | string;
    /**
     * Attribute LogFormatString: The strings that define the fields in the flow log.
     */
    readonly attrLogFormatString: ros.IResolvable | string;
    /**
     * Attribute LogStoreName: The Logstore that stores the captured traffic data.
     */
    readonly attrLogStoreName: ros.IResolvable | string;
    /**
     * Attribute ProjectName: The project that stores the captured traffic data.
     */
    readonly attrProjectName: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the flow log.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPC connection, VPN connection, VBR connection, ECR connection, or inter-region connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    readonly attrTransitRouterId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: FlowlogProps, enableResourcePropertyConstraint?: boolean);
}
