import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheus } from './arms.generated';
export { RosPrometheus as PrometheusProperty };
/**
 * Properties for defining a `Prometheus`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export interface PrometheusProps {
    /**
     * Property clusterType: Instance type.
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * Property grafanaInstanceId: Grafana workspace ID.
     */
    readonly grafanaInstanceId: string | ros.IResolvable;
    /**
     * Property prometheusName: The name of the resource.
     */
    readonly prometheusName: string | ros.IResolvable;
    /**
     * Property clusterId: The ID of the cluster. This parameter is required if you set ClusterType to ManagedKubernetes.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupId: The ID of the custom resource group. You can specify this parameter to bind the instance to the resource group.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property subClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    readonly subClustersJson?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: Tags of prometheus.
     */
    readonly tags?: RosPrometheus.TagsProperty[];
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC). This parameter is required if you set ClusterType to ecs or create a serverless Kubernetes (ASK) managed cluster.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch. This parameter is required if you set ClusterType to ecs or create an ASK managed cluster.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::Prometheus`, which is used to create a Prometheus instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheus`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-prometheus
 */
export declare class Prometheus extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheusProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: The ID of the cluster.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ClusterType: Instance type.
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * Attribute GrafanaInstanceId: Grafana workspace ID.
     */
    readonly attrGrafanaInstanceId: ros.IResolvable;
    /**
     * Attribute PaymentType: Payment Type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute PrometheusName: The name of the resource.
     */
    readonly attrPrometheusName: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecurityGroupId: The ID of the security group.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Attribute SubClustersJson: Subcluster information of globalVeiw cluster.
     */
    readonly attrSubClustersJson: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the prometheus.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute UserId: User ID.
     */
    readonly attrUserId: ros.IResolvable;
    /**
     * Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC).
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheusProps, enableResourcePropertyConstraint?: boolean);
}
