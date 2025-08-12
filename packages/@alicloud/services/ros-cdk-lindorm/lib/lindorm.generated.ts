// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
 */
export interface RosInstanceProps {

    /**
     * @Property diskCategory: The storage type of the instance. Valid values:
     * cloud_efficiency: This instance uses the Standard type of storage.
     * cloud_ssd: This instance uses the Performance type of storage.
     * capacity_cloud_storage: This instance uses the Capacity type of storage.
     * local_ssd_pro: This instance uses local SSDs.
     * local_hdd_pro: This instance uses local HDDs.
     */
    readonly diskCategory: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance that you want to create.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC in which you want to create the instance.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    readonly coldStorage?: number | ros.IResolvable;

    /**
     * @Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
     * When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
     * lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
     * When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
     * lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
     */
    readonly coreSpec?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
     */
    readonly filestoreNum?: number | ros.IResolvable;

    /**
     * @Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     */
    readonly filestoreSpec?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance you want to create. Valid values:
     * PREPAY: subscription.
     * POSTPAY: pay-as-you-go.
     * Default value: POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
     */
    readonly instanceStorage?: number | ros.IResolvable;

    /**
     * @Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
     * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
     */
    readonly lindormNum?: number | ros.IResolvable;

    /**
     * @Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    readonly lindormSpec?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
     * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
     * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The period based on which you are charged for the instance. Valid values:
     * Month: You are charged for the instance on a monthly basis.
     * Year: You are charged for the instance on a yearly basis.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The ip white list of instance.
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
     */
    readonly solrNum?: number | ros.IResolvable;

    /**
     * @Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    readonly solrSpec?: string | ros.IResolvable;

    /**
     * @Property streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
     */
    readonly streamNum?: number | ros.IResolvable;

    /**
     * @Property streamSpec: The specification of LindormStream nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    readonly streamSpec?: string | ros.IResolvable;

    /**
     * @Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
     */
    readonly tsdbNum?: number | ros.IResolvable;

