import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-flow
 */
export interface RosFlowProps {
    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    readonly definition: string | ros.IResolvable;
    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: Create a description of the flow.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property executionMode: The execution mode of the flow.
     */
    readonly executionMode?: string | ros.IResolvable;
    /**
     * @Property externalStorageLocation: The external storage location for the flow.
     */
    readonly externalStorageLocation?: string | ros.IResolvable;
    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    readonly requestId?: string | ros.IResolvable;
    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    readonly roleArn?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FNF::Flow`, which is used to create a flow.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-flow
 */
export declare class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FNF::Flow";
    /**
     * @Attribute CreatedTime: Flow creation time.
     */
    readonly attrCreatedTime: ros.IResolvable;
    /**
     * @Attribute Id: The unique ID of the flow.
     */
    readonly attrId: ros.IResolvable;
    /**
     * @Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    readonly attrLastModifiedTime: ros.IResolvable;
    /**
     * @Attribute Name: The name of the flow created.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    definition: string | ros.IResolvable;
    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: Create a description of the flow.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property executionMode: The execution mode of the flow.
     */
    executionMode: string | ros.IResolvable | undefined;
    /**
     * @Property externalStorageLocation: The external storage location for the flow.
     */
    externalStorageLocation: string | ros.IResolvable | undefined;
    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    requestId: string | ros.IResolvable | undefined;
    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    roleArn: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosSchedule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
 */
export interface RosScheduleProps {
    /**
     * @Property cronExpression: Cron expression.
     */
    readonly cronExpression: string | ros.IResolvable;
    /**
     * @Property flowName: Flow name.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * @Property scheduleName: Schedule name.
     */
    readonly scheduleName: string | ros.IResolvable;
    /**
     * @Property description: Description of the schedule.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property enable: Whether enable schedule.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property payload: Payload.
     */
    readonly payload?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::FNF::Schedule`, which is used to create a time-based schedule.
 * @Note This class does not contain additional functions, so it is recommended to use the `Schedule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
 */
export declare class RosSchedule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FNF::Schedule";
    /**
     * @Attribute FlowName: Flow name.
     */
    readonly attrFlowName: ros.IResolvable;
    /**
     * @Attribute ScheduleId: Schedule Id
     */
    readonly attrScheduleId: ros.IResolvable;
    /**
     * @Attribute ScheduleName: Schedule name.
     */
    readonly attrScheduleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cronExpression: Cron expression.
     */
    cronExpression: string | ros.IResolvable;
    /**
     * @Property flowName: Flow name.
     */
    flowName: string | ros.IResolvable;
    /**
     * @Property scheduleName: Schedule name.
     */
    scheduleName: string | ros.IResolvable;
    /**
     * @Property description: Description of the schedule.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property enable: Whether enable schedule.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property payload: Payload.
     */
    payload: string | ros.IResolvable | undefined;
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
