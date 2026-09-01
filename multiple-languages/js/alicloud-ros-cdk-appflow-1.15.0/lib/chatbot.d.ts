import * as ros from '@alicloud/ros-cdk-core';
import { RosChatbot } from './appflow.generated';
export { RosChatbot as ChatbotProperty };
/**
 * Properties for defining a `Chatbot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
 */
export interface ChatbotProps {
    /**
     * Property chatbotName: The name of the chatbot.
     */
    readonly chatbotName: string | ros.IResolvable;
    /**
     * Property chatbotConfig: AI assistant configuration.
     */
    readonly chatbotConfig?: RosChatbot.ChatbotConfigProperty | ros.IResolvable;
    /**
     * Property chatbotDesc: The description of the chatbot.
     */
    readonly chatbotDesc?: string | ros.IResolvable;
    /**
     * Property chatbotIcon: The icon of the chatbot.
     */
    readonly chatbotIcon?: string | ros.IResolvable;
    /**
     * Property from: The source of the request.
     */
    readonly from?: string | ros.IResolvable;
    /**
     * Property templateId: The ID of the chatbot template.
     */
    readonly templateId?: string | ros.IResolvable;
}
/**
 * Represents a `Chatbot`.
 */
export interface IChatbot extends ros.IResource {
    readonly props: ChatbotProps;
    /**
     * Attribute ChatbotId: The ID of the chatbot.
     */
    readonly attrChatbotId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::Chatbot`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosChatbot`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
 */
export declare class Chatbot extends ros.Resource implements IChatbot {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ChatbotProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ChatbotId: The ID of the chatbot.
     */
    readonly attrChatbotId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChatbotProps, enableResourcePropertyConstraint?: boolean);
}
