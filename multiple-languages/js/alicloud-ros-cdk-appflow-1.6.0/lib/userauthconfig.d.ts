import * as ros from '@alicloud/ros-cdk-core';
import { RosUserAuthConfig } from './appflow.generated';
export { RosUserAuthConfig as UserAuthConfigProperty };
/**
 * Properties for defining a `UserAuthConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export interface UserAuthConfigProps {
    /**
     * Property authConfig: AuthConfig
     */
    readonly authConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property authConfigName: The name of the config.
     */
    readonly authConfigName: string | ros.IResolvable;
    /**
     * Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;
}
/**
 * Represents a `UserAuthConfig`.
 */
export interface IUserAuthConfig extends ros.IResource {
    readonly props: UserAuthConfigProps;
    /**
     * Attribute AuthConfig: AuthConfig
     */
    readonly attrAuthConfig: ros.IResolvable | string;
    /**
     * Attribute AuthConfigId: The id of the config.
     */
    readonly attrAuthConfigId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::UserAuthConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserAuthConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export declare class UserAuthConfig extends ros.Resource implements IUserAuthConfig {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: UserAuthConfigProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthConfig: AuthConfig
     */
    readonly attrAuthConfig: ros.IResolvable | string;
    /**
     * Attribute AuthConfigId: The id of the config.
     */
    readonly attrAuthConfigId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserAuthConfigProps, enableResourcePropertyConstraint?: boolean);
}
