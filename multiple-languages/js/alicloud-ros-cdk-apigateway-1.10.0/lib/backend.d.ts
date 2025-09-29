import * as ros from '@alicloud/ros-cdk-core';
import { RosBackend } from './apigateway.generated';
export { RosBackend as BackendProperty };
/**
 * Properties for defining a `Backend`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
 */
export interface BackendProps {
    /**
     * Property backendName: The name of the backend service.
     */
    readonly backendName: string | ros.IResolvable;
    /**
     * Property backendType: The type the backend service. Allowed values: HTTP, VPC, FC_EVENT, FC_EVENT_V3, FC_HTTP, FC_HTTP_V3, OSS, MOCK
     */
    readonly backendType: string | ros.IResolvable;
    /**
     * Property description: The description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosBackend.TagsProperty[];
}
/**
 * Represents a `Backend`.
 */
export interface IBackend extends ros.IResource {
    readonly props: BackendProps;
    /**
     * Attribute BackendId: The ID of the backend service.
     */
    readonly attrBackendId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Backend`, which is used to create a backend service.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackend`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-backend
 */
export declare class Backend extends ros.Resource implements IBackend {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BackendProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BackendId: The ID of the backend service.
     */
    readonly attrBackendId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendProps, enableResourcePropertyConstraint?: boolean);
}
