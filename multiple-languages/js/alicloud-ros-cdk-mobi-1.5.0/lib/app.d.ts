import * as ros from '@alicloud/ros-cdk-core';
import { RosApp } from './mobi.generated';
export { RosApp as AppProperty };
/**
 * Properties for defining a `App`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
export interface AppProps {
    /**
     * Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    readonly appIcon: string | ros.IResolvable;
    /**
     * Property appName: The application name.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    readonly appWorkspaceId: string | ros.IResolvable;
    /**
     * Property template: Application Template.
     */
    readonly template: RosApp.TemplateProperty | ros.IResolvable;
    /**
     * Property appDescription: Description of application.
     */
    readonly appDescription?: string | ros.IResolvable;
    /**
     * Property appType: The application type. Web applications and Copilot applications are supported.
     * - **Web**:Web application.
     * - **Copilot**:Copilot application.
     */
    readonly appType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::MOBI::App`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
export declare class App extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AppProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AppDescription: Description of application.
     */
    readonly attrAppDescription: ros.IResolvable;
    /**
     * Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    readonly attrAppIcon: ros.IResolvable;
    /**
     * Attribute AppId: Application ID.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * Attribute AppName: The application name.
     */
    readonly attrAppName: ros.IResolvable;
    /**
     * Attribute AppType: The application type. Web applications and Copilot applications are supported.
     */
    readonly attrAppType: ros.IResolvable;
    /**
     * Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    readonly attrAppWorkspaceId: ros.IResolvable;
    /**
     * Attribute CreateTime: Create time of application.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute ModifiedTime: Modified time of application.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppProps, enableResourcePropertyConstraint?: boolean);
}
