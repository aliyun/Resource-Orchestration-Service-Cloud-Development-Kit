import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkFlow } from './schedulerx.generated';
export { RosWorkFlow as WorkFlowProperty };
/**
 * Properties for defining a `WorkFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
export interface WorkFlowProps {
    /**
     * Property groupId: The application Group ID, which is obtained from the application management page of the console.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    readonly namespace: string | ros.IResolvable;
    /**
     * Property timeType: Time type. Currently, the following time types are supported:
     * - cron: 1
     * - api: 100.
     */
    readonly timeType: number | ros.IResolvable;
    /**
     * Property workflowName: Workflow Name.
     */
    readonly workflowName: string | ros.IResolvable;
    /**
     * Property description: Workflow description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property maxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    readonly maxConcurrency?: number | ros.IResolvable;
    /**
     * Property namespaceSource: Special third parties are required.
     */
    readonly namespaceSource?: string | ros.IResolvable;
    /**
     * Property timeExpression: Time expression, which is set based on the selected time type.
     * - cron: Fill in standard cron expressions to support online verification.
     * - api: No time expression.
     */
    readonly timeExpression?: string | ros.IResolvable;
    /**
     * Property timezone: Time Zone.
     */
    readonly timezone?: string | ros.IResolvable;
}
/**
 * Represents a `WorkFlow`.
 */
export interface IWorkFlow extends ros.IResource {
    readonly props: WorkFlowProps;
    /**
     * Attribute Description: Workflow description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute MaxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    readonly attrMaxConcurrency: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Attribute TimeExpression: Time expression, which is set based on the selected time type.
     */
    readonly attrTimeExpression: ros.IResolvable | string;
    /**
     * Attribute TimeType: Time type.
     */
    readonly attrTimeType: ros.IResolvable | string;
    /**
     * Attribute WorkFlowId: workflow id.
     */
    readonly attrWorkFlowId: ros.IResolvable | string;
    /**
     * Attribute WorkflowName: Workflow Name.
     */
    readonly attrWorkflowName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SchedulerX::WorkFlow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
export declare class WorkFlow extends ros.Resource implements IWorkFlow {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkFlowProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: Workflow description.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute GroupId: The application Group ID, which is obtained from the application management page of the console.
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute MaxConcurrency: The maximum number of workflow instances running at the same time. The default value is 1, that is, the last trigger is not completed, and the next trigger will not be performed even when the running time is reached.
     */
    readonly attrMaxConcurrency: ros.IResolvable | string;
    /**
     * Attribute Namespace: The namespace ID, which is obtained from the namespace page in the console.
     */
    readonly attrNamespace: ros.IResolvable | string;
    /**
     * Attribute TimeExpression: Time expression, which is set based on the selected time type.
     */
    readonly attrTimeExpression: ros.IResolvable | string;
    /**
     * Attribute TimeType: Time type.
     */
    readonly attrTimeType: ros.IResolvable | string;
    /**
     * Attribute WorkFlowId: workflow id.
     */
    readonly attrWorkFlowId: ros.IResolvable | string;
    /**
     * Attribute WorkflowName: Workflow Name.
     */
    readonly attrWorkflowName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkFlowProps, enableResourcePropertyConstraint?: boolean);
}
