import * as ros from '@alicloud/ros-cdk-core';
import { RosApiAttachment } from './apig.generated';
export { RosApiAttachment as ApiAttachmentProperty };
/**
 * Properties for defining a `ApiAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export interface ApiAttachmentProps {
    /**
     * Property httpApiId: The ID of the HTTP API.
     */
    readonly httpApiId: string | ros.IResolvable;
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
 * Represents a `ApiAttachment`.
 */
export interface IApiAttachment extends ros.IResource {
    readonly props: ApiAttachmentProps;
    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable | string;
    /**
     * Attribute RouteId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly attrRouteId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::ApiAttachment`, which is used to attach an API.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApiAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-apiattachment
 */
export declare class ApiAttachment extends ros.Resource implements IApiAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApiAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HttpApiId: The ID of the HTTP API.
     */
    readonly attrHttpApiId: ros.IResolvable | string;
    /**
     * Attribute RouteId: The route ID. When publishing an HTTP API route, it must be passed in.
     */
    readonly attrRouteId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
