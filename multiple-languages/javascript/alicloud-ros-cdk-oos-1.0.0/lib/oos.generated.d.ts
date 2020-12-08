import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::OOS::Execution`
 */
export interface RosExecutionProps {
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
 * A ROS template type:  `ALIYUN::OOS::Execution`
 */
export declare class RosExecution extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Execution";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
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
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters, and can not begin to ALIYUN, ACS, ALIBABA.
     */
    templateName: string;
    /**
     * @Property mode: Execution mode.
     */
    mode: string | undefined;
    /**
     * @Property parameters: Parameters for the execution of template.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property parentExecutionId: Parent execution ID.
     */
    parentExecutionId: string | undefined;
    /**
     * @Property resourceOptions: Resource options user by ROS.
     */
    resourceOptions: RosExecution.ResourceOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property safetyCheck: Security check mode. Allowed values:
     * - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    safetyCheck: string | undefined;
    /**
     * @Property templateVersion: Version number of template. Default to the latest version.
     */
    templateVersion: string | undefined;
    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExecutionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosExecution {
    /**
     * @stability external
     */
    interface ResourceOptionsProperty {
        /**
         * @Property cancelOnDelete: Whether to cancel execution for resource deletion, if the execution is not completed. Default to false.
         */
        readonly cancelOnDelete?: boolean | ros.IResolvable;
        /**
         * @Property timeout: Timeout seconds before the completion of execution. Default to 1800.
         */
        readonly timeout?: number;
        /**
         * @Property successStatuses: It is used for ROS to judge if resource creation is successful.
     * Default to [Success].
     * ROS will wait util some status in SuccessStatuses or FailureStatuses.
     * FailureStatuses has higher priority.
     * Specified all statuses(Started,Queued,Running,Waiting,Success,Failed,Cancelled) if you do not want to wait for the completion of execution.
         */
        readonly successStatuses?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property failureStatuses: It is used for ROS to judge if resource creation fails.
     * Default to [Failed, Cancelled].
     * ROS will wait util some status in SuccessStatuses or FailureStatuses.
     * FailureStatuses has higher priority.
         */
        readonly failureStatuses?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::OOS::Parameter`
 */
export interface RosParameterProps {
    /**
     * @Property name: The name of the parameter.
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly name: string;
    /**
     * @Property type: The data type of the common parameter.
     * Valid values: String and StringList.
     */
    readonly type: string;
    /**
     * @Property value: The value of the parameter.
     * The value must be 1 to 4096 characters in length.
     */
    readonly value: string;
    /**
     * @Property constraints: The constraints of the parameter.
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    readonly constraints?: string;
    /**
     * @Property description: The description of the parameter.
     * The description must be 1 to 200 characters in length.
     */
    readonly description?: string;
}
/**
 * A ROS template type:  `ALIYUN::OOS::Parameter`
 */
export declare class RosParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Parameter";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute Name: The Name of the parameter.
     */
    readonly attrName: any;
    /**
     * @Attribute Value: The Value of the parameter.
     */
    readonly attrValue: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the parameter.
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_).
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    name: string;
    /**
     * @Property type: The data type of the common parameter.
     * Valid values: String and StringList.
     */
    type: string;
    /**
     * @Property value: The value of the parameter.
     * The value must be 1 to 4096 characters in length.
     */
    value: string;
    /**
     * @Property constraints: The constraints of the parameter.
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    constraints: string | undefined;
    /**
     * @Property description: The description of the parameter.
     * The description must be 1 to 200 characters in length.
     */
    description: string | undefined;
    /**
     * Create a new `ALIYUN::OOS::Parameter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::OOS::Template`
 */
export interface RosTemplateProps {
    /**
     * @Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    readonly content: string;
    /**
     * @Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    readonly templateName: string;
    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: ros.RosTag[];
}
/**
 * A ROS template type:  `ALIYUN::OOS::Template`
 */
export declare class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Template";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ExecutionPolicy: Execution Policy
     */
    readonly attrExecutionPolicy: any;
    /**
     * @Attribute TemplateId: Template ID
     */
    readonly attrTemplateId: any;
    /**
     * @Attribute TemplateName: Template Name
     */
    readonly attrTemplateName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    content: string;
    /**
     * @Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    templateName: string;
    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags: ros.TagManager;
    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
