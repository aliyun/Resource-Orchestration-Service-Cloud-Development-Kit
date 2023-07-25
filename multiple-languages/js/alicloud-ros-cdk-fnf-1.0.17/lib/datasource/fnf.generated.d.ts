import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::FNF::Flows`
 */
export interface RosFlowsProps {
}
/**
 * A ROS template type:  `DATASOURCE::FNF::Flows`
 */
export declare class RosFlows extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Flows";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FNF::Flows`.
     *
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
 * Properties for defining a `DATASOURCE::FNF::Schedules`
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
}
/**
 * A ROS template type:  `DATASOURCE::FNF::Schedules`
 */
export declare class RosSchedules extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::FNF::Schedules";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::FNF::Schedules`.
     *
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
