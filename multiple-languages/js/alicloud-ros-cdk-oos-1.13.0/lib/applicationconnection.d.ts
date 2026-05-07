import * as ros from '@alicloud/ros-cdk-core';
import { RosApplicationConnection } from './oos.generated';
export { RosApplicationConnection as ApplicationConnectionProperty };
/**
 * Properties for defining a `ApplicationConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
 */
export interface ApplicationConnectionProps {
    /**
     * Property connectionCategory: The category of the application connection.
     */
    readonly connectionCategory: string | ros.IResolvable;
    /**
     * Property connectionType: The type of the application connection.
     */
    readonly connectionType: string | ros.IResolvable;
    /**
     * Property envVars: The environment variables of the application connection.
     */
    readonly envVars: Array<RosApplicationConnection.EnvVarsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property name: The name of the application connection.
     */
    readonly name: string | ros.IResolvable;
}
/**
 * Represents a `ApplicationConnection`.
 */
export interface IApplicationConnection extends ros.IResource {
    readonly props: ApplicationConnectionProps;
    /**
     * Attribute ConnectionId: The ID of the application connection.
     */
    readonly attrConnectionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OOS::ApplicationConnection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApplicationConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-applicationconnection
 */
export declare class ApplicationConnection extends ros.Resource implements IApplicationConnection {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApplicationConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ConnectionId: The ID of the application connection.
     */
    readonly attrConnectionId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApplicationConnectionProps, enableResourcePropertyConstraint?: boolean);
}
