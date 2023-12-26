// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDedicatedHostGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export interface RosDedicatedHostGroupsProps {

    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * @Property engine: Database Engine Type.
     */
    readonly engine?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CDDC::DedicatedHostGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CDDC::DedicatedHostGroups` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      Engine: ros.stringToRosTemplate(properties.engine),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDDC::DedicatedHostGroups`, which is used to query the resources in a dedicated cluster.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cddc-dedicatedhostgroups
 */
export class RosDedicatedHostGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDDC::DedicatedHostGroups";

    /**
     * @Attribute DedicatedHostGroupIds: The list of dedicated host group IDs.
     */
    public readonly attrDedicatedHostGroupIds: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroups: The list of dedicated host groups.
     */
    public readonly attrDedicatedHostGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostGroupId: Dedicated Host Group ID.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property engine: Database Engine Type.
     */
    public engine: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHostGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostGroupIds = this.getAtt('DedicatedHostGroupIds');
        this.attrDedicatedHostGroups = this.getAtt('DedicatedHostGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.engine = props.engine;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            engine: this.engine,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
