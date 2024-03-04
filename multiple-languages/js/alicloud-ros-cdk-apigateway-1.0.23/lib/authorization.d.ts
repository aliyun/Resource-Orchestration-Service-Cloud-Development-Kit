import * as ros from '@alicloud/ros-cdk-core';
import { RosAuthorization } from './apigateway.generated';
export { RosAuthorization as AuthorizationProperty };
/**
 * Properties for defining a `Authorization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
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
     * Property authValidTime: The time (UTC) when the authorization expires. If this parameter is empty, the authorization does not expire.
     * Pattern: YYYY-MM-DDThh:mm:ssZ
     */
    readonly authValidTime?: string | ros.IResolvable;
    /**
     * Property description: Description of the authorization, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Authorization`, which is used to authorize APIs to access applications.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAuthorization`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-authorization
 */
export declare class Authorization extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AuthorizationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AuthorizationProps, enableResourcePropertyConstraint?: boolean);
}
