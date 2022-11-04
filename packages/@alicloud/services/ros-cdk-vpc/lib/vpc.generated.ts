// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIP`
 */
export interface RosAnycastEIPProps {

    /**
     * @Property bandwidth: Anycast EIP instance bandwidth
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property description: Anycast EIP instance description
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: Anycast EIP instance charge type
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: Anycast EIP instance access public network billing method
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property name: Anycast EIP instance name
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property serviceLocation: Anycast EIP instance access area
     */
    readonly serviceLocation?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAnycastEIPProps`
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPProps`
 *
 * @returns the result of the validation.
 */
function RosAnycastEIPPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.serviceLocation && (typeof properties.serviceLocation) !== 'object') {
        errors.collect(ros.propertyValidator('serviceLocation', ros.validateAllowedValues)({
          data: properties.serviceLocation,
          allowedValues: ["international"],
        }));
    }
    errors.collect(ros.propertyValidator('serviceLocation', ros.validateString)(properties.serviceLocation));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PostPaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosAnycastEIPProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIP` resource
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIP` resource.
 */
// @ts-ignore TS6133
function rosAnycastEIPPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAnycastEIPPropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      Description: ros.stringToRosTemplate(properties.description),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      Name: ros.stringToRosTemplate(properties.name),
      ServiceLocation: ros.stringToRosTemplate(properties.serviceLocation),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::AnycastEIP`
 */
export class RosAnycastEIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIP";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AnycastId: Anycast EIP instance ID
     */
    public readonly attrAnycastId: ros.IResolvable;

    /**
     * @Attribute IpAddress: Anycase IP address
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute Name: Anycast EIP instance name
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute OrderId: Order ID
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: Anycast EIP instance bandwidth
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property description: Anycast EIP instance description
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Anycast EIP instance charge type
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: Anycast EIP instance access public network billing method
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property name: Anycast EIP instance name
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property serviceLocation: Anycast EIP instance access area
     */
    public serviceLocation: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::AnycastEIP`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnycastEIPProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAnycastEIP.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAnycastId = this.getAtt('AnycastId');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrName = this.getAtt('Name');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.name = props.name;
        this.serviceLocation = props.serviceLocation;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            name: this.name,
            serviceLocation: this.serviceLocation,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAnycastEIPPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::AnycastEIPAssociation`
 */
export interface RosAnycastEIPAssociationProps {

    /**
     * @Property anycastId: Anycast EIP instance ID.
     */
    readonly anycastId: string | ros.IResolvable;

    /**
     * @Property bindInstanceId: The ID of the cloud resource instance to be bound.
     */
    readonly bindInstanceId: string | ros.IResolvable;

    /**
     * @Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    readonly bindInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
     */
    readonly bindInstanceType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAnycastEIPAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosAnycastEIPAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bindInstanceId', ros.requiredValidator)(properties.bindInstanceId));
    errors.collect(ros.propertyValidator('bindInstanceId', ros.validateString)(properties.bindInstanceId));
    errors.collect(ros.propertyValidator('bindInstanceRegionId', ros.requiredValidator)(properties.bindInstanceRegionId));
    errors.collect(ros.propertyValidator('bindInstanceRegionId', ros.validateString)(properties.bindInstanceRegionId));
    errors.collect(ros.propertyValidator('bindInstanceType', ros.requiredValidator)(properties.bindInstanceType));
    errors.collect(ros.propertyValidator('bindInstanceType', ros.validateString)(properties.bindInstanceType));
    errors.collect(ros.propertyValidator('anycastId', ros.requiredValidator)(properties.anycastId));
    errors.collect(ros.propertyValidator('anycastId', ros.validateString)(properties.anycastId));
    return errors.wrap('supplied properties not correct for "RosAnycastEIPAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIPAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosAnycastEIPAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::AnycastEIPAssociation` resource.
 */
// @ts-ignore TS6133
function rosAnycastEIPAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAnycastEIPAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      AnycastId: ros.stringToRosTemplate(properties.anycastId),
      BindInstanceId: ros.stringToRosTemplate(properties.bindInstanceId),
      BindInstanceRegionId: ros.stringToRosTemplate(properties.bindInstanceRegionId),
      BindInstanceType: ros.stringToRosTemplate(properties.bindInstanceType),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::AnycastEIPAssociation`
 */
export class RosAnycastEIPAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::AnycastEIPAssociation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AnycastId: Anycast EIP instance ID.
     */
    public readonly attrAnycastId: ros.IResolvable;

    /**
     * @Attribute BindInstanceId: The ID of the cloud resource instance to be bound.
     */
    public readonly attrBindInstanceId: ros.IResolvable;

    /**
     * @Attribute BindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    public readonly attrBindInstanceRegionId: ros.IResolvable;

    /**
     * @Attribute BindInstanceType: The cloud resource instance type to be bound.
     */
    public readonly attrBindInstanceType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property anycastId: Anycast EIP instance ID.
     */
    public anycastId: string | ros.IResolvable;

    /**
     * @Property bindInstanceId: The ID of the cloud resource instance to be bound.
     */
    public bindInstanceId: string | ros.IResolvable;

    /**
     * @Property bindInstanceRegionId: The region ID of the cloud resource instance to be bound.
     */
    public bindInstanceRegionId: string | ros.IResolvable;

    /**
     * @Property bindInstanceType: The cloud resource instance type to be bound. Valid value: SlbInstance, SLB instance of private network type.
     */
    public bindInstanceType: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::AnycastEIPAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAnycastEIPAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAnycastEIPAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAnycastId = this.getAtt('AnycastId');
        this.attrBindInstanceId = this.getAtt('BindInstanceId');
        this.attrBindInstanceRegionId = this.getAtt('BindInstanceRegionId');
        this.attrBindInstanceType = this.getAtt('BindInstanceType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.anycastId = props.anycastId;
        this.bindInstanceId = props.bindInstanceId;
        this.bindInstanceRegionId = props.bindInstanceRegionId;
        this.bindInstanceType = props.bindInstanceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            anycastId: this.anycastId,
            bindInstanceId: this.bindInstanceId,
            bindInstanceRegionId: this.bindInstanceRegionId,
            bindInstanceType: this.bindInstanceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAnycastEIPAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::BgpGroup`
 */
export interface RosBgpGroupProps {

    /**
     * @Property peerAsn: The AS number of the BGP peer.
     */
    readonly peerAsn: number | ros.IResolvable;

    /**
     * @Property routerId: The ID of the VBR.
     */
    readonly routerId: string | ros.IResolvable;

    /**
     * @Property authKey: The authentication key of the BGP group.
     */
    readonly authKey?: string | ros.IResolvable;

    /**
     * @Property description: The description of the BGP group. The description must be 2 to 256 characters in length.
     * It must start with a letter but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
     * the AS needs to be migrated or is merged with another AS, a new AS number replaces
     * the original one.
     */
    readonly isFakeAsn?: boolean | ros.IResolvable;

    /**
     * @Property localAsn: The AS number on the Alibaba Cloud side.
     */
    readonly localAsn?: number | ros.IResolvable;

