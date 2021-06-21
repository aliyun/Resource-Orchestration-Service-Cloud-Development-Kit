// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidOrganization`
 */
export interface RosPidOrganizationProps {

    /**
     * @Property pidOrganizationName: PidOrganizationName
     */
    readonly pidOrganizationName: string | ros.IResolvable;

    /**
     * @Property parentPidOrganizationId: ParentPidOrganizationId
     */
    readonly parentPidOrganizationId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPidOrganizationProps`
 *
 * @param properties - the TypeScript properties of a `RosPidOrganizationProps`
 *
 * @returns the result of the validation.
 */
function RosPidOrganizationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pidOrganizationName', ros.requiredValidator)(properties.pidOrganizationName));
    errors.collect(ros.propertyValidator('pidOrganizationName', ros.validateString)(properties.pidOrganizationName));
    errors.collect(ros.propertyValidator('parentPidOrganizationId', ros.validateString)(properties.parentPidOrganizationId));
    return errors.wrap('supplied properties not correct for "RosPidOrganizationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BrainIndustrial::PidOrganization` resource
 *
 * @param properties - the TypeScript properties of a `RosPidOrganizationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BrainIndustrial::PidOrganization` resource.
 */
// @ts-ignore TS6133
function rosPidOrganizationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPidOrganizationPropsValidator(properties).assertSuccess();
    }
    return {
      PidOrganizationName: ros.stringToRosTemplate(properties.pidOrganizationName),
      ParentPidOrganizationId: ros.stringToRosTemplate(properties.parentPidOrganizationId),
    };
}

/**
 * A ROS template type:  `ALIYUN::BrainIndustrial::PidOrganization`
 */
export class RosPidOrganization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BrainIndustrial::PidOrganization";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ParentPidOrganizationId: ParentPidOrganizationId
     */
    public readonly attrParentPidOrganizationId: ros.IResolvable;

    /**
     * @Attribute PidOrganizationId: PidOrganizationId
     */
    public readonly attrPidOrganizationId: ros.IResolvable;

    /**
     * @Attribute PidOrganizationLevel: PidOrganizationLevel
     */
    public readonly attrPidOrganizationLevel: ros.IResolvable;

    /**
     * @Attribute PidOrganizationName: PidOrganizationName
     */
    public readonly attrPidOrganizationName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pidOrganizationName: PidOrganizationName
     */
    public pidOrganizationName: string | ros.IResolvable;

    /**
     * @Property parentPidOrganizationId: ParentPidOrganizationId
     */
    public parentPidOrganizationId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::BrainIndustrial::PidOrganization`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPidOrganizationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPidOrganization.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrParentPidOrganizationId = this.getAtt('ParentPidOrganizationId');
        this.attrPidOrganizationId = this.getAtt('PidOrganizationId');
        this.attrPidOrganizationLevel = this.getAtt('PidOrganizationLevel');
        this.attrPidOrganizationName = this.getAtt('PidOrganizationName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pidOrganizationName = props.pidOrganizationName;
        this.parentPidOrganizationId = props.parentPidOrganizationId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pidOrganizationName: this.pidOrganizationName,
            parentPidOrganizationId: this.parentPidOrganizationId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPidOrganizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::BrainIndustrial::PidProject`
 */
export interface RosPidProjectProps {

    /**
     * @Property pidOrganizationId: PidOrganizationId
     */
    readonly pidOrganizationId: string | ros.IResolvable;

    /**
     * @Property pidProjectName: PidProjectName
     */
    readonly pidProjectName: string | ros.IResolvable;

    /**
     * @Property pidProjectDesc: PidProjectDesc
     */
    readonly pidProjectDesc?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPidProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosPidProjectProps`
 *
 * @returns the result of the validation.
 */
function RosPidProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('pidProjectDesc', ros.validateString)(properties.pidProjectDesc));
    errors.collect(ros.propertyValidator('pidProjectName', ros.requiredValidator)(properties.pidProjectName));
    errors.collect(ros.propertyValidator('pidProjectName', ros.validateString)(properties.pidProjectName));
    errors.collect(ros.propertyValidator('pidOrganizationId', ros.requiredValidator)(properties.pidOrganizationId));
    errors.collect(ros.propertyValidator('pidOrganizationId', ros.validateString)(properties.pidOrganizationId));
    return errors.wrap('supplied properties not correct for "RosPidProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::BrainIndustrial::PidProject` resource
 *
 * @param properties - the TypeScript properties of a `RosPidProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::BrainIndustrial::PidProject` resource.
 */
// @ts-ignore TS6133
function rosPidProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPidProjectPropsValidator(properties).assertSuccess();
    }
    return {
      PidOrganizationId: ros.stringToRosTemplate(properties.pidOrganizationId),
      PidProjectName: ros.stringToRosTemplate(properties.pidProjectName),
      PidProjectDesc: ros.stringToRosTemplate(properties.pidProjectDesc),
    };
}

/**
 * A ROS template type:  `ALIYUN::BrainIndustrial::PidProject`
 */
export class RosPidProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::BrainIndustrial::PidProject";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute PidOrganizationId: PidOrganizationId
     */
    public readonly attrPidOrganizationId: ros.IResolvable;

    /**
     * @Attribute PidProjectDesc: PidProjectDesc
     */
    public readonly attrPidProjectDesc: ros.IResolvable;

    /**
     * @Attribute PidProjectId: PidProjectId
     */
    public readonly attrPidProjectId: ros.IResolvable;

    /**
     * @Attribute PidProjectName: PidProjectName
     */
    public readonly attrPidProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property pidOrganizationId: PidOrganizationId
     */
    public pidOrganizationId: string | ros.IResolvable;

    /**
     * @Property pidProjectName: PidProjectName
     */
    public pidProjectName: string | ros.IResolvable;

    /**
     * @Property pidProjectDesc: PidProjectDesc
     */
    public pidProjectDesc: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::BrainIndustrial::PidProject`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPidProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPidProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPidOrganizationId = this.getAtt('PidOrganizationId');
        this.attrPidProjectDesc = this.getAtt('PidProjectDesc');
        this.attrPidProjectId = this.getAtt('PidProjectId');
        this.attrPidProjectName = this.getAtt('PidProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.pidOrganizationId = props.pidOrganizationId;
        this.pidProjectName = props.pidProjectName;
        this.pidProjectDesc = props.pidProjectDesc;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            pidOrganizationId: this.pidOrganizationId,
            pidProjectName: this.pidProjectName,
            pidProjectDesc: this.pidProjectDesc,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPidProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