    /**
     * @Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    readonly tsdbSpec?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone in which you want to create the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('streamSpec', ros.validateString)(properties.streamSpec));
    errors.collect(ros.propertyValidator('instanceStorage', ros.validateNumber)(properties.instanceStorage));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.streamNum && (typeof properties.streamNum) !== 'object') {
        errors.collect(ros.propertyValidator('streamNum', ros.validateRange)({
            data: properties.streamNum,
            min: 0,
            max: 90,
          }));
    }
    errors.collect(ros.propertyValidator('streamNum', ros.validateNumber)(properties.streamNum));
    if(properties.coldStorage && (typeof properties.coldStorage) !== 'object') {
        errors.collect(ros.propertyValidator('coldStorage', ros.validateRange)({
            data: properties.coldStorage,
            min: 800,
            max: 1000000,
          }));
    }
    errors.collect(ros.propertyValidator('coldStorage', ros.validateNumber)(properties.coldStorage));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('diskCategory', ros.requiredValidator)(properties.diskCategory));
    if(properties.diskCategory && (typeof properties.diskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('diskCategory', ros.validateAllowedValues)({
          data: properties.diskCategory,
          allowedValues: ["capacity_cloud_storage","cloud_efficiency","cloud_ssd","local_hdd_pro","local_ssd_pro"],
        }));
    }
    errors.collect(ros.propertyValidator('diskCategory', ros.validateString)(properties.diskCategory));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.solrNum && (typeof properties.solrNum) !== 'object') {
        errors.collect(ros.propertyValidator('solrNum', ros.validateRange)({
            data: properties.solrNum,
            min: 0,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('solrNum', ros.validateNumber)(properties.solrNum));
    errors.collect(ros.propertyValidator('solrSpec', ros.validateString)(properties.solrSpec));
    if(properties.filestoreNum && (typeof properties.filestoreNum) !== 'object') {
        errors.collect(ros.propertyValidator('filestoreNum', ros.validateRange)({
            data: properties.filestoreNum,
            min: 0,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('filestoreNum', ros.validateNumber)(properties.filestoreNum));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityIpList', ros.listValidator(ros.validateString))(properties.securityIpList));
    errors.collect(ros.propertyValidator('lindormSpec', ros.validateString)(properties.lindormSpec));
    errors.collect(ros.propertyValidator('tsdbSpec', ros.validateString)(properties.tsdbSpec));
    errors.collect(ros.propertyValidator('coreSpec', ros.validateString)(properties.coreSpec));
    if(properties.lindormNum && (typeof properties.lindormNum) !== 'object') {
        errors.collect(ros.propertyValidator('lindormNum', ros.validateRange)({
            data: properties.lindormNum,
            min: 0,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('lindormNum', ros.validateNumber)(properties.lindormNum));
    errors.collect(ros.propertyValidator('filestoreSpec', ros.validateString)(properties.filestoreSpec));
    if(properties.tsdbNum && (typeof properties.tsdbNum) !== 'object') {
        errors.collect(ros.propertyValidator('tsdbNum', ros.validateRange)({
            data: properties.tsdbNum,
            min: 0,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('tsdbNum', ros.validateNumber)(properties.tsdbNum));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Lindorm::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Lindorm::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DiskCategory': ros.stringToRosTemplate(properties.diskCategory),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ColdStorage': ros.numberToRosTemplate(properties.coldStorage),
      'CoreSpec': ros.stringToRosTemplate(properties.coreSpec),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'FilestoreNum': ros.numberToRosTemplate(properties.filestoreNum),
      'FilestoreSpec': ros.stringToRosTemplate(properties.filestoreSpec),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'InstanceStorage': ros.numberToRosTemplate(properties.instanceStorage),
      'LindormNum': ros.numberToRosTemplate(properties.lindormNum),
      'LindormSpec': ros.stringToRosTemplate(properties.lindormSpec),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityIpList': ros.listMapper(ros.stringToRosTemplate)(properties.securityIpList),
      'SolrNum': ros.numberToRosTemplate(properties.solrNum),
      'SolrSpec': ros.stringToRosTemplate(properties.solrSpec),
      'StreamNum': ros.numberToRosTemplate(properties.streamNum),
      'StreamSpec': ros.stringToRosTemplate(properties.streamSpec),
      'TsdbNum': ros.numberToRosTemplate(properties.tsdbNum),
      'TsdbSpec': ros.stringToRosTemplate(properties.tsdbSpec),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Lindorm::Instance`, which is used to create a Lindorm instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Lindorm::Instance";

    /**
     * @Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    public readonly attrAuthInfos: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    public readonly attrJdbcUrlList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskCategory: The storage type of the instance. Valid values:
     * cloud_efficiency: This instance uses the Standard type of storage.
     * cloud_ssd: This instance uses the Performance type of storage.
     * capacity_cloud_storage: This instance uses the Capacity type of storage.
     * local_ssd_pro: This instance uses local SSDs.
     * local_hdd_pro: This instance uses local HDDs.
     */
    public diskCategory: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance that you want to create.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC in which you want to create the instance.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    public coldStorage: number | ros.IResolvable | undefined;

    /**
     * @Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
     * When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
     * lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
     * When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
     * lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
     */
    public coreSpec: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
     */
    public filestoreNum: number | ros.IResolvable | undefined;

    /**
     * @Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     */
    public filestoreSpec: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instance you want to create. Valid values:
     * PREPAY: subscription.
     * POSTPAY: pay-as-you-go.
     * Default value: POSTPAY
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
     */
    public instanceStorage: number | ros.IResolvable | undefined;

    /**
     * @Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
     * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
     */
    public lindormNum: number | ros.IResolvable | undefined;

    /**
     * @Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    public lindormSpec: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
     * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
     * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The period based on which you are charged for the instance. Valid values:
     * Month: You are charged for the instance on a monthly basis.
     * Year: You are charged for the instance on a yearly basis.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The ip white list of instance.
     */
    public securityIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
     */
    public solrNum: number | ros.IResolvable | undefined;

    /**
     * @Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    public solrSpec: string | ros.IResolvable | undefined;

    /**
     * @Property streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
     */
    public streamNum: number | ros.IResolvable | undefined;

    /**
     * @Property streamSpec: The specification of LindormStream nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    public streamSpec: string | ros.IResolvable | undefined;

    /**
     * @Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
     */
    public tsdbNum: number | ros.IResolvable | undefined;

