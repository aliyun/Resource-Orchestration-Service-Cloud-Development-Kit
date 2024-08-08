// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosLoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
 */
export interface RosLoadBalancersProps {

    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * @Property loadBalancerBussinessStatus: Service status of application load balancing
     */
    readonly loadBalancerBussinessStatus?: string | ros.IResolvable;

    /**
     * @Property loadBalancerIds: IDs of the load balancer instance.
     */
    readonly loadBalancerIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property loadBalancerNames: Names of the load balancing instance.
     */
    readonly loadBalancerNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property loadBalancerStatus: The status of SLB.
     */
    readonly loadBalancerStatus?: string | ros.IResolvable;

    /**
     * @Property payType: Load balancing instance payment type
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of Alb.
     */
    readonly tags?: RosLoadBalancers.TagsProperty[];

    /**
     * @Property vpcIds: VPC IDs
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLoadBalancersProps`
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancersProps`
 *
 * @returns the result of the validation.
 */
function RosLoadBalancersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.loadBalancerNames && (Array.isArray(properties.loadBalancerNames) || (typeof properties.loadBalancerNames) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancerNames', ros.validateLength)({
            data: properties.loadBalancerNames.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerNames', ros.listValidator(ros.validateString))(properties.loadBalancerNames));
    if(properties.loadBalancerBussinessStatus && (typeof properties.loadBalancerBussinessStatus) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerBussinessStatus', ros.validateAllowedValues)({
          data: properties.loadBalancerBussinessStatus,
          allowedValues: ["Abnormal","Normal"],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancerBussinessStatus', ros.validateString)(properties.loadBalancerBussinessStatus));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.vpcIds && (Array.isArray(properties.vpcIds) || (typeof properties.vpcIds) === 'string')) {
        errors.collect(ros.propertyValidator('vpcIds', ros.validateLength)({
            data: properties.vpcIds.length,
            min: 0,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('vpcIds', ros.listValidator(ros.validateString))(properties.vpcIds));
    if(properties.loadBalancerIds && (Array.isArray(properties.loadBalancerIds) || (typeof properties.loadBalancerIds) === 'string')) {
        errors.collect(ros.propertyValidator('loadBalancerIds', ros.validateLength)({
            data: properties.loadBalancerIds.length,
            min: 0,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('loadBalancerIds', ros.listValidator(ros.validateString))(properties.loadBalancerIds));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","POSTPAY","Subscription","PrePaid","PrePay","Prepaid","PREPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.addressType && (typeof properties.addressType) !== 'object') {
        errors.collect(ros.propertyValidator('addressType', ros.validateAllowedValues)({
          data: properties.addressType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('addressType', ros.validateString)(properties.addressType));
    if(properties.loadBalancerStatus && (typeof properties.loadBalancerStatus) !== 'object') {
        errors.collect(ros.propertyValidator('loadBalancerStatus', ros.validateAllowedValues)({
          data: properties.loadBalancerStatus,
          allowedValues: ["Inactive","Active","Provisioning","Configuring","CreateFailed"],
        }));
    }
    errors.collect(ros.propertyValidator('loadBalancerStatus', ros.validateString)(properties.loadBalancerStatus));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosLoadBalancers_TagsPropertyValidator))(properties.tags));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosLoadBalancersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ALB::LoadBalancers` resource
 *
 * @param properties - the TypeScript properties of a `RosLoadBalancersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ALB::LoadBalancers` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLoadBalancersPropsValidator(properties).assertSuccess();
    }
    return {
      AddressType: ros.stringToRosTemplate(properties.addressType),
      LoadBalancerBussinessStatus: ros.stringToRosTemplate(properties.loadBalancerBussinessStatus),
      LoadBalancerIds: ros.listMapper(ros.stringToRosTemplate)(properties.loadBalancerIds),
      LoadBalancerNames: ros.listMapper(ros.stringToRosTemplate)(properties.loadBalancerNames),
      LoadBalancerStatus: ros.stringToRosTemplate(properties.loadBalancerStatus),
      PayType: ros.stringToRosTemplate(properties.payType),
      RefreshOptions: ros.stringToRosTemplate(properties.refreshOptions),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosLoadBalancersTagsPropertyToRosTemplate)(properties.tags),
      VpcIds: ros.listMapper(ros.stringToRosTemplate)(properties.vpcIds),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ALB::LoadBalancers`, which is used to query the basic information about created Application Load Balancer (ALB) instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-loadbalancers
 */
export class RosLoadBalancers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ALB::LoadBalancers";

    /**
     * @Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    public readonly attrLoadBalancerIds: ros.IResolvable;

    /**
     * @Attribute LoadBalancers: The list of load balancers.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    public addressType: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerBussinessStatus: Service status of application load balancing
     */
    public loadBalancerBussinessStatus: string | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerIds: IDs of the load balancer instance.
     */
    public loadBalancerIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerNames: Names of the load balancing instance.
     */
    public loadBalancerNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property loadBalancerStatus: The status of SLB.
     */
    public loadBalancerStatus: string | ros.IResolvable | undefined;

    /**
     * @Property payType: Load balancing instance payment type
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of Alb.
     */
    public tags: RosLoadBalancers.TagsProperty[] | undefined;

    /**
     * @Property vpcIds: VPC IDs
     */
    public vpcIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLoadBalancers.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoadBalancerIds = this.getAtt('LoadBalancerIds');
        this.attrLoadBalancers = this.getAtt('LoadBalancers');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.addressType = props.addressType;
        this.loadBalancerBussinessStatus = props.loadBalancerBussinessStatus;
        this.loadBalancerIds = props.loadBalancerIds;
        this.loadBalancerNames = props.loadBalancerNames;
        this.loadBalancerStatus = props.loadBalancerStatus;
        this.payType = props.payType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vpcIds = props.vpcIds;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            addressType: this.addressType,
            loadBalancerBussinessStatus: this.loadBalancerBussinessStatus,
            loadBalancerIds: this.loadBalancerIds,
            loadBalancerNames: this.loadBalancerNames,
            loadBalancerStatus: this.loadBalancerStatus,
            payType: this.payType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vpcIds: this.vpcIds,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLoadBalancersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLoadBalancers {
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
function RosLoadBalancers_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ALB::LoadBalancers.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ALB::LoadBalancers.Tags` resource.
 */
// @ts-ignore TS6133
function rosLoadBalancersTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLoadBalancers_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}
