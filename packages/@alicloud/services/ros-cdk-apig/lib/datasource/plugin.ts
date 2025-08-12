import * as ros from '@alicloud/ros-cdk-core';
import { RosPlugin } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPlugin as PluginProperty };

/**
 * Properties for defining a `Plugin`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
 */
export interface PluginProps {

    /**
     * Property pluginId: The ID of the plugin.
     */
    readonly pluginId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Plugin`.
 */
export interface IPlugin extends ros.IResource {
    readonly props: PluginProps;

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute GatewayName: The name of the gateway name.
     */
    readonly attrGatewayName: ros.IResolvable | string;

    /**
     * Attribute PluginClassId: The ID of the plugin class.
     */
    readonly attrPluginClassId: ros.IResolvable | string;

    /**
     * Attribute PluginId: The ID of the plugin.
     */
    readonly attrPluginId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Plugin`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPlugin`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-plugin
 */
export class Plugin extends ros.Resource implements IPlugin {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PluginProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute GatewayName: The name of the gateway name.
     */
    public readonly attrGatewayName: ros.IResolvable | string;

    /**
     * Attribute PluginClassId: The ID of the plugin class.
     */
    public readonly attrPluginClassId: ros.IResolvable | string;

    /**
     * Attribute PluginId: The ID of the plugin.
     */
    public readonly attrPluginId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPlugin = new RosPlugin(this, id,  {
            pluginId: props.pluginId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPlugin;
        this.attrGatewayId = rosPlugin.attrGatewayId;
        this.attrGatewayName = rosPlugin.attrGatewayName;
        this.attrPluginClassId = rosPlugin.attrPluginClassId;
        this.attrPluginId = rosPlugin.attrPluginId;
    }
}
