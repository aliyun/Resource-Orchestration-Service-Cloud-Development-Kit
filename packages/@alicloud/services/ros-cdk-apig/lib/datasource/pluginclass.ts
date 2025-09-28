import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginClass } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class PluginClass extends ros.Resource implements IPluginClass {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PluginClassProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Alias: The alias of the plugin class.
     */
    public readonly attrAlias: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the plugin class.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Document: The document of the plugin.
     */
    public readonly attrDocument: ros.IResolvable | string;

    /**
     * Attribute PluginClassName: The name of the plugin class.
     */
    public readonly attrPluginClassName: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the plugin class.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute WasmLanguage: Wasm language.
     */
    public readonly attrWasmLanguage: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginClassProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPluginClass = new RosPluginClass(this, id,  {
            pluginClassId: props.pluginClassId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPluginClass;
        this.attrAlias = rosPluginClass.attrAlias;
        this.attrDescription = rosPluginClass.attrDescription;
        this.attrDocument = rosPluginClass.attrDocument;
        this.attrPluginClassName = rosPluginClass.attrPluginClassName;
        this.attrType = rosPluginClass.attrType;
        this.attrWasmLanguage = rosPluginClass.attrWasmLanguage;
    }
}
