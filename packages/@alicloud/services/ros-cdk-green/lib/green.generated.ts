// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInspectionConfigEnable`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
export interface RosInspectionConfigEnableProps {

    /**
     * @Property configType: The type of the configuration to be enabled for inspection.
     */
    readonly configType: string | ros.IResolvable;

    /**
     * @Property serviceCode: The code of the service to be enabled for inspection.
     */
    readonly serviceCode: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInspectionConfigEnableProps`
 *
 * @param properties - the TypeScript properties of a `RosInspectionConfigEnableProps`
 *
 * @returns the result of the validation.
 */
function RosInspectionConfigEnablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serviceCode', ros.requiredValidator)(properties.serviceCode));
    if(properties.serviceCode && (typeof properties.serviceCode) !== 'object') {
        errors.collect(ros.propertyValidator('serviceCode', ros.validateAllowedValues)({
          data: properties.serviceCode,
          allowedValues: ["query_security_check","response_security_check"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceCode', ros.validateString)(properties.serviceCode));
    errors.collect(ros.propertyValidator('configType', ros.requiredValidator)(properties.configType));
    if(properties.configType && (typeof properties.configType) !== 'object') {
        errors.collect(ros.propertyValidator('configType', ros.validateAllowedValues)({
          data: properties.configType,
          allowedValues: ["sensitive_data","prompt_attack"],
        }));
    }
    errors.collect(ros.propertyValidator('configType', ros.validateString)(properties.configType));
    return errors.wrap('supplied properties not correct for "RosInspectionConfigEnableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Green::InspectionConfigEnable` resource
 *
 * @param properties - the TypeScript properties of a `RosInspectionConfigEnableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Green::InspectionConfigEnable` resource.
 */
// @ts-ignore TS6133
function rosInspectionConfigEnablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInspectionConfigEnablePropsValidator(properties).assertSuccess();
    }
    return {
      'ConfigType': ros.stringToRosTemplate(properties.configType),
      'ServiceCode': ros.stringToRosTemplate(properties.serviceCode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Green::InspectionConfigEnable`.
 * @Note This class does not contain additional functions, so it is recommended to use the `InspectionConfigEnable` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-green-inspectionconfigenable
 */
export class RosInspectionConfigEnable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Green::InspectionConfigEnable";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configType: The type of the configuration to be enabled for inspection.
     */
    public configType: string | ros.IResolvable;

    /**
     * @Property serviceCode: The code of the service to be enabled for inspection.
     */
    public serviceCode: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInspectionConfigEnableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInspectionConfigEnable.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configType = props.configType;
        this.serviceCode = props.serviceCode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configType: this.configType,
            serviceCode: this.serviceCode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInspectionConfigEnablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
