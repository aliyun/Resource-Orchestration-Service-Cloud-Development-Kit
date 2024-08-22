// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosSearchLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export interface RosSearchLibProps {

    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    readonly searchLibName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSearchLibProps`
 *
 * @param properties - the TypeScript properties of a `RosSearchLibProps`
 *
 * @returns the result of the validation.
 */
function RosSearchLibPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('searchLibName', ros.requiredValidator)(properties.searchLibName));
    errors.collect(ros.propertyValidator('searchLibName', ros.validateString)(properties.searchLibName));
    return errors.wrap('supplied properties not correct for "RosSearchLibProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ICE::SearchLib` resource
 *
 * @param properties - the TypeScript properties of a `RosSearchLibProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ICE::SearchLib` resource.
 */
// @ts-ignore TS6133
function rosSearchLibPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSearchLibPropsValidator(properties).assertSuccess();
    }
    return {
      'SearchLibName': ros.stringToRosTemplate(properties.searchLibName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::SearchLib`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SearchLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export class RosSearchLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::SearchLib";

    /**
     * @Attribute SearchLibName: The name of the Search Lib.
     */
    public readonly attrSearchLibName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    public searchLibName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSearchLibProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSearchLib.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSearchLibName = this.getAtt('SearchLibName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.searchLibName = props.searchLibName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            searchLibName: this.searchLibName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSearchLibPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
