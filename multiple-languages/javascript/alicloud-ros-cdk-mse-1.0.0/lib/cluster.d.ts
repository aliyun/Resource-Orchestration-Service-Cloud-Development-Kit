import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './mse.generated';
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
export declare class Cluster extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AclEntryList: acl entry list
     */
    readonly attrAclEntryList: any;
    /**
     * @Attribute AclId: acl id
     */
    readonly attrAclId: any;
    /**
     * @Attribute AppVersion: app version
     */
    readonly attrAppVersion: any;
    /**
     * @Attribute ClusterAliasName: cluster alias name
     */
    readonly attrClusterAliasName: any;
    /**
     * @Attribute ClusterId: cluster id
     */
    readonly attrClusterId: any;
    /**
     * @Attribute ClusterName: cluster name
     */
    readonly attrClusterName: any;
    /**
     * @Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly attrClusterSpecification: any;
    /**
     * @Attribute ClusterType: cluster type
     */
    readonly attrClusterType: any;
    /**
     * @Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly attrClusterVersion: any;
    /**
     * @Attribute Cpu: cpu core size
     */
    readonly attrCpu: any;
    /**
     * @Attribute DiskCapacity: disk capacity, unit: G
     */
    readonly attrDiskCapacity: any;
    /**
     * @Attribute DiskType: disk type
     */
    readonly attrDiskType: any;
    /**
     * @Attribute HealthStatus: health status
     */
    readonly attrHealthStatus: any;
    /**
     * @Attribute InitStatus: init status, Enum: INIT_ING, INIT_FAILED, INIT_SUCCESS, INIT_TIME_OUT,DESTROY_ING, DESTROY_FAILED, DESTROY_SUCCESS, RESTART_ING, RESTART_SUCCESS, RESTART_FAILED, SCALE_ING, SCALE_SUCCESS, SCALE_FAILED
     */
    readonly attrInitStatus: any;
    /**
     * @Attribute InstanceCount: instance count
     */
    readonly attrInstanceCount: any;
    /**
     * @Attribute InstanceId: instance id
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute InternetAddress: internet address
     */
    readonly attrInternetAddress: any;
    /**
     * @Attribute InternetDomain: internet domain
     */
    readonly attrInternetDomain: any;
    /**
     * @Attribute InternetPort: internet port
     */
    readonly attrInternetPort: any;
    /**
     * @Attribute IntranetAddress: intranet address
     */
    readonly attrIntranetAddress: any;
    /**
     * @Attribute IntranetDomain: intranet domain
     */
    readonly attrIntranetDomain: any;
    /**
     * @Attribute IntranetPort: intranet port
     */
    readonly attrIntranetPort: any;
    /**
     * @Attribute MemoryCapacity: memory capacity
     */
    readonly attrMemoryCapacity: any;
    /**
     * @Attribute NetType: network type, Enum: privatenet,pubnet
     */
    readonly attrNetType: any;
    /**
     * @Attribute OrderId: order id
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PayInfo: pay info
     */
    readonly attrPayInfo: any;
    /**
     * @Attribute PubNetworkFlow: pub network flow
     */
    readonly attrPubNetworkFlow: any;
    /**
     * @Attribute RegionId: region id
     */
    readonly attrRegionId: any;
    /**
     * @Attribute VSwitchId: switcher Id
     */
    readonly attrVSwitchId: any;
    /**
     * @Attribute VpcId: vpc id
     */
    readonly attrVpcId: any;
    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
