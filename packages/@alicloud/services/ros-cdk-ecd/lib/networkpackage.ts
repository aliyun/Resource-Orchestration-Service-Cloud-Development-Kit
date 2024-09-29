import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkPackage } from './ecd.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkPackage as NetworkPackageProperty };

/**
 * Properties for defining a `NetworkPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
 */
export interface NetworkPackageProps {

    /**
     * Property bandwidth: The maximum public bandwidth. Unit: Mbit\/s.
     * Valid values for the pay-by-data-transfer type (PayByTraffic): 10 to 200. 
     *  Valid values for the pay-by-bandwith type (PayByBandwidth): 10 to 1000.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * Property officeSiteId: The ID of the workspace.
     */
    readonly officeSiteId: string | ros.IResolvable;

    /**
     * Property autoPay: Specifies whether to enable automatic payment.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property internetChargeType: The metering method of the pay-as-you-go Internet access package. Valid values: 
     * PayByTraffic: pay-by-data-transfer.
     * PayByBandwidth: pay-by-bandwidth. 
     * Default value: PayByTraffic.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property payType: The billing method of the Internet access package. Enumeration Value:
     * PostPaid
     * PrePaid
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property period: The duration of the Internet access package.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of duration that you want to use for the Internet access package. Enumeration Value:
     * MonthYearWeek
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property promotionId: The ID of the sales promotion.
     */
    readonly promotionId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECD::NetworkPackage`, which is used to create a premium bandwidth plan for an office network.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecd-networkpackage
 */
export class NetworkPackage extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NetworkPackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NetworkPackageId: The ID of the Internet access package.
     */
    public readonly attrNetworkPackageId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkPackage = new RosNetworkPackage(this, id,  {
            officeSiteId: props.officeSiteId,
            promotionId: props.promotionId,
            bandwidth: props.bandwidth,
            autoRenew: props.autoRenew,
            period: props.period,
            autoPay: props.autoPay,
            payType: props.payType,
            periodUnit: props.periodUnit,
            internetChargeType: props.internetChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkPackage;
        this.attrNetworkPackageId = rosNetworkPackage.attrNetworkPackageId;
    }
}
