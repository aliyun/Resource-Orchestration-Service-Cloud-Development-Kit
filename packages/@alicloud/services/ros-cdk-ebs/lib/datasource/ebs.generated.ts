// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::EBS::DiskReplicaGroups`
 */
export interface RosDiskReplicaGroupsProps {

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    readonly site?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('site', ros.validateString)(properties.site));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaGroups` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Site: ros.stringToRosTemplate(properties.site),
    };
}

/**
 * A ROS template type:  `DATASOURCE::EBS::DiskReplicaGroups`
 */
export class RosDiskReplicaGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaGroups";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DiskReplicaGroups: The list of disk replica groups.
     */
    public readonly attrDiskReplicaGroups: ros.IResolvable;

    /**
     * @Attribute ReplicaGroupIds: The list of replica group IDs.
     */
    public readonly attrReplicaGroupIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property site: Site information sources for replication pairs and consistent replication groups. Possible values:
     * - production: production site.
     * - backup: disaster recovery site.
     */
    public site: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::EBS::DiskReplicaGroups`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskReplicaGroups = this.getAtt('DiskReplicaGroups');
        this.attrReplicaGroupIds = this.getAtt('ReplicaGroupIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
        this.site = props.site;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
            site: this.site,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::EBS::DiskReplicaPairs`
 */
export interface RosDiskReplicaPairsProps {

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskReplicaPairsProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairsProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPairsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaPairs` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::EBS::DiskReplicaPairs` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaPairsPropsValidator(properties).assertSuccess();
    }
    return {
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::EBS::DiskReplicaPairs`
 */
export class RosDiskReplicaPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::EBS::DiskReplicaPairs";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DiskReplicaPairs: The list of disk replica pairs.
     */
    public readonly attrDiskReplicaPairs: ros.IResolvable;

    /**
     * @Attribute ReplicaPairIds: The list of replica pair IDs.
     */
    public readonly attrReplicaPairIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::EBS::DiskReplicaPairs`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaPairs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskReplicaPairs = this.getAtt('DiskReplicaPairs');
        this.attrReplicaPairIds = this.getAtt('ReplicaPairIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaPairsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
