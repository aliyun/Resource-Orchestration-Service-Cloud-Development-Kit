// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::BSS::WaitOrder`
 */
export interface RosWaitOrderProps {

    /**
     * @Property orderIds: A list of order ids.
     */
    readonly orderIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    readonly cancelOnDelete?: boolean | ros.IResolvable;

    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced. 
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    readonly waitForOrderProduced?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWaitOrderProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitOrderProps`
 *
 * @returns the result of the validation.
 */
function RosWaitOrderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cancelOnDelete', ros.validateBoolean)(properties.cancelOnDelete));
    errors.collect(ros.propertyValidator('orderIds', ros.requiredValidator)(properties.orderIds));
    if(properties.orderIds && (Array.isArray(properties.orderIds) || (typeof properties.orderIds) === 'string')) {
        errors.collect(ros.propertyValidator('orderIds', ros.validateLength)({
            data: properties.orderIds.length,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('orderIds', ros.listValidator(ros.validateAny))(properties.orderIds));
    errors.collect(ros.propertyValidator('waitForOrderProduced', ros.validateBoolean)(properties.waitForOrderProduced));
    return errors.wrap('supplied properties not correct for "RosWaitOrderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BSS::WaitOrder` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitOrderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BSS::WaitOrder` resource.
 */
// @ts-ignore TS6133
function rosWaitOrderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitOrderPropsValidator(properties).assertSuccess();
    }
    return {
      OrderIds: ros.listMapper(ros.objectToRosTemplate)(properties.orderIds),
      CancelOnDelete: ros.booleanToRosTemplate(properties.cancelOnDelete),
      WaitForOrderProduced: ros.booleanToRosTemplate(properties.waitForOrderProduced),
    };
}

/**
 * A ROS template type:  `ALIYUN::BSS::WaitOrder`
 */
export class RosWaitOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BSS::WaitOrder";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property orderIds: A list of order ids.
     */
    public orderIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property cancelOnDelete: Cancel order where delete the resource. Ignore the paid order. Default true
     */
    public cancelOnDelete: boolean | ros.IResolvable | undefined;

    /**
     * @Property waitForOrderProduced: Wait util all orders related ROS resources are produced. 
     * Support ALIYUN::ECS::PrepayInstance, ALIYUN::RDS::PrepayDBInstance, ALIYUN::REDIS::PrepayInstance, ALIYUN::SLB::LoadBalancer, ALIYUN::VPC::EIP, ALIYUN::VPC::VpnGateway.
     */
    public waitForOrderProduced: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::BSS::WaitOrder`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitOrderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitOrder.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.orderIds = props.orderIds;
        this.cancelOnDelete = props.cancelOnDelete;
        this.waitForOrderProduced = props.waitForOrderProduced;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            orderIds: this.orderIds,
            cancelOnDelete: this.cancelOnDelete,
            waitForOrderProduced: this.waitForOrderProduced,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitOrderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
