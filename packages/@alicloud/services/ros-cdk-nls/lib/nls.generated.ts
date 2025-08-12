// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export interface RosProjectProps {

    /**
     * @Property name: Name of the project.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: Description of the project.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property projectType: Type of the project.
     */
    readonly projectType?: string | ros.IResolvable;

    /**
     * @Property sdkType: Type of the SDK.
     */
    readonly sdkType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.sdkType && (typeof properties.sdkType) !== 'object') {
        errors.collect(ros.propertyValidator('sdkType', ros.validateAllowedValues)({
          data: properties.sdkType,
          allowedValues: ["ProTTSOfflineSDK","DeviceSideSolutionSDK","StandardTTSOfflineSDK"],
        }));
    }
    errors.collect(ros.propertyValidator('sdkType', ros.validateString)(properties.sdkType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.projectType && (typeof properties.projectType) !== 'object') {
        errors.collect(ros.propertyValidator('projectType', ros.validateAllowedValues)({
          data: properties.projectType,
          allowedValues: ["SpeechRecognitionOnly","SpeechRecognitionAndSynthesisAndAnalysis","DeviceSDKSolution","SpeechSynthesisOnly"],
        }));
    }
    errors.collect(ros.propertyValidator('projectType', ros.validateString)(properties.projectType));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NLS::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NLS::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Description': ros.stringToRosTemplate(properties.description),
      'ProjectType': ros.stringToRosTemplate(properties.projectType),
      'SdkType': ros.stringToRosTemplate(properties.sdkType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NLS::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nls-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NLS::Project";

    /**
     * @Attribute AppKey: The app key of the project.
     */
    public readonly attrAppKey: ros.IResolvable;

    /**
     * @Attribute ProjectId: The ID of the project.
     */
    public readonly attrProjectId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Name of the project.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: Description of the project.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property projectType: Type of the project.
     */
    public projectType: string | ros.IResolvable | undefined;

    /**
     * @Property sdkType: Type of the SDK.
     */
    public sdkType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppKey = this.getAtt('AppKey');
        this.attrProjectId = this.getAtt('ProjectId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
        this.projectType = props.projectType;
        this.sdkType = props.sdkType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
            projectType: this.projectType,
            sdkType: this.sdkType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
