// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAcl`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
 */
export interface RosAclProps {

    /**
     * @Property aclId: The ID of the ACL.
     */
    readonly aclId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAclProps`
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the result of the validation.
 */
function RosAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('aclId', ros.requiredValidator)(properties.aclId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GA::Acl` resource
 *
 * @param properties - the TypeScript properties of a `RosAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GA::Acl` resource.
 */
// @ts-ignore TS6133
function rosAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAclPropsValidator(properties).assertSuccess();
    }
    return {
      'AclId': ros.stringToRosTemplate(properties.aclId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GA::Acl`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Acl` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acl
 */
export class RosAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::Acl";

    /**
     * @Attribute AclEntries: The entries of the ACL.
     */
    public readonly attrAclEntries: ros.IResolvable;

    /**
     * @Attribute AclId: The ID of the ACL.
     */
    public readonly attrAclId: ros.IResolvable;

    /**
     * @Attribute AclName: The ID of the GA instance.
     */
    public readonly attrAclName: ros.IResolvable;

    /**
     * @Attribute AddressIPVersion: The ID of the network ACL.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The name of the network ACL.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tag of the ACL.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclId: The ID of the ACL.
     */
    public aclId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclEntries = this.getAtt('AclEntries');
        this.attrAclId = this.getAtt('AclId');
        this.attrAclName = this.getAtt('AclName');
        this.attrAddressIpVersion = this.getAtt('AddressIPVersion');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclId = props.aclId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclId: this.aclId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAcls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'AclId': ros.stringToRosTemplate(properties.aclId),
      'AclName': ros.stringToRosTemplate(properties.aclName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GA::Acls`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Acls` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export class RosAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::Acls";

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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
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
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclId: this.aclId,
            aclName: this.aclName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAclsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
 */
export interface RosBandwidthPackageProps {

    /**
     * @Property bandwidthPackageId: The Resource ID of the bandwidth.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.requiredValidator)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GA::BandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GA::BandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      'BandwidthPackageId': ros.stringToRosTemplate(properties.bandwidthPackageId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GA::BandwidthPackage`, which is used to query the information about a bandwidth plan.
 * @Note This class does not contain additional functions, so it is recommended to use the `BandwidthPackage` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackage
 */
export class RosBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::BandwidthPackage";

    /**
     * @Attribute AutoRenew: Whether to enable automatic renewal.
     */
    public readonly attrAutoRenew: ros.IResolvable;

    /**
     * @Attribute AutoRenewDuration: The duration of automatic renewal. Unit: Month.
     */
    public readonly attrAutoRenewDuration: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The bandwidth value of the bandwidth package. Unit: Mbps. Value range: 2~2000.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageId: The Resource ID of the bandwidth.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    /**
     * @Attribute BandwidthPackageName: The Resource name of the bandwidth.
     */
    public readonly attrBandwidthPackageName: ros.IResolvable;

    /**
     * @Attribute BandwidthType: Bandwidth type.
     */
    public readonly attrBandwidthType: ros.IResolvable;

    /**
     * @Attribute BillingType: Post-payment billing method.
     */
    public readonly attrBillingType: ros.IResolvable;

    /**
     * @Attribute CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages. The value is China-mainland only.
     */
    public readonly attrCbnGeographicRegionIdA: ros.IResolvable;

    /**
     * @Attribute CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages. The value is Global only.
     */
    public readonly attrCbnGeographicRegionIdB: ros.IResolvable;

    /**
     * @Attribute CreateTime: Bandwidth package creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: the description of bandwidth package.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: Bandwidth package expiration time.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute PaymentType: Type of payment.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute Ratio: 95 Billing guaranteed percentage. Value range: 30~100.
     */
    public readonly attrRatio: ros.IResolvable;

    /**
     * @Attribute RenewalStatus: Renewal status.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Type: The type of the bandwidth package.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidthPackageId: The Resource ID of the bandwidth.
     */
    public bandwidthPackageId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoRenew = this.getAtt('AutoRenew');
        this.attrAutoRenewDuration = this.getAtt('AutoRenewDuration');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');
        this.attrBandwidthPackageName = this.getAtt('BandwidthPackageName');
        this.attrBandwidthType = this.getAtt('BandwidthType');
        this.attrBillingType = this.getAtt('BillingType');
        this.attrCbnGeographicRegionIdA = this.getAtt('CbnGeographicRegionIdA');
        this.attrCbnGeographicRegionIdB = this.getAtt('CbnGeographicRegionIdB');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrRatio = this.getAtt('Ratio');
        this.attrRenewalStatus = this.getAtt('RenewalStatus');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidthPackageId = props.bandwidthPackageId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidthPackageId: this.bandwidthPackageId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
 */
export interface RosBandwidthPackagesProps {

    /**
     * @Property bandwidthPackageId: The Resource ID of the bandwidth.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property type: The type of the bandwidth package. Value:
     * Basic: Basic bandwidth package.
     * CrossDomain: cross-region acceleration package.
     * China Station only supports Basic.
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBandwidthPackagesProps`
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackagesProps`
 *
 * @returns the result of the validation.
 */
function RosBandwidthPackagesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["Basic","CrossDomain"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosBandwidthPackagesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::GA::BandwidthPackages` resource
 *
 * @param properties - the TypeScript properties of a `RosBandwidthPackagesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::GA::BandwidthPackages` resource.
 */
// @ts-ignore TS6133
function rosBandwidthPackagesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBandwidthPackagesPropsValidator(properties).assertSuccess();
    }
    return {
      'BandwidthPackageId': ros.stringToRosTemplate(properties.bandwidthPackageId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GA::BandwidthPackages`, which is used to query the information about bandwidth plans.
 * @Note This class does not contain additional functions, so it is recommended to use the `BandwidthPackages` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-bandwidthpackages
 */
export class RosBandwidthPackages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::BandwidthPackages";

    /**
     * @Attribute BandwidthPackageIds: The list of bandwidth package IDs.
     */
    public readonly attrBandwidthPackageIds: ros.IResolvable;

    /**
     * @Attribute BandwidthPackages: The list of bandwidth packages.
     */
    public readonly attrBandwidthPackages: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidthPackageId: The Resource ID of the bandwidth.
     */
    public bandwidthPackageId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property type: The type of the bandwidth package. Value:
     * Basic: Basic bandwidth package.
     * CrossDomain: cross-region acceleration package.
     * China Station only supports Basic.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBandwidthPackagesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBandwidthPackages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidthPackageIds = this.getAtt('BandwidthPackageIds');
        this.attrBandwidthPackages = this.getAtt('BandwidthPackages');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidthPackageId = props.bandwidthPackageId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidthPackageId: this.bandwidthPackageId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBandwidthPackagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
