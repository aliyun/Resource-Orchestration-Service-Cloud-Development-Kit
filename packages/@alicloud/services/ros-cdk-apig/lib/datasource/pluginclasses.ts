import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginClasses } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPluginClasses as PluginClassesProperty };

/**
 * Properties for defining a `PluginClasses`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
 */
export interface PluginClassesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property type: The type of the plugin class.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Represents a `PluginClasses`.
 */
export interface IPluginClasses extends ros.IResource {
    readonly props: PluginClassesProps;

    /**
     * Attribute PluginClassIds: The list of plugin class IDs.
     */
    readonly attrPluginClassIds: ros.IResolvable | string;

    /**
     * Attribute PluginClasses: The list of plugin classes.
     */
    readonly attrPluginClasses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::PluginClasses`, which is used to query plug-in classes.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPluginClasses`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-pluginclasses
 */
export class PluginClasses extends ros.Resource implements IPluginClasses {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PluginClassesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute PluginClassIds: The list of plugin class IDs.
     */
    public readonly attrPluginClassIds: ros.IResolvable | string;

    /**
     * Attribute PluginClasses: The list of plugin classes.
     */
    public readonly attrPluginClasses: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginClassesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPluginClasses = new RosPluginClasses(this, id,  {
            type: props.type,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPluginClasses;
        this.attrPluginClassIds = rosPluginClasses.attrPluginClassIds;
        this.attrPluginClasses = rosPluginClasses.attrPluginClasses;
    }
}
