import * as ros from '@alicloud/ros-cdk-core';
import { RosHiTSDBInstance } from './tsdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHiTSDBInstance as HiTSDBInstanceProperty };

/**
 * Properties for defining a `HiTSDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
export interface HiTSDBInstanceProps {

    /**
     * Property instanceClass: The type of the instance.
     */
    readonly instanceClass: string | ros.IResolvable;

    /**
     * Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    readonly instanceStorage: number | ros.IResolvable;

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property diskCategory: The category of disk.
     */
    readonly diskCategory?: string | ros.IResolvable;

    /**
     * Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * Property instanceAlias: The alias of the instance.
     */
    readonly instanceAlias?: string | ros.IResolvable;

    /**
     * Property payType: The billing method. Valid values: 
     * - **prepay**: The prepay value indicates the subscription method.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1\/24"]
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::TSDB::HiTSDBInstance`, which is used to create a Time Series Database (TSDB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHiTSDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
export class HiTSDBInstance extends ros.Resource {

    /**
     * Attribute ConnectionString: Connection string of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * Attribute EngineType: Engine type of the instance.
     */
    public readonly attrEngineType: ros.IResolvable;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute OrderId: Order id of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Attribute PublicConnectionString: Public connection string of the instance.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * Attribute ReverseVpcIp: Reverse vpc ip of the instance.
     */
    public readonly attrReverseVpcIp: ros.IResolvable;

    /**
     * Attribute ReverseVpcPort: Reverse vpc port of the instance.
     */
    public readonly attrReverseVpcPort: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HiTSDBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosHiTSDBInstance = new RosHiTSDBInstance(this, id,  {
            instanceStorage: props.instanceStorage,
            zoneId: props.zoneId,
            vpcId: props.vpcId,
            instanceAlias: props.instanceAlias,
            pricingCycle: props.pricingCycle,
            securityIpList: props.securityIpList,
            vSwitchId: props.vSwitchId,
            diskCategory: props.diskCategory,
            instanceClass: props.instanceClass,
            duration: props.duration,
            payType: props.payType === undefined || props.payType === null ? 'POSTPAY' : props.payType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHiTSDBInstance;
        this.attrConnectionString = rosHiTSDBInstance.attrConnectionString;
        this.attrEngineType = rosHiTSDBInstance.attrEngineType;
        this.attrInstanceId = rosHiTSDBInstance.attrInstanceId;
        this.attrOrderId = rosHiTSDBInstance.attrOrderId;
        this.attrPublicConnectionString = rosHiTSDBInstance.attrPublicConnectionString;
        this.attrReverseVpcIp = rosHiTSDBInstance.attrReverseVpcIp;
        this.attrReverseVpcPort = rosHiTSDBInstance.attrReverseVpcPort;
    }
}
