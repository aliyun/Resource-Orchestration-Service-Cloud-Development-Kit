import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export interface RosClustersProps {
    /**
     * @Property clusterAliasName: The alias name of cluster.
     */
    readonly clusterAliasName?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MSE::Clusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Clusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-clusters
 */
export declare class RosClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MSE::Clusters";
    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    readonly attrClusterIds: ros.IResolvable;
    /**
     * @Attribute Clusters: The list of clusters.
     */
    readonly attrClusters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterAliasName: The alias name of cluster.
     */
    clusterAliasName: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClustersProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
export interface RosGatewaysProps {
    /**
     * @Property gatewayId: The ID of gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * @Property gatewayType: The type of gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;
    /**
     * @Property instanceId: The instance ID of gateway.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * @Property name: The name of gateway.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property vpc: The vpc ID of gateway.
     */
    readonly vpc?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::MSE::Gateways`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateways` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
export declare class RosGateways extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MSE::Gateways";
    /**
     * @Attribute GatewayIds: The list of gateway IDs.
     */
    readonly attrGatewayIds: ros.IResolvable;
    /**
     * @Attribute Gateways: The list of gateways.
     */
    readonly attrGateways: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property gatewayId: The ID of gateway.
     */
    gatewayId: string | ros.IResolvable | undefined;
    /**
     * @Property gatewayType: The type of gateway.
     */
    gatewayType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceId: The instance ID of gateway.
     */
    instanceId: string | ros.IResolvable | undefined;
    /**
     * @Property name: The name of gateway.
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property vpc: The vpc ID of gateway.
     */
    vpc: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewaysProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
