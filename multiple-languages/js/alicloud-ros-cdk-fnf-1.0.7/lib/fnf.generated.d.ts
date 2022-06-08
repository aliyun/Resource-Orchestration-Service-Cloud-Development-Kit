import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::FNF::Flow`
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
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    readonly requestId?: string | ros.IResolvable;
    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    readonly roleArn?: string | ros.IResolvable;
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
     * @Property requestId: The specified Request ID for this request. If not specified, our system will help you generate a random one.
     */
    requestId: string | ros.IResolvable | undefined;
    /**
     * @Property roleArn: Optional parameter, the resource descriptor information required for the execution of the flow, used to perform the assume role during FnF execution.
     */
    roleArn: string | ros.IResolvable | undefined;
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
//# sourceMappingURL=fnf.generated.d.ts.map