    /**
     * @Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    public tsdbSpec: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone in which you want to create the instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthInfos = this.getAtt('AuthInfos');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrJdbcUrlList = this.getAtt('JdbcUrlList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskCategory = props.diskCategory;
        this.instanceName = props.instanceName;
        this.vpcId = props.vpcId;
        this.coldStorage = props.coldStorage;
        this.coreSpec = props.coreSpec;
        this.deletionProtection = props.deletionProtection;
        this.filestoreNum = props.filestoreNum;
        this.filestoreSpec = props.filestoreSpec;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceStorage = props.instanceStorage;
        this.lindormNum = props.lindormNum;
        this.lindormSpec = props.lindormSpec;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpList = props.securityIpList;
        this.solrNum = props.solrNum;
        this.solrSpec = props.solrSpec;
        this.streamNum = props.streamNum;
        this.streamSpec = props.streamSpec;
        this.tsdbNum = props.tsdbNum;
        this.tsdbSpec = props.tsdbSpec;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskCategory: this.diskCategory,
            instanceName: this.instanceName,
            vpcId: this.vpcId,
            coldStorage: this.coldStorage,
            coreSpec: this.coreSpec,
            deletionProtection: this.deletionProtection,
            filestoreNum: this.filestoreNum,
            filestoreSpec: this.filestoreSpec,
            instanceChargeType: this.instanceChargeType,
            instanceStorage: this.instanceStorage,
            lindormNum: this.lindormNum,
            lindormSpec: this.lindormSpec,
            period: this.period,
            periodUnit: this.periodUnit,
            resourceGroupId: this.resourceGroupId,
            securityIpList: this.securityIpList,
            solrNum: this.solrNum,
            solrSpec: this.solrSpec,
            streamNum: this.streamNum,
            streamSpec: this.streamSpec,
            tsdbNum: this.tsdbNum,
            tsdbSpec: this.tsdbSpec,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMultiZoneInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-multizoneinstance
 */
export interface RosMultiZoneInstanceProps {

    /**
     * @Property diskCategory: The storage type of the instance. Valid values:
     * cloud_efficiency: This instance uses the Standard type of storage.
     * cloud_ssd: This instance uses the Performance type of storage.
     * capacity_cloud_storage: This instance uses the Capacity type of storage.
     * local_ssd_pro: This instance uses local SSDs.
     * local_hdd_pro: This instance uses local HDDs.
     */
    readonly diskCategory: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance that you want to create.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC in which you want to create the instance.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly arbiterVSwitchId?: string | ros.IResolvable;

    /**
     * @Property arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly arbiterZoneId?: string | ros.IResolvable;

    /**
     * @Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    readonly coldStorage?: number | ros.IResolvable;

    /**
     * @Property coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly coreSingleStorage?: number | ros.IResolvable;

    /**
     * @Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
     * When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
     * lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
     * When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
     * lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
     */
    readonly coreSpec?: string | ros.IResolvable;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
     */
    readonly filestoreNum?: number | ros.IResolvable;

    /**
     * @Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     */
    readonly filestoreSpec?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance you want to create. Valid values:
     * PREPAY: subscription.
     * POSTPAY: pay-as-you-go.
     * Default value: POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
     * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
     */
    readonly lindormNum?: number | ros.IResolvable;

    /**
     * @Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    readonly lindormSpec?: string | ros.IResolvable;

    /**
     * @Property logDiskCategory: The disk type of the log nodes. Valid values:
     * cloud_efficiency、cloud_essd.
     * This parameter is required if you want to create a multi-zone instance.
     */
    readonly logDiskCategory?: string | ros.IResolvable;

    /**
     * @Property logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly logNum?: number | ros.IResolvable;

    /**
     * @Property logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly logSingleStorage?: number | ros.IResolvable;

    /**
     * @Property logSpec: The type of the log nodes. Valid values:
     * lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * **This parameter is required if you want to create a multi-zone instance.
     */
    readonly logSpec?: string | ros.IResolvable;

    /**
     * @Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations.
     * ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
     * cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
     * cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
     * ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
     * cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
     * cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
     * cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
     * cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
     * cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
     * cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
     * cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
     * **This parameter is required if you want to create a multi-zone instance.
     */
    readonly multiZoneCombination?: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
     * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
     * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property periodUnit: The period based on which you are charged for the instance. Valid values:
     * Month: You are charged for the instance on a monthly basis.
     * Year: You are charged for the instance on a yearly basis.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * @Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
     */
    readonly primaryVSwitchId?: string | ros.IResolvable;

