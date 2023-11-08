import * as ros from '@alicloud/ros-cdk-core';
import { RosApis } from './apigateway.generated';
export { RosApis as ApisProperty };
/**
 * Properties for defining a `DATASOURCE::ApiGateway::Apis`
 */
export interface ApisProps {
    /**
     * Property apiId: ID of the specified API.
     */
    readonly apiId?: string | ros.IResolvable;
    /**
     * Property apiName: API name (fuzzy matching).
     */
    readonly apiName?: string | ros.IResolvable;
    /**
     * Property catalogId: Catalog number.
     */
    readonly catalogId?: string | ros.IResolvable;
    /**
     * Property enableTagAuth: Enable label validation.
     */
    readonly enableTagAuth?: boolean | ros.IResolvable;
    /**
     * Property groupId: ID of the specified group.
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * Property visibility: Whether the API is public.
     */
    readonly visibility?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Apis`
 */
export declare class Apis extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ApiIds: The list of The ApiGateway api ids.
     */
    readonly attrApiIds: ros.IResolvable;
    /**
     * Attribute Apis: The information about ApiGateway apis.
     */
    readonly attrApis: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ApiGateway::Apis`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ApisProps, enableResourcePropertyConstraint?: boolean);
}
