import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
export interface RosAppProps {
    /**
     * @Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    readonly appIcon: string | ros.IResolvable;
    /**
     * @Property appName: The application name.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    readonly appWorkspaceId: string | ros.IResolvable;
    /**
     * @Property template: Application Template.
     */
    readonly template: RosApp.TemplateProperty | ros.IResolvable;
    /**
     * @Property appDescription: Description of application.
     */
    readonly appDescription?: string | ros.IResolvable;
    /**
     * @Property appType: The application type. Web applications and Copilot applications are supported.
     * - **Web**:Web application.
     * - **Copilot**:Copilot application.
     */
    readonly appType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MOBI::App`, which is used to create an application.
 * @Note This class does not contain additional functions, so it is recommended to use the `App` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mobi-app
 */
export declare class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MOBI::App";
    /**
     * @Attribute AppDescription: Description of application.
     */
    readonly attrAppDescription: ros.IResolvable;
    /**
     * @Attribute AppIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    readonly attrAppIcon: ros.IResolvable;
    /**
     * @Attribute AppId: Application ID.
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * @Attribute AppName: The application name.
     */
    readonly attrAppName: ros.IResolvable;
    /**
     * @Attribute AppType: The application type. Web applications and Copilot applications are supported.
     */
    readonly attrAppType: ros.IResolvable;
    /**
     * @Attribute AppWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    readonly attrAppWorkspaceId: ros.IResolvable;
    /**
     * @Attribute CreateTime: Create time of application.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute ModifiedTime: Modified time of application.
     */
    readonly attrModifiedTime: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appIcon: Application icon label, The system provides an icon by default, which is given in the form of a label. The default value is -1.
     */
    appIcon: string | ros.IResolvable;
    /**
     * @Property appName: The application name.
     */
    appName: string | ros.IResolvable;
    /**
     * @Property appWorkspaceId: Workspace ID of application, The application belongs to the workspace.
     */
    appWorkspaceId: string | ros.IResolvable;
    /**
     * @Property template: Application Template.
     */
    template: RosApp.TemplateProperty | ros.IResolvable;
    /**
     * @Property appDescription: Description of application.
     */
    appDescription: string | ros.IResolvable | undefined;
    /**
     * @Property appType: The application type. Web applications and Copilot applications are supported.
     * - **Web**:Web application.
     * - **Copilot**:Copilot application.
     */
    appType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface TemplateProperty {
        /**
         * @Property actualParameters: Actual Parameters. Take the Enterprise official website template as an example, you do not need to fill in this parameter.
         */
        readonly actualParameters?: string | ros.IResolvable;
        /**
         * @Property connectionsContent: Connector configuration. When creating an application, you need to rely on connectors to integrate external systems and services.
     * The connector magic pen platform provides a wealth of connectors, such as MySQL connectors, HTTP connectors, and hundreds of application connectors.
     * Take the Enterprise official website template as an example, the MySQL Connector depends on, so you need to replace the MySQL connection information in the following string.
         */
        readonly connectionsContent: string | ros.IResolvable;
        /**
         * @Property templateId: The application Template number. For specific templates, you can view all templates in the template market on the product console. The product console address is https:\/\/mobinext.console.aliyun.com.
         */
        readonly templateId: string | ros.IResolvable;
    }
}
