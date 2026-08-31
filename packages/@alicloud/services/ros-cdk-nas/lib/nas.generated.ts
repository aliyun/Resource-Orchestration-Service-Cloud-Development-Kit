// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosAccessGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export interface RosAccessGroupProps {

    /**
     * @Property accessGroupName: The name of the permission group.
     * Limits:
     * *   The name must be 3 to 64 characters in length.
     * *   The name must start with a letter and can contain letters, digits,
     * underscores (_), and hyphens (-).
     * *   The name must be different from the name of the default permission group.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;

    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    readonly accessGroupType: string | ros.IResolvable;

    /**
     * @Property description: The description of the permission group.
     * Limits:
     * *   By default, the description of a permission group is the same as the name of
     * the permission group. The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain digits, colons (:), underscores (_), and hyphens
     * (-).
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    readonly fileSystemType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the result of the validation.
 */
function RosAccessGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accessGroupType', ros.requiredValidator)(properties.accessGroupType));
    if(properties.accessGroupType && (typeof properties.accessGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('accessGroupType', ros.validateAllowedValues)({
          data: properties.accessGroupType,
          allowedValues: ["Vpc","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('accessGroupType', ros.validateString)(properties.accessGroupType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('accessGroupName', ros.requiredValidator)(properties.accessGroupName));
    if(properties.accessGroupName && (typeof properties.accessGroupName) !== 'object') {
        errors.collect(ros.propertyValidator('accessGroupName', ros.validateAllowedPattern)({
          data: properties.accessGroupName,
          reg: /^[_a-zA-Z0-9-]{3,64}$/
        }));
    }
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    if(properties.fileSystemType && (typeof properties.fileSystemType) !== 'object') {
        errors.collect(ros.propertyValidator('fileSystemType', ros.validateAllowedValues)({
          data: properties.fileSystemType,
          allowedValues: ["standard","extreme"],
        }));
    }
    errors.collect(ros.propertyValidator('fileSystemType', ros.validateString)(properties.fileSystemType));
    return errors.wrap('supplied properties not correct for "RosAccessGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessGroup` resource.
 */
// @ts-ignore TS6133
function rosAccessGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'AccessGroupName': ros.stringToRosTemplate(properties.accessGroupName),
      'AccessGroupType': ros.stringToRosTemplate(properties.accessGroupType),
      'Description': ros.stringToRosTemplate(properties.description),
      'FileSystemType': ros.stringToRosTemplate(properties.fileSystemType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::AccessGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessgroup
 */
export class RosAccessGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessGroup";

    /**
     * @Attribute AccessGroupName: Permission group name
     */
    public readonly attrAccessGroupName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: The name of the permission group.
     * Limits:
     * *   The name must be 3 to 64 characters in length.
     * *   The name must start with a letter and can contain letters, digits,
     * underscores (_), and hyphens (-).
     * *   The name must be different from the name of the default permission group.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    public accessGroupName: string | ros.IResolvable;

    /**
     * @Property accessGroupType: Permission group type, including the Vpc and Classic types
     */
    public accessGroupType: string | ros.IResolvable;

    /**
     * @Property description: The description of the permission group.
     * Limits:
     * *   By default, the description of a permission group is the same as the name of
     * the permission group. The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain digits, colons (:), underscores (_), and hyphens
     * (-).
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property fileSystemType: File system type.
     * Values: standard (default), extreme
     */
    public fileSystemType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessGroupName = this.getAtt('AccessGroupName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.accessGroupType = props.accessGroupType;
        this.description = props.description;
        this.fileSystemType = props.fileSystemType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            accessGroupType: this.accessGroupType,
            description: this.description,
            fileSystemType: this.fileSystemType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAccessRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
 */
export interface RosAccessRuleProps {

    /**
     * @Property accessGroupName: Permission group name
     */
    readonly accessGroupName: string | ros.IResolvable;

    /**
     * @Property fileSystemType: The type of file system. Values:
     * standard: the general NAS
     * extreme: the extreme NAS
     */
    readonly fileSystemType?: string | ros.IResolvable;

    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
     * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     * Only VPC private network is supported.
     * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
     */
    readonly ipv6SourceCidrIp?: string | ros.IResolvable;

    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    readonly priority?: number | ros.IResolvable;

    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    readonly rwAccessType?: string | ros.IResolvable;

    /**
     * @Property sourceCidrIp: Address or address segment
     */
    readonly sourceCidrIp?: string | ros.IResolvable;

    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    readonly userAccessType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccessRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the result of the validation.
 */
function RosAccessRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.userAccessType && (typeof properties.userAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('userAccessType', ros.validateAllowedValues)({
          data: properties.userAccessType,
          allowedValues: ["no_squash","root_squash","all_squash"],
        }));
    }
    errors.collect(ros.propertyValidator('userAccessType', ros.validateString)(properties.userAccessType));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    errors.collect(ros.propertyValidator('accessGroupName', ros.requiredValidator)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    if(properties.fileSystemType && (typeof properties.fileSystemType) !== 'object') {
        errors.collect(ros.propertyValidator('fileSystemType', ros.validateAllowedValues)({
          data: properties.fileSystemType,
          allowedValues: ["standard","extreme"],
        }));
    }
    errors.collect(ros.propertyValidator('fileSystemType', ros.validateString)(properties.fileSystemType));
    errors.collect(ros.propertyValidator('ipv6SourceCidrIp', ros.validateString)(properties.ipv6SourceCidrIp));
    if(properties.rwAccessType && (typeof properties.rwAccessType) !== 'object') {
        errors.collect(ros.propertyValidator('rwAccessType', ros.validateAllowedValues)({
          data: properties.rwAccessType,
          allowedValues: ["RDWR","RDONLY"],
        }));
    }
    errors.collect(ros.propertyValidator('rwAccessType', ros.validateString)(properties.rwAccessType));
    return errors.wrap('supplied properties not correct for "RosAccessRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessRule` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::AccessRule` resource.
 */
// @ts-ignore TS6133
function rosAccessRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessRulePropsValidator(properties).assertSuccess();
    }
    return {
      'AccessGroupName': ros.stringToRosTemplate(properties.accessGroupName),
      'FileSystemType': ros.stringToRosTemplate(properties.fileSystemType),
      'Ipv6SourceCidrIp': ros.stringToRosTemplate(properties.ipv6SourceCidrIp),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'RWAccessType': ros.stringToRosTemplate(properties.rwAccessType),
      'SourceCidrIp': ros.stringToRosTemplate(properties.sourceCidrIp),
      'UserAccessType': ros.stringToRosTemplate(properties.userAccessType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::AccessRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccessRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-accessrule
 */
export class RosAccessRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::AccessRule";

    /**
     * @Attribute AccessRuleId: Rule serial number
     */
    public readonly attrAccessRuleId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: Permission group name
     */
    public accessGroupName: string | ros.IResolvable;

    /**
     * @Property fileSystemType: The type of file system. Values:
     * standard: the general NAS
     * extreme: the extreme NAS
     */
    public fileSystemType: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6SourceCidrIp: Source IPv6 CIDR address segment. IP addresses in CIDR format and IPv6 format are supported.
     * Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     * Only VPC private network is supported.
     * IPv4 and IPv6 are mutually exclusive, and the types cannot be converted.
     */
    public ipv6SourceCidrIp: string | ros.IResolvable | undefined;

    /**
     * @Property priority: Priority level. Range: 1-100. Default value: 1
     */
    public priority: number | ros.IResolvable | undefined;

    /**
     * @Property rwAccessType: Read-write permission type: RDWR (default), RDONLY
     */
    public rwAccessType: string | ros.IResolvable | undefined;

    /**
     * @Property sourceCidrIp: Address or address segment
     */
    public sourceCidrIp: string | ros.IResolvable | undefined;

    /**
     * @Property userAccessType: User permission type: no_squash (default), root_squash, all_squash
     */
    public userAccessType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessRuleId = this.getAtt('AccessRuleId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.fileSystemType = props.fileSystemType;
        this.ipv6SourceCidrIp = props.ipv6SourceCidrIp;
        this.priority = props.priority;
        this.rwAccessType = props.rwAccessType;
        this.sourceCidrIp = props.sourceCidrIp;
        this.userAccessType = props.userAccessType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            fileSystemType: this.fileSystemType,
            ipv6SourceCidrIp: this.ipv6SourceCidrIp,
            priority: this.priority,
            rwAccessType: this.rwAccessType,
            sourceCidrIp: this.sourceCidrIp,
            userAccessType: this.userAccessType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDataFlow`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export interface RosDataFlowProps {

    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-0015\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property fsetId: The fileset ID.
     * >  This parameter is required for CPFS file systems.
     */
    readonly fsetId: string | ros.IResolvable;

    /**
     * @Property sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
     * id>:]<path>`.
     * Parameters:
     * *   storage type: Only OSS is supported.
     * *   account id (optional): the UID of the account of the source storage. This
     * parameter is required when you use OSS buckets across accounts.
     * *   path: the name of the OSS bucket. Limits:
     * *   The name can contain only lowercase letters, digits, and hyphens (-). The
     * name must start and end with a lowercase letter or digit.
     * *   The name can be up to 128 characters in length.
     * *   The name must be encoded in UTF-8.
     * > *   The OSS bucket must be an existing bucket in the region.
     * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
     */
    readonly sourceStorage: string | ros.IResolvable;

    /**
     * @Property throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
     * *   600
     * *   1200
     * *   1500
     * >  The data flow throughput must be less than the I\/O throughput of the file
     * system. This parameter is required for CPFS file systems.
     */
    readonly throughput: number | ros.IResolvable;

    /**
     * @Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    readonly autoRefreshInterval?: number | ros.IResolvable;

    /**
     * @Property autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
     * into the CPFS file system based on the policy.
     * *   None (default): Updated data in the source storage is not automatically
     * imported into the CPFS file system. You can run a data flow task to import the
     * updated data from the source storage.
     * *   ImportChanged: Updated data in the source storage is automatically imported
     * into the CPFS file system.
     * >  This parameter takes effect only for CPFS file systems.
     */
    readonly autoRefreshPolicy?: string | ros.IResolvable;

    /**
     * @Property autoRefreshs:
     */
    readonly autoRefreshs?: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of the dataflow.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    readonly sourceSecurityType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDataFlowProps`
 *
 * @param properties - the TypeScript properties of a `RosDataFlowProps`
 *
 * @returns the result of the validation.
 */
function RosDataFlowPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fsetId', ros.requiredValidator)(properties.fsetId));
    errors.collect(ros.propertyValidator('fsetId', ros.validateString)(properties.fsetId));
    errors.collect(ros.propertyValidator('sourceStorage', ros.requiredValidator)(properties.sourceStorage));
    if(properties.sourceStorage && (Array.isArray(properties.sourceStorage) || (typeof properties.sourceStorage) === 'string')) {
        errors.collect(ros.propertyValidator('sourceStorage', ros.validateLength)({
            data: properties.sourceStorage.length,
            min: undefined,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('sourceStorage', ros.validateString)(properties.sourceStorage));
    if(properties.description && (typeof properties.description) !== 'object') {
        errors.collect(ros.propertyValidator('description', ros.validateAllowedPattern)({
          data: properties.description,
          reg: /^(?!http:\/\/|https:\/\/)[a-zA-Z一-龥][0-9a-zA-Z:-_]{1,127}$/
        }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.sourceSecurityType && (typeof properties.sourceSecurityType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceSecurityType', ros.validateAllowedValues)({
          data: properties.sourceSecurityType,
          allowedValues: ["SSL"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceSecurityType', ros.validateString)(properties.sourceSecurityType));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('throughput', ros.requiredValidator)(properties.throughput));
    if(properties.throughput && (typeof properties.throughput) !== 'object') {
        errors.collect(ros.propertyValidator('throughput', ros.validateAllowedValues)({
          data: properties.throughput,
          allowedValues: [600,1200,1500],
        }));
    }
    errors.collect(ros.propertyValidator('throughput', ros.validateNumber)(properties.throughput));
    errors.collect(ros.propertyValidator('autoRefreshs', ros.listValidator(RosDataFlow_AutoRefreshsPropertyValidator))(properties.autoRefreshs));
    if(properties.autoRefreshPolicy && (typeof properties.autoRefreshPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('autoRefreshPolicy', ros.validateAllowedValues)({
          data: properties.autoRefreshPolicy,
          allowedValues: ["None","ImportChanged"],
        }));
    }
    errors.collect(ros.propertyValidator('autoRefreshPolicy', ros.validateString)(properties.autoRefreshPolicy));
    if(properties.autoRefreshInterval && (typeof properties.autoRefreshInterval) !== 'object') {
        errors.collect(ros.propertyValidator('autoRefreshInterval', ros.validateRange)({
            data: properties.autoRefreshInterval,
            min: 5,
            max: 525600,
          }));
    }
    errors.collect(ros.propertyValidator('autoRefreshInterval', ros.validateNumber)(properties.autoRefreshInterval));
    return errors.wrap('supplied properties not correct for "RosDataFlowProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::DataFlow` resource
 *
 * @param properties - the TypeScript properties of a `RosDataFlowProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::DataFlow` resource.
 */
// @ts-ignore TS6133
function rosDataFlowPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDataFlowPropsValidator(properties).assertSuccess();
    }
    return {
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'FsetId': ros.stringToRosTemplate(properties.fsetId),
      'SourceStorage': ros.stringToRosTemplate(properties.sourceStorage),
      'Throughput': ros.numberToRosTemplate(properties.throughput),
      'AutoRefreshInterval': ros.numberToRosTemplate(properties.autoRefreshInterval),
      'AutoRefreshPolicy': ros.stringToRosTemplate(properties.autoRefreshPolicy),
      'AutoRefreshs': ros.listMapper(rosDataFlowAutoRefreshsPropertyToRosTemplate)(properties.autoRefreshs),
      'Description': ros.stringToRosTemplate(properties.description),
      'SourceSecurityType': ros.stringToRosTemplate(properties.sourceSecurityType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::DataFlow`Creates a data flow between a Cloud Parallel File Storage (CPFS) file system and an Object Storage Service (OSS) bucket.
 * @Note This class does not contain additional functions, so it is recommended to use the `DataFlow` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-dataflow
 */
export class RosDataFlow extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::DataFlow";

    /**
     * @Attribute DataFlowId: Data flow ID.
     */
    public readonly attrDataFlowId: ros.IResolvable;

    /**
     * @Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-0015\*\*\*\*.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property fsetId: The fileset ID.
     * >  This parameter is required for CPFS file systems.
     */
    public fsetId: string | ros.IResolvable;

    /**
     * @Property sourceStorage: The access path of the source storage. Format: `<storage type>:\/\/[<account
     * id>:]<path>`.
     * Parameters:
     * *   storage type: Only OSS is supported.
     * *   account id (optional): the UID of the account of the source storage. This
     * parameter is required when you use OSS buckets across accounts.
     * *   path: the name of the OSS bucket. Limits:
     * *   The name can contain only lowercase letters, digits, and hyphens (-). The
     * name must start and end with a lowercase letter or digit.
     * *   The name can be up to 128 characters in length.
     * *   The name must be encoded in UTF-8.
     * > *   The OSS bucket must be an existing bucket in the region.
     * > *   Only CPFS for LINGJUN V2.6.0 and later support the account id parameter.
     */
    public sourceStorage: string | ros.IResolvable;

    /**
     * @Property throughput: The maximum data flow throughput. Unit: MB\/s. Valid values:
     * *   600
     * *   1200
     * *   1500
     * >  The data flow throughput must be less than the I\/O throughput of the file
     * system. This parameter is required for CPFS file systems.
     */
    public throughput: number | ros.IResolvable;

    /**
     * @Property autoRefreshInterval: The automatic update interval time, every time the interval, the CPFS checks whether there is a data update in the directory. If there is data update, start the automatic update task, unit: minute.
     * Scope of value: 5 ~ 525600, default value: 10.
     */
    public autoRefreshInterval: number | ros.IResolvable | undefined;

    /**
     * @Property autoRefreshPolicy: The automatic update policy. The updated data in the source storage is imported
     * into the CPFS file system based on the policy.
     * *   None (default): Updated data in the source storage is not automatically
     * imported into the CPFS file system. You can run a data flow task to import the
     * updated data from the source storage.
     * *   ImportChanged: Updated data in the source storage is automatically imported
     * into the CPFS file system.
     * >  This parameter takes effect only for CPFS file systems.
     */
    public autoRefreshPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property autoRefreshs:
     */
    public autoRefreshs: Array<RosDataFlow.AutoRefreshsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the dataflow.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property sourceSecurityType: The type of safety protection types of the source storage. If the source storage must be protected through safety protection, please specify the type of safety protection type storage.Value:
     * No (default value): It means that the source storage does not need to be accessed by safe protection.
     * SSL: Protective access through SSL certificates.
     */
    public sourceSecurityType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDataFlowProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDataFlow.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDataFlowId = this.getAtt('DataFlowId');
        this.attrFileSystemId = this.getAtt('FileSystemId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemId = props.fileSystemId;
        this.fsetId = props.fsetId;
        this.sourceStorage = props.sourceStorage;
        this.throughput = props.throughput;
        this.autoRefreshInterval = props.autoRefreshInterval;
        this.autoRefreshPolicy = props.autoRefreshPolicy;
        this.autoRefreshs = props.autoRefreshs;
        this.description = props.description;
        this.sourceSecurityType = props.sourceSecurityType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemId: this.fileSystemId,
            fsetId: this.fsetId,
            sourceStorage: this.sourceStorage,
            throughput: this.throughput,
            autoRefreshInterval: this.autoRefreshInterval,
            autoRefreshPolicy: this.autoRefreshPolicy,
            autoRefreshs: this.autoRefreshs,
            description: this.description,
            sourceSecurityType: this.sourceSecurityType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDataFlowPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDataFlow {
    /**
     * @stability external
     */
    export interface AutoRefreshsProperty {
        /**
         * @Property refreshPath: Automatic update directory, data modification incident stored at the CPFS registration source end, check whether the source data in the directory is updated and automatically imported the updated data.
     * The default is empty. Any data update stored at the source will not automatically import the CPFS. You need to import and update through manual tasks.
     * limit:
     * The length is 2 to 1024 characters.
     * Use UTF-8 encoding.
     * It must start with a positive oblique line (\/).
     * This directory must be existing directory on CPFS and must be located in the Fileset directory that flows in the data.
         */
        readonly refreshPath: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AutoRefreshsProperty`
 *
 * @param properties - the TypeScript properties of a `AutoRefreshsProperty`
 *
 * @returns the result of the validation.
 */
function RosDataFlow_AutoRefreshsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('refreshPath', ros.requiredValidator)(properties.refreshPath));
    errors.collect(ros.propertyValidator('refreshPath', ros.validateString)(properties.refreshPath));
    return errors.wrap('supplied properties not correct for "AutoRefreshsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::DataFlow.AutoRefreshs` resource
 *
 * @param properties - the TypeScript properties of a `AutoRefreshsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::DataFlow.AutoRefreshs` resource.
 */
// @ts-ignore TS6133
function rosDataFlowAutoRefreshsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDataFlow_AutoRefreshsPropertyValidator(properties).assertSuccess();
    return {
      'RefreshPath': ros.stringToRosTemplate(properties.refreshPath),
    };
}

/**
 * Properties for defining a `RosFileSystem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
export interface RosFileSystemProps {

    /**
     * @Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * @Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity、Premium(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     */
    readonly storageType: string | ros.IResolvable;

    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property capacity: Specify the capacity of the file system. Unit: GiB. This parameter is required
     * and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
     * Specify a value based on the specifications on the following buy page:
     * *   Extreme NAS (Pay-as-you-go)
     * *   CPFS (Pay-as-you-go)
     */
    readonly capacity?: number | ros.IResolvable;

    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property description: The description of the file system.
     * Limits:
     * *   Must be 2 to 128 characters in length.
     * *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
     * *   Can contain digits, colons (:), underscores (_), and hyphens (-).
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property encryptType: Specifies whether to encrypt data in the file system.
     * You can use the keys that are managed by Key Management Service (KMS) to encrypt
     * data in a file system. When you read and write the encrypted data, the data is
     * automatically decrypted.
     * Valid values:
     * *   0 (default): The data in the file system is not encrypted.
     * *   1: A NAS-managed key is used to encrypt the data in the file system. This
     * value is valid if FileSystemType is set to standard or extreme.
     * *   2: A KMS-managed key is used to encrypt the data in the file system. This
     * value is valid if the FileSystemType parameter is set to standard or extreme.
     * >
     * *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
     * keys.
     * *   General-purpose NAS: All regions support KMS-managed keys.
     */
    readonly encryptType?: number | ros.IResolvable;

    /**
     * @Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    readonly fileSystemType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property snapshotId: The snapshot ID.
     * This parameter is available only for advanced Extreme NAS file systems.
     * > You can create a file system from a snapshot. The version of the file system is
     * the same as that of the source file system. For example, the source file system
     * of the snapshot uses version 1. To create a file system of version 2, create File
     * System A from the snapshot and create File System B of version 2. Then copy the
     * data and migrate your business from File System A to File System B.
     */
    readonly snapshotId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosFileSystem.TagsProperty[];

    /**
     * @Property vpcId: The VPC ID.
     * *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
     * *   This parameter is reserved and not required if FileSystemType is set to
     * standard or extreme.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID.
     * *   This parameter is required if FileSystemType is set to cpfs.
     * *   If FileSystemType is not set to cpfs, this parameter is reserved and not
     * required.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone.
     * Each region has multiple isolated locations known as zones. Each zone has its own
     * independent power supply and network.
     * This parameter is not required if FileSystemType is set to standard. By default,
     * a random zone is selected based on the protocol type and storage type.
     * This parameter is required if FileSystemType is set to extreme or cpfs.
     * >
     * *   An Elastic Compute Service (ECS) instance and a file system that reside in
     * different zones of the same region can access each other.
     * *   We recommend that you select the zone where the ECS instance resides. This
     * prevents cross-zone latency between the file system and the ECS instance.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('storageType', ros.requiredValidator)(properties.storageType));
    if(properties.storageType && (typeof properties.storageType) !== 'object') {
        errors.collect(ros.propertyValidator('storageType', ros.validateAllowedValues)({
          data: properties.storageType,
          allowedValues: ["Performance","Capacity","Premium","standard","advance","advance_100","advance_200"],
        }));
    }
    errors.collect(ros.propertyValidator('storageType', ros.validateString)(properties.storageType));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.encryptType && (typeof properties.encryptType) !== 'object') {
        errors.collect(ros.propertyValidator('encryptType', ros.validateAllowedValues)({
          data: properties.encryptType,
          allowedValues: [0,1,2],
        }));
    }
    errors.collect(ros.propertyValidator('encryptType', ros.validateNumber)(properties.encryptType));
    errors.collect(ros.propertyValidator('capacity', ros.validateNumber)(properties.capacity));
    errors.collect(ros.propertyValidator('protocolType', ros.requiredValidator)(properties.protocolType));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["NFS","SMB","cpfs"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    if(properties.fileSystemType && (typeof properties.fileSystemType) !== 'object') {
        errors.collect(ros.propertyValidator('fileSystemType', ros.validateAllowedValues)({
          data: properties.fileSystemType,
          allowedValues: ["standard","extreme","cpfs"],
        }));
    }
    errors.collect(ros.propertyValidator('fileSystemType', ros.validateString)(properties.fileSystemType));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosFileSystem_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosFileSystemProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::FileSystem` resource
 *
 * @param properties - the TypeScript properties of a `RosFileSystemProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::FileSystem` resource.
 */
// @ts-ignore TS6133
function rosFileSystemPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFileSystemPropsValidator(properties).assertSuccess();
    }
    return {
      'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
      'StorageType': ros.stringToRosTemplate(properties.storageType),
      'Bandwidth': ros.numberToRosTemplate(properties.bandwidth),
      'Capacity': ros.numberToRosTemplate(properties.capacity),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'DeletionForce': ros.booleanToRosTemplate(properties.deletionForce),
      'Description': ros.stringToRosTemplate(properties.description),
      'Duration': ros.numberToRosTemplate(properties.duration),
      'EncryptType': ros.numberToRosTemplate(properties.encryptType),
      'FileSystemType': ros.stringToRosTemplate(properties.fileSystemType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SnapshotId': ros.stringToRosTemplate(properties.snapshotId),
      'Tags': ros.listMapper(rosFileSystemTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::FileSystem`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FileSystem` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-filesystem
 */
export class RosFileSystem extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::FileSystem";

    /**
     * @Attribute FileSystemId: ID of the file system created
     */
    public readonly attrFileSystemId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property protocolType: Type of protocol used. Valid values: NFS, SMB, cpfs.
     */
    public protocolType: string | ros.IResolvable;

    /**
     * @Property storageType: The storage type of the file System.
     * Valid values:
     * Performance、Capacity、Premium(Available when the file_system_type is standard)
     * standard、advance(Available when the file_system_type is extreme)
     * advance_100、advance_200(Available when the file_system_type is cpfs)
     */
    public storageType: string | ros.IResolvable;

    /**
     * @Property bandwidth: Maximum file system throughput, unit is MB\/s. Required and valid only when FileSystemType=cpfs.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property capacity: Specify the capacity of the file system. Unit: GiB. This parameter is required
     * and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
     * Specify a value based on the specifications on the following buy page:
     * *   Extreme NAS (Pay-as-you-go)
     * *   CPFS (Pay-as-you-go)
     */
    public capacity: number | ros.IResolvable | undefined;

    /**
     * @Property chargeType: Type of payment:
     * PayAsYouGo (pay as you go)
     * Subscription
     */
    public chargeType: string | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether delete all mount targets on the file system and then delete file system. Default is false
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the file system.
     * Limits:
     * *   Must be 2 to 128 characters in length.
     * *   Must start with a letter but cannot start with `http:\/\/` or `https:\/\/`.
     * *   Can contain digits, colons (:), underscores (_), and hyphens (-).
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property duration: The period of subscription in months. Required and valid when ChargeType is Subscription.
     * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property encryptType: Specifies whether to encrypt data in the file system.
     * You can use the keys that are managed by Key Management Service (KMS) to encrypt
     * data in a file system. When you read and write the encrypted data, the data is
     * automatically decrypted.
     * Valid values:
     * *   0 (default): The data in the file system is not encrypted.
     * *   1: A NAS-managed key is used to encrypt the data in the file system. This
     * value is valid if FileSystemType is set to standard or extreme.
     * *   2: A KMS-managed key is used to encrypt the data in the file system. This
     * value is valid if the FileSystemType parameter is set to standard or extreme.
     * >
     * *   Extreme NAS: All regions except China East 1 Finance support KMS-managed
     * keys.
     * *   General-purpose NAS: All regions support KMS-managed keys.
     */
    public encryptType: number | ros.IResolvable | undefined;

    /**
     * @Property fileSystemType: File system type. Allowed values: standard(default), extreme, cpfs
     */
    public fileSystemType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: The snapshot ID.
     * This parameter is available only for advanced Extreme NAS file systems.
     * > You can create a file system from a snapshot. The version of the file system is
     * the same as that of the source file system. For example, the source file system
     * of the snapshot uses version 1. To create a file system of version 2, create File
     * System A from the snapshot and create File System B of version 2. Then copy the
     * data and migrate your business from File System A to File System B.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to filesystem. Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosFileSystem.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The VPC ID.
     * *   This parameter is required if FileSystemType is set to cpfs or cpfsse.
     * *   This parameter is reserved and not required if FileSystemType is set to
     * standard or extreme.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch ID.
     * *   This parameter is required if FileSystemType is set to cpfs.
     * *   If FileSystemType is not set to cpfs, this parameter is reserved and not
     * required.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone.
     * Each region has multiple isolated locations known as zones. Each zone has its own
     * independent power supply and network.
     * This parameter is not required if FileSystemType is set to standard. By default,
     * a random zone is selected based on the protocol type and storage type.
     * This parameter is required if FileSystemType is set to extreme or cpfs.
     * >
     * *   An Elastic Compute Service (ECS) instance and a file system that reside in
     * different zones of the same region can access each other.
     * *   We recommend that you select the zone where the ECS instance resides. This
     * prevents cross-zone latency between the file system and the ECS instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFileSystemProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFileSystem.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileSystemId = this.getAtt('FileSystemId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.protocolType = props.protocolType;
        this.storageType = props.storageType;
        this.bandwidth = props.bandwidth;
        this.capacity = props.capacity;
        this.chargeType = props.chargeType;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.duration = props.duration;
        this.encryptType = props.encryptType;
        this.fileSystemType = props.fileSystemType;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            protocolType: this.protocolType,
            storageType: this.storageType,
            bandwidth: this.bandwidth,
            capacity: this.capacity,
            chargeType: this.chargeType,
            deletionForce: this.deletionForce,
            description: this.description,
            duration: this.duration,
            encryptType: this.encryptType,
            fileSystemType: this.fileSystemType,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFileSystemPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosFileSystem {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosFileSystem_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::FileSystem.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::FileSystem.Tags` resource.
 */
// @ts-ignore TS6133
function rosFileSystemTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosFileSystem_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosFileset`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export interface RosFilesetProps {

    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-099394bd928c\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-290w65p03ok64ya\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property fileSystemPath: The absolute path of the fileset.
     * *   CPFS path limits.
     * *   The parent directory of the path that you specify must be an existing
     * directory in the file system.
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   Path limit of CPFS for Lingjun
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   The fileset path must be a new path and cannot be an existing path. Fileset
     * paths cannot be renamed and cannot be symbolic links.
     * *   The maximum depth supported by a fileset path is eight levels. The depth of
     * the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
     * has three levels.
     * *   If the fileset path is a multi-level path, the parent directory must be an
     * existing directory.
     * *   Nested filesets are not supported. If a fileset is specified as a parent
     * directory, its subdirectory cannot be a fileset. A fileset path supports only one
     * quota.
     * *   The path cannot exceed 990 characters in length.
     */
    readonly fileSystemPath: string | ros.IResolvable;

    /**
     * @Property description: The description of the fileset.
     * *   The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     * *   The description can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFilesetProps`
 *
 * @param properties - the TypeScript properties of a `RosFilesetProps`
 *
 * @returns the result of the validation.
 */
function RosFilesetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fileSystemPath', ros.requiredValidator)(properties.fileSystemPath));
    errors.collect(ros.propertyValidator('fileSystemPath', ros.validateString)(properties.fileSystemPath));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    return errors.wrap('supplied properties not correct for "RosFilesetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::Fileset` resource
 *
 * @param properties - the TypeScript properties of a `RosFilesetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::Fileset` resource.
 */
// @ts-ignore TS6133
function rosFilesetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFilesetPropsValidator(properties).assertSuccess();
    }
    return {
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'FileSystemPath': ros.stringToRosTemplate(properties.fileSystemPath),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::Fileset`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Fileset` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
export class RosFileset extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::Fileset";

    /**
     * @Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * @Attribute FileSystemPath: File system path.
     */
    public readonly attrFileSystemPath: ros.IResolvable;

    /**
     * @Attribute FsetId: Fileset ID.
     */
    public readonly attrFsetId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemId: The ID of the file system.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-099394bd928c\*\*\*\*.
     * *   The IDs of CPFS for Lingjun file systems must start with `bmcpfs-`. Example:
     * bmcpfs-290w65p03ok64ya\*\*\*\*.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property fileSystemPath: The absolute path of the fileset.
     * *   CPFS path limits.
     * *   The parent directory of the path that you specify must be an existing
     * directory in the file system.
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   Path limit of CPFS for Lingjun
     * *   The path must be 2 to 1024 characters in length.
     * *   The path must start and end with a forward slash (\/).
     * *   The fileset path must be a new path and cannot be an existing path. Fileset
     * paths cannot be renamed and cannot be symbolic links.
     * *   The maximum depth supported by a fileset path is eight levels. The depth of
     * the root directory \/ is 0 levels. For example, the fileset path \/test\/aaa\/ccc\/
     * has three levels.
     * *   If the fileset path is a multi-level path, the parent directory must be an
     * existing directory.
     * *   Nested filesets are not supported. If a fileset is specified as a parent
     * directory, its subdirectory cannot be a fileset. A fileset path supports only one
     * quota.
     * *   The path cannot exceed 990 characters in length.
     */
    public fileSystemPath: string | ros.IResolvable;

    /**
     * @Property description: The description of the fileset.
     * *   The description must be 2 to 128 characters in length.
     * *   The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     * *   The description can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFilesetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFileset.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileSystemId = this.getAtt('FileSystemId');
        this.attrFileSystemPath = this.getAtt('FileSystemPath');
        this.attrFsetId = this.getAtt('FsetId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemId = props.fileSystemId;
        this.fileSystemPath = props.fileSystemPath;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemId: this.fileSystemId,
            fileSystemPath: this.fileSystemPath,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFilesetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosMountTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
 */
export interface RosMountTargetProps {

    /**
     * @Property accessGroupName: The name of the permission group.
     * This parameter is required if you create a mount target for a General-purpose NAS
     * file system or an Extreme NAS file system.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    readonly accessGroupName: string | ros.IResolvable;

    /**
     * @Property fileSystemId: The ID of the file system.
     * *   Sample ID of a General-purpose NAS file system: 31a8e4\*\*\*\*.
     * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example,
     * extreme-0015\*\*\*\*.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    readonly networkType: string | ros.IResolvable;

    /**
     * @Property enableIpv6: Whether to create an IPv6 mount point.Value:
     * true: create
     * false (default): do not create
     * Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;

    /**
     * @Property securityGroupId: Security group Id
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property status: Status, including Active and Inactive
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC network ID
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMountTargetProps`
 *
 * @param properties - the TypeScript properties of a `RosMountTargetProps`
 *
 * @returns the result of the validation.
 */
function RosMountTargetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["Active","Inactive"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('networkType', ros.requiredValidator)(properties.networkType));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["Vpc","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('accessGroupName', ros.requiredValidator)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('enableIpv6', ros.validateBoolean)(properties.enableIpv6));
    return errors.wrap('supplied properties not correct for "RosMountTargetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::MountTarget` resource
 *
 * @param properties - the TypeScript properties of a `RosMountTargetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::MountTarget` resource.
 */
// @ts-ignore TS6133
function rosMountTargetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMountTargetPropsValidator(properties).assertSuccess();
    }
    return {
      'AccessGroupName': ros.stringToRosTemplate(properties.accessGroupName),
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'EnableIpv6': ros.booleanToRosTemplate(properties.enableIpv6),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'Status': ros.stringToRosTemplate(properties.status),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::MountTarget`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MountTarget` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-mounttarget
 */
export class RosMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::MountTarget";

    /**
     * @Attribute MountTargetDomain: Mount point domain name
     */
    public readonly attrMountTargetDomain: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accessGroupName: The name of the permission group.
     * This parameter is required if you create a mount target for a General-purpose NAS
     * file system or an Extreme NAS file system.
     * The default permission group for virtual private clouds (VPCs) is named
     * DEFAULT_VPC_GROUP_NAME.
     */
    public accessGroupName: string | ros.IResolvable;

    /**
     * @Property fileSystemId: The ID of the file system.
     * *   Sample ID of a General-purpose NAS file system: 31a8e4\*\*\*\*.
     * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example,
     * extreme-0015\*\*\*\*.
     * *   The IDs of CPFS file systems must start with `cpfs-`. Example:
     * cpfs-125487\*\*\*\*.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property networkType: Network type, including Vpc and Classic networks.
     */
    public networkType: string | ros.IResolvable;

    /**
     * @Property enableIpv6: Whether to create an IPv6 mount point.Value:
     * true: create
     * false (default): do not create
     * Note Currently, only the ultra-fast NAS in mainland China supports the IPv6 function, and the file system needs to enable the IPv6 function.
     */
    public enableIpv6: boolean | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: Security group Id
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property status: Status, including Active and Inactive
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: VPC network ID
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: VSwitch ID.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMountTargetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMountTarget.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMountTargetDomain = this.getAtt('MountTargetDomain');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accessGroupName = props.accessGroupName;
        this.fileSystemId = props.fileSystemId;
        this.networkType = props.networkType;
        this.enableIpv6 = props.enableIpv6;
        this.securityGroupId = props.securityGroupId;
        this.status = props.status;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accessGroupName: this.accessGroupName,
            fileSystemId: this.fileSystemId,
            networkType: this.networkType,
            enableIpv6: this.enableIpv6,
            securityGroupId: this.securityGroupId,
            status: this.status,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMountTargetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosProtocolMountTarget`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export interface RosProtocolMountTargetProps {

    /**
     * @Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property protocolServiceId: Agreement service ID.
     */
    readonly protocolServiceId: string | ros.IResolvable;

    /**
     * @Property vpcId: Proper network ID exported by the protocol service.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the export directory.
     * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
     * the VpcId is set, this field is required.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    readonly accessGroupName?: string | ros.IResolvable;

    /**
     * @Property description: The description of the export directory for the protocol service. The name of the
     * export directory appears in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property fsetId: Fileset ID needs to be exported.
     * limit:
     * The Fileset must exist.
     * A Fileset allows only one export directory.
     * Fileset and Path can only specify one.
     */
    readonly fsetId?: string | ros.IResolvable;

    /**
     * @Property path: The path of the CPFS directory that you want to export.
     * Limits:
     * *   The directory already exists in the CPFS file system.
     * *   You can create only one export directory for a directory.
     * *   You can specify either a fileset or a path.
     * Format:
     * *   The path must be 1 to 1,024 characters in length.
     * *   The path must be encoded in UTF-8.
     * *   The path must start and end with a forward slash (\/). The root directory is
     * `\/`.
     */
    readonly path?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProtocolMountTargetProps`
 *
 * @param properties - the TypeScript properties of a `RosProtocolMountTargetProps`
 *
 * @returns the result of the validation.
 */
function RosProtocolMountTargetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fsetId', ros.validateString)(properties.fsetId));
    if(properties.path && (Array.isArray(properties.path) || (typeof properties.path) === 'string')) {
        errors.collect(ros.propertyValidator('path', ros.validateLength)({
            data: properties.path.length,
            min: 1,
            max: 1024,
          }));
    }
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('accessGroupName', ros.validateString)(properties.accessGroupName));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('protocolServiceId', ros.requiredValidator)(properties.protocolServiceId));
    errors.collect(ros.propertyValidator('protocolServiceId', ros.validateString)(properties.protocolServiceId));
    return errors.wrap('supplied properties not correct for "RosProtocolMountTargetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::ProtocolMountTarget` resource
 *
 * @param properties - the TypeScript properties of a `RosProtocolMountTargetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::ProtocolMountTarget` resource.
 */
// @ts-ignore TS6133
function rosProtocolMountTargetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProtocolMountTargetPropsValidator(properties).assertSuccess();
    }
    return {
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'ProtocolServiceId': ros.stringToRosTemplate(properties.protocolServiceId),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'AccessGroupName': ros.stringToRosTemplate(properties.accessGroupName),
      'Description': ros.stringToRosTemplate(properties.description),
      'FsetId': ros.stringToRosTemplate(properties.fsetId),
      'Path': ros.stringToRosTemplate(properties.path),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::ProtocolMountTarget`Creates an export directory for a NAS protocol service.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProtocolMountTarget` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolmounttarget
 */
export class RosProtocolMountTarget extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::ProtocolMountTarget";

    /**
     * @Attribute ExportId: The protocol service exports directory ID.
     */
    public readonly attrExportId: ros.IResolvable;

    /**
     * @Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * @Attribute ProtocolMountTargetDomain: The protocol mount target domain.
     */
    public readonly attrProtocolMountTargetDomain: ros.IResolvable;

    /**
     * @Attribute ProtocolServiceId: Protocol service ID.
     */
    public readonly attrProtocolServiceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemId: File system ID.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property protocolServiceId: Agreement service ID.
     */
    public protocolServiceId: string | ros.IResolvable;

    /**
     * @Property vpcId: Proper network ID exported by the protocol service.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The vSwitch ID of the export directory.
     * If the storage redundancy type of the file system is not zone-redundant (ZRS) and
     * the VpcId is set, this field is required.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property accessGroupName: The name of the permissions group.
     * Default value: DEFAULT_VPC_GROUP_NAME
     */
    public accessGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the export directory for the protocol service. The name of the
     * export directory appears in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property fsetId: Fileset ID needs to be exported.
     * limit:
     * The Fileset must exist.
     * A Fileset allows only one export directory.
     * Fileset and Path can only specify one.
     */
    public fsetId: string | ros.IResolvable | undefined;

    /**
     * @Property path: The path of the CPFS directory that you want to export.
     * Limits:
     * *   The directory already exists in the CPFS file system.
     * *   You can create only one export directory for a directory.
     * *   You can specify either a fileset or a path.
     * Format:
     * *   The path must be 1 to 1,024 characters in length.
     * *   The path must be encoded in UTF-8.
     * *   The path must start and end with a forward slash (\/). The root directory is
     * `\/`.
     */
    public path: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProtocolMountTargetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProtocolMountTarget.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExportId = this.getAtt('ExportId');
        this.attrFileSystemId = this.getAtt('FileSystemId');
        this.attrProtocolMountTargetDomain = this.getAtt('ProtocolMountTargetDomain');
        this.attrProtocolServiceId = this.getAtt('ProtocolServiceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemId = props.fileSystemId;
        this.protocolServiceId = props.protocolServiceId;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.accessGroupName = props.accessGroupName;
        this.description = props.description;
        this.fsetId = props.fsetId;
        this.path = props.path;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemId: this.fileSystemId,
            protocolServiceId: this.protocolServiceId,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            accessGroupName: this.accessGroupName,
            description: this.description,
            fsetId: this.fsetId,
            path: this.path,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProtocolMountTargetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosProtocolService`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
 */
export interface RosProtocolServiceProps {

    /**
     * @Property fileSystemId: File system ID.
     */
    readonly fileSystemId: string | ros.IResolvable;

    /**
     * @Property protocolSpec: The spec of protocol service. Default: General. Values: General
     */
    readonly protocolSpec: string | ros.IResolvable;

    /**
     * @Property protocolType: The protocol type of the protocol service.
     * Valid value: NFS (default). Only NFSv3 is supported.
     */
    readonly protocolType: string | ros.IResolvable;

    /**
     * @Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Agreement service vswitchid.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: The description of the protocol service. The name of the protocol service appears
     * in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property throughput: The bandwidth of the agreement service.
     * Unit: MB\/S.
     */
    readonly throughput?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProtocolServiceProps`
 *
 * @param properties - the TypeScript properties of a `RosProtocolServiceProps`
 *
 * @returns the result of the validation.
 */
function RosProtocolServicePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('protocolType', ros.requiredValidator)(properties.protocolType));
    if(properties.protocolType && (typeof properties.protocolType) !== 'object') {
        errors.collect(ros.propertyValidator('protocolType', ros.validateAllowedValues)({
          data: properties.protocolType,
          allowedValues: ["NFS"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolType', ros.validateString)(properties.protocolType));
    errors.collect(ros.propertyValidator('protocolSpec', ros.requiredValidator)(properties.protocolSpec));
    if(properties.protocolSpec && (typeof properties.protocolSpec) !== 'object') {
        errors.collect(ros.propertyValidator('protocolSpec', ros.validateAllowedValues)({
          data: properties.protocolSpec,
          allowedValues: ["General"],
        }));
    }
    errors.collect(ros.propertyValidator('protocolSpec', ros.validateString)(properties.protocolSpec));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.requiredValidator)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('fileSystemId', ros.validateString)(properties.fileSystemId));
    errors.collect(ros.propertyValidator('throughput', ros.validateNumber)(properties.throughput));
    return errors.wrap('supplied properties not correct for "RosProtocolServiceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::NAS::ProtocolService` resource
 *
 * @param properties - the TypeScript properties of a `RosProtocolServiceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::NAS::ProtocolService` resource.
 */
// @ts-ignore TS6133
function rosProtocolServicePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProtocolServicePropsValidator(properties).assertSuccess();
    }
    return {
      'FileSystemId': ros.stringToRosTemplate(properties.fileSystemId),
      'ProtocolSpec': ros.stringToRosTemplate(properties.protocolSpec),
      'ProtocolType': ros.stringToRosTemplate(properties.protocolType),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'Description': ros.stringToRosTemplate(properties.description),
      'Throughput': ros.numberToRosTemplate(properties.throughput),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::NAS::ProtocolService`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ProtocolService` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-protocolservice
 */
export class RosProtocolService extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::NAS::ProtocolService";

    /**
     * @Attribute FileSystemId: File system ID.
     */
    public readonly attrFileSystemId: ros.IResolvable;

    /**
     * @Attribute ProtocolServiceId: Agreement cluster group ID.
     */
    public readonly attrProtocolServiceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fileSystemId: File system ID.
     */
    public fileSystemId: string | ros.IResolvable;

    /**
     * @Property protocolSpec: The spec of protocol service. Default: General. Values: General
     */
    public protocolSpec: string | ros.IResolvable;

    /**
     * @Property protocolType: The protocol type of the protocol service.
     * Valid value: NFS (default). Only NFSv3 is supported.
     */
    public protocolType: string | ros.IResolvable;

    /**
     * @Property vpcId: The protocol service VPCID needs to be consistent with the file system VPC.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: Agreement service vswitchid.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property description: The description of the protocol service. The name of the protocol service appears
     * in the console.
     * Limits:
     * *   The description must be 2 to 128 characters in length.
     * *   The description must start with a letter but cannot start with `http:\/\/` or
     * `https:\/\/`.
     * *   The description can contain letters, digits, colons (:), underscores (_), and
     * hyphens (-).
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property throughput: The bandwidth of the agreement service.
     * Unit: MB\/S.
     */
    public throughput: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProtocolServiceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProtocolService.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrFileSystemId = this.getAtt('FileSystemId');
        this.attrProtocolServiceId = this.getAtt('ProtocolServiceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fileSystemId = props.fileSystemId;
        this.protocolSpec = props.protocolSpec;
        this.protocolType = props.protocolType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.description = props.description;
        this.throughput = props.throughput;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fileSystemId: this.fileSystemId,
            protocolSpec: this.protocolSpec,
            protocolType: this.protocolType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            description: this.description,
            throughput: this.throughput,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProtocolServicePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
