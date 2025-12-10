// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export interface RosClusterProps {

    /**
     * @Property clusterSpecification: Engine specification.
     * 
     * [Professional Edition]
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_4_8_60_c`: 4 cores 8GB
     * - `MSE_SC_8_16_60_c`: 8 cores 16GB
     * - `MSE_SC_16_32_60_c`: 16 cores 32GB
     * 
     * [Development Edition]
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     * 
     * [Serverless Edition]
     * - Ignore this parameter or fill with `MSE_SC_SERVERLESS`.
     */
    readonly clusterSpecification: string | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
     */
    readonly clusterType: string | ros.IResolvable;

    /**
     * @Property clusterVersion: Cluster version.
     * 
     * [Professional Edition]
     * - `NACOS_2_0_0`: Nacos 2.x.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     * 
     * [Development Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     * 
     * [Serverless Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     */
    readonly clusterVersion: string | ros.IResolvable;

    /**
     * @Property instanceCount: Number of instance nodes. Range: 1~15.
     * 
     * [Professional Edition]
     * - Must be >=3 and odd number.
     * 
     * [Development Edition]
     * - Only 1 allowed.
     * 
     * [Serverless Edition]
     * - Ignore this parameter.
     */
    readonly instanceCount: number | ros.IResolvable;

    /**
     * @Property netType: Network type. Valid values:
     * - `privatenet`: Private network.
     * - `pubnet`: Public network.
     */
    readonly netType: string | ros.IResolvable;

    /**
     * @Property aclEntryList: List of ACL entries.
     */
    readonly aclEntryList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).
     * Ignored for Serverless Edition.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property clusterAliasName: cluster alias name.
     */
    readonly clusterAliasName?: string | ros.IResolvable;

    /**
     * @Property connectionType: Network access type, `slb` or `single_eni`; some regions only support `single_eni` for Development Edition.
     */
    readonly connectionType?: string | ros.IResolvable;

    /**
     * @Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).
     */
    readonly eipEnabled?: boolean | ros.IResolvable;

    /**
     * @Property mseVersion: Must be filled unless special circumstances. Valid values:
     * - `mse_pro`: Professional Edition.
     * - `mse_dev`: Development Edition.
     * - `mse_serverless`: Serverless Edition.
     */
    readonly mseVersion?: string | ros.IResolvable;

    /**
     * @Property pubNetworkFlow: Public network flow. Valid when ConnectionType is `slb`. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
     */
    readonly pubNetworkFlow?: number | ros.IResolvable;

    /**
     * @Property requestPars: Extended request parameters in JSON format.
     */
    readonly requestPars?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.
     */
    readonly securityGroupType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCluster.TagsProperty[];

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Switch ID.
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
    errors.collect(ros.propertyValidator('clusterVersion', ros.requiredValidator)(properties.clusterVersion));
    errors.collect(ros.propertyValidator('clusterVersion', ros.validateString)(properties.clusterVersion));
    errors.collect(ros.propertyValidator('connectionType', ros.validateString)(properties.connectionType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('aclEntryList', ros.listValidator(ros.validateString))(properties.aclEntryList));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.requiredValidator)(properties.clusterSpecification));
    errors.collect(ros.propertyValidator('clusterSpecification', ros.validateString)(properties.clusterSpecification));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupType', ros.validateString)(properties.securityGroupType));
    errors.collect(ros.propertyValidator('clusterType', ros.requiredValidator)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterType', ros.validateString)(properties.clusterType));
    errors.collect(ros.propertyValidator('clusterAliasName', ros.validateString)(properties.clusterAliasName));
    errors.collect(ros.propertyValidator('instanceCount', ros.requiredValidator)(properties.instanceCount));
    if(properties.instanceCount && (typeof properties.instanceCount) !== 'object') {
        errors.collect(ros.propertyValidator('instanceCount', ros.validateRange)({
            data: properties.instanceCount,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('instanceCount', ros.validateNumber)(properties.instanceCount));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('requestPars', ros.validateString)(properties.requestPars));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.pubNetworkFlow && (typeof properties.pubNetworkFlow) !== 'object') {
        errors.collect(ros.propertyValidator('pubNetworkFlow', ros.validateRange)({
            data: properties.pubNetworkFlow,
            min: 0,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('pubNetworkFlow', ros.validateNumber)(properties.pubNetworkFlow));
    errors.collect(ros.propertyValidator('netType', ros.requiredValidator)(properties.netType));
    if(properties.netType && (typeof properties.netType) !== 'object') {
        errors.collect(ros.propertyValidator('netType', ros.validateAllowedValues)({
          data: properties.netType,
          allowedValues: ["privatenet","pubnet"],
        }));
    }
    errors.collect(ros.propertyValidator('netType', ros.validateString)(properties.netType));
    errors.collect(ros.propertyValidator('eipEnabled', ros.validateBoolean)(properties.eipEnabled));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCluster_TagsPropertyValidator))(properties.tags));
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
      'ClusterSpecification': ros.stringToRosTemplate(properties.clusterSpecification),
      'ClusterType': ros.stringToRosTemplate(properties.clusterType),
      'ClusterVersion': ros.stringToRosTemplate(properties.clusterVersion),
      'InstanceCount': ros.numberToRosTemplate(properties.instanceCount),
      'NetType': ros.stringToRosTemplate(properties.netType),
      'AclEntryList': ros.listMapper(ros.stringToRosTemplate)(properties.aclEntryList),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'ClusterAliasName': ros.stringToRosTemplate(properties.clusterAliasName),
      'ConnectionType': ros.stringToRosTemplate(properties.connectionType),
      'EipEnabled': ros.booleanToRosTemplate(properties.eipEnabled),
      'MseVersion': ros.stringToRosTemplate(properties.mseVersion),
      'PubNetworkFlow': ros.numberToRosTemplate(properties.pubNetworkFlow),
      'RequestPars': ros.stringToRosTemplate(properties.requestPars),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupType': ros.stringToRosTemplate(properties.securityGroupType),
      'Tags': ros.listMapper(rosClusterTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Cluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Cluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
 */
export class RosCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Cluster";

    /**
     * @Attribute AclEntryList: The list of ACL entries.
     */
    public readonly attrAclEntryList: ros.IResolvable;

    /**
     * @Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AppVersion: The version of the application.
     */
    public readonly attrAppVersion: ros.IResolvable;

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

    /**
     * @Attribute ClusterAliasName: The alias name of the cluster.
     */
    public readonly attrClusterAliasName: ros.IResolvable;

    /**
     * @Attribute ClusterId: The ID of the cluster.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute ClusterName: The name of the cluster.
     */
    public readonly attrClusterName: ros.IResolvable;

    /**
     * @Attribute ClusterSpecification: The specification of the cluster.
     */
    public readonly attrClusterSpecification: ros.IResolvable;

    /**
     * @Attribute ClusterType: The type of the cluster.
     */
    public readonly attrClusterType: ros.IResolvable;

    /**
     * @Attribute ClusterVersion: The version of the cluster.
     */
    public readonly attrClusterVersion: ros.IResolvable;

    /**
     * @Attribute ConfigAuthEnabled: Whether to enable the configuration authentication.
     */
    public readonly attrConfigAuthEnabled: ros.IResolvable;

    /**
     * @Attribute ConfigSecretEnabled: Whether to enable the configuration secret.
     */
    public readonly attrConfigSecretEnabled: ros.IResolvable;

    /**
     * @Attribute ConnectionType: The connection type.
     */
    public readonly attrConnectionType: ros.IResolvable;

    /**
     * @Attribute Cpu: The number of CPU cores.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute DiskCapacity: The disk capacity.
     */
    public readonly attrDiskCapacity: ros.IResolvable;

    /**
     * @Attribute DiskType: The disk type.
     */
    public readonly attrDiskType: ros.IResolvable;

    /**
     * @Attribute HealthStatus: The health status of the cluster.
     */
    public readonly attrHealthStatus: ros.IResolvable;

    /**
     * @Attribute InstanceCount: The number of instances.
     */
    public readonly attrInstanceCount: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the cluster instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InternetAddress: The public network address of the cluster.
     */
    public readonly attrInternetAddress: ros.IResolvable;

    /**
     * @Attribute InternetDomain: The public network domain of the cluster.
     */
    public readonly attrInternetDomain: ros.IResolvable;

    /**
     * @Attribute InternetPort: The public network port of the cluster.
     */
    public readonly attrInternetPort: ros.IResolvable;

    /**
     * @Attribute IntranetAddress: The intranet address of the cluster.
     */
    public readonly attrIntranetAddress: ros.IResolvable;

    /**
     * @Attribute IntranetDomain: The intranet domain of the cluster.
     */
    public readonly attrIntranetDomain: ros.IResolvable;

    /**
     * @Attribute IntranetPort: The intranet port of the cluster.
     */
    public readonly attrIntranetPort: ros.IResolvable;

    /**
     * @Attribute MCPEnabled: Whether to enable the MCP.
     */
    public readonly attrMcpEnabled: ros.IResolvable;

    /**
     * @Attribute MemoryCapacity: The memory capacity.
     */
    public readonly attrMemoryCapacity: ros.IResolvable;

    /**
     * @Attribute MseVersion: The MSE version.
     */
    public readonly attrMseVersion: ros.IResolvable;

    /**
     * @Attribute NetType: The network type.
     */
    public readonly attrNetType: ros.IResolvable;

    /**
     * @Attribute PayInfo: The payment information.
     */
    public readonly attrPayInfo: ros.IResolvable;

    /**
     * @Attribute PubNetworkFlow: The public network flow.
     */
    public readonly attrPubNetworkFlow: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clusterSpecification: Engine specification.
     * 
     * [Professional Edition]
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_4_8_60_c`: 4 cores 8GB
     * - `MSE_SC_8_16_60_c`: 8 cores 16GB
     * - `MSE_SC_16_32_60_c`: 16 cores 32GB
     * 
     * [Development Edition]
     * - `MSE_SC_1_2_60_c`: 1 core 2GB
     * - `MSE_SC_2_4_60_c`: 2 cores 4GB
     * 
     * [Serverless Edition]
     * - Ignore this parameter or fill with `MSE_SC_SERVERLESS`.
     */
    public clusterSpecification: string | ros.IResolvable;

    /**
     * @Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
     */
    public clusterType: string | ros.IResolvable;

    /**
     * @Property clusterVersion: Cluster version.
     * 
     * [Professional Edition]
     * - `NACOS_2_0_0`: Nacos 2.x.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     * 
     * [Development Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     * 
     * [Serverless Edition]
     * - `NACOS_2_0_0`: Nacos 2.x version.
     * - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
     */
    public clusterVersion: string | ros.IResolvable;

    /**
     * @Property instanceCount: Number of instance nodes. Range: 1~15.
     * 
     * [Professional Edition]
     * - Must be >=3 and odd number.
     * 
     * [Development Edition]
     * - Only 1 allowed.
     * 
     * [Serverless Edition]
     * - Ignore this parameter.
     */
    public instanceCount: number | ros.IResolvable;

    /**
     * @Property netType: Network type. Valid values:
     * - `privatenet`: Private network.
     * - `pubnet`: Public network.
     */
    public netType: string | ros.IResolvable;

    /**
     * @Property aclEntryList: List of ACL entries.
     */
    public aclEntryList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).
     * Ignored for Serverless Edition.
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property clusterAliasName: cluster alias name.
     */
    public clusterAliasName: string | ros.IResolvable | undefined;

    /**
     * @Property connectionType: Network access type, `slb` or `single_eni`; some regions only support `single_eni` for Development Edition.
     */
    public connectionType: string | ros.IResolvable | undefined;

    /**
     * @Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).
     */
    public eipEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property mseVersion: Must be filled unless special circumstances. Valid values:
     * - `mse_pro`: Professional Edition.
     * - `mse_dev`: Development Edition.
     * - `mse_serverless`: Serverless Edition.
     */
    public mseVersion: string | ros.IResolvable | undefined;

    /**
     * @Property pubNetworkFlow: Public network flow. Valid when ConnectionType is `slb`. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
     */
    public pubNetworkFlow: number | ros.IResolvable | undefined;

    /**
     * @Property requestPars: Extended request parameters in JSON format.
     */
    public requestPars: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.
     */
    public securityGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to cluster. Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCluster.TagsProperty[] | undefined;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: Switch ID.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntryList = this.getAtt('AclEntryList');
        this.attrAclId = this.getAtt('AclId');
        this.attrAppVersion = this.getAtt('AppVersion');
        this.attrArn = this.getAtt('Arn');
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
        this.aclEntryList = props.aclEntryList;
        this.chargeType = props.chargeType;
        this.clusterAliasName = props.clusterAliasName;
        this.connectionType = props.connectionType;
        this.eipEnabled = props.eipEnabled;
        this.mseVersion = props.mseVersion;
        this.pubNetworkFlow = props.pubNetworkFlow;
        this.requestPars = props.requestPars;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupType = props.securityGroupType;
        this.tags = props.tags;
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
            aclEntryList: this.aclEntryList,
            chargeType: this.chargeType,
            clusterAliasName: this.clusterAliasName,
            connectionType: this.connectionType,
            eipEnabled: this.eipEnabled,
            mseVersion: this.mseVersion,
            pubNetworkFlow: this.pubNetworkFlow,
            requestPars: this.requestPars,
            resourceGroupId: this.resourceGroupId,
            securityGroupType: this.securityGroupType,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCluster {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosCluster_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Cluster.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Cluster.Tags` resource.
 */
// @ts-ignore TS6133
function rosClusterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCluster_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosEngineNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
export interface RosEngineNamespaceProps {

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property name: The display name of the namespace.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property desc: The description of the namespace.
     */
    readonly desc?: string | ros.IResolvable;

    /**
     * @Property identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
     */
    readonly identity?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEngineNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosEngineNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosEngineNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('desc', ros.validateString)(properties.desc));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('identity', ros.validateString)(properties.identity));
    return errors.wrap('supplied properties not correct for "RosEngineNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::EngineNamespace` resource
 *
 * @param properties - the TypeScript properties of a `RosEngineNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::EngineNamespace` resource.
 */
// @ts-ignore TS6133
function rosEngineNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEngineNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Name': ros.stringToRosTemplate(properties.name),
      'Desc': ros.stringToRosTemplate(properties.desc),
      'Id': ros.stringToRosTemplate(properties.identity),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::EngineNamespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EngineNamespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-enginenamespace
 */
export class RosEngineNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::EngineNamespace";

    /**
     * @Attribute NamespaceId: The ID of the namespace.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property name: The display name of the namespace.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property desc: The description of the namespace.
     */
    public desc: string | ros.IResolvable | undefined;

    /**
     * @Property identity: The custom ID of the namespace. If you do not specify this parameter, the automatically generated Universally Unique Identifier (UUID) is returned.
     */
    public identity: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEngineNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEngineNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.desc = props.desc;
        this.identity = props.identity;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            name: this.name,
            desc: this.desc,
            identity: this.identity,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEngineNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
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
      'Replica': ros.numberToRosTemplate(properties.replica),
      'Spec': ros.stringToRosTemplate(properties.spec),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'BackupVSwitchId': ros.stringToRosTemplate(properties.backupVSwitchId),
      'EnterpriseSecurityGroup': ros.stringToRosTemplate(properties.enterpriseSecurityGroup),
      'InternetSlbSpec': ros.stringToRosTemplate(properties.internetSlbSpec),
      'Name': ros.stringToRosTemplate(properties.name),
      'SlbSpec': ros.stringToRosTemplate(properties.slbSpec),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Gateway`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway
 */
export class RosGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway";

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
 * Properties for defining a `RosGateway2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
export interface RosGateway2Props {

    /**
     * @Property vpcId: The ID of the vpc.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property acceptLanguage: The language of the response. Valid values:
     * zh: Chinese
     * en: English
     */
    readonly acceptLanguage?: string | ros.IResolvable;

    /**
     * @Property chargeType: The billing method you specify when you purchase an normal instance.
     * Valid values:
     * PREPAY: subscription
     * POSTPAY: pay-as-you-go
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    readonly clbNetworkType?: string | ros.IResolvable;

    /**
     * @Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
     */
    readonly enableHardwareAcceleration?: boolean | ros.IResolvable;

    /**
     * @Property enableSls: Specifies whether to activate Log Service.
     */
    readonly enableSls?: boolean | ros.IResolvable;

    /**
     * @Property enableXtrace: Whether to activate Tracing Analysis.
     */
    readonly enableXtrace?: boolean | ros.IResolvable;

    /**
     * @Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
     */
    readonly enterpriseSecurityGroup?: boolean | ros.IResolvable;

    /**
     * @Property internetSlb: Public network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.smal)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    readonly internetSlb?: string | ros.IResolvable;

    /**
     * @Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
     * pubnet: public network
     * privatenet: privatenet
     * privatepubnet: public + private network
     */
    readonly managedEntryNetworkType?: string | ros.IResolvable;

    /**
     * @Property mserVersion: The MSE gateway instance type. Valid values:
     * mse_pro: normal instance
     * mse_premium: professional normal instancemse_serverless: serverless instance
     */
    readonly mserVersion?: string | ros.IResolvable;

    /**
     * @Property name: The name of the created gateway.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    readonly nlbNetworkType?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
     */
    readonly replica?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property slbSpec: Private network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.small)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    readonly slbSpec?: string | ros.IResolvable;

    /**
     * @Property spec: The node specifications you specify when you purchase an normal instance. Valid values:
     * MSE_GTW_16_32_200_c(16C32G)
     * MSE_GTW_2_4_200_c(2C4G)
     * MSE_GTW_4_8_200_c(4C8G)
     * MSE_GTW_8_16_200_c(8C16G)
     */
    readonly spec?: string | ros.IResolvable;

    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosGateway2.TagsProperty[];

    /**
     * @Property vSwitchId: The primary VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId2: The secondary VSwitch ID.
     */
    readonly vSwitchId2?: string | ros.IResolvable;

    /**
     * @Property xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
     */
    readonly xtraceRatio?: number | ros.IResolvable;

    /**
     * @Property zoneInfo: The info details of the available zone.
     */
    readonly zoneInfo?: Array<RosGateway2.ZoneInfoProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGateway2Props`
 *
 * @param properties - the TypeScript properties of a `RosGateway2Props`
 *
 * @returns the result of the validation.
 */
function RosGateway2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vSwitchId2', ros.validateString)(properties.vSwitchId2));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.managedEntryNetworkType && (typeof properties.managedEntryNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('managedEntryNetworkType', ros.validateAllowedValues)({
          data: properties.managedEntryNetworkType,
          allowedValues: ["pubnet","privatenet","privatepubnet"],
        }));
    }
    errors.collect(ros.propertyValidator('managedEntryNetworkType', ros.validateString)(properties.managedEntryNetworkType));
    if(properties.replica && (typeof properties.replica) !== 'object') {
        errors.collect(ros.propertyValidator('replica', ros.validateRange)({
            data: properties.replica,
            min: 1,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('replica', ros.validateNumber)(properties.replica));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('enterpriseSecurityGroup', ros.validateBoolean)(properties.enterpriseSecurityGroup));
    errors.collect(ros.propertyValidator('enableXtrace', ros.validateBoolean)(properties.enableXtrace));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PREPAY","POSTPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('internetSlb', ros.validateString)(properties.internetSlb));
    errors.collect(ros.propertyValidator('slbSpec', ros.validateString)(properties.slbSpec));
    if(properties.acceptLanguage && (typeof properties.acceptLanguage) !== 'object') {
        errors.collect(ros.propertyValidator('acceptLanguage', ros.validateAllowedValues)({
          data: properties.acceptLanguage,
          allowedValues: ["zh","en"],
        }));
    }
    errors.collect(ros.propertyValidator('acceptLanguage', ros.validateString)(properties.acceptLanguage));
    if(properties.spec && (typeof properties.spec) !== 'object') {
        errors.collect(ros.propertyValidator('spec', ros.validateAllowedValues)({
          data: properties.spec,
          allowedValues: ["MSE_GTW_16_32_200_c","MSE_GTW_2_4_200_c","MSE_GTW_4_8_200_c","MSE_GTW_8_16_200_c"],
        }));
    }
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    errors.collect(ros.propertyValidator('enableSls', ros.validateBoolean)(properties.enableSls));
    if(properties.xtraceRatio && (typeof properties.xtraceRatio) !== 'object') {
        errors.collect(ros.propertyValidator('xtraceRatio', ros.validateRange)({
            data: properties.xtraceRatio,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('xtraceRatio', ros.validateNumber)(properties.xtraceRatio));
    if(properties.nlbNetworkType && (typeof properties.nlbNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('nlbNetworkType', ros.validateAllowedValues)({
          data: properties.nlbNetworkType,
          allowedValues: ["pubnet","privatenet","privatepubnet"],
        }));
    }
    errors.collect(ros.propertyValidator('nlbNetworkType', ros.validateString)(properties.nlbNetworkType));
    if(properties.clbNetworkType && (typeof properties.clbNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('clbNetworkType', ros.validateAllowedValues)({
          data: properties.clbNetworkType,
          allowedValues: ["pubnet","privatenet","privatepubnet"],
        }));
    }
    errors.collect(ros.propertyValidator('clbNetworkType', ros.validateString)(properties.clbNetworkType));
    if(properties.mserVersion && (typeof properties.mserVersion) !== 'object') {
        errors.collect(ros.propertyValidator('mserVersion', ros.validateAllowedValues)({
          data: properties.mserVersion,
          allowedValues: ["mse_pro","mse_premium","mse_serverless"],
        }));
    }
    errors.collect(ros.propertyValidator('mserVersion', ros.validateString)(properties.mserVersion));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosGateway2_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('zoneInfo', ros.listValidator(RosGateway2_ZoneInfoPropertyValidator))(properties.zoneInfo));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    errors.collect(ros.propertyValidator('enableHardwareAcceleration', ros.validateBoolean)(properties.enableHardwareAcceleration));
    return errors.wrap('supplied properties not correct for "RosGateway2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway2` resource
 *
 * @param properties - the TypeScript properties of a `RosGateway2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway2` resource.
 */
// @ts-ignore TS6133
function rosGateway2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGateway2PropsValidator(properties).assertSuccess();
    }
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'AcceptLanguage': ros.stringToRosTemplate(properties.acceptLanguage),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'ClbNetworkType': ros.stringToRosTemplate(properties.clbNetworkType),
      'EnableHardwareAcceleration': ros.booleanToRosTemplate(properties.enableHardwareAcceleration),
      'EnableSls': ros.booleanToRosTemplate(properties.enableSls),
      'EnableXtrace': ros.booleanToRosTemplate(properties.enableXtrace),
      'EnterpriseSecurityGroup': ros.booleanToRosTemplate(properties.enterpriseSecurityGroup),
      'InternetSlb': ros.stringToRosTemplate(properties.internetSlb),
      'ManagedEntryNetworkType': ros.stringToRosTemplate(properties.managedEntryNetworkType),
      'MserVersion': ros.stringToRosTemplate(properties.mserVersion),
      'Name': ros.stringToRosTemplate(properties.name),
      'NlbNetworkType': ros.stringToRosTemplate(properties.nlbNetworkType),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'Replica': ros.numberToRosTemplate(properties.replica),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SlbSpec': ros.stringToRosTemplate(properties.slbSpec),
      'Spec': ros.stringToRosTemplate(properties.spec),
      'Tags': ros.listMapper(rosGateway2TagsPropertyToRosTemplate)(properties.tags),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'VSwitchId2': ros.stringToRosTemplate(properties.vSwitchId2),
      'XtraceRatio': ros.numberToRosTemplate(properties.xtraceRatio),
      'ZoneInfo': ros.listMapper(rosGateway2ZoneInfoPropertyToRosTemplate)(properties.zoneInfo),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::Gateway2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Gateway2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gateway2
 */
export class RosGateway2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::Gateway2";

    /**
     * @Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    public readonly attrGatewayUniqueId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The ID of the vpc.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property acceptLanguage: The language of the response. Valid values:
     * zh: Chinese
     * en: English
     */
    public acceptLanguage: string | ros.IResolvable | undefined;

    /**
     * @Property chargeType: The billing method you specify when you purchase an normal instance.
     * Valid values:
     * PREPAY: subscription
     * POSTPAY: pay-as-you-go
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property clbNetworkType: The network type of the purchased Classic Load Balancer (CLB) instance that is billed based on LCUs.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    public clbNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property enableHardwareAcceleration: Specifies whether to activate Tracing Analysis.
     */
    public enableHardwareAcceleration: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableSls: Specifies whether to activate Log Service.
     */
    public enableSls: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableXtrace: Whether to activate Tracing Analysis.
     */
    public enableXtrace: boolean | ros.IResolvable | undefined;

    /**
     * @Property enterpriseSecurityGroup: Specifies whether to enable hardware acceleration.
     */
    public enterpriseSecurityGroup: boolean | ros.IResolvable | undefined;

    /**
     * @Property internetSlb: Public network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.smal)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    public internetSlb: string | ros.IResolvable | undefined;

    /**
     * @Property managedEntryNetworkType: Gateway entrance type (applicable to the mse_premium instance)
     * pubnet: public network
     * privatenet: privatenet
     * privatepubnet: public + private network
     */
    public managedEntryNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property mserVersion: The MSE gateway instance type. Valid values:
     * mse_pro: normal instance
     * mse_premium: professional normal instancemse_serverless: serverless instance
     */
    public mserVersion: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the created gateway.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property nlbNetworkType: The network type of the Network Load Balancer (NLB) instance you specify when you purchase a serverless instance.
     * pubnet: Internet
     * privatenet: private network
     * privatepubnet: Internet and private network
     */
    public nlbNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3. This parameter is Only valid when updating from postpaid instance to prepaid instance.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: Charge period for created instances. This parameter is only valid when updating from postpaid instance to prepaid instance.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property replica: The number of nodes you specify when you purchase an normal instance. For high availability, the value for this param is recommended to be greater than 2.
     */
    public replica: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slbSpec: Private network SLB specifications (for normal instances).
     * Simple type (slb.s1.small)
     * Standard type 1 (slb.s2.small)
     * Standard type I(slb.s2.medium)
     * Advanced Type 1 (slb.s3.small)
     * Advanced I(slb.s3.medium)
     * Super strong type I (slb.s3.large)
     * Description Traditional example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU, and CLB specifications. Serverless example: When creating, you can only choose one purchasing agent in NLB, CLB billed by LCU
     */
    public slbSpec: string | ros.IResolvable | undefined;

    /**
     * @Property spec: The node specifications you specify when you purchase an normal instance. Valid values:
     * MSE_GTW_16_32_200_c(16C32G)
     * MSE_GTW_2_4_200_c(2C4G)
     * MSE_GTW_4_8_200_c(4C8G)
     * MSE_GTW_8_16_200_c(8C16G)
     */
    public spec: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    public tags: RosGateway2.TagsProperty[] | undefined;

    /**
     * @Property vSwitchId: The primary VSwitch ID.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId2: The secondary VSwitch ID.
     */
    public vSwitchId2: string | ros.IResolvable | undefined;

    /**
     * @Property xtraceRatio: The sampling rate of Tracing Analysis. Valid values: [1,100]
     */
    public xtraceRatio: number | ros.IResolvable | undefined;

    /**
     * @Property zoneInfo: The info details of the available zone.
     */
    public zoneInfo: Array<RosGateway2.ZoneInfoProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGateway2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGateway2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGatewayUniqueId = this.getAtt('GatewayUniqueId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.acceptLanguage = props.acceptLanguage;
        this.chargeType = props.chargeType;
        this.clbNetworkType = props.clbNetworkType;
        this.enableHardwareAcceleration = props.enableHardwareAcceleration;
        this.enableSls = props.enableSls;
        this.enableXtrace = props.enableXtrace;
        this.enterpriseSecurityGroup = props.enterpriseSecurityGroup;
        this.internetSlb = props.internetSlb;
        this.managedEntryNetworkType = props.managedEntryNetworkType;
        this.mserVersion = props.mserVersion;
        this.name = props.name;
        this.nlbNetworkType = props.nlbNetworkType;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.replica = props.replica;
        this.resourceGroupId = props.resourceGroupId;
        this.slbSpec = props.slbSpec;
        this.spec = props.spec;
        this.tags = props.tags;
        this.vSwitchId = props.vSwitchId;
        this.vSwitchId2 = props.vSwitchId2;
        this.xtraceRatio = props.xtraceRatio;
        this.zoneInfo = props.zoneInfo;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            acceptLanguage: this.acceptLanguage,
            chargeType: this.chargeType,
            clbNetworkType: this.clbNetworkType,
            enableHardwareAcceleration: this.enableHardwareAcceleration,
            enableSls: this.enableSls,
            enableXtrace: this.enableXtrace,
            enterpriseSecurityGroup: this.enterpriseSecurityGroup,
            internetSlb: this.internetSlb,
            managedEntryNetworkType: this.managedEntryNetworkType,
            mserVersion: this.mserVersion,
            name: this.name,
            nlbNetworkType: this.nlbNetworkType,
            period: this.period,
            periodUnit: this.periodUnit,
            replica: this.replica,
            resourceGroupId: this.resourceGroupId,
            slbSpec: this.slbSpec,
            spec: this.spec,
            tags: this.tags,
            vSwitchId: this.vSwitchId,
            vSwitchId2: this.vSwitchId2,
            xtraceRatio: this.xtraceRatio,
            zoneInfo: this.zoneInfo,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGateway2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGateway2 {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: The value of the tag.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The keyword of the tag.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway2_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway2.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway2.Tags` resource.
 */
// @ts-ignore TS6133
function rosGateway2TagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway2_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosGateway2 {
    /**
     * @stability external
     */
    export interface ZoneInfoProperty {
        /**
         * @Property zoneId: The id of the zone.
         */
        readonly zoneId?: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The id of the VSwitch.
         */
        readonly vSwitchId?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneInfoProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneInfoProperty`
 *
 * @returns the result of the validation.
 */
function RosGateway2_ZoneInfoPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "ZoneInfoProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway2.ZoneInfo` resource
 *
 * @param properties - the TypeScript properties of a `ZoneInfoProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::Gateway2.ZoneInfo` resource.
 */
// @ts-ignore TS6133
function rosGateway2ZoneInfoPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGateway2_ZoneInfoPropertyValidator(properties).assertSuccess();
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * Properties for defining a `RosGatewayDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
export interface RosGatewayDomainProps {

    /**
     * @Property gatewayUniqueId: The unique identifier of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: The domain name.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property protocol: The protocol type: HTTP, HTTPS.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property certIdentifier: Certificate ID.
     */
    readonly certIdentifier?: string | ros.IResolvable;

    /**
     * @Property http2: Whether to enable Http2: open, close, globalConfig.
     */
    readonly http2?: string | ros.IResolvable;

    /**
     * @Property mustHttps: Whether to enable HTTPS.
     */
    readonly mustHttps?: boolean | ros.IResolvable;

    /**
     * @Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
     */
    readonly tlsCipherSuitesConfigJson?: RosGatewayDomain.TlsCipherSuitesConfigJSONProperty | ros.IResolvable;

    /**
     * @Property tlsMax: The maximum TLS version.
     */
    readonly tlsMax?: string | ros.IResolvable;

    /**
     * @Property tlsMin: The minimum TLS version.
     */
    readonly tlsMin?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayDomainProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.requiredValidator)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.validateString)(properties.gatewayUniqueId));
    if(properties.http2 && (typeof properties.http2) !== 'object') {
        errors.collect(ros.propertyValidator('http2', ros.validateAllowedValues)({
          data: properties.http2,
          allowedValues: ["open","close","globalConfig"],
        }));
    }
    errors.collect(ros.propertyValidator('http2', ros.validateString)(properties.http2));
    errors.collect(ros.propertyValidator('tlsMax', ros.validateString)(properties.tlsMax));
    errors.collect(ros.propertyValidator('mustHttps', ros.validateBoolean)(properties.mustHttps));
    errors.collect(ros.propertyValidator('tlsMin', ros.validateString)(properties.tlsMin));
    errors.collect(ros.propertyValidator('certIdentifier', ros.validateString)(properties.certIdentifier));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["HTTP","HTTPS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('tlsCipherSuitesConfigJson', RosGatewayDomain_TlsCipherSuitesConfigJSONPropertyValidator)(properties.tlsCipherSuitesConfigJson));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosGatewayDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayDomain` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayDomain` resource.
 */
// @ts-ignore TS6133
function rosGatewayDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayUniqueId': ros.stringToRosTemplate(properties.gatewayUniqueId),
      'Name': ros.stringToRosTemplate(properties.name),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'CertIdentifier': ros.stringToRosTemplate(properties.certIdentifier),
      'Http2': ros.stringToRosTemplate(properties.http2),
      'MustHttps': ros.booleanToRosTemplate(properties.mustHttps),
      'TlsCipherSuitesConfigJSON': rosGatewayDomainTlsCipherSuitesConfigJSONPropertyToRosTemplate(properties.tlsCipherSuitesConfigJson),
      'TlsMax': ros.stringToRosTemplate(properties.tlsMax),
      'TlsMin': ros.stringToRosTemplate(properties.tlsMin),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::GatewayDomain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayDomain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewaydomain
 */
export class RosGatewayDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::GatewayDomain";

    /**
     * @Attribute DomainId: The ID of the domain.
     */
    public readonly attrDomainId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayUniqueId: The unique identifier of the gateway.
     */
    public gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: The domain name.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property protocol: The protocol type: HTTP, HTTPS.
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property certIdentifier: Certificate ID.
     */
    public certIdentifier: string | ros.IResolvable | undefined;

    /**
     * @Property http2: Whether to enable Http2: open, close, globalConfig.
     */
    public http2: string | ros.IResolvable | undefined;

    /**
     * @Property mustHttps: Whether to enable HTTPS.
     */
    public mustHttps: boolean | ros.IResolvable | undefined;

    /**
     * @Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
     */
    public tlsCipherSuitesConfigJson: RosGatewayDomain.TlsCipherSuitesConfigJSONProperty | ros.IResolvable | undefined;

    /**
     * @Property tlsMax: The maximum TLS version.
     */
    public tlsMax: string | ros.IResolvable | undefined;

    /**
     * @Property tlsMin: The minimum TLS version.
     */
    public tlsMin: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGatewayDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainId = this.getAtt('DomainId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayUniqueId = props.gatewayUniqueId;
        this.name = props.name;
        this.protocol = props.protocol;
        this.certIdentifier = props.certIdentifier;
        this.http2 = props.http2;
        this.mustHttps = props.mustHttps;
        this.tlsCipherSuitesConfigJson = props.tlsCipherSuitesConfigJson;
        this.tlsMax = props.tlsMax;
        this.tlsMin = props.tlsMin;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayUniqueId: this.gatewayUniqueId,
            name: this.name,
            protocol: this.protocol,
            certIdentifier: this.certIdentifier,
            http2: this.http2,
            mustHttps: this.mustHttps,
            tlsCipherSuitesConfigJson: this.tlsCipherSuitesConfigJson,
            tlsMax: this.tlsMax,
            tlsMin: this.tlsMin,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGatewayDomain {
    /**
     * @stability external
     */
    export interface TlsCipherSuitesConfigJSONProperty {
        /**
         * @Property tlsCipherSuites: List of encryption suite names.
         */
        readonly tlsCipherSuites?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property configType: Encryption suite configuration type.
         */
        readonly configType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TlsCipherSuitesConfigJSONProperty`
 *
 * @param properties - the TypeScript properties of a `TlsCipherSuitesConfigJSONProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayDomain_TlsCipherSuitesConfigJSONPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tlsCipherSuites', ros.listValidator(ros.validateString))(properties.tlsCipherSuites));
    errors.collect(ros.propertyValidator('configType', ros.validateString)(properties.configType));
    return errors.wrap('supplied properties not correct for "TlsCipherSuitesConfigJSONProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayDomain.TlsCipherSuitesConfigJSON` resource
 *
 * @param properties - the TypeScript properties of a `TlsCipherSuitesConfigJSONProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayDomain.TlsCipherSuitesConfigJSON` resource.
 */
// @ts-ignore TS6133
function rosGatewayDomainTlsCipherSuitesConfigJSONPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayDomain_TlsCipherSuitesConfigJSONPropertyValidator(properties).assertSuccess();
    return {
      'TlsCipherSuites': ros.listMapper(ros.stringToRosTemplate)(properties.tlsCipherSuites),
      'ConfigType': ros.stringToRosTemplate(properties.configType),
    };
}

/**
 * Properties for defining a `RosGatewayRoute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
export interface RosGatewayRouteProps {

    /**
     * @Property domainIdList: The list of domain IDs in JSON format.
     */
    readonly domainIdList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: The name of the route.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: The description of the route.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property destinationType: The type of destination service. Valid values:
     * - Single: single service
     * - Multiple: multiple services
     * - VersionOriented: tag-based routing
     * - Mock: mock response
     * - Redirect: redirect
     */
    readonly destinationType?: string | ros.IResolvable;

    /**
     * @Property directResponseJson: Configuration for mock response.
     */
    readonly directResponseJson?: RosGatewayRoute.DirectResponseJSONProperty | ros.IResolvable;

    /**
     * @Property domainId: The ID of the domain.
     */
    readonly domainId?: number | ros.IResolvable;

    /**
     * @Property fallback: Whether to enable fallback service.
     */
    readonly fallback?: boolean | ros.IResolvable;

    /**
     * @Property fallbackServices: The list of fallback services.
     */
    readonly fallbackServices?: Array<RosGatewayRoute.FallbackServicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property gatewayId: The ID of the gateway.
     */
    readonly gatewayId?: number | ros.IResolvable;

    /**
     * @Property policies: The JSON string of route policies.
     */
    readonly policies?: string | ros.IResolvable;

    /**
     * @Property predicates: Matching rules for the route.
     */
    readonly predicates?: RosGatewayRoute.PredicatesProperty | ros.IResolvable;

    /**
     * @Property redirectJson: Configuration for redirect.
     */
    readonly redirectJson?: RosGatewayRoute.RedirectJSONProperty | ros.IResolvable;

    /**
     * @Property routeOrder: The order of the route. Smaller values indicate higher priority.
     */
    readonly routeOrder?: number | ros.IResolvable;

    /**
     * @Property routeType: The type of the route. Valid value: Op (control route).
     */
    readonly routeType?: string | ros.IResolvable;

    /**
     * @Property services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
     */
    readonly services?: Array<RosGatewayRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayRouteProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayRouteProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoutePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('policies', ros.validateString)(properties.policies));
    errors.collect(ros.propertyValidator('gatewayId', ros.validateNumber)(properties.gatewayId));
    if(properties.destinationType && (typeof properties.destinationType) !== 'object') {
        errors.collect(ros.propertyValidator('destinationType', ros.validateAllowedValues)({
          data: properties.destinationType,
          allowedValues: ["Single","Multiple","VersionOriented","Mock","Redirect"],
        }));
    }
    errors.collect(ros.propertyValidator('destinationType', ros.validateString)(properties.destinationType));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.services && (Array.isArray(properties.services) || (typeof properties.services) === 'string')) {
        errors.collect(ros.propertyValidator('services', ros.validateLength)({
            data: properties.services.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('services', ros.listValidator(RosGatewayRoute_ServicesPropertyValidator))(properties.services));
    errors.collect(ros.propertyValidator('domainIdList', ros.requiredValidator)(properties.domainIdList));
    errors.collect(ros.propertyValidator('domainIdList', ros.listValidator(ros.validateString))(properties.domainIdList));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.requiredValidator)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.validateString)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('domainId', ros.validateNumber)(properties.domainId));
    errors.collect(ros.propertyValidator('routeType', ros.validateString)(properties.routeType));
    if(properties.routeOrder && (typeof properties.routeOrder) !== 'object') {
        errors.collect(ros.propertyValidator('routeOrder', ros.validateRange)({
            data: properties.routeOrder,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('routeOrder', ros.validateNumber)(properties.routeOrder));
    errors.collect(ros.propertyValidator('redirectJson', RosGatewayRoute_RedirectJSONPropertyValidator)(properties.redirectJson));
    errors.collect(ros.propertyValidator('directResponseJson', RosGatewayRoute_DirectResponseJSONPropertyValidator)(properties.directResponseJson));
    if(properties.fallbackServices && (Array.isArray(properties.fallbackServices) || (typeof properties.fallbackServices) === 'string')) {
        errors.collect(ros.propertyValidator('fallbackServices', ros.validateLength)({
            data: properties.fallbackServices.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('fallbackServices', ros.listValidator(RosGatewayRoute_FallbackServicesPropertyValidator))(properties.fallbackServices));
    errors.collect(ros.propertyValidator('fallback', ros.validateBoolean)(properties.fallback));
    errors.collect(ros.propertyValidator('predicates', RosGatewayRoute_PredicatesPropertyValidator)(properties.predicates));
    return errors.wrap('supplied properties not correct for "RosGatewayRouteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayRouteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute` resource.
 */
// @ts-ignore TS6133
function rosGatewayRoutePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayRoutePropsValidator(properties).assertSuccess();
    }
    return {
      'DomainIdList': ros.listMapper(ros.stringToRosTemplate)(properties.domainIdList),
      'GatewayUniqueId': ros.stringToRosTemplate(properties.gatewayUniqueId),
      'Name': ros.stringToRosTemplate(properties.name),
      'Description': ros.stringToRosTemplate(properties.description),
      'DestinationType': ros.stringToRosTemplate(properties.destinationType),
      'DirectResponseJSON': rosGatewayRouteDirectResponseJSONPropertyToRosTemplate(properties.directResponseJson),
      'DomainId': ros.numberToRosTemplate(properties.domainId),
      'Fallback': ros.booleanToRosTemplate(properties.fallback),
      'FallbackServices': ros.listMapper(rosGatewayRouteFallbackServicesPropertyToRosTemplate)(properties.fallbackServices),
      'GatewayId': ros.numberToRosTemplate(properties.gatewayId),
      'Policies': ros.stringToRosTemplate(properties.policies),
      'Predicates': rosGatewayRoutePredicatesPropertyToRosTemplate(properties.predicates),
      'RedirectJSON': rosGatewayRouteRedirectJSONPropertyToRosTemplate(properties.redirectJson),
      'RouteOrder': ros.numberToRosTemplate(properties.routeOrder),
      'RouteType': ros.stringToRosTemplate(properties.routeType),
      'Services': ros.listMapper(rosGatewayRouteServicesPropertyToRosTemplate)(properties.services),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::GatewayRoute`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayRoute` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayroute
 */
export class RosGatewayRoute extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::GatewayRoute";

    /**
     * @Attribute RouteId: The ID of the route.
     */
    public readonly attrRouteId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainIdList: The list of domain IDs in JSON format.
     */
    public domainIdList: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    public gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: The name of the route.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: The description of the route.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property destinationType: The type of destination service. Valid values:
     * - Single: single service
     * - Multiple: multiple services
     * - VersionOriented: tag-based routing
     * - Mock: mock response
     * - Redirect: redirect
     */
    public destinationType: string | ros.IResolvable | undefined;

    /**
     * @Property directResponseJson: Configuration for mock response.
     */
    public directResponseJson: RosGatewayRoute.DirectResponseJSONProperty | ros.IResolvable | undefined;

    /**
     * @Property domainId: The ID of the domain.
     */
    public domainId: number | ros.IResolvable | undefined;

    /**
     * @Property fallback: Whether to enable fallback service.
     */
    public fallback: boolean | ros.IResolvable | undefined;

    /**
     * @Property fallbackServices: The list of fallback services.
     */
    public fallbackServices: Array<RosGatewayRoute.FallbackServicesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property gatewayId: The ID of the gateway.
     */
    public gatewayId: number | ros.IResolvable | undefined;

    /**
     * @Property policies: The JSON string of route policies.
     */
    public policies: string | ros.IResolvable | undefined;

    /**
     * @Property predicates: Matching rules for the route.
     */
    public predicates: RosGatewayRoute.PredicatesProperty | ros.IResolvable | undefined;

    /**
     * @Property redirectJson: Configuration for redirect.
     */
    public redirectJson: RosGatewayRoute.RedirectJSONProperty | ros.IResolvable | undefined;

    /**
     * @Property routeOrder: The order of the route. Smaller values indicate higher priority.
     */
    public routeOrder: number | ros.IResolvable | undefined;

    /**
     * @Property routeType: The type of the route. Valid value: Op (control route).
     */
    public routeType: string | ros.IResolvable | undefined;

    /**
     * @Property services: The list of backend services. Required when DestinationType is Single, Multiple, or VersionOriented.
     */
    public services: Array<RosGatewayRoute.ServicesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayRouteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGatewayRoute.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteId = this.getAtt('RouteId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainIdList = props.domainIdList;
        this.gatewayUniqueId = props.gatewayUniqueId;
        this.name = props.name;
        this.description = props.description;
        this.destinationType = props.destinationType;
        this.directResponseJson = props.directResponseJson;
        this.domainId = props.domainId;
        this.fallback = props.fallback;
        this.fallbackServices = props.fallbackServices;
        this.gatewayId = props.gatewayId;
        this.policies = props.policies;
        this.predicates = props.predicates;
        this.redirectJson = props.redirectJson;
        this.routeOrder = props.routeOrder;
        this.routeType = props.routeType;
        this.services = props.services;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainIdList: this.domainIdList,
            gatewayUniqueId: this.gatewayUniqueId,
            name: this.name,
            description: this.description,
            destinationType: this.destinationType,
            directResponseJson: this.directResponseJson,
            domainId: this.domainId,
            fallback: this.fallback,
            fallbackServices: this.fallbackServices,
            gatewayId: this.gatewayId,
            policies: this.policies,
            predicates: this.predicates,
            redirectJson: this.redirectJson,
            routeOrder: this.routeOrder,
            routeType: this.routeType,
            services: this.services,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayRoutePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface DirectResponseJSONProperty {
        /**
         * @Property body: The body content to return for the mock response.
         */
        readonly body?: string | ros.IResolvable;
        /**
         * @Property code: The HTTP status code to return for the mock response.
         */
        readonly code?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DirectResponseJSONProperty`
 *
 * @param properties - the TypeScript properties of a `DirectResponseJSONProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_DirectResponseJSONPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('body', ros.validateString)(properties.body));
    errors.collect(ros.propertyValidator('code', ros.validateNumber)(properties.code));
    return errors.wrap('supplied properties not correct for "DirectResponseJSONProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.DirectResponseJSON` resource
 *
 * @param properties - the TypeScript properties of a `DirectResponseJSONProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.DirectResponseJSON` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteDirectResponseJSONPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_DirectResponseJSONPropertyValidator(properties).assertSuccess();
    return {
      'Body': ros.stringToRosTemplate(properties.body),
      'Code': ros.numberToRosTemplate(properties.code),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface FallbackServicesProperty {
        /**
         * @Property agreementType: The protocol type of the fallback service.
         */
        readonly agreementType?: string | ros.IResolvable;
        /**
         * @Property groupName: The group name of the fallback service.
         */
        readonly groupName?: string | ros.IResolvable;
        /**
         * @Property servicePort: The port of the fallback service.
         */
        readonly servicePort?: number | ros.IResolvable;
        /**
         * @Property percent: The weight percentage of the fallback service.
         */
        readonly percent?: number | ros.IResolvable;
        /**
         * @Property version: The version of the fallback service.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property sourceType: The source type of the fallback service.
         */
        readonly sourceType?: string | ros.IResolvable;
        /**
         * @Property namespace: The namespace of the fallback service.
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the fallback service.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the fallback service.
         */
        readonly serviceId?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FallbackServicesProperty`
 *
 * @param properties - the TypeScript properties of a `FallbackServicesProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_FallbackServicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('agreementType', ros.validateString)(properties.agreementType));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('servicePort', ros.validateNumber)(properties.servicePort));
    errors.collect(ros.propertyValidator('percent', ros.validateNumber)(properties.percent));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('serviceId', ros.validateNumber)(properties.serviceId));
    return errors.wrap('supplied properties not correct for "FallbackServicesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.FallbackServices` resource
 *
 * @param properties - the TypeScript properties of a `FallbackServicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.FallbackServices` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteFallbackServicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_FallbackServicesPropertyValidator(properties).assertSuccess();
    return {
      'AgreementType': ros.stringToRosTemplate(properties.agreementType),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'ServicePort': ros.numberToRosTemplate(properties.servicePort),
      'Percent': ros.numberToRosTemplate(properties.percent),
      'Version': ros.stringToRosTemplate(properties.version),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Name': ros.stringToRosTemplate(properties.name),
      'ServiceId': ros.numberToRosTemplate(properties.serviceId),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface HeaderPredicatesProperty {
        /**
         * @Property type: The matching type for the header.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value of the request header.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The key of the request header.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HeaderPredicatesProperty`
 *
 * @param properties - the TypeScript properties of a `HeaderPredicatesProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_HeaderPredicatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "HeaderPredicatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.HeaderPredicates` resource
 *
 * @param properties - the TypeScript properties of a `HeaderPredicatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.HeaderPredicates` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteHeaderPredicatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_HeaderPredicatesPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface HttpDubboTranscoderProperty {
        /**
         * @Property dubboServiceName: The name of the Dubbo service.
         */
        readonly dubboServiceName?: string | ros.IResolvable;
        /**
         * @Property mothedMapList: List of Dubbo forwarding rules.
         */
        readonly mothedMapList?: Array<RosGatewayRoute.MothedMapListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property dubboServiceGroup: The group of the Dubbo service.
         */
        readonly dubboServiceGroup?: string | ros.IResolvable;
        /**
         * @Property dubboServiceVersion: The version of the Dubbo service.
         */
        readonly dubboServiceVersion?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HttpDubboTranscoderProperty`
 *
 * @param properties - the TypeScript properties of a `HttpDubboTranscoderProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_HttpDubboTranscoderPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dubboServiceName', ros.validateString)(properties.dubboServiceName));
    errors.collect(ros.propertyValidator('mothedMapList', ros.listValidator(RosGatewayRoute_MothedMapListPropertyValidator))(properties.mothedMapList));
    errors.collect(ros.propertyValidator('dubboServiceGroup', ros.validateString)(properties.dubboServiceGroup));
    errors.collect(ros.propertyValidator('dubboServiceVersion', ros.validateString)(properties.dubboServiceVersion));
    return errors.wrap('supplied properties not correct for "HttpDubboTranscoderProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.HttpDubboTranscoder` resource
 *
 * @param properties - the TypeScript properties of a `HttpDubboTranscoderProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.HttpDubboTranscoder` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteHttpDubboTranscoderPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_HttpDubboTranscoderPropertyValidator(properties).assertSuccess();
    return {
      'DubboServiceName': ros.stringToRosTemplate(properties.dubboServiceName),
      'MothedMapList': ros.listMapper(rosGatewayRouteMothedMapListPropertyToRosTemplate)(properties.mothedMapList),
      'DubboServiceGroup': ros.stringToRosTemplate(properties.dubboServiceGroup),
      'DubboServiceVersion': ros.stringToRosTemplate(properties.dubboServiceVersion),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface MothedMapListProperty {
        /**
         * @Property dubboMothedName: The name of the Dubbo method.
         */
        readonly dubboMothedName?: string | ros.IResolvable;
        /**
         * @Property mothedpath: The path to match for the method.
         */
        readonly mothedpath?: string | ros.IResolvable;
        /**
         * @Property passThroughList: List of headers to pass through.
         */
        readonly passThroughList?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property httpMothed: The corresponding HTTP method. Supported values:
     * - ALL_GET
     * - ALL_POST
     * - ALL_PUT
     * - ALL_DELETE
     * - ALL_PATCH
         */
        readonly httpMothed?: string | ros.IResolvable;
        /**
         * @Property paramMapsList: List of parameter mappings.
         */
        readonly paramMapsList?: Array<RosGatewayRoute.ParamMapsListProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property passThroughAllHeaders: Header pass-through type. Valid values:
     * - PASS_ALL: Pass all headers.
     * - PASS_NOT: Do not pass any header.
     * - PASS_ASSIGN: Pass specified headers.
         */
        readonly passThroughAllHeaders?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MothedMapListProperty`
 *
 * @param properties - the TypeScript properties of a `MothedMapListProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_MothedMapListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dubboMothedName', ros.validateString)(properties.dubboMothedName));
    errors.collect(ros.propertyValidator('mothedpath', ros.validateString)(properties.mothedpath));
    errors.collect(ros.propertyValidator('passThroughList', ros.listValidator(ros.validateString))(properties.passThroughList));
    errors.collect(ros.propertyValidator('httpMothed', ros.validateString)(properties.httpMothed));
    errors.collect(ros.propertyValidator('paramMapsList', ros.listValidator(RosGatewayRoute_ParamMapsListPropertyValidator))(properties.paramMapsList));
    errors.collect(ros.propertyValidator('passThroughAllHeaders', ros.validateString)(properties.passThroughAllHeaders));
    return errors.wrap('supplied properties not correct for "MothedMapListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.MothedMapList` resource
 *
 * @param properties - the TypeScript properties of a `MothedMapListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.MothedMapList` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteMothedMapListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_MothedMapListPropertyValidator(properties).assertSuccess();
    return {
      'DubboMothedName': ros.stringToRosTemplate(properties.dubboMothedName),
      'Mothedpath': ros.stringToRosTemplate(properties.mothedpath),
      'PassThroughList': ros.listMapper(ros.stringToRosTemplate)(properties.passThroughList),
      'HttpMothed': ros.stringToRosTemplate(properties.httpMothed),
      'ParamMapsList': ros.listMapper(rosGatewayRouteParamMapsListPropertyToRosTemplate)(properties.paramMapsList),
      'PassThroughAllHeaders': ros.stringToRosTemplate(properties.passThroughAllHeaders),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface ParamMapsListProperty {
        /**
         * @Property mappingType: The type of the backend parameter.
         */
        readonly mappingType?: string | ros.IResolvable;
        /**
         * @Property extractKeySpec: Position of input parameter. Valid values:
     * - ALL_QUERY_PARAMETER: Query parameters
     * - ALL_HEADER: Request headers
     * - ALL_PATH: Request path
     * - ALL_BODY: Request body
         */
        readonly extractKeySpec?: string | ros.IResolvable;
        /**
         * @Property extractKey: The key to extract from the input.
         */
        readonly extractKey?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ParamMapsListProperty`
 *
 * @param properties - the TypeScript properties of a `ParamMapsListProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_ParamMapsListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('mappingType', ros.validateString)(properties.mappingType));
    errors.collect(ros.propertyValidator('extractKeySpec', ros.validateString)(properties.extractKeySpec));
    errors.collect(ros.propertyValidator('extractKey', ros.validateString)(properties.extractKey));
    return errors.wrap('supplied properties not correct for "ParamMapsListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.ParamMapsList` resource
 *
 * @param properties - the TypeScript properties of a `ParamMapsListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.ParamMapsList` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteParamMapsListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_ParamMapsListPropertyValidator(properties).assertSuccess();
    return {
      'MappingType': ros.stringToRosTemplate(properties.mappingType),
      'ExtractKeySpec': ros.stringToRosTemplate(properties.extractKeySpec),
      'ExtractKey': ros.stringToRosTemplate(properties.extractKey),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface PathPredicatesProperty {
        /**
         * @Property path: The path to match.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property type: The type of path matching. Valid values:
     * - PRE: prefix match.
     * - EQUAL: exact match.
     * - REGULAR: regular expression match.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property ignoreCase: Whether to ignore case when matching paths.
         */
        readonly ignoreCase?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PathPredicatesProperty`
 *
 * @param properties - the TypeScript properties of a `PathPredicatesProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_PathPredicatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('ignoreCase', ros.validateBoolean)(properties.ignoreCase));
    return errors.wrap('supplied properties not correct for "PathPredicatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.PathPredicates` resource
 *
 * @param properties - the TypeScript properties of a `PathPredicatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.PathPredicates` resource.
 */
// @ts-ignore TS6133
function rosGatewayRoutePathPredicatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_PathPredicatesPropertyValidator(properties).assertSuccess();
    return {
      'Path': ros.stringToRosTemplate(properties.path),
      'Type': ros.stringToRosTemplate(properties.type),
      'IgnoreCase': ros.booleanToRosTemplate(properties.ignoreCase),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface PredicatesProperty {
        /**
         * @Property headerPredicates: Request header matching rules.
         */
        readonly headerPredicates?: Array<RosGatewayRoute.HeaderPredicatesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property methodPredicates: HTTP method matching rules.
         */
        readonly methodPredicates?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property queryPredicates: URL query parameter matching rules.
         */
        readonly queryPredicates?: Array<RosGatewayRoute.QueryPredicatesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property pathPredicates: Path matching rules.
         */
        readonly pathPredicates?: RosGatewayRoute.PathPredicatesProperty | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PredicatesProperty`
 *
 * @param properties - the TypeScript properties of a `PredicatesProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_PredicatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.headerPredicates && (Array.isArray(properties.headerPredicates) || (typeof properties.headerPredicates) === 'string')) {
        errors.collect(ros.propertyValidator('headerPredicates', ros.validateLength)({
            data: properties.headerPredicates.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('headerPredicates', ros.listValidator(RosGatewayRoute_HeaderPredicatesPropertyValidator))(properties.headerPredicates));
    if(properties.methodPredicates && (Array.isArray(properties.methodPredicates) || (typeof properties.methodPredicates) === 'string')) {
        errors.collect(ros.propertyValidator('methodPredicates', ros.validateLength)({
            data: properties.methodPredicates.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('methodPredicates', ros.listValidator(ros.validateString))(properties.methodPredicates));
    if(properties.queryPredicates && (Array.isArray(properties.queryPredicates) || (typeof properties.queryPredicates) === 'string')) {
        errors.collect(ros.propertyValidator('queryPredicates', ros.validateLength)({
            data: properties.queryPredicates.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('queryPredicates', ros.listValidator(RosGatewayRoute_QueryPredicatesPropertyValidator))(properties.queryPredicates));
    errors.collect(ros.propertyValidator('pathPredicates', RosGatewayRoute_PathPredicatesPropertyValidator)(properties.pathPredicates));
    return errors.wrap('supplied properties not correct for "PredicatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.Predicates` resource
 *
 * @param properties - the TypeScript properties of a `PredicatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.Predicates` resource.
 */
// @ts-ignore TS6133
function rosGatewayRoutePredicatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_PredicatesPropertyValidator(properties).assertSuccess();
    return {
      'HeaderPredicates': ros.listMapper(rosGatewayRouteHeaderPredicatesPropertyToRosTemplate)(properties.headerPredicates),
      'MethodPredicates': ros.listMapper(ros.stringToRosTemplate)(properties.methodPredicates),
      'QueryPredicates': ros.listMapper(rosGatewayRouteQueryPredicatesPropertyToRosTemplate)(properties.queryPredicates),
      'PathPredicates': rosGatewayRoutePathPredicatesPropertyToRosTemplate(properties.pathPredicates),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface QueryPredicatesProperty {
        /**
         * @Property type: The matching type for the query parameter.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The value to match for the query parameter.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: The name of the query parameter.
         */
        readonly key?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryPredicatesProperty`
 *
 * @param properties - the TypeScript properties of a `QueryPredicatesProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_QueryPredicatesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "QueryPredicatesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.QueryPredicates` resource
 *
 * @param properties - the TypeScript properties of a `QueryPredicatesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.QueryPredicates` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteQueryPredicatesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_QueryPredicatesPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface RedirectJSONProperty {
        /**
         * @Property path: The path to redirect to.
         */
        readonly path?: string | ros.IResolvable;
        /**
         * @Property host: The host to redirect to.
         */
        readonly host?: string | ros.IResolvable;
        /**
         * @Property code: The HTTP status code for redirect.
         */
        readonly code?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RedirectJSONProperty`
 *
 * @param properties - the TypeScript properties of a `RedirectJSONProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_RedirectJSONPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('host', ros.validateString)(properties.host));
    errors.collect(ros.propertyValidator('code', ros.validateNumber)(properties.code));
    return errors.wrap('supplied properties not correct for "RedirectJSONProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.RedirectJSON` resource
 *
 * @param properties - the TypeScript properties of a `RedirectJSONProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.RedirectJSON` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteRedirectJSONPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_RedirectJSONPropertyValidator(properties).assertSuccess();
    return {
      'Path': ros.stringToRosTemplate(properties.path),
      'Host': ros.stringToRosTemplate(properties.host),
      'Code': ros.numberToRosTemplate(properties.code),
    };
}

export namespace RosGatewayRoute {
    /**
     * @stability external
     */
    export interface ServicesProperty {
        /**
         * @Property agreementType: The protocol type of the service.
         */
        readonly agreementType?: string | ros.IResolvable;
        /**
         * @Property groupName: The group name of the service.
         */
        readonly groupName?: string | ros.IResolvable;
        /**
         * @Property servicePort: The port of the backend service.
         */
        readonly servicePort?: number | ros.IResolvable;
        /**
         * @Property percent: The percentage of traffic allocated to this service\/version. Only used for multiple-service or tag-based routing.
         */
        readonly percent?: number | ros.IResolvable;
        /**
         * @Property version: The version of the service. Only used for tag-based routing.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property sourceType: The source type of the service.
         */
        readonly sourceType?: string | ros.IResolvable;
        /**
         * @Property httpDubboTranscoder: Configuration for Dubbo protocol transcoding.
         */
        readonly httpDubboTranscoder?: RosGatewayRoute.HttpDubboTranscoderProperty | ros.IResolvable;
        /**
         * @Property namespace: The namespace where the service resides.
         */
        readonly namespace?: string | ros.IResolvable;
        /**
         * @Property name: The name of the service.
         */
        readonly name?: string | ros.IResolvable;
        /**
         * @Property serviceId: The ID of the service.
         */
        readonly serviceId?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServicesProperty`
 *
 * @param properties - the TypeScript properties of a `ServicesProperty`
 *
 * @returns the result of the validation.
 */
function RosGatewayRoute_ServicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('agreementType', ros.validateString)(properties.agreementType));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('servicePort', ros.validateNumber)(properties.servicePort));
    errors.collect(ros.propertyValidator('percent', ros.validateNumber)(properties.percent));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    errors.collect(ros.propertyValidator('httpDubboTranscoder', RosGatewayRoute_HttpDubboTranscoderPropertyValidator)(properties.httpDubboTranscoder));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('serviceId', ros.validateNumber)(properties.serviceId));
    return errors.wrap('supplied properties not correct for "ServicesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.Services` resource
 *
 * @param properties - the TypeScript properties of a `ServicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayRoute.Services` resource.
 */
// @ts-ignore TS6133
function rosGatewayRouteServicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosGatewayRoute_ServicesPropertyValidator(properties).assertSuccess();
    return {
      'AgreementType': ros.stringToRosTemplate(properties.agreementType),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'ServicePort': ros.numberToRosTemplate(properties.servicePort),
      'Percent': ros.numberToRosTemplate(properties.percent),
      'Version': ros.stringToRosTemplate(properties.version),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'HttpDubboTranscoder': rosGatewayRouteHttpDubboTranscoderPropertyToRosTemplate(properties.httpDubboTranscoder),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Name': ros.stringToRosTemplate(properties.name),
      'ServiceId': ros.numberToRosTemplate(properties.serviceId),
    };
}

/**
 * Properties for defining a `RosGatewayService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
export interface RosGatewayServiceProps {

    /**
     * @Property gatewayUniqueId: Unique identifier of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: Name of the service.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property sourceType: Type of service source. Valid values:
     * - MSE: MSE-NACOS
     * - K8s: ACK container service
     * - VIP: Fixed address
     * - DNS: DNS domain name
     * - FC: Function Compute
     * - EDAS: EDAS
     * - MSE_ZK: MSE-Zookeeper
     * - SAE: SAE
     *
     */
    readonly sourceType: string | ros.IResolvable;

    /**
     * @Property dnsServerList: List of DNS servers.
     */
    readonly dnsServerList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property fcAlias: Function Compute service alias. Used when SourceType is FC.
     */
    readonly fcAlias?: string | ros.IResolvable;

    /**
     * @Property fcServiceName: Function Compute service name. Required when SourceType is FC.
     */
    readonly fcServiceName?: string | ros.IResolvable;

    /**
     * @Property fcVersion: Function Compute service version. Used when SourceType is FC.
     */
    readonly fcVersion?: string | ros.IResolvable;

    /**
     * @Property groupName: Group name of the service.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * @Property ips: List of IPs.
     */
    readonly ips?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property namespace: Namespace of the service.
     */
    readonly namespace?: string | ros.IResolvable;

    /**
     * @Property saeAppId: SAE application ID.
     */
    readonly saeAppId?: string | ros.IResolvable;

    /**
     * @Property servicePort: Port of the service.
     */
    readonly servicePort?: number | ros.IResolvable;

    /**
     * @Property serviceProtocol: Protocol of the service.
     */
    readonly serviceProtocol?: string | ros.IResolvable;

    /**
     * @Property sourceId: Source ID of the service. Used when specifying a source to add services.
     */
    readonly sourceId?: number | ros.IResolvable;

    /**
     * @Property tlsSetting: TLS settings for the service.
     */
    readonly tlsSetting?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGatewayServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosGatewayServiceProps`
 *
 * @returns the result of the validation.
 */
function RosGatewayServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('servicePort', ros.validateNumber)(properties.servicePort));
    errors.collect(ros.propertyValidator('fcVersion', ros.validateString)(properties.fcVersion));
    errors.collect(ros.propertyValidator('tlsSetting', ros.hashValidator(ros.validateAny))(properties.tlsSetting));
    errors.collect(ros.propertyValidator('saeAppId', ros.validateString)(properties.saeAppId));
    errors.collect(ros.propertyValidator('sourceId', ros.validateNumber)(properties.sourceId));
    errors.collect(ros.propertyValidator('sourceType', ros.requiredValidator)(properties.sourceType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["MSE","K8s","VIP","DNS","FC","EDAS","MSE_ZK","SAE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    if(properties.ips && (Array.isArray(properties.ips) || (typeof properties.ips) === 'string')) {
        errors.collect(ros.propertyValidator('ips', ros.validateLength)({
            data: properties.ips.length,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('ips', ros.listValidator(ros.validateString))(properties.ips));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.requiredValidator)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.validateString)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('fcAlias', ros.validateString)(properties.fcAlias));
    if(properties.serviceProtocol && (typeof properties.serviceProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('serviceProtocol', ros.validateAllowedValues)({
          data: properties.serviceProtocol,
          allowedValues: ["DUBBO","HTTP","GRPC"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceProtocol', ros.validateString)(properties.serviceProtocol));
    if(properties.dnsServerList && (Array.isArray(properties.dnsServerList) || (typeof properties.dnsServerList) === 'string')) {
        errors.collect(ros.propertyValidator('dnsServerList', ros.validateLength)({
            data: properties.dnsServerList.length,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('dnsServerList', ros.listValidator(ros.validateString))(properties.dnsServerList));
    errors.collect(ros.propertyValidator('fcServiceName', ros.validateString)(properties.fcServiceName));
    return errors.wrap('supplied properties not correct for "RosGatewayServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayService` resource
 *
 * @param properties - the TypeScript properties of a `RosGatewayServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::GatewayService` resource.
 */
// @ts-ignore TS6133
function rosGatewayServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGatewayServicePropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayUniqueId': ros.stringToRosTemplate(properties.gatewayUniqueId),
      'Name': ros.stringToRosTemplate(properties.name),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'DnsServerList': ros.listMapper(ros.stringToRosTemplate)(properties.dnsServerList),
      'FcAlias': ros.stringToRosTemplate(properties.fcAlias),
      'FcServiceName': ros.stringToRosTemplate(properties.fcServiceName),
      'FcVersion': ros.stringToRosTemplate(properties.fcVersion),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'Ips': ros.listMapper(ros.stringToRosTemplate)(properties.ips),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'SaeAppId': ros.stringToRosTemplate(properties.saeAppId),
      'ServicePort': ros.numberToRosTemplate(properties.servicePort),
      'ServiceProtocol': ros.stringToRosTemplate(properties.serviceProtocol),
      'SourceId': ros.numberToRosTemplate(properties.sourceId),
      'TlsSetting': ros.hashMapper(ros.objectToRosTemplate)(properties.tlsSetting),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::GatewayService`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GatewayService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-gatewayservice
 */
export class RosGatewayService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::GatewayService";

    /**
     * @Attribute Name: The name of the service.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute ServiceId: The ID of the gateway service.
     */
    public readonly attrServiceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayUniqueId: Unique identifier of the gateway.
     */
    public gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: Name of the service.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property sourceType: Type of service source. Valid values:
     * - MSE: MSE-NACOS
     * - K8s: ACK container service
     * - VIP: Fixed address
     * - DNS: DNS domain name
     * - FC: Function Compute
     * - EDAS: EDAS
     * - MSE_ZK: MSE-Zookeeper
     * - SAE: SAE
     *
     */
    public sourceType: string | ros.IResolvable;

    /**
     * @Property dnsServerList: List of DNS servers.
     */
    public dnsServerList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property fcAlias: Function Compute service alias. Used when SourceType is FC.
     */
    public fcAlias: string | ros.IResolvable | undefined;

    /**
     * @Property fcServiceName: Function Compute service name. Required when SourceType is FC.
     */
    public fcServiceName: string | ros.IResolvable | undefined;

    /**
     * @Property fcVersion: Function Compute service version. Used when SourceType is FC.
     */
    public fcVersion: string | ros.IResolvable | undefined;

    /**
     * @Property groupName: Group name of the service.
     */
    public groupName: string | ros.IResolvable | undefined;

    /**
     * @Property ips: List of IPs.
     */
    public ips: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property namespace: Namespace of the service.
     */
    public namespace: string | ros.IResolvable | undefined;

    /**
     * @Property saeAppId: SAE application ID.
     */
    public saeAppId: string | ros.IResolvable | undefined;

    /**
     * @Property servicePort: Port of the service.
     */
    public servicePort: number | ros.IResolvable | undefined;

    /**
     * @Property serviceProtocol: Protocol of the service.
     */
    public serviceProtocol: string | ros.IResolvable | undefined;

    /**
     * @Property sourceId: Source ID of the service. Used when specifying a source to add services.
     */
    public sourceId: number | ros.IResolvable | undefined;

    /**
     * @Property tlsSetting: TLS settings for the service.
     */
    public tlsSetting: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGatewayServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGatewayService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');
        this.attrServiceId = this.getAtt('ServiceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayUniqueId = props.gatewayUniqueId;
        this.name = props.name;
        this.sourceType = props.sourceType;
        this.dnsServerList = props.dnsServerList;
        this.fcAlias = props.fcAlias;
        this.fcServiceName = props.fcServiceName;
        this.fcVersion = props.fcVersion;
        this.groupName = props.groupName;
        this.ips = props.ips;
        this.namespace = props.namespace;
        this.saeAppId = props.saeAppId;
        this.servicePort = props.servicePort;
        this.serviceProtocol = props.serviceProtocol;
        this.sourceId = props.sourceId;
        this.tlsSetting = props.tlsSetting;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayUniqueId: this.gatewayUniqueId,
            name: this.name,
            sourceType: this.sourceType,
            dnsServerList: this.dnsServerList,
            fcAlias: this.fcAlias,
            fcServiceName: this.fcServiceName,
            fcVersion: this.fcVersion,
            groupName: this.groupName,
            ips: this.ips,
            namespace: this.namespace,
            saeAppId: this.saeAppId,
            servicePort: this.servicePort,
            serviceProtocol: this.serviceProtocol,
            sourceId: this.sourceId,
            tlsSetting: this.tlsSetting,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGatewayServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNacosConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
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
      'DataId': ros.stringToRosTemplate(properties.dataId),
      'Group': ros.stringToRosTemplate(properties.group),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'AppName': ros.stringToRosTemplate(properties.appName),
      'BetaIps': ros.stringToRosTemplate(properties.betaIps),
      'Content': ros.stringToRosTemplate(properties.content),
      'Desc': ros.stringToRosTemplate(properties.desc),
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'Tags': ros.stringToRosTemplate(properties.tags),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::NacosConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NacosConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosconfig
 */
export class RosNacosConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::NacosConfig";

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
 * Properties for defining a `RosNacosService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
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
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'ServiceName': ros.stringToRosTemplate(properties.serviceName),
      'Ephemeral': ros.booleanToRosTemplate(properties.ephemeral),
      'GroupName': ros.stringToRosTemplate(properties.groupName),
      'NamespaceId': ros.stringToRosTemplate(properties.namespaceId),
      'ProtectThreshold': ros.stringToRosTemplate(properties.protectThreshold),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::NacosService`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NacosService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-nacosservice
 */
export class RosNacosService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::NacosService";

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

/**
 * Properties for defining a `RosPluginConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
export interface RosPluginConfigProps {

    /**
     * @Property configLevel: The scope of the plugin application.
     * - 0: Global
     * - 1: Route
     * - 2: Domain
     */
    readonly configLevel: number | ros.IResolvable;

    /**
     * @Property enable: Whether to enable the plugin.
     */
    readonly enable: boolean | ros.IResolvable;

    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property pluginId: The ID of the gateway plugin.
     */
    readonly pluginId: number | ros.IResolvable;

    /**
     * @Property config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
     */
    readonly config?: string | ros.IResolvable;

    /**
     * @Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
     */
    readonly resourceIdList?: Array<number | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPluginConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosPluginConfigProps`
 *
 * @returns the result of the validation.
 */
function RosPluginConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('configLevel', ros.requiredValidator)(properties.configLevel));
    if(properties.configLevel && (typeof properties.configLevel) !== 'object') {
        errors.collect(ros.propertyValidator('configLevel', ros.validateAllowedValues)({
          data: properties.configLevel,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('configLevel', ros.validateNumber)(properties.configLevel));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.requiredValidator)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.validateString)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('config', ros.validateString)(properties.config));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    if(properties.resourceIdList && (Array.isArray(properties.resourceIdList) || (typeof properties.resourceIdList) === 'string')) {
        errors.collect(ros.propertyValidator('resourceIdList', ros.validateLength)({
            data: properties.resourceIdList.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resourceIdList', ros.listValidator(ros.validateNumber))(properties.resourceIdList));
    errors.collect(ros.propertyValidator('pluginId', ros.requiredValidator)(properties.pluginId));
    errors.collect(ros.propertyValidator('pluginId', ros.validateNumber)(properties.pluginId));
    return errors.wrap('supplied properties not correct for "RosPluginConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::PluginConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosPluginConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::PluginConfig` resource.
 */
// @ts-ignore TS6133
function rosPluginConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPluginConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'ConfigLevel': ros.numberToRosTemplate(properties.configLevel),
      'Enable': ros.booleanToRosTemplate(properties.enable),
      'GatewayUniqueId': ros.stringToRosTemplate(properties.gatewayUniqueId),
      'PluginId': ros.numberToRosTemplate(properties.pluginId),
      'Config': ros.stringToRosTemplate(properties.config),
      'ResourceIdList': ros.listMapper(ros.numberToRosTemplate)(properties.resourceIdList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::PluginConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PluginConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-pluginconfig
 */
export class RosPluginConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::PluginConfig";

    /**
     * @Attribute PluginConfigId: The ID of the plugin config.
     */
    public readonly attrPluginConfigId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configLevel: The scope of the plugin application.
     * - 0: Global
     * - 1: Route
     * - 2: Domain
     */
    public configLevel: number | ros.IResolvable;

    /**
     * @Property enable: Whether to enable the plugin.
     */
    public enable: boolean | ros.IResolvable;

    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    public gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property pluginId: The ID of the gateway plugin.
     */
    public pluginId: number | ros.IResolvable;

    /**
     * @Property config: The configuration of the plugin. For Wasm plugins, the content is in YAML format. For Lua plugins, the content is Lua code.
     */
    public config: string | ros.IResolvable | undefined;

    /**
     * @Property resourceIdList: List of domain IDs\/route IDs (depending on ConfigLevel).
     */
    public resourceIdList: Array<number | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPluginConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPluginConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPluginConfigId = this.getAtt('PluginConfigId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configLevel = props.configLevel;
        this.enable = props.enable;
        this.gatewayUniqueId = props.gatewayUniqueId;
        this.pluginId = props.pluginId;
        this.config = props.config;
        this.resourceIdList = props.resourceIdList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configLevel: this.configLevel,
            enable: this.enable,
            gatewayUniqueId: this.gatewayUniqueId,
            pluginId: this.pluginId,
            config: this.config,
            resourceIdList: this.resourceIdList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPluginConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosServiceSource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
export interface RosServiceSourceProps {

    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    readonly gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: The name.
     * If Source=K8S, this parameter specifies the name of the ACK cluster.
     * If Source=MSE, this parameter specifies the ID of the Nacos instance.
     * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
     * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
     * If Source=SAE, this parameter specifies the ID of the SAE namespace.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property source: The service source. Valid values:
     * K8S: ACK cluster
     * MSE: MSE Nacos instance
     */
    readonly source: string | ros.IResolvable;

    /**
     * @Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    readonly address?: string | ros.IResolvable;

    /**
     * @Property groupList: The list of service groups. This is required when Source=EDAS.
     */
    readonly groupList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ingressOptions: The Ingress configuration.
     */
    readonly ingressOptions?: RosServiceSource.IngressOptionsProperty | ros.IResolvable;

    /**
     * @Property pathList: An array of service root paths.
     */
    readonly pathList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceSourceProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceSourceProps`
 *
 * @returns the result of the validation.
 */
function RosServiceSourcePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.requiredValidator)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('gatewayUniqueId', ros.validateString)(properties.gatewayUniqueId));
    errors.collect(ros.propertyValidator('ingressOptions', RosServiceSource_IngressOptionsPropertyValidator)(properties.ingressOptions));
    if(properties.groupList && (Array.isArray(properties.groupList) || (typeof properties.groupList) === 'string')) {
        errors.collect(ros.propertyValidator('groupList', ros.validateLength)({
            data: properties.groupList.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('groupList', ros.listValidator(ros.validateAny))(properties.groupList));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    if(properties.pathList && (Array.isArray(properties.pathList) || (typeof properties.pathList) === 'string')) {
        errors.collect(ros.propertyValidator('pathList', ros.validateLength)({
            data: properties.pathList.length,
            min: undefined,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('pathList', ros.listValidator(ros.validateAny))(properties.pathList));
    errors.collect(ros.propertyValidator('source', ros.requiredValidator)(properties.source));
    if(properties.source && (typeof properties.source) !== 'object') {
        errors.collect(ros.propertyValidator('source', ros.validateAllowedValues)({
          data: properties.source,
          allowedValues: ["K8S","MSE","MSE_ZK","EDAS","SAE"],
        }));
    }
    errors.collect(ros.propertyValidator('source', ros.validateString)(properties.source));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosServiceSourceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::ServiceSource` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceSourceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::ServiceSource` resource.
 */
// @ts-ignore TS6133
function rosServiceSourcePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceSourcePropsValidator(properties).assertSuccess();
    }
    return {
      'GatewayUniqueId': ros.stringToRosTemplate(properties.gatewayUniqueId),
      'Name': ros.stringToRosTemplate(properties.name),
      'Source': ros.stringToRosTemplate(properties.source),
      'Address': ros.stringToRosTemplate(properties.address),
      'GroupList': ros.listMapper(ros.objectToRosTemplate)(properties.groupList),
      'IngressOptions': rosServiceSourceIngressOptionsPropertyToRosTemplate(properties.ingressOptions),
      'PathList': ros.listMapper(ros.objectToRosTemplate)(properties.pathList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MSE::ServiceSource`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceSource` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-servicesource
 */
export class RosServiceSource extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MSE::ServiceSource";

    /**
     * @Attribute Address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * @Attribute GatewayUniqueId: The unique ID of the gateway.
     */
    public readonly attrGatewayUniqueId: ros.IResolvable;

    /**
     * @Attribute Id: The ID of service source.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute Name: The name.
If Type is set to K8S, this parameter specifies the name of the ACK cluster.
If Type is set to NACOS, this parameter specifies the ID of the Nacos instance.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property gatewayUniqueId: The unique ID of the gateway.
     */
    public gatewayUniqueId: string | ros.IResolvable;

    /**
     * @Property name: The name.
     * If Source=K8S, this parameter specifies the name of the ACK cluster.
     * If Source=MSE, this parameter specifies the ID of the Nacos instance.
     * If Source=MSE_ZK, this parameter specifies the ID of the ZooKeeper instance.
     * If Source=EDAS, this parameter specifies the ID of the EDAS namespace.
     * If Source=SAE, this parameter specifies the ID of the SAE namespace.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property source: The service source. Valid values:
     * K8S: ACK cluster
     * MSE: MSE Nacos instance
     */
    public source: string | ros.IResolvable;

    /**
     * @Property address: Registration Address. If not specified, it will be automatically generated based on the selected instance.
     */
    public address: string | ros.IResolvable | undefined;

    /**
     * @Property groupList: The list of service groups. This is required when Source=EDAS.
     */
    public groupList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ingressOptions: The Ingress configuration.
     */
    public ingressOptions: RosServiceSource.IngressOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property pathList: An array of service root paths.
     */
    public pathList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceSourceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceSource.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddress = this.getAtt('Address');
        this.attrGatewayUniqueId = this.getAtt('GatewayUniqueId');
        this.attrId = this.getAtt('Id');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.gatewayUniqueId = props.gatewayUniqueId;
        this.name = props.name;
        this.source = props.source;
        this.address = props.address;
        this.groupList = props.groupList;
        this.ingressOptions = props.ingressOptions;
        this.pathList = props.pathList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            gatewayUniqueId: this.gatewayUniqueId,
            name: this.name,
            source: this.source,
            address: this.address,
            groupList: this.groupList,
            ingressOptions: this.ingressOptions,
            pathList: this.pathList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceSourcePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServiceSource {
    /**
     * @stability external
     */
    export interface IngressOptionsProperty {
        /**
         * @Property ingressClass: Specifies whether to monitor Ingress classes.
         */
        readonly ingressClass?: string | ros.IResolvable;
        /**
         * @Property enableStatus: Specifies whether to update the Ingress status.
         */
        readonly enableStatus?: string | ros.IResolvable;
        /**
         * @Property watchNamespace: The namespace whose resources you want to monitor.
         */
        readonly watchNamespace?: string | ros.IResolvable;
        /**
         * @Property enableIngress: Specifies whether to enable Ingress.
         */
        readonly enableIngress?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IngressOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `IngressOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosServiceSource_IngressOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ingressClass', ros.validateString)(properties.ingressClass));
    errors.collect(ros.propertyValidator('enableStatus', ros.validateString)(properties.enableStatus));
    errors.collect(ros.propertyValidator('watchNamespace', ros.validateString)(properties.watchNamespace));
    errors.collect(ros.propertyValidator('enableIngress', ros.validateString)(properties.enableIngress));
    return errors.wrap('supplied properties not correct for "IngressOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::MSE::ServiceSource.IngressOptions` resource
 *
 * @param properties - the TypeScript properties of a `IngressOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::MSE::ServiceSource.IngressOptions` resource.
 */
// @ts-ignore TS6133
function rosServiceSourceIngressOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServiceSource_IngressOptionsPropertyValidator(properties).assertSuccess();
    return {
      'IngressClass': ros.stringToRosTemplate(properties.ingressClass),
      'EnableStatus': ros.stringToRosTemplate(properties.enableStatus),
      'WatchNamespace': ros.stringToRosTemplate(properties.watchNamespace),
      'EnableIngress': ros.stringToRosTemplate(properties.enableIngress),
    };
}
