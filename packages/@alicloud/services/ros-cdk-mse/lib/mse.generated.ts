// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::MSE::Cluster`
 */
export interface RosClusterProps {

    /**
     * @Property clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
     * Optional parameters:
     * "MSE_ SC _1_2_60_c",
     * "MSE_ SC _2_4_60_c",
     * "MSE_ SC _4_8_60_c",
     * "MSE_ SC _8_16_60_c",
     * "MSE_ SC _16_32_60_c"
     */
    readonly clusterSpecification: string | ros.IResolvable;

    /**
     * @Property clusterType: cluster type
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    readonly clusterVersion: string | ros.IResolvable;

    /**
     * @Property instanceCount: instance count
     */
    readonly instanceCount: number | ros.IResolvable;

    /**
     * @Property netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    readonly netType: string | ros.IResolvable;

    /**
     * @Property acceptLanguage:
     */
    readonly acceptLanguage?: string | ros.IResolvable;

    /**
     * @Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property clusterAliasName: cluster alias name
     */
    readonly clusterAliasName?: string | ros.IResolvable;

    /**
     * @Property connectionType: network connect type
     */
    readonly connectionType?: string | ros.IResolvable;

    /**
     * @Property diskType: disk type
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * @Property mseVersion: Required, the value is as follows:
     * 
     * -'mse_dev': indicates the development version.
     * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    readonly mseVersion?: string | ros.IResolvable;

    /**
     * @Property privateSlbSpecification:
     */
    readonly privateSlbSpecification?: string | ros.IResolvable;

    /**
     * @Property pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    readonly pubNetworkFlow?: string | ros.IResolvable;

    /**
     * @Property pubSlbSpecification:
     */
    readonly pubSlbSpecification?: string | ros.IResolvable;

    /**
     * @Property requestPars:
     */
    readonly requestPars?: string | ros.IResolvable;

