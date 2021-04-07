import * as ros from '@alicloud/ros-cdk-core';
import { RosUisConnection } from './uis.generated';
export { RosUisConnection as UisConnectionProperty };
/**
 * Properties for defining a `ALIYUN::UIS::UisConnection`
 */
export interface UisConnectionProps {
    /**
     * Property uisNodeId: Node instance ID.
     */
    readonly uisNodeId: string | ros.IResolvable;
    /**
     * Property uisProtocol: The protocol name used by the software and server. The default value is SSLVPN.
     */
    readonly uisProtocol: string | ros.IResolvable;
    /**
     * Property description: A description of the tunnel connection.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property greConfig: The config for GRE. Item can be overwritten, but removed.
     */
    readonly greConfig?: Array<RosUisConnection.GreConfigProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property name: The name of the tunnel connection.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property sslConfig: The config for SSLVPN.
     */
    readonly sslConfig?: RosUisConnection.SslConfigProperty | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::UIS::UisConnection`
 */
export declare class UisConnection extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute UisConnectionId: ID of the VPN server. This ID does not distinguish between protocols.
     */
    readonly attrUisConnectionId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::UIS::UisConnection`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: UisConnectionProps, enableResourcePropertyConstraint?: boolean);
}
