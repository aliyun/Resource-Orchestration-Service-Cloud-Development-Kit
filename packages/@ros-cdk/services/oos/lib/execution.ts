import * as ros from '@ros-cdk/core';
import { RosExecution } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
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
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
export class Execution extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    public readonly attrCounters: any;

    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrCurlCli: any;

    /**
     * @Attribute ExecutionId: Execution ID.
     */
    public readonly attrExecutionId: any;

    /**
     * @Attribute Outputs: Execution output.
     */
    public readonly attrOutputs: any;

    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrPowerShellCurlCli: any;

    /**
     * @Attribute Status: Execution status.
     */
    public readonly attrStatus: any;

    /**
     * @Attribute StatusMessage: Execution status information.
     */
    public readonly attrStatusMessage: any;

    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}" 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrWindowsCurlCli: any;

    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ExecutionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosExecution = new RosExecution(this, id,  {
            parentExecutionId: props.parentExecutionId,
            resourceOptions: props.resourceOptions,
            parameters: props.parameters,
            safetyCheck: props.safetyCheck ? props.safetyCheck : 'ConfirmEveryHighRiskAction',
            mode: props.mode ? props.mode : 'Automatic',
            templateName: props.templateName,
            templateVersion: props.templateVersion,
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
