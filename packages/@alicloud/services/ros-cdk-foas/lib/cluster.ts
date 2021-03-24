import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './foas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::FOAS::Cluster`
 */
export interface ClusterProps {

    /**
     * Property clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
     */
    readonly clusterName: string;

    /**
     * Property description: Cluster description.
     */
    readonly description: string;

    /**
     * Property ossBucket: Bucket name in your OSS.
     */
    readonly ossBucket: string;

    /**
     * Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId: string;

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
    readonly orderId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::FOAS::Cluster`
 */
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ClusterId: Cluster ID.
     */
    public readonly attrClusterId: any;

    /**
     * Attribute EngineVersions: Engine Versions.
     */
    public readonly attrEngineVersions: any;

    /**
     * Attribute MasterInstanceInfos: Master instance infos.
     */
    public readonly attrMasterInstanceInfos: any;

    /**
     * Attribute OrderId: Order ID.
     */
    public readonly attrOrderId: any;

    /**
     * Attribute SecurityGroupId: Security group Id.
     */
    public readonly attrSecurityGroupId: any;

    /**
     * Attribute SlaveInstanceInfos: Slave instance infos.
     */
    public readonly attrSlaveInstanceInfos: any;

    /**
     * Attribute State: Cluster status.
     */
    public readonly attrState: any;

    /**
     * Attribute VSwitchIds: VSwitch Ids.
     */
    public readonly attrVSwitchIds: any;

    /**
     * Create a new `ALIYUN::FOAS::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            order: props.order,
            description: props.description,
            vSwitchId: props.vSwitchId,
            ossBucket: props.ossBucket,
            clusterName: props.clusterName,
            orderId: props.orderId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrEngineVersions = rosCluster.attrEngineVersions;
        this.attrMasterInstanceInfos = rosCluster.attrMasterInstanceInfos;
        this.attrOrderId = rosCluster.attrOrderId;
        this.attrSecurityGroupId = rosCluster.attrSecurityGroupId;
        this.attrSlaveInstanceInfos = rosCluster.attrSlaveInstanceInfos;
        this.attrState = rosCluster.attrState;
        this.attrVSwitchIds = rosCluster.attrVSwitchIds;
    }
}
