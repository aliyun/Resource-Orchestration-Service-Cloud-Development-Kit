import * as ros from '@alicloud/ros-cdk-core';
import { RosApp } from './apigateway.generated';
export { RosApp as AppProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::App`
 */
export interface AppProps {
    /**
     * @Property appName: The name of the App.Need [4, 15] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly appName: string;
    /**
     * @Property description: Description of the App, less than 180 characters.
     */
    readonly description?: string;
    /**
     * @Property tags: Tags to attach to app. Max support 20 tags to add during create app. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
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
     * @Attribute AppId: The id of the created APP
     */
    readonly attrAppId: any;
    /**
     * @Attribute AppKey: The key of the APP
     */
    readonly attrAppKey: any;
    /**
     * @Attribute AppSecret: The secret of the APP
     */
    readonly attrAppSecret: any;
    /**
     * @Attribute Tags: Tags of app
     */
    readonly attrTags: any;
    /**
     * Create a new `ALIYUN::ApiGateway::App`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppProps, enableResourcePropertyConstraint?: boolean);
}
