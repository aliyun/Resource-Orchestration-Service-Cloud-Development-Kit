import * as ros from '@alicloud/ros-cdk-core';
import { RosApp } from './elasticsearchserverless.generated';
export { RosApp as AppProperty };
/**
 * Properties for defining a `App`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
export interface AppProps {
    /**
     * Property appName: The name of the elastic search serverless version app.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * Property authentication: The authentication of the app. Currently only supports specifying passwords for initial users
     */
    readonly authentication: RosApp.AuthenticationProperty | ros.IResolvable;
    /**
     * Property quotaInfo: The quota info of the app.
     */
    readonly quotaInfo: RosApp.QuotaInfoProperty | ros.IResolvable;
    /**
     * Property appVersion: The version of the app.
     */
    readonly appVersion?: string | ros.IResolvable;
    /**
     * Property description: The description of the app.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property network: The public network of the app.
     */
    readonly network?: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property privateNetwork: The private network of the app.
     */
    readonly privateNetwork?: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ElasticSearchServerless::App`, which is used to create an Elasticsearch serverless application.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
export declare class App extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AppProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute InstanceId: The Id of the ElasticSearch serverless instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute PrivateESDomain: The private network domain of the app.
     */
    readonly attrPrivateEsDomain: ros.IResolvable;
    /**
     * Attribute PrivateKibanaDomain: The private network kibana domain of the app.
     */
    readonly attrPrivateKibanaDomain: ros.IResolvable;
    /**
     * Attribute PublicESDomain: The public network domain of the app.
     */
    readonly attrPublicEsDomain: ros.IResolvable;
    /**
     * Attribute PublicKibanaDomain: The public network kibana domain of the app.
     */
    readonly attrPublicKibanaDomain: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppProps, enableResourcePropertyConstraint?: boolean);
}
