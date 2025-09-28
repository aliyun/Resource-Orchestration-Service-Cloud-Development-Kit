// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosListener`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
export interface RosListenerProps {

    /**
     * @Property loadBalancerId: The ID of the gateway load balancer instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * @Property serverGroupId: The ID of the server group.
     */
    readonly serverGroupId: string | ros.IResolvable;

    /**
     * @Property listenerDescription: The custom listener description.
     * The length is limited to 2 to 256 characters. It supports Chinese and English letters and can contain numbers, half-width commas (,), half-width periods (.), half-width semicolons (;), forward slashes (\/), at(@), underscores (_), and dashes (-).
     */
    readonly listenerDescription?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of listener.
     */
    readonly tags?: RosListener.TagsProperty[];
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
    errors.collect(ros.propertyValidator('listenerDescription', ros.validateString)(properties.listenerDescription));
    errors.collect(ros.propertyValidator('serverGroupId', ros.requiredValidator)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('serverGroupId', ros.validateString)(properties.serverGroupId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.requiredValidator)(properties.loadBalancerId));
    errors.collect(ros.propertyValidator('loadBalancerId', ros.validateString)(properties.loadBalancerId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosListener_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosListenerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::Listener` resource
 *
 * @param properties - the TypeScript properties of a `RosListenerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::Listener` resource.
 */
// @ts-ignore TS6133
function rosListenerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosListenerPropsValidator(properties).assertSuccess();
    }
    return {
      'LoadBalancerId': ros.stringToRosTemplate(properties.loadBalancerId),
      'ServerGroupId': ros.stringToRosTemplate(properties.serverGroupId),
      'ListenerDescription': ros.stringToRosTemplate(properties.listenerDescription),
      'Tags': ros.listMapper(rosListenerTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GWLB::Listener`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Listener` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
 */
export class RosListener extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWLB::Listener";

    /**
     * @Attribute ListenerDescription: The custom listener description.
     */
    public readonly attrListenerDescription: ros.IResolvable;

    /**
     * @Attribute ListenerId: The ID of listener.
     */
    public readonly attrListenerId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the gateway load balancer instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute ServerGroupId: The ID of the server group.
     */
    public readonly attrServerGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The list of tags.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property loadBalancerId: The ID of the gateway load balancer instance.
     */
    public loadBalancerId: string | ros.IResolvable;

    /**
     * @Property serverGroupId: The ID of the server group.
     */
    public serverGroupId: string | ros.IResolvable;

    /**
     * @Property listenerDescription: The custom listener description.
     * The length is limited to 2 to 256 characters. It supports Chinese and English letters and can contain numbers, half-width commas (,), half-width periods (.), half-width semicolons (;), forward slashes (\/), at(@), underscores (_), and dashes (-).
     */
    public listenerDescription: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of listener.
     */
    public tags: RosListener.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosListenerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosListener.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrListenerDescription = this.getAtt('ListenerDescription');
        this.attrListenerId = this.getAtt('ListenerId');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrServerGroupId = this.getAtt('ServerGroupId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.loadBalancerId = props.loadBalancerId;
        this.serverGroupId = props.serverGroupId;
        this.listenerDescription = props.listenerDescription;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            loadBalancerId: this.loadBalancerId,
            serverGroupId: this.serverGroupId,
            listenerDescription: this.listenerDescription,
            tags: this.tags,
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
function RosListener_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::Listener.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::Listener.Tags` resource.
 */
// @ts-ignore TS6133
function rosListenerTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosListener_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosLoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
export interface RosLoadBalancerProps {

    /**
     * @Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressIpVersion: The protocol version. Value:
     * - Ipv4: Ipv4 type.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * @Property loadBalancerName: The name of the Gateway Load Balancer instance.
     * It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of load balancer.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
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
    errors.collect(ros.propertyValidator('loadBalancerName', ros.validateString)(properties.loadBalancerName));
    if(properties.addressIpVersion && (typeof properties.addressIpVersion) !== 'object') {
        errors.collect(ros.propertyValidator('addressIpVersion', ros.validateAllowedValues)({
          data: properties.addressIpVersion,
          allowedValues: ["Ipv4"],
        }));
    }
    errors.collect(ros.propertyValidator('addressIpVersion', ros.validateString)(properties.addressIpVersion));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneMappings', ros.requiredValidator)(properties.zoneMappings));
    if(properties.zoneMappings && (Array.isArray(properties.zoneMappings) || (typeof properties.zoneMappings) === 'string')) {
        errors.collect(ros.propertyValidator('zoneMappings', ros.validateLength)({
            data: properties.zoneMappings.length,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('zoneMappings', ros.listValidator(RosLoadBalancer_ZoneMappingsPropertyValidator))(properties.zoneMappings));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLoadBalancer_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosLoadBalancerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::LoadBalancer` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::LoadBalancer` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancerPropsValidator(properties).assertSuccess();
    }
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ZoneMappings': ros.listMapper(rosLoadBalancerZoneMappingsPropertyToRosTemplate)(properties.zoneMappings),
      'AddressIpVersion': ros.stringToRosTemplate(properties.addressIpVersion),
      'LoadBalancerName': ros.stringToRosTemplate(properties.loadBalancerName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosLoadBalancerTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GWLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
export class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWLB::LoadBalancer";

    /**
     * @Attribute AddressIpVersion: The protocol version.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * @Attribute BusinessStatus: The business status of Gateway Load Balancing.
     */
    public readonly attrBusinessStatus: ros.IResolvable;

    /**
     * @Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of **yyyy-MM-ddTHH:mm:ssZ**.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * @Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The list of tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    public readonly attrZoneMappings: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property zoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    public zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property addressIpVersion: The protocol version. Value:
     * - Ipv4: Ipv4 type.
     */
    public addressIpVersion: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerName: The name of the Gateway Load Balancer instance.
     * It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    public loadBalancerName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of load balancer.
     */
    public tags: RosLoadBalancer.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddressIpVersion = this.getAtt('AddressIpVersion');
        this.attrBusinessStatus = this.getAtt('BusinessStatus');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrLoadBalancerId = this.getAtt('LoadBalancerId');
        this.attrLoadBalancerName = this.getAtt('LoadBalancerName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneMappings = this.getAtt('ZoneMappings');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.zoneMappings = props.zoneMappings;
        this.addressIpVersion = props.addressIpVersion;
        this.loadBalancerName = props.loadBalancerName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            zoneMappings: this.zoneMappings,
            addressIpVersion: this.addressIpVersion,
            loadBalancerName: this.loadBalancerName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::LoadBalancer.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::LoadBalancer.Tags` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosLoadBalancer {
    /**
     * @stability external
     */
    export interface ZoneMappingsProperty {
        /**
         * @Property zoneId: The ID of the zone to which the Gateway Load Balancer instance belongs.
         */
        readonly zoneId: string | ros.IResolvable;
        /**
         * @Property vSwitchId: The ID of the vSwitch that corresponds to the zone. Each zone can use only one vSwitch and subnet.
         */
        readonly vSwitchId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ZoneMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancer_ZoneMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "ZoneMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::LoadBalancer.ZoneMappings` resource
 *
 * @param properties - the TypeScript properties of a `ZoneMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::LoadBalancer.ZoneMappings` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancerZoneMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancer_ZoneMappingsPropertyValidator(properties).assertSuccess();
    return {
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * Properties for defining a `RosServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
export interface RosServerGroupProps {

    /**
     * @Property vpcId: The VPC instance ID.
     * > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property connectionDrainConfig: Connected graceful interrupt configuration.
     */
    readonly connectionDrainConfig?: RosServerGroup.ConnectionDrainConfigProperty | ros.IResolvable;

    /**
     * @Property healthCheckConfig: Health check configurations.
     */
    readonly healthCheckConfig?: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * @Property protocol: Backend Protocol. Value:
     * **GENEVE (default)**.
     */
    readonly protocol?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scheduler: Scheduling algorithm. Value:
     * - **5TCH (default)**: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.
     * - **3TCH**: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.
     * - **2TCH**: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.
     */
    readonly scheduler?: string | ros.IResolvable;

    /**
     * @Property serverGroupName: The server group name.
     * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    readonly serverGroupName?: string | ros.IResolvable;

    /**
     * @Property serverGroupType: The server group type. Value:
     * - **Instance (default)**: The instance type. You can add Ecs, Eni, and Eci instances to the server group.
     * - **Ip**: The Ip address type. You can directly add backend servers of the Ip address type to the server group.
     */
    readonly serverGroupType?: string | ros.IResolvable;

    /**
     * @Property servers: List of servers.
     */
    readonly servers?: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property tags: Tags of server group.
     */
    readonly tags?: RosServerGroup.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosServerGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosServerGroupProps`
 *
 * @returns the result of the validation.
 */
function RosServerGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionDrainConfig', RosServerGroup_ConnectionDrainConfigPropertyValidator)(properties.connectionDrainConfig));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.scheduler && (typeof properties.scheduler) !== 'object') {
        errors.collect(ros.propertyValidator('scheduler', ros.validateAllowedValues)({
          data: properties.scheduler,
          allowedValues: ["5TCH","3TCH","2TCH"],
        }));
    }
    errors.collect(ros.propertyValidator('scheduler', ros.validateString)(properties.scheduler));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosServerGroup_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["GENEVE"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('servers', ros.listValidator(RosServerGroup_ServersPropertyValidator))(properties.servers));
    if(properties.serverGroupType && (typeof properties.serverGroupType) !== 'object') {
        errors.collect(ros.propertyValidator('serverGroupType', ros.validateAllowedValues)({
          data: properties.serverGroupType,
          allowedValues: ["Instance","Ip"],
        }));
    }
    errors.collect(ros.propertyValidator('serverGroupType', ros.validateString)(properties.serverGroupType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosServerGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('serverGroupName', ros.validateString)(properties.serverGroupName));
    return errors.wrap('supplied properties not correct for "RosServerGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosServerGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup` resource.
 */
// @ts-ignore TS6133
function rosServerGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosServerGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'ConnectionDrainConfig': rosServerGroupConnectionDrainConfigPropertyToRosTemplate(properties.connectionDrainConfig),
      'HealthCheckConfig': rosServerGroupHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
      'Protocol': ros.stringToRosTemplate(properties.protocol),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Scheduler': ros.stringToRosTemplate(properties.scheduler),
      'ServerGroupName': ros.stringToRosTemplate(properties.serverGroupName),
      'ServerGroupType': ros.stringToRosTemplate(properties.serverGroupType),
      'Servers': ros.listMapper(rosServerGroupServersPropertyToRosTemplate)(properties.servers),
      'Tags': ros.listMapper(rosServerGroupTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::GWLB::ServerGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ServerGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
 */
export class RosServerGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::GWLB::ServerGroup";

    /**
     * @Attribute ConnectionDrainConfig: Connected graceful interrupt configuration.
     */
    public readonly attrConnectionDrainConfig: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the server group.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute HealthCheckConfig: Health check configurations.
     */
    public readonly attrHealthCheckConfig: ros.IResolvable;

    /**
     * @Attribute Protocol: Backend Protocol.
     */
    public readonly attrProtocol: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Scheduler: Scheduling algorithm.
     */
    public readonly attrScheduler: ros.IResolvable;

    /**
     * @Attribute ServerGroupId: The server group ID.
     */
    public readonly attrServerGroupId: ros.IResolvable;

    /**
     * @Attribute ServerGroupName: The server group name.
     */
    public readonly attrServerGroupName: ros.IResolvable;

    /**
     * @Attribute ServerGroupType: The server group type.
     */
    public readonly attrServerGroupType: ros.IResolvable;

    /**
     * @Attribute Servers: List of servers.
     */
    public readonly attrServers: ros.IResolvable;

    /**
     * @Attribute Tags: List of resource tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VpcId: The VPC instance ID.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The VPC instance ID.
     * > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property connectionDrainConfig: Connected graceful interrupt configuration.
     */
    public connectionDrainConfig: RosServerGroup.ConnectionDrainConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property healthCheckConfig: Health check configurations.
     */
    public healthCheckConfig: RosServerGroup.HealthCheckConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property protocol: Backend Protocol. Value:
     * **GENEVE (default)**.
     */
    public protocol: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scheduler: Scheduling algorithm. Value:
     * - **5TCH (default)**: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.
     * - **3TCH**: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.
     * - **2TCH**: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.
     */
    public scheduler: string | ros.IResolvable | undefined;

    /**
     * @Property serverGroupName: The server group name.
     * It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    public serverGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property serverGroupType: The server group type. Value:
     * - **Instance (default)**: The instance type. You can add Ecs, Eni, and Eci instances to the server group.
     * - **Ip**: The Ip address type. You can directly add backend servers of the Ip address type to the server group.
     */
    public serverGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property servers: List of servers.
     */
    public servers: Array<RosServerGroup.ServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of server group.
     */
    public tags: RosServerGroup.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosServerGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosServerGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionDrainConfig = this.getAtt('ConnectionDrainConfig');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrHealthCheckConfig = this.getAtt('HealthCheckConfig');
        this.attrProtocol = this.getAtt('Protocol');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrScheduler = this.getAtt('Scheduler');
        this.attrServerGroupId = this.getAtt('ServerGroupId');
        this.attrServerGroupName = this.getAtt('ServerGroupName');
        this.attrServerGroupType = this.getAtt('ServerGroupType');
        this.attrServers = this.getAtt('Servers');
        this.attrTags = this.getAtt('Tags');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.connectionDrainConfig = props.connectionDrainConfig;
        this.healthCheckConfig = props.healthCheckConfig;
        this.protocol = props.protocol;
        this.resourceGroupId = props.resourceGroupId;
        this.scheduler = props.scheduler;
        this.serverGroupName = props.serverGroupName;
        this.serverGroupType = props.serverGroupType;
        this.servers = props.servers;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            connectionDrainConfig: this.connectionDrainConfig,
            healthCheckConfig: this.healthCheckConfig,
            protocol: this.protocol,
            resourceGroupId: this.resourceGroupId,
            scheduler: this.scheduler,
            serverGroupName: this.serverGroupName,
            serverGroupType: this.serverGroupType,
            servers: this.servers,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosServerGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface ConnectionDrainConfigProperty {
        /**
         * @Property connectionDrainEnabled: Whether to open the connection graceful interrupt. Value:
     * - **true**: enabled.
     * - **false**: Closed.
         */
        readonly connectionDrainEnabled?: boolean | ros.IResolvable;
        /**
         * @Property connectionDrainTimeout: Connection Grace interrupt timeout.
     * Unit: seconds.
     * Value range: 1~3600.
         */
        readonly connectionDrainTimeout?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ConnectionDrainConfigProperty`
 *
 * @param properties - the TypeScript properties of a `ConnectionDrainConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_ConnectionDrainConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('connectionDrainEnabled', ros.validateBoolean)(properties.connectionDrainEnabled));
    if(properties.connectionDrainTimeout && (typeof properties.connectionDrainTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('connectionDrainTimeout', ros.validateRange)({
            data: properties.connectionDrainTimeout,
            min: 1,
            max: 3600,
          }));
    }
    errors.collect(ros.propertyValidator('connectionDrainTimeout', ros.validateNumber)(properties.connectionDrainTimeout));
    return errors.wrap('supplied properties not correct for "ConnectionDrainConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.ConnectionDrainConfig` resource
 *
 * @param properties - the TypeScript properties of a `ConnectionDrainConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.ConnectionDrainConfig` resource.
 */
// @ts-ignore TS6133
function rosServerGroupConnectionDrainConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_ConnectionDrainConfigPropertyValidator(properties).assertSuccess();
    return {
      'ConnectionDrainEnabled': ros.booleanToRosTemplate(properties.connectionDrainEnabled),
      'ConnectionDrainTimeout': ros.numberToRosTemplate(properties.connectionDrainTimeout),
    };
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface HealthCheckConfigProperty {
        /**
         * @Property healthCheckInterval: The time interval of the health check.
     * Unit: seconds.
     * Value range: **1~50**.
     * Default value: **10**.
         */
        readonly healthCheckInterval?: number | ros.IResolvable;
        /**
         * @Property healthCheckConnectPort: The port of the backend server used for health check.
     * Value range: **1 to 65535**.
     * Default value: **80**.
         */
        readonly healthCheckConnectPort?: number | ros.IResolvable;
        /**
         * @Property unhealthyThreshold: The number of consecutive failed health checks that determine the health check status of the backend server from success to failure.
     * Value range: **2 to 10**.
     * Default value: **2**.
         */
        readonly unhealthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthyThreshold: After the number of consecutive successful health checks, the health check status of the backend server is determined as successful from failed.
     * Value range: **2 to 10**.
     * Default value: **2**.
         */
        readonly healthyThreshold?: number | ros.IResolvable;
        /**
         * @Property healthCheckPath: Health check path.
     * It can be 1 to 80 characters in length and can only use upper and lower case letters, digits, dashes (-), forward slashes (\/), half-width periods (.), percent signs (%), and half-width question marks (?), Pound sign (#) and and(&) and extended character set_;~! ()*[]@$^: ',+ =
     * Must start with a forward slash (\/).
     * > This parameter takes effect only when the HealthCheckProtocol is HTTP.
         */
        readonly healthCheckPath?: string | ros.IResolvable;
        /**
         * @Property healthCheckProtocol: Health check protocol, value:
     * - **TCP** (default): Sends a SYN handshake packet to check whether the server port is alive.
     * - **HTTP**: Sends a GET request to simulate the access behavior of the browser to check whether the server application is healthy.
         */
        readonly healthCheckProtocol?: string | ros.IResolvable;
        /**
         * @Property healthCheckConnectTimeout: The maximum timeout period for health check responses.
     * Unit: seconds.
     * Value range: **1 to 300**.
     * Default value: **5**.
         */
        readonly healthCheckConnectTimeout?: number | ros.IResolvable;
        /**
         * @Property healthCheckDomain: The domain name used for health checks. Value:
     * - **$SERVER_IP (default)**: Use the internal IP address of the backend server.
     * - **domain**: Specify a specific domain name. The length is limited to 1 to 80 characters. Only uppercase and lowercase letters, digits, dashes (-), and periods (.) can be used.
     * > This parameter takes effect only when the HealthCheckProtocol is HTTP.
         */
        readonly healthCheckDomain?: string | ros.IResolvable;
        /**
         * @Property healthCheckEnabled: Whether to enable health check. Value:
     * - **true (default)**: enabled.
     * - **false**: Closed.
         */
        readonly healthCheckEnabled?: boolean | ros.IResolvable;
        /**
         * @Property healthCheckHttpCode: Health status return code list.
         */
        readonly healthCheckHttpCode?: Array<string | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_HealthCheckConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.healthCheckInterval && (typeof properties.healthCheckInterval) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateRange)({
            data: properties.healthCheckInterval,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    if(properties.healthCheckConnectPort && (typeof properties.healthCheckConnectPort) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateRange)({
            data: properties.healthCheckConnectPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckConnectPort', ros.validateNumber)(properties.healthCheckConnectPort));
    if(properties.unhealthyThreshold && (typeof properties.unhealthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateRange)({
            data: properties.unhealthyThreshold,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('unhealthyThreshold', ros.validateNumber)(properties.unhealthyThreshold));
    if(properties.healthyThreshold && (typeof properties.healthyThreshold) !== 'object') {
        errors.collect(ros.propertyValidator('healthyThreshold', ros.validateRange)({
            data: properties.healthyThreshold,
            min: 2,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthyThreshold', ros.validateNumber)(properties.healthyThreshold));
    errors.collect(ros.propertyValidator('healthCheckPath', ros.validateString)(properties.healthCheckPath));
    if(properties.healthCheckProtocol && (typeof properties.healthCheckProtocol) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateAllowedValues)({
          data: properties.healthCheckProtocol,
          allowedValues: ["TCP","HTTP"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckProtocol', ros.validateString)(properties.healthCheckProtocol));
    if(properties.healthCheckConnectTimeout && (typeof properties.healthCheckConnectTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckConnectTimeout', ros.validateRange)({
            data: properties.healthCheckConnectTimeout,
            min: 1,
            max: 300,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckConnectTimeout', ros.validateNumber)(properties.healthCheckConnectTimeout));
    if(properties.healthCheckDomain && (typeof properties.healthCheckDomain) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckDomain', ros.validateAllowedValues)({
          data: properties.healthCheckDomain,
          allowedValues: ["$SERVER_IP","domain"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckDomain', ros.validateString)(properties.healthCheckDomain));
    errors.collect(ros.propertyValidator('healthCheckEnabled', ros.validateBoolean)(properties.healthCheckEnabled));
    errors.collect(ros.propertyValidator('healthCheckHttpCode', ros.listValidator(ros.validateString))(properties.healthCheckHttpCode));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosServerGroupHealthCheckConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
      'HealthCheckInterval': ros.numberToRosTemplate(properties.healthCheckInterval),
      'HealthCheckConnectPort': ros.numberToRosTemplate(properties.healthCheckConnectPort),
      'UnhealthyThreshold': ros.numberToRosTemplate(properties.unhealthyThreshold),
      'HealthyThreshold': ros.numberToRosTemplate(properties.healthyThreshold),
      'HealthCheckPath': ros.stringToRosTemplate(properties.healthCheckPath),
      'HealthCheckProtocol': ros.stringToRosTemplate(properties.healthCheckProtocol),
      'HealthCheckConnectTimeout': ros.numberToRosTemplate(properties.healthCheckConnectTimeout),
      'HealthCheckDomain': ros.stringToRosTemplate(properties.healthCheckDomain),
      'HealthCheckEnabled': ros.booleanToRosTemplate(properties.healthCheckEnabled),
      'HealthCheckHttpCode': ros.listMapper(ros.stringToRosTemplate)(properties.healthCheckHttpCode),
    };
}

export namespace RosServerGroup {
    /**
     * @stability external
     */
    export interface ServersProperty {
        /**
         * @Property serverType: Backend server type. Valid values:
     * - **Ecs**: ECS instance.
     * - **Eni**: ENI instance.
     * - **Eci**: ECI elastic container.
     * - **Ip**: Ip address.
         */
        readonly serverType: string | ros.IResolvable;
        /**
         * @Property serverId: The ID of the backend server.
         */
        readonly serverId: string | ros.IResolvable;
        /**
         * @Property port: The port used by the backend server
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property serverIp: Server ip.
         */
        readonly serverIp?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ServersProperty`
 *
 * @param properties - the TypeScript properties of a `ServersProperty`
 *
 * @returns the result of the validation.
 */
function RosServerGroup_ServersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('serverType', ros.requiredValidator)(properties.serverType));
    if(properties.serverType && (typeof properties.serverType) !== 'object') {
        errors.collect(ros.propertyValidator('serverType', ros.validateAllowedValues)({
          data: properties.serverType,
          allowedValues: ["Ecs","Eni","Eci","Ip"],
        }));
    }
    errors.collect(ros.propertyValidator('serverType', ros.validateString)(properties.serverType));
    errors.collect(ros.propertyValidator('serverId', ros.requiredValidator)(properties.serverId));
    errors.collect(ros.propertyValidator('serverId', ros.validateString)(properties.serverId));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateAllowedValues)({
          data: properties.port,
          allowedValues: [6081],
        }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('serverIp', ros.validateString)(properties.serverIp));
    return errors.wrap('supplied properties not correct for "ServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.Servers` resource
 *
 * @param properties - the TypeScript properties of a `ServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.Servers` resource.
 */
// @ts-ignore TS6133
function rosServerGroupServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_ServersPropertyValidator(properties).assertSuccess();
    return {
      'ServerType': ros.stringToRosTemplate(properties.serverType),
      'ServerId': ros.stringToRosTemplate(properties.serverId),
      'Port': ros.numberToRosTemplate(properties.port),
      'ServerIp': ros.stringToRosTemplate(properties.serverIp),
    };
}

export namespace RosServerGroup {
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
function RosServerGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::GWLB::ServerGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosServerGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosServerGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
