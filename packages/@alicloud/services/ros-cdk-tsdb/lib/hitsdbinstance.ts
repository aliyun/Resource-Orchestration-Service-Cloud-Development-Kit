import * as ros from '@alicloud/ros-cdk-core';
import { RosHiTSDBInstance } from './tsdb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosHiTSDBInstance as HiTSDBInstanceProperty };

/**
 * Properties for defining a `ALIYUN::TSDB::HiTSDBInstance`
 */
export interface HiTSDBInstanceProps {

    /**
     * Property instanceClass: The type of the instance. For more information, see Instance types:
     * tsdb.1x.basic: Basic Edition I
     * tsdb.3x.basic: Basic Edition II
     * tsdb.4x.basic: Basic Edition III
     * tsdb.12x.standard: Standard Edition I
     * tsdb.24x.standard: Standard Edition II
     * tsdb.48x.large: Ultimate Edition I
     * tsdb.96x.large: Ultimate Edition II and so on.
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
     * Property payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::TSDB::HiTSDBInstance`
 */
export class HiTSDBInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

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
     * Create a new `ALIYUN::TSDB::HiTSDBInstance`.
     *
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
