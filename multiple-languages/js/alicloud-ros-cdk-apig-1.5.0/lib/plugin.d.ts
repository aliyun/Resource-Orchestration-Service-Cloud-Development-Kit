import * as ros from '@alicloud/ros-cdk-core';
import { RosPlugin } from './apig.generated';
export { RosPlugin as PluginProperty };
/**
 * Properties for defining a `Plugin`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
export interface PluginProps {
    /**
     * Property gatewayId: The ID of the Gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Plugin`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPlugin`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-plugin
 */
export declare class Plugin extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PluginProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * Attribute GatewayName: The name of the gateway.
     */
    readonly attrGatewayName: ros.IResolvable;
    /**
     * Attribute PluginClassId: The ID of the plugin class.
     */
    readonly attrPluginClassId: ros.IResolvable;
    /**
     * Attribute PluginId: The ID of the plugin.
     */
    readonly attrPluginId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginProps, enableResourcePropertyConstraint?: boolean);
}
