// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export interface RosAccessGroupsProps {

    /**
     * @Property accessGroupName: The name of the permission group.
     */
    readonly accessGroupName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosAccessGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    return errors.wrap('supplied properties not correct for "RosAccessGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::NAS::AccessGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::NAS::AccessGroups` resource.
 */
// @ts-ignore TS6133
function rosAccessGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      AccessGroupName: ros.stringToRosTemplate(properties.accessGroupName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::AccessGroups`, which is used to query the details of permission groups.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
export class RosAccessGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::AccessGroups";

    /**
     * @Attribute AccessGroupNames: The list of access group names.
     */
    public readonly attrAccessGroupNames: ros.IResolvable;

    /**
     * @Attribute AccessGroups: The list of access groups.
     */
    public readonly attrAccessGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: The name of the permission group.
     */
    public accessGroupName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessGroupNames = this.getAtt('AccessGroupNames');
        this.attrAccessGroups = this.getAtt('AccessGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
export interface RosFileSystemProps {

    /**
     * @Property fileSystemId: The ID of the file system to be created.
     */
    readonly fileSystemId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFileSystemProps`
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the result of the validation.
 */
function RosFileSystemPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    return errors.wrap('supplied properties not correct for "RosFileSystemProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::NAS::FileSystem` resource
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::NAS::FileSystem` resource.
 */
// @ts-ignore TS6133
function rosFileSystemPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFileSystemPropsValidator(properties).assertSuccess();
    }
    return {
      FileSystemId: ros.stringToRosTemplate(properties.fileSystemId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::FileSystem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystem
 */
export class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::FileSystem";

    /**
     * @Attribute Bandwidth: Maximum file system throughput.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute Capacity: File system capacity.
     */
    public readonly attrCapacity: ros.IResolvable;

    /**
     * @Attribute CreateTime: CreateTime.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: File system description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EncryptType: Whether the file system is encrypted.
     */
    public readonly attrEncryptType: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: ExpiredTime.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute FileSystemId: The ID of the file system to be created.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * @Attribute FileSystemType: File system type.
     */
    public readonly attrFileSystemType: ros.IResolvable;

    /**
     * @Attribute KmsKeyId: The ID of the KMS key.
     */
    public readonly attrKmsKeyId: ros.IResolvable;

    /**
     * @Attribute Ldap: Ldap.
     */
    public readonly attrLdap: ros.IResolvable;

    /**
     * @Attribute MeteredSize: MeteredSize.
     */
    public readonly attrMeteredSize: ros.IResolvable;

    /**
     * @Attribute PaymentType: ChargeType.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute ProtocolType: File transfer protocol type.
     */
    public readonly attrProtocolType: ros.IResolvable;

    /**
     * @Attribute StorageType: Storage type.
     */
    public readonly attrStorageType: ros.IResolvable;

    /**
     * @Attribute Tags: Tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemId: The ID of the file system to be created.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFileSystem.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrCapacity = this.getAtt('Capacity');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrEncryptType = this.getAtt('EncryptType');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrFileSystemId = this.getAtt('FileSystemId');
        this.attrFileSystemType = this.getAtt('FileSystemType');
        this.attrKmsKeyId = this.getAtt('KmsKeyId');
        this.attrLdap = this.getAtt('Ldap');
        this.attrMeteredSize = this.getAtt('MeteredSize');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrProtocolType = this.getAtt('ProtocolType');
        this.attrStorageType = this.getAtt('StorageType');
        this.attrTags = this.getAtt('Tags');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemId = props.fileSystemId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemId: this.fileSystemId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFileSystemPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosFileSystems`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
 */
export interface RosFileSystemsProps {

    /**
     * @Property fileSystemId: The ID of the file system to be created.
     */
    readonly fileSystemId?: string | ros.IResolvable;

    /**
     * @Property fileSystemType: File system type.
     * Value:
     * -standard (default): Universal NAS
     * -extreme: extreme NAS
     * -cpfs: file storage CPFS
     */
    readonly fileSystemType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFileSystemsProps`
 *
 * @param properties - the TypeScript properties of a `RosFileSystemsProps`
 *
 * @returns the result of the validation.
 */
function RosFileSystemsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.fileSystemType && (typeof properties.fileSystemType) !== 'object') {
        errors.collect(ros.propertyValidator('fileSystemType', ros.validateAllowedValues)({
          data: properties.fileSystemType,
          allowedValues: ["standard","extreme","cpfs"],
        }));
    }
    errors.collect(ros.propertyValidator('fileSystemType', ros.validateString)(properties.fileSystemType));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    return errors.wrap('supplied properties not correct for "RosFileSystemsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::NAS::FileSystems` resource
 *
 * @param properties - the TypeScript properties of a `RosFileSystemsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::NAS::FileSystems` resource.
 */
// @ts-ignore TS6133
function rosFileSystemsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFileSystemsPropsValidator(properties).assertSuccess();
    }
    return {
      FileSystemId: ros.stringToRosTemplate(properties.fileSystemId),
      FileSystemType: ros.stringToRosTemplate(properties.fileSystemType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::FileSystems`, which is used to query the details of file systems.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystems` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-filesystems
 */
export class RosFileSystems extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::FileSystems";

    /**
     * @Attribute FileSystemIds: The list of file system IDs.
     */
    public readonly attrFileSystemIds: ros.IResolvable;

    /**
     * @Attribute FileSystems: The list of file systems.
     */
    public readonly attrFileSystems: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemId: The ID of the file system to be created.
     */
    public fileSystemId: string | ros.IResolvable | undefined;

    /**
     * @Property fileSystemType: File system type.
     * Value:
     * -standard (default): Universal NAS
     * -extreme: extreme NAS
     * -cpfs: file storage CPFS
     */
    public fileSystemType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFileSystems.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileSystemIds = this.getAtt('FileSystemIds');
        this.attrFileSystems = this.getAtt('FileSystems');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemId = props.fileSystemId;
        this.fileSystemType = props.fileSystemType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemId: this.fileSystemId,
            fileSystemType: this.fileSystemType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFileSystemsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
export interface RosZonesProps {

    /**
     * @Property fileSystemType: The type of the file system. Default value: all. Valid values:
     * standard: General-purpose NAS file system
     * extreme: Extreme NAS file system
     * cpfs: CPFS file system
     */
    readonly fileSystemType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the result of the validation.
 */
function RosZonesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fileSystemType', ros.validateString)(properties.fileSystemType));
    return errors.wrap('supplied properties not correct for "RosZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::NAS::Zones` resource
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::NAS::Zones` resource.
 */
// @ts-ignore TS6133
function rosZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonesPropsValidator(properties).assertSuccess();
    }
    return {
      FileSystemType: ros.stringToRosTemplate(properties.fileSystemType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NAS::Zones`, which is used to query zones.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NAS::Zones";

    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * @Attribute Zones: The list of zones.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemType: The type of the file system. Default value: all. Valid values:
     * standard: General-purpose NAS file system
     * extreme: Extreme NAS file system
     * cpfs: CPFS file system
     */
    public fileSystemType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemType = props.fileSystemType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemType: this.fileSystemType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
