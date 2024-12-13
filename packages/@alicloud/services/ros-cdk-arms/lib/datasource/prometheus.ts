import * as ros from '@alicloud/ros-cdk-core';
import { RosPrometheus } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Prometheus`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheus`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
export class Prometheus extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PrometheusProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ClusterId: The ID of the Prometheus instance.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterType: The type of the instance.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute GrafanaInstanceId: The ID of the Grafana workspace.
     */
    public readonly attrGrafanaInstanceId: ros.IResolvable;

    /**
     * Attribute PaymentType: The billing method.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute PrometheusName: The name of the instance.
     */
    public readonly attrPrometheusName: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SecurityGroupId: The ID of the security group. This parameter is returned only for Prometheus instances for ECS.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * Attribute SubClustersJson: The child instances of the Prometheus instance for GlobalView.
     */
    public readonly attrSubClustersJson: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute UserId: The user ID.
     */
    public readonly attrUserId: ros.IResolvable;

    /**
     * Attribute VSwitchId: The vSwitch ID. This parameter is returned only for Prometheus instances for ECS.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The VPC ID. This parameter is returned only for Prometheus instances for ECS.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrometheusProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPrometheus = new RosPrometheus(this, id,  {
            clusterId: props.clusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrometheus;
        this.attrClusterId = rosPrometheus.attrClusterId;
        this.attrClusterType = rosPrometheus.attrClusterType;
        this.attrGrafanaInstanceId = rosPrometheus.attrGrafanaInstanceId;
        this.attrPaymentType = rosPrometheus.attrPaymentType;
        this.attrPrometheusName = rosPrometheus.attrPrometheusName;
        this.attrResourceGroupId = rosPrometheus.attrResourceGroupId;
        this.attrSecurityGroupId = rosPrometheus.attrSecurityGroupId;
        this.attrSubClustersJson = rosPrometheus.attrSubClustersJson;
        this.attrTags = rosPrometheus.attrTags;
        this.attrUserId = rosPrometheus.attrUserId;
        this.attrVSwitchId = rosPrometheus.attrVSwitchId;
        this.attrVpcId = rosPrometheus.attrVpcId;
    }
}
