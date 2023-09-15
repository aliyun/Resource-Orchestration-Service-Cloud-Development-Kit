import * as ros from '@alicloud/ros-cdk-core';
import { RosPlugin } from './apigateway.generated';
export { RosPlugin as PluginProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Plugin`
 */
export interface PluginProps {
    /**
     * Property pluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    readonly pluginData: string | ros.IResolvable;
    /**
     * Property pluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    readonly pluginName: string | ros.IResolvable;
    /**
     * Property pluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    readonly pluginType: string | ros.IResolvable;
    /**
     * Property description: The description of the plug-in, which cannot exceed 200 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosPlugin.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Plugin`
 */
export declare class Plugin extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute PluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    readonly attrPluginData: ros.IResolvable;
    /**
     * Attribute PluginId: The generated plugin ID.
     */
    readonly attrPluginId: ros.IResolvable;
    /**
     * Attribute PluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    readonly attrPluginName: ros.IResolvable;
    /**
     * Attribute PluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    readonly attrPluginType: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::Plugin`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginProps, enableResourcePropertyConstraint?: boolean);
}
