import * as ros from '@alicloud/ros-cdk-core';
import { RosAppSecret } from './ram.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::AppSecret`ALIYUN::RAM::ManagedPolicy is used to create a Resource Access Management (RAM) policy.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAppSecret`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-appsecret
 */
export declare class AppSecret extends ros.Resource {
    /**
     * Attribute AppSecretId: The ID of the application secret.
     */
    readonly attrAppSecretId: ros.IResolvable;
    /**
     * Attribute AppSecretValue: The content of the application secret. This value can be used as the client secret for open authorization.
     */
    readonly attrAppSecretValue: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppSecretProps, enableResourcePropertyConstraint?: boolean);
}
