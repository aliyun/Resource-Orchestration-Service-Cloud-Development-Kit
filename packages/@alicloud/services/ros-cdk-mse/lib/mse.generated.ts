// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
 */
export interface RosClusterProps {

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
 * Determine whether the given properties match those of a `RosClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the result of the validation.
 */
function RosClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('instanceCount', ros.requiredValidator)(properties.instanceCount));
    errors.collect(ros.propertyValidator('instanceCount', ros.validateNumber)(properties.instanceCount));
    errors.collect(ros.propertyValidator('privateSlbSpecification', ros.validateString)(properties.privateSlbSpecification));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('clusterVersion', ros.requiredValidator)(properties.clusterVersion));
    errors.collect(ros.propertyValidator('clusterVersion', ros.validateString)(properties.clusterVersion));
    errors.collect(ros.propertyValidator('pubNetworkFlow', ros.validateString)(properties.pubNetworkFlow));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.requiredValidator)(properties.clusterSpecification));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.validateString)(properties.clusterSpecification));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('pubSlbSpecification', ros.validateString)(properties.pubSlbSpecification));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('netType', ros.requiredValidator)(properties.netType));
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    return errors.wrap('supplied properties not correct for "RosClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Cluster` resource
 *
 * @param properties - the TypeScript properties of a `RosClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Cluster` resource.
 */
// @ts-ignore TS6133
function rosClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClusterPropsValidator(properties).assertSuccess();
    }
    return {
      ClusterSpecification: ros.stringToRosTemplate(properties.clusterSpecification),
      ClusterType: ros.stringToRosTemplate(properties.clusterType),
      ClusterVersion: ros.stringToRosTemplate(properties.clusterVersion),
      InstanceCount: ros.numberToRosTemplate(properties.instanceCount),
      NetType: ros.stringToRosTemplate(properties.netType),
      DiskType: ros.stringToRosTemplate(properties.diskType),
      PrivateSlbSpecification: ros.stringToRosTemplate(properties.privateSlbSpecification),
      PubNetworkFlow: ros.stringToRosTemplate(properties.pubNetworkFlow),
      PubSlbSpecification: ros.stringToRosTemplate(properties.pubSlbSpecification),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::MSE::Cluster`
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Cluster";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
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

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterSpecification: cluster specification, Enum: MSE_SC_1_2_200_c,MSE_SC_2_4_200_c,MSE_SC_4_8_200_c,MSE_SC_8_16_200_c
     */
    public clusterSpecification: string;

    /**
     * @Property clusterType: cluster type
     */
    public clusterType: string;

    /**
     * @Property clusterVersion: cluster version, Enum: ZooKeeper_3_4_14,ZooKeeper_3_5_5,NACOS_ANS_1_1_3,EUREKA_1_9_3
     */
    public clusterVersion: string;

    /**
     * @Property instanceCount: instance count
     */
    public instanceCount: number;

    /**
     * @Property netType: network type, Enum: privatenet,pubnet
     */
    public netType: string;

    /**
     * @Property diskType: disk type
     */
    public diskType: string | undefined;

    /**
     * @Property privateSlbSpecification:
     */
    public privateSlbSpecification: string | undefined;

    /**
     * @Property pubNetworkFlow: pub network flow
     */
    public pubNetworkFlow: string | undefined;

    /**
     * @Property pubSlbSpecification:
     */
    public pubSlbSpecification: string | undefined;

    /**
     * @Property vpcId: vpc id
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: switcher Id
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntryList = ros.Token.asString(this.getAtt('AclEntryList'));
        this.attrAclId = ros.Token.asString(this.getAtt('AclId'));
        this.attrAppVersion = ros.Token.asString(this.getAtt('AppVersion'));
        this.attrClusterAliasName = ros.Token.asString(this.getAtt('ClusterAliasName'));
        this.attrClusterId = ros.Token.asString(this.getAtt('ClusterId'));
        this.attrClusterName = ros.Token.asString(this.getAtt('ClusterName'));
        this.attrClusterSpecification = ros.Token.asString(this.getAtt('ClusterSpecification'));
        this.attrClusterType = ros.Token.asString(this.getAtt('ClusterType'));
        this.attrClusterVersion = ros.Token.asString(this.getAtt('ClusterVersion'));
        this.attrCpu = ros.Token.asString(this.getAtt('Cpu'));
        this.attrDiskCapacity = ros.Token.asString(this.getAtt('DiskCapacity'));
        this.attrDiskType = ros.Token.asString(this.getAtt('DiskType'));
        this.attrHealthStatus = ros.Token.asString(this.getAtt('HealthStatus'));
        this.attrInitStatus = ros.Token.asString(this.getAtt('InitStatus'));
        this.attrInstanceCount = ros.Token.asString(this.getAtt('InstanceCount'));
        this.attrInstanceId = ros.Token.asString(this.getAtt('InstanceId'));
        this.attrInternetAddress = ros.Token.asString(this.getAtt('InternetAddress'));
        this.attrInternetDomain = ros.Token.asString(this.getAtt('InternetDomain'));
        this.attrInternetPort = ros.Token.asString(this.getAtt('InternetPort'));
        this.attrIntranetAddress = ros.Token.asString(this.getAtt('IntranetAddress'));
        this.attrIntranetDomain = ros.Token.asString(this.getAtt('IntranetDomain'));
        this.attrIntranetPort = ros.Token.asString(this.getAtt('IntranetPort'));
        this.attrMemoryCapacity = ros.Token.asString(this.getAtt('MemoryCapacity'));
        this.attrNetType = ros.Token.asString(this.getAtt('NetType'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPayInfo = ros.Token.asString(this.getAtt('PayInfo'));
        this.attrPubNetworkFlow = ros.Token.asString(this.getAtt('PubNetworkFlow'));
        this.attrRegionId = ros.Token.asString(this.getAtt('RegionId'));
        this.attrVSwitchId = ros.Token.asString(this.getAtt('VSwitchId'));
        this.attrVpcId = ros.Token.asString(this.getAtt('VpcId'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterSpecification = props.clusterSpecification;
        this.clusterType = props.clusterType;
        this.clusterVersion = props.clusterVersion;
        this.instanceCount = props.instanceCount;
        this.netType = props.netType;
        this.diskType = props.diskType;
        this.privateSlbSpecification = props.privateSlbSpecification;
        this.pubNetworkFlow = props.pubNetworkFlow;
        this.pubSlbSpecification = props.pubSlbSpecification;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clusterSpecification: this.clusterSpecification,
            clusterType: this.clusterType,
            clusterVersion: this.clusterVersion,
            instanceCount: this.instanceCount,
            netType: this.netType,
            diskType: this.diskType,
            privateSlbSpecification: this.privateSlbSpecification,
            pubNetworkFlow: this.pubNetworkFlow,
            pubSlbSpecification: this.pubSlbSpecification,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
