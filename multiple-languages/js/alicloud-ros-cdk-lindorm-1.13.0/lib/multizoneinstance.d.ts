import * as ros from '@alicloud/ros-cdk-core';
import { RosMultiZoneInstance } from './lindorm.generated';
export { RosMultiZoneInstance as MultiZoneInstanceProperty };
/**
 * Properties for defining a `MultiZoneInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-multizoneinstance
 */
export interface MultiZoneInstanceProps {
    /**
     * Property diskCategory: The storage type of the instance. Valid values:
     * cloud_efficiency: This instance uses the Standard type of storage.
     * cloud_ssd: This instance uses the Performance type of storage.
     * capacity_cloud_storage: This instance uses the Capacity type of storage.
     * local_ssd_pro: This instance uses local SSDs.
     * local_hdd_pro: This instance uses local HDDs.
     */
    readonly diskCategory: string | ros.IResolvable;
    /**
     * Property instanceName: The name of the instance that you want to create.
     */
    readonly instanceName: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the VPC in which you want to create the instance.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property arbiterVSwitchId: The ID of the vSwitch that is specified for the zone for the coordinate node of the instance. The vSwitch must be deployed in the zone specified by the ArbiterZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly arbiterVSwitchId?: string | ros.IResolvable;
    /**
     * Property arbiterZoneId: The ID of the zone for the coordinate node of the instance. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly arbiterZoneId?: string | ros.IResolvable;
    /**
     * Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    readonly coldStorage?: number | ros.IResolvable;
    /**
     * Property coreSingleStorage: The storage capacity of the disk of a single core node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly coreSingleStorage?: number | ros.IResolvable;
    /**
     * Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
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
     * Property deletionProtection: Specifies whether to enable the release protection feature for the instance. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property filestoreNum: The number of LindormDFS nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
     */
    readonly filestoreNum?: number | ros.IResolvable;
    /**
     * Property filestoreSpec: The specification of LindormDFS nodes in the instance. Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     */
    readonly filestoreSpec?: string | ros.IResolvable;
    /**
     * Property instanceChargeType: The billing method of the instance you want to create. Valid values:
     * PREPAY: subscription.
     * POSTPAY: pay-as-you-go.
     * Default value: POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property lindormNum: The number of LindormTable nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
     * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
     */
    readonly lindormNum?: number | ros.IResolvable;
    /**
     * Property lindormSpec: The specification of LindormTable nodes in the instance. Valid values:
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
     * Property logDiskCategory: The disk type of the log nodes. Valid values:
     * cloud_efficiency、cloud_essd.
     * This parameter is required if you want to create a multi-zone instance.
     */
    readonly logDiskCategory?: string | ros.IResolvable;
    /**
     * Property logNum: The number of the log nodes. Valid values: 4 to 400. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly logNum?: number | ros.IResolvable;
    /**
     * Property logSingleStorage: The storage capacity of the disk of a single log node. Valid values: 400 to 64000. Unit: GB. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly logSingleStorage?: number | ros.IResolvable;
    /**
     * Property logSpec: The type of the log nodes. Valid values:
     * lindorm.sn1.large: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     * lindorm.sn1.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
     * **This parameter is required if you want to create a multi-zone instance.
     */
    readonly logSpec?: string | ros.IResolvable;
    /**
     * Property multiZoneCombination: The combinations of zones that are available for the multi-zone instance. You can go to the purchase page of Lindorm to view the supported zone combinations.
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
     * Property period: The subscription period of the instance. The valid values of this parameter depend on the value of the PeriodUnit parameter.
     * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
     * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * Property periodUnit: The period based on which you are charged for the instance. Valid values:
     * Month: You are charged for the instance on a monthly basis.
     * Year: You are charged for the instance on a yearly basis.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * Property primaryVSwitchId: For multiple available regions, the virtual switch ID of the main available area must be under the available area corresponding to the Primaryzoneid.If you need to create a multi -available area example, this parameter must be filled.
     */
    readonly primaryVSwitchId?: string | ros.IResolvable;
    /**
     * Property primaryZoneId: For many available zone instances, the available area ID of the main available area.If you need to create a multi -available area example, this parameter must be filled.
     */
    readonly primaryZoneId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityIpList: The ip white list of instance.
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property solrNum: The number of LindormSearch nodes in the instance. Valid values: integers from 0 to 60.
     */
    readonly solrNum?: number | ros.IResolvable;
    /**
     * Property solrSpec: The specification of the LindormSearch nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    readonly solrSpec?: string | ros.IResolvable;
    /**
     * Property standbyVSwitchId: The ID of the vSwitch that is specified for the secondary zone of the instance. The vSwitch must be deployed in the zone specified by the StandbyZoneId parameter. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly standbyVSwitchId?: string | ros.IResolvable;
    /**
     * Property standbyZoneId: The ID of the secondary zone of the instance. **This parameter is required if you want to create a multi-zone instance.
     */
    readonly standbyZoneId?: string | ros.IResolvable;
    /**
     * Property streamNum: The number of LindormStream nodes in the instance. Valid values: integers from 0 to 90.
     */
    readonly streamNum?: number | ros.IResolvable;
    /**
     * Property streamSpec: The specification of LindormStream nodes in the instance. Valid values:
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
     * Property tsdbNum: The number of the LindormTSDB nodes in the instance. The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
     */
    readonly tsdbNum?: number | ros.IResolvable;
    /**
     * Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    readonly tsdbSpec?: string | ros.IResolvable;
}
/**
 * Represents a `MultiZoneInstance`.
 */
export interface IMultiZoneInstance extends ros.IResource {
    readonly props: MultiZoneInstanceProps;
    /**
     * Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    readonly attrAuthInfos: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    readonly attrJdbcUrlList: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Lindorm::MultiZoneInstance`, which is used to create a multi-zone Lindorm instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMultiZoneInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-multizoneinstance
 */
export declare class MultiZoneInstance extends ros.Resource implements IMultiZoneInstance {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MultiZoneInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    readonly attrAuthInfos: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    readonly attrJdbcUrlList: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MultiZoneInstanceProps, enableResourcePropertyConstraint?: boolean);
}
