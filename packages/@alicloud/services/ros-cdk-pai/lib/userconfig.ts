import * as ros from '@alicloud/ros-cdk-core';
import { RosUserConfig } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserConfig as UserConfigProperty };

/**
 * Properties for defining a `UserConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
 */
export interface UserConfigProps {

    /**
     * Property categoryName: Represents a resource attribute for a configuration category.
     */
    readonly categoryName: string | ros.IResolvable;

    /**
     * Property configKey: Represents the resource attribute of the configuration Key.
     */
    readonly configKey: string | ros.IResolvable;

    /**
     * Property configs: Represents a resource property for the configuration list.
     */
    readonly configs?: Array<RosUserConfig.ConfigsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `UserConfig`.
 */
export interface IUserConfig extends ros.IResource {
    readonly props: UserConfigProps;

    /**
     * Attribute CategoryName: Represents a resource attribute for a configuration category.
     */
    readonly attrCategoryName: ros.IResolvable | string;

    /**
     * Attribute ConfigKey: Represents the resource attribute of the configuration Key.
     */
    readonly attrConfigKey: ros.IResolvable | string;

    /**
     * Attribute Configs: Represents a resource property for the configuration list.
     */
    readonly attrConfigs: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::UserConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-userconfig
 */
export class UserConfig extends ros.Resource implements IUserConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: UserConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CategoryName: Represents a resource attribute for a configuration category.
     */
    public readonly attrCategoryName: ros.IResolvable | string;

    /**
     * Attribute ConfigKey: Represents the resource attribute of the configuration Key.
     */
    public readonly attrConfigKey: ros.IResolvable | string;

    /**
     * Attribute Configs: Represents a resource property for the configuration list.
     */
    public readonly attrConfigs: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserConfig = new RosUserConfig(this, id,  {
            configKey: props.configKey,
            configs: props.configs,
            categoryName: props.categoryName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserConfig;
        this.attrCategoryName = rosUserConfig.attrCategoryName;
        this.attrConfigKey = rosUserConfig.attrConfigKey;
        this.attrConfigs = rosUserConfig.attrConfigs;
    }
}
