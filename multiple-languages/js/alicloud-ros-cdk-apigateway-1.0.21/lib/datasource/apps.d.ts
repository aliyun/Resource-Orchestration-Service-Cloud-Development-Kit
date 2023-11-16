import * as ros from '@alicloud/ros-cdk-core';
import { RosApps } from './apigateway.generated';
export { RosApps as AppsProperty };
/**
 * Properties for defining a `DATASOURCE::ApiGateway::Apps`
 */
export interface AppsProps {
    /**
     * Property appId: Unique ID of the app.
     */
    readonly appId?: string | ros.IResolvable;
    /**
     * Property appOwner: Alibaba Cloud account ID of the app owner.
     */
    readonly appOwner?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::ApiGateway::Apps`
 */
export declare class Apps extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AppIds: The list of The ApiGateway app ids.
     */
    readonly attrAppIds: ros.IResolvable;
    /**
     * Attribute Apps: The information about ApiGateway apps.
     */
    readonly attrApps: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::ApiGateway::Apps`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AppsProps, enableResourcePropertyConstraint?: boolean);
}
