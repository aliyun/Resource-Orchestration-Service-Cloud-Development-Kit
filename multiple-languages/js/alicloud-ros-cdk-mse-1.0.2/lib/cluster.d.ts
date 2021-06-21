import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './mse.generated';
export { RosCluster as ClusterProperty };
/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
 */
export interface ClusterProps {
    /**
     * Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly clusterSpecification: string | ros.IResolvable;
    /**
     * Property clusterType: cluster type
     */
    readonly clusterType: string | ros.IResolvable;
    /**
     * Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly clusterVersion: string | ros.IResolvable;
    /**
     * Property instanceCount: instance count
     */
    readonly instanceCount: number | ros.IResolvable;
    /**
     * Property netType: network type, Enum: privatenet,pubnet
     */
    readonly netType: string | ros.IResolvable;
    /**
     * Property aclEntryList: acl entry list
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property clusterAliasName: cluster alias name
     */
    readonly clusterAliasName?: string | ros.IResolvable;
    /**
     * Property connectionType: network connect type
     */
    readonly connectionType?: string | ros.IResolvable;
    /**
     * Property diskCapacity:
     */
    readonly diskCapacity?: string | ros.IResolvable;
    /**
     * Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;
    /**
     * Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string | ros.IResolvable;
    /**
     * Property pubNetworkFlow: pub network flow
     */
    readonly pubNetworkFlow?: string | ros.IResolvable;
    /**
     * Property pubSlbSpecification:
     */
    readonly pubSlbSpecification?: string | ros.IResolvable;
    /**
     * Property requestPars:
     */
    readonly requestPars?: string | ros.IResolvable;
    /**
     * Property vpcId: vpc id
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string | ros.IResolvable;
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
     * Attribute AclEntryList: acl entry list
     */
    readonly attrAclEntryList: ros.IResolvable;
    /**
     * Attribute AclId: acl id
     */
    readonly attrAclId: ros.IResolvable;
    /**
     * Attribute AppVersion: app version
     */
    readonly attrAppVersion: ros.IResolvable;
    /**
     * Attribute ClusterAliasName: cluster alias name
     */
    readonly attrClusterAliasName: ros.IResolvable;
    /**
     * Attribute ClusterId: cluster id
     */
    readonly attrClusterId: ros.IResolvable;
    /**
     * Attribute ClusterName: cluster name
     */
    readonly attrClusterName: ros.IResolvable;
    /**
     * Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    readonly attrClusterSpecification: ros.IResolvable;
    /**
     * Attribute ClusterType: cluster type
     */
    readonly attrClusterType: ros.IResolvable;
    /**
     * Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    readonly attrClusterVersion: ros.IResolvable;
    /**
     * Attribute ConnectionType: network connect type
     */
    readonly attrConnectionType: ros.IResolvable;
    /**
     * Attribute Cpu: cpu core size
     */
    readonly attrCpu: ros.IResolvable;
    /**
     * Attribute DiskCapacity: disk capacity, unit: G
     */
    readonly attrDiskCapacity: ros.IResolvable;
    /**
     * Attribute DiskType: disk type
     */
    readonly attrDiskType: ros.IResolvable;
    /**
     * Attribute HealthStatus: health status
     */
    readonly attrHealthStatus: ros.IResolvable;
    /**
     * Attribute InstanceCount: instance count
     */
    readonly attrInstanceCount: ros.IResolvable;
    /**
     * Attribute InstanceId: instance id
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InternetAddress: internet address
     */
    readonly attrInternetAddress: ros.IResolvable;
    /**
     * Attribute InternetDomain: internet domain
     */
    readonly attrInternetDomain: ros.IResolvable;
    /**
     * Attribute InternetPort: internet port
     */
    readonly attrInternetPort: ros.IResolvable;
    /**
     * Attribute IntranetAddress: intranet address
     */
    readonly attrIntranetAddress: ros.IResolvable;
    /**
     * Attribute IntranetDomain: intranet domain
     */
    readonly attrIntranetDomain: ros.IResolvable;
    /**
     * Attribute IntranetPort: intranet port
     */
    readonly attrIntranetPort: ros.IResolvable;
    /**
     * Attribute MemoryCapacity: memory capacity
     */
    readonly attrMemoryCapacity: ros.IResolvable;
    /**
     * Attribute NetType: network type, Enum: privatenet,pubnet
     */
    readonly attrNetType: ros.IResolvable;
    /**
     * Attribute PayInfo: pay info
     */
    readonly attrPayInfo: ros.IResolvable;
    /**
     * Attribute PubNetworkFlow: pub network flow
     */
    readonly attrPubNetworkFlow: ros.IResolvable;
    /**
     * Attribute VSwitchId: switcher Id
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: vpc id
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint?: boolean);
}
