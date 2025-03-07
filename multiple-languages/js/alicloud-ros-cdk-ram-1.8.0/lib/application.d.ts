import * as ros from '@alicloud/ros-cdk-core';
import { RosApplication } from './ram.generated';
export { RosApplication as ApplicationProperty };
/**
 * Properties for defining a `Application`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
export interface ApplicationProps {
    /**
     * Property appName: The name of the application. The name can be up to 64 characters in length. The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
     */
    readonly appName: string | ros.IResolvable;
    /**
     * Property appType: The type of the application. Valid values:
     * - **WebApp**: a web application that interacts with a browser.
     * - **NativeApp**: a native application that runs on an operating system, such as a desktop operating system or a mobile operating system.
     * - **ServerApp**: an application that accesses Alibaba Cloud services without the need of manual user logon. User provisioning is automated based on the System for Cross-Domain Identity Management (SCIM) protocol.
     */
    readonly appType: string | ros.IResolvable;
    /**
     * Property displayName: The display name of the application. The name can be up to 24 characters in length.
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * Property accessTokenValidity: The validity period of the access token.
     * Valid values: 900 to 10800. Unit: seconds.
     * Default value: 3600.
     */
    readonly accessTokenValidity?: number | ros.IResolvable;
    /**
     * Property isMultiTenant: Indicates whether the application can be installed by using other Alibaba Cloud accounts. Valid values:
     * - **true**: If you do not set this parameter for applications of the NativeApp and ServerApp types, true is used.
     * - **false**: If you do not set this parameter for applications of the WebApp type, false is used.
     */
    readonly isMultiTenant?: boolean | ros.IResolvable;
    /**
     * Property predefinedScopes: List of the scopes of application permissions.
     */
    readonly predefinedScopes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property redirectUris: List of the callback URLs.
     */
    readonly redirectUris?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property refreshTokenValidity: The validity period of the refreshed token.
     * Valid values: 7200 to 31536000. Unit: seconds.
     * Default value:
     * - For applications of the WebApp and ServerApp types, if this parameter is left empty, the value 2592000 is used. The value 2592000 indicates that the validity period of the refreshed token is 30 days.
     * - For applications of the NativeApp type, if this parameter is left empty, the value 7776000 is used. The value 7776000 indicates that the validity period of the refreshed token is 90 days.
     */
    readonly refreshTokenValidity?: number | ros.IResolvable;
    /**
     * Property requiredScopes: Required scope of application permissions. You can set one or more of the scopes set in the **PredefinedScopes** to be required, so that when a user authorizes the application, the required scopes are selected by default and cannot be canceled.
     * **Notes**: If you set a **RequiredScopes** entry that is not within the scope of **PredefinedScopes**, the required range will not take effect.
     */
    readonly requiredScopes?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property secretRequired: Indicates whether a secret is required. Valid values: **true** and **false**.
     * **Note**:
     * - For applications of the WebApp and ServerApp types, this parameter is automatically set to **true** and cannot be changed.
     * - For applications of the NativeApp type, this parameter can be set to true or false. If you do not set this parameter, false is used. Applications of the NativeApp type run in untrusted environments and the secrets of these applications are not protected. Therefore, we recommend that you do not set this parameter to true unless otherwise specified.
     */
    readonly secretRequired?: boolean | ros.IResolvable;
}
/**
 * Represents a `Application`.
 */
export interface IApplication extends ros.IResource {
    readonly props: ApplicationProps;
    /**
     * Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute AppName: The name of the application.
     */
    readonly attrAppName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::Application`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-application
 */
export declare class Application extends ros.Resource implements IApplication {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppId: The ID of the application.
     */
    readonly attrAppId: ros.IResolvable | string;
    /**
     * Attribute AppName: The name of the application.
     */
    readonly attrAppName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationProps, enableResourcePropertyConstraint?: boolean);
}
