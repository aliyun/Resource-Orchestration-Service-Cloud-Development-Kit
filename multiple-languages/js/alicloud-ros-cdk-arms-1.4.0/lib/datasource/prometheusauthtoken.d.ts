import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheusAuthToken } from './arms.generated';
export { RosPrometheusAuthToken as PrometheusAuthTokenProperty };
/**
 * Properties for defining a `PrometheusAuthToken`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export interface PrometheusAuthTokenProps {
    /**
     * Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::PrometheusAuthToken`, which is used to query an authentication token for read and write over the Internet.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheusAuthToken`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheusauthtoken
 */
export declare class PrometheusAuthToken extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheusAuthTokenProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Token: The token for Grafana read URL.
     */
    readonly attrToken: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: PrometheusAuthTokenProps, enableResourcePropertyConstraint?: boolean);
}
