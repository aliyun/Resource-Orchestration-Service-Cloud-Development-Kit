import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginClass } from './apig.generated';
export { RosPluginClass as PluginClassProperty };
/**
 * Properties for defining a `PluginClass`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
 */
export interface PluginClassProps {
    /**
     * Property pluginClassId: The ID of the plugin class.
     */
    readonly pluginClassId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `PluginClass`.
 */
export interface IPluginClass extends ros.IResource {
    readonly props: PluginClassProps;
    /**
     * Attribute Alias: The alias of the plugin class.
     */
    readonly attrAlias: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the plugin class.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Document: The document of the plugin.
     */
    readonly attrDocument: ros.IResolvable | string;
    /**
     * Attribute PluginClassName: The name of the plugin class.
     */
    readonly attrPluginClassName: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the plugin class.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute WasmLanguage: Wasm language.
     */
    readonly attrWasmLanguage: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::PluginClass`, which is used to query the information about a plug-in class.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginClass`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclass
 */
export declare class PluginClass extends ros.Resource implements IPluginClass {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PluginClassProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Alias: The alias of the plugin class.
     */
    readonly attrAlias: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the plugin class.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute Document: The document of the plugin.
     */
    readonly attrDocument: ros.IResolvable | string;
    /**
     * Attribute PluginClassName: The name of the plugin class.
     */
    readonly attrPluginClassName: ros.IResolvable | string;
    /**
     * Attribute Type: The type of the plugin class.
     */
    readonly attrType: ros.IResolvable | string;
    /**
     * Attribute WasmLanguage: Wasm language.
     */
    readonly attrWasmLanguage: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginClassProps, enableResourcePropertyConstraint?: boolean);
}
