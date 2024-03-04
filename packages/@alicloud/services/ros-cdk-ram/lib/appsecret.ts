import * as ros from '@alicloud/ros-cdk-core';
import { RosAppSecret } from './ram.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAppSecret as AppSecretProperty };

/**
 * Properties for defining a `AppSecret`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export interface AppSecretProps {

    /**
     * Property appId: The ID of the application.
     */
    readonly appId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::AppSecret`, which is used to create an application secret.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAppSecret`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export class AppSecret extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AppSecretProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppSecretId: The ID of the application secret.
     */
    public readonly attrAppSecretId: ros.IResolvable;

    /**
     * Attribute AppSecretValue: The content of the application secret. This value can be used as the client secret for open authorization.
     */
    public readonly attrAppSecretValue: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppSecretProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAppSecret = new RosAppSecret(this, id,  {
            appId: props.appId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAppSecret;
        this.attrAppSecretId = rosAppSecret.attrAppSecretId;
        this.attrAppSecretValue = rosAppSecret.attrAppSecretValue;
    }
}
