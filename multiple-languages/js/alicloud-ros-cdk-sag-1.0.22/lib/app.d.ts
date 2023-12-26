import * as ros from '@alicloud/ros-cdk-core';
import { RosApp } from './sag.generated';
export { RosApp as AppProperty };
/**
 * Properties for defining a `App`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
 */
export interface AppProps {
    /**
     * Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances. Default value:
     * false. Valid values:
     * true: automatically pays the bills of SAG APP instances.
     * false: does not automatically pay the bills of SAG APP instances.
     * If you set the parameter to false, after you call this operation, go to Billing Management
     * of the SAG console to complete the payment, the instance can be created.
     */
    readonly autoPay: boolean | ros.IResolvable;
    /**
     * Property dataPlan: The quota of the traffic plan that the system allows each client account to use for
     * free each month. Unit: GB. Set the value to 5.
     * Note The system allows each client account to use 5 GB traffic plan for free.
     */
    readonly dataPlan: number | ros.IResolvable;
    /**
     * Property period: The subscription period of the SAG APP instance. Unit: months.
     * Valid values: 1~9, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;
    /**
     * Property userCount: The quota of client accounts for the SAG APP instance.
     * Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
     */
    readonly userCount: number | ros.IResolvable;
    /**
     * Property chargeType: The billing method of the SAG APP instance. Set the value to PREPAY.
     * This value indicates that the SAG APP instance is a subscription resource.
     */
    readonly chargeType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SAG::App`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosApp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-app
 */
export declare class App extends ros.Resource {
    /**
     * Attribute OrderId: The ID of the order that you placed to subscribe to the SAG APP instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute SmartAGId: The ID of the SAG APP instance.
     */
    readonly attrSmartAgId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AppProps, enableResourcePropertyConstraint?: boolean);
}
