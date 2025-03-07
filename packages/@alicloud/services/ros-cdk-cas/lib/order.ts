import * as ros from '@alicloud/ros-cdk-core';
import { RosOrder } from './cas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOrder as OrderProperty };

/**
 * Properties for defining a `Order`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
 */
export interface OrderProps {

    /**
     * Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     */
    readonly certBrand: string | ros.IResolvable;

    /**
     * Property certType: Certificate type. Valid values: DV, OV, EV.
     */
    readonly certType: string | ros.IResolvable;

    /**
     * Property domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
     */
    readonly domainCnt?: number | ros.IResolvable;

    /**
     * Property domainType: Domain type. Valid values: one, all, multiple.
     */
    readonly domainType?: string | ros.IResolvable;

    /**
     * Property period: Service time of the certificate, in year. Valid values: 1, 2, 3.
     * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property service: Whether enable other service. Valid values:
     * - NoNeed: Do not apply for any services.
     * - ExpeditedProduct: Request assistance services.
     * - DeployProduct: Deploy services.
     * - SM2DeployProduct: Deploy services with SM2 encryption.
     * - VipProduct: Request assistance and deployment services.
     * **Note:** This parameter is not supported by international stations.
     */
    readonly service?: string | ros.IResolvable;
}

/**
 * Represents a `Order`.
 */
export interface IOrder extends ros.IResource {
    readonly props: OrderProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CAS::Order`, which is used to create a certificate order.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOrder`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
 */
export class Order extends ros.Resource implements IOrder {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OrderProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OrderProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOrder = new RosOrder(this, id,  {
            domainCnt: props.domainCnt === undefined || props.domainCnt === null ? 1 : props.domainCnt,
            domainType: props.domainType === undefined || props.domainType === null ? 'one' : props.domainType,
            service: props.service === undefined || props.service === null ? 'NoNeed' : props.service,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            certType: props.certType,
            certBrand: props.certBrand,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOrder;
    }
}
