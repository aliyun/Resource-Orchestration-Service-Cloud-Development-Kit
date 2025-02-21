import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './foas.generated';
export { RosCluster as ClusterProperty };
/**
 * Properties for defining a `Cluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
 */
export interface ClusterProps {
    /**
     * Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly clusterName: string | ros.IResolvable;
    /**
     * Property description: Cluster description.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property ossBucket: Bucket name in your OSS.
     */
    readonly ossBucket: string | ros.IResolvable;
    /**
     * Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property order: Order detail. Only one of property Order or OrderId can be specified.
     * Order is not suggested.
     * Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
     * The order can not be cancelled.
     */
    readonly order?: RosCluster.OrderProperty | ros.IResolvable;
    /**
     * Property orderId: Order Id. Only one of property Order or OrderId can be specified.
     * OrderId is suggested.
     */
    readonly orderId?: string | ros.IResolvable;
}
/**
 * Represents a `Cluster`.
 */
export interface ICluster extends ros.IResource {
    readonly props: ClusterProps;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute EngineVersions: Engine Versions.
     */
    readonly attrEngineVersions: ros.IResolvable | string;
    /**
     * Attribute MasterInstanceInfos: Master instance infos.
     */
    readonly attrMasterInstanceInfos: ros.IResolvable | string;
    /**
     * Attribute OrderId: Order ID.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: Security group Id.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SlaveInstanceInfos: Slave instance infos.
     */
    readonly attrSlaveInstanceInfos: ros.IResolvable | string;
    /**
     * Attribute State: Cluster status.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute VSwitchIds: VSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FOAS::Cluster`, which is used to create a cluster for an order in exclusive mode.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
 */
export declare class Cluster extends ros.Resource implements ICluster {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable | string;
    /**
     * Attribute EngineVersions: Engine Versions.
     */
    readonly attrEngineVersions: ros.IResolvable | string;
    /**
     * Attribute MasterInstanceInfos: Master instance infos.
     */
    readonly attrMasterInstanceInfos: ros.IResolvable | string;
    /**
     * Attribute OrderId: Order ID.
     */
    readonly attrOrderId: ros.IResolvable | string;
    /**
     * Attribute SecurityGroupId: Security group Id.
     */
    readonly attrSecurityGroupId: ros.IResolvable | string;
    /**
     * Attribute SlaveInstanceInfos: Slave instance infos.
     */
    readonly attrSlaveInstanceInfos: ros.IResolvable | string;
    /**
     * Attribute State: Cluster status.
     */
    readonly attrState: ros.IResolvable | string;
    /**
     * Attribute VSwitchIds: VSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
