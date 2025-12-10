import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export interface RosFlowProps {
    /**
     * @Property flowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Flow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flow
 */
export declare class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Flow";
    /**
     * @Attribute CreateTime: The time when the flow was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Definition: The flow definition, which follows the flow definition language (FDL) syntax standard. Considering compatibility, the system supports the two flow definition specifications.
     */
    readonly attrDefinition: ros.IResolvable;
    /**
     * @Attribute Description: The description of the flow.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute FlowId: The unique ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable;
    /**
     * @Attribute FlowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    readonly attrFlowName: ros.IResolvable;
    /**
     * @Attribute LastModifiedTime: The time when the flow was last modified.
     */
    readonly attrLastModifiedTime: ros.IResolvable;
    /**
     * @Attribute RoleArn: The Alibaba Cloud resource name (ARN) of the authorized role on which the execution of the flow relies. During the execution of the flow, CloudFlow assumes the role to call API operations of relevant services.
     */
    readonly attrRoleArn: ros.IResolvable;
    /**
     * @Attribute Type: The type of the flow. Valid values are FDL or DEFAULT.
     */
    readonly attrType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowName: The name of the flow. The name must be unique within a region for the same Alibaba Cloud account.
     */
    flowName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosFlows`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export interface RosFlowsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Flows`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flows` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-flows
 */
export declare class RosFlows extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Flows";
    /**
     * @Attribute FlowNames: The list of flow names.
     */
    readonly attrFlowNames: ros.IResolvable;
    /**
     * @Attribute Flows: The details about flows.
     */
    readonly attrFlows: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSchedule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export interface RosScheduleProps {
    /**
     * @Property flowName: The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * @Property scheduleName: The name of the time-based schedule. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly scheduleName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Schedule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Schedule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedule
 */
export declare class RosSchedule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Schedule";
    /**
     * @Attribute CreateTime: The time when the time-based schedule was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CronExpression: The CRON expression of the time-based schedule to be created.
     */
    readonly attrCronExpression: ros.IResolvable;
    /**
     * @Attribute Description: The description of the time-based schedule to be created.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute LastModifiedTime: The time when the time-based schedule was last updated.
     */
    readonly attrLastModifiedTime: ros.IResolvable;
    /**
     * @Attribute Payload: The trigger message of the time-based schedule to be created.
     */
    readonly attrPayload: ros.IResolvable;
    /**
     * @Attribute ScheduleId: The ID of the time-based schedule.
     */
    readonly attrScheduleId: ros.IResolvable;
    /**
     * @Attribute ScheduleName: The name of the time-based schedule to be created.
     */
    readonly attrScheduleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowName: The name of the flow that is associated with the time-based schedule. The name must be unique within the region and cannot be modified after the time-based schedule is created. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    flowName: string | ros.IResolvable;
    /**
     * @Property scheduleName: The name of the time-based schedule. The name must meet the following conventions:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    scheduleName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSchedules`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
 */
export interface RosSchedulesProps {
    /**
     * @Property flowName: The name of the flow that is bound to the time-based schedule.
     * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::FNF::Schedules`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Schedules` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
 */
export declare class RosSchedules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Schedules";
    /**
     * @Attribute ScheduleNames: The list of schedule names.
     */
    readonly attrScheduleNames: ros.IResolvable;
    /**
     * @Attribute Schedules: The queried time-based schedules.
     */
    readonly attrSchedules: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowName: The name of the flow that is bound to the time-based schedule.
     * The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
     * The name can contain letters, digits, underscores (_), and hyphens (-).
     * The name must start with a letter or an underscore (_).
     * The name is case-sensitive.
     * The name must be 1 to 128 characters in length.
     */
    flowName: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSchedulesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
