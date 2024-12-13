import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosUserAuthConfigs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
export interface RosUserAuthConfigsProps {
    /**
     * @Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;
    /**
     * @Property authConfigNames: The names of the config.
     */
    readonly authConfigNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::AppFlow::UserAuthConfigs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserAuthConfigs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
export declare class RosUserAuthConfigs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::AppFlow::UserAuthConfigs";
    /**
     * @Attribute AuthConfigIds: The list of auth config ids.
     */
    readonly attrAuthConfigIds: ros.IResolvable;
    /**
     * @Attribute AuthConfigs: The list of auth configs
     */
    readonly attrAuthConfigs: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property connectorId: The id of connector.
     */
    connectorId: string | ros.IResolvable;
    /**
     * @Property authConfigNames: The names of the config.
     */
    authConfigNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserAuthConfigsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
