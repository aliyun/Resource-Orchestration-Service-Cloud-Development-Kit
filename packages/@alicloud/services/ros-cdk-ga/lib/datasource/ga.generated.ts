// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::GA::Acls`
 */
export interface RosAclsProps {

    /**
     * @Property aclId: The  ID of the Acl.
     */
    readonly aclId?: string | ros.IResolvable;

    /**
     * @Property aclName: The name of the acl.
     */
    readonly aclName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAclsProps`
 *
 * @param properties - the TypeScript properties of a `RosAclsProps`
 *
 * @returns the result of the validation.
 */
function RosAclsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    return errors.wrap('supplied properties not correct for "RosAclsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GA::Acls` resource
 *
 * @param properties - the TypeScript properties of a `RosAclsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GA::Acls` resource.
 */
// @ts-ignore TS6133
function rosAclsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclsPropsValidator(properties).assertSuccess();
    }
    return {
      AclId: ros.stringToRosTemplate(properties.aclId),
      AclName: ros.stringToRosTemplate(properties.aclName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `DATASOURCE::GA::Acls`
 */
export class RosAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::Acls";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclIds: The list of acl IDs.
     */
    public readonly attrAclIds: ros.IResolvable;

    /**
     * @Attribute Acls: The list of acls.
     */
    public readonly attrAcls: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: The  ID of the Acl.
     */
    public aclId: string | ros.IResolvable | undefined;

    /**
     * @Property aclName: The name of the acl.
     */
    public aclName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::GA::Acls`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAcls.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclIds = this.getAtt('AclIds');
        this.attrAcls = this.getAtt('Acls');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclId = props.aclId;
        this.aclName = props.aclName;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclId: this.aclId,
            aclName: this.aclName,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
