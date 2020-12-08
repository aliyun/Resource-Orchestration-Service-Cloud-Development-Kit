import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './foas.generated';
export { RosCluster as ClusterProperty };
/**
 * Properties for defining a `ALIYUN::FOAS::Cluster`
 */
export interface ClusterProps {
    /**
     * @Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly clusterName: string;
    /**
     * @Property description: Cluster description.
     */
    readonly description: string;
    /**
     * @Property ossBucket: Bucket name in your OSS.
     */
    readonly ossBucket: string;
    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string;
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
    readonly orderId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::FOAS::Cluster`
 */
export declare class Cluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute ClusterId: Cluster ID.
     */
    readonly attrClusterId: any;
    /**
     * @Attribute EngineVersions: Engine Versions.
     */
    readonly attrEngineVersions: any;
    /**
     * @Attribute MasterInstanceInfos: Master instance infos.
     */
    readonly attrMasterInstanceInfos: any;
    /**
     * @Attribute OrderId: Order ID.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute SecurityGroupId: Security group Id.
     */
    readonly attrSecurityGroupId: any;
    /**
     * @Attribute SlaveInstanceInfos: Slave instance infos.
     */
    readonly attrSlaveInstanceInfos: any;
    /**
     * @Attribute State: Cluster status.
     */
    readonly attrState: any;
    /**
     * @Attribute VSwitchIds: VSwitch Ids.
     */
    readonly attrVSwitchIds: any;
    /**
     * Create a new `ALIYUN::FOAS::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
