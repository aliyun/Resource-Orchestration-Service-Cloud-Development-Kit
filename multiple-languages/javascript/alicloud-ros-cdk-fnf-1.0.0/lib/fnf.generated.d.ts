import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::FNF::Flow`
 */
export interface RosFlowProps {
    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    readonly definition: string;
    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    readonly name: string;
    /**
     * @Property description: Create a description of the flow.
     */
    readonly description?: string;
    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    readonly requestId?: string;
    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    readonly roleArn?: string;
}
/**
 * A ROS template type:  `ALIYUN::FNF::Flow`
 */
export declare class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FNF::Flow";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CreatedTime: Flow creation time.
     */
    readonly attrCreatedTime: any;
    /**
     * @Attribute Id: The unique ID of the flow.
     */
    readonly attrId: any;
    /**
     * @Attribute LastModifiedTime: The most recently modified time of the flow.
     */
    readonly attrLastModifiedTime: any;
    /**
     * @Attribute Name: The name of the flow created.
     */
    readonly attrName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property definition: The definition of the created flow following the FDL syntax standard.
     */
    definition: string;
    /**
     * @Property name: The name of the flow created. This name is unique under the account.
     */
    name: string;
    /**
     * @Property description: Create a description of the flow.
     */
    description: string | undefined;
    /**
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    requestId: string | undefined;
    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    roleArn: string | undefined;
    /**
     * Create a new `ALIYUN::FNF::Flow`.
     *
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
 * Properties for defining a `ALIYUN::FNF::Schedule`
 */
export interface RosScheduleProps {
    /**
     * @Property cronExpression: Cron expression.
     */
    readonly cronExpression: string;
    /**
     * @Property flowName: Flow name.
     */
    readonly flowName: string;
    /**
     * @Property scheduleName: Schedule name.
     */
    readonly scheduleName: string;
    /**
     * @Property description: Description of the schedule.
     */
    readonly description?: string;
    /**
     * @Property enable: Whether enable schedule.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * @Property payload: Payload.
     */
    readonly payload?: string;
}
/**
 * A ROS template type:  `ALIYUN::FNF::Schedule`
 */
export declare class RosSchedule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FNF::Schedule";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute FlowName: Flow name.
     */
    readonly attrFlowName: any;
    /**
     * @Attribute ScheduleId: Schedule Id
     */
    readonly attrScheduleId: any;
    /**
     * @Attribute ScheduleName: Schedule name.
     */
    readonly attrScheduleName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cronExpression: Cron expression.
     */
    cronExpression: string;
    /**
     * @Property flowName: Flow name.
     */
    flowName: string;
    /**
     * @Property scheduleName: Schedule name.
     */
    scheduleName: string;
    /**
     * @Property description: Description of the schedule.
     */
    description: string | undefined;
    /**
     * @Property enable: Whether enable schedule.
     */
    enable: boolean | ros.IResolvable | undefined;
    /**
     * @Property payload: Payload.
     */
    payload: string | undefined;
    /**
     * Create a new `ALIYUN::FNF::Schedule`.
     *
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
