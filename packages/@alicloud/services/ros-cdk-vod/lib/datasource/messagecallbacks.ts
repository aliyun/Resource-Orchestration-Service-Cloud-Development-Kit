import * as ros from '@alicloud/ros-cdk-core';
import { RosMessageCallbacks } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosMessageCallbacks as MessageCallbacksProperty };

/**
 * Properties for defining a `MessageCallbacks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
 */
export interface MessageCallbacksProps {

    /**
     * Property appId: The ID of the application.
     */
    readonly appId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `MessageCallbacks`.
 */
export interface IMessageCallbacks extends ros.IResource {
    readonly props: MessageCallbacksProps;

    /**
     * Attribute AppIds: The list of app IDs.
     */
    readonly attrAppIds: ros.IResolvable | string;

    /**
     * Attribute MessageCallbacks: The list of message callbacks.
     */
    readonly attrMessageCallbacks: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::MessageCallbacks`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMessageCallbacks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-messagecallbacks
 */
export class MessageCallbacks extends ros.Resource implements IMessageCallbacks {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: MessageCallbacksProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppIds: The list of app IDs.
     */
    public readonly attrAppIds: ros.IResolvable | string;

    /**
     * Attribute MessageCallbacks: The list of message callbacks.
     */
    public readonly attrMessageCallbacks: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MessageCallbacksProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosMessageCallbacks = new RosMessageCallbacks(this, id,  {
            appId: props.appId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMessageCallbacks;
        this.attrAppIds = rosMessageCallbacks.attrAppIds;
        this.attrMessageCallbacks = rosMessageCallbacks.attrMessageCallbacks;
    }
}
