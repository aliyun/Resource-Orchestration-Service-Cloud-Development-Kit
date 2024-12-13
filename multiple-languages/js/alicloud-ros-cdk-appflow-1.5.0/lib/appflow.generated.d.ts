import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export interface RosFlowProps {
    /**
     * @Property flowName: The name of the flow.
     */
    readonly flowName: string | ros.IResolvable;
    /**
     * @Property flowDesc: The description of the flow.
     */
    readonly flowDesc?: string | ros.IResolvable;
    /**
     * @Property flowId: The ID of the flow.
     */
    readonly flowId?: string | ros.IResolvable;
    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    readonly flowStatus?: string | ros.IResolvable;
    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    readonly launchFlow?: boolean | ros.IResolvable;
    /**
     * @Property parameters: The parameters of the flow.
     */
    readonly parameters?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property template: The template of the flow.
     */
    readonly template?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property templateId: The ID of the template.
     */
    readonly templateId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::Flow`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Flow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
export declare class RosFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::Flow";
    /**
     * @Attribute FlowId: The ID of the flow.
     */
    readonly attrFlowId: ros.IResolvable;
    /**
     * @Attribute WebhookAddress: The webhook address of the flow.
     */
    readonly attrWebhookAddress: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property flowName: The name of the flow.
     */
    flowName: string | ros.IResolvable;
    /**
     * @Property flowDesc: The description of the flow.
     */
    flowDesc: string | ros.IResolvable | undefined;
    /**
     * @Property flowId: The ID of the flow.
     */
    flowId: string | ros.IResolvable | undefined;
    /**
     * @Property flowStatus: The status of the flow. Allowed values:
     * Enable: enable flow
     * Disable: disable flow
     */
    flowStatus: string | ros.IResolvable | undefined;
    /**
     * @Property launchFlow: Whether to launch the flow.
     */
    launchFlow: boolean | ros.IResolvable | undefined;
    /**
     * @Property parameters: The parameters of the flow.
     */
    parameters: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property template: The template of the flow.
     */
    template: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable | undefined;
    /**
     * @Property templateId: The ID of the template.
     */
    templateId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosUserAuthConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export interface RosUserAuthConfigProps {
    /**
     * @Property authConfig: AuthConfig
     */
    readonly authConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property authConfigName: The name of the config.
     */
    readonly authConfigName: string | ros.IResolvable;
    /**
     * @Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::AppFlow::UserAuthConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserAuthConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-userauthconfig
 */
export declare class RosUserAuthConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::AppFlow::UserAuthConfig";
    /**
     * @Attribute AuthConfig: AuthConfig
     */
    readonly attrAuthConfig: ros.IResolvable;
    /**
     * @Attribute AuthConfigId: The id of the config.
     */
    readonly attrAuthConfigId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property authConfig: AuthConfig
     */
    authConfig: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * @Property authConfigName: The name of the config.
     */
    authConfigName: string | ros.IResolvable;
    /**
     * @Property connectorId: The id of connector.
     */
    connectorId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserAuthConfigProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
