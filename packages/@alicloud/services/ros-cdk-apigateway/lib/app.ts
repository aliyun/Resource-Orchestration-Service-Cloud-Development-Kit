import * as ros from '@alicloud/ros-cdk-core';
import { RosApp } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosApp as AppProperty };

/**
 * Properties for defining a `App`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
 */
export interface AppProps {

    /**
     * Property appName: The name of the App.Need [4, 26] Chinese\English\Number characters or "_",and should start with Chinese\/English character.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::App`, which is used to create an application. Before you call a third-party API, you must create an application and use the application as an identity to call the API.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-app
 */
export class App extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AppProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AppCode: The code of the APP.
     */
    public readonly attrAppCode: ros.IResolvable;

    /**
     * Attribute AppId: The id of the created APP
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * Attribute AppKey: The key of the APP
     */
    public readonly attrAppKey: ros.IResolvable;

    /**
     * Attribute AppSecret: The secret of the APP
     */
    public readonly attrAppSecret: ros.IResolvable;

    /**
     * Attribute Tags: Tags of app
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosApp = new RosApp(this, id,  {
            appCode: props.appCode,
            description: props.description,
            appKey: props.appKey,
            appSecret: props.appSecret,
            tags: props.tags,
            appName: props.appName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosApp;
        this.attrAppCode = rosApp.attrAppCode;
        this.attrAppId = rosApp.attrAppId;
        this.attrAppKey = rosApp.attrAppKey;
        this.attrAppSecret = rosApp.attrAppSecret;
        this.attrTags = rosApp.attrTags;
    }
}
