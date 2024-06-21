import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
 */
export interface RosProjectProps {
    /**
     * @Property name: The name of the project. It needs to be unique and cannot be changed.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property description: The description of the project.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property labels: The labels for the project
     */
    readonly labels?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property spec: The project configuration.
     */
    readonly spec?: RosProject.SpecProperty | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServerlessDev::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServerlessDev::Project";
    /**
     * @Attribute Name: The name of the project.
     */
    readonly attrName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property name: The name of the project. It needs to be unique and cannot be changed.
     */
    name: string | ros.IResolvable;
    /**
     * @Property description: The description of the project.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property labels: The labels for the project
     */
    labels: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property spec: The project configuration.
     */
    spec: RosProject.SpecProperty | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosProject {
    /**
     * @stability external
     */
    interface SpecProperty {
        /**
         * @Property templateConfig: Template configuration for the project. If it is not empty, the default environment will be automatically created and automatic deployment will be completed.
         */
        readonly templateConfig?: RosProject.TemplateConfigProperty | ros.IResolvable;
        /**
         * @Property roleArn: The Arn of the role that the development platform needs to play when deploying your project. The default is acs:ram::${your_main_account_ID}:role\/aliyundevsdefaultrole
         */
        readonly roleArn?: string | ros.IResolvable;
    }
}
export declare namespace RosProject {
    /**
     * @stability external
     */
    interface TemplateConfigProperty {
        /**
         * @Property parameters: The parameters for the template.
         */
        readonly parameters?: {
            [key: string]: (any | ros.IResolvable);
        } | ros.IResolvable;
        /**
         * @Property templateName: The name of the template.
         */
        readonly templateName: string | ros.IResolvable;
    }
}
