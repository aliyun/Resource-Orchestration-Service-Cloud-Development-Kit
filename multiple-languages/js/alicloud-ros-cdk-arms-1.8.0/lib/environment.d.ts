import * as ros from '@alicloud/ros-cdk-core';
import { RosEnvironment } from './arms.generated';
export { RosEnvironment as EnvironmentProperty };
/**
 * Properties for defining a `Environment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
export interface EnvironmentProps {
    /**
     * Property bindResourceId: The ID of the resource bound to the environment, such as the container ID or VPC ID. For a Cloud environment, specify the region ID.
     */
    readonly bindResourceId: string | ros.IResolvable;
    /**
     * Property environmentName: The name of the environment.
     */
    readonly environmentName: string | ros.IResolvable;
    /**
     * Property environmentSubType: The subtype of the environment. Valid values:
     * One: CS type environment
     * ACK: CS type environment
     * ECS: ECS type environment
     * Cloud: cloud service
     */
    readonly environmentSubType: string | ros.IResolvable;
    /**
     * Property environmentType: The type of the environment. Valid values:
     * CS: ACK
     * ECS: ECS
     * Cloud: cloud service
     */
    readonly environmentType: string | ros.IResolvable;
    /**
     * Property deletePromInstance: Cascade delete Prometheus instance. Default value: true.
     */
    readonly deletePromInstance?: boolean | ros.IResolvable;
    /**
     * Property feePackage: The payable resource plan. Valid values:
     * If the EnvironmentType parameter is set to CS, set the value to CS_Basic or CS_Pro. Default value: CS_Basic.
     * Otherwise, leave the parameter empty.
     */
    readonly feePackage?: string | ros.IResolvable;
    /**
     * Property grafanaWorkspaceId: The ID of the grafana workspace bound to the environment. When passing space, the default share grafana is used.
     */
    readonly grafanaWorkspaceId?: string | ros.IResolvable;
    /**
     * Property managedType: Specifies whether agents or exporters are managed. Valid values:
     * none: No. By default, no managed agents or exporters are provided for ACK clusters.
     * agent: Agents are managed. By default, managed agents are provided for ASK clusters, ACS clusters, and ACK One clusters.
     * agent-exporter: Agents and exporters are managed. By default, managed agents and exporters are provided for cloud services.
     */
    readonly managedType?: string | ros.IResolvable;
    /**
     * Property prometheusInstanceId: The ID of the Prometheus instance. If no Prometheus instance is created, call the InitEnvironment operation to initialize a storage instance.
     */
    readonly prometheusInstanceId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of Environment.
     */
    readonly tags?: RosEnvironment.TagsProperty[];
}
/**
 * Represents a `Environment`.
 */
export interface IEnvironment extends ros.IResource {
    readonly props: EnvironmentProps;
    /**
     * Attribute EnvironmentId: The id of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute EnvironmentName: The name of the environment.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;
    /**
     * Attribute EnvironmentSubType: The subtype of the environment.
     */
    readonly attrEnvironmentSubType: ros.IResolvable | string;
    /**
     * Attribute EnvironmentType: The type of the environment.
     */
    readonly attrEnvironmentType: ros.IResolvable | string;
    /**
     * Attribute FeePackage: The payable resource plan.
     */
    readonly attrFeePackage: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
     */
    readonly attrGrafanaWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute ManagedType: Specifies whether agents or exporters are managed.
     */
    readonly attrManagedType: ros.IResolvable | string;
    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ARMS::Environment`, which is used to create an environment.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEnvironment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-arms-environment
 */
export declare class Environment extends ros.Resource implements IEnvironment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: EnvironmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EnvironmentId: The id of the environment.
     */
    readonly attrEnvironmentId: ros.IResolvable | string;
    /**
     * Attribute EnvironmentName: The name of the environment.
     */
    readonly attrEnvironmentName: ros.IResolvable | string;
    /**
     * Attribute EnvironmentSubType: The subtype of the environment.
     */
    readonly attrEnvironmentSubType: ros.IResolvable | string;
    /**
     * Attribute EnvironmentType: The type of the environment.
     */
    readonly attrEnvironmentType: ros.IResolvable | string;
    /**
     * Attribute FeePackage: The payable resource plan.
     */
    readonly attrFeePackage: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceId: The ID of the grafana workspace bound to the environment.
     */
    readonly attrGrafanaWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute ManagedType: Specifies whether agents or exporters are managed.
     */
    readonly attrManagedType: ros.IResolvable | string;
    /**
     * Attribute PrometheusInstanceId: The ID of the Prometheus instance.
     */
    readonly attrPrometheusInstanceId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EnvironmentProps, enableResourcePropertyConstraint?: boolean);
}
