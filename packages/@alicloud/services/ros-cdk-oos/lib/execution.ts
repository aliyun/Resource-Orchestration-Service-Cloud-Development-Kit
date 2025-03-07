import * as ros from '@alicloud/ros-cdk-core';
import { RosExecution } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosExecution as ExecutionProperty };

/**
 * Properties for defining a `Execution`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
 */
export interface ExecutionProps {

    /**
     * Property description: The description of OOS Execution.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property loopMode: The loop mode of OOS Execution. Valid values:
     * - Automatic(Default): does not pause.
     * - FirstBatchPause: The first batch of pauses.
     * - EveryBatchPause: pause each batch.
     */
    readonly loopMode?: string | ros.IResolvable;

    /**
     * Property mode: Execution mode.
     */
    readonly mode?: string | ros.IResolvable;

    /**
     * Property parameters: Parameters for the execution of template.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * Property parentExecutionId: Parent execution ID.
     */
    readonly parentExecutionId?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property resourceOptions: Resource options user by ROS.
     */
    readonly resourceOptions?: RosExecution.ResourceOptionsProperty | ros.IResolvable;

    /**
     * Property safetyCheck: Security check mode. Allowed values:
     * - Skip (default): This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction: This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    readonly safetyCheck?: string | ros.IResolvable;

    /**
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * Property templateContent: The content of the template in the JSON or YAML format. This parameter is the same as the Content parameter that you can specify when you call the CreateTemplate operation. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
     */
    readonly templateContent?: string | ros.IResolvable;

    /**
     * Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
     */
    readonly templateName?: string | ros.IResolvable;

    /**
     * Property templateUrl: The Object Storage Service (OSS) URL of the object that stores the content of the Operation Orchestration Service (OOS) template. The access control list (ACL) of the object must be public-read. You can use this parameter to specify the tasks that you want to run. This way, you do not need to create a template before you start an execution. If you select an existing template, you do not need to specify this parameter.
     */
    readonly templateUrl?: string | ros.IResolvable;

    /**
     * Property templateVersion: Version number of template. Default to the latest version.
     */
    readonly templateVersion?: string | ros.IResolvable;
}

/**
 * Represents a `Execution`.
 */
export interface IExecution extends ros.IResource {
    readonly props: ExecutionProps;

    /**
     * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    readonly attrCounters: ros.IResolvable | string;

    /**
     * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrCurlCli: ros.IResolvable | string;

    /**
     * Attribute ExecutionId: Execution ID.
     */
    readonly attrExecutionId: ros.IResolvable | string;

    /**
     * Attribute Outputs: Execution output.
     */
    readonly attrOutputs: ros.IResolvable | string;

    /**
     * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrPowerShellCurlCli: ros.IResolvable | string;

    /**
     * Attribute Status: Execution status.
     */
    readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute StatusMessage: Execution status information.
     */
    readonly attrStatusMessage: ros.IResolvable | string;

    /**
     * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}" 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    readonly attrWindowsCurlCli: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::Execution`, which is used to start an execution.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosExecution`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-execution
 */
export class Execution extends ros.Resource implements IExecution {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ExecutionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    public readonly attrCounters: ros.IResolvable | string;

    /**
     * Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrCurlCli: ros.IResolvable | string;

    /**
     * Attribute ExecutionId: Execution ID.
     */
    public readonly attrExecutionId: ros.IResolvable | string;

    /**
     * Attribute Outputs: Execution output.
     */
    public readonly attrOutputs: ros.IResolvable | string;

    /**
     * Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrPowerShellCurlCli: ros.IResolvable | string;

    /**
     * Attribute Status: Execution status.
     */
    public readonly attrStatus: ros.IResolvable | string;

    /**
     * Attribute StatusMessage: Execution status information.
     */
    public readonly attrStatusMessage: ros.IResolvable | string;

    /**
     * Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}" 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrWindowsCurlCli: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExecutionProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosExecution = new RosExecution(this, id,  {
            parentExecutionId: props.parentExecutionId,
            resourceOptions: props.resourceOptions,
            loopMode: props.loopMode,
            description: props.description,
            parameters: props.parameters,
            resourceGroupId: props.resourceGroupId,
            templateContent: props.templateContent,
            mode: props.mode === undefined || props.mode === null ? 'Automatic' : props.mode,
            templateVersion: props.templateVersion,
            templateUrl: props.templateUrl,
            safetyCheck: props.safetyCheck === undefined || props.safetyCheck === null ? 'Skip' : props.safetyCheck,
            templateName: props.templateName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosExecution;
        this.attrCounters = rosExecution.attrCounters;
        this.attrCurlCli = rosExecution.attrCurlCli;
        this.attrExecutionId = rosExecution.attrExecutionId;
        this.attrOutputs = rosExecution.attrOutputs;
        this.attrPowerShellCurlCli = rosExecution.attrPowerShellCurlCli;
        this.attrStatus = rosExecution.attrStatus;
        this.attrStatusMessage = rosExecution.attrStatusMessage;
        this.attrWindowsCurlCli = rosExecution.attrWindowsCurlCli;
    }
}
