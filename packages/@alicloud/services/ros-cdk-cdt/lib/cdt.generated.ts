// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosResourcePackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
export interface RosResourcePackageProps {

    /**
     * @Property capacity: The capacity of the specified CDT resource package.
     */
    readonly capacity: number | ros.IResolvable;

    /**
     * @Property pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
     */
    readonly pack: string | ros.IResolvable;

    /**
     * @Property region: The region of the specified CDT resource package.
     */
    readonly region: string | ros.IResolvable;

    /**
     * @Property isp: The ISP of the specified CDT resource package.
     */
    readonly isp?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourcePackageProps`
 *
 * @param properties - the TypeScript properties of a `RosResourcePackageProps`
 *
 * @returns the result of the validation.
 */
function RosResourcePackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('capacity', ros.requiredValidator)(properties.capacity));
    if(properties.capacity && (typeof properties.capacity) !== 'object') {
        errors.collect(ros.propertyValidator('capacity', ros.validateRange)({
            data: properties.capacity,
            min: 50,
            max: 102400,
          }));
    }
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    errors.collect(ros.propertyValidator('region', ros.requiredValidator)(properties.region));
    if(properties.region && (typeof properties.region) !== 'object') {
        errors.collect(ros.propertyValidator('region', ros.validateAllowedValues)({
          data: properties.region,
          allowedValues: ["chinese-mainland","asia-pacific","europe","north-america","south-america","middleeast","finance-cloud"],
        }));
    }
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('pack', ros.requiredValidator)(properties.pack));
    errors.collect(ros.propertyValidator('pack', ros.validateString)(properties.pack));
    return errors.wrap('supplied properties not correct for "RosResourcePackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDT::ResourcePackage` resource
 *
 * @param properties - the TypeScript properties of a `RosResourcePackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDT::ResourcePackage` resource.
 */
// @ts-ignore TS6133
function rosResourcePackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourcePackagePropsValidator(properties).assertSuccess();
    }
    return {
      'Capacity': ros.numberToRosTemplate(properties.capacity),
      'Pack': ros.stringToRosTemplate(properties.pack),
      'Region': ros.stringToRosTemplate(properties.region),
      'ISP': ros.stringToRosTemplate(properties.isp),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDT::ResourcePackage`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourcePackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
 */
export class RosResourcePackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDT::ResourcePackage";

    /**
     * @Attribute InstanceId: The ID of the specified instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the specified order.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property capacity: The capacity of the specified CDT resource package.
     */
    public capacity: number | ros.IResolvable;

    /**
     * @Property pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
     */
    public pack: string | ros.IResolvable;

    /**
     * @Property region: The region of the specified CDT resource package.
     */
    public region: string | ros.IResolvable;

    /**
     * @Property isp: The ISP of the specified CDT resource package.
     */
    public isp: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourcePackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourcePackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.capacity = props.capacity;
        this.pack = props.pack;
        this.region = props.region;
        this.isp = props.isp;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            capacity: this.capacity,
            pack: this.pack,
            region: this.region,
            isp: this.isp,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourcePackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