    /**
     * @Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
     */
    readonly primaryZoneId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityIpList: The ip white list of instance.
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
     */
    readonly solrNum?: number | ros.IResolvable;

    /**
     * @Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    readonly solrSpec?: string | ros.IResolvable;

    /**
     * @Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly standbyVSwitchId?: string | ros.IResolvable;

    /**
     * @Property standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly standbyZoneId?: string | ros.IResolvable;

    /**
     * @Property streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
     */
    readonly streamNum?: number | ros.IResolvable;

    /**
     * @Property streamSpec: The specification of LindormStream nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    readonly streamSpec?: string | ros.IResolvable;

    /**
     * @Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
     */
    readonly tsdbNum?: number | ros.IResolvable;

    /**
     * @Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    readonly tsdbSpec?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMultiZoneInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosMultiZoneInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosMultiZoneInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('standbyZoneId', ros.validateString)(properties.standbyZoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.logDiskCategory && (typeof properties.logDiskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('logDiskCategory', ros.validateAllowedValues)({
          data: properties.logDiskCategory,
          allowedValues: ["cloud_efficiency","cloud_essd"],
        }));
    }
    errors.collect(ros.propertyValidator('logDiskCategory', ros.validateString)(properties.logDiskCategory));
    errors.collect(ros.propertyValidator('standbyVSwitchId', ros.validateString)(properties.standbyVSwitchId));
    if(properties.solrNum && (typeof properties.solrNum) !== 'object') {
        errors.collect(ros.propertyValidator('solrNum', ros.validateRange)({
            data: properties.solrNum,
            min: 0,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('solrNum', ros.validateNumber)(properties.solrNum));
    errors.collect(ros.propertyValidator('solrSpec', ros.validateString)(properties.solrSpec));
    errors.collect(ros.propertyValidator('coreSpec', ros.validateString)(properties.coreSpec));
    errors.collect(ros.propertyValidator('filestoreSpec', ros.validateString)(properties.filestoreSpec));
    if(properties.tsdbNum && (typeof properties.tsdbNum) !== 'object') {
        errors.collect(ros.propertyValidator('tsdbNum', ros.validateRange)({
            data: properties.tsdbNum,
            min: 0,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('tsdbNum', ros.validateNumber)(properties.tsdbNum));
    errors.collect(ros.propertyValidator('arbiterZoneId', ros.validateString)(properties.arbiterZoneId));
    errors.collect(ros.propertyValidator('streamSpec', ros.validateString)(properties.streamSpec));
    errors.collect(ros.propertyValidator('primaryZoneId', ros.validateString)(properties.primaryZoneId));
    errors.collect(ros.propertyValidator('multiZoneCombination', ros.validateString)(properties.multiZoneCombination));
    if(properties.coreSingleStorage && (typeof properties.coreSingleStorage) !== 'object') {
        errors.collect(ros.propertyValidator('coreSingleStorage', ros.validateRange)({
            data: properties.coreSingleStorage,
            min: 400,
            max: 64000,
          }));
    }
    errors.collect(ros.propertyValidator('coreSingleStorage', ros.validateNumber)(properties.coreSingleStorage));
    if(properties.streamNum && (typeof properties.streamNum) !== 'object') {
        errors.collect(ros.propertyValidator('streamNum', ros.validateRange)({
            data: properties.streamNum,
            min: 0,
            max: 90,
          }));
    }
    errors.collect(ros.propertyValidator('streamNum', ros.validateNumber)(properties.streamNum));
    if(properties.coldStorage && (typeof properties.coldStorage) !== 'object') {
        errors.collect(ros.propertyValidator('coldStorage', ros.validateRange)({
            data: properties.coldStorage,
            min: 800,
            max: 1000000,
          }));
    }
    errors.collect(ros.propertyValidator('coldStorage', ros.validateNumber)(properties.coldStorage));
    errors.collect(ros.propertyValidator('logSpec', ros.validateString)(properties.logSpec));
    errors.collect(ros.propertyValidator('diskCategory', ros.requiredValidator)(properties.diskCategory));
    if(properties.diskCategory && (typeof properties.diskCategory) !== 'object') {
        errors.collect(ros.propertyValidator('diskCategory', ros.validateAllowedValues)({
          data: properties.diskCategory,
          allowedValues: ["capacity_cloud_storage","cloud_efficiency","cloud_ssd","local_hdd_pro","local_ssd_pro"],
        }));
    }
    errors.collect(ros.propertyValidator('diskCategory', ros.validateString)(properties.diskCategory));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('primaryVSwitchId', ros.validateString)(properties.primaryVSwitchId));
    errors.collect(ros.propertyValidator('arbiterVSwitchId', ros.validateString)(properties.arbiterVSwitchId));
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.filestoreNum && (typeof properties.filestoreNum) !== 'object') {
        errors.collect(ros.propertyValidator('filestoreNum', ros.validateRange)({
            data: properties.filestoreNum,
            min: 0,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('filestoreNum', ros.validateNumber)(properties.filestoreNum));
    errors.collect(ros.propertyValidator('securityIpList', ros.listValidator(ros.validateString))(properties.securityIpList));
    errors.collect(ros.propertyValidator('lindormSpec', ros.validateString)(properties.lindormSpec));
    errors.collect(ros.propertyValidator('tsdbSpec', ros.validateString)(properties.tsdbSpec));
    if(properties.logSingleStorage && (typeof properties.logSingleStorage) !== 'object') {
        errors.collect(ros.propertyValidator('logSingleStorage', ros.validateRange)({
            data: properties.logSingleStorage,
            min: 400,
            max: 64000,
          }));
    }
    errors.collect(ros.propertyValidator('logSingleStorage', ros.validateNumber)(properties.logSingleStorage));
    if(properties.lindormNum && (typeof properties.lindormNum) !== 'object') {
        errors.collect(ros.propertyValidator('lindormNum', ros.validateRange)({
            data: properties.lindormNum,
            min: 0,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('lindormNum', ros.validateNumber)(properties.lindormNum));
    if(properties.logNum && (typeof properties.logNum) !== 'object') {
        errors.collect(ros.propertyValidator('logNum', ros.validateRange)({
            data: properties.logNum,
            min: 4,
            max: 400,
          }));
    }
    errors.collect(ros.propertyValidator('logNum', ros.validateNumber)(properties.logNum));
    if(properties.periodUnit && (typeof properties.periodUnit) !== 'object') {
        errors.collect(ros.propertyValidator('periodUnit', ros.validateAllowedValues)({
          data: properties.periodUnit,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodUnit', ros.validateString)(properties.periodUnit));
    return errors.wrap('supplied properties not correct for "RosMultiZoneInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Lindorm::MultiZoneInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosMultiZoneInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Lindorm::MultiZoneInstance` resource.
 */
// @ts-ignore TS6133
function rosMultiZoneInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMultiZoneInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'DiskCategory': ros.stringToRosTemplate(properties.diskCategory),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ArbiterVSwitchId': ros.stringToRosTemplate(properties.arbiterVSwitchId),
      'ArbiterZoneId': ros.stringToRosTemplate(properties.arbiterZoneId),
      'ColdStorage': ros.numberToRosTemplate(properties.coldStorage),
      'CoreSingleStorage': ros.numberToRosTemplate(properties.coreSingleStorage),
      'CoreSpec': ros.stringToRosTemplate(properties.coreSpec),
      'DeletionProtection': ros.booleanToRosTemplate(properties.deletionProtection),
      'FilestoreNum': ros.numberToRosTemplate(properties.filestoreNum),
      'FilestoreSpec': ros.stringToRosTemplate(properties.filestoreSpec),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'LindormNum': ros.numberToRosTemplate(properties.lindormNum),
      'LindormSpec': ros.stringToRosTemplate(properties.lindormSpec),
      'LogDiskCategory': ros.stringToRosTemplate(properties.logDiskCategory),
      'LogNum': ros.numberToRosTemplate(properties.logNum),
      'LogSingleStorage': ros.numberToRosTemplate(properties.logSingleStorage),
      'LogSpec': ros.stringToRosTemplate(properties.logSpec),
      'MultiZoneCombination': ros.stringToRosTemplate(properties.multiZoneCombination),
      'Period': ros.numberToRosTemplate(properties.period),
      'PeriodUnit': ros.stringToRosTemplate(properties.periodUnit),
      'PrimaryVSwitchId': ros.stringToRosTemplate(properties.primaryVSwitchId),
      'PrimaryZoneId': ros.stringToRosTemplate(properties.primaryZoneId),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityIpList': ros.listMapper(ros.stringToRosTemplate)(properties.securityIpList),
      'SolrNum': ros.numberToRosTemplate(properties.solrNum),
      'SolrSpec': ros.stringToRosTemplate(properties.solrSpec),
      'StandbyVSwitchId': ros.stringToRosTemplate(properties.standbyVSwitchId),
      'StandbyZoneId': ros.stringToRosTemplate(properties.standbyZoneId),
      'StreamNum': ros.numberToRosTemplate(properties.streamNum),
      'StreamSpec': ros.stringToRosTemplate(properties.streamSpec),
      'TsdbNum': ros.numberToRosTemplate(properties.tsdbNum),
      'TsdbSpec': ros.stringToRosTemplate(properties.tsdbSpec),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Lindorm::MultiZoneInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MultiZoneInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-multizoneinstance
 */
export class RosMultiZoneInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Lindorm::MultiZoneInstance";

