import * as ros from '@alicloud/ros-cdk-core';
import { RosUserAuthConfig } from './appflow.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosUserAuthConfig as UserAuthConfigProperty };

/**
 * Properties for defining a `UserAuthConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export interface UserAuthConfigProps {

    /**
     * Property authConfig: AuthConfig
     */
    readonly authConfig: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::AppFlow::UserAuthConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserAuthConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export class UserAuthConfig extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserAuthConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AuthConfig: AuthConfig
     */
    public readonly attrAuthConfig: ros.IResolvable;

    /**
     * Attribute AuthConfigId: The id of the config.
     */
    public readonly attrAuthConfigId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserAuthConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosUserAuthConfig = new RosUserAuthConfig(this, id,  {
            authConfig: props.authConfig,
            authConfigName: props.authConfigName,
            connectorId: props.connectorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUserAuthConfig;
        this.attrAuthConfig = rosUserAuthConfig.attrAuthConfig;
        this.attrAuthConfigId = rosUserAuthConfig.attrAuthConfigId;
    }
}
