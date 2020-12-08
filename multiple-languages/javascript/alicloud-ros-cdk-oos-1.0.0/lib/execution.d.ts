import * as ros from '@alicloud/ros-cdk-core';
import { RosExecution } from './oos.generated';
export { RosExecution as ExecutionProperty };
/**
 * Properties for defining a `ALIYUN::OOS::Execution`
 */
export interface ExecutionProps {
    /**
     * @Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
     */
    readonly templateName: string;
    /**
     * @Property mode: Execution mode.
     */
    readonly mode?: string;
    /**
     * @Property parameters: Parameters for the execution of template.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property parentExecutionId: Parent execution ID.
     */
    readonly parentExecutionId?: string;
    /**
     * @Property resourceOptions: Resource options user by ROS.
     */
    readonly resourceOptions?: RosExecution.ResourceOptionsProperty | ros.IResolvable;
    /**
     * @Property safetyCheck: Security check mode. Allowed values:
     * - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    readonly safetyCheck?: string;
    /**
     * @Property templateVersion: Version number of template. Default to the latest version.
     */
    readonly templateVersion?: string;
}
/**
 * A ROS resource type:  `ALIYUN::OOS::Execution`
 */
export declare class Execution extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    readonly attrCounters: any;
    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}'
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrCurlCli: any;
    /**
     * @Attribute ExecutionId: Execution ID.
     */
    readonly attrExecutionId: any;
    /**
     * @Attribute Outputs: Execution output.
     */
    readonly attrOutputs: any;
    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}'
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrPowerShellCurlCli: any;
    /**
     * @Attribute Status: Execution status.
     */
    readonly attrStatus: any;
    /**
     * @Attribute StatusMessage: Execution status information.
     */
    readonly attrStatusMessage: any;
    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}"
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrWindowsCurlCli: any;
    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExecutionProps, enableResourcePropertyConstraint?: boolean);
}
