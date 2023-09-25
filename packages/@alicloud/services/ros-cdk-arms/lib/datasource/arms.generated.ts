// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::ARMS::Prometheis`
 */
export interface RosPrometheisProps {

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPrometheisProps`
 *
 * @param properties - the TypeScript properties of a `RosPrometheisProps`
 *
 * @returns the result of the validation.
 */
function RosPrometheisPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosPrometheisProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheis` resource
 *
 * @param properties - the TypeScript properties of a `RosPrometheisProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ARMS::Prometheis` resource.
 */
// @ts-ignore TS6133
function rosPrometheisPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrometheisPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::ARMS::Prometheis`
 */
export class RosPrometheis extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ARMS::Prometheis";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ClusterIds: The list of cluster IDs.
     */
    public readonly attrClusterIds: ros.IResolvable;

    /**
     * @Attribute Prometheis: The list of Prometheis.
     */
    public readonly attrPrometheis: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::ARMS::Prometheis`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrometheisProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrometheis.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrClusterIds = this.getAtt('ClusterIds');
        this.attrPrometheis = this.getAtt('Prometheis');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrometheisPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
