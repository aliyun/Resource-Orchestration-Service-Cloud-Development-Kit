import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::FOAS::Cluster`
 */
export interface RosClusterProps {
    /**
     * @Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * @Property description: Cluster description.
     */
    readonly description: string | ros.IResolvable;
    /**
     * @Property ossBucket: Bucket name in your OSS.
     */
    readonly ossBucket: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property order: Order detail. Only one of property Order or OrderId can be specified.
     * Order is not suggested.
     * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
     * The order can not be cancelled.
     */
    readonly order?: RosCluster.OrderProperty | ros.IResolvable;
    /**
     * @Property orderId: Order Id. Only one of property Order or OrderId can be specified.
     * OrderId is suggested.
     */
    readonly orderId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::FOAS::Cluster`
 */
export declare class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FOAS::Cluster";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * @Attribute EngineVersions: Engine Versions.
     */
    readonly attrEngineVersions: ros.IResolvable;
    /**
     * @Attribute MasterInstanceInfos: Master instance infos.
     */
    readonly attrMasterInstanceInfos: ros.IResolvable;
    /**
     * @Attribute OrderId: Order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupId: Security group Id.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute SlaveInstanceInfos: Slave instance infos.
     */
    readonly attrSlaveInstanceInfos: ros.IResolvable;
    /**
     * @Attribute State: Cluster status.
     */
    readonly attrState: ros.IResolvable;
    /**
     * @Attribute VSwitchIds: VSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    clusterName: string | ros.IResolvable;
    /**
     * @Property description: Cluster description.
     */
    description: string | ros.IResolvable;
    /**
     * @Property ossBucket: Bucket name in your OSS.
     */
    ossBucket: string | ros.IResolvable;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property order: Order detail. Only one of property Order or OrderId can be specified.
     * Order is not suggested.
     * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
     * The order can not be cancelled.
     */
    order: RosCluster.OrderProperty | ros.IResolvable | undefined;
    /**
     * @Property orderId: Order Id. Only one of property Order or OrderId can be specified.
     * OrderId is suggested.
     */
    orderId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::FOAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosCluster {
    /**
     * @stability external
     */
    interface OrderProperty {
        /**
         * @Property payModel: Pay model. Valid values: pre, post. Default to post.
         */
        readonly payModel?: string | ros.IResolvable;
        /**
         * @Property period: Pre paid time period. Unit is month. Default to 1.
         */
        readonly period?: number | ros.IResolvable;
        /**
         * @Property masterNumber: Number of masters. Valid values: 1, 3. Default to 3.
         */
        readonly masterNumber?: number | ros.IResolvable;
        /**
         * @Property masterSpec: Master spec, such as Ecs_4c16g.
         */
        readonly masterSpec: string | ros.IResolvable;
        /**
         * @Property slaveNumber: Number of masters. Valid values: 2-1000. Default to 2.
         */
        readonly slaveNumber?: number | ros.IResolvable;
        /**
         * @Property slaveSpec: Master spec, such as Ecs_4c16g.
         */
        readonly slaveSpec: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::FOAS::Project`
 */
export interface RosProjectProps {
    /**
     * @Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    readonly deployType: string | ros.IResolvable;
    /**
     * @Property managerIds: Comma delimited account Id list of managers.
     */
    readonly managerIds: string | ros.IResolvable;
    /**
     * @Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property clusterId: Cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property description: Project description.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * @Property orderId: Order Id of Shared cluster.
     */
    readonly orderId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::FOAS::Project`
 */
export declare class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::FOAS::Project";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute State: Project state.
     */
    readonly attrState: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property deployType: Cluster type:
     * Exclusive cluster: cell
     * Shared cluster: public
     */
    deployType: string | ros.IResolvable;
    /**
     * @Property managerIds: Comma delimited account Id list of managers.
     */
    managerIds: string | ros.IResolvable;
    /**
     * @Property name: Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    name: string | ros.IResolvable;
    /**
     * @Property clusterId: Cluster ID.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property description: Project description.
     */
    description: string | ros.IResolvable | undefined;
    /**
     * @Property orderId: Order Id of Shared cluster.
     */
    orderId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::FOAS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
//# sourceMappingURL=foas.generated.d.ts.map