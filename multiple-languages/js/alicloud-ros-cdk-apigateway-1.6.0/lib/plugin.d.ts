import * as ros from '@alicloud/ros-cdk-core';
import { RosPlugin } from './apigateway.generated';
export { RosPlugin as PluginProperty };
/**
 * Properties for defining a `Plugin`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
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
 * Represents a `Plugin`.
 */
export interface IPlugin extends ros.IResource {
    readonly props: PluginProps;
    /**
     * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute PluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    readonly attrPluginData: ros.IResolvable | string;
    /**
     * Attribute PluginId: The generated plugin ID.
     */
    readonly attrPluginId: ros.IResolvable | string;
    /**
     * Attribute PluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    readonly attrPluginName: ros.IResolvable | string;
    /**
     * Attribute PluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    readonly attrPluginType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Plugin`, which is used to create an API Gateway plug-in.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPlugin`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-plugin
 */
export declare class Plugin extends ros.Resource implements IPlugin {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PluginProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Description: The description of the plug-in, which cannot exceed 200 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute PluginData: The definition statement of the plug-in. Plug-in definition statements in the JSON and YAML formats are supported.
     */
    readonly attrPluginData: ros.IResolvable | string;
    /**
     * Attribute PluginId: The generated plugin ID.
     */
    readonly attrPluginId: ros.IResolvable | string;
    /**
     * Attribute PluginName: The name of the plug-in that you want to create. It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
     */
    readonly attrPluginName: ros.IResolvable | string;
    /**
     * Attribute PluginType: The type of the plug-in. Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
     */
    readonly attrPluginType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginProps, enableResourcePropertyConstraint?: boolean);
}
