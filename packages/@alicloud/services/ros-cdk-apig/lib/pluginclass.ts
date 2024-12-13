import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginClass } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPluginClass as PluginClassProperty };

/**
 * Properties for defining a `PluginClass`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
export interface PluginClassProps {

    /**
     * Property description: The description of the plugin class.
     */
    readonly description: string | ros.IResolvable;

    /**
     * Property executePriority: The execute priority of the Plugin.
     */
    readonly executePriority: number | ros.IResolvable;

    /**
     * Property executeStage: The Execution stage.
     */
    readonly executeStage: string | ros.IResolvable;

    /**
     * Property pluginClassName: The name of the plugin class.
     */
    readonly pluginClassName: string | ros.IResolvable;

    /**
     * Property version: The version of plugin class.
     */
    readonly version: string | ros.IResolvable;

    /**
     * Property versionDescription: The description of the version .
     */
    readonly versionDescription: string | ros.IResolvable;

    /**
     * Property wasmLanguage: the language of the wasm.
     */
    readonly wasmLanguage: string | ros.IResolvable;

    /**
     * Property wasmUrl: The url of the wasm.
     */
    readonly wasmUrl: string | ros.IResolvable;

    /**
     * Property alias: The alias of the plugin class.
     */
    readonly alias?: string | ros.IResolvable;

    /**
     * Property supportedMinGatewayVersion: The supported minimum gateway version.
     */
    readonly supportedMinGatewayVersion?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::PluginClass`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginClass`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-pluginclass
 */
export class PluginClass extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PluginClassProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Alias: The alias of the plugin class.
     */
    public readonly attrAlias: ros.IResolvable;

    /**
     * Attribute Description: The description of the plugin class.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute Document: The document of plugin.
     */
    public readonly attrDocument: ros.IResolvable;

    /**
     * Attribute PluginClassName: The name of the plugin class.
     */
    public readonly attrPluginClassName: ros.IResolvable;

    /**
     * Attribute Type: The type of the plugin class.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * Attribute WasmLanguage: Wasm language.
     */
    public readonly attrWasmLanguage: ros.IResolvable;

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
            wasmUrl: props.wasmUrl,
            versionDescription: props.versionDescription,
            description: props.description,
            pluginClassName: props.pluginClassName,
            version: props.version,
            alias: props.alias,
            executePriority: props.executePriority,
            supportedMinGatewayVersion: props.supportedMinGatewayVersion,
            wasmLanguage: props.wasmLanguage,
            executeStage: props.executeStage,
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
