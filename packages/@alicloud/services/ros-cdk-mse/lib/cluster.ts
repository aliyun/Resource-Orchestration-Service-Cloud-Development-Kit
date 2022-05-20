import * as ros from '@alicloud/ros-cdk-core';
import { RosCluster } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_2_1,NACOS_2_0_0
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
     * Property acceptLanguage:
     */
    readonly acceptLanguage?: string | ros.IResolvable;

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
     * Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * Property mseVersion: This parameter is required when creating a professional version. The value is as follows:
     * 
     * -'mse_basic': indicates the basic version (default value).
     * -'mse_pro': means professional version.
     */
    readonly mseVersion?: string | ros.IResolvable;

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
export class Cluster extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AclEntryList: acl entry list
     */
    public readonly attrAclEntryList: ros.IResolvable;

    /**
     * Attribute AclId: acl id
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * Attribute AppVersion: app version
     */
    public readonly attrAppVersion: ros.IResolvable;

    /**
     * Attribute ClusterAliasName: cluster alias name
     */
    public readonly attrClusterAliasName: ros.IResolvable;

    /**
     * Attribute ClusterId: cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * Attribute ClusterName: cluster name
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * Attribute ClusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    public readonly attrClusterSpecification: ros.IResolvable;

    /**
     * Attribute ClusterType: cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * Attribute ClusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_2_1,NACOS_2_0_0
     */
    public readonly attrClusterVersion: ros.IResolvable;

    /**
     * Attribute ConnectionType: network connect type
     */
    public readonly attrConnectionType: ros.IResolvable;

    /**
     * Attribute Cpu: cpu core size
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * Attribute DiskCapacity: disk capacity, unit: G
     */
    public readonly attrDiskCapacity: ros.IResolvable;

    /**
     * Attribute DiskType: disk type
     */
    public readonly attrDiskType: ros.IResolvable;

    /**
     * Attribute HealthStatus: health status
     */
    public readonly attrHealthStatus: ros.IResolvable;

    /**
     * Attribute InstanceCount: instance count
     */
    public readonly attrInstanceCount: ros.IResolvable;

    /**
     * Attribute InstanceId: instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InternetAddress: internet address
     */
    public readonly attrInternetAddress: ros.IResolvable;

    /**
     * Attribute InternetDomain: internet domain
     */
    public readonly attrInternetDomain: ros.IResolvable;

    /**
     * Attribute InternetPort: internet port
     */
    public readonly attrInternetPort: ros.IResolvable;

    /**
     * Attribute IntranetAddress: intranet address
     */
    public readonly attrIntranetAddress: ros.IResolvable;

    /**
     * Attribute IntranetDomain: intranet domain
     */
    public readonly attrIntranetDomain: ros.IResolvable;

    /**
     * Attribute IntranetPort: intranet port
     */
    public readonly attrIntranetPort: ros.IResolvable;

    /**
     * Attribute MemoryCapacity: memory capacity
     */
    public readonly attrMemoryCapacity: ros.IResolvable;

    /**
     * Attribute MseVersion: This parameter is required when creating a professional version. The value is as follows:

-'mse_basic': indicates the basic version (default value).
-'mse_pro': means professional version.
     */
    public readonly attrMseVersion: ros.IResolvable;

    /**
     * Attribute NetType: network type, Enum: privatenet,pubnet
     */
    public readonly attrNetType: ros.IResolvable;

    /**
     * Attribute PayInfo: pay info
     */
    public readonly attrPayInfo: ros.IResolvable;

    /**
     * Attribute PubNetworkFlow: pub network flow
     */
    public readonly attrPubNetworkFlow: ros.IResolvable;

    /**
     * Attribute VSwitchId: switcher Id
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: vpc id
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCluster = new RosCluster(this, id,  {
            mseVersion: props.mseVersion,
            privateSlbSpecification: props.privateSlbSpecification,
            clusterVersion: props.clusterVersion,
            connectionType: props.connectionType,
            aclEntryList: props.aclEntryList,
            clusterSpecification: props.clusterSpecification,
            vSwitchId: props.vSwitchId,
            pubSlbSpecification: props.pubSlbSpecification,
            clusterType: props.clusterType,
            diskType: props.diskType,
            clusterAliasName: props.clusterAliasName,
            instanceCount: props.instanceCount,
            vpcId: props.vpcId,
            requestPars: props.requestPars,
            pubNetworkFlow: props.pubNetworkFlow,
            acceptLanguage: props.acceptLanguage,
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
        this.attrConnectionType = rosCluster.attrConnectionType;
        this.attrCpu = rosCluster.attrCpu;
        this.attrDiskCapacity = rosCluster.attrDiskCapacity;
        this.attrDiskType = rosCluster.attrDiskType;
        this.attrHealthStatus = rosCluster.attrHealthStatus;
        this.attrInstanceCount = rosCluster.attrInstanceCount;
        this.attrInstanceId = rosCluster.attrInstanceId;
        this.attrInternetAddress = rosCluster.attrInternetAddress;
        this.attrInternetDomain = rosCluster.attrInternetDomain;
        this.attrInternetPort = rosCluster.attrInternetPort;
        this.attrIntranetAddress = rosCluster.attrIntranetAddress;
        this.attrIntranetDomain = rosCluster.attrIntranetDomain;
        this.attrIntranetPort = rosCluster.attrIntranetPort;
        this.attrMemoryCapacity = rosCluster.attrMemoryCapacity;
        this.attrMseVersion = rosCluster.attrMseVersion;
        this.attrNetType = rosCluster.attrNetType;
        this.attrPayInfo = rosCluster.attrPayInfo;
        this.attrPubNetworkFlow = rosCluster.attrPubNetworkFlow;
        this.attrVSwitchId = rosCluster.attrVSwitchId;
        this.attrVpcId = rosCluster.attrVpcId;
    }
}
