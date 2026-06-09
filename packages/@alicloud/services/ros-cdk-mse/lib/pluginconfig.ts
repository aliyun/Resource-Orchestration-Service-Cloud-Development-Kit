import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginConfig } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPluginConfig as PluginConfigProperty };

/**
 * Properties for defining a `PluginConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
export interface PluginConfigProps {

    /**
     * Property configLevel: The scope of the plugin application.
     * - 0: Global
     * - 1: Route
     * - 2: Domain
     */
    readonly configLevel: number | ros.IResolvable;

    /**
     * Property enable: Whether to enable the plugin.
     */
    readonly enable: boolean | ros.IResolvable;

    /**
     * Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * Property pluginId: The ID of the gateway plugin.
     */
    readonly pluginId: number | ros.IResolvable;

    /**
     * Property config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
     */
    readonly config?: string | ros.IResolvable;

    /**
     * Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
     */
    readonly resourceIdList?: Array<number | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `PluginConfig`.
 */
export interface IPluginConfig extends ros.IResource {
    readonly props: PluginConfigProps;

    /**
     * Attribute PluginConfigId: The ID of the plugin config.
     */
    readonly attrPluginConfigId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MSE::PluginConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
export class PluginConfig extends ros.Resource implements IPluginConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PluginConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PluginConfigId: The ID of the plugin config.
     */
    public readonly attrPluginConfigId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPluginConfig = new RosPluginConfig(this, id,  {
            configLevel: props.configLevel,
            gatewayUniqueId: props.gatewayUniqueId,
            config: props.config,
            enable: props.enable,
            resourceIdList: props.resourceIdList,
            pluginId: props.pluginId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPluginConfig;
        this.attrPluginConfigId = rosPluginConfig.attrPluginConfigId;
    }
}
