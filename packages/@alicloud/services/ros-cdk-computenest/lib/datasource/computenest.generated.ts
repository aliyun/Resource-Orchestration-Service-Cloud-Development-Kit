// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosServiceInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export interface RosServiceInstancesProps {

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosServiceInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosServiceInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosServiceInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosServiceInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ComputeNest::ServiceInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosServiceInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ComputeNest::ServiceInstances` resource.
 */
// @ts-ignore TS6133
function rosServiceInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServiceInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ComputeNest::ServiceInstances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServiceInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-computenest-serviceinstances
 */
export class RosServiceInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ComputeNest::ServiceInstances";

    /**
     * @Attribute ServiceInstanceIds: The list of service instance IDs.
     */
    public readonly attrServiceInstanceIds: ros.IResolvable;

    /**
     * @Attribute ServiceInstances: The list of service instances.
     */
    public readonly attrServiceInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServiceInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServiceInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrServiceInstanceIds = this.getAtt('ServiceInstanceIds');
        this.attrServiceInstances = this.getAtt('ServiceInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServiceInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
