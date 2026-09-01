import * as ros from '@alicloud/ros-cdk-core';
import { RosApiDestination } from './eventbridge.generated';
export { RosApiDestination as ApiDestinationProperty };
/**
 * Properties for defining a `ApiDestination`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
export interface ApiDestinationProps {
    /**
     * Property apiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly apiDestinationName: string | ros.IResolvable;
    /**
     * Property connectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     * - Tip: You must first call the Connection interface to create a Connection configuration. Enter the name of the existing Connection.
     */
    readonly connectionName: string | ros.IResolvable;
    /**
     * Property httpApiParameters: Configuration information for API endpoints.
     */
    readonly httpApiParameters: RosApiDestination.HttpApiParametersProperty | ros.IResolvable;
    /**
     * Property description: The description of the api. It must be no more than 255 characters.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * Represents a `ApiDestination`.
 */
export interface IApiDestination extends ros.IResource {
    readonly props: ApiDestinationProps;
    /**
     * Attribute ApiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrApiDestinationName: ros.IResolvable | string;
    /**
     * Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrConnectionName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the api. It must be no more than 255 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HttpApiParameters: Configuration information for API endpoints.
     */
    readonly attrHttpApiParameters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EventBridge::ApiDestination`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApiDestination`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eventbridge-apidestination
 */
export declare class ApiDestination extends ros.Resource implements IApiDestination {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ApiDestinationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApiDestinationName: The name of the api. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrApiDestinationName: ros.IResolvable | string;
    /**
     * Attribute ConnectionName: The connection configuration name. The maximum length is 127 characters. Minimum length 2 characters.
     */
    readonly attrConnectionName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the api. It must be no more than 255 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute HttpApiParameters: Configuration information for API endpoints.
     */
    readonly attrHttpApiParameters: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ApiDestinationProps, enableResourcePropertyConstraint?: boolean);
}
