import * as ros from '@alicloud/ros-cdk-core';
import { RosGatewayLogging } from './cloudstoragegateway.generated';
export { RosGatewayLogging as GatewayLoggingProperty };
/**
 * Properties for defining a `GatewayLogging`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
export interface GatewayLoggingProps {
    /**
     * Property gatewayId: The ID of the gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * Property slsLogstore: The name of the SLS log store.
     */
    readonly slsLogstore: string | ros.IResolvable;
    /**
     * Property slsProject: The name of the SLS project.
     */
    readonly slsProject: string | ros.IResolvable;
}
/**
 * Represents a `GatewayLogging`.
 */
export interface IGatewayLogging extends ros.IResource {
    readonly props: GatewayLoggingProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::GatewayLogging`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGatewayLogging`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
export declare class GatewayLogging extends ros.Resource implements IGatewayLogging {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GatewayLoggingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayLoggingProps, enableResourcePropertyConstraint?: boolean);
}
