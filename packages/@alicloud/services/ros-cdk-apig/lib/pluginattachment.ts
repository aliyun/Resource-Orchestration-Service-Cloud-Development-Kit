import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginAttachment } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `PluginAttachment`.
 */
export interface IPluginAttachment extends ros.IResource {
    readonly props: PluginAttachmentProps;

    /**
     * Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    readonly attrAttachResourceId: ros.IResolvable | string;

    /**
     * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    readonly attrAttachResourceIds: ros.IResolvable | string;

    /**
     * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    readonly attrAttachResourceNames: ros.IResolvable | string;

    /**
     * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    readonly attrAttachResourceParentIds: ros.IResolvable | string;

    /**
     * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    readonly attrAttachResourceType: ros.IResolvable | string;

    /**
     * Attribute Enable: Whether to enable this plugin.
     */
    readonly attrEnable: ros.IResolvable | string;

    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;

    /**
     * Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    readonly attrPluginAttachmentId: ros.IResolvable | string;

    /**
     * Attribute PluginClassInfo: The type of the plugin.
     */
    readonly attrPluginClassInfo: ros.IResolvable | string;

    /**
     * Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    readonly attrPluginInfo: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::PluginAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginattachment
 */
export class PluginAttachment extends ros.Resource implements IPluginAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PluginAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AttachResourceId: The resource ID to be attached by the plugin.
     */
    public readonly attrAttachResourceId: ros.IResolvable | string;

    /**
     * Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.
     */
    public readonly attrAttachResourceIds: ros.IResolvable | string;

    /**
     * Attribute AttachResourceNames: The list of resource names to be attached by the plugin.
     */
    public readonly attrAttachResourceNames: ros.IResolvable | string;

    /**
     * Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.
     */
    public readonly attrAttachResourceParentIds: ros.IResolvable | string;

    /**
     * Attribute AttachResourceType: The type of the resource to be attached by the plugin.
     */
    public readonly attrAttachResourceType: ros.IResolvable | string;

    /**
     * Attribute Enable: Whether to enable this plugin.
     */
    public readonly attrEnable: ros.IResolvable | string;

    /**
     * Attribute EnvironmentId: The ID of the environment.
     */
    public readonly attrEnvironmentId: ros.IResolvable | string;

    /**
     * Attribute PluginAttachmentId: The ID of plugin attachment.
     */
    public readonly attrPluginAttachmentId: ros.IResolvable | string;

    /**
     * Attribute PluginClassInfo: The type of the plugin.
     */
    public readonly attrPluginClassInfo: ros.IResolvable | string;

    /**
     * Attribute PluginInfo: The information about the association of plugin with gateway instance.
     */
    public readonly attrPluginInfo: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPluginAttachment = new RosPluginAttachment(this, id,  {
            attachResourceIds: props.attachResourceIds,
            environmentId: props.environmentId,
            enable: props.enable,
            pluginInfo: props.pluginInfo,
            attachResourceId: props.attachResourceId,
            attachResourceType: props.attachResourceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPluginAttachment;
        this.attrAttachResourceId = rosPluginAttachment.attrAttachResourceId;
        this.attrAttachResourceIds = rosPluginAttachment.attrAttachResourceIds;
        this.attrAttachResourceNames = rosPluginAttachment.attrAttachResourceNames;
        this.attrAttachResourceParentIds = rosPluginAttachment.attrAttachResourceParentIds;
        this.attrAttachResourceType = rosPluginAttachment.attrAttachResourceType;
        this.attrEnable = rosPluginAttachment.attrEnable;
        this.attrEnvironmentId = rosPluginAttachment.attrEnvironmentId;
        this.attrPluginAttachmentId = rosPluginAttachment.attrPluginAttachmentId;
        this.attrPluginClassInfo = rosPluginAttachment.attrPluginClassInfo;
        this.attrPluginInfo = rosPluginAttachment.attrPluginInfo;
    }
}
