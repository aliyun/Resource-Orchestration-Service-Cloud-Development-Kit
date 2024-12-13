import * as ros from '@alicloud/ros-cdk-core';
import { RosApiAttachment } from './apig.generated';
export { RosApiAttachment as ApiAttachmentProperty };
/**
 * Properties for defining a `ApiAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export interface ApiAttachmentProps {
    /**
     * Property backendScene: API release scenario.
     */
    readonly backendScene: string | ros.IResolvable;
    /**
     * Property environmentId: The ID of the environment to which the API is to deploy.
     */
    readonly environmentId: string | ros.IResolvable;
    /**
     * Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;
    /**
     * Property serviceConfigs: Services associated with API publishing and their configurations.
     */
    readonly serviceConfigs: Array<RosApiAttachment.ServiceConfigsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property description: The description of publication.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property domainIds: The list of user domain names associated with API publishing.
     */
    readonly domainIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property routeId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly routeId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::ApiAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApiAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export declare class ApiAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ApiAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EnvironmentId: The ID of the environment to which the API is to deploy.
     */
    readonly attrEnvironmentId: ros.IResolvable;
    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable;
    /**
     * Attribute RouteId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly attrRouteId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
