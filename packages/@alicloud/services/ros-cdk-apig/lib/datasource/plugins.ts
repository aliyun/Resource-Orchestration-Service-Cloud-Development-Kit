import * as ros from '@alicloud/ros-cdk-core';
import { RosPlugins } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPlugins as PluginsProperty };

/**
 * Properties for defining a `Plugins`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
 */
export interface PluginsProps {

    /**
     * Property gatewayId: The ID of the Cloud Native API Gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;

    /**
     * Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId?: string | ros.IResolvable;

    /**
     * Property pluginClassName: The name of the plugin class.
     */
    readonly pluginClassName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Plugins`.
 */
export interface IPlugins extends ros.IResource {
    readonly props: PluginsProps;

    /**
     * Attribute PluginIds: The list of plugin IDs.
     */
    readonly attrPluginIds: ros.IResolvable | string;

    /**
     * Attribute Plugins: The list of plugins.
     */
    readonly attrPlugins: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Plugins`, which is used to query plug-ins.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPlugins`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugins
 */
export class Plugins extends ros.Resource implements IPlugins {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PluginsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PluginIds: The list of plugin IDs.
     */
    public readonly attrPluginIds: ros.IResolvable | string;

    /**
     * Attribute Plugins: The list of plugins.
     */
    public readonly attrPlugins: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPlugins = new RosPlugins(this, id,  {
            pluginClassId: props.pluginClassId,
            pluginClassName: props.pluginClassName,
            gatewayId: props.gatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPlugins;
        this.attrPluginIds = rosPlugins.attrPluginIds;
        this.attrPlugins = rosPlugins.attrPlugins;
    }
}