    /**
     * @Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    public readonly attrAuthInfos: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    public readonly attrJdbcUrlList: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskCategory: The storage type of the instance. Valid values:
     * cloud_efficiency: This instance uses the Standard type of storage.
     * cloud_ssd: This instance uses the Performance type of storage.
     * capacity_cloud_storage: This instance uses the Capacity type of storage.
     * local_ssd_pro: This instance uses local SSDs.
     * local_hdd_pro: This instance uses local HDDs.
     */
    public diskCategory: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance that you want to create.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC in which you want to create the instance.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
     */
    public arbiterVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
     */
    public arbiterZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    public coldStorage: number | ros.IResolvable | undefined;

    /**
     * @Property coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
     */
    public coreSingleStorage: number | ros.IResolvable | undefined;

    /**
     * @Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
     * When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
     * lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
     * When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
     * lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
     */
    public coreSpec: string | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
     */
    public filestoreNum: number | ros.IResolvable | undefined;

    /**
     * @Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     */
    public filestoreSpec: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instance you want to create. Valid values:
     * PREPAY: subscription.
     * POSTPAY: pay-as-you-go.
     * Default value: POSTPAY
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
     * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
     */
    public lindormNum: number | ros.IResolvable | undefined;

    /**
     * @Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    public lindormSpec: string | ros.IResolvable | undefined;

    /**
     * @Property logDiskCategory: The disk type of the log nodes. Valid values:
     * cloud_efficiency、cloud_essd.
     * This parameter is required if you want to create a multi-zone instance.
     */
    public logDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
     */
    public logNum: number | ros.IResolvable | undefined;

