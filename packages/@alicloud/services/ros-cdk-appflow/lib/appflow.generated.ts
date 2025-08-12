// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosChatbot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
 */
export interface RosChatbotProps {

    /**
     * @Property chatbotName: The name of the chatbot.
     */
    readonly chatbotName: string | ros.IResolvable;

    /**
     * @Property chatbotConfig: AI assistant configuration.
     */
    readonly chatbotConfig?: RosChatbot.ChatbotConfigProperty | ros.IResolvable;

    /**
     * @Property chatbotDesc: The description of the chatbot.
     */
    readonly chatbotDesc?: string | ros.IResolvable;

    /**
     * @Property chatbotIcon: The icon of the chatbot.
     */
    readonly chatbotIcon?: string | ros.IResolvable;

    /**
     * @Property from: The source of the request.
     */
    readonly from?: string | ros.IResolvable;

    /**
     * @Property templateId: The ID of the chatbot template.
     */
    readonly templateId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosChatbotProps`
 *
 * @param properties - the TypeScript properties of a `RosChatbotProps`
 *
 * @returns the result of the validation.
 */
function RosChatbotPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('chatbotConfig', RosChatbot_ChatbotConfigPropertyValidator)(properties.chatbotConfig));
    errors.collect(ros.propertyValidator('chatbotName', ros.requiredValidator)(properties.chatbotName));
    errors.collect(ros.propertyValidator('chatbotName', ros.validateString)(properties.chatbotName));
    errors.collect(ros.propertyValidator('chatbotIcon', ros.validateString)(properties.chatbotIcon));
    errors.collect(ros.propertyValidator('chatbotDesc', ros.validateString)(properties.chatbotDesc));
    errors.collect(ros.propertyValidator('from', ros.validateString)(properties.from));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "RosChatbotProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot` resource
 *
 * @param properties - the TypeScript properties of a `RosChatbotProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot` resource.
 */
// @ts-ignore TS6133
function rosChatbotPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosChatbotPropsValidator(properties).assertSuccess();
    }
    return {
      'ChatbotName': ros.stringToRosTemplate(properties.chatbotName),
      'ChatbotConfig': rosChatbotChatbotConfigPropertyToRosTemplate(properties.chatbotConfig),
      'ChatbotDesc': ros.stringToRosTemplate(properties.chatbotDesc),
      'ChatbotIcon': ros.stringToRosTemplate(properties.chatbotIcon),
      'From': ros.stringToRosTemplate(properties.from),
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::Chatbot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Chatbot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
 */
export class RosChatbot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::Chatbot";

    /**
     * @Attribute ChatbotId: The ID of the chatbot.
     */
    public readonly attrChatbotId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chatbotName: The name of the chatbot.
     */
    public chatbotName: string | ros.IResolvable;

    /**
     * @Property chatbotConfig: AI assistant configuration.
     */
    public chatbotConfig: RosChatbot.ChatbotConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property chatbotDesc: The description of the chatbot.
     */
    public chatbotDesc: string | ros.IResolvable | undefined;

    /**
     * @Property chatbotIcon: The icon of the chatbot.
     */
    public chatbotIcon: string | ros.IResolvable | undefined;

    /**
     * @Property from: The source of the request.
     */
    public from: string | ros.IResolvable | undefined;

    /**
     * @Property templateId: The ID of the chatbot template.
     */
    public templateId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChatbotProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosChatbot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrChatbotId = this.getAtt('ChatbotId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chatbotName = props.chatbotName;
        this.chatbotConfig = props.chatbotConfig;
        this.chatbotDesc = props.chatbotDesc;
        this.chatbotIcon = props.chatbotIcon;
        this.from = props.from;
        this.templateId = props.templateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chatbotName: this.chatbotName,
            chatbotConfig: this.chatbotConfig,
            chatbotDesc: this.chatbotDesc,
            chatbotIcon: this.chatbotIcon,
            from: this.from,
            templateId: this.templateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosChatbotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosChatbot {
    /**
     * @stability external
     */
    export interface ChatbotConfigProperty {
        /**
         * @Property config: AI assistant configuration.
         */
        readonly config?: RosChatbot.ConfigProperty | ros.IResolvable;
        /**
         * @Property welcome: Welcome message for the chatbot.
         */
        readonly welcome?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ChatbotConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ChatbotConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosChatbot_ChatbotConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('config', RosChatbot_ConfigPropertyValidator)(properties.config));
    errors.collect(ros.propertyValidator('welcome', ros.validateString)(properties.welcome));
    return errors.wrap('supplied properties not correct for "ChatbotConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot.ChatbotConfig` resource
 *
 * @param properties - the TypeScript properties of a `ChatbotConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot.ChatbotConfig` resource.
 */
// @ts-ignore TS6133
function rosChatbotChatbotConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosChatbot_ChatbotConfigPropertyValidator(properties).assertSuccess();
    return {
      'Config': rosChatbotConfigPropertyToRosTemplate(properties.config),
      'Welcome': ros.stringToRosTemplate(properties.welcome),
    };
}

export namespace RosChatbot {
    /**
     * @stability external
     */
    export interface ConfigProperty {
        /**
         * @Property historyCount: Number of context messages to retain.
         */
        readonly historyCount?: number | ros.IResolvable;
        /**
         * @Property input: Placeholder text for the input box.
         */
        readonly input?: string | ros.IResolvable;
        /**
         * @Property slsLogEnabled: Whether SLS logging is enabled.
         */
        readonly slsLogEnabled?: boolean | ros.IResolvable;
        /**
         * @Property showDocumentReference: Whether to show document references.
         */
        readonly showDocumentReference?: boolean | ros.IResolvable;
        /**
         * @Property slsProjectInfo: SLS project configuration information.
         */
        readonly slsProjectInfo?: RosChatbot.SlsProjectInfoProperty | ros.IResolvable;
        /**
         * @Property prompt: Dialogue context or background prompt.
         */
        readonly prompt?: string | ros.IResolvable;
        /**
         * @Property questions: Predefined questions for the chatbot.
         */
        readonly questions?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosChatbot_ConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('historyCount', ros.validateNumber)(properties.historyCount));
    errors.collect(ros.propertyValidator('input', ros.validateString)(properties.input));
    errors.collect(ros.propertyValidator('slsLogEnabled', ros.validateBoolean)(properties.slsLogEnabled));
    errors.collect(ros.propertyValidator('showDocumentReference', ros.validateBoolean)(properties.showDocumentReference));
    errors.collect(ros.propertyValidator('slsProjectInfo', RosChatbot_SlsProjectInfoPropertyValidator)(properties.slsProjectInfo));
    errors.collect(ros.propertyValidator('prompt', ros.validateString)(properties.prompt));
    errors.collect(ros.propertyValidator('questions', ros.listValidator(ros.validateString))(properties.questions));
    return errors.wrap('supplied properties not correct for "ConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot.Config` resource
 *
 * @param properties - the TypeScript properties of a `ConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot.Config` resource.
 */
// @ts-ignore TS6133
function rosChatbotConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosChatbot_ConfigPropertyValidator(properties).assertSuccess();
    return {
      'HistoryCount': ros.numberToRosTemplate(properties.historyCount),
      'Input': ros.stringToRosTemplate(properties.input),
      'SlsLogEnabled': ros.booleanToRosTemplate(properties.slsLogEnabled),
      'ShowDocumentReference': ros.booleanToRosTemplate(properties.showDocumentReference),
      'SlsProjectInfo': rosChatbotSlsProjectInfoPropertyToRosTemplate(properties.slsProjectInfo),
      'Prompt': ros.stringToRosTemplate(properties.prompt),
      'Questions': ros.listMapper(ros.stringToRosTemplate)(properties.questions),
    };
}

export namespace RosChatbot {
    /**
     * @stability external
     */
    export interface SlsProjectInfoProperty {
        /**
         * @Property logStoreName: SLS logstore name.
         */
        readonly logStoreName?: string | ros.IResolvable;
        /**
         * @Property projectName: SLS project name.
         */
        readonly projectName?: string | ros.IResolvable;
        /**
         * @Property regionId: Region ID for the SLS project.
         */
        readonly regionId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SlsProjectInfoProperty`
 *
 * @param properties - the TypeScript properties of a `SlsProjectInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosChatbot_SlsProjectInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logStoreName', ros.validateString)(properties.logStoreName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "SlsProjectInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot.SlsProjectInfo` resource
 *
 * @param properties - the TypeScript properties of a `SlsProjectInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Chatbot.SlsProjectInfo` resource.
 */
// @ts-ignore TS6133
function rosChatbotSlsProjectInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosChatbot_SlsProjectInfoPropertyValidator(properties).assertSuccess();
    return {
      'LogStoreName': ros.stringToRosTemplate(properties.logStoreName),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'RegionId': ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * Properties for defining a `RosChatbotFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
 */
export interface RosChatbotFlowProps {

    /**
     * @Property chatbotId: The ID of the chatbot.
     */
    readonly chatbotId: string | ros.IResolvable;

    /**
     * @Property flowConfig: The config of the chatbot flow.
     */
    readonly flowConfig?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property flowName: The name of the chatbot flow.
     */
    readonly flowName?: string | ros.IResolvable;

    /**
     * @Property flowType: The type of the chatbot flow.
     */
    readonly flowType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosChatbotFlowProps`
 *
 * @param properties - the TypeScript properties of a `RosChatbotFlowProps`
 *
 * @returns the result of the validation.
 */
function RosChatbotFlowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowConfig', ros.hashValidator(ros.validateAny))(properties.flowConfig));
    errors.collect(ros.propertyValidator('chatbotId', ros.requiredValidator)(properties.chatbotId));
    errors.collect(ros.propertyValidator('chatbotId', ros.validateString)(properties.chatbotId));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    errors.collect(ros.propertyValidator('flowType', ros.validateString)(properties.flowType));
    return errors.wrap('supplied properties not correct for "RosChatbotFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::ChatbotFlow` resource
 *
 * @param properties - the TypeScript properties of a `RosChatbotFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::ChatbotFlow` resource.
 */
// @ts-ignore TS6133
function rosChatbotFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosChatbotFlowPropsValidator(properties).assertSuccess();
    }
    return {
      'ChatbotId': ros.stringToRosTemplate(properties.chatbotId),
      'FlowConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.flowConfig),
      'FlowName': ros.stringToRosTemplate(properties.flowName),
      'FlowType': ros.stringToRosTemplate(properties.flowType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::ChatbotFlow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ChatbotFlow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
 */
export class RosChatbotFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::ChatbotFlow";

    /**
     * @Attribute ChatbotFlowId: The ID of the chatbot flow.
     */
    public readonly attrChatbotFlowId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chatbotId: The ID of the chatbot.
     */
    public chatbotId: string | ros.IResolvable;

    /**
     * @Property flowConfig: The config of the chatbot flow.
     */
    public flowConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property flowName: The name of the chatbot flow.
     */
    public flowName: string | ros.IResolvable | undefined;

    /**
     * @Property flowType: The type of the chatbot flow.
     */
    public flowType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChatbotFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosChatbotFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrChatbotFlowId = this.getAtt('ChatbotFlowId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chatbotId = props.chatbotId;
        this.flowConfig = props.flowConfig;
        this.flowName = props.flowName;
        this.flowType = props.flowType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chatbotId: this.chatbotId,
            flowConfig: this.flowConfig,
            flowName: this.flowName,
            flowType: this.flowType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosChatbotFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosChatbotModel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
 */
export interface RosChatbotModelProps {

    /**
     * @Property chatbotId: The ID of the chatbot.
     */
    readonly chatbotId: string | ros.IResolvable;

    /**
     * @Property modelActionId: The ID of the model action.
     */
    readonly modelActionId?: string | ros.IResolvable;

    /**
     * @Property modelId: The ID of the model.
     */
    readonly modelId?: string | ros.IResolvable;

    /**
     * @Property parameters: The parameters of the model.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property status: The status of the model.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property userAuthConfigId: The ID of the user auth config.
     */
    readonly userAuthConfigId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosChatbotModelProps`
 *
 * @param properties - the TypeScript properties of a `RosChatbotModelProps`
 *
 * @returns the result of the validation.
 */
function RosChatbotModelPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Enabled","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('chatbotId', ros.requiredValidator)(properties.chatbotId));
    errors.collect(ros.propertyValidator('chatbotId', ros.validateString)(properties.chatbotId));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('userAuthConfigId', ros.validateString)(properties.userAuthConfigId));
    errors.collect(ros.propertyValidator('modelActionId', ros.validateString)(properties.modelActionId));
    errors.collect(ros.propertyValidator('modelId', ros.validateString)(properties.modelId));
    return errors.wrap('supplied properties not correct for "RosChatbotModelProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::ChatbotModel` resource
 *
 * @param properties - the TypeScript properties of a `RosChatbotModelProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::ChatbotModel` resource.
 */
// @ts-ignore TS6133
function rosChatbotModelPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosChatbotModelPropsValidator(properties).assertSuccess();
    }
    return {
      'ChatbotId': ros.stringToRosTemplate(properties.chatbotId),
      'ModelActionId': ros.stringToRosTemplate(properties.modelActionId),
      'ModelId': ros.stringToRosTemplate(properties.modelId),
      'Parameters': ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      'Status': ros.stringToRosTemplate(properties.status),
      'UserAuthConfigId': ros.stringToRosTemplate(properties.userAuthConfigId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::ChatbotModel`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ChatbotModel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
 */
export class RosChatbotModel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::ChatbotModel";

    /**
     * @Attribute ChatbotModelId: The ID of the chatbot model.
     */
    public readonly attrChatbotModelId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property chatbotId: The ID of the chatbot.
     */
    public chatbotId: string | ros.IResolvable;

    /**
     * @Property modelActionId: The ID of the model action.
     */
    public modelActionId: string | ros.IResolvable | undefined;

    /**
     * @Property modelId: The ID of the model.
     */
    public modelId: string | ros.IResolvable | undefined;

    /**
     * @Property parameters: The parameters of the model.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the model.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property userAuthConfigId: The ID of the user auth config.
     */
    public userAuthConfigId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChatbotModelProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosChatbotModel.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrChatbotModelId = this.getAtt('ChatbotModelId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.chatbotId = props.chatbotId;
        this.modelActionId = props.modelActionId;
        this.modelId = props.modelId;
        this.parameters = props.parameters;
        this.status = props.status;
        this.userAuthConfigId = props.userAuthConfigId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            chatbotId: this.chatbotId,
            modelActionId: this.modelActionId,
            modelId: this.modelId,
            parameters: this.parameters,
            status: this.status,
            userAuthConfigId: this.userAuthConfigId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosChatbotModelPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export interface RosFlowProps {

    /**
     * @Property flowName: The name of the flow.
     */
    readonly flowName: string | ros.IResolvable;

    /**
     * @Property flowDesc: The description of the flow.
     */
    readonly flowDesc?: string | ros.IResolvable;

    /**
     * @Property flowId: The ID of the flow.
     */
    readonly flowId?: string | ros.IResolvable;

    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    readonly flowStatus?: string | ros.IResolvable;

    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    readonly launchFlow?: boolean | ros.IResolvable;

    /**
     * @Property parameters: The parameters of the flow.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property template: The template of the flow.
     */
    readonly template?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property templateId: The ID of the template.
     */
    readonly templateId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the result of the validation.
 */
function RosFlowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowId', ros.validateString)(properties.flowId));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('flowDesc', ros.validateString)(properties.flowDesc));
    errors.collect(ros.propertyValidator('flowName', ros.requiredValidator)(properties.flowName));
    errors.collect(ros.propertyValidator('flowName', ros.validateString)(properties.flowName));
    errors.collect(ros.propertyValidator('launchFlow', ros.validateBoolean)(properties.launchFlow));
    if(properties.flowStatus && (typeof properties.flowStatus) !== 'object') {
        errors.collect(ros.propertyValidator('flowStatus', ros.validateAllowedValues)({
          data: properties.flowStatus,
          allowedValues: ["Enable","Disable"],
        }));
    }
    errors.collect(ros.propertyValidator('flowStatus', ros.validateString)(properties.flowStatus));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    errors.collect(ros.propertyValidator('template', ros.hashValidator(ros.validateAny))(properties.template));
    return errors.wrap('supplied properties not correct for "RosFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Flow` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::Flow` resource.
 */
// @ts-ignore TS6133
function rosFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowPropsValidator(properties).assertSuccess();
    }
    return {
      'FlowName': ros.stringToRosTemplate(properties.flowName),
      'FlowDesc': ros.stringToRosTemplate(properties.flowDesc),
      'FlowId': ros.stringToRosTemplate(properties.flowId),
      'FlowStatus': ros.stringToRosTemplate(properties.flowStatus),
      'LaunchFlow': ros.booleanToRosTemplate(properties.launchFlow),
      'Parameters': ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      'Template': ros.hashMapper(ros.objectToRosTemplate)(properties.template),
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::Flow`, which is used to create a flow.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::Flow";

    /**
     * @Attribute FlowId: The ID of the flow.
     */
    public readonly attrFlowId: ros.IResolvable;

    /**
     * @Attribute WebhookAddress: The webhook address of the flow.
     */
    public readonly attrWebhookAddress: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property flowName: The name of the flow.
     */
    public flowName: string | ros.IResolvable;

    /**
     * @Property flowDesc: The description of the flow.
     */
    public flowDesc: string | ros.IResolvable | undefined;

    /**
     * @Property flowId: The ID of the flow.
     */
    public flowId: string | ros.IResolvable | undefined;

    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    public flowStatus: string | ros.IResolvable | undefined;

    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    public launchFlow: boolean | ros.IResolvable | undefined;

    /**
     * @Property parameters: The parameters of the flow.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property template: The template of the flow.
     */
    public template: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property templateId: The ID of the template.
     */
    public templateId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFlowId = this.getAtt('FlowId');
        this.attrWebhookAddress = this.getAtt('WebhookAddress');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.flowName = props.flowName;
        this.flowDesc = props.flowDesc;
        this.flowId = props.flowId;
        this.flowStatus = props.flowStatus;
        this.launchFlow = props.launchFlow;
        this.parameters = props.parameters;
        this.template = props.template;
        this.templateId = props.templateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            flowName: this.flowName,
            flowDesc: this.flowDesc,
            flowId: this.flowId,
            flowStatus: this.flowStatus,
            launchFlow: this.launchFlow,
            parameters: this.parameters,
            template: this.template,
            templateId: this.templateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosUserAuthConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export interface RosUserAuthConfigProps {

    /**
     * @Property authConfig: AuthConfig
     */
    readonly authConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property authConfigName: The name of the config.
     */
    readonly authConfigName: string | ros.IResolvable;

    /**
     * @Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserAuthConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosUserAuthConfigProps`
 *
 * @returns the result of the validation.
 */
function RosUserAuthConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('authConfig', ros.requiredValidator)(properties.authConfig));
    errors.collect(ros.propertyValidator('authConfig', ros.hashValidator(ros.validateAny))(properties.authConfig));
    errors.collect(ros.propertyValidator('authConfigName', ros.requiredValidator)(properties.authConfigName));
    errors.collect(ros.propertyValidator('authConfigName', ros.validateString)(properties.authConfigName));
    errors.collect(ros.propertyValidator('connectorId', ros.requiredValidator)(properties.connectorId));
    errors.collect(ros.propertyValidator('connectorId', ros.validateString)(properties.connectorId));
    return errors.wrap('supplied properties not correct for "RosUserAuthConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::UserAuthConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosUserAuthConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::AppFlow::UserAuthConfig` resource.
 */
// @ts-ignore TS6133
function rosUserAuthConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserAuthConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'AuthConfig': ros.hashMapper(ros.objectToRosTemplate)(properties.authConfig),
      'AuthConfigName': ros.stringToRosTemplate(properties.authConfigName),
      'ConnectorId': ros.stringToRosTemplate(properties.connectorId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::UserAuthConfig`, which is used to create configurations for a user credential.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserAuthConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export class RosUserAuthConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::UserAuthConfig";

    /**
     * @Attribute AuthConfig: AuthConfig
     */
    public readonly attrAuthConfig: ros.IResolvable;

    /**
     * @Attribute AuthConfigId: The id of the config.
     */
    public readonly attrAuthConfigId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property authConfig: AuthConfig
     */
    public authConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property authConfigName: The name of the config.
     */
    public authConfigName: string | ros.IResolvable;

    /**
     * @Property connectorId: The id of connector.
     */
    public connectorId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserAuthConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserAuthConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthConfig = this.getAtt('AuthConfig');
        this.attrAuthConfigId = this.getAtt('AuthConfigId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.authConfig = props.authConfig;
        this.authConfigName = props.authConfigName;
        this.connectorId = props.connectorId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            authConfig: this.authConfig,
            authConfigName: this.authConfigName,
            connectorId: this.connectorId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserAuthConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
