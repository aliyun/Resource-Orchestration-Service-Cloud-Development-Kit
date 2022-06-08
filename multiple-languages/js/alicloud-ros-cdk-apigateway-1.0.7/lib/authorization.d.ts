import * as ros from '@alicloud/ros-cdk-core';
import { RosAuthorization } from './apigateway.generated';
export { RosAuthorization as AuthorizationProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Authorization`
 */
export interface AuthorizationProps {
    /**
     * Property apiIds: APIs to authorize.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property appIds: APPs are authorized to APIs.
     */
    readonly appIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property groupId: The id of the group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property stageName: Authorize in this stage.
     */
    readonly stageName: string | ros.IResolvable;
    /**
     * Property description: Description of the authorization, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Authorization`
 */
export declare class Authorization extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ApiGateway::Authorization`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuthorizationProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=authorization.d.ts.map