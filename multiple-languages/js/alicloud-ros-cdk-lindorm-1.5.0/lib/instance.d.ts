import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './lindorm.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
 */
export interface InstanceProps {
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
     * Property coldStorage: The cold storage capacity of the instance. By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    readonly coldStorage?: number | ros.IResolvable;
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
     * Property instanceStorage: The storage capacity of the instance you want to create. Unit: GB.
     */
    readonly instanceStorage?: number | ros.IResolvable;
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
    /**
     * Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone in which you want to create the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Lindorm::Instance`, which is used to create a Lindorm instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
 */
export declare class Instance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: InstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    readonly attrAuthInfos: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    readonly attrJdbcUrlList: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
