import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginAttachment } from './apigateway.generated';
export { RosPluginAttachment as PluginAttachmentProperty };
/**
 * Properties for defining a `PluginAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
 */
export interface PluginAttachmentProps {
    /**
     * Property apiId: The ID of the API to which you want to bind the plug-in.
     */
    readonly apiId: string | ros.IResolvable;
    /**
     * Property pluginId: The ID of the plugin that you want to bind.
     */
    readonly pluginId: string | ros.IResolvable;
    /**
     * Property stageName: The name of the runtime environment. Valid values:
     * RELEASE: indicates the release environment.
     * PRE: indicates the pre-release environment.
     * TEST: indicates the test environment.
     */
    readonly stageName: string | ros.IResolvable;
}
/**
 * Represents a `PluginAttachment`.
 */
export interface IPluginAttachment extends ros.IResource {
    readonly props: PluginAttachmentProps;
    /**
     * Attribute ApiId: The api id.
     */
    readonly attrApiId: ros.IResolvable | string;
    /**
     * Attribute PluginId: The plugin id.
     */
    readonly attrPluginId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::PluginAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-pluginattachment
 */
export declare class PluginAttachment extends ros.Resource implements IPluginAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PluginAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApiId: The api id.
     */
    readonly attrApiId: ros.IResolvable | string;
    /**
     * Attribute PluginId: The plugin id.
     */
    readonly attrPluginId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