    /**
     * @Property logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
     */
    public logSingleStorage: number | ros.IResolvable | undefined;

    /**
     * @Property logSpec: The type of the log nodes. Valid values:
     * lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * **This parameter is required if you want to create a multi-zone instance.
     */
    public logSpec: string | ros.IResolvable | undefined;

    /**
     * @Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations.
     * ap-southeast-5abc-aliyun: Zone A+B+C in the Indonesia (Jakarta) region.
     * cn-hangzhou-ehi-aliyun: Zone E+H+I in the China (Hangzhou) region.
     * cn-beijing-acd-aliyun: Zone A+C+D in the China (Beijing) region.
     * ap-southeast-1-abc-aliyun: Zone A+B+C in the Singapore region.
     * cn-zhangjiakou-abc-aliyun: Zone A+B+C in the China (Zhangjiakou) region.
     * cn-shanghai-efg-aliyun: Zone E+F+G in the China (Shanghai) region.
     * cn-shanghai-abd-aliyun: Zone A+B+D in the China (Shanghai) region.
     * cn-hangzhou-bef-aliyun: Zone B+E+F in the China (Hangzhou) region.
     * cn-hangzhou-bce-aliyun: Zone B+C+E in the China (Hangzhou) region.
     * cn-beijing-fgh-aliyun: Zone F+G+H in the China (Beijing) region.
     * cn-shenzhen-abc-aliyun: Zone A+B+C in the China (Shenzhen) region.
     * **This parameter is required if you want to create a multi-zone instance.
     */
    public multiZoneCombination: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
     * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
     * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodUnit: The period based on which you are charged for the instance. Valid values:
     * Month: You are charged for the instance on a monthly basis.
     * Year: You are charged for the instance on a yearly basis.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    public periodUnit: string | ros.IResolvable | undefined;

