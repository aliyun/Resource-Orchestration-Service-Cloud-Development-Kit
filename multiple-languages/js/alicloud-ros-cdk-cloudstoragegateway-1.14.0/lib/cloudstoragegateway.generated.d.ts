import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosExpressSync`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
export interface RosExpressSyncProps {
    /**
     * @Property bucketName: The name of the OSS bucket.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * @Property bucketRegion: The region of the OSS bucket.
     */
    readonly bucketRegion: string | ros.IResolvable;
    /**
     * @Property name: The name of the ExpressSync.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property bucketPrefix: The prefix of the OSS bucket.
     */
    readonly bucketPrefix?: string | ros.IResolvable;
    /**
     * @Property description: The description of the ExpressSync.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::ExpressSync`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ExpressSync` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-expresssync
 */
export declare class RosExpressSync extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::ExpressSync";
    /**
     * @Attribute ExpressSyncId: The ID of the ExpressSync.
     */
    readonly attrExpressSyncId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property bucketName: The name of the OSS bucket.
     */
    bucketName: string | ros.IResolvable;
    /**
     * @Property bucketRegion: The region of the OSS bucket.
     */
    bucketRegion: string | ros.IResolvable;
    /**
     * @Property name: The name of the ExpressSync.
     */
    name: string | ros.IResolvable;
    /**
     * @Property bucketPrefix: The prefix of the OSS bucket.
     */
    bucketPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property description: The description of the ExpressSync.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExpressSyncProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export interface RosGatewayProps {
    /**
     * @Property category: The category of the gateway.
     */
    readonly category: string | ros.IResolvable;
    /**
     * @Property location: The location of the gateway.
     */
    readonly location: string | ros.IResolvable;
    /**
     * @Property name: The name of the gateway.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property type: The type of the gateway.
     */
    readonly type: string | ros.IResolvable;
    /**
     * @Property description: The description of the gateway.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property gatewayClass: The class of the gateway.
     */
    readonly gatewayClass?: string | ros.IResolvable;
    /**
     * @Property postPaid: Whether the gateway is pay-as-you-go.
     */
    readonly postPaid?: boolean | ros.IResolvable;
    /**
     * @Property publicNetworkBandwidth: The public network bandwidth of the gateway.
     */
    readonly publicNetworkBandwidth?: number | ros.IResolvable;
    /**
     * @Property releaseAfterExpiration: Whether to release the gateway after expiration.
     */
    readonly releaseAfterExpiration?: boolean | ros.IResolvable;
    /**
     * @Property resourceRegionId: The region ID of the resource.
     */
    readonly resourceRegionId?: string | ros.IResolvable;
    /**
     * @Property secondaryVSwitchId: The ID of the secondary VSwitch.
     */
    readonly secondaryVSwitchId?: string | ros.IResolvable;
    /**
     * @Property storageBundleId: The ID of the storage bundle.
     */
    readonly storageBundleId?: string | ros.IResolvable;
    /**
     * @Property untrustedEnvId: The ID of the untrusted environment.
     */
    readonly untrustedEnvId?: string | ros.IResolvable;
    /**
     * @Property untrustedEnvInstanceType: The instance type of the untrusted environment.
     */
    readonly untrustedEnvInstanceType?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export declare class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::Gateway";
    /**
     * @Attribute GatewayId: The ID of the gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property category: The category of the gateway.
     */
    category: string | ros.IResolvable;
    /**
     * @Property location: The location of the gateway.
     */
    location: string | ros.IResolvable;
    /**
     * @Property name: The name of the gateway.
     */
    name: string | ros.IResolvable;
    /**
     * @Property type: The type of the gateway.
     */
    type: string | ros.IResolvable;
    /**
     * @Property description: The description of the gateway.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property gatewayClass: The class of the gateway.
     */
    gatewayClass: string | ros.IResolvable | undefined;
    /**
     * @Property postPaid: Whether the gateway is pay-as-you-go.
     */
    postPaid: boolean | ros.IResolvable | undefined;
    /**
     * @Property publicNetworkBandwidth: The public network bandwidth of the gateway.
     */
    publicNetworkBandwidth: number | ros.IResolvable | undefined;
    /**
     * @Property releaseAfterExpiration: Whether to release the gateway after expiration.
     */
    releaseAfterExpiration: boolean | ros.IResolvable | undefined;
    /**
     * @Property resourceRegionId: The region ID of the resource.
     */
    resourceRegionId: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryVSwitchId: The ID of the secondary VSwitch.
     */
    secondaryVSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property storageBundleId: The ID of the storage bundle.
     */
    storageBundleId: string | ros.IResolvable | undefined;
    /**
     * @Property untrustedEnvId: The ID of the untrusted environment.
     */
    untrustedEnvId: string | ros.IResolvable | undefined;
    /**
     * @Property untrustedEnvInstanceType: The instance type of the untrusted environment.
     */
    untrustedEnvInstanceType: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosGatewayLogging`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
export interface RosGatewayLoggingProps {
    /**
     * @Property gatewayId: The ID of the gateway.
     */
    readonly gatewayId: string | ros.IResolvable;
    /**
     * @Property slsLogstore: The name of the SLS log store.
     */
    readonly slsLogstore: string | ros.IResolvable;
    /**
     * @Property slsProject: The name of the SLS project.
     */
    readonly slsProject: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::GatewayLogging`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayLogging` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gatewaylogging
 */
export declare class RosGatewayLogging extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::GatewayLogging";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The ID of the gateway.
     */
    gatewayId: string | ros.IResolvable;
    /**
     * @Property slsLogstore: The name of the SLS log store.
     */
    slsLogstore: string | ros.IResolvable;
    /**
     * @Property slsProject: The name of the SLS project.
     */
    slsProject: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayLoggingProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosStorageBundle`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export interface RosStorageBundleProps {
    /**
     * @Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly storageBundleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    readonly description?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CloudStorageGateway::StorageBundle`, which is used to create a gateway cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `StorageBundle` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
 */
export declare class RosStorageBundle extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CloudStorageGateway::StorageBundle";
    /**
     * @Attribute CreateTime: Create a gateway cluster timestamp.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute Description: Gateway cluster description.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * @Attribute StorageBundleId: The ID of the gateway cluster.
     */
    readonly attrStorageBundleId: ros.IResolvable;
    /**
     * @Attribute StorageBundleName: Gateway cluster name.
     */
    readonly attrStorageBundleName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property storageBundleName: The name of the gateway cluster. The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    storageBundleName: string | ros.IResolvable;
    /**
     * @Property description: The description of the gateway cluster. The description must be 0 to 128 characters in length.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStorageBundleProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
