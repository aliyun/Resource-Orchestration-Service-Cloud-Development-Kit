import * as ros from '@alicloud/ros-cdk-core';
import { RosApp } from './apigateway.generated';
export { RosApp as AppProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::App`
 */
export interface AppProps {
    /**
     * Property appName: The name of the App.Need [4, 26] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * Property appCode: The app code of the APP.
     * The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),and AppCode is globally unique.
     */
    readonly appCode?: string | ros.IResolvable;
    /**
     * Property appKey: The key of the APP.
     * The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-),
     * and AppKey is globally unique.
     */
    readonly appKey?: string | ros.IResolvable;
    /**
     * Property appSecret: The secret of the APP.
     * The length is 8~128 English characters, which can contain numbers, underscores (_) and dashes (-).
     */
    readonly appSecret?: string | ros.IResolvable;
    /**
     * Property description: Description of the App, less than 180 characters.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosApp.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::App`
 */
export declare class App extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AppCode: The code of the APP.
     */
    readonly attrAppCode: ros.IResolvable;
    /**
     * Attribute AppId: The id of the created APP
     */
    readonly attrAppId: ros.IResolvable;
    /**
     * Attribute AppKey: The key of the APP
     */
    readonly attrAppKey: ros.IResolvable;
    /**
     * Attribute AppSecret: The secret of the APP
     */
    readonly attrAppSecret: ros.IResolvable;
    /**
     * Attribute Tags: Tags of app
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::App`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppProps, enableResourcePropertyConstraint?: boolean);
}
