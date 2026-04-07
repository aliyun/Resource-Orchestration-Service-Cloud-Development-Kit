import * as ros from '@alicloud/ros-cdk-core';
import { RosChatbotModel } from './appflow.generated';
// Generated from the AliCloud ROS Resource Specification
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
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
export class ChatbotModel extends ros.Resource implements IChatbotModel {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ChatbotModelProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ChatbotModelId: The ID of the chatbot model.
     */
    public readonly attrChatbotModelId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChatbotModelProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosChatbotModel = new RosChatbotModel(this, id,  {
            status: props.status,
            chatbotId: props.chatbotId,
            parameters: props.parameters,
            userAuthConfigId: props.userAuthConfigId,
            modelActionId: props.modelActionId,
            modelId: props.modelId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosChatbotModel;
        this.attrChatbotModelId = rosChatbotModel.attrChatbotModelId;
    }
}
