import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheusInstance } from './cms2.generated';
export { RosPrometheusInstance as PrometheusInstanceProperty };
/**
 * Properties for defining a `PrometheusInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export interface PrometheusInstanceProps {
    /**
     * Property prometheusInstanceName: The name of the Prometheus instance.
     */
    readonly prometheusInstanceName: string | ros.IResolvable;
    /**
     * Property archiveDuration: The archive duration of the Prometheus instance.
     */
    readonly archiveDuration?: number | ros.IResolvable;
    /**
     * Property authFreeReadPolicy: The authentication-free read policy of the Prometheus instance.
     */
    readonly authFreeReadPolicy?: string | ros.IResolvable;
    /**
     * Property authFreeWritePolicy: The authentication-free write policy of the Prometheus instance.
     */
    readonly authFreeWritePolicy?: string | ros.IResolvable;
    /**
     * Property basicMetricQueryLimit: The basic metric query limit of the Prometheus instance.
     */
    readonly basicMetricQueryLimit?: boolean | ros.IResolvable;
    /**
     * Property enableAuthFreeRead: Whether to enable authentication-free read for the Prometheus instance.
     */
    readonly enableAuthFreeRead?: boolean | ros.IResolvable;
    /**
     * Property enableAuthFreeWrite: Whether to enable authentication-free write for the Prometheus instance.
     */
    readonly enableAuthFreeWrite?: boolean | ros.IResolvable;
    /**
     * Property enableAuthToken: Whether to enable authentication token for the Prometheus instance.
     */
    readonly enableAuthToken?: boolean | ros.IResolvable;
    /**
     * Property paymentType: The payment type of the Prometheus instance.
     */
    readonly paymentType?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property status: The status of the Prometheus instance.
     */
    readonly status?: string | ros.IResolvable;
    /**
     * Property storageDuration: The storage duration of the Prometheus instance.
     */
    readonly storageDuration?: number | ros.IResolvable;
    /**
     * Property workspace: The workspace of the Prometheus instance.
     */
    readonly workspace?: string | ros.IResolvable;
}
/**
 * Represents a `PrometheusInstance`.
 */
export interface IPrometheusInstance extends ros.IResource {
    readonly props: PrometheusInstanceProps;
    /**
     * Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    readonly attrHttpApiInterUrl: ros.IResolvable | string;
    /**
     * Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    readonly attrHttpApiIntraUrl: ros.IResolvable | string;
    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable | string;
    /**
     * Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    readonly attrPushGatewayInterUrl: ros.IResolvable | string;
    /**
     * Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    readonly attrPushGatewayIntraUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    readonly attrRemoteReadInterUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    readonly attrRemoteReadIntraUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    readonly attrRemoteWriteInterUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    readonly attrRemoteWriteIntraUrl: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::PrometheusInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-prometheusinstance
 */
export declare class PrometheusInstance extends ros.Resource implements IPrometheusInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PrometheusInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HttpApiInterUrl: The HTTP API inter URL of the Prometheus instance.
     */
    readonly attrHttpApiInterUrl: ros.IResolvable | string;
    /**
     * Attribute HttpApiIntraUrl: The HTTP API intra URL of the Prometheus instance.
     */
    readonly attrHttpApiIntraUrl: ros.IResolvable | string;
    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable | string;
    /**
     * Attribute PushGatewayInterUrl: The push gateway inter URL of the Prometheus instance.
     */
    readonly attrPushGatewayInterUrl: ros.IResolvable | string;
    /**
     * Attribute PushGatewayIntraUrl: The push gateway intra URL of the Prometheus instance.
     */
    readonly attrPushGatewayIntraUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteReadInterUrl: The remote read inter URL of the Prometheus instance.
     */
    readonly attrRemoteReadInterUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteReadIntraUrl: The remote read intra URL of the Prometheus instance.
     */
    readonly attrRemoteReadIntraUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteWriteInterUrl: The remote write inter URL of the Prometheus instance.
     */
    readonly attrRemoteWriteInterUrl: ros.IResolvable | string;
    /**
     * Attribute RemoteWriteIntraUrl: The remote write intra URL of the Prometheus instance.
     */
    readonly attrRemoteWriteIntraUrl: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheusInstanceProps, enableResourcePropertyConstraint?: boolean);
}
