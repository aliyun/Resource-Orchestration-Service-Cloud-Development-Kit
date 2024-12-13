import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginAttachment } from './apig.generated';
export { RosPluginAttachment as PluginAttachmentProperty };
/**
 * Properties for defining a `PluginAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export interface PluginAttachmentProps {
    /**
     * Property pluginInfo: The information about the association of plugin with gateway instance.
     */
    readonly pluginInfo: RosPluginAttachment.PluginInfoProperty | ros.IResolvable;
    /**
     * Property attachResourceId: The resource ID to be attached by the plugin.
     */
    readonly attachResourceId?: string | ros.IResolvable;
    /**
     * Property attachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    readonly attachResourceIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property attachResourceType: The type of the resource to be attached by the plugin.
     */
    readonly attachResourceType?: string | ros.IResolvable;
    /**
     * Property enable: Whether to enable this plugin, default value is false.
     */
    readonly enable?: boolean | ros.IResolvable;
    /**
     * Property environmentId: The ID of the environment.
     */
    readonly environmentId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::PluginAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export declare class PluginAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PluginAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    readonly attrAttachResourceId: ros.IResolvable;
    /**
     * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    readonly attrAttachResourceIds: ros.IResolvable;
    /**
     * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    readonly attrAttachResourceNames: ros.IResolvable;
    /**
     * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    readonly attrAttachResourceParentIds: ros.IResolvable;
    /**
     * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    readonly attrAttachResourceType: ros.IResolvable;
    /**
     * Attribute Enable: Whether to enable this plugin.
     */
    readonly attrEnable: ros.IResolvable;
    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    readonly attrPluginAttachmentId: ros.IResolvable;
    /**
     * Attribute PluginClassInfo: The type of the plugin.
     */
    readonly attrPluginClassInfo: ros.IResolvable;
    /**
     * Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    readonly attrPluginInfo: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
