import * as ros from '@alicloud/ros-cdk-core';
import { RosChatbotModel } from './appflow.generated';
export { RosChatbotModel as ChatbotModelProperty };
/**
 * Properties for defining a `ChatbotModel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
 */
export interface ChatbotModelProps {
    /**
     * Property chatbotId: The ID of the chatbot.
     */
    readonly chatbotId: string | ros.IResolvable;
    /**
     * Property modelActionId: The ID of the model action.
     */
    readonly modelActionId?: string | ros.IResolvable;
    /**
     * Property modelId: The ID of the model.
     */
    readonly modelId?: string | ros.IResolvable;
    /**
     * Property parameters: The parameters of the model.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property status: The status of the model.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property userAuthConfigId: The ID of the user auth config.
     */
    readonly userAuthConfigId?: string | ros.IResolvable;
}
/**
 * Represents a `ChatbotModel`.
 */
export interface IChatbotModel extends ros.IResource {
    readonly props: ChatbotModelProps;
    /**
     * Attribute ChatbotModelId: The ID of the chatbot model.
     */
    readonly attrChatbotModelId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::ChatbotModel`The , which is used to create a chatbot model.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosChatbotModel`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
 */
export declare class ChatbotModel extends ros.Resource implements IChatbotModel {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ChatbotModelProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ChatbotModelId: The ID of the chatbot model.
     */
    readonly attrChatbotModelId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChatbotModelProps, enableResourcePropertyConstraint?: boolean);
}
