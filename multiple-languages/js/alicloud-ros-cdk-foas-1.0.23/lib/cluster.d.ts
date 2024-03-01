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
 * This class encapsulates and extends the ROS resource type `ALIYUN::FOAS::Cluster`, which is used to create a cluster for an order in exclusive mode.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-foas-cluster
 */
export declare class Cluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ClusterProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute EngineVersions: Engine Versions.
     */
    readonly attrEngineVersions: ros.IResolvable;
    /**
     * Attribute MasterInstanceInfos: Master instance infos.
     */
    readonly attrMasterInstanceInfos: ros.IResolvable;
    /**
     * Attribute OrderId: Order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute SecurityGroupId: Security group Id.
     */
    readonly attrSecurityGroupId: ros.IResolvable;
    /**
     * Attribute SlaveInstanceInfos: Slave instance infos.
     */
    readonly attrSlaveInstanceInfos: ros.IResolvable;
    /**
     * Attribute State: Cluster status.
     */
    readonly attrState: ros.IResolvable;
    /**
     * Attribute VSwitchIds: VSwitch Ids.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
