import * as ros from '@alicloud/ros-cdk-core';
import { RosStateConfiguration } from './oos.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosStateConfiguration as StateConfigurationProperty };

/**
 * Properties for defining a `StateConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
 */
export interface StateConfigurationProps {

    /**
     * Property scheduleExpression: The schedule expression. The interval between two schedules must be a minimum of 30 minutes.
     */
    readonly scheduleExpression: string | ros.IResolvable;

    /**
     * Property scheduleType: The schedule type. Set the value to rate.
     */
    readonly scheduleType: string | ros.IResolvable;

    /**
     * Property targets: The resources to be queried.
     */
    readonly targets: string | ros.IResolvable;

    /**
     * Property templateName: The name of the template. The name must be 1 to 200 characters in length and can contain letters, digits, hyphens (-), and underscores (_).
     */
    readonly templateName: string | ros.IResolvable;

    /**
     * Property configureMode: The configuration mode. Valid values: ApplyOnce: The configuration is applied only once. After a configuration is updated, the new configuration is applied. ApplyAndMonitor: The configuration is applied only once. After the configuration is applied, the system only checks whether the configuration is migrated in the future. ApplyAndAutoCorrect: The configuration is always applied.
     */
    readonly configureMode?: string | ros.IResolvable;

    /**
     * Property description: The description of the desired-state configuration.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property parameters: The parameters.
     */
    readonly parameters?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * Property templateVersion: The version number of the template. If you do not specify this parameter, the latest version of the template is used.
     */
    readonly templateVersion?: string | ros.IResolvable;
}

/**
 * Represents a `StateConfiguration`.
 */
export interface IStateConfiguration extends ros.IResource {
    readonly props: StateConfigurationProps;

    /**
     * Attribute StateConfigurationId: The ID of the desired-state configuration.
     */
    readonly attrStateConfigurationId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::StateConfiguration`, which is used to create a desired-state configuration.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStateConfiguration`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-stateconfiguration
 */
export class StateConfiguration extends ros.Resource implements IStateConfiguration {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: StateConfigurationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute StateConfigurationId: The ID of the desired-state configuration.
     */
    public readonly attrStateConfigurationId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StateConfigurationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosStateConfiguration = new RosStateConfiguration(this, id,  {
            configureMode: props.configureMode,
            scheduleExpression: props.scheduleExpression,
            scheduleType: props.scheduleType,
            description: props.description,
            parameters: props.parameters,
            resourceGroupId: props.resourceGroupId,
            templateName: props.templateName,
            templateVersion: props.templateVersion,
            targets: props.targets,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStateConfiguration;
        this.attrStateConfigurationId = rosStateConfiguration.attrStateConfigurationId;
    }
}
