import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheus } from './arms.generated';
export { RosPrometheus as PrometheusProperty };
/**
 * Properties for defining a `Prometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export interface PrometheusProps {
    /**
     * Property clusterId: The ID of the Prometheus instance.
     */
    readonly clusterId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Prometheus`.
 */
export interface IPrometheus extends ros.IResource {
    readonly props: PrometheusProps;
    /**
     * Attribute ClusterId: The ID of the Prometheus instance.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterType: The type of the instance.
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute GrafanaInstanceId: The ID of the Grafana workspace.
     */
    readonly attrGrafanaInstanceId: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The billing method.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PrometheusName: The name of the instance.
     */
    readonly attrPrometheusName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: The ID of the security group. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly attrSubClustersJson: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute UserId: The user ID.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The vSwitch ID. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Prometheus`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheus`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export declare class Prometheus extends ros.Resource implements IPrometheus {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: PrometheusProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: The ID of the Prometheus instance.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute ClusterType: The type of the instance.
     */
    readonly attrClusterType: ros.IResolvable | string;
    /**
     * Attribute GrafanaInstanceId: The ID of the Grafana workspace.
     */
    readonly attrGrafanaInstanceId: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The billing method.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PrometheusName: The name of the instance.
     */
    readonly attrPrometheusName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: The ID of the security group. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly attrSubClustersJson: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the instance.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute UserId: The user ID.
     */
    readonly attrUserId: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The vSwitch ID. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The VPC ID. This parameter is returned only for Prometheus instances for ECS.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheusProps, enableResourcePropertyConstraint?: boolean);
}
