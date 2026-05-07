import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosIntegrationPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export interface RosIntegrationPolicyProps {
    /**
     * @Property policyType: The type of the integration policy.
     */
    readonly policyType: string | ros.IResolvable;
    /**
     * @Property entityGroup: The entity group information.
     */
    readonly entityGroup?: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable;
    /**
     * @Property policyName: The name of the integration policy.
     */
    readonly policyName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIntegrationPolicy.TagsProperty[];
    /**
     * @Property workspace: The workspace of the integration policy.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::IntegrationPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `IntegrationPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-integrationpolicy
 */
export declare class RosIntegrationPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::IntegrationPolicy";
    /**
     * @Attribute PolicyId: The ID of the integration policy.
     */
    readonly attrPolicyId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property policyType: The type of the integration policy.
     */
    policyType: string | ros.IResolvable;
    /**
     * @Property entityGroup: The entity group information.
     */
    entityGroup: RosIntegrationPolicy.EntityGroupProperty | ros.IResolvable | undefined;
    /**
     * @Property policyName: The name of the integration policy.
     */
    policyName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to integration policy. Max support 20 tags to add during create integration policy. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosIntegrationPolicy.TagsProperty[] | undefined;
    /**
     * @Property workspace: The workspace of the integration policy.
     */
    workspace: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIntegrationPolicyProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosIntegrationPolicy {
    /**
     * @stability external
     */
    interface EntityGroupProperty {
        /**
         * @Property entityUserId: The entity user ID.
         */
        readonly entityUserId?: string | ros.IResolvable;
        /**
         * @Property vpcId: The VPC ID.
         */
        readonly vpcId?: string | ros.IResolvable;
        /**
         * @Property clusterId: The cluster ID.
         */
        readonly clusterId?: string | ros.IResolvable;
        /**
         * @Property clusterEntityType: The cluster entity type.
         */
        readonly clusterEntityType?: string | ros.IResolvable;
        /**
         * @Property entityGroupId: The entity group ID.
         */
        readonly entityGroupId?: string | ros.IResolvable;
        /**
         * @Property clusterNamespace: The cluster namespace.
         */
        readonly clusterNamespace?: string | ros.IResolvable;
        /**
         * @Property disablePolicyShare: Whether to disable policy sharing.
         */
        readonly disablePolicyShare?: boolean | ros.IResolvable;
    }
}
export declare namespace RosIntegrationPolicy {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPrometheusInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export interface RosPrometheusInstanceProps {
    /**
     * @Property prometheusInstanceName: The name of the Prometheus instance.
     */
    readonly prometheusInstanceName: string | ros.IResolvable;
    /**
     * @Property archiveDuration: The archive duration of the Prometheus instance.
     */
    readonly archiveDuration?: number | ros.IResolvable;
    /**
     * @Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    readonly authFreeReadPolicy?: string | ros.IResolvable;
    /**
     * @Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    readonly authFreeWritePolicy?: string | ros.IResolvable;
    /**
     * @Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    readonly basicMetricQueryLimit?: boolean | ros.IResolvable;
    /**
     * @Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    readonly enableAuthFreeRead?: boolean | ros.IResolvable;
    /**
     * @Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    readonly enableAuthFreeWrite?: boolean | ros.IResolvable;
    /**
     * @Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    readonly enableAuthToken?: boolean | ros.IResolvable;
    /**
     * @Property paymentType: The payment type of the Prometheus instance.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property status: The status of the Prometheus instance.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * @Property storageDuration: The storage duration of the Prometheus instance.
     */
    readonly storageDuration?: number | ros.IResolvable;
    /**
     * @Property workspace: The workspace of the Prometheus instance.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CMS2::PrometheusInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrometheusInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export declare class RosPrometheusInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CMS2::PrometheusInstance";
    /**
     * @Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    readonly attrHttpApiInterUrl: ros.IResolvable;
    /**
     * @Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    readonly attrHttpApiIntraUrl: ros.IResolvable;
    /**
     * @Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable;
    /**
     * @Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    readonly attrPushGatewayInterUrl: ros.IResolvable;
    /**
     * @Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    readonly attrPushGatewayIntraUrl: ros.IResolvable;
    /**
     * @Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    readonly attrRemoteReadInterUrl: ros.IResolvable;
    /**
     * @Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    readonly attrRemoteReadIntraUrl: ros.IResolvable;
    /**
     * @Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    readonly attrRemoteWriteInterUrl: ros.IResolvable;
    /**
     * @Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    readonly attrRemoteWriteIntraUrl: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property prometheusInstanceName: The name of the Prometheus instance.
     */
    prometheusInstanceName: string | ros.IResolvable;
    /**
     * @Property archiveDuration: The archive duration of the Prometheus instance.
     */
    archiveDuration: number | ros.IResolvable | undefined;
    /**
     * @Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    authFreeReadPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    authFreeWritePolicy: string | ros.IResolvable | undefined;
    /**
     * @Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    basicMetricQueryLimit: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    enableAuthFreeRead: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    enableAuthFreeWrite: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    enableAuthToken: boolean | ros.IResolvable | undefined;
    /**
     * @Property paymentType: The payment type of the Prometheus instance.
     */
    paymentType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property status: The status of the Prometheus instance.
     */
    status: string | ros.IResolvable | undefined;
    /**
     * @Property storageDuration: The storage duration of the Prometheus instance.
     */
    storageDuration: number | ros.IResolvable | undefined;
    /**
     * @Property workspace: The workspace of the Prometheus instance.
     */
    workspace: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheusInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
