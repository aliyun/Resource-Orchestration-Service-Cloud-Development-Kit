// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::SLB::AccessControl`
 */
export interface RosAccessControlProps {

    /**
     * @Property aclName: The name of the access control list.
     */
    readonly aclName: string | ros.IResolvable;

    /**
     * @Property aclEntries: A list of acl entries. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    readonly aclEntries?: Array<RosAccessControl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosAccessControl.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosAccessControlProps`
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the result of the validation.
 */
function RosAccessControlPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.aclEntries && (Array.isArray(properties.aclEntries) || (typeof properties.aclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('aclEntries', ros.validateLength)({
            data: properties.aclEntries.length,
            min: undefined,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('aclEntries', ros.listValidator(RosAccessControl_AclEntriesPropertyValidator))(properties.aclEntries));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["ipv4","ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('aclName', ros.requiredValidator)(properties.aclName));
    errors.collect(ros.propertyValidator('aclName', ros.validateString)(properties.aclName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosAccessControl_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosAccessControlProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl` resource
 *
 * @param properties - the TypeScript properties of a `RosAccessControlProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl` resource.
 */
// @ts-ignore TS6133
function rosAccessControlPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccessControlPropsValidator(properties).assertSuccess();
    }
    return {
      AclName: ros.stringToRosTemplate(properties.aclName),
      AclEntries: ros.listMapper(rosAccessControlAclEntriesPropertyToRosTemplate)(properties.aclEntries),
      AddressIPVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosAccessControlTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::AccessControl`
 */
export class RosAccessControl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::AccessControl";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AclId: The ID of the access control list.
     */
    public readonly attrAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aclName: The name of the access control list.
     */
    public aclName: string | ros.IResolvable;

    /**
     * @Property aclEntries: A list of acl entries. Each entry can be IP addresses or CIDR blocks. Max length: 50.
     */
    public aclEntries: Array<RosAccessControl.AclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property addressIpVersion: IP version. Could be "ipv4" or "ipv6".
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosAccessControl.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::SLB::AccessControl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccessControlProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccessControl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAclId = this.getAtt('AclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aclName = props.aclName;
        this.aclEntries = props.aclEntries;
        this.addressIpVersion = props.addressIpVersion;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aclName: this.aclName,
            aclEntries: this.aclEntries,
            addressIpVersion: this.addressIpVersion,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccessControlPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAccessControl {
    /**
     * @stability external
     */
    export interface AclEntriesProperty {
        /**
         * @Property comment: Description of the entry.
         */
        readonly comment?: string | ros.IResolvable;
        /**
         * @Property entry: IP addresses or CIDR blocks. For example: "10.0.0.1" or "192.168.0.0/16"
         */
        readonly entry: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosAccessControl_AclEntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    return errors.wrap('supplied properties not correct for "AclEntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.AclEntries` resource
 *
 * @param properties - the TypeScript properties of a `AclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.AclEntries` resource.
 */
// @ts-ignore TS6133
function rosAccessControlAclEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccessControl_AclEntriesPropertyValidator(properties).assertSuccess();
    return {
      Comment: ros.stringToRosTemplate(properties.comment),
      Entry: ros.stringToRosTemplate(properties.entry),
    };
}

export namespace RosAccessControl {
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
function RosAccessControl_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::AccessControl.Tags` resource.
 */
// @ts-ignore TS6133
function rosAccessControlTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAccessControl_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::BackendServerAttachment`
 */
export interface RosBackendServerAttachmentProps {

    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerList?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    readonly backendServerWeightList?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBackendServerAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('backendServerList', ros.listValidator(ros.validateString))(properties.backendServerList));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServerWeightList', ros.listValidator(ros.validateAny))(properties.backendServerWeightList));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosBackendServerAttachment_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosBackendServerAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackendServerAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      BackendServerList: ros.listMapper(ros.stringToRosTemplate)(properties.backendServerList),
      BackendServers: ros.listMapper(rosBackendServerAttachmentBackendServersPropertyToRosTemplate)(properties.backendServers),
      BackendServerWeightList: ros.listMapper(ros.objectToRosTemplate)(properties.backendServerWeightList),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerAttachment`
 */
export class RosBackendServerAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackendServers: The collection of attached backend server.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property backendServerList: The comma delimited instance id list.If the property "BackendServers" is setting, this property will be ignored.
     */
    public backendServerList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    public backendServers: Array<RosBackendServerAttachment.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property backendServerWeightList: The comma delimited weight list. If no value specified will use 100. If the length is small than "BackendServerList", it will copy the last one to fill the array.If the property "BackendServers" is setting, this property will be ignored.
     */
    public backendServerWeightList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::BackendServerAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackendServerAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = this.getAtt('BackendServers');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.backendServerList = props.backendServerList;
        this.backendServers = props.backendServers;
        this.backendServerWeightList = props.backendServerWeightList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            backendServerList: this.backendServerList,
            backendServers: this.backendServers,
            backendServerWeightList: this.backendServerWeightList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackendServerAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBackendServerAttachment {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerAttachment_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerAttachment.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerAttachmentBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBackendServerAttachment_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Description: ros.stringToRosTemplate(properties.description),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export interface RosBackendServerToVServerGroupAdditionProps {

    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosBackendServerToVServerGroupAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('backendServers', ros.requiredValidator)(properties.backendServers));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosBackendServerToVServerGroupAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosBackendServerToVServerGroupAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition` resource.
 */
// @ts-ignore TS6133
function rosBackendServerToVServerGroupAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBackendServerToVServerGroupAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      BackendServers: ros.listMapper(rosBackendServerToVServerGroupAdditionBackendServersPropertyToRosTemplate)(properties.backendServers),
      VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export class RosBackendServerToVServerGroupAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::BackendServerToVServerGroupAddition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute VServerGroupId: The ID of virtual server group.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    public backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    public vServerGroupId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackendServerToVServerGroupAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBackendServerToVServerGroupAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVServerGroupId = this.getAtt('VServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.backendServers = props.backendServers;
        this.vServerGroupId = props.vServerGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            backendServers: this.backendServers,
            vServerGroupId: this.vServerGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBackendServerToVServerGroupAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosBackendServerToVServerGroupAddition {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property type: The instance type of the backend server. This parameter must be set to a string. Valid values:
     * ecs: ECS instance. This is the default value.
     * eni: ENI.
     * eci: ECI.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of an ECS instance, ENI or ECI
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::BackendServerToVServerGroupAddition.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosBackendServerToVServerGroupAdditionBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosBackendServerToVServerGroupAddition_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Description: ros.stringToRosTemplate(properties.description),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::Certificate`
 */
export interface RosCertificateProps {

    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateId?: string | ros.IResolvable;

    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateName?: string | ros.IResolvable;

    /**
     * @Property certificate: The content of the certificate public key.
     */
    readonly certificate?: string | ros.IResolvable;

    /**
     * @Property certificateName: The name of the certificate.
     */
    readonly certificateName?: string | ros.IResolvable;

    /**
     * @Property certificateType: The type of the certificate.
     */
    readonly certificateType?: string | ros.IResolvable;

    /**
     * @Property privateKey: The private key.
     */
    readonly privateKey?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCertificate.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.certificateType && (typeof properties.certificateType) !== 'object') {
        errors.collect(ros.propertyValidator('certificateType', ros.validateAllowedValues)({
          data: properties.certificateType,
          allowedValues: ["Server","CA"],
        }));
    }
    errors.collect(ros.propertyValidator('certificateType', ros.validateString)(properties.certificateType));
    errors.collect(ros.propertyValidator('aliCloudCertificateName', ros.validateString)(properties.aliCloudCertificateName));
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('certificateName', ros.validateString)(properties.certificateName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCertificate_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    errors.collect(ros.propertyValidator('aliCloudCertificateId', ros.validateString)(properties.aliCloudCertificateId));
    return errors.wrap('supplied properties not correct for "RosCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate` resource
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate` resource.
 */
// @ts-ignore TS6133
function rosCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      AliCloudCertificateId: ros.stringToRosTemplate(properties.aliCloudCertificateId),
      AliCloudCertificateName: ros.stringToRosTemplate(properties.aliCloudCertificateName),
      Certificate: ros.stringToRosTemplate(properties.certificate),
      CertificateName: ros.stringToRosTemplate(properties.certificateName),
      CertificateType: ros.stringToRosTemplate(properties.certificateType),
      PrivateKey: ros.stringToRosTemplate(properties.privateKey),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosCertificateTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::Certificate`
 */
export class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Certificate";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CertificateId: The ID of the certificate.
     */
    public readonly attrCertificateId: ros.IResolvable;

    /**
     * @Attribute Fingerprint: The fingerprint of the certificate.
     */
    public readonly attrFingerprint: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    public aliCloudCertificateId: string | ros.IResolvable | undefined;

    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    public aliCloudCertificateName: string | ros.IResolvable | undefined;

    /**
     * @Property certificate: The content of the certificate public key.
     */
    public certificate: string | ros.IResolvable | undefined;

    /**
     * @Property certificateName: The name of the certificate.
     */
    public certificateName: string | ros.IResolvable | undefined;

    /**
     * @Property certificateType: The type of the certificate.
     */
    public certificateType: string | ros.IResolvable | undefined;

    /**
     * @Property privateKey: The private key.
     */
    public privateKey: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCertificate.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificateId = this.getAtt('CertificateId');
        this.attrFingerprint = this.getAtt('Fingerprint');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.aliCloudCertificateId = props.aliCloudCertificateId;
        this.aliCloudCertificateName = props.aliCloudCertificateName;
        this.certificate = props.certificate;
        this.certificateName = props.certificateName;
        this.certificateType = props.certificateType;
        this.privateKey = props.privateKey;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            aliCloudCertificateId: this.aliCloudCertificateId,
            aliCloudCertificateName: this.aliCloudCertificateName,
            certificate: this.certificate,
            certificateName: this.certificateName,
            certificateType: this.certificateType,
            privateKey: this.privateKey,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCertificate {
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
function RosCertificate_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Certificate.Tags` resource.
 */
// @ts-ignore TS6133
function rosCertificateTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCertificate_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::DomainExtension`
 */
export interface RosDomainExtensionProps {

    /**
     * @Property domain: The domain name.
     */
    readonly domain: string | ros.IResolvable;

    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    readonly serverCertificateId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainExtensionProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the result of the validation.
 */
function RosDomainExtensionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.requiredValidator)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.validateString)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "RosDomainExtensionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::DomainExtension` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainExtensionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::DomainExtension` resource.
 */
// @ts-ignore TS6133
function rosDomainExtensionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainExtensionPropsValidator(properties).assertSuccess();
    }
    return {
      Domain: ros.stringToRosTemplate(properties.domain),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      ServerCertificateId: ros.stringToRosTemplate(properties.serverCertificateId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::DomainExtension`
 */
export class RosDomainExtension extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::DomainExtension";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DomainExtensionId: The ID of the created domain name extension.
     */
    public readonly attrDomainExtensionId: ros.IResolvable;

    /**
     * @Attribute ListenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
1-65535
     */
    public readonly attrListenerPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domain: The domain name.
     */
    public domain: string | ros.IResolvable;

    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property serverCertificateId: The ID of the certificate corresponding to the domain name.
     */
    public serverCertificateId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::DomainExtension`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainExtensionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainExtension.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainExtensionId = this.getAtt('DomainExtensionId');
        this.attrListenerPort = this.getAtt('ListenerPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domain = props.domain;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.serverCertificateId = props.serverCertificateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domain: this.domain,
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            serverCertificateId: this.serverCertificateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainExtensionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLB::Listener`
 */
export interface RosListenerProps {

    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property listenerPort: Port for front listener. Range from 0 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * @Property aclId: The ID of the access control associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclId?: string | ros.IResolvable;

    /**
     * @Property aclIds: The ID list of the access controls associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
     */
    readonly aclIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    readonly aclStatus?: string | ros.IResolvable;

    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     * 
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    readonly aclType?: string | ros.IResolvable;

    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    readonly backendServerPort?: number | ros.IResolvable;

    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    readonly caCertificateId?: string | ros.IResolvable;

    /**
     * @Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableHttp2: Specifies whether to use HTTP/2. It takes effect when Protocol=https. Valid values:
     * on: yes
     * off: no
     */
    readonly enableHttp2?: string | ros.IResolvable;

    /**
     * @Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. Valid values:
     * on (default): yes
     * off: no
     */
    readonly gzip?: string | ros.IResolvable;

    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    readonly healthCheck?: RosListener.HealthCheckProperty | ros.IResolvable;

    /**
     * @Property httpConfig: Config for http protocol.
     */
    readonly httpConfig?: RosListener.HttpConfigProperty | ros.IResolvable;

    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    readonly idleTimeout?: number | ros.IResolvable;

    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    readonly masterSlaveServerGroupId?: string | ros.IResolvable;

    /**
     * @Property persistence: The properties of persistence.
     */
    readonly persistence?: RosListener.PersistenceProperty | ros.IResolvable;

    /**
     * @Property portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
     */
    readonly portRange?: Array<RosListener.PortRangeProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    readonly requestTimeout?: number | ros.IResolvable;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
     * rr: Requests are distributed to backend servers in sequence.
     * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
     * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
     * Default: wrr
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    readonly serverCertificateId?: string | ros.IResolvable;

    /**
     * @Property startListener: Whether start listener after listener created. Default True.
     */
    readonly startListener?: boolean | ros.IResolvable;

    /**
     * @Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
     */
    readonly tlsCipherPolicy?: string | ros.IResolvable;

    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    readonly vServerGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosListenerProps`
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the result of the validation.
 */
function RosListenerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 80,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
          data: properties.scheduler,
          allowedValues: ["wrr","wlc","rr","sch","tch"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('healthCheck', RosListener_HealthCheckPropertyValidator)(properties.healthCheck));
    if(properties.idleTimeout && (typeof properties.idleTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('idleTimeout', ros.validateRange)({
            data: properties.idleTimeout,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('idleTimeout', ros.validateNumber)(properties.idleTimeout));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.backendServerPort && (typeof properties.backendServerPort) !== 'object') {
        errors.collect(ros.propertyValidator('backendServerPort', ros.validateRange)({
            data: properties.backendServerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('backendServerPort', ros.validateNumber)(properties.backendServerPort));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: -1,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.gzip && (typeof properties.gzip) !== 'object') {
        errors.collect(ros.propertyValidator('gzip', ros.validateAllowedValues)({
          data: properties.gzip,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('gzip', ros.validateString)(properties.gzip));
    errors.collect(ros.propertyValidator('serverCertificateId', ros.validateString)(properties.serverCertificateId));
    errors.collect(ros.propertyValidator('httpConfig', RosListener_HttpConfigPropertyValidator)(properties.httpConfig));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["http","https","tcp","udp"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    if(properties.requestTimeout && (typeof properties.requestTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('requestTimeout', ros.validateRange)({
            data: properties.requestTimeout,
            min: 1,
            max: 180,
          }));
    }
    errors.collect(ros.propertyValidator('requestTimeout', ros.validateNumber)(properties.requestTimeout));
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('tlsCipherPolicy', ros.validateString)(properties.tlsCipherPolicy));
    errors.collect(ros.propertyValidator('caCertificateId', ros.validateString)(properties.caCertificateId));
    errors.collect(ros.propertyValidator('aclId', ros.validateString)(properties.aclId));
    errors.collect(ros.propertyValidator('persistence', RosListener_PersistencePropertyValidator)(properties.persistence));
    if(properties.portRange && (Array.isArray(properties.portRange) || (typeof properties.portRange) === 'string')) {
        errors.collect(ros.propertyValidator('portRange', ros.validateLength)({
            data: properties.portRange.length,
            min: 1,
            max: 1,
          }));
    }
    errors.collect(ros.propertyValidator('portRange', ros.listValidator(RosListener_PortRangePropertyValidator))(properties.portRange));
    if(properties.aclStatus && (typeof properties.aclStatus) !== 'object') {
        errors.collect(ros.propertyValidator('aclStatus', ros.validateAllowedValues)({
          data: properties.aclStatus,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('aclStatus', ros.validateString)(properties.aclStatus));
    errors.collect(ros.propertyValidator('masterSlaveServerGroupId', ros.validateString)(properties.masterSlaveServerGroupId));
    errors.collect(ros.propertyValidator('startListener', ros.validateBoolean)(properties.startListener));
    if(properties.aclType && (typeof properties.aclType) !== 'object') {
        errors.collect(ros.propertyValidator('aclType', ros.validateAllowedValues)({
          data: properties.aclType,
          allowedValues: ["white","black"],
        }));
    }
    errors.collect(ros.propertyValidator('aclType', ros.validateString)(properties.aclType));
    errors.collect(ros.propertyValidator('enableHttp2', ros.validateString)(properties.enableHttp2));
    errors.collect(ros.propertyValidator('aclIds', ros.listValidator(ros.validateString))(properties.aclIds));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      AclId: ros.stringToRosTemplate(properties.aclId),
      AclIds: ros.listMapper(ros.stringToRosTemplate)(properties.aclIds),
      AclStatus: ros.stringToRosTemplate(properties.aclStatus),
      AclType: ros.stringToRosTemplate(properties.aclType),
      BackendServerPort: ros.numberToRosTemplate(properties.backendServerPort),
      CACertificateId: ros.stringToRosTemplate(properties.caCertificateId),
      Description: ros.stringToRosTemplate(properties.description),
      EnableHttp2: ros.stringToRosTemplate(properties.enableHttp2),
      Gzip: ros.stringToRosTemplate(properties.gzip),
      HealthCheck: rosListenerHealthCheckPropertyToRosTemplate(properties.healthCheck),
      HttpConfig: rosListenerHttpConfigPropertyToRosTemplate(properties.httpConfig),
      IdleTimeout: ros.numberToRosTemplate(properties.idleTimeout),
      MasterSlaveServerGroupId: ros.stringToRosTemplate(properties.masterSlaveServerGroupId),
      Persistence: rosListenerPersistencePropertyToRosTemplate(properties.persistence),
      PortRange: ros.listMapper(rosListenerPortRangePropertyToRosTemplate)(properties.portRange),
      RequestTimeout: ros.numberToRosTemplate(properties.requestTimeout),
      Scheduler: ros.stringToRosTemplate(properties.scheduler),
      ServerCertificateId: ros.stringToRosTemplate(properties.serverCertificateId),
      StartListener: ros.booleanToRosTemplate(properties.startListener),
      TLSCipherPolicy: ros.stringToRosTemplate(properties.tlsCipherPolicy),
      VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::Listener`
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Listener";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ListenerPortsAndProtocol: The collection of listener.
     */
    public readonly attrListenerPortsAndProtocol: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The id of load balancer
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The bandwidth of network, unit in Mbps(Million bits per second). If the specified load balancer with "LOAD_BALANCE_ID" is charged by "paybybandwidth" and is created in classic network, each Listener's bandwidth must be greater than 0 and the sum of all of its Listeners' bandwidth can't be greater than the bandwidth of the load balancer.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property listenerPort: Port for front listener. Range from 0 to 65535.
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The id of load balancer to create listener.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property protocol: The load balancer transport protocol to use for routing: http, https, tcp, or udp.
     */
    public protocol: string | ros.IResolvable;

    /**
     * @Property aclId: The ID of the access control associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    public aclId: string | ros.IResolvable | undefined;

    /**
     * @Property aclIds: The ID list of the access controls associated with the listener to be created.
     * If the value of the AclStatus parameter is on, this parameter is required.AclIds have higher priority than AclId.
     */
    public aclIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property aclStatus: Indicates whether to enable access control.
     * Valid values: on | off. Default value: off
     */
    public aclStatus: string | ros.IResolvable | undefined;

    /**
     * @Property aclType: The access control type:
     * * white: Indicates a whitelist. Only requests from IP addresses or CIDR blocks in the selected access control lists are forwarded. This applies to scenarios in which an application only allows access from specific IP addresses.
     * Enabling a whitelist poses some risks to your services.
     * After a whitelist is enabled, only the IP addresses in the list can access the listener.
     * If you enable a whitelist without adding any IP addresses in the list, no requests are forwarded.
     * * black: Indicates a blacklist. Requests from IP addresses or CIDR blocks in the selected access control lists are not forwarded (that is, they are blocked). This applies to scenarios in which an application only denies access from specific IP addresses.
     * If you enable a blacklist without adding any IP addresses in the list, all requests are forwarded.
     * 
     * If the value of the AclStatus parameter is on, this parameter is required.
     */
    public aclType: string | ros.IResolvable | undefined;

    /**
     * @Property backendServerPort: Backend server can listen on ports from 1 to 65535.
     */
    public backendServerPort: number | ros.IResolvable | undefined;

    /**
     * @Property caCertificateId: CA server certificate id, for https listener only.
     */
    public caCertificateId: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the listener.It must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). Chinese characters are supported.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableHttp2: Specifies whether to use HTTP/2. It takes effect when Protocol=https. Valid values:
     * on: yes
     * off: no
     */
    public enableHttp2: string | ros.IResolvable | undefined;

    /**
     * @Property gzip: Specifies whether to enable Gzip compression to compress specific types of files. Valid values:
     * on (default): yes
     * off: no
     */
    public gzip: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheck: The properties of health checking setting.
     */
    public healthCheck: RosListener.HealthCheckProperty | ros.IResolvable | undefined;

    /**
     * @Property httpConfig: Config for http protocol.
     */
    public httpConfig: RosListener.HttpConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property idleTimeout: Specify the idle connection timeout in seconds. Valid value: 1-60 If no request is received during the specified timeout period, Server Load Balancer will temporarily terminate the connection and restart the connection when the next request comes.
     */
    public idleTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property masterSlaveServerGroupId: The id of the MasterSlaveServerGroup which use in listener.
     */
    public masterSlaveServerGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property persistence: The properties of persistence.
     */
    public persistence: RosListener.PersistenceProperty | ros.IResolvable | undefined;

    /**
     * @Property portRange: Port range, only supports TCP or UDP listener. ListenerPort should be 0 when PortRange is specified.
     */
    public portRange: Array<RosListener.PortRangeProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property requestTimeout: Specify the request timeout in seconds. Valid value: 1-180 If no response is received from the backend server during the specified timeout period, Server Load Balancer will stop waiting and send an HTTP 504 error to the client.
     */
    public requestTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers that have higher weights receive more requests than those that have lower weights.
     * wlc: Requests are distributed based on the combination of the weights and connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
     * rr: Requests are distributed to backend servers in sequence.
     * sch: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
     * tch: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port number, and destination port number. Requests that contain the same preceding information are distributed to the same backend server.
     * Default: wrr
     */
    public scheduler: string | ros.IResolvable | undefined;

    /**
     * @Property serverCertificateId: Server certificate id, for https listener only, this properties is required.
     */
    public serverCertificateId: string | ros.IResolvable | undefined;

    /**
     * @Property startListener: Whether start listener after listener created. Default True.
     */
    public startListener: boolean | ros.IResolvable | undefined;

    /**
     * @Property tlsCipherPolicy: The Transport Layer Security (TLS) security policy. Each security policy contains TLS protocol versions and cipher suites available for HTTPS. It takes effect when Protocol=https.
     */
    public tlsCipherPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property vServerGroupId: The id of the VServerGroup which use in listener.
     */
    public vServerGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::Listener`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerPortsAndProtocol = this.getAtt('ListenerPortsAndProtocol');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.protocol = props.protocol;
        this.aclId = props.aclId;
        this.aclIds = props.aclIds;
        this.aclStatus = props.aclStatus;
        this.aclType = props.aclType;
        this.backendServerPort = props.backendServerPort;
        this.caCertificateId = props.caCertificateId;
        this.description = props.description;
        this.enableHttp2 = props.enableHttp2;
        this.gzip = props.gzip;
        this.healthCheck = props.healthCheck;
        this.httpConfig = props.httpConfig;
        this.idleTimeout = props.idleTimeout;
        this.masterSlaveServerGroupId = props.masterSlaveServerGroupId;
        this.persistence = props.persistence;
        this.portRange = props.portRange;
        this.requestTimeout = props.requestTimeout;
        this.scheduler = props.scheduler;
        this.serverCertificateId = props.serverCertificateId;
        this.startListener = props.startListener;
        this.tlsCipherPolicy = props.tlsCipherPolicy;
        this.vServerGroupId = props.vServerGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            protocol: this.protocol,
            aclId: this.aclId,
            aclIds: this.aclIds,
            aclStatus: this.aclStatus,
            aclType: this.aclType,
            backendServerPort: this.backendServerPort,
            caCertificateId: this.caCertificateId,
            description: this.description,
            enableHttp2: this.enableHttp2,
            gzip: this.gzip,
            healthCheck: this.healthCheck,
            httpConfig: this.httpConfig,
            idleTimeout: this.idleTimeout,
            masterSlaveServerGroupId: this.masterSlaveServerGroupId,
            persistence: this.persistence,
            portRange: this.portRange,
            requestTimeout: this.requestTimeout,
            scheduler: this.scheduler,
            serverCertificateId: this.serverCertificateId,
            startListener: this.startListener,
            tlsCipherPolicy: this.tlsCipherPolicy,
            vServerGroupId: this.vServerGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosListenerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface HealthCheckProperty {
        /**
         * @Property httpCode: The expect status of health check result. Any answer other than referred status within the timeout period is considered unhealthy.
         */
        readonly httpCode?: string | ros.IResolvable;
        /**
         * @Property switch: Whether to enable health check. Valid value: on, off.
     * If value is on, turn on the health check. If value is off, turn off the health checkIf value is not set, the health check is disabled by default, unless any health check items are configured.
         */
        readonly switch?: string | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of consecutive health checks failures required,before identified the backend server in Unhealthy status.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property timeout: The amount of time, in seconds, during which no response means a failed health check.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property healthCheckMethod: The health check method used in HTTP or HTTPS health checks. Valid values: head and get.
         */
        readonly healthCheckMethod?: string | ros.IResolvable;
        /**
         * @Property healthyThreshold: The number of consecutive health checks successes required,before identified the backend server in Healthy status.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property port: The port being checked. The range of valid ports is 0 through 65535.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property domain: The domain of health check target.
         */
        readonly domain?: string | ros.IResolvable;
        /**
         * @Property uri: The url of health check target.
         */
        readonly uri?: string | ros.IResolvable;
        /**
         * @Property healthCheckType: The type of health check. It takes effect when Protocol=tcp. Valid values: tcp and http. Default value: tcp.
         */
        readonly healthCheckType?: string | ros.IResolvable;
        /**
         * @Property interval: The approximate interval, unit in seconds, between health checks of an backend server.
         */
        readonly interval?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_HealthCheckPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('httpCode', ros.validateString)(properties.httpCode));
    if(properties.switch && (typeof properties.switch) !== 'object') {
        errors.collect(ros.propertyValidator('switch', ros.validateAllowedValues)({
          data: properties.switch,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('switch', ros.validateString)(properties.switch));
    if(properties.unhealthyThreshold && (typeof properties.unhealthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateRange)({
            data: properties.unhealthyThreshold,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('healthCheckMethod', ros.validateString)(properties.healthCheckMethod));
    if(properties.healthyThreshold && (typeof properties.healthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('healthyThreshold', ros.validateRange)({
            data: properties.healthyThreshold,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('uri', ros.validateString)(properties.uri));
    if(properties.healthCheckType && (typeof properties.healthCheckType) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckType', ros.validateAllowedValues)({
          data: properties.healthCheckType,
          allowedValues: ["tcp","http"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckType', ros.validateString)(properties.healthCheckType));
    if(properties.interval && (typeof properties.interval) !== 'object') {
        errors.collect(ros.propertyValidator('interval', ros.validateRange)({
            data: properties.interval,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "HealthCheckProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HealthCheck` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HealthCheck` resource.
 */
// @ts-ignore TS6133
function rosListenerHealthCheckPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_HealthCheckPropertyValidator(properties).assertSuccess();
    return {
      HttpCode: ros.stringToRosTemplate(properties.httpCode),
      Switch: ros.stringToRosTemplate(properties.switch),
      UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      HealthCheckMethod: ros.stringToRosTemplate(properties.healthCheckMethod),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      Port: ros.numberToRosTemplate(properties.port),
      Domain: ros.stringToRosTemplate(properties.domain),
      URI: ros.stringToRosTemplate(properties.uri),
      HealthCheckType: ros.stringToRosTemplate(properties.healthCheckType),
      Interval: ros.numberToRosTemplate(properties.interval),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface HttpConfigProperty {
        /**
         * @Property listenerForward: Whether to enable HTTP to HTTPS forwarding.
     * Valid values: on | off. Default value: off.
         */
        readonly listenerForward?: string | ros.IResolvable;
        /**
         * @Property forwardPort: HTTP to HTTPS listening forwarding port.
     * Default value: 443.
         */
        readonly forwardPort?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HttpConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_HttpConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.listenerForward && (typeof properties.listenerForward) !== 'object') {
        errors.collect(ros.propertyValidator('listenerForward', ros.validateAllowedValues)({
          data: properties.listenerForward,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerForward', ros.validateString)(properties.listenerForward));
    if(properties.forwardPort && (typeof properties.forwardPort) !== 'object') {
        errors.collect(ros.propertyValidator('forwardPort', ros.validateRange)({
            data: properties.forwardPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('forwardPort', ros.validateNumber)(properties.forwardPort));
    return errors.wrap('supplied properties not correct for "HttpConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HttpConfig` resource
 *
 * @param properties - the TypeScript properties of a `HttpConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.HttpConfig` resource.
 */
// @ts-ignore TS6133
function rosListenerHttpConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_HttpConfigPropertyValidator(properties).assertSuccess();
    return {
      ListenerForward: ros.stringToRosTemplate(properties.listenerForward),
      ForwardPort: ros.numberToRosTemplate(properties.forwardPort),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface PersistenceProperty {
        /**
         * @Property xForwardedForSlbid: Optional. Indicates whether to use the SLB-ID header field to obtain the SLB instance ID. Valid values: on | off. Default value: off If you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbid?: string | ros.IResolvable;
        /**
         * @Property cookieTimeout: The timeout for cookie setting, in seconds. It only take effect while StickySession is setting to 'on' and StickySessionType is setting to 'insert'.
         */
        readonly cookieTimeout?: number | ros.IResolvable;
        /**
         * @Property cookie: The type of session persistence.
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property stickySession: The switch of session persistence. Support 'on' and 'off'.
         */
        readonly stickySession?: string | ros.IResolvable;
        /**
         * @Property persistenceTimeout: The timeout number of persistence, in seconds.
         */
        readonly persistenceTimeout?: number | ros.IResolvable;
        /**
         * @Property xForwardedForSlbport: Optional. Indicates whether to use the X-Forwarded-Port header field to retrieve the listening ports of the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbport?: string | ros.IResolvable;
        /**
         * @Property xForwardedFor: Use 'X-Forwarded-For' to get real ip of accessor. On for open, off for close.
         */
        readonly xForwardedFor?: string | ros.IResolvable;
        /**
         * @Property xForwardedForClientSrcPort: Optional. Indicates whether to use the X-Forwarded-Client-srcport header field to retrieve the port used by a client to connect to the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForClientSrcPort?: string | ros.IResolvable;
        /**
         * @Property xForwardedForProto: Optional. Indicates whether to use the X-Forwarded-Proto header field to obtainthe listening protocol used by the SLB instance. Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForProto?: string | ros.IResolvable;
        /**
         * @Property stickySessionType: The type of session persistence. Depends on parameter StickySession, if it is set to off, this parameter will be ignored.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property xForwardedForSlbip: Optional. Indicates whether to use the SLB-IP header field to obtainthe real IP address of a client request.Valid values: on | off. Default value: offIf you do not set this parameter, the default value is used.
         */
        readonly xForwardedForSlbip?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PersistenceProperty`
 *
 * @param properties - the TypeScript properties of a `PersistenceProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PersistencePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.xForwardedForSlbid && (typeof properties.xForwardedForSlbid) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbid', ros.validateAllowedValues)({
          data: properties.xForwardedForSlbid,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbid', ros.validateString)(properties.xForwardedForSlbid));
    if(properties.cookieTimeout && (typeof properties.cookieTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('cookieTimeout', ros.validateRange)({
            data: properties.cookieTimeout,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('cookieTimeout', ros.validateNumber)(properties.cookieTimeout));
    errors.collect(ros.propertyValidator('cookie', ros.validateString)(properties.cookie));
    if(properties.stickySession && (typeof properties.stickySession) !== 'object') {
        errors.collect(ros.propertyValidator('stickySession', ros.validateAllowedValues)({
          data: properties.stickySession,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySession', ros.validateString)(properties.stickySession));
    if(properties.persistenceTimeout && (typeof properties.persistenceTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateRange)({
            data: properties.persistenceTimeout,
            min: 0,
            max: 1000,
          }));
    }
    errors.collect(ros.propertyValidator('persistenceTimeout', ros.validateNumber)(properties.persistenceTimeout));
    if(properties.xForwardedForSlbport && (typeof properties.xForwardedForSlbport) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbport', ros.validateAllowedValues)({
          data: properties.xForwardedForSlbport,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbport', ros.validateString)(properties.xForwardedForSlbport));
    if(properties.xForwardedFor && (typeof properties.xForwardedFor) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedFor', ros.validateAllowedValues)({
          data: properties.xForwardedFor,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedFor', ros.validateString)(properties.xForwardedFor));
    if(properties.xForwardedForClientSrcPort && (typeof properties.xForwardedForClientSrcPort) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForClientSrcPort', ros.validateAllowedValues)({
          data: properties.xForwardedForClientSrcPort,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForClientSrcPort', ros.validateString)(properties.xForwardedForClientSrcPort));
    if(properties.xForwardedForProto && (typeof properties.xForwardedForProto) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForProto', ros.validateAllowedValues)({
          data: properties.xForwardedForProto,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForProto', ros.validateString)(properties.xForwardedForProto));
    if(properties.stickySessionType && (typeof properties.stickySessionType) !== 'object') {
        errors.collect(ros.propertyValidator('stickySessionType', ros.validateAllowedValues)({
          data: properties.stickySessionType,
          allowedValues: ["insert","server"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySessionType', ros.validateString)(properties.stickySessionType));
    if(properties.xForwardedForSlbip && (typeof properties.xForwardedForSlbip) !== 'object') {
        errors.collect(ros.propertyValidator('xForwardedForSlbip', ros.validateAllowedValues)({
          data: properties.xForwardedForSlbip,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('xForwardedForSlbip', ros.validateString)(properties.xForwardedForSlbip));
    return errors.wrap('supplied properties not correct for "PersistenceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.Persistence` resource
 *
 * @param properties - the TypeScript properties of a `PersistenceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.Persistence` resource.
 */
// @ts-ignore TS6133
function rosListenerPersistencePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_PersistencePropertyValidator(properties).assertSuccess();
    return {
      XForwardedFor_SLBID: ros.stringToRosTemplate(properties.xForwardedForSlbid),
      CookieTimeout: ros.numberToRosTemplate(properties.cookieTimeout),
      Cookie: ros.stringToRosTemplate(properties.cookie),
      StickySession: ros.stringToRosTemplate(properties.stickySession),
      PersistenceTimeout: ros.numberToRosTemplate(properties.persistenceTimeout),
      XForwardedFor_SLBPORT: ros.stringToRosTemplate(properties.xForwardedForSlbport),
      XForwardedFor: ros.stringToRosTemplate(properties.xForwardedFor),
      XForwardedFor_ClientSrcPort: ros.stringToRosTemplate(properties.xForwardedForClientSrcPort),
      XForwardedFor_proto: ros.stringToRosTemplate(properties.xForwardedForProto),
      StickySessionType: ros.stringToRosTemplate(properties.stickySessionType),
      XForwardedFor_SLBIP: ros.stringToRosTemplate(properties.xForwardedForSlbip),
    };
}

export namespace RosListener {
    /**
     * @stability external
     */
    export interface PortRangeProperty {
        /**
         * @Property startPort: Start port, from 1 to 65535.
         */
        readonly startPort: number | ros.IResolvable;
        /**
         * @Property endPort: End port, from 1 to 65535.
         */
        readonly endPort: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `PortRangeProperty`
 *
 * @param properties - the TypeScript properties of a `PortRangeProperty`
 *
 * @returns the result of the validation.
 */
function RosListener_PortRangePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('startPort', ros.requiredValidator)(properties.startPort));
    if(properties.startPort && (typeof properties.startPort) !== 'object') {
        errors.collect(ros.propertyValidator('startPort', ros.validateRange)({
            data: properties.startPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('startPort', ros.validateNumber)(properties.startPort));
    errors.collect(ros.propertyValidator('endPort', ros.requiredValidator)(properties.endPort));
    if(properties.endPort && (typeof properties.endPort) !== 'object') {
        errors.collect(ros.propertyValidator('endPort', ros.validateRange)({
            data: properties.endPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('endPort', ros.validateNumber)(properties.endPort));
    return errors.wrap('supplied properties not correct for "PortRangeProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.PortRange` resource
 *
 * @param properties - the TypeScript properties of a `PortRangeProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Listener.PortRange` resource.
 */
// @ts-ignore TS6133
function rosListenerPortRangePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_PortRangePropertyValidator(properties).assertSuccess();
    return {
      StartPort: ros.numberToRosTemplate(properties.startPort),
      EndPort: ros.numberToRosTemplate(properties.endPort),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`
 */
export interface RosLoadBalancerProps {

    /**
     * @Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property addressType: The network type of the CLB instance. Valid values:
     * - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
     * - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance. Valid values:
     * - **true**: automatically pays for the CLB instance. After you call this operation, the system automatically completes the payment and creates the CLB instance.- **false** (default): After you call the operation, the order is created but the payment is not completed. You can view the pending order in the console. The CLB instance will not be created until you complete the payment.**Note** This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:- **true**: Automatic renewal is enabled.- **false** (default): Automatic renewal is not enabled. You must renew the instance manually.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
     * When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
     * When PeriodUnit = year, the value range is 1-3.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
     * If PricingCycle is year, the value range is 1 to 5.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property instanceChargeType: Instance billing method. Valid value:
     * - **PayBySpec** (default): Pay by spec.
     * - **PayByCLCU**: billed by usage.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: The metering method of the Internet-facing CLB instance. Valid values:
     * - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
     * - **paybybandwidth**: pay-by-bandwidth.
     * **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * @Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - **slb.s1.small**
     * - **slb.s2.small**
     * - **slb.s2.medium**
     * - **slb.s3.small**
     * - **slb.s3.medium**
     * - **slb.s3.large**
     * **Note** If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
     * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;

    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string | ros.IResolvable;

    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string | ros.IResolvable;

    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];

    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.autoRenewPeriod && (typeof properties.autoRenewPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateAllowedValues)({
          data: properties.autoRenewPeriod,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayBySpec","PayByCLCU"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["month","year","Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["ipv4","ipv6"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('slaveZoneId', ros.validateString)(properties.slaveZoneId));
    if(properties.modificationProtectionStatus && (typeof properties.modificationProtectionStatus) !== 'object') {
        errors.collect(ros.propertyValidator('modificationProtectionStatus', ros.validateAllowedValues)({
          data: properties.modificationProtectionStatus,
          allowedValues: ["NonProtection","ConsoleProtection"],
        }));
    }
    errors.collect(ros.propertyValidator('modificationProtectionStatus', ros.validateString)(properties.modificationProtectionStatus));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["paybytraffic","PayByTraffic","paybybandwidth","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.modificationProtectionReason && (Array.isArray(properties.modificationProtectionReason) || (typeof properties.modificationProtectionReason) === 'string')) {
        errors.collect(ros.propertyValidator('modificationProtectionReason', ros.validateLength)({
            data: properties.modificationProtectionReason.length,
            min: undefined,
            max: 80,
          }));
    }
    errors.collect(ros.propertyValidator('modificationProtectionReason', ros.validateString)(properties.modificationProtectionReason));
    if(properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
          data: properties.addressType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLoadBalancer_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('masterZoneId', ros.validateString)(properties.masterZoneId));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
      AddressIPVersion: ros.stringToRosTemplate(properties.addressIpVersion),
      AddressType: ros.stringToRosTemplate(properties.addressType),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      AutoRenewPeriod: ros.numberToRosTemplate(properties.autoRenewPeriod),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Duration: ros.numberToRosTemplate(properties.duration),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      LoadBalancerSpec: ros.stringToRosTemplate(properties.loadBalancerSpec),
      MasterZoneId: ros.stringToRosTemplate(properties.masterZoneId),
      ModificationProtectionReason: ros.stringToRosTemplate(properties.modificationProtectionReason),
      ModificationProtectionStatus: ros.stringToRosTemplate(properties.modificationProtectionStatus),
      PayType: ros.stringToRosTemplate(properties.payType),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SlaveZoneId: ros.stringToRosTemplate(properties.slaveZoneId),
      Tags: ros.listMapper(rosLoadBalancerTagsPropertyToRosTemplate)(properties.tags),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancer`
 */
export class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AddressIPVersion: IP version
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * @Attribute Bandwidth: The bandwidth for network
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * @Attribute IpAddress: The ip address of the load balancer.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The id of load balance created.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerName: Name of created load balancer.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * @Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance
     */
    public readonly attrLoadBalancerSpec: ros.IResolvable;

    /**
     * @Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    public readonly attrMasterZoneId: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PayType: The billing method of the instance to be created.
     */
    public readonly attrPayType: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: Resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    public readonly attrSlaveZoneId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: VSwitch id
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcId: Vpc id
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property addressType: The network type of the CLB instance. Valid values:
     * - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
     * - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
     */
    public addressType: string | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Specifies whether to automatically pay for the subscription Internet-facing CLB instance. Valid values:
     * - **true**: automatically pays for the CLB instance. After you call this operation, the system automatically completes the payment and creates the CLB instance.- **false** (default): After you call the operation, the order is created but the payment is not completed. You can view the pending order in the console. The CLB instance will not be created until you complete the payment.**Note** This parameter is supported only by subscription instances created on the Alibaba Cloud China site.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:- **true**: Automatic renewal is enabled.- **false** (default): Automatic renewal is not enabled. You must renew the instance manually.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
     * When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
     * When PeriodUnit = year, the value range is 1-3.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
     * If PricingCycle is year, the value range is 1 to 5.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Instance billing method. Valid value:
     * - **PayBySpec** (default): Pay by spec.
     * - **PayByCLCU**: billed by usage.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The metering method of the Internet-facing CLB instance. Valid values:
     * - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
     * - **paybybandwidth**: pay-by-bandwidth.
     * **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    public loadBalancerName: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - **slb.s1.small**
     * - **slb.s2.small**
     * - **slb.s2.medium**
     * - **slb.s3.small**
     * - **slb.s3.medium**
     * - **slb.s3.large**
     * **Note** If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
     * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.
     */
    public loadBalancerSpec: string | ros.IResolvable | undefined;

    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    public masterZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    public modificationProtectionReason: string | ros.IResolvable | undefined;

    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    public modificationProtectionStatus: string | ros.IResolvable | undefined;

    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    public slaveZoneId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosLoadBalancer.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressIpVersion = this.getAtt('AddressIPVersion');
        this.attrAddressType = this.getAtt('AddressType');
        this.attrBandwidth = this.getAtt('Bandwidth');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrLoadBalancerName = this.getAtt('LoadBalancerName');
        this.attrLoadBalancerSpec = this.getAtt('LoadBalancerSpec');
        this.attrMasterZoneId = this.getAtt('MasterZoneId');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPayType = this.getAtt('PayType');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSlaveZoneId = this.getAtt('SlaveZoneId');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressIpVersion = props.addressIpVersion;
        this.addressType = props.addressType;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.duration = props.duration;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.loadBalancerName = props.loadBalancerName;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.masterZoneId = props.masterZoneId;
        this.modificationProtectionReason = props.modificationProtectionReason;
        this.modificationProtectionStatus = props.modificationProtectionStatus;
        this.payType = props.payType;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.slaveZoneId = props.slaveZoneId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressIpVersion: this.addressIpVersion,
            addressType: this.addressType,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            duration: this.duration,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            loadBalancerName: this.loadBalancerName,
            loadBalancerSpec: this.loadBalancerSpec,
            masterZoneId: this.masterZoneId,
            modificationProtectionReason: this.modificationProtectionReason,
            modificationProtectionStatus: this.modificationProtectionStatus,
            payType: this.payType,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            slaveZoneId: this.slaveZoneId,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancer {
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
function RosLoadBalancer_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancer.Tags` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancerClone`
 */
export interface RosLoadBalancerCloneProps {

    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    readonly sourceLoadBalancerId: string | ros.IResolvable;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    readonly backendServersPolicy?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
     * PayByCLCU: billed by usage.
     * If not specified, it is same with the source load balancer.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * @Property loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
     * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancerClone.TagsProperty[];

    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    readonly tagsPolicy?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancerCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerCloneProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    errors.collect(ros.propertyValidator('sourceLoadBalancerId', ros.requiredValidator)(properties.sourceLoadBalancerId));
    errors.collect(ros.propertyValidator('sourceLoadBalancerId', ros.validateString)(properties.sourceLoadBalancerId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.tagsPolicy && (typeof properties.tagsPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('tagsPolicy', ros.validateAllowedValues)({
          data: properties.tagsPolicy,
          allowedValues: ["clone","empty","append","replace"],
        }));
    }
    errors.collect(ros.propertyValidator('tagsPolicy', ros.validateString)(properties.tagsPolicy));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayBySpec","PayByCLCU"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosLoadBalancerClone_BackendServersPropertyValidator))(properties.backendServers));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLoadBalancerClone_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('loadBalancerSpec', ros.validateString)(properties.loadBalancerSpec));
    if(properties.backendServersPolicy && (typeof properties.backendServersPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('backendServersPolicy', ros.validateAllowedValues)({
          data: properties.backendServersPolicy,
          allowedValues: ["clone","empty","append","replace"],
        }));
    }
    errors.collect(ros.propertyValidator('backendServersPolicy', ros.validateString)(properties.backendServersPolicy));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerClonePropsValidator(properties).assertSuccess();
    }
    return {
      SourceLoadBalancerId: ros.stringToRosTemplate(properties.sourceLoadBalancerId),
      BackendServers: ros.listMapper(rosLoadBalancerCloneBackendServersPropertyToRosTemplate)(properties.backendServers),
      BackendServersPolicy: ros.stringToRosTemplate(properties.backendServersPolicy),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      LoadBalancerName: ros.stringToRosTemplate(properties.loadBalancerName),
      LoadBalancerSpec: ros.stringToRosTemplate(properties.loadBalancerSpec),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosLoadBalancerCloneTagsPropertyToRosTemplate)(properties.tags),
      TagsPolicy: ros.stringToRosTemplate(properties.tagsPolicy),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::LoadBalancerClone`
 */
export class RosLoadBalancerClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::LoadBalancerClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LoadBalancerId: The id of load balance generated
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sourceLoadBalancerId: Source load balancer id to clone
     */
    public sourceLoadBalancerId: string | ros.IResolvable;

    /**
     * @Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    public backendServers: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    public backendServersPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
     * PayByCLCU: billed by usage.
     * If not specified, it is same with the source load balancer.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    public loadBalancerName: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
     * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
     */
    public loadBalancerSpec: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosLoadBalancerClone.TagsProperty[] | undefined;

    /**
     * @Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    public tagsPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancerClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sourceLoadBalancerId = props.sourceLoadBalancerId;
        this.backendServers = props.backendServers;
        this.backendServersPolicy = props.backendServersPolicy;
        this.instanceChargeType = props.instanceChargeType;
        this.loadBalancerName = props.loadBalancerName;
        this.loadBalancerSpec = props.loadBalancerSpec;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.tagsPolicy = props.tagsPolicy;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sourceLoadBalancerId: this.sourceLoadBalancerId,
            backendServers: this.backendServers,
            backendServersPolicy: this.backendServersPolicy,
            instanceChargeType: this.instanceChargeType,
            loadBalancerName: this.loadBalancerName,
            loadBalancerSpec: this.loadBalancerSpec,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            tagsPolicy: this.tagsPolicy,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancerClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancerClone {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property type: The backend server type. Valid values:ecs: ECS instance (default)eni: Elastic Network Interface (ENI)
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property serverId: Need one valid instance id. The instance status should running.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property description: A description of the backend server.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP of the instance.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancerClone_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerCloneBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancerClone_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      Description: ros.stringToRosTemplate(properties.description),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

export namespace RosLoadBalancerClone {
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
function RosLoadBalancerClone_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::LoadBalancerClone.Tags` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerCloneTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancerClone_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export interface RosMasterSlaveServerGroupProps {

    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    readonly masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    readonly masterSlaveServerGroupName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMasterSlaveServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMasterSlaveServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMasterSlaveServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('masterSlaveServerGroupName', ros.validateString)(properties.masterSlaveServerGroupName));
    errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.requiredValidator)(properties.masterSlaveBackendServers));
    if(properties.masterSlaveBackendServers && (Array.isArray(properties.masterSlaveBackendServers) || (typeof properties.masterSlaveBackendServers) === 'string')) {
        errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.validateLength)({
            data: properties.masterSlaveBackendServers.length,
            min: 2,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('masterSlaveBackendServers', ros.listValidator(RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator))(properties.masterSlaveBackendServers));
    return errors.wrap('supplied properties not correct for "RosMasterSlaveServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMasterSlaveServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup` resource.
 */
// @ts-ignore TS6133
function rosMasterSlaveServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMasterSlaveServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      MasterSlaveBackendServers: ros.listMapper(rosMasterSlaveServerGroupMasterSlaveBackendServersPropertyToRosTemplate)(properties.masterSlaveBackendServers),
      MasterSlaveServerGroupName: ros.stringToRosTemplate(properties.masterSlaveServerGroupName),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::MasterSlaveServerGroup`
 */
export class RosMasterSlaveServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::MasterSlaveServerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute MasterSlaveServerGroupId: Active/standby server group ID.
     */
    public readonly attrMasterSlaveServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The ID of the Server Load Balancer instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property masterSlaveBackendServers: A list of active/standby server group.
     * An active/standby server group can only contain two backend servers.
     */
    public masterSlaveBackendServers: Array<RosMasterSlaveServerGroup.MasterSlaveBackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property masterSlaveServerGroupName: The name of the active/standby server group.
     */
    public masterSlaveServerGroupName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::MasterSlaveServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMasterSlaveServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMasterSlaveServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMasterSlaveServerGroupId = this.getAtt('MasterSlaveServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.masterSlaveBackendServers = props.masterSlaveBackendServers;
        this.masterSlaveServerGroupName = props.masterSlaveServerGroupName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            masterSlaveBackendServers: this.masterSlaveBackendServers,
            masterSlaveServerGroupName: this.masterSlaveServerGroupName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMasterSlaveServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosMasterSlaveServerGroup {
    /**
     * @stability external
     */
    export interface MasterSlaveBackendServersProperty {
        /**
         * @Property serverType: The identity of backend server. Could be "Master" (default) or "Slave"
         */
        readonly serverType?: string | ros.IResolvable;
        /**
         * @Property type: Specify the type of backend server. This parameter must be of the STRING type. Valid values:
     * ecs: an ECS instance
     * eni: an elastic network interface (ENI).
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property serverId: ECS instance ID
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP of ECS or ENI.
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port used by backend server. From 1 to 65535
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `MasterSlaveBackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `MasterSlaveBackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.serverType && (typeof properties.serverType) !== 'object') {
        errors.collect(ros.propertyValidator('serverType', ros.validateAllowedValues)({
          data: properties.serverType,
          allowedValues: ["Master","Slave"],
        }));
    }
    errors.collect(ros.propertyValidator('serverType', ros.validateString)(properties.serverType));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "MasterSlaveBackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup.MasterSlaveBackendServers` resource
 *
 * @param properties - the TypeScript properties of a `MasterSlaveBackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::MasterSlaveServerGroup.MasterSlaveBackendServers` resource.
 */
// @ts-ignore TS6133
function rosMasterSlaveServerGroupMasterSlaveBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosMasterSlaveServerGroup_MasterSlaveBackendServersPropertyValidator(properties).assertSuccess();
    return {
      ServerType: ros.stringToRosTemplate(properties.serverType),
      Type: ros.stringToRosTemplate(properties.type),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::Rule`
 */
export interface RosRuleProps {

    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property ruleList: The forwarding rules to add.
     */
    readonly ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerProtocol: The frontend protocol that is used by the SLB instance.
     */
    readonly listenerProtocol?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('listenerPort', ros.requiredValidator)(properties.listenerPort));
    if(properties.listenerPort && (typeof properties.listenerPort) !== 'object') {
        errors.collect(ros.propertyValidator('listenerPort', ros.validateRange)({
            data: properties.listenerPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('listenerPort', ros.validateNumber)(properties.listenerPort));
    errors.collect(ros.propertyValidator('ruleList', ros.requiredValidator)(properties.ruleList));
    if(properties.ruleList && (Array.isArray(properties.ruleList) || (typeof properties.ruleList) === 'string')) {
        errors.collect(ros.propertyValidator('ruleList', ros.validateLength)({
            data: properties.ruleList.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('ruleList', ros.listValidator(RosRule_RuleListPropertyValidator))(properties.ruleList));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('listenerProtocol', ros.validateString)(properties.listenerProtocol));
    return errors.wrap('supplied properties not correct for "RosRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule` resource
 *
 * @param properties - the TypeScript properties of a `RosRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule` resource.
 */
// @ts-ignore TS6133
function rosRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRulePropsValidator(properties).assertSuccess();
    }
    return {
      ListenerPort: ros.numberToRosTemplate(properties.listenerPort),
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      RuleList: ros.listMapper(rosRuleRuleListPropertyToRosTemplate)(properties.ruleList),
      ListenerProtocol: ros.stringToRosTemplate(properties.listenerProtocol),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::Rule`
 */
export class RosRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::Rule";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Rules: A list of forwarding rules. Each element of rules contains "RuleId".
     */
    public readonly attrRules: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property listenerPort: The front-end HTTPS listener port of the Server Load Balancer instance. Valid value:
     * 1-65535
     */
    public listenerPort: number | ros.IResolvable;

    /**
     * @Property loadBalancerId: The ID of Server Load Balancer instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property ruleList: The forwarding rules to add.
     */
    public ruleList: Array<RosRule.RuleListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property listenerProtocol: The frontend protocol that is used by the SLB instance.
     */
    public listenerProtocol: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::Rule`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRules = this.getAtt('Rules');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.listenerPort = props.listenerPort;
        this.loadBalancerId = props.loadBalancerId;
        this.ruleList = props.ruleList;
        this.listenerProtocol = props.listenerProtocol;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            listenerPort: this.listenerPort,
            loadBalancerId: this.loadBalancerId,
            ruleList: this.ruleList,
            listenerProtocol: this.listenerProtocol,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface AdvancedSettingsProperty {
        /**
         * @Property cookieTimeout: The timeout period of a cookie. Unit: seconds.
         */
        readonly cookieTimeout?: number | ros.IResolvable;
        /**
         * @Property cookie: The cookie that is configured on the server.
     * The cookie must be 1 to 200 characters in length and can contain only ASCII characters and digits. It cannot contain commas (,), semicolons (;), or space characters. It cannot start with a dollar sign ($).
         */
        readonly cookie?: string | ros.IResolvable;
        /**
         * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50.
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from success to fail.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckUri: The URI that is used for health checks.
         */
        readonly healthCheckUri?: string | ros.IResolvable;
        /**
         * @Property scheduler: The scheduling algorithm. Valid values:
     * wrr: Backend servers with higher weights receive more requests than those with lower weights.
     * rr: Requests are distributed to backend servers in sequence.
         */
        readonly scheduler?: string | ros.IResolvable;
        /**
         * @Property healthCheck: Specifies whether to enable the health check feature. Valid values:
     * on: yes
     * off: no
         */
        readonly healthCheck?: string | ros.IResolvable;
        /**
         * @Property healthCheckTimeout: The timeout period of a health check response. If a backend server, such as an Elastic Compute Service (ECS) instance, does not return a health check response within the specified timeout period, the server fails the health check. Unit: seconds. Valid values: 1 to 300.
         */
        readonly healthCheckTimeout?: number | ros.IResolvable;
        /**
         * @Property stickySession: Specifies whether to enable session persistence. Valid values:
     * on: yes
     * off: no
         */
        readonly stickySession?: string | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: The port that is used for health checks. Valid values: 1 to 65535.
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property healthyThreshold: The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from fail to success.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property listenerSync: Specifies whether to use the scheduling algorithm, session persistence, and health check configurations of the listener. Valid values:
     * on: uses the configurations of the listener.
     * off: does not use the configurations of the listener. You can customize the health check and session persistence configurations for the forwarding rule.
         */
        readonly listenerSync?: string | ros.IResolvable;
        /**
         * @Property healthCheckDomain: The domain name that is used for health checks. Valid values:
     * $_ip: the private IP address of a backend server. If you do not set this parameter or set the parameter to $_ip, the SLB instance uses the private IP address of each backend server for health checks.
     * domain: The domain name must be 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
         */
        readonly healthCheckDomain?: string | ros.IResolvable;
        /**
         * @Property stickySessionType: The method that is used to handle a cookie. Valid values:
     * insert: inserts a cookie.
     * server: rewrites a cookie.
         */
        readonly stickySessionType?: string | ros.IResolvable;
        /**
         * @Property healthCheckHttpCode: The HTTP status code for a successful health check. Multiple HTTP status codes are separated by commas (,).
     * Valid values: http_2xx, http_3xx, http_4xx, and http_5xx.
         */
        readonly healthCheckHttpCode?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AdvancedSettingsProperty`
 *
 * @param properties - the TypeScript properties of a `AdvancedSettingsProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_AdvancedSettingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cookieTimeout', ros.validateNumber)(properties.cookieTimeout));
    errors.collect(ros.propertyValidator('cookie', ros.validateString)(properties.cookie));
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    errors.collect(ros.propertyValidator('healthCheckUri', ros.validateString)(properties.healthCheckUri));
    if(properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
          data: properties.scheduler,
          allowedValues: ["wrr","rr"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    if(properties.healthCheck && (typeof properties.healthCheck) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheck', ros.validateAllowedValues)({
          data: properties.healthCheck,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheck', ros.validateString)(properties.healthCheck));
    errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateNumber)(properties.healthCheckTimeout));
    if(properties.stickySession && (typeof properties.stickySession) !== 'object') {
        errors.collect(ros.propertyValidator('stickySession', ros.validateAllowedValues)({
          data: properties.stickySession,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('stickySession', ros.validateString)(properties.stickySession));
    errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateNumber)(properties.healthCheckConnectPort));
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    if(properties.listenerSync && (typeof properties.listenerSync) !== 'object') {
        errors.collect(ros.propertyValidator('listenerSync', ros.validateAllowedValues)({
          data: properties.listenerSync,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('listenerSync', ros.validateString)(properties.listenerSync));
    errors.collect(ros.propertyValidator('healthCheckDomain', ros.validateString)(properties.healthCheckDomain));
    errors.collect(ros.propertyValidator('stickySessionType', ros.validateString)(properties.stickySessionType));
    errors.collect(ros.propertyValidator('healthCheckHttpCode', ros.validateString)(properties.healthCheckHttpCode));
    return errors.wrap('supplied properties not correct for "AdvancedSettingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.AdvancedSettings` resource
 *
 * @param properties - the TypeScript properties of a `AdvancedSettingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.AdvancedSettings` resource.
 */
// @ts-ignore TS6133
function rosRuleAdvancedSettingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_AdvancedSettingsPropertyValidator(properties).assertSuccess();
    return {
      CookieTimeout: ros.numberToRosTemplate(properties.cookieTimeout),
      Cookie: ros.stringToRosTemplate(properties.cookie),
      HealthCheckInterval: ros.numberToRosTemplate(properties.healthCheckInterval),
      UnhealthyThreshold: ros.numberToRosTemplate(properties.unhealthyThreshold),
      HealthCheckURI: ros.stringToRosTemplate(properties.healthCheckUri),
      Scheduler: ros.stringToRosTemplate(properties.scheduler),
      HealthCheck: ros.stringToRosTemplate(properties.healthCheck),
      HealthCheckTimeout: ros.numberToRosTemplate(properties.healthCheckTimeout),
      StickySession: ros.stringToRosTemplate(properties.stickySession),
      HealthCheckConnectPort: ros.numberToRosTemplate(properties.healthCheckConnectPort),
      HealthyThreshold: ros.numberToRosTemplate(properties.healthyThreshold),
      ListenerSync: ros.stringToRosTemplate(properties.listenerSync),
      HealthCheckDomain: ros.stringToRosTemplate(properties.healthCheckDomain),
      StickySessionType: ros.stringToRosTemplate(properties.stickySessionType),
      HealthCheckHttpCode: ros.stringToRosTemplate(properties.healthCheckHttpCode),
    };
}

export namespace RosRule {
    /**
     * @stability external
     */
    export interface RuleListProperty {
        /**
         * @Property vServerGroupId: The ID of the VServer group associated with the forwarding rule.
         */
        readonly vServerGroupId: string | ros.IResolvable;
        /**
         * @Property advancedSettings: The advanced settings of the rule.
         */
        readonly advancedSettings?: RosRule.AdvancedSettingsProperty | ros.IResolvable;
        /**
         * @Property domain: The domain name.
         */
        readonly domain?: string | ros.IResolvable;
        /**
         * @Property url: The URL.
         */
        readonly url?: string | ros.IResolvable;
        /**
         * @Property ruleName: The name of the forwarding rule.
         */
        readonly ruleName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RuleListProperty`
 *
 * @param properties - the TypeScript properties of a `RuleListProperty`
 *
 * @returns the result of the validation.
 */
function RosRule_RuleListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupId', ros.requiredValidator)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('vServerGroupId', ros.validateString)(properties.vServerGroupId));
    errors.collect(ros.propertyValidator('advancedSettings', RosRule_AdvancedSettingsPropertyValidator)(properties.advancedSettings));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    errors.collect(ros.propertyValidator('url', ros.validateString)(properties.url));
    errors.collect(ros.propertyValidator('ruleName', ros.requiredValidator)(properties.ruleName));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RuleListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.RuleList` resource
 *
 * @param properties - the TypeScript properties of a `RuleListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::Rule.RuleList` resource.
 */
// @ts-ignore TS6133
function rosRuleRuleListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRule_RuleListPropertyValidator(properties).assertSuccess();
    return {
      VServerGroupId: ros.stringToRosTemplate(properties.vServerGroupId),
      AdvancedSettings: rosRuleAdvancedSettingsPropertyToRosTemplate(properties.advancedSettings),
      Domain: ros.stringToRosTemplate(properties.domain),
      Url: ros.stringToRosTemplate(properties.url),
      RuleName: ros.stringToRosTemplate(properties.ruleName),
    };
}

/**
 * Properties for defining a `ALIYUN::SLB::VServerGroup`
 */
export interface RosVServerGroupProps {

    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    readonly vServerGroupName: string | ros.IResolvable;

    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers?: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosVServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vServerGroupName', ros.requiredValidator)(properties.vServerGroupName));
    errors.collect(ros.propertyValidator('vServerGroupName', ros.validateString)(properties.vServerGroupName));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('backendServers', ros.listValidator(RosVServerGroup_BackendServersPropertyValidator))(properties.backendServers));
    return errors.wrap('supplied properties not correct for "RosVServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosVServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      LoadBalancerId: ros.stringToRosTemplate(properties.loadBalancerId),
      VServerGroupName: ros.stringToRosTemplate(properties.vServerGroupName),
      BackendServers: ros.listMapper(rosVServerGroupBackendServersPropertyToRosTemplate)(properties.backendServers),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLB::VServerGroup`
 */
export class RosVServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLB::VServerGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * @Attribute VServerGroupId: The id of VServerGroup created.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The id of load balancer.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property vServerGroupName: Display name of the VServerGroup.
     */
    public vServerGroupName: string | ros.IResolvable;

    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    public backendServers: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBackendServers = this.getAtt('BackendServers');
        this.attrVServerGroupId = this.getAtt('VServerGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.vServerGroupName = props.vServerGroupName;
        this.backendServers = props.backendServers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            vServerGroupName: this.vServerGroupName,
            backendServers: this.backendServers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVServerGroup {
    /**
     * @stability external
     */
    export interface BackendServersProperty {
        /**
         * @Property type: The instance type of the backend server. This parameter must be set to a string. Valid values:
     * ecs: ECS instance. This is the default value.
     * eni: ENI.
     * eci: ECI.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property description: The description of the backend server. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the backend server. You can specify the ID of an Elastic Compute Service (ECS) instance,an elastic network interface (ENI) or elastic container instance (ECI).
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property serverIp: The IP address of an ECS instance, ENI or ECI
         */
        readonly serverIp?: string | ros.IResolvable;
        /**
         * @Property port: The port of backend server. From 1 to 65535.
         */
        readonly port: number | ros.IResolvable;
        /**
         * @Property weight: The weight of backend server of load balancer. From 0 to 100, 0 means offline. Default is 100.
         */
        readonly weight?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `BackendServersProperty`
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the result of the validation.
 */
function RosVServerGroup_BackendServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "BackendServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup.BackendServers` resource
 *
 * @param properties - the TypeScript properties of a `BackendServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLB::VServerGroup.BackendServers` resource.
 */
// @ts-ignore TS6133
function rosVServerGroupBackendServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVServerGroup_BackendServersPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Description: ros.stringToRosTemplate(properties.description),
      ServerId: ros.stringToRosTemplate(properties.serverId),
      ServerIp: ros.stringToRosTemplate(properties.serverIp),
      Port: ros.numberToRosTemplate(properties.port),
      Weight: ros.numberToRosTemplate(properties.weight),
    };
}
