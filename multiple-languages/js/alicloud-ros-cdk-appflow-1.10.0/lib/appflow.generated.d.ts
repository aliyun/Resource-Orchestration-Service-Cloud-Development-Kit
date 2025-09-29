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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::Chatbot`The , which resource is used to create a chatbot.
 * @Note This class does not contain additional functions, so it is recommended to use the `Chatbot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
 */
export declare class RosChatbot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::Chatbot";
    /**
     * @Attribute ChatbotId: The ID of the chatbot.
     */
    readonly attrChatbotId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chatbotName: The name of the chatbot.
     */
    chatbotName: string | ros.IResolvable;
    /**
     * @Property chatbotConfig: AI assistant configuration.
     */
    chatbotConfig: RosChatbot.ChatbotConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property chatbotDesc: The description of the chatbot.
     */
    chatbotDesc: string | ros.IResolvable | undefined;
    /**
     * @Property chatbotIcon: The icon of the chatbot.
     */
    chatbotIcon: string | ros.IResolvable | undefined;
    /**
     * @Property from: The source of the request.
     */
    from: string | ros.IResolvable | undefined;
    /**
     * @Property templateId: The ID of the chatbot template.
     */
    templateId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChatbotProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosChatbot {
    /**
     * @stability external
     */
    interface ChatbotConfigProperty {
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
export declare namespace RosChatbot {
    /**
     * @stability external
     */
    interface ConfigProperty {
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
export declare namespace RosChatbot {
    /**
     * @stability external
     */
    interface SlsProjectInfoProperty {
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
    readonly flowConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::ChatbotFlow`The , which type is used to create a chatbot flow.
 * @Note This class does not contain additional functions, so it is recommended to use the `ChatbotFlow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
 */
export declare class RosChatbotFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::ChatbotFlow";
    /**
     * @Attribute ChatbotFlowId: The ID of the chatbot flow.
     */
    readonly attrChatbotFlowId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chatbotId: The ID of the chatbot.
     */
    chatbotId: string | ros.IResolvable;
    /**
     * @Property flowConfig: The config of the chatbot flow.
     */
    flowConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property flowName: The name of the chatbot flow.
     */
    flowName: string | ros.IResolvable | undefined;
    /**
     * @Property flowType: The type of the chatbot flow.
     */
    flowType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChatbotFlowProps, enableResourcePropertyConstraint: boolean);
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::ChatbotModel`The , which is used to create a chatbot model.
 * @Note This class does not contain additional functions, so it is recommended to use the `ChatbotModel` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
 */
export declare class RosChatbotModel extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::ChatbotModel";
    /**
     * @Attribute ChatbotModelId: The ID of the chatbot model.
     */
    readonly attrChatbotModelId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chatbotId: The ID of the chatbot.
     */
    chatbotId: string | ros.IResolvable;
    /**
     * @Property modelActionId: The ID of the model action.
     */
    modelActionId: string | ros.IResolvable | undefined;
    /**
     * @Property modelId: The ID of the model.
     */
    modelId: string | ros.IResolvable | undefined;
    /**
     * @Property parameters: The parameters of the model.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the model.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property userAuthConfigId: The ID of the user auth config.
     */
    userAuthConfigId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosChatbotModelProps, enableResourcePropertyConstraint: boolean);
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
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property template: The template of the flow.
     */
    readonly template?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateId: The ID of the template.
     */
    readonly templateId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::Flow`, which is used to create a flow.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export declare class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::Flow";
    /**
     * @Attribute FlowId: The ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable;
    /**
     * @Attribute WebhookAddress: The webhook address of the flow.
     */
    readonly attrWebhookAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowName: The name of the flow.
     */
    flowName: string | ros.IResolvable;
    /**
     * @Property flowDesc: The description of the flow.
     */
    flowDesc: string | ros.IResolvable | undefined;
    /**
     * @Property flowId: The ID of the flow.
     */
    flowId: string | ros.IResolvable | undefined;
    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    flowStatus: string | ros.IResolvable | undefined;
    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    launchFlow: boolean | ros.IResolvable | undefined;
    /**
     * @Property parameters: The parameters of the flow.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property template: The template of the flow.
     */
    template: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateId: The ID of the template.
     */
    templateId: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosUserAuthConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export interface RosUserAuthConfigProps {
    /**
     * @Property authConfig: AuthConfig
     */
    readonly authConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::UserAuthConfig`, which is used to create configurations for a user credential.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserAuthConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export declare class RosUserAuthConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::UserAuthConfig";
    /**
     * @Attribute AuthConfig: AuthConfig
     */
    readonly attrAuthConfig: ros.IResolvable;
    /**
     * @Attribute AuthConfigId: The id of the config.
     */
    readonly attrAuthConfigId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property authConfig: AuthConfig
     */
    authConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property authConfigName: The name of the config.
     */
    authConfigName: string | ros.IResolvable;
    /**
     * @Property connectorId: The id of connector.
     */
    connectorId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserAuthConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
