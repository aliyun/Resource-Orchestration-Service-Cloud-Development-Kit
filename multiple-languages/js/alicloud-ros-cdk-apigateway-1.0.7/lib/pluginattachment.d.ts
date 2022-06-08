import * as ros from '@alicloud/ros-cdk-core';
import { RosPluginAttachment } from './apigateway.generated';
export { RosPluginAttachment as PluginAttachmentProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::PluginAttachment`
 */
export interface PluginAttachmentProps {
    /**
     * Property apiId: The ID of the API to which you want to bind the plug-in.
     */
    readonly apiId: string | ros.IResolvable;
    /**
     * Property pluginId: The ID of the plugin that you want to bind.
     */
    readonly pluginId: string | ros.IResolvable;
    /**
     * Property stageName: The name of the runtime environment. Valid values:
     * RELEASE: indicates the release environment.
     * PRE: indicates the pre-release environment.
     * TEST: indicates the test environment.
     */
    readonly stageName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::PluginAttachment`
 */
export declare class PluginAttachment extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ApiId: The api id.
     */
    readonly attrApiId: ros.IResolvable;
    /**
     * Attribute PluginId: The plugin id.
     */
    readonly attrPluginId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::PluginAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PluginAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=pluginattachment.d.ts.map