    /**
     * @Property name: The name of the BGP group. The name must be 2 to 128 characters in length and can
     * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
     * with a letter but cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBgpGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpGroupProps`
 *
 * @returns the result of the validation.
 */
function RosBgpGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('localAsn', ros.validateNumber)(properties.localAsn));
    errors.collect(ros.propertyValidator('authKey', ros.validateString)(properties.authKey));
    errors.collect(ros.propertyValidator('routerId', ros.requiredValidator)(properties.routerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    errors.collect(ros.propertyValidator('peerAsn', ros.requiredValidator)(properties.peerAsn));
    errors.collect(ros.propertyValidator('peerAsn', ros.validateNumber)(properties.peerAsn));
    errors.collect(ros.propertyValidator('isFakeAsn', ros.validateBoolean)(properties.isFakeAsn));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosBgpGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpGroup` resource.
 */
// @ts-ignore TS6133
function rosBgpGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBgpGroupPropsValidator(properties).assertSuccess();
    }
    return {
      PeerAsn: ros.numberToRosTemplate(properties.peerAsn),
      RouterId: ros.stringToRosTemplate(properties.routerId),
      AuthKey: ros.stringToRosTemplate(properties.authKey),
      Description: ros.stringToRosTemplate(properties.description),
      IsFakeAsn: ros.booleanToRosTemplate(properties.isFakeAsn),
      LocalAsn: ros.numberToRosTemplate(properties.localAsn),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::BgpGroup`
 */
export class RosBgpGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BgpGroupId: The ID of the BGP group.
     */
    public readonly attrBgpGroupId: ros.IResolvable;

    /**
     * @Attribute Name: The name of the BGP group.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property peerAsn: The AS number of the BGP peer.
     */
    public peerAsn: number | ros.IResolvable;

    /**
     * @Property routerId: The ID of the VBR.
     */
    public routerId: string | ros.IResolvable;

    /**
     * @Property authKey: The authentication key of the BGP group.
     */
    public authKey: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the BGP group. The description must be 2 to 256 characters in length.
     * It must start with a letter but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property isFakeAsn: A router that runs BGP typically belongs to only one AS. In some cases, for example,
     * the AS needs to be migrated or is merged with another AS, a new AS number replaces
     * the original one.
     */
    public isFakeAsn: boolean | ros.IResolvable | undefined;

    /**
     * @Property localAsn: The AS number on the Alibaba Cloud side.
     */
    public localAsn: number | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the BGP group. The name must be 2 to 128 characters in length and can
     * contain digits, periods (.), underscores (_), and hyphens (-). The name must start
     * with a letter but cannot start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::BgpGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBgpGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBgpGroupId = this.getAtt('BgpGroupId');
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.peerAsn = props.peerAsn;
        this.routerId = props.routerId;
        this.authKey = props.authKey;
        this.description = props.description;
        this.isFakeAsn = props.isFakeAsn;
        this.localAsn = props.localAsn;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            peerAsn: this.peerAsn,
            routerId: this.routerId,
            authKey: this.authKey,
            description: this.description,
            isFakeAsn: this.isFakeAsn,
            localAsn: this.localAsn,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBgpGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::BgpNetwork`
 */
export interface RosBgpNetworkProps {

    /**
     * @Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
     * to a data center.
     */
    readonly dstCidrBlock: string | ros.IResolvable;

    /**
     * @Property routerId: The ID of the vRouter associated with the router interface.
     */
    readonly routerId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBgpNetworkProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpNetworkProps`
 *
 * @returns the result of the validation.
 */
function RosBgpNetworkPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dstCidrBlock', ros.requiredValidator)(properties.dstCidrBlock));
    errors.collect(ros.propertyValidator('dstCidrBlock', ros.validateString)(properties.dstCidrBlock));
    errors.collect(ros.propertyValidator('routerId', ros.requiredValidator)(properties.routerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    return errors.wrap('supplied properties not correct for "RosBgpNetworkProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpNetwork` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpNetworkProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpNetwork` resource.
 */
// @ts-ignore TS6133
function rosBgpNetworkPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBgpNetworkPropsValidator(properties).assertSuccess();
    }
    return {
      DstCidrBlock: ros.stringToRosTemplate(properties.dstCidrBlock),
      RouterId: ros.stringToRosTemplate(properties.routerId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::BgpNetwork`
 */
export class RosBgpNetwork extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpNetwork";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
to a data center.
     */
    public readonly attrDstCidrBlock: ros.IResolvable;

    /**
     * @Attribute RouterId: The ID of the vRouter associated with the router interface.
     */
    public readonly attrRouterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
     * to a data center.
     */
    public dstCidrBlock: string | ros.IResolvable;

    /**
     * @Property routerId: The ID of the vRouter associated with the router interface.
     */
    public routerId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::BgpNetwork`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpNetworkProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBgpNetwork.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDstCidrBlock = this.getAtt('DstCidrBlock');
        this.attrRouterId = this.getAtt('RouterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dstCidrBlock = props.dstCidrBlock;
        this.routerId = props.routerId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dstCidrBlock: this.dstCidrBlock,
            routerId: this.routerId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBgpNetworkPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::BgpPeer`
 */
export interface RosBgpPeerProps {

    /**
     * @Property bgpGroupId: The ID of the BGP group.
     */
    readonly bgpGroupId: string | ros.IResolvable;

    /**
     * @Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    readonly enableBfd?: boolean | ros.IResolvable;

    /**
     * @Property peerIpAddress: The IP address of the BGP peer.
     */
    readonly peerIpAddress?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosBgpPeerProps`
 *
 * @param properties - the TypeScript properties of a `RosBgpPeerProps`
 *
 * @returns the result of the validation.
 */
function RosBgpPeerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('peerIpAddress', ros.validateString)(properties.peerIpAddress));
    errors.collect(ros.propertyValidator('enableBfd', ros.validateBoolean)(properties.enableBfd));
    errors.collect(ros.propertyValidator('bgpGroupId', ros.requiredValidator)(properties.bgpGroupId));
    errors.collect(ros.propertyValidator('bgpGroupId', ros.validateString)(properties.bgpGroupId));
    return errors.wrap('supplied properties not correct for "RosBgpPeerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpPeer` resource
 *
 * @param properties - the TypeScript properties of a `RosBgpPeerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::BgpPeer` resource.
 */
// @ts-ignore TS6133
function rosBgpPeerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosBgpPeerPropsValidator(properties).assertSuccess();
    }
    return {
      BgpGroupId: ros.stringToRosTemplate(properties.bgpGroupId),
      EnableBfd: ros.booleanToRosTemplate(properties.enableBfd),
      PeerIpAddress: ros.stringToRosTemplate(properties.peerIpAddress),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::BgpPeer`
 */
export class RosBgpPeer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::BgpPeer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BgpPeerId: The ID of the BGP peer.
     */
    public readonly attrBgpPeerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bgpGroupId: The ID of the BGP group.
     */
    public bgpGroupId: string | ros.IResolvable;

    /**
     * @Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    public enableBfd: boolean | ros.IResolvable | undefined;

    /**
     * @Property peerIpAddress: The IP address of the BGP peer.
     */
    public peerIpAddress: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::BgpPeer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBgpPeerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosBgpPeer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBgpPeerId = this.getAtt('BgpPeerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bgpGroupId = props.bgpGroupId;
        this.enableBfd = props.enableBfd;
        this.peerIpAddress = props.peerIpAddress;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bgpGroupId: this.bgpGroupId,
            enableBfd: this.enableBfd,
            peerIpAddress: this.peerIpAddress,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosBgpPeerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`
 */
export interface RosCommonBandwidthPackageProps {

    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    readonly ratio?: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCommonBandwidthPackage.TagsProperty[];

    /**
     * @Property zone: Zone Id.
     */
    readonly zone?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zone', ros.validateString)(properties.zone));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.ratio && (typeof properties.ratio) !== 'object') {
        errors.collect(ros.propertyValidator('ratio', ros.validateRange)({
            data: properties.ratio,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('ratio', ros.validateNumber)(properties.ratio));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosCommonBandwidthPackage_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCommonBandwidthPackageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommonBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      Description: ros.stringToRosTemplate(properties.description),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      ISP: ros.stringToRosTemplate(properties.isp),
      Name: ros.stringToRosTemplate(properties.name),
      Ratio: ros.numberToRosTemplate(properties.ratio),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosCommonBandwidthPackageTagsPropertyToRosTemplate)(properties.tags),
      Zone: ros.stringToRosTemplate(properties.zone),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackage`
 */
export class RosCommonBandwidthPackage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackage";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property isp: Line type of EIP, value: BGP (multi-line).
     */
    public isp: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    public ratio: number | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosCommonBandwidthPackage.TagsProperty[] | undefined;

    /**
     * @Property zone: Zone Id.
     */
    public zone: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommonBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBandwidthPackageId = this.getAtt('BandwidthPackageId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.description = props.description;
        this.internetChargeType = props.internetChargeType;
        this.isp = props.isp;
        this.name = props.name;
        this.ratio = props.ratio;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.zone = props.zone;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            description: this.description,
            internetChargeType: this.internetChargeType,
            isp: this.isp,
            name: this.name,
            ratio: this.ratio,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            zone: this.zone,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommonBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCommonBandwidthPackage {
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
function RosCommonBandwidthPackage_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackage.Tags` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackageTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCommonBandwidthPackage_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
export interface RosCommonBandwidthPackageIpProps {

    /**
     * @Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;

    /**
     * @Property eips: List of eip associated with the Internet Shared Bandwidth instance.
     */
    readonly eips: Array<RosCommonBandwidthPackageIp.EipsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommonBandwidthPackageIpProps`
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageIpProps`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackageIpPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eips', ros.requiredValidator)(properties.eips));
    errors.collect(ros.propertyValidator('eips', ros.listValidator(RosCommonBandwidthPackageIp_EipsPropertyValidator))(properties.eips));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.requiredValidator)(properties.bandwidthPackageId));
    errors.collect(ros.propertyValidator('bandwidthPackageId', ros.validateString)(properties.bandwidthPackageId));
    return errors.wrap('supplied properties not correct for "RosCommonBandwidthPackageIpProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp` resource
 *
 * @param properties - the TypeScript properties of a `RosCommonBandwidthPackageIpProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackageIpPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommonBandwidthPackageIpPropsValidator(properties).assertSuccess();
    }
    return {
      BandwidthPackageId: ros.stringToRosTemplate(properties.bandwidthPackageId),
      Eips: ros.listMapper(rosCommonBandwidthPackageIpEipsPropertyToRosTemplate)(properties.eips),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
export class RosCommonBandwidthPackageIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CommonBandwidthPackageIp";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AllocationIds: All eip allocation ids of common bandwidth package.
     */
    public readonly attrAllocationIds: ros.IResolvable;

    /**
     * @Attribute IpAddresses: All eip addresses of common bandwidth package.
     */
    public readonly attrIpAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    public bandwidthPackageId: string | ros.IResolvable;

    /**
     * @Property eips: List of eip associated with the Internet Shared Bandwidth instance.
     */
    public eips: Array<RosCommonBandwidthPackageIp.EipsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommonBandwidthPackageIpProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommonBandwidthPackageIp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationIds = this.getAtt('AllocationIds');
        this.attrIpAddresses = this.getAtt('IpAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidthPackageId = props.bandwidthPackageId;
        this.eips = props.eips;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidthPackageId: this.bandwidthPackageId,
            eips: this.eips,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommonBandwidthPackageIpPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosCommonBandwidthPackageIp {
    /**
     * @stability external
     */
    export interface EipsProperty {
        /**
         * @Property bandwidth: The maximum allocatable bandwidth value in Mbps within the shared bandwidth.
     * 0 which means no limit.
     * Default to no limit.
         */
        readonly bandwidth?: number | ros.IResolvable;
        /**
         * @Property allocationId: The ID of the EIP instance.
         */
        readonly allocationId: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EipsProperty`
 *
 * @param properties - the TypeScript properties of a `EipsProperty`
 *
 * @returns the result of the validation.
 */
function RosCommonBandwidthPackageIp_EipsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 0,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    return errors.wrap('supplied properties not correct for "EipsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp.Eips` resource
 *
 * @param properties - the TypeScript properties of a `EipsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CommonBandwidthPackageIp.Eips` resource.
 */
// @ts-ignore TS6133
function rosCommonBandwidthPackageIpEipsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosCommonBandwidthPackageIp_EipsPropertyValidator(properties).assertSuccess();
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::CustomerGateway`
 */
export interface RosCustomerGatewayProps {

    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    readonly ipAddress: string | ros.IResolvable;

    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomerGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosCustomerGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('ipAddress', ros.requiredValidator)(properties.ipAddress));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCustomerGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::CustomerGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomerGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::CustomerGateway` resource.
 */
// @ts-ignore TS6133
function rosCustomerGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomerGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      IpAddress: ros.stringToRosTemplate(properties.ipAddress),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::CustomerGateway`
 */
export class RosCustomerGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::CustomerGateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CustomerGatewayId: The ID of the user gateway.
     */
    public readonly attrCustomerGatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipAddress: The IP address of the user gateway.
     */
    public ipAddress: string | ros.IResolvable;

    /**
     * @Property description: Description of the user gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the user gateway.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::CustomerGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomerGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomerGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCustomerGatewayId = this.getAtt('CustomerGatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipAddress = props.ipAddress;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipAddress: this.ipAddress,
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomerGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::DhcpOptionsSet`
 */
export interface RosDhcpOptionsSetProps {

    /**
     * @Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly dhcpOptionsSetDescription?: string | ros.IResolvable;

    /**
     * @Property dhcpOptionsSetName: The name of the DHCP options set.
     * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
     */
    readonly dhcpOptionsSetName?: string | ros.IResolvable;

    /**
     * @Property domainName: The root domain, for example, example.com.
     * After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    readonly domainName?: string | ros.IResolvable;

    /**
     * @Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    readonly domainNameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDhcpOptionsSetProps`
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetProps`
 *
 * @returns the result of the validation.
 */
function RosDhcpOptionsSetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('dhcpOptionsSetName', ros.validateString)(properties.dhcpOptionsSetName));
    errors.collect(ros.propertyValidator('dhcpOptionsSetDescription', ros.validateString)(properties.dhcpOptionsSetDescription));
    if(properties.domainNameServers && (Array.isArray(properties.domainNameServers) || (typeof properties.domainNameServers) === 'string')) {
        errors.collect(ros.propertyValidator('domainNameServers', ros.validateLength)({
            data: properties.domainNameServers.length,
            min: 0,
            max: 4,
          }));
    }
    errors.collect(ros.propertyValidator('domainNameServers', ros.listValidator(ros.validateString))(properties.domainNameServers));
    return errors.wrap('supplied properties not correct for "RosDhcpOptionsSetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSet` resource
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSet` resource.
 */
// @ts-ignore TS6133
function rosDhcpOptionsSetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDhcpOptionsSetPropsValidator(properties).assertSuccess();
    }
    return {
      DhcpOptionsSetDescription: ros.stringToRosTemplate(properties.dhcpOptionsSetDescription),
      DhcpOptionsSetName: ros.stringToRosTemplate(properties.dhcpOptionsSetName),
      DomainName: ros.stringToRosTemplate(properties.domainName),
      DomainNameServers: ros.listMapper(ros.stringToRosTemplate)(properties.domainNameServers),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSet`
 */
export class RosDhcpOptionsSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSet";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    public readonly attrDhcpOptionsSetId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    public dhcpOptionsSetDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dhcpOptionsSetName: The name of the DHCP options set.
     * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
     */
    public dhcpOptionsSetName: string | ros.IResolvable | undefined;

    /**
     * @Property domainName: The root domain, for example, example.com.
     * After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    public domainName: string | ros.IResolvable | undefined;

    /**
     * @Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    public domainNameServers: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSet`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDhcpOptionsSetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDhcpOptionsSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDhcpOptionsSetId = this.getAtt('DhcpOptionsSetId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dhcpOptionsSetDescription = props.dhcpOptionsSetDescription;
        this.dhcpOptionsSetName = props.dhcpOptionsSetName;
        this.domainName = props.domainName;
        this.domainNameServers = props.domainNameServers;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dhcpOptionsSetDescription: this.dhcpOptionsSetDescription,
            dhcpOptionsSetName: this.dhcpOptionsSetName,
            domainName: this.domainName,
            domainNameServers: this.domainNameServers,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDhcpOptionsSetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::DhcpOptionsSetAttachment`
 */
export interface RosDhcpOptionsSetAttachmentProps {

    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    readonly dhcpOptionsSetId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
     */
    readonly vpcId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDhcpOptionsSetAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosDhcpOptionsSetAttachmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.requiredValidator)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('dhcpOptionsSetId', ros.validateString)(properties.dhcpOptionsSetId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    return errors.wrap('supplied properties not correct for "RosDhcpOptionsSetAttachmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSetAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosDhcpOptionsSetAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::DhcpOptionsSetAttachment` resource.
 */
// @ts-ignore TS6133
function rosDhcpOptionsSetAttachmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDhcpOptionsSetAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
      DhcpOptionsSetId: ros.stringToRosTemplate(properties.dhcpOptionsSetId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::DhcpOptionsSetAttachment`
 */
export class RosDhcpOptionsSetAttachment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::DhcpOptionsSetAttachment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DhcpOptionsSetId: The ID of the DHCP options set.
     */
    public readonly attrDhcpOptionsSetId: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VPC network.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dhcpOptionsSetId: The ID of the DHCP options set.
     */
    public dhcpOptionsSetId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the VPC network that is to be associated with the DHCP options set.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSetAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDhcpOptionsSetAttachmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDhcpOptionsSetAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDhcpOptionsSetId = this.getAtt('DhcpOptionsSetId');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dhcpOptionsSetId = props.dhcpOptionsSetId;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dhcpOptionsSetId: this.dhcpOptionsSetId,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDhcpOptionsSetAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::EIP`
 */
export interface RosEIPProps {

    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. 
     *   While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIP.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosEIPProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPProps`
 *
 * @returns the result of the validation.
 */
function RosEIPPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["Postpaid","Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('netmode', ros.validateString)(properties.netmode));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEIP_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosEIPProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP` resource.
 */
// @ts-ignore TS6133
function rosEIPPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEIPPropsValidator(properties).assertSuccess();
    }
    return {
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Description: ros.stringToRosTemplate(properties.description),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      Isp: ros.stringToRosTemplate(properties.isp),
      Name: ros.stringToRosTemplate(properties.name),
      Netmode: ros.stringToRosTemplate(properties.netmode),
      Period: ros.numberToRosTemplate(properties.period),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosEIPTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::EIP`
 */
export class RosEIP extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIP";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    public readonly attrAllocationId: ros.IResolvable;

    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    public readonly attrEipAddress: ros.IResolvable;

    /**
     * @Attribute Isp: The line type.
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * @Attribute OrderId: Order ID of prepaid EIP instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    public isp: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    public netmode: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. 
     *   While choose pay by year, it could be from 1 to 3.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosEIP.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::VPC::EIP`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEIP.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrEipAddress = this.getAtt('EipAddress');
        this.attrIsp = this.getAtt('Isp');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.isp = props.isp;
        this.name = props.name;
        this.netmode = props.netmode;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoPay: this.autoPay,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            isp: this.isp,
            name: this.name,
            netmode: this.netmode,
            period: this.period,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEIPPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEIP {
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
function RosEIP_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIP.Tags` resource.
 */
// @ts-ignore TS6133
function rosEIPTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEIP_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::EIPAssociation`
 */
export interface RosEIPAssociationProps {

    /**
     * @Property allocationId: EIP instance id to bind.
     */
    readonly allocationId: string | ros.IResolvable;

    /**
     * @Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    readonly mode?: string | ros.IResolvable;

    /**
     * @Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEIPAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosEIPAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["NAT","MULTI_BINDED","BINDED"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('allocationId', ros.requiredValidator)(properties.allocationId));
    errors.collect(ros.propertyValidator('allocationId', ros.validateString)(properties.allocationId));
    return errors.wrap('supplied properties not correct for "RosEIPAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPAssociation` resource.
 */
// @ts-ignore TS6133
function rosEIPAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEIPAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      AllocationId: ros.stringToRosTemplate(properties.allocationId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Mode: ros.stringToRosTemplate(properties.mode),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::EIPAssociation`
 */
export class RosEIPAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPAssociation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    public readonly attrAllocationId: ros.IResolvable;

    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    public readonly attrEipAddress: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property allocationId: EIP instance id to bind.
     */
    public allocationId: string | ros.IResolvable;

    /**
     * @Property instanceId: ECS/SLB/NAT/HaVip/ENI instance id to bid the EIP.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property mode: The mode of association. Valid values:
     * NAT(Default): NAT mode.
     * BINDED: Cut-through mode.
     * MULTI_BINDED: Multi-EIP to ENI mode.
     * This is required only when the value of InstanceType is NetworkInterface.
     */
    public mode: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: An IP address in the CIDR block of the VSwitch.
     * If you leave the option empty, the system allocates a private IP address according to the VPC ID and VSwitch ID.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::EIPAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEIPAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrEipAddress = this.getAtt('EipAddress');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.allocationId = props.allocationId;
        this.instanceId = props.instanceId;
        this.mode = props.mode;
        this.privateIpAddress = props.privateIpAddress;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            allocationId: this.allocationId,
            instanceId: this.instanceId,
            mode: this.mode,
            privateIpAddress: this.privateIpAddress,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEIPAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::EIPPro`
 */
export interface RosEIPProProps {

    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the requested EIP.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property ipAddress: The IP address of the requested EIP.
     */
    readonly ipAddress?: string | ros.IResolvable;

    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. 
     *   While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIPPro.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosEIPProProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPProProps`
 *
 * @returns the result of the validation.
 */
function RosEIPProPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["Postpaid","Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('isp', ros.validateString)(properties.isp));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('netmode', ros.validateString)(properties.netmode));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosEIPPro_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosEIPProProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPProProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro` resource.
 */
// @ts-ignore TS6133
function rosEIPProPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEIPProPropsValidator(properties).assertSuccess();
    }
    return {
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Description: ros.stringToRosTemplate(properties.description),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      IpAddress: ros.stringToRosTemplate(properties.ipAddress),
      ISP: ros.stringToRosTemplate(properties.isp),
      Name: ros.stringToRosTemplate(properties.name),
      Netmode: ros.stringToRosTemplate(properties.netmode),
      Period: ros.numberToRosTemplate(properties.period),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosEIPProTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::EIPPro`
 */
export class RosEIPPro extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPPro";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    public readonly attrAllocationId: ros.IResolvable;

    /**
     * @Attribute EipAddress: IP address of created EIP.
     */
    public readonly attrEipAddress: ros.IResolvable;

    /**
     * @Attribute ISP: The line type.
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * @Attribute OrderId: Order ID of prepaid EIP instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the requested EIP.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property ipAddress: The IP address of the requested EIP.
     */
    public ipAddress: string | ros.IResolvable | undefined;

    /**
     * @Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    public isp: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property netmode: The network type. Valid value: public (public network).
     */
    public netmode: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. 
     *   While choose pay by year, it could be from 1 to 3.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosEIPPro.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::VPC::EIPPro`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPProProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEIPPro.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAllocationId = this.getAtt('AllocationId');
        this.attrEipAddress = this.getAtt('EipAddress');
        this.attrIsp = this.getAtt('ISP');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoPay = props.autoPay;
        this.bandwidth = props.bandwidth;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceId = props.instanceId;
        this.internetChargeType = props.internetChargeType;
        this.ipAddress = props.ipAddress;
        this.isp = props.isp;
        this.name = props.name;
        this.netmode = props.netmode;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoPay: this.autoPay,
            bandwidth: this.bandwidth,
            deletionProtection: this.deletionProtection,
            description: this.description,
            instanceChargeType: this.instanceChargeType,
            instanceId: this.instanceId,
            internetChargeType: this.internetChargeType,
            ipAddress: this.ipAddress,
            isp: this.isp,
            name: this.name,
            netmode: this.netmode,
            period: this.period,
            pricingCycle: this.pricingCycle,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEIPProPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosEIPPro {
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
function RosEIPPro_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPPro.Tags` resource.
 */
// @ts-ignore TS6133
function rosEIPProTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosEIPPro_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::EIPSegment`
 */
export interface RosEIPSegmentProps {

    /**
     * @Property eipMask: The mask of the contiguous EIP group. Valid values:
     * 28: 16 contiguous EIPs are allocated for one call.
     * 27: 32 contiguous EIPs are allocated for one call.
     * 26: 64 contiguous EIPs are allocated for one call.
     * 25: 128 contiguous EIPs are allocated for one call.
     * 24: 256 contiguous EIPs are allocated for one call.
     * Note The actual number of assigned EIPs may be less than the expected number because one,
     * three, or four EIPs may be reserved.
     */
    readonly eipMask: number | ros.IResolvable;

    /**
     * @Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * @Property internetChargeType: The metering method of the contiguous EIPs. Valid values:
     * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
     * PayByTraffic: Fees are charged based on data transfer.
     * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property netmode: The network type. Valid values:
     * public: the Internet. This is the default value. After contiguous EIPs are associated with
     * cloud resources, the cloud resources can access the Internet by using the EIPs.
     * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
     * cloud resources can access the hybrid cloud by using the EIPs.
     * Note This network type is available only to users who are added to the whitelist. To use
     * this network type, contact your customer manager.
     */
    readonly netmode?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEIPSegmentProps`
 *
 * @param properties - the TypeScript properties of a `RosEIPSegmentProps`
 *
 * @returns the result of the validation.
 */
function RosEIPSegmentPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('eipMask', ros.requiredValidator)(properties.eipMask));
    if(properties.eipMask && (typeof properties.eipMask) !== 'object') {
        errors.collect(ros.propertyValidator('eipMask', ros.validateAllowedValues)({
          data: properties.eipMask,
          allowedValues: [28,27,26,25,24],
        }));
    }
    errors.collect(ros.propertyValidator('eipMask', ros.validateNumber)(properties.eipMask));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.netmode && (typeof properties.netmode) !== 'object') {
        errors.collect(ros.propertyValidator('netmode', ros.validateAllowedValues)({
          data: properties.netmode,
          allowedValues: ["public","hybrid"],
        }));
    }
    errors.collect(ros.propertyValidator('netmode', ros.validateString)(properties.netmode));
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByBandwidth","PayByTraffic"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosEIPSegmentProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPSegment` resource
 *
 * @param properties - the TypeScript properties of a `RosEIPSegmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::EIPSegment` resource.
 */
// @ts-ignore TS6133
function rosEIPSegmentPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEIPSegmentPropsValidator(properties).assertSuccess();
    }
    return {
      EipMask: ros.numberToRosTemplate(properties.eipMask),
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      Netmode: ros.stringToRosTemplate(properties.netmode),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::EIPSegment`
 */
export class RosEIPSegment extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::EIPSegment";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute EipAddresses: List of EIP addresses. like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
     */
    public readonly attrEipAddresses: ros.IResolvable;

    /**
     * @Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
     */
    public readonly attrEipSegmentInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property eipMask: The mask of the contiguous EIP group. Valid values:
     * 28: 16 contiguous EIPs are allocated for one call.
     * 27: 32 contiguous EIPs are allocated for one call.
     * 26: 64 contiguous EIPs are allocated for one call.
     * 25: 128 contiguous EIPs are allocated for one call.
     * 24: 256 contiguous EIPs are allocated for one call.
     * Note The actual number of assigned EIPs may be less than the expected number because one,
     * three, or four EIPs may be reserved.
     */
    public eipMask: number | ros.IResolvable;

    /**
     * @Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
     */
    public bandwidth: number | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The metering method of the contiguous EIPs. Valid values:
     * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
     * PayByTraffic: Fees are charged based on data transfer.
     * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property netmode: The network type. Valid values:
     * public: the Internet. This is the default value. After contiguous EIPs are associated with
     * cloud resources, the cloud resources can access the Internet by using the EIPs.
     * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
     * cloud resources can access the hybrid cloud by using the EIPs.
     * Note This network type is available only to users who are added to the whitelist. To use
     * this network type, contact your customer manager.
     */
    public netmode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::EIPSegment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEIPSegmentProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEIPSegment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEipAddresses = this.getAtt('EipAddresses');
        this.attrEipSegmentInstanceId = this.getAtt('EipSegmentInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eipMask = props.eipMask;
        this.bandwidth = props.bandwidth;
        this.internetChargeType = props.internetChargeType;
        this.netmode = props.netmode;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            eipMask: this.eipMask,
            bandwidth: this.bandwidth,
            internetChargeType: this.internetChargeType,
            netmode: this.netmode,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEIPSegmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::FlowLog`
 */
export interface RosFlowLogProps {

    /**
     * @Property logStoreName: The log store name.
     */
    readonly logStoreName: string | ros.IResolvable;

    /**
     * @Property projectName: The project name.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property resourceId: The resource id.
     */
    readonly resourceId: string | ros.IResolvable;

    /**
     * @Property resourceType: The resource type.
     */
    readonly resourceType: string | ros.IResolvable;

    /**
     * @Property trafficType: The traffic type.
     */
    readonly trafficType: string | ros.IResolvable;

    /**
     * @Property description: The Description of flow log.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property flowLogName: The flow log name.
     */
    readonly flowLogName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFlowLogProps`
 *
 * @param properties - the TypeScript properties of a `RosFlowLogProps`
 *
 * @returns the result of the validation.
 */
function RosFlowLogPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('flowLogName', ros.validateString)(properties.flowLogName));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('logStoreName', ros.requiredValidator)(properties.logStoreName));
    errors.collect(ros.propertyValidator('logStoreName', ros.validateString)(properties.logStoreName));
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('resourceType', ros.requiredValidator)(properties.resourceType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('trafficType', ros.requiredValidator)(properties.trafficType));
    errors.collect(ros.propertyValidator('trafficType', ros.validateString)(properties.trafficType));
    return errors.wrap('supplied properties not correct for "RosFlowLogProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::FlowLog` resource
 *
 * @param properties - the TypeScript properties of a `RosFlowLogProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::FlowLog` resource.
 */
// @ts-ignore TS6133
function rosFlowLogPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFlowLogPropsValidator(properties).assertSuccess();
    }
    return {
      LogStoreName: ros.stringToRosTemplate(properties.logStoreName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
      TrafficType: ros.stringToRosTemplate(properties.trafficType),
      Description: ros.stringToRosTemplate(properties.description),
      FlowLogName: ros.stringToRosTemplate(properties.flowLogName),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::FlowLog`
 */
export class RosFlowLog extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::FlowLog";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Description: The Description of flow log.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute FlowLogId: The flow log ID.
     */
    public readonly attrFlowLogId: ros.IResolvable;

    /**
     * @Attribute FlowLogName: The flow log name.
     */
    public readonly attrFlowLogName: ros.IResolvable;

    /**
     * @Attribute LogStoreName: The log store name.
     */
    public readonly attrLogStoreName: ros.IResolvable;

    /**
     * @Attribute ProjectName: The project name.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * @Attribute ResourceId: The resource id.
     */
    public readonly attrResourceId: ros.IResolvable;

    /**
     * @Attribute ResourceType: The resource type.
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * @Attribute TrafficType: The traffic type.
     */
    public readonly attrTrafficType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logStoreName: The log store name.
     */
    public logStoreName: string | ros.IResolvable;

    /**
     * @Property projectName: The project name.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property resourceId: The resource id.
     */
    public resourceId: string | ros.IResolvable;

    /**
     * @Property resourceType: The resource type.
     */
    public resourceType: string | ros.IResolvable;

    /**
     * @Property trafficType: The traffic type.
     */
    public trafficType: string | ros.IResolvable;

    /**
     * @Property description: The Description of flow log.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property flowLogName: The flow log name.
     */
    public flowLogName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::FlowLog`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFlowLogProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFlowLog.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrFlowLogId = this.getAtt('FlowLogId');
        this.attrFlowLogName = this.getAtt('FlowLogName');
        this.attrLogStoreName = this.getAtt('LogStoreName');
        this.attrProjectName = this.getAtt('ProjectName');
        this.attrResourceId = this.getAtt('ResourceId');
        this.attrResourceType = this.getAtt('ResourceType');
        this.attrTrafficType = this.getAtt('TrafficType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logStoreName = props.logStoreName;
        this.projectName = props.projectName;
        this.resourceId = props.resourceId;
        this.resourceType = props.resourceType;
        this.trafficType = props.trafficType;
        this.description = props.description;
        this.flowLogName = props.flowLogName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logStoreName: this.logStoreName,
            projectName: this.projectName,
            resourceId: this.resourceId,
            resourceType: this.resourceType,
            trafficType: this.trafficType,
            description: this.description,
            flowLogName: this.flowLogName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFlowLogPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::GrantInstanceToCen`
 */
export interface RosGrantInstanceToCenProps {

    /**
     * @Property cenId: The ID of the CEN instance to be authorized.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * @Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    readonly cenOwnerId: number | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the network instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    readonly instanceType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosGrantInstanceToCenProps`
 *
 * @param properties - the TypeScript properties of a `RosGrantInstanceToCenProps`
 *
 * @returns the result of the validation.
 */
function RosGrantInstanceToCenPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('cenOwnerId', ros.requiredValidator)(properties.cenOwnerId));
    errors.collect(ros.propertyValidator('cenOwnerId', ros.validateNumber)(properties.cenOwnerId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('instanceType', ros.requiredValidator)(properties.instanceType));
    if(properties.instanceType && (typeof properties.instanceType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceType', ros.validateAllowedValues)({
          data: properties.instanceType,
          allowedValues: ["CCN","VBR","VPC"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    return errors.wrap('supplied properties not correct for "RosGrantInstanceToCenProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::GrantInstanceToCen` resource
 *
 * @param properties - the TypeScript properties of a `RosGrantInstanceToCenProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::GrantInstanceToCen` resource.
 */
// @ts-ignore TS6133
function rosGrantInstanceToCenPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosGrantInstanceToCenPropsValidator(properties).assertSuccess();
    }
    return {
      CenId: ros.stringToRosTemplate(properties.cenId),
      CenOwnerId: ros.numberToRosTemplate(properties.cenOwnerId),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      InstanceType: ros.stringToRosTemplate(properties.instanceType),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::GrantInstanceToCen`
 */
export class RosGrantInstanceToCen extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::GrantInstanceToCen";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CenId: The ID of the CEN instance to be authorized.
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the network instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cenId: The ID of the CEN instance to be authorized.
     */
    public cenId: string | ros.IResolvable;

    /**
     * @Property cenOwnerId: The UID of the account to which the target CEN instance belongs.
     */
    public cenOwnerId: number | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the network instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property instanceType: The type of the network instance. Valid values:
     * VPC: Virtual Private Cloud (VPC).
     * VBR: Virtual Border Router (VBR).
     * CCN: Cloud Connect Network (CCN).
     */
    public instanceType: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::GrantInstanceToCen`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGrantInstanceToCenProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosGrantInstanceToCen.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = this.getAtt('CenId');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.cenOwnerId = props.cenOwnerId;
        this.instanceId = props.instanceId;
        this.instanceType = props.instanceType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cenId: this.cenId,
            cenOwnerId: this.cenOwnerId,
            instanceId: this.instanceId,
            instanceType: this.instanceType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosGrantInstanceToCenPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::IpsecServer`
 */
export interface RosIpsecServerProps {

    /**
     * @Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
     */
    readonly clientIpPool: string | ros.IResolvable;

    /**
     * @Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
     */
    readonly localSubnet: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: VPN gateway instance ID.
     */
    readonly vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately. 
     * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
     */
    readonly effectImmediately?: boolean | ros.IResolvable;

    /**
     * @Property ikeConfig: Negotiation parameter configuration in the first phase.
     */
    readonly ikeConfig?: RosIpsecServer.IkeConfigProperty | ros.IResolvable;

    /**
     * @Property ipsecConfig: Negotiation parameter configuration in the second phase.
     */
    readonly ipsecConfig?: RosIpsecServer.IpsecConfigProperty | ros.IResolvable;

    /**
     * @Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
     */
    readonly ipsecServerName?: string | ros.IResolvable;

    /**
     * @Property psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
     */
    readonly psk?: string | ros.IResolvable;

    /**
     * @Property pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
     */
    readonly pskEnabled?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIpsecServerProps`
 *
 * @param properties - the TypeScript properties of a `RosIpsecServerProps`
 *
 * @returns the result of the validation.
 */
function RosIpsecServerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('effectImmediately', ros.validateBoolean)(properties.effectImmediately));
    errors.collect(ros.propertyValidator('clientIpPool', ros.requiredValidator)(properties.clientIpPool));
    errors.collect(ros.propertyValidator('clientIpPool', ros.validateString)(properties.clientIpPool));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('ipsecConfig', RosIpsecServer_IpsecConfigPropertyValidator)(properties.ipsecConfig));
    errors.collect(ros.propertyValidator('psk', ros.validateString)(properties.psk));
    errors.collect(ros.propertyValidator('ikeConfig', RosIpsecServer_IkeConfigPropertyValidator)(properties.ikeConfig));
    errors.collect(ros.propertyValidator('ipsecServerName', ros.validateString)(properties.ipsecServerName));
    errors.collect(ros.propertyValidator('pskEnabled', ros.validateBoolean)(properties.pskEnabled));
    return errors.wrap('supplied properties not correct for "RosIpsecServerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer` resource
 *
 * @param properties - the TypeScript properties of a `RosIpsecServerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer` resource.
 */
// @ts-ignore TS6133
function rosIpsecServerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpsecServerPropsValidator(properties).assertSuccess();
    }
    return {
      ClientIpPool: ros.stringToRosTemplate(properties.clientIpPool),
      LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
      VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
      EffectImmediately: ros.booleanToRosTemplate(properties.effectImmediately),
      IkeConfig: rosIpsecServerIkeConfigPropertyToRosTemplate(properties.ikeConfig),
      IpsecConfig: rosIpsecServerIpsecConfigPropertyToRosTemplate(properties.ipsecConfig),
      IpsecServerName: ros.stringToRosTemplate(properties.ipsecServerName),
      Psk: ros.stringToRosTemplate(properties.psk),
      PskEnabled: ros.booleanToRosTemplate(properties.pskEnabled),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::IpsecServer`
 */
export class RosIpsecServer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::IpsecServer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute IpsecServerId: IPsec server ID.
     */
    public readonly attrIpsecServerId: ros.IResolvable;

    /**
     * @Attribute IpsecServerName: IPsec server name.
     */
    public readonly attrIpsecServerName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clientIpPool: Client network segment refers to the address segment that assigns access addresses to the virtual network card of the client. Note: The client network segment cannot conflict with the VPC side network segment.
     */
    public clientIpPool: string | ros.IResolvable;

    /**
     * @Property localSubnet: The local network segment refers to the network segment on the VPC side that needs to be interconnected with the client network segment. Use half-width commas (,) to separate multiple network segments, for example: 192.168.1.0/24,192.168.2.0/24.
     */
    public localSubnet: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: VPN gateway instance ID.
     */
    public vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property effectImmediately: true: Apply the new configuration and trigger a reconnection immediately. 
     * false: Trigger a reconnection only when network traffic occurs. (The reconnection may cause the network to be unavailable for a brief moment)
     */
    public effectImmediately: boolean | ros.IResolvable | undefined;

    /**
     * @Property ikeConfig: Negotiation parameter configuration in the first phase.
     */
    public ikeConfig: RosIpsecServer.IkeConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property ipsecConfig: Negotiation parameter configuration in the second phase.
     */
    public ipsecConfig: RosIpsecServer.IpsecConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property ipsecServerName: The value must be 2 to 128 characters in length and start with a letter or Chinese character. It can contain digits, underscores (_), and hyphens (-).
     */
    public ipsecServerName: string | ros.IResolvable | undefined;

    /**
     * @Property psk: Pre-Shared key. Used for identity authentication between the VPN gateway and the client. A 16-bit random string is randomly generated by default, or you can manually specify the key. The length is limited to 100 characters.
     */
    public psk: string | ros.IResolvable | undefined;

    /**
     * @Property pskEnabled: Whether to enable the pre-shared key authentication method. Only the value is true, which means that the pre-shared key authentication mode is enabled.
     */
    public pskEnabled: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::IpsecServer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpsecServerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpsecServer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpsecServerId = this.getAtt('IpsecServerId');
        this.attrIpsecServerName = this.getAtt('IpsecServerName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clientIpPool = props.clientIpPool;
        this.localSubnet = props.localSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.effectImmediately = props.effectImmediately;
        this.ikeConfig = props.ikeConfig;
        this.ipsecConfig = props.ipsecConfig;
        this.ipsecServerName = props.ipsecServerName;
        this.psk = props.psk;
        this.pskEnabled = props.pskEnabled;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clientIpPool: this.clientIpPool,
            localSubnet: this.localSubnet,
            vpnGatewayId: this.vpnGatewayId,
            effectImmediately: this.effectImmediately,
            ikeConfig: this.ikeConfig,
            ipsecConfig: this.ipsecConfig,
            ipsecServerName: this.ipsecServerName,
            psk: this.psk,
            pskEnabled: this.pskEnabled,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpsecServerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIpsecServer {
    /**
     * @stability external
     */
    export interface IkeConfigProperty {
        /**
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase. Default value: sha1.
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property localId: IPsec server ID. Support FQDN and IP address format, the default value is the VPN gateway public network IP address.
         */
        readonly localId?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: Encryption algorithm negotiated in the first stage. Default value: aes.
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1 or ikev2, default value: ikev2.
         */
        readonly ikeVersion?: string | ros.IResolvable;
        /**
         * @Property ikeMode: Negotiation mode of the IKE version. Default value: main.
         */
        readonly ikeMode?: string | ros.IResolvable;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. Default value: 86400, in seconds.
         */
        readonly ikeLifetime?: number | ros.IResolvable;
        /**
         * @Property remoteId: Peer ID. Support FQDN and IP address format, the default value is empty.
         */
        readonly remoteId?: string | ros.IResolvable;
        /**
         * @Property ikePfs: The Diffie-Hellman key exchange algorithm used in the first stage of negotiation. Default value: group2.
         */
        readonly ikePfs?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IkeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosIpsecServer_IkeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    errors.collect(ros.propertyValidator('localId', ros.validateString)(properties.localId));
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
    errors.collect(ros.propertyValidator('ikeVersion', ros.validateString)(properties.ikeVersion));
    errors.collect(ros.propertyValidator('ikeMode', ros.validateString)(properties.ikeMode));
    errors.collect(ros.propertyValidator('ikeLifetime', ros.validateNumber)(properties.ikeLifetime));
    errors.collect(ros.propertyValidator('remoteId', ros.validateString)(properties.remoteId));
    errors.collect(ros.propertyValidator('ikePfs', ros.validateString)(properties.ikePfs));
    return errors.wrap('supplied properties not correct for "IkeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IkeConfig` resource
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IkeConfig` resource.
 */
// @ts-ignore TS6133
function rosIpsecServerIkeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpsecServer_IkeConfigPropertyValidator(properties).assertSuccess();
    return {
      IkeAuthAlg: ros.stringToRosTemplate(properties.ikeAuthAlg),
      LocalId: ros.stringToRosTemplate(properties.localId),
      IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
      IkeVersion: ros.stringToRosTemplate(properties.ikeVersion),
      IkeMode: ros.stringToRosTemplate(properties.ikeMode),
      IkeLifetime: ros.numberToRosTemplate(properties.ikeLifetime),
      RemoteId: ros.stringToRosTemplate(properties.remoteId),
      IkePfs: ros.stringToRosTemplate(properties.ikePfs),
    };
}

export namespace RosIpsecServer {
    /**
     * @stability external
     */
    export interface IpsecConfigProperty {
        /**
         * @Property ipsecPfs: The Diffie-Hellman key exchange algorithm used in the second phase of negotiation. Default value: group2.
         */
        readonly ipsecPfs?: string | ros.IResolvable;
        /**
         * @Property ipsecEncAlg: Encryption algorithm negotiated in the second stage. Default value: aes.
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: The authentication algorithm negotiated in the second phase. Default value: sha1.
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: The lifetime of the SA negotiated in the second stage. Default value: 86400, in seconds.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpsecConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosIpsecServer_IpsecConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateString)(properties.ipsecAuthAlg));
    errors.collect(ros.propertyValidator('ipsecLifetime', ros.validateNumber)(properties.ipsecLifetime));
    return errors.wrap('supplied properties not correct for "IpsecConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IpsecConfig` resource
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::IpsecServer.IpsecConfig` resource.
 */
// @ts-ignore TS6133
function rosIpsecServerIpsecConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpsecServer_IpsecConfigPropertyValidator(properties).assertSuccess();
    return {
      IpsecPfs: ros.stringToRosTemplate(properties.ipsecPfs),
      IpsecEncAlg: ros.stringToRosTemplate(properties.ipsecEncAlg),
      IpsecAuthAlg: ros.stringToRosTemplate(properties.ipsecAuthAlg),
      IpsecLifetime: ros.numberToRosTemplate(properties.ipsecLifetime),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::Ipv6Gateway`
 */
export interface RosIpv6GatewayProps {

    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    readonly spec?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIpv6Gateway.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosIpv6GatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv6GatewayProps`
 *
 * @returns the result of the validation.
 */
function RosIpv6GatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosIpv6Gateway_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosIpv6GatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv6GatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway` resource.
 */
// @ts-ignore TS6133
function rosIpv6GatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpv6GatewayPropsValidator(properties).assertSuccess();
    }
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
      Spec: ros.stringToRosTemplate(properties.spec),
      Tags: ros.listMapper(rosIpv6GatewayTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::Ipv6Gateway`
 */
export class RosIpv6Gateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6Gateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Ipv6GatewayId: ID IPv6 gateway.
     */
    public readonly attrIpv6GatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: To open VPC ID IPv6 gateway.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property description: Description of IPv6 gateway.
     * Length of 2 to 256 characters, must begin with a letter or Chinese, may contain numbers, numbers, underscore (_) and dot dash (-), but not at the http (.): // or https: // at the beginning .
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: Name of the IPv6 gateway.
     * Length of 2 to 128 characters, beginning with a letter or Chinese, can contain numbers, dot, underscore (_) and dash (-), but not at http (.): // or with https: // .
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property spec: Specifications IPv6 gateway, the value:
     * Small (default): Free.
     * Medium: Enterprise Edition.
     * Large: Enterprise Enhanced Edition.
     * Different specifications of the IPv6 forwarding capability of the gateway is different. For more information, see IPv6 gateway specification.
     */
    public spec: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosIpv6Gateway.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::VPC::Ipv6Gateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv6GatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpv6Gateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpv6GatewayId = this.getAtt('Ipv6GatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.name = props.name;
        this.spec = props.spec;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            description: this.description,
            name: this.name,
            spec: this.spec,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpv6GatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIpv6Gateway {
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
function RosIpv6Gateway_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6Gateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosIpv6GatewayTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpv6Gateway_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::Ipv6InternetBandwidth`
 */
export interface RosIpv6InternetBandwidthProps {

    /**
     * @Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
     * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
     * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
     * Small (default free version), the public network bandwidth range 1-500.
     * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
     * Large (Enterprise Edition), the public network bandwidth range 1-2000.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property ipv6AddressId: ID of IPv6 address.
     */
    readonly ipv6AddressId: string | ros.IResolvable;

    /**
     * @Property ipv6GatewayId: ID of IPv6 gateway.
     */
    readonly ipv6GatewayId: string | ros.IResolvable;

    /**
     * @Property internetChargeType: IPv6 public network bandwidth billing, value:
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosIpv6InternetBandwidth.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosIpv6InternetBandwidthProps`
 *
 * @param properties - the TypeScript properties of a `RosIpv6InternetBandwidthProps`
 *
 * @returns the result of the validation.
 */
function RosIpv6InternetBandwidthPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 1,
            max: 5000,
          }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('ipv6AddressId', ros.requiredValidator)(properties.ipv6AddressId));
    errors.collect(ros.propertyValidator('ipv6AddressId', ros.validateString)(properties.ipv6AddressId));
    errors.collect(ros.propertyValidator('ipv6GatewayId', ros.requiredValidator)(properties.ipv6GatewayId));
    errors.collect(ros.propertyValidator('ipv6GatewayId', ros.validateString)(properties.ipv6GatewayId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosIpv6InternetBandwidth_TagsPropertyValidator))(properties.tags));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByTraffic","PayByBandwidth"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    return errors.wrap('supplied properties not correct for "RosIpv6InternetBandwidthProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth` resource
 *
 * @param properties - the TypeScript properties of a `RosIpv6InternetBandwidthProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth` resource.
 */
// @ts-ignore TS6133
function rosIpv6InternetBandwidthPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpv6InternetBandwidthPropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      Ipv6AddressId: ros.stringToRosTemplate(properties.ipv6AddressId),
      Ipv6GatewayId: ros.stringToRosTemplate(properties.ipv6GatewayId),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      Tags: ros.listMapper(rosIpv6InternetBandwidthTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::Ipv6InternetBandwidth`
 */
export class RosIpv6InternetBandwidth extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::Ipv6InternetBandwidth";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InternetBandwidthId: Purchase of public network bandwidth.
     */
    public readonly attrInternetBandwidthId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: Public IPv6 address of bandwidth, unit: Mbps, range: 1-5000.
     * When InternetChargeType is PayByBandwidth, the bandwidth of the public network is the IPv6 address 1-5000.
     * When InternetChargeType is PayByTraffic, public network bandwidth IPv6 addresses while IPv6 gateway restricted specifications.
     * Small (default free version), the public network bandwidth range 1-500.
     * Medium (Enterprise Edition), the public network bandwidth range from 1 to 1000.
     * Large (Enterprise Edition), the public network bandwidth range 1-2000.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property ipv6AddressId: ID of IPv6 address.
     */
    public ipv6AddressId: string | ros.IResolvable;

    /**
     * @Property ipv6GatewayId: ID of IPv6 gateway.
     */
    public ipv6GatewayId: string | ros.IResolvable;

    /**
     * @Property internetChargeType: IPv6 public network bandwidth billing, value:
     * PayByTraffic: by using the traffic accounting.
     * PayByBandwidth (default): Bandwidth billing.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosIpv6InternetBandwidth.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::VPC::Ipv6InternetBandwidth`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpv6InternetBandwidthProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpv6InternetBandwidth.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInternetBandwidthId = this.getAtt('InternetBandwidthId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.ipv6AddressId = props.ipv6AddressId;
        this.ipv6GatewayId = props.ipv6GatewayId;
        this.internetChargeType = props.internetChargeType;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            ipv6AddressId: this.ipv6AddressId,
            ipv6GatewayId: this.ipv6GatewayId,
            internetChargeType: this.internetChargeType,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpv6InternetBandwidthPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIpv6InternetBandwidth {
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
function RosIpv6InternetBandwidth_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::Ipv6InternetBandwidth.Tags` resource.
 */
// @ts-ignore TS6133
function rosIpv6InternetBandwidthTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIpv6InternetBandwidth_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::NatGateway`
 */
export interface RosNatGatewayProps {

    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
     * NAT: NAT mode. IPv4 gateways are supported.
     * Note If the EIP is associated with the NAT gateway in NAT mode, 
     * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs. 
     * Make sure that the vSwitch has sufficient private IP addresses. 
     * Otherwise, the EIP cannot be associated with the NAT gateway. 
     * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
     */
    readonly eipBindMode?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string | ros.IResolvable;

    /**
     * @Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    readonly natType?: string | ros.IResolvable;

    /**
     * @Property networkType: The type of the created NAT gateway.
     * Internet: public network NAT gateway.
     * Intranet: VPC NAT gateway.
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNatGateway.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosNatGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosNatGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('natGatewayName', ros.validateString)(properties.natGatewayName));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('eipBindMode', ros.validateString)(properties.eipBindMode));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('deletionProtection', ros.validateBoolean)(properties.deletionProtection));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.natType && (typeof properties.natType) !== 'object') {
        errors.collect(ros.propertyValidator('natType', ros.validateAllowedValues)({
          data: properties.natType,
          allowedValues: ["Enhanced"],
        }));
    }
    errors.collect(ros.propertyValidator('natType', ros.validateString)(properties.natType));
    if(properties.internetChargeType && (typeof properties.internetChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('internetChargeType', ros.validateAllowedValues)({
          data: properties.internetChargeType,
          allowedValues: ["PayByLcu","PayBySpec"],
        }));
    }
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.networkType && (typeof properties.networkType) !== 'object') {
        errors.collect(ros.propertyValidator('networkType', ros.validateAllowedValues)({
          data: properties.networkType,
          allowedValues: ["internet","intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosNatGateway_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosNatGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosNatGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      DeletionProtection: ros.booleanToRosTemplate(properties.deletionProtection),
      Description: ros.stringToRosTemplate(properties.description),
      Duration: ros.numberToRosTemplate(properties.duration),
      EipBindMode: ros.stringToRosTemplate(properties.eipBindMode),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      InternetChargeType: ros.stringToRosTemplate(properties.internetChargeType),
      NatGatewayName: ros.stringToRosTemplate(properties.natGatewayName),
      NatType: ros.stringToRosTemplate(properties.natType),
      NetworkType: ros.stringToRosTemplate(properties.networkType),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      Tags: ros.listMapper(rosNatGatewayTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::NatGateway`
 */
export class RosNatGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatGateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ForwardTableId: The forward table id.
     */
    public readonly attrForwardTableId: ros.IResolvable;

    /**
     * @Attribute NatGatewayId: The Id of created NAT gateway.
     */
    public readonly attrNatGatewayId: ros.IResolvable;

    /**
     * @Attribute SNatTableId: The SNAT table id.
     */
    public readonly attrSNatTableId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoPay: Specifies whether to enable automatic payment. Default is true.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    public deletionProtection: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
     * NAT: NAT mode. IPv4 gateways are supported.
     * Note If the EIP is associated with the NAT gateway in NAT mode, 
     * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs. 
     * Make sure that the vSwitch has sufficient private IP addresses. 
     * Otherwise, the EIP cannot be associated with the NAT gateway. 
     * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
     */
    public eipBindMode: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public natGatewayName: string | ros.IResolvable | undefined;

    /**
     * @Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    public natType: string | ros.IResolvable | undefined;

    /**
     * @Property networkType: The type of the created NAT gateway.
     * Internet: public network NAT gateway.
     * Intranet: VPC NAT gateway.
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosNatGateway.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrForwardTableId = this.getAtt('ForwardTableId');
        this.attrNatGatewayId = this.getAtt('NatGatewayId');
        this.attrSNatTableId = this.getAtt('SNatTableId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.autoPay = props.autoPay;
        this.deletionForce = props.deletionForce;
        this.deletionProtection = props.deletionProtection;
        this.description = props.description;
        this.duration = props.duration;
        this.eipBindMode = props.eipBindMode;
        this.instanceChargeType = props.instanceChargeType;
        this.internetChargeType = props.internetChargeType;
        this.natGatewayName = props.natGatewayName;
        this.natType = props.natType;
        this.networkType = props.networkType;
        this.pricingCycle = props.pricingCycle;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            autoPay: this.autoPay,
            deletionForce: this.deletionForce,
            deletionProtection: this.deletionProtection,
            description: this.description,
            duration: this.duration,
            eipBindMode: this.eipBindMode,
            instanceChargeType: this.instanceChargeType,
            internetChargeType: this.internetChargeType,
            natGatewayName: this.natGatewayName,
            natType: this.natType,
            networkType: this.networkType,
            pricingCycle: this.pricingCycle,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNatGateway {
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
function RosNatGateway_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatGateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosNatGatewayTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNatGateway_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::NatIp`
 */
export interface RosNatIpProps {

    /**
     * @Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
     * the NAT IP address.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * @Property natIpCidr: The CIDR block to which the NAT IP address belongs.
     */
    readonly natIpCidr: string | ros.IResolvable;

    /**
     * @Property natIpDescription: The description of the NAT IP address.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    readonly natIpDescription: string | ros.IResolvable;

    /**
     * @Property natIpName: The name of the NAT IP address.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
     * with http:// or https://.
     */
    readonly natIpName: string | ros.IResolvable;

    /**
     * @Property natIp: The NAT IP address that you want to create.
     * If you do not specify an IP address, the system selects a random IP address from the
     * specified CIDR block.
     */
    readonly natIp?: string | ros.IResolvable;

    /**
     * @Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
     */
    readonly natIpCidrId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNatIpProps`
 *
 * @param properties - the TypeScript properties of a `RosNatIpProps`
 *
 * @returns the result of the validation.
 */
function RosNatIpPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('natIp', ros.validateString)(properties.natIp));
    errors.collect(ros.propertyValidator('natIpCidr', ros.requiredValidator)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natIpCidr', ros.validateString)(properties.natIpCidr));
    errors.collect(ros.propertyValidator('natIpCidrId', ros.validateString)(properties.natIpCidrId));
    errors.collect(ros.propertyValidator('natIpDescription', ros.requiredValidator)(properties.natIpDescription));
    if(properties.natIpDescription && (Array.isArray(properties.natIpDescription) || (typeof properties.natIpDescription) === 'string')) {
        errors.collect(ros.propertyValidator('natIpDescription', ros.validateLength)({
            data: properties.natIpDescription.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('natIpDescription', ros.validateString)(properties.natIpDescription));
    errors.collect(ros.propertyValidator('natIpName', ros.requiredValidator)(properties.natIpName));
    if(properties.natIpName && (Array.isArray(properties.natIpName) || (typeof properties.natIpName) === 'string')) {
        errors.collect(ros.propertyValidator('natIpName', ros.validateLength)({
            data: properties.natIpName.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('natIpName', ros.validateString)(properties.natIpName));
    errors.collect(ros.propertyValidator('natGatewayId', ros.requiredValidator)(properties.natGatewayId));
    errors.collect(ros.propertyValidator('natGatewayId', ros.validateString)(properties.natGatewayId));
    return errors.wrap('supplied properties not correct for "RosNatIpProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatIp` resource
 *
 * @param properties - the TypeScript properties of a `RosNatIpProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NatIp` resource.
 */
// @ts-ignore TS6133
function rosNatIpPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNatIpPropsValidator(properties).assertSuccess();
    }
    return {
      NatGatewayId: ros.stringToRosTemplate(properties.natGatewayId),
      NatIpCidr: ros.stringToRosTemplate(properties.natIpCidr),
      NatIpDescription: ros.stringToRosTemplate(properties.natIpDescription),
      NatIpName: ros.stringToRosTemplate(properties.natIpName),
      NatIp: ros.stringToRosTemplate(properties.natIp),
      NatIpCidrId: ros.stringToRosTemplate(properties.natIpCidrId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::NatIp`
 */
export class RosNatIp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NatIp";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NatIp: NAT IP address.
     */
    public readonly attrNatIp: ros.IResolvable;

    /**
     * @Attribute NatIpId: The ID of the NAT IP address.
     */
    public readonly attrNatIpId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
     * the NAT IP address.
     */
    public natGatewayId: string | ros.IResolvable;

    /**
     * @Property natIpCidr: The CIDR block to which the NAT IP address belongs.
     */
    public natIpCidr: string | ros.IResolvable;

    /**
     * @Property natIpDescription: The description of the NAT IP address.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    public natIpDescription: string | ros.IResolvable;

    /**
     * @Property natIpName: The name of the NAT IP address.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
     * with http:// or https://.
     */
    public natIpName: string | ros.IResolvable;

    /**
     * @Property natIp: The NAT IP address that you want to create.
     * If you do not specify an IP address, the system selects a random IP address from the
     * specified CIDR block.
     */
    public natIp: string | ros.IResolvable | undefined;

    /**
     * @Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
     */
    public natIpCidrId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::NatIp`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNatIpProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNatIp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNatIp = this.getAtt('NatIp');
        this.attrNatIpId = this.getAtt('NatIpId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.natGatewayId = props.natGatewayId;
        this.natIpCidr = props.natIpCidr;
        this.natIpDescription = props.natIpDescription;
        this.natIpName = props.natIpName;
        this.natIp = props.natIp;
        this.natIpCidrId = props.natIpCidrId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            natGatewayId: this.natGatewayId,
            natIpCidr: this.natIpCidr,
            natIpDescription: this.natIpDescription,
            natIpName: this.natIpName,
            natIp: this.natIp,
            natIpCidrId: this.natIpCidrId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNatIpPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::NetworkAcl`
 */
export interface RosNetworkAclProps {

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property description: The description of the network ACL.
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property egressAclEntries: The list of egress network ACL entries.
     */
    readonly egressAclEntries?: Array<RosNetworkAcl.EgressAclEntriesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ingressAclEntries: The list of ingress network ACL entries.
     */
    readonly ingressAclEntries?: Array<RosNetworkAcl.IngressAclEntriesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
     * start with http:// or https://.
     */
    readonly networkAclName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkAclProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ingressAclEntries && (Array.isArray(properties.ingressAclEntries) || (typeof properties.ingressAclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('ingressAclEntries', ros.validateLength)({
            data: properties.ingressAclEntries.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('ingressAclEntries', ros.listValidator(RosNetworkAcl_IngressAclEntriesPropertyValidator))(properties.ingressAclEntries));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.egressAclEntries && (Array.isArray(properties.egressAclEntries) || (typeof properties.egressAclEntries) === 'string')) {
        errors.collect(ros.propertyValidator('egressAclEntries', ros.validateLength)({
            data: properties.egressAclEntries.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('egressAclEntries', ros.listValidator(RosNetworkAcl_EgressAclEntriesPropertyValidator))(properties.egressAclEntries));
    errors.collect(ros.propertyValidator('networkAclName', ros.validateString)(properties.networkAclName));
    return errors.wrap('supplied properties not correct for "RosNetworkAclProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkAclPropsValidator(properties).assertSuccess();
    }
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Description: ros.stringToRosTemplate(properties.description),
      EgressAclEntries: ros.listMapper(rosNetworkAclEgressAclEntriesPropertyToRosTemplate)(properties.egressAclEntries),
      IngressAclEntries: ros.listMapper(rosNetworkAclIngressAclEntriesPropertyToRosTemplate)(properties.ingressAclEntries),
      NetworkAclName: ros.stringToRosTemplate(properties.networkAclName),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::NetworkAcl`
 */
export class RosNetworkAcl extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAcl";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NetworkAclEntryName: The name of the inbound rule.
     */
    public readonly attrNetworkAclEntryName: ros.IResolvable;

    /**
     * @Attribute NetworkAclId: The ID of the network ACL.
     */
    public readonly attrNetworkAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property description: The description of the network ACL.
     * The description must be 2 to 256 characters in length. The description must start
     * with a letter but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property egressAclEntries: The list of egress network ACL entries.
     */
    public egressAclEntries: Array<RosNetworkAcl.EgressAclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ingressAclEntries: The list of ingress network ACL entries.
     */
    public ingressAclEntries: Array<RosNetworkAcl.IngressAclEntriesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter and cannot
     * start with http:// or https://.
     */
    public networkAclName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::NetworkAcl`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkAcl.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclEntryName = this.getAtt('NetworkAclEntryName');
        this.attrNetworkAclId = this.getAtt('NetworkAclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.egressAclEntries = props.egressAclEntries;
        this.ingressAclEntries = props.ingressAclEntries;
        this.networkAclName = props.networkAclName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            description: this.description,
            egressAclEntries: this.egressAclEntries,
            ingressAclEntries: this.ingressAclEntries,
            networkAclName: this.networkAclName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkAclPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNetworkAcl {
    /**
     * @stability external
     */
    export interface EgressAclEntriesProperty {
        /**
         * @Property policy: The authorization policy. Valid values:
     * accept: access permissions granted.
     * drop: access permissions denied.
         */
        readonly policy: string | ros.IResolvable;
        /**
         * @Property description: The description of the egress entry.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property destinationCidrIp: Destination address network segment.
         */
        readonly destinationCidrIp?: string | ros.IResolvable;
        /**
         * @Property entryType: The type of the rule. Valid values:
     * custom : custom rules.
     * system : system rules.
         */
        readonly entryType?: string | ros.IResolvable;
        /**
         * @Property port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
         */
        readonly port: string | ros.IResolvable;
        /**
         * @Property protocol: The transport layer protocols. Valid values:
     * icmp
     * gre
     * tcp
     * udp
     * all: All protocols are supported.
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property networkAclEntryName: The name of the egress entry.
         */
        readonly networkAclEntryName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `EgressAclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `EgressAclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAcl_EgressAclEntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('destinationCidrIp', ros.validateString)(properties.destinationCidrIp));
    if(properties.entryType && (typeof properties.entryType) !== 'object') {
        errors.collect(ros.propertyValidator('entryType', ros.validateAllowedValues)({
          data: properties.entryType,
          allowedValues: ["custom","system"],
        }));
    }
    errors.collect(ros.propertyValidator('entryType', ros.validateString)(properties.entryType));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["icmp","gre","tcp","udp","all"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('networkAclEntryName', ros.validateString)(properties.networkAclEntryName));
    return errors.wrap('supplied properties not correct for "EgressAclEntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.EgressAclEntries` resource
 *
 * @param properties - the TypeScript properties of a `EgressAclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.EgressAclEntries` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclEgressAclEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNetworkAcl_EgressAclEntriesPropertyValidator(properties).assertSuccess();
    return {
      Policy: ros.stringToRosTemplate(properties.policy),
      Description: ros.stringToRosTemplate(properties.description),
      DestinationCidrIp: ros.stringToRosTemplate(properties.destinationCidrIp),
      EntryType: ros.stringToRosTemplate(properties.entryType),
      Port: ros.stringToRosTemplate(properties.port),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      NetworkAclEntryName: ros.stringToRosTemplate(properties.networkAclEntryName),
    };
}

export namespace RosNetworkAcl {
    /**
     * @stability external
     */
    export interface IngressAclEntriesProperty {
        /**
         * @Property policy: The authorization policy. Valid values:
     * accept: access permissions granted.
     * drop: access permissions denied.
         */
        readonly policy: string | ros.IResolvable;
        /**
         * @Property description: The description of the ingress entry.
         */
        readonly description?: string | ros.IResolvable;
        /**
         * @Property entryType: The type of the rule. Valid values:
     * custom : custom rules.
     * system : system rules.
         */
        readonly entryType?: string | ros.IResolvable;
        /**
         * @Property port: The source ports. The value range is from 1 to 65535; setting formats such as "1/200" and "80/80", where "-1/-1" cannot be set individually, which means that the port is not restricted.
         */
        readonly port: string | ros.IResolvable;
        /**
         * @Property sourceCidrIp: Source address network segment.
         */
        readonly sourceCidrIp?: string | ros.IResolvable;
        /**
         * @Property protocol: The transport layer protocols. Valid values:
     * icmp
     * gre
     * tcp
     * udp
     * all: All protocols are supported.
         */
        readonly protocol: string | ros.IResolvable;
        /**
         * @Property networkAclEntryName: The name of the ingress entry.
         */
        readonly networkAclEntryName?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IngressAclEntriesProperty`
 *
 * @param properties - the TypeScript properties of a `IngressAclEntriesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAcl_IngressAclEntriesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('policy', ros.requiredValidator)(properties.policy));
    if(properties.policy && (typeof properties.policy) !== 'object') {
        errors.collect(ros.propertyValidator('policy', ros.validateAllowedValues)({
          data: properties.policy,
          allowedValues: ["accept","drop"],
        }));
    }
    errors.collect(ros.propertyValidator('policy', ros.validateString)(properties.policy));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if(properties.entryType && (typeof properties.entryType) !== 'object') {
        errors.collect(ros.propertyValidator('entryType', ros.validateAllowedValues)({
          data: properties.entryType,
          allowedValues: ["custom","system"],
        }));
    }
    errors.collect(ros.propertyValidator('entryType', ros.validateString)(properties.entryType));
    errors.collect(ros.propertyValidator('port', ros.requiredValidator)(properties.port));
    errors.collect(ros.propertyValidator('port', ros.validateString)(properties.port));
    errors.collect(ros.propertyValidator('sourceCidrIp', ros.validateString)(properties.sourceCidrIp));
    errors.collect(ros.propertyValidator('protocol', ros.requiredValidator)(properties.protocol));
    if(properties.protocol && (typeof properties.protocol) !== 'object') {
        errors.collect(ros.propertyValidator('protocol', ros.validateAllowedValues)({
          data: properties.protocol,
          allowedValues: ["icmp","gre","tcp","udp","all"],
        }));
    }
    errors.collect(ros.propertyValidator('protocol', ros.validateString)(properties.protocol));
    errors.collect(ros.propertyValidator('networkAclEntryName', ros.validateString)(properties.networkAclEntryName));
    return errors.wrap('supplied properties not correct for "IngressAclEntriesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.IngressAclEntries` resource
 *
 * @param properties - the TypeScript properties of a `IngressAclEntriesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAcl.IngressAclEntries` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclIngressAclEntriesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNetworkAcl_IngressAclEntriesPropertyValidator(properties).assertSuccess();
    return {
      Policy: ros.stringToRosTemplate(properties.policy),
      Description: ros.stringToRosTemplate(properties.description),
      EntryType: ros.stringToRosTemplate(properties.entryType),
      Port: ros.stringToRosTemplate(properties.port),
      SourceCidrIp: ros.stringToRosTemplate(properties.sourceCidrIp),
      Protocol: ros.stringToRosTemplate(properties.protocol),
      NetworkAclEntryName: ros.stringToRosTemplate(properties.networkAclEntryName),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::NetworkAclAssociation`
 */
export interface RosNetworkAclAssociationProps {

    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId: string | ros.IResolvable;

    /**
     * @Property resources: The list of resources that need to be associated with network ACL.
     */
    readonly resources: Array<RosNetworkAclAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkAclAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('networkAclId', ros.requiredValidator)(properties.networkAclId));
    errors.collect(ros.propertyValidator('networkAclId', ros.validateString)(properties.networkAclId));
    errors.collect(ros.propertyValidator('resources', ros.requiredValidator)(properties.resources));
    if(properties.resources && (Array.isArray(properties.resources) || (typeof properties.resources) === 'string')) {
        errors.collect(ros.propertyValidator('resources', ros.validateLength)({
            data: properties.resources.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('resources', ros.listValidator(RosNetworkAclAssociation_ResourcesPropertyValidator))(properties.resources));
    return errors.wrap('supplied properties not correct for "RosNetworkAclAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkAclAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkAclAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      NetworkAclId: ros.stringToRosTemplate(properties.networkAclId),
      Resources: ros.listMapper(rosNetworkAclAssociationResourcesPropertyToRosTemplate)(properties.resources),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::NetworkAclAssociation`
 */
export class RosNetworkAclAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::NetworkAclAssociation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NetworkAclId: The ID of the network ACL.
     */
    public readonly attrNetworkAclId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkAclId: The ID of the network ACL.
     */
    public networkAclId: string | ros.IResolvable;

    /**
     * @Property resources: The list of resources that need to be associated with network ACL.
     */
    public resources: Array<RosNetworkAclAssociation.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::NetworkAclAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkAclAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkAclAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkAclId = this.getAtt('NetworkAclId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkAclId = props.networkAclId;
        this.resources = props.resources;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkAclId: this.networkAclId,
            resources: this.resources,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkAclAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNetworkAclAssociation {
    /**
     * @stability external
     */
    export interface ResourcesProperty {
        /**
         * @Property resourceId: The ID of the associated resource.
         */
        readonly resourceId: string | ros.IResolvable;
        /**
         * @Property resourceType: The type of the associated resource. Valid value: VSwitch.
         */
        readonly resourceType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourcesProperty`
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosNetworkAclAssociation_ResourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceId', ros.requiredValidator)(properties.resourceId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    if(properties.resourceType && (typeof properties.resourceType) !== 'object') {
        errors.collect(ros.propertyValidator('resourceType', ros.validateAllowedValues)({
          data: properties.resourceType,
          allowedValues: ["VSwitch"],
        }));
    }
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    return errors.wrap('supplied properties not correct for "ResourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation.Resources` resource
 *
 * @param properties - the TypeScript properties of a `ResourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::NetworkAclAssociation.Resources` resource.
 */
// @ts-ignore TS6133
function rosNetworkAclAssociationResourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNetworkAclAssociation_ResourcesPropertyValidator(properties).assertSuccess();
    return {
      ResourceId: ros.stringToRosTemplate(properties.resourceId),
      ResourceType: ros.stringToRosTemplate(properties.resourceType),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export interface RosPeeringRouterInterfaceBindingProps {

    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    readonly oppositeInterfaceId: string | ros.IResolvable;

    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    readonly routerInterfaceId: string | ros.IResolvable;

    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    readonly oppositeInterfaceOwnerId?: string | ros.IResolvable;

    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPeeringRouterInterfaceBindingProps`
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceBindingProps`
 *
 * @returns the result of the validation.
 */
function RosPeeringRouterInterfaceBindingPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.requiredValidator)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.validateString)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceOwnerId', ros.validateString)(properties.oppositeInterfaceOwnerId));
    errors.collect(ros.propertyValidator('oppositeRouterId', ros.validateString)(properties.oppositeRouterId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.requiredValidator)(properties.routerInterfaceId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.validateString)(properties.routerInterfaceId));
    return errors.wrap('supplied properties not correct for "RosPeeringRouterInterfaceBindingProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceBinding` resource
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceBindingProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceBinding` resource.
 */
// @ts-ignore TS6133
function rosPeeringRouterInterfaceBindingPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPeeringRouterInterfaceBindingPropsValidator(properties).assertSuccess();
    }
    return {
      OppositeInterfaceId: ros.stringToRosTemplate(properties.oppositeInterfaceId),
      RouterInterfaceId: ros.stringToRosTemplate(properties.routerInterfaceId),
      OppositeInterfaceOwnerId: ros.stringToRosTemplate(properties.oppositeInterfaceOwnerId),
      OppositeRouterId: ros.stringToRosTemplate(properties.oppositeRouterId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export class RosPeeringRouterInterfaceBinding extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceBinding";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RouterInterfaceId: The RouterInterface ID.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    public oppositeInterfaceId: string | ros.IResolvable;

    /**
     * @Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    public routerInterfaceId: string | ros.IResolvable;

    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    public oppositeInterfaceOwnerId: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    public oppositeRouterId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPeeringRouterInterfaceBindingProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPeeringRouterInterfaceBinding.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouterInterfaceId = this.getAtt('RouterInterfaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.oppositeInterfaceId = props.oppositeInterfaceId;
        this.routerInterfaceId = props.routerInterfaceId;
        this.oppositeInterfaceOwnerId = props.oppositeInterfaceOwnerId;
        this.oppositeRouterId = props.oppositeRouterId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            oppositeInterfaceId: this.oppositeInterfaceId,
            routerInterfaceId: this.routerInterfaceId,
            oppositeInterfaceOwnerId: this.oppositeInterfaceOwnerId,
            oppositeRouterId: this.oppositeRouterId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPeeringRouterInterfaceBindingPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
export interface RosPeeringRouterInterfaceConnectionProps {

    /**
     * @Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    readonly oppositeInterfaceId: string | ros.IResolvable;

    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    readonly routerInterfaceId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPeeringRouterInterfaceConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosPeeringRouterInterfaceConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.requiredValidator)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.validateString)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.requiredValidator)(properties.routerInterfaceId));
    errors.collect(ros.propertyValidator('routerInterfaceId', ros.validateString)(properties.routerInterfaceId));
    return errors.wrap('supplied properties not correct for "RosPeeringRouterInterfaceConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosPeeringRouterInterfaceConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::PeeringRouterInterfaceConnection` resource.
 */
// @ts-ignore TS6133
function rosPeeringRouterInterfaceConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPeeringRouterInterfaceConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      OppositeInterfaceId: ros.stringToRosTemplate(properties.oppositeInterfaceId),
      RouterInterfaceId: ros.stringToRosTemplate(properties.routerInterfaceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
export class RosPeeringRouterInterfaceConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::PeeringRouterInterfaceConnection";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    public readonly attrOppositeInterfaceId: ros.IResolvable;

    /**
     * @Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    public oppositeInterfaceId: string | ros.IResolvable;

    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    public routerInterfaceId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPeeringRouterInterfaceConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPeeringRouterInterfaceConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrOppositeInterfaceId = this.getAtt('OppositeInterfaceId');
        this.attrRouterInterfaceId = this.getAtt('RouterInterfaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.oppositeInterfaceId = props.oppositeInterfaceId;
        this.routerInterfaceId = props.routerInterfaceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            oppositeInterfaceId: this.oppositeInterfaceId,
            routerInterfaceId: this.routerInterfaceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPeeringRouterInterfaceConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::RouteTable`
 */
export interface RosRouteTableProps {

    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    readonly routeTableName?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosRouteTable.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosRouteTableProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTableProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTablePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('routeTableName', ros.validateString)(properties.routeTableName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosRouteTable_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosRouteTableProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteTableProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable` resource.
 */
// @ts-ignore TS6133
function rosRouteTablePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouteTablePropsValidator(properties).assertSuccess();
    }
    return {
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      Description: ros.stringToRosTemplate(properties.description),
      RouteTableName: ros.stringToRosTemplate(properties.routeTableName),
      Tags: ros.listMapper(rosRouteTableTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::RouteTable`
 */
export class RosRouteTable extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTable";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute RouteTableName: The name of the route table.
     */
    public readonly attrRouteTableName: ros.IResolvable;

    /**
     * @Attribute RouteTableType: The type of the route table.
     */
    public readonly attrRouteTableType: ros.IResolvable;

    /**
     * @Attribute VSwitchIds: A list of VSwitches under the VPC.
     */
    public readonly attrVSwitchIds: ros.IResolvable;

    /**
     * @Attribute VpcId: The ID of the VRouter to which the route table belongs.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property vpcId: The ID of the VPC to which the custom route table belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property description: The description of the route table.
     * The description must be 2 to 256 characters in length. The description must start with a letter, but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property routeTableName: The name of the route table.
     * The name must be 2 to 128 characters in length. It can contain letters, numbers, periods (.), underscores (_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.
     */
    public routeTableName: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to routetable. Max support 20 tags to add during create routetable. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosRouteTable.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::VPC::RouteTable`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteTableProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouteTable.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrRouteTableName = this.getAtt('RouteTableName');
        this.attrRouteTableType = this.getAtt('RouteTableType');
        this.attrVSwitchIds = this.getAtt('VSwitchIds');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.vpcId = props.vpcId;
        this.description = props.description;
        this.routeTableName = props.routeTableName;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            vpcId: this.vpcId,
            description: this.description,
            routeTableName: this.routeTableName,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouteTablePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRouteTable {
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
function RosRouteTable_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTable.Tags` resource.
 */
// @ts-ignore TS6133
function rosRouteTableTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRouteTable_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::RouteTableAssociation`
 */
export interface RosRouteTableAssociationProps {

    /**
     * @Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouteTableAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteTableAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosRouteTableAssociationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('routeTableId', ros.requiredValidator)(properties.routeTableId));
    errors.collect(ros.propertyValidator('routeTableId', ros.validateString)(properties.routeTableId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    return errors.wrap('supplied properties not correct for "RosRouteTableAssociationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTableAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteTableAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouteTableAssociation` resource.
 */
// @ts-ignore TS6133
function rosRouteTableAssociationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouteTableAssociationPropsValidator(properties).assertSuccess();
    }
    return {
      RouteTableId: ros.stringToRosTemplate(properties.routeTableId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::RouteTableAssociation`
 */
export class RosRouteTableAssociation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouteTableAssociation";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RouteTableId: The ID of the route table.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The VSwitch ID which the route table associated with.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property routeTableId: The ID of the route table.
     */
    public routeTableId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::RouteTableAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouteTableAssociationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouteTableAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrVSwitchId = this.getAtt('VSwitchId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.routeTableId = props.routeTableId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            routeTableId: this.routeTableId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouteTableAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::RouterInterface`
 */
export interface RosRouterInterfaceProps {

    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'.
     */
    readonly role: string | ros.IResolvable;

    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    readonly routerId: string | ros.IResolvable;

    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    readonly accessPointId?: string | ros.IResolvable;

    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. 
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default: true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckSourceIp?: string | ros.IResolvable;

    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckTargetIp?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    readonly oppositeAccessPointId?: string | ros.IResolvable;

    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    readonly oppositeInterfaceId?: string | ros.IResolvable;

    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    readonly oppositeInterfaceOwnerId?: string | ros.IResolvable;

    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    readonly oppositeRegionId?: string | ros.IResolvable;

    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string | ros.IResolvable;

    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    readonly oppositeRouterType?: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    readonly routerType?: string | ros.IResolvable;

    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    readonly spec?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRouterInterfaceProps`
 *
 * @param properties - the TypeScript properties of a `RosRouterInterfaceProps`
 *
 * @returns the result of the validation.
 */
function RosRouterInterfacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeInterfaceId', ros.validateString)(properties.oppositeInterfaceId));
    errors.collect(ros.propertyValidator('oppositeInterfaceOwnerId', ros.validateString)(properties.oppositeInterfaceOwnerId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('oppositeRouterId', ros.validateString)(properties.oppositeRouterId));
    errors.collect(ros.propertyValidator('oppositeRegionId', ros.validateString)(properties.oppositeRegionId));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('healthCheckSourceIp', ros.validateString)(properties.healthCheckSourceIp));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('routerId', ros.requiredValidator)(properties.routerId));
    errors.collect(ros.propertyValidator('routerId', ros.validateString)(properties.routerId));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('role', ros.requiredValidator)(properties.role));
    if(properties.role && (typeof properties.role) !== 'object') {
        errors.collect(ros.propertyValidator('role', ros.validateAllowedValues)({
          data: properties.role,
          allowedValues: ["InitiatingSide","AcceptingSide"],
        }));
    }
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    if(properties.oppositeRouterType && (typeof properties.oppositeRouterType) !== 'object') {
        errors.collect(ros.propertyValidator('oppositeRouterType', ros.validateAllowedValues)({
          data: properties.oppositeRouterType,
          allowedValues: ["VRouter","VBR"],
        }));
    }
    errors.collect(ros.propertyValidator('oppositeRouterType', ros.validateString)(properties.oppositeRouterType));
    if(properties.routerType && (typeof properties.routerType) !== 'object') {
        errors.collect(ros.propertyValidator('routerType', ros.validateAllowedValues)({
          data: properties.routerType,
          allowedValues: ["VRouter","VBR"],
        }));
    }
    errors.collect(ros.propertyValidator('routerType', ros.validateString)(properties.routerType));
    errors.collect(ros.propertyValidator('accessPointId', ros.validateString)(properties.accessPointId));
    errors.collect(ros.propertyValidator('oppositeAccessPointId', ros.validateString)(properties.oppositeAccessPointId));
    errors.collect(ros.propertyValidator('spec', ros.validateString)(properties.spec));
    errors.collect(ros.propertyValidator('healthCheckTargetIp', ros.validateString)(properties.healthCheckTargetIp));
    return errors.wrap('supplied properties not correct for "RosRouterInterfaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouterInterface` resource
 *
 * @param properties - the TypeScript properties of a `RosRouterInterfaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::RouterInterface` resource.
 */
// @ts-ignore TS6133
function rosRouterInterfacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRouterInterfacePropsValidator(properties).assertSuccess();
    }
    return {
      Role: ros.stringToRosTemplate(properties.role),
      RouterId: ros.stringToRosTemplate(properties.routerId),
      AccessPointId: ros.stringToRosTemplate(properties.accessPointId),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      Description: ros.stringToRosTemplate(properties.description),
      HealthCheckSourceIp: ros.stringToRosTemplate(properties.healthCheckSourceIp),
      HealthCheckTargetIp: ros.stringToRosTemplate(properties.healthCheckTargetIp),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      Name: ros.stringToRosTemplate(properties.name),
      OppositeAccessPointId: ros.stringToRosTemplate(properties.oppositeAccessPointId),
      OppositeInterfaceId: ros.stringToRosTemplate(properties.oppositeInterfaceId),
      OppositeInterfaceOwnerId: ros.stringToRosTemplate(properties.oppositeInterfaceOwnerId),
      OppositeRegionId: ros.stringToRosTemplate(properties.oppositeRegionId),
      OppositeRouterId: ros.stringToRosTemplate(properties.oppositeRouterId),
      OppositeRouterType: ros.stringToRosTemplate(properties.oppositeRouterType),
      Period: ros.numberToRosTemplate(properties.period),
      PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
      RouterType: ros.stringToRosTemplate(properties.routerType),
      Spec: ros.stringToRosTemplate(properties.spec),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::RouterInterface`
 */
export class RosRouterInterface extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::RouterInterface";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'.
     */
    public role: string | ros.IResolvable;

    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    public routerId: string | ros.IResolvable;

    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    public accessPointId: string | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. 
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default: true.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    public healthCheckSourceIp: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    public healthCheckTargetIp: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    public oppositeAccessPointId: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    public oppositeInterfaceId: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    public oppositeInterfaceOwnerId: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    public oppositeRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    public oppositeRouterId: string | ros.IResolvable | undefined;

    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    public oppositeRouterType: string | ros.IResolvable | undefined;

    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    public routerType: string | ros.IResolvable | undefined;

    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    public spec: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRouterInterfaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRouterInterface.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrRouterInterfaceId = this.getAtt('RouterInterfaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.role = props.role;
        this.routerId = props.routerId;
        this.accessPointId = props.accessPointId;
        this.autoPay = props.autoPay;
        this.description = props.description;
        this.healthCheckSourceIp = props.healthCheckSourceIp;
        this.healthCheckTargetIp = props.healthCheckTargetIp;
        this.instanceChargeType = props.instanceChargeType;
        this.name = props.name;
        this.oppositeAccessPointId = props.oppositeAccessPointId;
        this.oppositeInterfaceId = props.oppositeInterfaceId;
        this.oppositeInterfaceOwnerId = props.oppositeInterfaceOwnerId;
        this.oppositeRegionId = props.oppositeRegionId;
        this.oppositeRouterId = props.oppositeRouterId;
        this.oppositeRouterType = props.oppositeRouterType;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
        this.routerType = props.routerType;
        this.spec = props.spec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            role: this.role,
            routerId: this.routerId,
            accessPointId: this.accessPointId,
            autoPay: this.autoPay,
            description: this.description,
            healthCheckSourceIp: this.healthCheckSourceIp,
            healthCheckTargetIp: this.healthCheckTargetIp,
            instanceChargeType: this.instanceChargeType,
            name: this.name,
            oppositeAccessPointId: this.oppositeAccessPointId,
            oppositeInterfaceId: this.oppositeInterfaceId,
            oppositeInterfaceOwnerId: this.oppositeInterfaceOwnerId,
            oppositeRegionId: this.oppositeRegionId,
            oppositeRouterId: this.oppositeRouterId,
            oppositeRouterType: this.oppositeRouterType,
            period: this.period,
            pricingCycle: this.pricingCycle,
            routerType: this.routerType,
            spec: this.spec,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRouterInterfacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::SnatEntry`
 */
export interface RosSnatEntryProps {

    /**
     * @Property snatIp: The public IP address. Separate multiple EIPs with commas.
     */
    readonly snatIp: string | ros.IResolvable;

    /**
     * @Property snatTableId: The ID of the SNAT table.
     */
    readonly snatTableId: string | ros.IResolvable;

    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    readonly snatEntryName?: string | ros.IResolvable;

    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    readonly sourceCidr?: string | ros.IResolvable;

    /**
     * @Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    readonly sourceVSwitchIds?: Array<any | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSnatEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosSnatEntryProps`
 *
 * @returns the result of the validation.
 */
function RosSnatEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snatEntryName', ros.validateString)(properties.snatEntryName));
    errors.collect(ros.propertyValidator('sourceVSwitchIds', ros.listValidator(ros.validateAny))(properties.sourceVSwitchIds));
    errors.collect(ros.propertyValidator('sourceCidr', ros.validateString)(properties.sourceCidr));
    errors.collect(ros.propertyValidator('snatIp', ros.requiredValidator)(properties.snatIp));
    errors.collect(ros.propertyValidator('snatIp', ros.validateString)(properties.snatIp));
    errors.collect(ros.propertyValidator('snatTableId', ros.requiredValidator)(properties.snatTableId));
    errors.collect(ros.propertyValidator('snatTableId', ros.validateString)(properties.snatTableId));
    return errors.wrap('supplied properties not correct for "RosSnatEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::SnatEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosSnatEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::SnatEntry` resource.
 */
// @ts-ignore TS6133
function rosSnatEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSnatEntryPropsValidator(properties).assertSuccess();
    }
    return {
      SnatIp: ros.stringToRosTemplate(properties.snatIp),
      SnatTableId: ros.stringToRosTemplate(properties.snatTableId),
      SnatEntryName: ros.stringToRosTemplate(properties.snatEntryName),
      SourceCIDR: ros.stringToRosTemplate(properties.sourceCidr),
      SourceVSwitchIds: ros.listMapper(ros.objectToRosTemplate)(properties.sourceVSwitchIds),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::SnatEntry`
 */
export class RosSnatEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SnatEntry";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SnatEntryIds: The IDS of the SNAT entry.
     */
    public readonly attrSnatEntryIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property snatIp: The public IP address. Separate multiple EIPs with commas.
     */
    public snatIp: string | ros.IResolvable;

    /**
     * @Property snatTableId: The ID of the SNAT table.
     */
    public snatTableId: string | ros.IResolvable;

    /**
     * @Property snatEntryName: he name of the SNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:// or https://.
     */
    public snatEntryName: string | ros.IResolvable | undefined;

    /**
     * @Property sourceCidr: Specifies the network segment of the switch. For example, 10.0.0.1/24. This parameter and the SourceVSwtichId parameter are mutually exclusive and cannot appear at the same time.
     */
    public sourceCidr: string | ros.IResolvable | undefined;

    /**
     * @Property sourceVSwitchIds: The ID of the VSwitch to access the Internet.
     */
    public sourceVSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::SnatEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnatEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSnatEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnatEntryIds = this.getAtt('SnatEntryIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.snatIp = props.snatIp;
        this.snatTableId = props.snatTableId;
        this.snatEntryName = props.snatEntryName;
        this.sourceCidr = props.sourceCidr;
        this.sourceVSwitchIds = props.sourceVSwitchIds;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            snatIp: this.snatIp,
            snatTableId: this.snatTableId,
            snatEntryName: this.snatEntryName,
            sourceCidr: this.sourceCidr,
            sourceVSwitchIds: this.sourceVSwitchIds,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSnatEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnClientCert`
 */
export interface RosSslVpnClientCertProps {

    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    readonly sslVpnServerId: string | ros.IResolvable;

    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSslVpnClientCertProps`
 *
 * @param properties - the TypeScript properties of a `RosSslVpnClientCertProps`
 *
 * @returns the result of the validation.
 */
function RosSslVpnClientCertPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sslVpnServerId', ros.requiredValidator)(properties.sslVpnServerId));
    errors.collect(ros.propertyValidator('sslVpnServerId', ros.validateString)(properties.sslVpnServerId));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosSslVpnClientCertProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnClientCert` resource
 *
 * @param properties - the TypeScript properties of a `RosSslVpnClientCertProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnClientCert` resource.
 */
// @ts-ignore TS6133
function rosSslVpnClientCertPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSslVpnClientCertPropsValidator(properties).assertSuccess();
    }
    return {
      SslVpnServerId: ros.stringToRosTemplate(properties.sslVpnServerId),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::SslVpnClientCert`
 */
export class RosSslVpnClientCert extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnClientCert";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SslVpnClientCertId: The ID of the client certificate.
     */
    public readonly attrSslVpnClientCertId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property sslVpnServerId: ID of the SSL-VPN server.
     */
    public sslVpnServerId: string | ros.IResolvable;

    /**
     * @Property name: The name of the client certificate.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::SslVpnClientCert`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSslVpnClientCertProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSslVpnClientCert.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSslVpnClientCertId = this.getAtt('SslVpnClientCertId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.sslVpnServerId = props.sslVpnServerId;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            sslVpnServerId: this.sslVpnServerId,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSslVpnClientCertPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::SslVpnServer`
 */
export interface RosSslVpnServerProps {

    /**
     * @Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    readonly clientIpPool: string | ros.IResolvable;

    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    readonly localSubnet: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    readonly cipher?: string | ros.IResolvable;

    /**
     * @Property compress: Whether it is compressed.
     */
    readonly compress?: boolean | ros.IResolvable;

    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    readonly port?: number | ros.IResolvable;

    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    readonly proto?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSslVpnServerProps`
 *
 * @param properties - the TypeScript properties of a `RosSslVpnServerProps`
 *
 * @returns the result of the validation.
 */
function RosSslVpnServerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('compress', ros.validateBoolean)(properties.compress));
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('clientIpPool', ros.requiredValidator)(properties.clientIpPool));
    errors.collect(ros.propertyValidator('clientIpPool', ros.validateString)(properties.clientIpPool));
    if(properties.proto && (typeof properties.proto) !== 'object') {
        errors.collect(ros.propertyValidator('proto', ros.validateAllowedValues)({
          data: properties.proto,
          allowedValues: ["UDP","TCP"],
        }));
    }
    errors.collect(ros.propertyValidator('proto', ros.validateString)(properties.proto));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.cipher && (typeof properties.cipher) !== 'object') {
        errors.collect(ros.propertyValidator('cipher', ros.validateAllowedValues)({
          data: properties.cipher,
          allowedValues: ["AES-128-CBC","AES-192-CBC","AES-256-CBC","none"],
        }));
    }
    errors.collect(ros.propertyValidator('cipher', ros.validateString)(properties.cipher));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosSslVpnServerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnServer` resource
 *
 * @param properties - the TypeScript properties of a `RosSslVpnServerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::SslVpnServer` resource.
 */
// @ts-ignore TS6133
function rosSslVpnServerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSslVpnServerPropsValidator(properties).assertSuccess();
    }
    return {
      ClientIpPool: ros.stringToRosTemplate(properties.clientIpPool),
      LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
      VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
      Cipher: ros.stringToRosTemplate(properties.cipher),
      Compress: ros.booleanToRosTemplate(properties.compress),
      Name: ros.stringToRosTemplate(properties.name),
      Port: ros.numberToRosTemplate(properties.port),
      Proto: ros.stringToRosTemplate(properties.proto),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::SslVpnServer`
 */
export class RosSslVpnServer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::SslVpnServer";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SslVpnServerId: ID of the SSL-VPN server.
     */
    public readonly attrSslVpnServerId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property clientIpPool: It is the address segment that assigns the access address to the client virtual NIC. It does not refer to the existing intranet segment of the client.
     * When the client accesses the local end through an SSL-VPN connection, the VPN gateway allocates an IP address to the client from the specified client network segment.
     * The network segment cannot conflict with the LocalSubnet address segment.
     */
    public clientIpPool: string | ros.IResolvable;

    /**
     * @Property localSubnet: Is the address segment that the client wants to access through an SSL-VPN connection.
     * The local network segment can be the network segment of the VPC, the network segment of the switch, the network segment of the IDC interconnected by the leased line and the VPC, and the network segment of the cloud service such as RDS/OSS.
     */
    public localSubnet: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    public vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property cipher: The encryption algorithm used by SSL-VPN. Value:
     * AES-128-CBC (default) | AES-192-CBC | AES-256-CBC | none
     */
    public cipher: string | ros.IResolvable | undefined;

    /**
     * @Property compress: Whether it is compressed.
     */
    public compress: boolean | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the SSL-VPN server. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-).
     * But it can't start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property port: The port used by the SSL-VPN server. The default value is 1194. Cannot use the following ports:
     * 22, 2222, 22222, 9000, 9001, 9002, 7505, 80, 443, 53, 68, 123, 4510, 4560, 500, 4500
     */
    public port: number | ros.IResolvable | undefined;

    /**
     * @Property proto: The protocol used by the SSL-VPN server. Allowed values: UDP (default) | TCP.
     */
    public proto: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::SslVpnServer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSslVpnServerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSslVpnServer.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSslVpnServerId = this.getAtt('SslVpnServerId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.clientIpPool = props.clientIpPool;
        this.localSubnet = props.localSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.cipher = props.cipher;
        this.compress = props.compress;
        this.name = props.name;
        this.port = props.port;
        this.proto = props.proto;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            clientIpPool: this.clientIpPool,
            localSubnet: this.localSubnet,
            vpnGatewayId: this.vpnGatewayId,
            cipher: this.cipher,
            compress: this.compress,
            name: this.name,
            port: this.port,
            proto: this.proto,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSslVpnServerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::VirtualBorderRouter`
 */
export interface RosVirtualBorderRouterProps {

    /**
     * @Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
     */
    readonly localGatewayIp: string | ros.IResolvable;

    /**
     * @Property peerGatewayIp: The IP address of the peer router interface of the VBR.
     * Only the owner of the VBR can set or modify the value.
     * This parameter is required when you create a VBR for the owner of the physical connection.
     * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
     */
    readonly peerGatewayIp: string | ros.IResolvable;

    /**
     * @Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
     * user side.
     * The two IP addresses must fall within the same subnet.
     */
    readonly peeringSubnetMask: string | ros.IResolvable;

    /**
     * @Property physicalConnectionId: The ID of the physical connection.
     */
    readonly physicalConnectionId: string | ros.IResolvable;

    /**
     * @Property vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
     * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
     * two VBRs of the same physical connection must be different.
     */
    readonly vlanId: number | ros.IResolvable;

    /**
     * @Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
     * connection.
     * Note Only the owner of the physical connection can set this parameter.
     */
    readonly circuitCode?: string | ros.IResolvable;

    /**
     * @Property description: The description of the VBR.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVirtualBorderRouterProps`
 *
 * @param properties - the TypeScript properties of a `RosVirtualBorderRouterProps`
 *
 * @returns the result of the validation.
 */
function RosVirtualBorderRouterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('peerGatewayIp', ros.requiredValidator)(properties.peerGatewayIp));
    errors.collect(ros.propertyValidator('peerGatewayIp', ros.validateString)(properties.peerGatewayIp));
    errors.collect(ros.propertyValidator('localGatewayIp', ros.requiredValidator)(properties.localGatewayIp));
    errors.collect(ros.propertyValidator('localGatewayIp', ros.validateString)(properties.localGatewayIp));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('circuitCode', ros.validateString)(properties.circuitCode));
    errors.collect(ros.propertyValidator('physicalConnectionId', ros.requiredValidator)(properties.physicalConnectionId));
    errors.collect(ros.propertyValidator('physicalConnectionId', ros.validateString)(properties.physicalConnectionId));
    errors.collect(ros.propertyValidator('peeringSubnetMask', ros.requiredValidator)(properties.peeringSubnetMask));
    errors.collect(ros.propertyValidator('peeringSubnetMask', ros.validateString)(properties.peeringSubnetMask));
    errors.collect(ros.propertyValidator('vlanId', ros.requiredValidator)(properties.vlanId));
    if(properties.vlanId && (typeof properties.vlanId) !== 'object') {
        errors.collect(ros.propertyValidator('vlanId', ros.validateRange)({
            data: properties.vlanId,
            min: 0,
            max: 2999,
          }));
    }
    errors.collect(ros.propertyValidator('vlanId', ros.validateNumber)(properties.vlanId));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVirtualBorderRouterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VirtualBorderRouter` resource
 *
 * @param properties - the TypeScript properties of a `RosVirtualBorderRouterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VirtualBorderRouter` resource.
 */
// @ts-ignore TS6133
function rosVirtualBorderRouterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVirtualBorderRouterPropsValidator(properties).assertSuccess();
    }
    return {
      LocalGatewayIp: ros.stringToRosTemplate(properties.localGatewayIp),
      PeerGatewayIp: ros.stringToRosTemplate(properties.peerGatewayIp),
      PeeringSubnetMask: ros.stringToRosTemplate(properties.peeringSubnetMask),
      PhysicalConnectionId: ros.stringToRosTemplate(properties.physicalConnectionId),
      VlanId: ros.numberToRosTemplate(properties.vlanId),
      CircuitCode: ros.stringToRosTemplate(properties.circuitCode),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::VirtualBorderRouter`
 */
export class RosVirtualBorderRouter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VirtualBorderRouter";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: The name of the VBR.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute RouteTableId: The ID of the route table of the VBR.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * @Attribute VbrId: The ID of the VBR.
     */
    public readonly attrVbrId: ros.IResolvable;

    /**
     * @Attribute VlanInterfaceId: The ID of the VBR interface.
     */
    public readonly attrVlanInterfaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
     */
    public localGatewayIp: string | ros.IResolvable;

    /**
     * @Property peerGatewayIp: The IP address of the peer router interface of the VBR.
     * Only the owner of the VBR can set or modify the value.
     * This parameter is required when you create a VBR for the owner of the physical connection.
     * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
     */
    public peerGatewayIp: string | ros.IResolvable;

    /**
     * @Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
     * user side.
     * The two IP addresses must fall within the same subnet.
     */
    public peeringSubnetMask: string | ros.IResolvable;

    /**
     * @Property physicalConnectionId: The ID of the physical connection.
     */
    public physicalConnectionId: string | ros.IResolvable;

    /**
     * @Property vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
     * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
     * two VBRs of the same physical connection must be different.
     */
    public vlanId: number | ros.IResolvable;

    /**
     * @Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
     * connection.
     * Note Only the owner of the physical connection can set this parameter.
     */
    public circuitCode: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the VBR.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::VirtualBorderRouter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVirtualBorderRouterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVirtualBorderRouter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');
        this.attrRouteTableId = this.getAtt('RouteTableId');
        this.attrVbrId = this.getAtt('VbrId');
        this.attrVlanInterfaceId = this.getAtt('VlanInterfaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.localGatewayIp = props.localGatewayIp;
        this.peerGatewayIp = props.peerGatewayIp;
        this.peeringSubnetMask = props.peeringSubnetMask;
        this.physicalConnectionId = props.physicalConnectionId;
        this.vlanId = props.vlanId;
        this.circuitCode = props.circuitCode;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            localGatewayIp: this.localGatewayIp,
            peerGatewayIp: this.peerGatewayIp,
            peeringSubnetMask: this.peeringSubnetMask,
            physicalConnectionId: this.physicalConnectionId,
            vlanId: this.vlanId,
            circuitCode: this.circuitCode,
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVirtualBorderRouterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::VpcPeerConnection`
 */
export interface RosVpcPeerConnectionProps {

    /**
     * @Property acceptingVpcId: The ID of the acceptor VPC.
     */
    readonly acceptingVpcId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the requester VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
     * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
     * of your Alibaba Cloud account.
     * To create a VPC peering connection between your Alibaba Cloud account and another
     * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
     * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
     * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
     * Default current account ID.
     */
    readonly acceptingAliUid?: number | ros.IResolvable;

    /**
     * @Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
     * To create an intra-region VPC peering connection, enter a region ID that is the same
     * as that of the requester VPC.
     * To create an inter-region VPC peering connection, enter a region ID that is different
     * from that of the requester VPC.
     * Default current region.
     */
    readonly acceptingRegionId?: string | ros.IResolvable;

    /**
     * @Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property description: The description of the VPC peering connection.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property name: The name of the VPC peering connection.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpcPeerConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosVpcPeerConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosVpcPeerConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('deletionForce', ros.validateBoolean)(properties.deletionForce));
    errors.collect(ros.propertyValidator('acceptingVpcId', ros.requiredValidator)(properties.acceptingVpcId));
    errors.collect(ros.propertyValidator('acceptingVpcId', ros.validateString)(properties.acceptingVpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('acceptingRegionId', ros.validateString)(properties.acceptingRegionId));
    errors.collect(ros.propertyValidator('acceptingAliUid', ros.validateNumber)(properties.acceptingAliUid));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpcPeerConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpcPeerConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosVpcPeerConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpcPeerConnection` resource.
 */
// @ts-ignore TS6133
function rosVpcPeerConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpcPeerConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      AcceptingVpcId: ros.stringToRosTemplate(properties.acceptingVpcId),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      AcceptingAliUid: ros.numberToRosTemplate(properties.acceptingAliUid),
      AcceptingRegionId: ros.stringToRosTemplate(properties.acceptingRegionId),
      DeletionForce: ros.booleanToRosTemplate(properties.deletionForce),
      Description: ros.stringToRosTemplate(properties.description),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::VpcPeerConnection`
 */
export class RosVpcPeerConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpcPeerConnection";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceId: The ID of the VPC peering connection.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property acceptingVpcId: The ID of the acceptor VPC.
     */
    public acceptingVpcId: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the requester VPC.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
     * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
     * of your Alibaba Cloud account.
     * To create a VPC peering connection between your Alibaba Cloud account and another
     * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
     * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
     * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
     * Default current account ID.
     */
    public acceptingAliUid: number | ros.IResolvable | undefined;

    /**
     * @Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
     * To create an intra-region VPC peering connection, enter a region ID that is the same
     * as that of the requester VPC.
     * To create an inter-region VPC peering connection, enter a region ID that is different
     * from that of the requester VPC.
     * Default current region.
     */
    public acceptingRegionId: string | ros.IResolvable | undefined;

    /**
     * @Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
     */
    public deletionForce: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the VPC peering connection.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the VPC peering connection.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::VpcPeerConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpcPeerConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpcPeerConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.acceptingVpcId = props.acceptingVpcId;
        this.vpcId = props.vpcId;
        this.acceptingAliUid = props.acceptingAliUid;
        this.acceptingRegionId = props.acceptingRegionId;
        this.deletionForce = props.deletionForce;
        this.description = props.description;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            acceptingVpcId: this.acceptingVpcId,
            vpcId: this.vpcId,
            acceptingAliUid: this.acceptingAliUid,
            acceptingRegionId: this.acceptingRegionId,
            deletionForce: this.deletionForce,
            description: this.description,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpcPeerConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::VpnConnection`
 */
export interface RosVpnConnectionProps {

    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    readonly customerGatewayId: string | ros.IResolvable;

    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    readonly localSubnet: string | ros.IResolvable;

    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    readonly remoteSubnet: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    readonly effectImmediately?: boolean | ros.IResolvable;

    /**
     * @Property healthCheckConfig: Whether to enable the health check configuration.
     */
    readonly healthCheckConfig?: RosVpnConnection.HealthCheckConfigProperty | ros.IResolvable;

    /**
     * @Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    readonly ikeConfig?: RosVpnConnection.IkeConfigProperty | ros.IResolvable;

    /**
     * @Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    readonly ipsecConfig?: RosVpnConnection.IpsecConfigProperty | ros.IResolvable;

    /**
     * @Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpnConnectionProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnConnectionProps`
 *
 * @returns the result of the validation.
 */
function RosVpnConnectionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('localSubnet', ros.requiredValidator)(properties.localSubnet));
    errors.collect(ros.propertyValidator('localSubnet', ros.validateString)(properties.localSubnet));
    errors.collect(ros.propertyValidator('effectImmediately', ros.validateBoolean)(properties.effectImmediately));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.requiredValidator)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('remoteSubnet', ros.validateString)(properties.remoteSubnet));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.requiredValidator)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('customerGatewayId', ros.validateString)(properties.customerGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('ipsecConfig', RosVpnConnection_IpsecConfigPropertyValidator)(properties.ipsecConfig));
    errors.collect(ros.propertyValidator('healthCheckConfig', RosVpnConnection_HealthCheckConfigPropertyValidator)(properties.healthCheckConfig));
    errors.collect(ros.propertyValidator('ikeConfig', RosVpnConnection_IkeConfigPropertyValidator)(properties.ikeConfig));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 128,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpnConnectionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnConnectionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpnConnectionPropsValidator(properties).assertSuccess();
    }
    return {
      CustomerGatewayId: ros.stringToRosTemplate(properties.customerGatewayId),
      LocalSubnet: ros.stringToRosTemplate(properties.localSubnet),
      RemoteSubnet: ros.stringToRosTemplate(properties.remoteSubnet),
      VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
      EffectImmediately: ros.booleanToRosTemplate(properties.effectImmediately),
      HealthCheckConfig: rosVpnConnectionHealthCheckConfigPropertyToRosTemplate(properties.healthCheckConfig),
      IkeConfig: rosVpnConnectionIkeConfigPropertyToRosTemplate(properties.ikeConfig),
      IpsecConfig: rosVpnConnectionIpsecConfigPropertyToRosTemplate(properties.ipsecConfig),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::VpnConnection`
 */
export class RosVpnConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnConnection";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute PeerVpnConnectionConfig: Peer vpc connection config.
     */
    public readonly attrPeerVpnConnectionConfig: ros.IResolvable;

    /**
     * @Attribute Status: Status of the IPsec connection.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute VpnConnectionId: ID of the IPsec connection.
     */
    public readonly attrVpnConnectionId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property customerGatewayId: The ID of the user gateway.
     */
    public customerGatewayId: string | ros.IResolvable;

    /**
     * @Property localSubnet: A network segment on the VPC side that needs to be interconnected with the local IDC for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.1.0/24, 192.168.2.0/24.
     */
    public localSubnet: string | ros.IResolvable;

    /**
     * @Property remoteSubnet: The network segment of the local IDC is used for the second phase negotiation.
     * Multiple network segments are separated by commas, for example: 192.168.3.0/24, 192.168.4.0/24.
     */
    public remoteSubnet: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: ID of the VPN gateway.
     */
    public vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property effectImmediately: Whether to delete the currently negotiated IPsec tunnel and re-initiate the negotiation. Value:
     * True: Negotiate immediately after the configuration is complete.
     * False (default): Negotiate when traffic enters.
     */
    public effectImmediately: boolean | ros.IResolvable | undefined;

    /**
     * @Property healthCheckConfig: Whether to enable the health check configuration.
     */
    public healthCheckConfig: RosVpnConnection.HealthCheckConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property ikeConfig: Configuration information for the first phase of negotiation.
     */
    public ikeConfig: RosVpnConnection.IkeConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property ipsecConfig: Configuration information for the second phase negotiation.
     */
    public ipsecConfig: RosVpnConnection.IpsecConfigProperty | ros.IResolvable | undefined;

    /**
     * @Property name: The name of the IPsec connection.
     * The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_) and dashes (-), but cannot start with http:// or https:// .
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::VpnConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnConnectionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpnConnection.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPeerVpnConnectionConfig = this.getAtt('PeerVpnConnectionConfig');
        this.attrStatus = this.getAtt('Status');
        this.attrVpnConnectionId = this.getAtt('VpnConnectionId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.customerGatewayId = props.customerGatewayId;
        this.localSubnet = props.localSubnet;
        this.remoteSubnet = props.remoteSubnet;
        this.vpnGatewayId = props.vpnGatewayId;
        this.effectImmediately = props.effectImmediately;
        this.healthCheckConfig = props.healthCheckConfig;
        this.ikeConfig = props.ikeConfig;
        this.ipsecConfig = props.ipsecConfig;
        this.name = props.name;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            customerGatewayId: this.customerGatewayId,
            localSubnet: this.localSubnet,
            remoteSubnet: this.remoteSubnet,
            vpnGatewayId: this.vpnGatewayId,
            effectImmediately: this.effectImmediately,
            healthCheckConfig: this.healthCheckConfig,
            ikeConfig: this.ikeConfig,
            ipsecConfig: this.ipsecConfig,
            name: this.name,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpnConnectionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVpnConnection {
    /**
     * @stability external
     */
    export interface HealthCheckConfigProperty {
        /**
         * @Property enable:
         */
        readonly enable?: boolean | ros.IResolvable;
        /**
         * @Property dip:
         */
        readonly dip?: boolean | ros.IResolvable;
        /**
         * @Property retry:
         */
        readonly retry?: number | ros.IResolvable;
        /**
         * @Property sip:
         */
        readonly sip?: string | ros.IResolvable;
        /**
         * @Property interval:
         */
        readonly interval?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HealthCheckConfigProperty`
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_HealthCheckConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    errors.collect(ros.propertyValidator('dip', ros.validateBoolean)(properties.dip));
    errors.collect(ros.propertyValidator('retry', ros.validateNumber)(properties.retry));
    errors.collect(ros.propertyValidator('sip', ros.validateString)(properties.sip));
    errors.collect(ros.propertyValidator('interval', ros.validateNumber)(properties.interval));
    return errors.wrap('supplied properties not correct for "HealthCheckConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.HealthCheckConfig` resource
 *
 * @param properties - the TypeScript properties of a `HealthCheckConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.HealthCheckConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionHealthCheckConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpnConnection_HealthCheckConfigPropertyValidator(properties).assertSuccess();
    return {
      Enable: ros.booleanToRosTemplate(properties.enable),
      Dip: ros.booleanToRosTemplate(properties.dip),
      Retry: ros.numberToRosTemplate(properties.retry),
      Sip: ros.stringToRosTemplate(properties.sip),
      Interval: ros.numberToRosTemplate(properties.interval),
    };
}

export namespace RosVpnConnection {
    /**
     * @stability external
     */
    export interface IkeConfigProperty {
        /**
         * @Property ikeAuthAlg: The authentication algorithm negotiated in the first phase, the value is md5|sha1, and the default value is md5.
         */
        readonly ikeAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ikeEncAlg: The encryption algorithm negotiated in the first phase, value: aes|aes192|aes256|des|3des, default value: aes.
         */
        readonly ikeEncAlg?: string | ros.IResolvable;
        /**
         * @Property localIdIPsec: ID of the VPN gateway. The length is limited to 100 characters. The default value is the public IP address of the VPN gateway.
         */
        readonly localIdIPsec?: string | ros.IResolvable;
        /**
         * @Property ikeVersion: The version of the IKE protocol. Value: ikev1|ikev2, default: ikev1.
         */
        readonly ikeVersion?: string | ros.IResolvable;
        /**
         * @Property ikeMode: Negotiation mode for IKE V1. Value: main|aggressive, default: main.
         */
        readonly ikeMode?: string | ros.IResolvable;
        /**
         * @Property ikeLifetime: The life cycle of the SA negotiated in the first phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ikeLifetime?: number | ros.IResolvable;
        /**
         * @Property remoteId: ID of the user gateway. The length is limited to 100 characters. The default value is the public IP address of the user gateway.
         */
        readonly remoteId?: string | ros.IResolvable;
        /**
         * @Property psk: Used for identity authentication between the IPsec VPN gateway and the user gateway. It is generated randomly by default, or you can specify the key manually. The length is limited to 100 characters.
         */
        readonly psk?: string | ros.IResolvable;
        /**
         * @Property ikePfs: Diffie-Hellman key exchange algorithm used in the first phase negotiation. Value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ikePfs?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IkeConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_IkeConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ikeAuthAlg && (typeof properties.ikeAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateAllowedValues)({
          data: properties.ikeAuthAlg,
          allowedValues: ["md5","sha1"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeAuthAlg', ros.validateString)(properties.ikeAuthAlg));
    if(properties.ikeEncAlg && (typeof properties.ikeEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateAllowedValues)({
          data: properties.ikeEncAlg,
          allowedValues: ["aes","aes192","aes256","des","3des"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeEncAlg', ros.validateString)(properties.ikeEncAlg));
    if(properties.localIdIPsec && (Array.isArray(properties.localIdIPsec) || (typeof properties.localIdIPsec) === 'string')) {
        errors.collect(ros.propertyValidator('localIdIPsec', ros.validateLength)({
            data: properties.localIdIPsec.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('localIdIPsec', ros.validateString)(properties.localIdIPsec));
    if(properties.ikeVersion && (typeof properties.ikeVersion) !== 'object') {
        errors.collect(ros.propertyValidator('ikeVersion', ros.validateAllowedValues)({
          data: properties.ikeVersion,
          allowedValues: ["ikev1","ikev2"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeVersion', ros.validateString)(properties.ikeVersion));
    if(properties.ikeMode && (typeof properties.ikeMode) !== 'object') {
        errors.collect(ros.propertyValidator('ikeMode', ros.validateAllowedValues)({
          data: properties.ikeMode,
          allowedValues: ["main","aggressive"],
        }));
    }
    errors.collect(ros.propertyValidator('ikeMode', ros.validateString)(properties.ikeMode));
    if(properties.ikeLifetime && (typeof properties.ikeLifetime) !== 'object') {
        errors.collect(ros.propertyValidator('ikeLifetime', ros.validateRange)({
            data: properties.ikeLifetime,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('ikeLifetime', ros.validateNumber)(properties.ikeLifetime));
    if(properties.remoteId && (Array.isArray(properties.remoteId) || (typeof properties.remoteId) === 'string')) {
        errors.collect(ros.propertyValidator('remoteId', ros.validateLength)({
            data: properties.remoteId.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('remoteId', ros.validateString)(properties.remoteId));
    if(properties.psk && (Array.isArray(properties.psk) || (typeof properties.psk) === 'string')) {
        errors.collect(ros.propertyValidator('psk', ros.validateLength)({
            data: properties.psk.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('psk', ros.validateString)(properties.psk));
    if(properties.ikePfs && (typeof properties.ikePfs) !== 'object') {
        errors.collect(ros.propertyValidator('ikePfs', ros.validateAllowedValues)({
          data: properties.ikePfs,
          allowedValues: ["group1","group2","group5","group14","group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ikePfs', ros.validateString)(properties.ikePfs));
    return errors.wrap('supplied properties not correct for "IkeConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IkeConfig` resource
 *
 * @param properties - the TypeScript properties of a `IkeConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IkeConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionIkeConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpnConnection_IkeConfigPropertyValidator(properties).assertSuccess();
    return {
      IkeAuthAlg: ros.stringToRosTemplate(properties.ikeAuthAlg),
      IkeEncAlg: ros.stringToRosTemplate(properties.ikeEncAlg),
      LocalIdIPsec: ros.stringToRosTemplate(properties.localIdIPsec),
      IkeVersion: ros.stringToRosTemplate(properties.ikeVersion),
      IkeMode: ros.stringToRosTemplate(properties.ikeMode),
      IkeLifetime: ros.numberToRosTemplate(properties.ikeLifetime),
      RemoteId: ros.stringToRosTemplate(properties.remoteId),
      Psk: ros.stringToRosTemplate(properties.psk),
      IkePfs: ros.stringToRosTemplate(properties.ikePfs),
    };
}

export namespace RosVpnConnection {
    /**
     * @stability external
     */
    export interface IpsecConfigProperty {
        /**
         * @Property ipsecPfs: Forwards all protocol packets. The Diffie-Hellman key exchange algorithm used in the first phase negotiation, the value: group1|group2|group5|group14|group24, default value: group2.
         */
        readonly ipsecPfs?: string | ros.IResolvable;
        /**
         * @Property ipsecEncAlg: Encryption algorithm negotiated in the second phase. Value: aes|aes192|aes256|des|3des, default value: aes.
         */
        readonly ipsecEncAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecAuthAlg: Authentication algorithm negotiated in the second phase. Value: md5|sha1, default value: md5.
         */
        readonly ipsecAuthAlg?: string | ros.IResolvable;
        /**
         * @Property ipsecLifetime: IpsecLifetime: The life cycle of the SA negotiated in the second phase. The value ranges from 0 to 86400, in seconds. The default value is 86400.
         */
        readonly ipsecLifetime?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `IpsecConfigProperty`
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosVpnConnection_IpsecConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.ipsecPfs && (typeof properties.ipsecPfs) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecPfs', ros.validateAllowedValues)({
          data: properties.ipsecPfs,
          allowedValues: ["group1","group2","group5","group14","group24"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecPfs', ros.validateString)(properties.ipsecPfs));
    if(properties.ipsecEncAlg && (typeof properties.ipsecEncAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateAllowedValues)({
          data: properties.ipsecEncAlg,
          allowedValues: ["aes","aes192","aes256","des","3des"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecEncAlg', ros.validateString)(properties.ipsecEncAlg));
    if(properties.ipsecAuthAlg && (typeof properties.ipsecAuthAlg) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateAllowedValues)({
          data: properties.ipsecAuthAlg,
          allowedValues: ["md5","sha1"],
        }));
    }
    errors.collect(ros.propertyValidator('ipsecAuthAlg', ros.validateString)(properties.ipsecAuthAlg));
    if(properties.ipsecLifetime && (typeof properties.ipsecLifetime) !== 'object') {
        errors.collect(ros.propertyValidator('ipsecLifetime', ros.validateRange)({
            data: properties.ipsecLifetime,
            min: 0,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('ipsecLifetime', ros.validateNumber)(properties.ipsecLifetime));
    return errors.wrap('supplied properties not correct for "IpsecConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IpsecConfig` resource
 *
 * @param properties - the TypeScript properties of a `IpsecConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnConnection.IpsecConfig` resource.
 */
// @ts-ignore TS6133
function rosVpnConnectionIpsecConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpnConnection_IpsecConfigPropertyValidator(properties).assertSuccess();
    return {
      IpsecPfs: ros.stringToRosTemplate(properties.ipsecPfs),
      IpsecEncAlg: ros.stringToRosTemplate(properties.ipsecEncAlg),
      IpsecAuthAlg: ros.stringToRosTemplate(properties.ipsecAuthAlg),
      IpsecLifetime: ros.numberToRosTemplate(properties.ipsecLifetime),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::VpnGateway`
 */
export interface RosVpnGatewayProps {

    /**
     * @Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * true: Automatically pays the bill for the VPN gateway.
     * false: Does not automatically pay the bill for the VPN gateway.
     * Default true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    readonly enableIpsec?: boolean | ros.IResolvable;

    /**
     * @Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    readonly enableSsl?: boolean | ros.IResolvable;

    /**
     * @Property instanceChargeType: Accounting type of the VPN gateway, the value is:
     * PREPAY, POSTPAY
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * @Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * @Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    readonly sslConnections?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVpnGateway.TagsProperty[];

    /**
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpnGatewayProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnGatewayProps`
 *
 * @returns the result of the validation.
 */
function RosVpnGatewayPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('enableIpsec', ros.validateBoolean)(properties.enableIpsec));
    errors.collect(ros.propertyValidator('enableSsl', ros.validateBoolean)(properties.enableSsl));
    errors.collect(ros.propertyValidator('sslConnections', ros.validateNumber)(properties.sslConnections));
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: 2,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["POSTPAY","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if(properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateAllowedValues)({
          data: properties.bandwidth,
          allowedValues: [5,10,20,50,100,200],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosVpnGateway_TagsPropertyValidator))(properties.tags));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 2,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVpnGatewayProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnGatewayProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway` resource.
 */
// @ts-ignore TS6133
function rosVpnGatewayPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpnGatewayPropsValidator(properties).assertSuccess();
    }
    return {
      Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      Description: ros.stringToRosTemplate(properties.description),
      EnableIpsec: ros.booleanToRosTemplate(properties.enableIpsec),
      EnableSsl: ros.booleanToRosTemplate(properties.enableSsl),
      InstanceChargeType: ros.stringToRosTemplate(properties.instanceChargeType),
      Name: ros.stringToRosTemplate(properties.name),
      Period: ros.numberToRosTemplate(properties.period),
      SslConnections: ros.numberToRosTemplate(properties.sslConnections),
      Tags: ros.listMapper(rosVpnGatewayTagsPropertyToRosTemplate)(properties.tags),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::VpnGateway`
 */
export class RosVpnGateway extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnGateway";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InternetIp: The public IP address of the VPN gateway.
     */
    public readonly attrInternetIp: ros.IResolvable;

    /**
     * @Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute Spec: The specification of the VPN gateway.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * @Attribute SslMaxConnections: The maximum number of concurrent SSL-VPN connections.
     */
    public readonly attrSslMaxConnections: ros.IResolvable;

    /**
     * @Attribute VpnGatewayId: ID of the VPN gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bandwidth: The public network bandwidth of the VPN gateway, in Mbps.
     * Value: 5|10|20|50|100|200.
     */
    public bandwidth: number | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID to which the VPN gateway belongs.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property autoPay: Whether to automatically pay the bill of the VPN gateway, the value:
     * true: Automatically pays the bill for the VPN gateway.
     * false: Does not automatically pay the bill for the VPN gateway.
     * Default true.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property description: Description of the VPN gateway.
     * The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property enableIpsec: Whether to enable IPsec-VPN. The IPsec-VPN feature provides a site-to-site connection. You can securely connect your local data center network to a private network or two proprietary networks by creating an IPsec tunnel. Value:
     * True (default): Enables the IPsec-VPN feature.
     * False: The IPsec-VPN function is not enabled.
     */
    public enableIpsec: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableSsl: Enable the SSL-VPN function. Provide point-to-site VPN connection, no need to configure customer gateway, terminal directly access. Value:
     * True: Enable SSL-VPN.
     * False (default): Does not enable SSL-VPN.
     */
    public enableSsl: boolean | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: Accounting type of the VPN gateway, the value is:
     * PREPAY, POSTPAY
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property name: Name of the VPN gateway. The default value is the ID of the VPN gateway.
     * The length is 2~100 English or Chinese characters. It must start with a large or small letter or Chinese. It can contain numbers, underscores (_) and dashes (-). It cannot start with http:// or https://.
     */
    public name: string | ros.IResolvable | undefined;

    /**
     * @Property period: Purchase time, value: 1~9|12|24|36.
     * When the value of the InstanceChargeType parameter is PREPAY, this parameter is mandatory.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property sslConnections: The maximum number of clients allowed to connect at the same time.
     */
    public sslConnections: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosVpnGateway.TagsProperty[] | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch to which the VPN gateway belongs.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::VpnGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnGatewayProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpnGateway.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInternetIp = this.getAtt('InternetIp');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrSpec = this.getAtt('Spec');
        this.attrSslMaxConnections = this.getAtt('SslMaxConnections');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.vpcId = props.vpcId;
        this.autoPay = props.autoPay;
        this.description = props.description;
        this.enableIpsec = props.enableIpsec;
        this.enableSsl = props.enableSsl;
        this.instanceChargeType = props.instanceChargeType;
        this.name = props.name;
        this.period = props.period;
        this.sslConnections = props.sslConnections;
        this.tags = props.tags;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bandwidth: this.bandwidth,
            vpcId: this.vpcId,
            autoPay: this.autoPay,
            description: this.description,
            enableIpsec: this.enableIpsec,
            enableSsl: this.enableSsl,
            instanceChargeType: this.instanceChargeType,
            name: this.name,
            period: this.period,
            sslConnections: this.sslConnections,
            tags: this.tags,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpnGatewayPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVpnGateway {
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
function RosVpnGateway_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnGateway.Tags` resource.
 */
// @ts-ignore TS6133
function rosVpnGatewayTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVpnGateway_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::VPC::VpnPbrRouteEntry`
 */
export interface RosVpnPbrRouteEntryProps {

    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    readonly nextHop: string | ros.IResolvable;

    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    readonly publishVpc: boolean | ros.IResolvable;

    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    readonly routeDest: string | ros.IResolvable;

    /**
     * @Property routeSource: The source CIDR block of the policy-based route.
     */
    readonly routeSource: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    readonly weight: number | ros.IResolvable;

    /**
     * @Property description: The description of the VPN destination route.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property overlayMode: The overlay mode.
     */
    readonly overlayMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpnPbrRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnPbrRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosVpnPbrRouteEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('routeDest', ros.requiredValidator)(properties.routeDest));
    errors.collect(ros.propertyValidator('routeDest', ros.validateString)(properties.routeDest));
    errors.collect(ros.propertyValidator('overlayMode', ros.validateString)(properties.overlayMode));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('nextHop', ros.requiredValidator)(properties.nextHop));
    errors.collect(ros.propertyValidator('nextHop', ros.validateString)(properties.nextHop));
    errors.collect(ros.propertyValidator('routeSource', ros.requiredValidator)(properties.routeSource));
    errors.collect(ros.propertyValidator('routeSource', ros.validateString)(properties.routeSource));
    errors.collect(ros.propertyValidator('publishVpc', ros.requiredValidator)(properties.publishVpc));
    errors.collect(ros.propertyValidator('publishVpc', ros.validateBoolean)(properties.publishVpc));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "RosVpnPbrRouteEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnPbrRouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnPbrRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnPbrRouteEntry` resource.
 */
// @ts-ignore TS6133
function rosVpnPbrRouteEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpnPbrRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
      NextHop: ros.stringToRosTemplate(properties.nextHop),
      PublishVpc: ros.booleanToRosTemplate(properties.publishVpc),
      RouteDest: ros.stringToRosTemplate(properties.routeDest),
      RouteSource: ros.stringToRosTemplate(properties.routeSource),
      VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
      Weight: ros.numberToRosTemplate(properties.weight),
      Description: ros.stringToRosTemplate(properties.description),
      OverlayMode: ros.stringToRosTemplate(properties.overlayMode),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::VpnPbrRouteEntry`
 */
export class RosVpnPbrRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnPbrRouteEntry";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NextHop: The next hop of the destination route entry.
     */
    public readonly attrNextHop: ros.IResolvable;

    /**
     * @Attribute RouteDest: The destination CIDR block of the destination route.
     */
    public readonly attrRouteDest: ros.IResolvable;

    /**
     * @Attribute RouteSource: The destination CIDR block of the policy-based route.
     */
    public readonly attrRouteSource: ros.IResolvable;

    /**
     * @Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    public nextHop: string | ros.IResolvable;

    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    public publishVpc: boolean | ros.IResolvable;

    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    public routeDest: string | ros.IResolvable;

    /**
     * @Property routeSource: The source CIDR block of the policy-based route.
     */
    public routeSource: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    public vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    public weight: number | ros.IResolvable;

    /**
     * @Property description: The description of the VPN destination route.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property overlayMode: The overlay mode.
     */
    public overlayMode: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::VpnPbrRouteEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnPbrRouteEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpnPbrRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNextHop = this.getAtt('NextHop');
        this.attrRouteDest = this.getAtt('RouteDest');
        this.attrRouteSource = this.getAtt('RouteSource');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.nextHop = props.nextHop;
        this.publishVpc = props.publishVpc;
        this.routeDest = props.routeDest;
        this.routeSource = props.routeSource;
        this.vpnGatewayId = props.vpnGatewayId;
        this.weight = props.weight;
        this.description = props.description;
        this.overlayMode = props.overlayMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            nextHop: this.nextHop,
            publishVpc: this.publishVpc,
            routeDest: this.routeDest,
            routeSource: this.routeSource,
            vpnGatewayId: this.vpnGatewayId,
            weight: this.weight,
            description: this.description,
            overlayMode: this.overlayMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpnPbrRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::VPC::VpnRouteEntry`
 */
export interface RosVpnRouteEntryProps {

    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    readonly nextHop: string | ros.IResolvable;

    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    readonly publishVpc: boolean | ros.IResolvable;

    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    readonly routeDest: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    readonly weight: number | ros.IResolvable;

    /**
     * @Property description: The description of the VPN destination route.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property overlayMode: The overlay mode.
     */
    readonly overlayMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVpnRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosVpnRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosVpnRouteEntryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('routeDest', ros.requiredValidator)(properties.routeDest));
    errors.collect(ros.propertyValidator('routeDest', ros.validateString)(properties.routeDest));
    errors.collect(ros.propertyValidator('overlayMode', ros.validateString)(properties.overlayMode));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.requiredValidator)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('vpnGatewayId', ros.validateString)(properties.vpnGatewayId));
    errors.collect(ros.propertyValidator('nextHop', ros.requiredValidator)(properties.nextHop));
    errors.collect(ros.propertyValidator('nextHop', ros.validateString)(properties.nextHop));
    errors.collect(ros.propertyValidator('publishVpc', ros.requiredValidator)(properties.publishVpc));
    errors.collect(ros.propertyValidator('publishVpc', ros.validateBoolean)(properties.publishVpc));
    errors.collect(ros.propertyValidator('weight', ros.requiredValidator)(properties.weight));
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    return errors.wrap('supplied properties not correct for "RosVpnRouteEntryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnRouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosVpnRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VPC::VpnRouteEntry` resource.
 */
// @ts-ignore TS6133
function rosVpnRouteEntryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVpnRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
      NextHop: ros.stringToRosTemplate(properties.nextHop),
      PublishVpc: ros.booleanToRosTemplate(properties.publishVpc),
      RouteDest: ros.stringToRosTemplate(properties.routeDest),
      VpnGatewayId: ros.stringToRosTemplate(properties.vpnGatewayId),
      Weight: ros.numberToRosTemplate(properties.weight),
      Description: ros.stringToRosTemplate(properties.description),
      OverlayMode: ros.stringToRosTemplate(properties.overlayMode),
    };
}

/**
 * A ROS template type:  `ALIYUN::VPC::VpnRouteEntry`
 */
export class RosVpnRouteEntry extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VPC::VpnRouteEntry";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute NextHop: The next hop of the destination route entry.
     */
    public readonly attrNextHop: ros.IResolvable;

    /**
     * @Attribute RouteDest: The destination CIDR block of the destination route.
     */
    public readonly attrRouteDest: ros.IResolvable;

    /**
     * @Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property nextHop: The next hop of the destination route entry.
     */
    public nextHop: string | ros.IResolvable;

    /**
     * @Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    public publishVpc: boolean | ros.IResolvable;

    /**
     * @Property routeDest: The destination CIDR block of the destination route.
     */
    public routeDest: string | ros.IResolvable;

    /**
     * @Property vpnGatewayId: The ID of the VPN Gateway.
     */
    public vpnGatewayId: string | ros.IResolvable;

    /**
     * @Property weight: The weight of the destination route. Valid values: 0|100.
     */
    public weight: number | ros.IResolvable;

    /**
     * @Property description: The description of the VPN destination route.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property overlayMode: The overlay mode.
     */
    public overlayMode: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VPC::VpnRouteEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVpnRouteEntryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVpnRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNextHop = this.getAtt('NextHop');
        this.attrRouteDest = this.getAtt('RouteDest');
        this.attrVpnGatewayId = this.getAtt('VpnGatewayId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.nextHop = props.nextHop;
        this.publishVpc = props.publishVpc;
        this.routeDest = props.routeDest;
        this.vpnGatewayId = props.vpnGatewayId;
        this.weight = props.weight;
        this.description = props.description;
        this.overlayMode = props.overlayMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            nextHop: this.nextHop,
            publishVpc: this.publishVpc,
            routeDest: this.routeDest,
            vpnGatewayId: this.vpnGatewayId,
            weight: this.weight,
            description: this.description,
            overlayMode: this.overlayMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVpnRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
