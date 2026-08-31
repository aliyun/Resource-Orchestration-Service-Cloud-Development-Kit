import * as ros from '@alicloud/ros-cdk-core';
import { RosChatbotFlow } from './appflow.generated';
export { RosChatbotFlow as ChatbotFlowProperty };
/**
 * Properties for defining a `ChatbotFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
 */
export interface ChatbotFlowProps {
    /**
     * Property chatbotId: The ID of the chatbot.
     */
    readonly chatbotId: string | ros.IResolvable;
    /**
     * Property flowConfig: The config of the chatbot flow.
     */
    readonly flowConfig?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property flowName: The name of the chatbot flow.
     */
    readonly flowName?: string | ros.IResolvable;
    /**
     * Property flowType: The type of the chatbot flow.
     */
    readonly flowType?: string | ros.IResolvable;
}
/**
 * Represents a `ChatbotFlow`.
 */
export interface IChatbotFlow extends ros.IResource {
    readonly props: ChatbotFlowProps;
    /**
     * Attribute ChatbotFlowId: The ID of the chatbot flow.
     */
    readonly attrChatbotFlowId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::ChatbotFlow`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosChatbotFlow`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
 */
export declare class ChatbotFlow extends ros.Resource implements IChatbotFlow {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ChatbotFlowProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ChatbotFlowId: The ID of the chatbot flow.
     */
    readonly attrChatbotFlowId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChatbotFlowProps, enableResourcePropertyConstraint?: boolean);
}