    /**
     * @Property vpcId: vpc id
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: switcher Id
     */
    readonly vSwitchId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('mseVersion', ros.validateString)(properties.mseVersion));
    errors.collect(ros.propertyValidator('privateSlbSpecification', ros.validateString)(properties.privateSlbSpecification));
    errors.collect(ros.propertyValidator('clusterVersion', ros.requiredValidator)(properties.clusterVersion));
    if(properties.clusterVersion && (typeof properties.clusterVersion) !== 'object') {
        errors.collect(ros.propertyValidator('clusterVersion', ros.validateAllowedPattern)({
          data: properties.clusterVersion,
          reg: /^[A-Za-z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('clusterVersion', ros.validateString)(properties.clusterVersion));
    if(properties.connectionType && (typeof properties.connectionType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionType', ros.validateAllowedValues)({
          data: properties.connectionType,
          allowedValues: ["eni","slb"],
        }));
    }
    if(properties.connectionType && (typeof properties.connectionType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionType', ros.validateAllowedPattern)({
          data: properties.connectionType,
          reg: /^[A-Za-z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('connectionType', ros.validateString)(properties.connectionType));
    errors.collect(ros.propertyValidator('aclEntryList', ros.listValidator(ros.validateString))(properties.aclEntryList));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.requiredValidator)(properties.clusterSpecification));
    if(properties.clusterSpecification && (typeof properties.clusterSpecification) !== 'object') {
        errors.collect(ros.propertyValidator('clusterSpecification', ros.validateAllowedPattern)({
          data: properties.clusterSpecification,
          reg: /^[A-Za-z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('clusterSpecification', ros.validateString)(properties.clusterSpecification));
    if(properties.vSwitchId && (typeof properties.vSwitchId) !== 'object') {
        errors.collect(ros.propertyValidator('vSwitchId', ros.validateAllowedPattern)({
          data: properties.vSwitchId,
          reg: /(.*)/
        }));
    }
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('pubSlbSpecification', ros.validateString)(properties.pubSlbSpecification));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedValues)({
          data: properties.clusterType,
          allowedValues: ["Nacos-Ans","ZooKeeper"],
        }));
    }
    if(properties.clusterType && (typeof properties.clusterType) !== 'object') {
        errors.collect(ros.propertyValidator('clusterType', ros.validateAllowedPattern)({
          data: properties.clusterType,
          reg: /^[A-Za-z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedPattern)({
          data: properties.diskType,
          reg: /^[A-Za-z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    if(properties.clusterAliasName && (typeof properties.clusterAliasName) !== 'object') {
        errors.collect(ros.propertyValidator('clusterAliasName', ros.validateAllowedPattern)({
          data: properties.clusterAliasName,
          reg: /(.*)/
        }));
    }
    errors.collect(ros.propertyValidator('clusterAliasName', ros.validateString)(properties.clusterAliasName));
    errors.collect(ros.propertyValidator('instanceCount', ros.requiredValidator)(properties.instanceCount));
    if(properties.instanceCount && (typeof properties.instanceCount) !== 'object') {
        errors.collect(ros.propertyValidator('instanceCount', ros.validateAllowedValues)({
          data: properties.instanceCount,
          allowedValues: [1,3,5,7,9],
        }));
    }
    errors.collect(ros.propertyValidator('instanceCount', ros.validateNumber)(properties.instanceCount));
    if(properties.vpcId && (typeof properties.vpcId) !== 'object') {
        errors.collect(ros.propertyValidator('vpcId', ros.validateAllowedPattern)({
          data: properties.vpcId,
          reg: /(.*)/
        }));
    }
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('requestPars', ros.validateString)(properties.requestPars));
    if(properties.pubNetworkFlow && (typeof properties.pubNetworkFlow) !== 'object') {
        errors.collect(ros.propertyValidator('pubNetworkFlow', ros.validateAllowedPattern)({
          data: properties.pubNetworkFlow,
          reg: /^[0-9]*$/
        }));
    }
    errors.collect(ros.propertyValidator('pubNetworkFlow', ros.validateString)(properties.pubNetworkFlow));
    errors.collect(ros.propertyValidator('acceptLanguage', ros.validateString)(properties.acceptLanguage));
    errors.collect(ros.propertyValidator('netType', ros.requiredValidator)(properties.netType));
    if(properties.netType && (typeof properties.netType) !== 'object') {
        errors.collect(ros.propertyValidator('netType', ros.validateAllowedValues)({
          data: properties.netType,
          allowedValues: ["pubnet","both","privatenet"],
        }));
    }
    if(properties.netType && (typeof properties.netType) !== 'object') {
        errors.collect(ros.propertyValidator('netType', ros.validateAllowedPattern)({
          data: properties.netType,
          reg: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
        }));
    }
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
      AcceptLanguage: ros.stringToRosTemplate(properties.acceptLanguage),
      AclEntryList: ros.listMapper(ros.stringToRosTemplate)(properties.aclEntryList),
      ClusterAliasName: ros.stringToRosTemplate(properties.clusterAliasName),
      ConnectionType: ros.stringToRosTemplate(properties.connectionType),
      DiskType: ros.stringToRosTemplate(properties.diskType),
      MseVersion: ros.stringToRosTemplate(properties.mseVersion),
      PrivateSlbSpecification: ros.stringToRosTemplate(properties.privateSlbSpecification),
      PubNetworkFlow: ros.stringToRosTemplate(properties.pubNetworkFlow),
      PubSlbSpecification: ros.stringToRosTemplate(properties.pubSlbSpecification),
      RequestPars: ros.stringToRosTemplate(properties.requestPars),
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
     * @Attribute AclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    public readonly attrAclEntryList: ros.IResolvable;

    /**
     * @Attribute AclId: acl id
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AppVersion: app version
     */
    public readonly attrAppVersion: ros.IResolvable;

    /**
     * @Attribute ClusterAliasName: cluster alias name
     */
    public readonly attrClusterAliasName: ros.IResolvable;

    /**
     * @Attribute ClusterId: cluster id
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterName: cluster name
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * @Attribute ClusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
Optional parameters:
"MSE_ SC _1_2_60_c",
"MSE_ SC _2_4_60_c",
"MSE_ SC _4_8_60_c",
"MSE_ SC _8_16_60_c",
"MSE_ SC _16_32_60_c"
     */
    public readonly attrClusterSpecification: ros.IResolvable;

    /**
     * @Attribute ClusterType: cluster type
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute ClusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    public readonly attrClusterVersion: ros.IResolvable;

    /**
     * @Attribute ConfigAuthEnabled: Whether the configuration supports it. Valid values: true: false: not supported
     */
    public readonly attrConfigAuthEnabled: ros.IResolvable;

    /**
     * @Attribute ConfigSecretEnabled: Whether the configuration password takes effect. The value is as follows: true: valid false: not valid
     */
    public readonly attrConfigSecretEnabled: ros.IResolvable;

    /**
     * @Attribute ConnectionType: network connect type
     */
    public readonly attrConnectionType: ros.IResolvable;

    /**
     * @Attribute Cpu: cpu core size
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute DiskCapacity: disk capacity, unit: G
     */
    public readonly attrDiskCapacity: ros.IResolvable;

    /**
     * @Attribute DiskType: disk type
     */
    public readonly attrDiskType: ros.IResolvable;

    /**
     * @Attribute HealthStatus: health status
     */
    public readonly attrHealthStatus: ros.IResolvable;

    /**
     * @Attribute InstanceCount: instance count
     */
    public readonly attrInstanceCount: ros.IResolvable;

    /**
     * @Attribute InstanceId: instance id
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InternetAddress: internet address
     */
    public readonly attrInternetAddress: ros.IResolvable;

    /**
     * @Attribute InternetDomain: internet domain
     */
    public readonly attrInternetDomain: ros.IResolvable;

    /**
     * @Attribute InternetPort: internet port
     */
    public readonly attrInternetPort: ros.IResolvable;

    /**
     * @Attribute IntranetAddress: intranet address
     */
    public readonly attrIntranetAddress: ros.IResolvable;

    /**
     * @Attribute IntranetDomain: intranet domain
     */
    public readonly attrIntranetDomain: ros.IResolvable;

    /**
     * @Attribute IntranetPort: intranet port
     */
    public readonly attrIntranetPort: ros.IResolvable;

    /**
     * @Attribute MCPEnabled: Whether MCP takes effect, the value is as follows: true: valid false: not valid
     */
    public readonly attrMcpEnabled: ros.IResolvable;

    /**
     * @Attribute MemoryCapacity: memory capacity
     */
    public readonly attrMemoryCapacity: ros.IResolvable;

    /**
     * @Attribute MseVersion: Required, the value is as follows:

-'mse_dev': indicates the development version.
-'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    public readonly attrMseVersion: ros.IResolvable;

    /**
     * @Attribute NetType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    public readonly attrNetType: ros.IResolvable;

    /**
     * @Attribute PayInfo: pay info
     */
    public readonly attrPayInfo: ros.IResolvable;

    /**
     * @Attribute PubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    public readonly attrPubNetworkFlow: ros.IResolvable;

    /**
     * @Attribute VSwitchId: switcher Id
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: vpc id
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterSpecification: Cluster specifications. Note the msversion requirements of the version parameter,
     * Optional parameters:
     * "MSE_ SC _1_2_60_c",
     * "MSE_ SC _2_4_60_c",
     * "MSE_ SC _4_8_60_c",
     * "MSE_ SC _8_16_60_c",
     * "MSE_ SC _16_32_60_c"
     */
    public clusterSpecification: string | ros.IResolvable;

    /**
     * @Property clusterType: cluster type
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0
     */
    public clusterVersion: string | ros.IResolvable;

    /**
     * @Property instanceCount: instance count
     */
    public instanceCount: number | ros.IResolvable;

    /**
     * @Property netType: Network type (whether private network is enabled or not). privatenet indicates that private network is enabled.
     */
    public netType: string | ros.IResolvable;

    /**
     * @Property acceptLanguage:
     */
    public acceptLanguage: string | ros.IResolvable | undefined;

    /**
     * @Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
     */
    public aclEntryList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property clusterAliasName: cluster alias name
     */
    public clusterAliasName: string | ros.IResolvable | undefined;

    /**
     * @Property connectionType: network connect type
     */
    public connectionType: string | ros.IResolvable | undefined;

    /**
     * @Property diskType: disk type
     */
    public diskType: string | ros.IResolvable | undefined;

    /**
     * @Property mseVersion: Required, the value is as follows:
     * 
     * -'mse_dev': indicates the development version.
     * -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
     */
    public mseVersion: string | ros.IResolvable | undefined;

    /**
     * @Property privateSlbSpecification:
     */
    public privateSlbSpecification: string | ros.IResolvable | undefined;

    /**
     * @Property pubNetworkFlow: Public network bandwidth. If the bandwidth is greater than 0, the public network is enabled.
     */
    public pubNetworkFlow: string | ros.IResolvable | undefined;

    /**
     * @Property pubSlbSpecification:
     */
    public pubSlbSpecification: string | ros.IResolvable | undefined;

    /**
     * @Property requestPars:
     */
    public requestPars: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: vpc id
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: switcher Id
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MSE::Cluster`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntryList = this.getAtt('AclEntryList');
        this.attrAclId = this.getAtt('AclId');
        this.attrAppVersion = this.getAtt('AppVersion');
        this.attrClusterAliasName = this.getAtt('ClusterAliasName');
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrClusterName = this.getAtt('ClusterName');
        this.attrClusterSpecification = this.getAtt('ClusterSpecification');
        this.attrClusterType = this.getAtt('ClusterType');
        this.attrClusterVersion = this.getAtt('ClusterVersion');
        this.attrConfigAuthEnabled = this.getAtt('ConfigAuthEnabled');
        this.attrConfigSecretEnabled = this.getAtt('ConfigSecretEnabled');
        this.attrConnectionType = this.getAtt('ConnectionType');
        this.attrCpu = this.getAtt('Cpu');
        this.attrDiskCapacity = this.getAtt('DiskCapacity');
        this.attrDiskType = this.getAtt('DiskType');
        this.attrHealthStatus = this.getAtt('HealthStatus');
        this.attrInstanceCount = this.getAtt('InstanceCount');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInternetAddress = this.getAtt('InternetAddress');
        this.attrInternetDomain = this.getAtt('InternetDomain');
        this.attrInternetPort = this.getAtt('InternetPort');
        this.attrIntranetAddress = this.getAtt('IntranetAddress');
        this.attrIntranetDomain = this.getAtt('IntranetDomain');
        this.attrIntranetPort = this.getAtt('IntranetPort');
        this.attrMcpEnabled = this.getAtt('MCPEnabled');
        this.attrMemoryCapacity = this.getAtt('MemoryCapacity');
        this.attrMseVersion = this.getAtt('MseVersion');
        this.attrNetType = this.getAtt('NetType');
        this.attrPayInfo = this.getAtt('PayInfo');
        this.attrPubNetworkFlow = this.getAtt('PubNetworkFlow');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clusterSpecification = props.clusterSpecification;
        this.clusterType = props.clusterType;
        this.clusterVersion = props.clusterVersion;
        this.instanceCount = props.instanceCount;
        this.netType = props.netType;
        this.acceptLanguage = props.acceptLanguage;
        this.aclEntryList = props.aclEntryList;
        this.clusterAliasName = props.clusterAliasName;
        this.connectionType = props.connectionType;
        this.diskType = props.diskType;
        this.mseVersion = props.mseVersion;
        this.privateSlbSpecification = props.privateSlbSpecification;
        this.pubNetworkFlow = props.pubNetworkFlow;
        this.pubSlbSpecification = props.pubSlbSpecification;
        this.requestPars = props.requestPars;
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
            acceptLanguage: this.acceptLanguage,
            aclEntryList: this.aclEntryList,
            clusterAliasName: this.clusterAliasName,
            connectionType: this.connectionType,
            diskType: this.diskType,
            mseVersion: this.mseVersion,
            privateSlbSpecification: this.privateSlbSpecification,
            pubNetworkFlow: this.pubNetworkFlow,
            pubSlbSpecification: this.pubSlbSpecification,
            requestPars: this.requestPars,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::MSE::Gateway`
 */
export interface RosGatewayProps {

    /**
     * @Property replica: Gateway Node Number
     */
    readonly replica: number | ros.IResolvable;

    /**
     * @Property spec: Gateway Node Specifications
     */
    readonly spec: string | ros.IResolvable;

    /**
     * @Property vpcId: VpcId
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitchId
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property backupVSwitchId: VSwitchId For Backup
     */
    readonly backupVSwitchId?: string | ros.IResolvable;

    /**
     * @Property enterpriseSecurityGroup:
     */
    readonly enterpriseSecurityGroup?: string | ros.IResolvable;

    /**
     * @Property internetSlbSpec:
     */
    readonly internetSlbSpec?: string | ros.IResolvable;

    /**
     * @Property name:
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property slbSpec:
     */
    readonly slbSpec?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backupVSwitchId', ros.validateString)(properties.backupVSwitchId));
    errors.collect(ros.propertyValidator('enterpriseSecurityGroup', ros.validateString)(properties.enterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('slbSpec', ros.validateString)(properties.slbSpec));
    errors.collect(ros.propertyValidator('spec', ros.requiredValidator)(properties.spec));
    if(properties.spec && (typeof properties.spec) !== 'object') {
        errors.collect(ros.propertyValidator('spec', ros.validateAllowedValues)({
          data: properties.spec,
          allowedValues: ["MSE_GTW_2_4_200_c","MSE_GTW_4_8_200_c","MSE_GTW_8_16_200_c","MSE_GTW_16_32_200_c"],
        }));
    }
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    errors.collect(ros.propertyValidator('internetSlbSpec', ros.validateString)(properties.internetSlbSpec));
    errors.collect(ros.propertyValidator('replica', ros.requiredValidator)(properties.replica));
    errors.collect(ros.propertyValidator('replica', ros.validateNumber)(properties.replica));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway` resource.
 */
// @ts-ignore TS6133
function rosGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      Replica: ros.numberToRosTemplate(properties.replica),
      Spec: ros.stringToRosTemplate(properties.spec),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      BackupVSwitchId: ros.stringToRosTemplate(properties.backupVSwitchId),
      EnterpriseSecurityGroup: ros.stringToRosTemplate(properties.enterpriseSecurityGroup),
      InternetSlbSpec: ros.stringToRosTemplate(properties.internetSlbSpec),
      Name: ros.stringToRosTemplate(properties.name),
      SlbSpec: ros.stringToRosTemplate(properties.slbSpec),
    };
}

/**
 * A ROS template type:  `ALIYUN::MSE::Gateway`
 */
export class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackupVSwitchId: VSwitchId For Backup
     */
    public readonly attrBackupVSwitchId: ros.IResolvable;

    /**
     * @Attribute GatewayUniqueId: Gateway unique identification
     */
    public readonly attrGatewayUniqueId: ros.IResolvable;

    /**
     * @Attribute PaymentType: The payment type of the resource
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Replica: Gateway Node Number
     */
    public readonly attrReplica: ros.IResolvable;

    /**
     * @Attribute Spec: Gateway Node Specifications
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute VSwitchId: VSwitchId
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: VpcId
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replica: Gateway Node Number
     */
    public replica: number | ros.IResolvable;

    /**
     * @Property spec: Gateway Node Specifications
     */
    public spec: string | ros.IResolvable;

    /**
     * @Property vpcId: VpcId
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitchId
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property backupVSwitchId: VSwitchId For Backup
     */
    public backupVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property enterpriseSecurityGroup:
     */
    public enterpriseSecurityGroup: string | ros.IResolvable | undefined;

    /**
     * @Property internetSlbSpec:
     */
    public internetSlbSpec: string | ros.IResolvable | undefined;

    /**
     * @Property name:
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property slbSpec:
     */
    public slbSpec: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MSE::Gateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackupVSwitchId = this.getAtt('BackupVSwitchId');
        this.attrGatewayUniqueId = this.getAtt('GatewayUniqueId');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrReplica = this.getAtt('Replica');
        this.attrSpec = this.getAtt('Spec');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replica = props.replica;
        this.spec = props.spec;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.backupVSwitchId = props.backupVSwitchId;
        this.enterpriseSecurityGroup = props.enterpriseSecurityGroup;
        this.internetSlbSpec = props.internetSlbSpec;
        this.name = props.name;
        this.slbSpec = props.slbSpec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replica: this.replica,
            spec: this.spec,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            backupVSwitchId: this.backupVSwitchId,
            enterpriseSecurityGroup: this.enterpriseSecurityGroup,
            internetSlbSpec: this.internetSlbSpec,
            name: this.name,
            slbSpec: this.slbSpec,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::MSE::NacosConfig`
 */
export interface RosNacosConfigProps {

    /**
     * @Property dataId: The data ID.
     */
    readonly dataId: string | ros.IResolvable;

    /**
     * @Property group: The ID of the group.
     */
    readonly group: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property appName: The name of the application.
     */
    readonly appName?: string | ros.IResolvable;

    /**
     * @Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
     */
    readonly betaIps?: string | ros.IResolvable;

    /**
     * @Property content: The content of the configuration.
     */
    readonly content?: string | ros.IResolvable;

    /**
     * @Property desc: The description of the configuration.
     */
    readonly desc?: string | ros.IResolvable;

    /**
     * @Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;

    /**
     * @Property tags: The tag of the configuration.
     */
    readonly tags?: string;

    /**
     * @Property type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNacosConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosNacosConfigProps`
 *
 * @returns the result of the validation.
 */
function RosNacosConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('group', ros.requiredValidator)(properties.group));
    errors.collect(ros.propertyValidator('group', ros.validateString)(properties.group));
    errors.collect(ros.propertyValidator('desc', ros.validateString)(properties.desc));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('dataId', ros.requiredValidator)(properties.dataId));
    errors.collect(ros.propertyValidator('dataId', ros.validateString)(properties.dataId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('betaIps', ros.validateString)(properties.betaIps));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    errors.collect(ros.propertyValidator('tags', ros.validateString)(properties.tags));
    errors.collect(ros.propertyValidator('appName', ros.validateString)(properties.appName));
    return errors.wrap('supplied properties not correct for "RosNacosConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::NacosConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosNacosConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::NacosConfig` resource.
 */
// @ts-ignore TS6133
function rosNacosConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNacosConfigPropsValidator(properties).assertSuccess();
    }
    return {
      DataId: ros.stringToRosTemplate(properties.dataId),
      Group: ros.stringToRosTemplate(properties.group),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      AppName: ros.stringToRosTemplate(properties.appName),
      BetaIps: ros.stringToRosTemplate(properties.betaIps),
      Content: ros.stringToRosTemplate(properties.content),
      Desc: ros.stringToRosTemplate(properties.desc),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      Tags: ros.stringToRosTemplate(properties.tags),
      Type: ros.stringToRosTemplate(properties.type),
    };
}

/**
 * A ROS template type:  `ALIYUN::MSE::NacosConfig`
 */
export class RosNacosConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::NacosConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataId: The data ID.
     */
    public dataId: string | ros.IResolvable;

    /**
     * @Property group: The ID of the group.
     */
    public group: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property appName: The name of the application.
     */
    public appName: string | ros.IResolvable | undefined;

    /**
     * @Property betaIps: The list of IP addresses where the beta release of the configuration is performed.
     */
    public betaIps: string | ros.IResolvable | undefined;

    /**
     * @Property content: The content of the configuration.
     */
    public content: string | ros.IResolvable | undefined;

    /**
     * @Property desc: The description of the configuration.
     */
    public desc: string | ros.IResolvable | undefined;

    /**
     * @Property namespaceId: The ID of the namespace.
     */
    public namespaceId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tag of the configuration.
     */
    public tags: string | undefined;

    /**
     * @Property type: The format of the configuration. Supported formats include TEXT, JSON, and XML.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MSE::NacosConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNacosConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNacosConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataId = props.dataId;
        this.group = props.group;
        this.instanceId = props.instanceId;
        this.appName = props.appName;
        this.betaIps = props.betaIps;
        this.content = props.content;
        this.desc = props.desc;
        this.namespaceId = props.namespaceId;
        this.tags = props.tags;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataId: this.dataId,
            group: this.group,
            instanceId: this.instanceId,
            appName: this.appName,
            betaIps: this.betaIps,
            content: this.content,
            desc: this.desc,
            namespaceId: this.namespaceId,
            tags: this.tags,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNacosConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::MSE::NacosService`
 */
export interface RosNacosServiceProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property serviceName: The name of the service.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * @Property ephemeral: Specifies whether the instance is a temporary node. Valid values:
     * true: yes
     * false: no
     */
    readonly ephemeral?: boolean | ros.IResolvable;

    /**
     * @Property groupName: The name of the group.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property namespaceId: The ID of the namespace.
     */
    readonly namespaceId?: string | ros.IResolvable;

    /**
     * @Property protectThreshold: The protection threshold.
     */
    readonly protectThreshold?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNacosServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosNacosServiceProps`
 *
 * @returns the result of the validation.
 */
function RosNacosServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('serviceName', ros.requiredValidator)(properties.serviceName));
    errors.collect(ros.propertyValidator('serviceName', ros.validateString)(properties.serviceName));
    errors.collect(ros.propertyValidator('protectThreshold', ros.validateString)(properties.protectThreshold));
    errors.collect(ros.propertyValidator('ephemeral', ros.validateBoolean)(properties.ephemeral));
    errors.collect(ros.propertyValidator('namespaceId', ros.validateString)(properties.namespaceId));
    return errors.wrap('supplied properties not correct for "RosNacosServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::NacosService` resource
 *
 * @param properties - the TypeScript properties of a `RosNacosServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::NacosService` resource.
 */
// @ts-ignore TS6133
function rosNacosServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNacosServicePropsValidator(properties).assertSuccess();
    }
    return {
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      ServiceName: ros.stringToRosTemplate(properties.serviceName),
      Ephemeral: ros.booleanToRosTemplate(properties.ephemeral),
      GroupName: ros.stringToRosTemplate(properties.groupName),
      NamespaceId: ros.stringToRosTemplate(properties.namespaceId),
      ProtectThreshold: ros.stringToRosTemplate(properties.protectThreshold),
    };
}

/**
 * A ROS template type:  `ALIYUN::MSE::NacosService`
 */
export class RosNacosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::NacosService";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property serviceName: The name of the service.
     */
    public serviceName: string | ros.IResolvable;

    /**
     * @Property ephemeral: Specifies whether the instance is a temporary node. Valid values:
     * true: yes
     * false: no
     */
    public ephemeral: boolean | ros.IResolvable | undefined;

    /**
     * @Property groupName: The name of the group.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property namespaceId: The ID of the namespace.
     */
    public namespaceId: string | ros.IResolvable | undefined;

    /**
     * @Property protectThreshold: The protection threshold.
     */
    public protectThreshold: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::MSE::NacosService`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNacosServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNacosService.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.serviceName = props.serviceName;
        this.ephemeral = props.ephemeral;
        this.groupName = props.groupName;
        this.namespaceId = props.namespaceId;
        this.protectThreshold = props.protectThreshold;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            serviceName: this.serviceName,
            ephemeral: this.ephemeral,
            groupName: this.groupName,
            namespaceId: this.namespaceId,
            protectThreshold: this.protectThreshold,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNacosServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
