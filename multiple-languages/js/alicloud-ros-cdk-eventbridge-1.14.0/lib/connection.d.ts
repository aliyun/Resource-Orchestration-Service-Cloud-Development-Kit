import * as ros from '@alicloud/ros-cdk-core';
import { RosConnection } from './eventbridge.generated';
export { RosConnection as ConnectionProperty };
/**
 * Properties for defining a `Connection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
export interface ConnectionProps {
    /**
     * Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly connectionName: string | ros.IResolvable;
    /**
     * Property networkParameters: Network Configuration Data Structure.
     */
    readonly networkParameters: RosConnection.NetworkParametersProperty | ros.IResolvable;
    /**
     * Property authParameters: Authentication Data Structure.
     */
    readonly authParameters?: RosConnection.AuthParametersProperty | ros.IResolvable;
    /**
     * Property description: The connection configuration description. The maximum length is 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `Connection`.
 */
export interface IConnection extends ros.IResource {
    readonly props: ConnectionProps;
    /**
     * Attribute AuthParameters: Authentication Data Structure.
     */
    readonly attrAuthParameters: ros.IResolvable | string;
    /**
     * Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrConnectionName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The connection configuration description. The maximum length is 255 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute NetworkParameters: Network Configuration Data Structure.
     */
    readonly attrNetworkParameters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EventBridge::Connection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-connection
 */
export declare class Connection extends ros.Resource implements IConnection {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthParameters: Authentication Data Structure.
     */
    readonly attrAuthParameters: ros.IResolvable | string;
    /**
     * Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrConnectionName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The connection configuration description. The maximum length is 255 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute NetworkParameters: Network Configuration Data Structure.
     */
    readonly attrNetworkParameters: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ConnectionProps, enableResourcePropertyConstraint?: boolean);
}
