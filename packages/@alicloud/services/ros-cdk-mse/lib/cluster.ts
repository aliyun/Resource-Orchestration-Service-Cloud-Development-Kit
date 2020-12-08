import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCluster as ClusterProperty };

/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
 */
export interface ClusterProps {

    /**
     * @Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly clusterSpecification: string;

    /**
     * @Property clusterType: cluster type
     */
    readonly clusterType: string;

    /**
     * @Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly clusterVersion: string;

    /**
     * @Property instanceCount: instance count
     */
    readonly instanceCount: number;

    /**
     * @Property netType: network type, Enum: privatenet,pubnet
     */
    readonly netType: string;

    /**
     * @Property diskType: disk type
     */
    readonly diskType?: string;

    /**
     * @Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string;

    /**
     * @Property pubNetworkFlow: pub network flow
     */
    readonly pubNetworkFlow?: string;

    /**
     * @Property pubSlbSpecification:
     */
    readonly pubSlbSpecification?: string;

    /**
     * @Property vpcId: vpc id
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::MSE::Cluster`
 */
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AclEntryList: acl entry list
     */
    public readonly attrAclEntryList: any;

    /**
     * @Attribute AclId: acl id
     */
    public readonly attrAclId: any;

    /**
     * @Attribute AppVersion: app version
     */
    public readonly attrAppVersion: any;

    /**
     * @Attribute ClusterAliasName: cluster alias name
     */
    public readonly attrClusterAliasName: any;

    /**
     * @Attribute ClusterId: cluster id
     */
    public readonly attrClusterId: any;

    /**
     * @Attribute ClusterName: cluster name
     */
    public readonly attrClusterName: any;

    /**
     * @Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    public readonly attrClusterSpecification: any;

    /**
     * @Attribute ClusterType: cluster type
     */
    public readonly attrClusterType: any;

    /**
     * @Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    public readonly attrClusterVersion: any;

    /**
     * @Attribute Cpu: cpu core size
     */
    public readonly attrCpu: any;

    /**
     * @Attribute DiskCapacity: disk capacity, unit: G
     */
    public readonly attrDiskCapacity: any;

    /**
     * @Attribute DiskType: disk type
     */
    public readonly attrDiskType: any;

    /**
     * @Attribute HealthStatus: health status
     */
    public readonly attrHealthStatus: any;

    /**
     * @Attribute InitStatus: init status, Enum: INIT_ING, INIT_FAILED, INIT_SUCCESS, INIT_TIME_OUT,DESTROY_ING, DESTROY_FAILED, DESTROY_SUCCESS, RESTART_ING, RESTART_SUCCESS, RESTART_FAILED, SCALE_ING, SCALE_SUCCESS, SCALE_FAILED
     */
    public readonly attrInitStatus: any;

    /**
     * @Attribute InstanceCount: instance count
     */
    public readonly attrInstanceCount: any;

    /**
     * @Attribute InstanceId: instance id
     */
    public readonly attrInstanceId: any;

    /**
     * @Attribute InternetAddress: internet address
     */
    public readonly attrInternetAddress: any;

    /**
     * @Attribute InternetDomain: internet domain
     */
    public readonly attrInternetDomain: any;

    /**
     * @Attribute InternetPort: internet port
     */
    public readonly attrInternetPort: any;

    /**
     * @Attribute IntranetAddress: intranet address
     */
    public readonly attrIntranetAddress: any;

    /**
     * @Attribute IntranetDomain: intranet domain
     */
    public readonly attrIntranetDomain: any;

    /**
     * @Attribute IntranetPort: intranet port
     */
    public readonly attrIntranetPort: any;

    /**
     * @Attribute MemoryCapacity: memory capacity
     */
    public readonly attrMemoryCapacity: any;

    /**
     * @Attribute NetType: network type, Enum: privatenet,pubnet
     */
    public readonly attrNetType: any;

    /**
     * @Attribute OrderId: order id
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PayInfo: pay info
     */
    public readonly attrPayInfo: any;

    /**
     * @Attribute PubNetworkFlow: pub network flow
     */
    public readonly attrPubNetworkFlow: any;

    /**
     * @Attribute RegionId: region id
     */
    public readonly attrRegionId: any;

    /**
     * @Attribute VSwitchId: switcher Id
     */
    public readonly attrVSwitchId: any;

    /**
     * @Attribute VpcId: vpc id
     */
    public readonly attrVpcId: any;

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            diskType: props.diskType,
            instanceCount: props.instanceCount,
            privateSlbSpecification: props.privateSlbSpecification,
            vpcId: props.vpcId,
            clusterVersion: props.clusterVersion,
            pubNetworkFlow: props.pubNetworkFlow,
            clusterSpecification: props.clusterSpecification,
            vSwitchId: props.vSwitchId,
            pubSlbSpecification: props.pubSlbSpecification,
            clusterType: props.clusterType,
            netType: props.netType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCluster;
        this.attrAclEntryList = rosCluster.attrAclEntryList;
        this.attrAclId = rosCluster.attrAclId;
        this.attrAppVersion = rosCluster.attrAppVersion;
        this.attrClusterAliasName = rosCluster.attrClusterAliasName;
        this.attrClusterId = rosCluster.attrClusterId;
        this.attrClusterName = rosCluster.attrClusterName;
        this.attrClusterSpecification = rosCluster.attrClusterSpecification;
        this.attrClusterType = rosCluster.attrClusterType;
        this.attrClusterVersion = rosCluster.attrClusterVersion;
        this.attrCpu = rosCluster.attrCpu;
        this.attrDiskCapacity = rosCluster.attrDiskCapacity;
        this.attrDiskType = rosCluster.attrDiskType;
        this.attrHealthStatus = rosCluster.attrHealthStatus;
        this.attrInitStatus = rosCluster.attrInitStatus;
        this.attrInstanceCount = rosCluster.attrInstanceCount;
        this.attrInstanceId = rosCluster.attrInstanceId;
        this.attrInternetAddress = rosCluster.attrInternetAddress;
        this.attrInternetDomain = rosCluster.attrInternetDomain;
        this.attrInternetPort = rosCluster.attrInternetPort;
        this.attrIntranetAddress = rosCluster.attrIntranetAddress;
        this.attrIntranetDomain = rosCluster.attrIntranetDomain;
        this.attrIntranetPort = rosCluster.attrIntranetPort;
        this.attrMemoryCapacity = rosCluster.attrMemoryCapacity;
        this.attrNetType = rosCluster.attrNetType;
        this.attrOrderId = rosCluster.attrOrderId;
        this.attrPayInfo = rosCluster.attrPayInfo;
        this.attrPubNetworkFlow = rosCluster.attrPubNetworkFlow;
        this.attrRegionId = rosCluster.attrRegionId;
        this.attrVSwitchId = rosCluster.attrVSwitchId;
        this.attrVpcId = rosCluster.attrVpcId;
    }
}
