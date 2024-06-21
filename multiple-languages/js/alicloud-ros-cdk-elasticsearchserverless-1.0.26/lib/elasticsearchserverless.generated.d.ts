import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
export interface RosAppProps {
    /**
     * @Property appName: The name of the elastic search serverless version app.
     */
    readonly appName: string | ros.IResolvable;
    /**
     * @Property authentication: The authentication of the app. Currently only supports specifying passwords for initial users
     */
    readonly authentication: RosApp.AuthenticationProperty | ros.IResolvable;
    /**
     * @Property quotaInfo: The quota info of the app.
     */
    readonly quotaInfo: RosApp.QuotaInfoProperty | ros.IResolvable;
    /**
     * @Property appVersion: The version of the app.
     */
    readonly appVersion?: string | ros.IResolvable;
    /**
     * @Property description: The description of the app.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property network: The public network of the app.
     */
    readonly network?: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property privateNetwork: The private network of the app.
     */
    readonly privateNetwork?: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ElasticSearchServerless::App`.
 * @Note This class does not contain additional functions, so it is recommended to use the `App` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-app
 */
export declare class RosApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ElasticSearchServerless::App";
    /**
     * @Attribute InstanceId: The Id of the ElasticSearch serverless instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute PrivateESDomain: The private network domain of the app.
     */
    readonly attrPrivateEsDomain: ros.IResolvable;
    /**
     * @Attribute PrivateKibanaDomain: The private network kibana domain of the app.
     */
    readonly attrPrivateKibanaDomain: ros.IResolvable;
    /**
     * @Attribute PublicESDomain: The public network domain of the app.
     */
    readonly attrPublicEsDomain: ros.IResolvable;
    /**
     * @Attribute PublicKibanaDomain: The public network kibana domain of the app.
     */
    readonly attrPublicKibanaDomain: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property appName: The name of the elastic search serverless version app.
     */
    appName: string | ros.IResolvable;
    /**
     * @Property authentication: The authentication of the app. Currently only supports specifying passwords for initial users
     */
    authentication: RosApp.AuthenticationProperty | ros.IResolvable;
    /**
     * @Property quotaInfo: The quota info of the app.
     */
    quotaInfo: RosApp.QuotaInfoProperty | ros.IResolvable;
    /**
     * @Property appVersion: The version of the app.
     */
    appVersion: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the app.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property network: The public network of the app.
     */
    network: Array<RosApp.NetworkProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property privateNetwork: The private network of the app.
     */
    privateNetwork: Array<RosApp.PrivateNetworkProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAppProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface AuthenticationProperty {
        /**
         * @Property basicAuth: The basic authentication of the app.
         */
        readonly basicAuth: Array<RosApp.BasicAuthProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface BasicAuthProperty {
        /**
         * @Property password: The password of the user.
         */
        readonly password: string | ros.IResolvable;
    }
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface NetworkProperty {
        /**
         * @Property type: The type of the network.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable public network access.
         */
        readonly enabled: boolean | ros.IResolvable;
        /**
         * @Property whiteIpGroup: The white ip group of the app.
         */
        readonly whiteIpGroup?: Array<RosApp.WhiteIpGroupProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface PrivateNetworkProperty {
        /**
         * @Property pvlEndpointId: The pvl endpoint id of the app.
         */
        readonly pvlEndpointId: string | ros.IResolvable;
        /**
         * @Property type: The type of the network.
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property vpcId: The vpc id of the app.
         */
        readonly vpcId: string | ros.IResolvable;
        /**
         * @Property enabled: Whether to enable private network access.
         */
        readonly enabled: boolean | ros.IResolvable;
        /**
         * @Property whiteIpGroup: The white ip group of the app.
         */
        readonly whiteIpGroup?: Array<RosApp.PrivateNetworkWhiteIpGroupProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface PrivateNetworkWhiteIpGroupProperty {
        /**
         * @Property groupName: The name of the white ip group.
         */
        readonly groupName: string | ros.IResolvable;
        /**
         * @Property ips: The ips of the white ip group.
         */
        readonly ips?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface QuotaInfoProperty {
        /**
         * @Property cu: The cu of the app.
         */
        readonly cu: number | ros.IResolvable;
        /**
         * @Property storage: The storage of the app.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property appType: The type of the app.
         */
        readonly appType: string | ros.IResolvable;
    }
}
export declare namespace RosApp {
    /**
     * @stability external
     */
    interface WhiteIpGroupProperty {
        /**
         * @Property groupName: The name of the white ip group.
         */
        readonly groupName: string | ros.IResolvable;
        /**
         * @Property ips: The ips ofthe white ip group.
         */
        readonly ips?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
