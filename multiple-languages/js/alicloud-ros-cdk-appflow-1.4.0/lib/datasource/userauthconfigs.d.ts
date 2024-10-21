import * as ros from '@alicloud/ros-cdk-core';
import { RosUserAuthConfigs } from './appflow.generated';
export { RosUserAuthConfigs as UserAuthConfigsProperty };
/**
 * Properties for defining a `UserAuthConfigs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
export interface UserAuthConfigsProps {
    /**
     * Property connectorId: The id of connector.
     */
    readonly connectorId: string | ros.IResolvable;
    /**
     * Property authConfigNames: The names of the config.
     */
    readonly authConfigNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::AppFlow::UserAuthConfigs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosUserAuthConfigs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-appflow-userauthconfigs
 */
export declare class UserAuthConfigs extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: UserAuthConfigsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthConfigIds: The list of auth config ids.
     */
    readonly attrAuthConfigIds: ros.IResolvable;
    /**
     * Attribute AuthConfigs: The list of auth configs
     */
    readonly attrAuthConfigs: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UserAuthConfigsProps, enableResourcePropertyConstraint?: boolean);
}