    /**
     * @Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
     */
    public primaryVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
     */
    public primaryZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: The ip white list of instance.
     */
    public securityIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
     */
    public solrNum: number | ros.IResolvable | undefined;

    /**
     * @Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    public solrSpec: string | ros.IResolvable | undefined;

    /**
     * @Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
     */
    public standbyVSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
     */
    public standbyZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
     */
    public streamNum: number | ros.IResolvable | undefined;

    /**
     * @Property streamSpec: The specification of LindormStream nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
     */
    public streamSpec: string | ros.IResolvable | undefined;

    /**
     * @Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
     */
    public tsdbNum: number | ros.IResolvable | undefined;

    /**
     * @Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    public tsdbSpec: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMultiZoneInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMultiZoneInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthInfos = this.getAtt('AuthInfos');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrJdbcUrlList = this.getAtt('JdbcUrlList');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskCategory = props.diskCategory;
        this.instanceName = props.instanceName;
        this.vpcId = props.vpcId;
        this.arbiterVSwitchId = props.arbiterVSwitchId;
        this.arbiterZoneId = props.arbiterZoneId;
        this.coldStorage = props.coldStorage;
        this.coreSingleStorage = props.coreSingleStorage;
        this.coreSpec = props.coreSpec;
        this.deletionProtection = props.deletionProtection;
        this.filestoreNum = props.filestoreNum;
        this.filestoreSpec = props.filestoreSpec;
        this.instanceChargeType = props.instanceChargeType;
        this.lindormNum = props.lindormNum;
        this.lindormSpec = props.lindormSpec;
        this.logDiskCategory = props.logDiskCategory;
        this.logNum = props.logNum;
        this.logSingleStorage = props.logSingleStorage;
        this.logSpec = props.logSpec;
        this.multiZoneCombination = props.multiZoneCombination;
        this.period = props.period;
        this.periodUnit = props.periodUnit;
        this.primaryVSwitchId = props.primaryVSwitchId;
        this.primaryZoneId = props.primaryZoneId;
        this.resourceGroupId = props.resourceGroupId;
        this.securityIpList = props.securityIpList;
        this.solrNum = props.solrNum;
        this.solrSpec = props.solrSpec;
        this.standbyVSwitchId = props.standbyVSwitchId;
        this.standbyZoneId = props.standbyZoneId;
        this.streamNum = props.streamNum;
        this.streamSpec = props.streamSpec;
        this.tsdbNum = props.tsdbNum;
        this.tsdbSpec = props.tsdbSpec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskCategory: this.diskCategory,
            instanceName: this.instanceName,
            vpcId: this.vpcId,
            arbiterVSwitchId: this.arbiterVSwitchId,
            arbiterZoneId: this.arbiterZoneId,
            coldStorage: this.coldStorage,
            coreSingleStorage: this.coreSingleStorage,
            coreSpec: this.coreSpec,
            deletionProtection: this.deletionProtection,
            filestoreNum: this.filestoreNum,
            filestoreSpec: this.filestoreSpec,
            instanceChargeType: this.instanceChargeType,
            lindormNum: this.lindormNum,
            lindormSpec: this.lindormSpec,
            logDiskCategory: this.logDiskCategory,
            logNum: this.logNum,
            logSingleStorage: this.logSingleStorage,
            logSpec: this.logSpec,
            multiZoneCombination: this.multiZoneCombination,
            period: this.period,
            periodUnit: this.periodUnit,
            primaryVSwitchId: this.primaryVSwitchId,
            primaryZoneId: this.primaryZoneId,
            resourceGroupId: this.resourceGroupId,
            securityIpList: this.securityIpList,
            solrNum: this.solrNum,
            solrSpec: this.solrSpec,
            standbyVSwitchId: this.standbyVSwitchId,
            standbyZoneId: this.standbyZoneId,
            streamNum: this.streamNum,
            streamSpec: this.streamSpec,
            tsdbNum: this.tsdbNum,
            tsdbSpec: this.tsdbSpec,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMultiZoneInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
