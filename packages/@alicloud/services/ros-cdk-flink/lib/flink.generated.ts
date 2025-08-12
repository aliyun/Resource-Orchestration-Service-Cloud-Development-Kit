// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
export interface RosInstanceProps {

    /**
     * @Property bucket: OSS bucket name.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * @Property chargeType: The payment type, the value of the value is as follows:
     * POST: pay as you go.
     * PRE: subscription.
     */
    readonly chargeType: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of instance.
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: Virtual switch ID.
     */
    readonly vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: The available area ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: When the payment type is the monthly package, the value of the value is as follows:
     * true: Automatic renewal.
     * false: Manual renewal.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property duration: Number of order cycle.
     * When ChargeType is configured as PRE, the duration parameter must be filled.
     * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
     * If PricingCycle is year, the valid range is 1 to 3
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * @Property pricingCycle: The ordering cycle only supports ordering in the year and month.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * @Property promotionCode: Promo Code.
     */
    readonly promotionCode?: string | ros.IResolvable;

    /**
     * @Property resourceSpec: Resource specifications.
     * When ChargeType is configured as PRE, the resource specification parameters must be filled.
     */
    readonly resourceSpec?: RosInstance.ResourceSpecProperty | ros.IResolvable;

    /**
     * @Property usePromotionCode: Whether to use coupons.The value is as follows:
     * true: Use.
     * false: Not in use.
     */
    readonly usePromotionCode?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.requiredValidator)(properties.instanceName));
    if(properties.instanceName && (typeof properties.instanceName) !== 'object') {
        errors.collect(ros.propertyValidator('instanceName', ros.validateAllowedPattern)({
          data: properties.instanceName,
          reg: /^[a-z][a-z0-9-]{1,60}/
        }));
    }
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('bucket', ros.requiredValidator)(properties.bucket));
    errors.collect(ros.propertyValidator('bucket', ros.validateString)(properties.bucket));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.requiredValidator)(properties.vSwitchIds));
    errors.collect(ros.propertyValidator('vSwitchIds', ros.listValidator(ros.validateAny))(properties.vSwitchIds));
    if(properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
          data: properties.pricingCycle,
          allowedValues: ["Month","Year","month","year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('chargeType', ros.requiredValidator)(properties.chargeType));
    if(properties.chargeType && (typeof properties.chargeType) !== 'object') {
        errors.collect(ros.propertyValidator('chargeType', ros.validateAllowedValues)({
          data: properties.chargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('chargeType', ros.validateString)(properties.chargeType));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('promotionCode', ros.validateString)(properties.promotionCode));
    errors.collect(ros.propertyValidator('resourceSpec', RosInstance_ResourceSpecPropertyValidator)(properties.resourceSpec));
    if(properties.duration && (typeof properties.duration) !== 'object') {
        errors.collect(ros.propertyValidator('duration', ros.validateAllowedValues)({
          data: properties.duration,
          allowedValues: [1,2,3,4,5,6,7,8,9,12,24,36],
        }));
    }
    errors.collect(ros.propertyValidator('duration', ros.validateNumber)(properties.duration));
    errors.collect(ros.propertyValidator('usePromotionCode', ros.validateBoolean)(properties.usePromotionCode));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Flink::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Flink::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'Bucket': ros.stringToRosTemplate(properties.bucket),
      'ChargeType': ros.stringToRosTemplate(properties.chargeType),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchIds': ros.listMapper(ros.objectToRosTemplate)(properties.vSwitchIds),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'Duration': ros.numberToRosTemplate(properties.duration),
      'PricingCycle': ros.stringToRosTemplate(properties.pricingCycle),
      'PromotionCode': ros.stringToRosTemplate(properties.promotionCode),
      'ResourceSpec': rosInstanceResourceSpecPropertyToRosTemplate(properties.resourceSpec),
      'UsePromotionCode': ros.booleanToRosTemplate(properties.usePromotionCode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Flink::Instance`, which is used to create a subscription or pay-as-you-go Realtime Compute for Apache Flink instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Flink::Instance";

    /**
     * @Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute OrderId: Order information.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute WorkspaceId: Workspace ID.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property bucket: OSS bucket name.
     */
    public bucket: string | ros.IResolvable;

    /**
     * @Property chargeType: The payment type, the value of the value is as follows:
     * POST: pay as you go.
     * PRE: subscription.
     */
    public chargeType: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of instance.
     */
    public instanceName: string | ros.IResolvable;

    /**
     * @Property vpcId: VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchIds: Virtual switch ID.
     */
    public vSwitchIds: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: The available area ID of the instance.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: When the payment type is the monthly package, the value of the value is as follows:
     * true: Automatic renewal.
     * false: Manual renewal.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property duration: Number of order cycle.
     * When ChargeType is configured as PRE, the duration parameter must be filled.
     * If PricingCycle is Month, the valid range is 1, 2, 3, 6, 7, 8, 9, 12, 24, 36
     * If PricingCycle is year, the valid range is 1 to 3
     */
    public duration: number | ros.IResolvable | undefined;

    /**
     * @Property pricingCycle: The ordering cycle only supports ordering in the year and month.
     */
    public pricingCycle: string | ros.IResolvable | undefined;

    /**
     * @Property promotionCode: Promo Code.
     */
    public promotionCode: string | ros.IResolvable | undefined;

    /**
     * @Property resourceSpec: Resource specifications.
     * When ChargeType is configured as PRE, the resource specification parameters must be filled.
     */
    public resourceSpec: RosInstance.ResourceSpecProperty | ros.IResolvable | undefined;

    /**
     * @Property usePromotionCode: Whether to use coupons.The value is as follows:
     * true: Use.
     * false: Not in use.
     */
    public usePromotionCode: boolean | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrWorkspaceId = this.getAtt('WorkspaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bucket = props.bucket;
        this.chargeType = props.chargeType;
        this.instanceName = props.instanceName;
        this.vpcId = props.vpcId;
        this.vSwitchIds = props.vSwitchIds;
        this.zoneId = props.zoneId;
        this.autoRenew = props.autoRenew;
        this.duration = props.duration;
        this.pricingCycle = props.pricingCycle;
        this.promotionCode = props.promotionCode;
        this.resourceSpec = props.resourceSpec;
        this.usePromotionCode = props.usePromotionCode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            bucket: this.bucket,
            chargeType: this.chargeType,
            instanceName: this.instanceName,
            vpcId: this.vpcId,
            vSwitchIds: this.vSwitchIds,
            zoneId: this.zoneId,
            autoRenew: this.autoRenew,
            duration: this.duration,
            pricingCycle: this.pricingCycle,
            promotionCode: this.promotionCode,
            resourceSpec: this.resourceSpec,
            usePromotionCode: this.usePromotionCode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
    /**
     * @stability external
     */
    export interface ResourceSpecProperty {
        /**
         * @Property cpu: CPU number.
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property memoryGb: memory size.The unit is GB.
     * It shows that the amount of memory must be 4 times the number of CPUs.
         */
        readonly memoryGb?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceSpecProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSpecProperty`
 *
 * @returns the result of the validation.
 */
function RosInstance_ResourceSpecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('memoryGb', ros.validateNumber)(properties.memoryGb));
    return errors.wrap('supplied properties not correct for "ResourceSpecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Flink::Instance.ResourceSpec` resource
 *
 * @param properties - the TypeScript properties of a `ResourceSpecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Flink::Instance.ResourceSpec` resource.
 */
// @ts-ignore TS6133
function rosInstanceResourceSpecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_ResourceSpecPropertyValidator(properties).assertSuccess();
    return {
      'Cpu': ros.numberToRosTemplate(properties.cpu),
      'MemoryGB': ros.numberToRosTemplate(properties.memoryGb),
    };
}

/**
 * Properties for defining a `RosMember`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
export interface RosMemberProps {

    /**
     * @Property member: The user ID of the member.
     */
    readonly member: string | ros.IResolvable;

    /**
     * @Property namespace: The project space name.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property role: The role of the member.
     */
    readonly role: string | ros.IResolvable;

    /**
     * @Property workspace: The work space ID.
     */
    readonly workspace: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosMemberProps`
 *
 * @param properties - the TypeScript properties of a `RosMemberProps`
 *
 * @returns the result of the validation.
 */
function RosMemberPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('role', ros.requiredValidator)(properties.role));
    if(properties.role && (typeof properties.role) !== 'object') {
        errors.collect(ros.propertyValidator('role', ros.validateAllowedValues)({
          data: properties.role,
          allowedValues: ["EDITOR","OWNER","VIEWER"],
        }));
    }
    errors.collect(ros.propertyValidator('role', ros.validateString)(properties.role));
    errors.collect(ros.propertyValidator('member', ros.requiredValidator)(properties.member));
    errors.collect(ros.propertyValidator('member', ros.validateString)(properties.member));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    if(properties.namespace && (Array.isArray(properties.namespace) || (typeof properties.namespace) === 'string')) {
        errors.collect(ros.propertyValidator('namespace', ros.validateLength)({
            data: properties.namespace.length,
            min: 1,
            max: 60,
          }));
    }
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('workspace', ros.requiredValidator)(properties.workspace));
    errors.collect(ros.propertyValidator('workspace', ros.validateString)(properties.workspace));
    return errors.wrap('supplied properties not correct for "RosMemberProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Flink::Member` resource
 *
 * @param properties - the TypeScript properties of a `RosMemberProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Flink::Member` resource.
 */
// @ts-ignore TS6133
function rosMemberPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMemberPropsValidator(properties).assertSuccess();
    }
    return {
      'Member': ros.stringToRosTemplate(properties.member),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Role': ros.stringToRosTemplate(properties.role),
      'Workspace': ros.stringToRosTemplate(properties.workspace),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Flink::Member`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Member` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-member
 */
export class RosMember extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Flink::Member";

    /**
     * @Attribute MemberInfo: The detailed info of the flink member.
     */
    public readonly attrMemberInfo: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property member: The user ID of the member.
     */
    public member: string | ros.IResolvable;

    /**
     * @Property namespace: The project space name.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property role: The role of the member.
     */
    public role: string | ros.IResolvable;

    /**
     * @Property workspace: The work space ID.
     */
    public workspace: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMemberProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMember.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrMemberInfo = this.getAtt('MemberInfo');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.member = props.member;
        this.namespace = props.namespace;
        this.role = props.role;
        this.workspace = props.workspace;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            member: this.member,
            namespace: this.namespace,
            role: this.role,
            workspace: this.workspace,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMemberPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
export interface RosNamespaceProps {

    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property namespace: Project space name.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property resourceSpec: Resource specifications.
     */
    readonly resourceSpec?: RosNamespace.ResourceSpecProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('resourceSpec', RosNamespace_ResourceSpecPropertyValidator)(properties.resourceSpec));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    if(properties.namespace && (typeof properties.namespace) !== 'object') {
        errors.collect(ros.propertyValidator('namespace', ros.validateAllowedPattern)({
          data: properties.namespace,
          reg: /^[a-z][a-z0-9-]{1,60}/
        }));
    }
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Flink::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Flink::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'ResourceSpec': rosNamespaceResourceSpecPropertyToRosTemplate(properties.resourceSpec),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::Flink::Namespace`, which is used to create a project.
 * @Note This class does not contain additional functions, so it is recommended to use the `Namespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-flink-namespace
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::Flink::Namespace";

    /**
     * @Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Namespace: Project space name.
     */
    public readonly attrNamespace: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property namespace: Project space name.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property resourceSpec: Resource specifications.
     */
    public resourceSpec: RosNamespace.ResourceSpecProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNamespace = this.getAtt('Namespace');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.namespace = props.namespace;
        this.resourceSpec = props.resourceSpec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            namespace: this.namespace,
            resourceSpec: this.resourceSpec,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNamespace {
    /**
     * @stability external
     */
    export interface ResourceSpecProperty {
        /**
         * @Property cpu: CPU number.
     * In the working space of the annual package, the number of CPUs must be filled.Under the working space of paying in volume, you can not fill in the number of CPUs.
     * The number of CPUs created by the target project space is less than the number of CPU remaining in the working space (the total number of CPU purchased by the work space minus the number of other project spaces that has been assigned the number of CPUs), otherwise an error will be reported.
         */
        readonly cpu?: number | ros.IResolvable;
        /**
         * @Property memoryGb: Memory.
     * In the working space of the annual package, the amount of memory must be filled, and the amount of memory must be 4 times.Under the working space of paying in volume, you can fill in the amount of memory without filling in the amount of memory.
     * The amount of memory in the target project space is less than the remaining memory of the working space (the total amount of memory purchased by the work space minus the number of other project spaces that have been assigned the amount of memory), otherwise an error will be reported.
         */
        readonly memoryGb?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceSpecProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceSpecProperty`
 *
 * @returns the result of the validation.
 */
function RosNamespace_ResourceSpecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cpu', ros.validateNumber)(properties.cpu));
    errors.collect(ros.propertyValidator('memoryGb', ros.validateNumber)(properties.memoryGb));
    return errors.wrap('supplied properties not correct for "ResourceSpecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::Flink::Namespace.ResourceSpec` resource
 *
 * @param properties - the TypeScript properties of a `ResourceSpecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::Flink::Namespace.ResourceSpec` resource.
 */
// @ts-ignore TS6133
function rosNamespaceResourceSpecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNamespace_ResourceSpecPropertyValidator(properties).assertSuccess();
    return {
      'Cpu': ros.numberToRosTemplate(properties.cpu),
      'MemoryGB': ros.numberToRosTemplate(properties.memoryGb),
    };
}
