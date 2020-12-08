"use strict";
// Generated from the AliCloud ROS Resource Specification
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosRouteEntry = exports.RosCenInstanceAttachment = exports.RosCenInstance = exports.RosCenBandwidthPackageAssociation = exports.RosCenBandwidthPackage = exports.RosCenBandwidthLimit = void 0;
const ros = require("@alicloud/ros-cdk-core");
/**
 * Determine whether the given properties match those of a `RosCenBandwidthLimitProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthLimitProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthLimitPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('oppositeRegionId', ros.requiredValidator)(properties.oppositeRegionId));
    errors.collect(ros.propertyValidator('oppositeRegionId', ros.validateString)(properties.oppositeRegionId));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('bandwidthLimit', ros.requiredValidator)(properties.bandwidthLimit));
    if (properties.bandwidthLimit && (typeof properties.bandwidthLimit) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthLimit', ros.validateRange)({
            data: properties.bandwidthLimit,
            min: 1,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('bandwidthLimit', ros.validateNumber)(properties.bandwidthLimit));
    errors.collect(ros.propertyValidator('localRegionId', ros.requiredValidator)(properties.localRegionId));
    errors.collect(ros.propertyValidator('localRegionId', ros.validateString)(properties.localRegionId));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthLimitProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthLimit` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthLimitProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthLimit` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthLimitPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCenBandwidthLimitPropsValidator(properties).assertSuccess();
    }
    return {
        BandwidthLimit: ros.numberToRosTemplate(properties.bandwidthLimit),
        CenId: ros.stringToRosTemplate(properties.cenId),
        LocalRegionId: ros.stringToRosTemplate(properties.localRegionId),
        OppositeRegionId: ros.stringToRosTemplate(properties.oppositeRegionId),
    };
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthLimit`
 */
class RosCenBandwidthLimit extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CEN::CenBandwidthLimit`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenBandwidthLimit.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidthLimit = props.bandwidthLimit;
        this.cenId = props.cenId;
        this.localRegionId = props.localRegionId;
        this.oppositeRegionId = props.oppositeRegionId;
    }
    get rosProperties() {
        return {
            bandwidthLimit: this.bandwidthLimit,
            cenId: this.cenId,
            localRegionId: this.localRegionId,
            oppositeRegionId: this.oppositeRegionId,
        };
    }
    renderProperties(props) {
        return rosCenBandwidthLimitPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenBandwidthLimit = RosCenBandwidthLimit;
/**
 * The resource type name for this resource class.
 */
RosCenBandwidthLimit.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthLimit";
/**
 * Determine whether the given properties match those of a `RosCenBandwidthPackageProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackagePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    if (properties.bandwidthPackageChargeType && (typeof properties.bandwidthPackageChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidthPackageChargeType', ros.validateAllowedValues)({
            data: properties.bandwidthPackageChargeType,
            allowedValues: ["PREPAY", "POSTPAY"],
        }));
    }
    errors.collect(ros.propertyValidator('bandwidthPackageChargeType', ros.validateString)(properties.bandwidthPackageChargeType));
    errors.collect(ros.propertyValidator('geographicRegionBId', ros.requiredValidator)(properties.geographicRegionBId));
    if (properties.geographicRegionBId && (typeof properties.geographicRegionBId) !== 'object') {
        errors.collect(ros.propertyValidator('geographicRegionBId', ros.validateAllowedValues)({
            data: properties.geographicRegionBId,
            allowedValues: ["China", "North-America", "Asia-Pacific", "Europe", "Australia"],
        }));
    }
    errors.collect(ros.propertyValidator('geographicRegionBId', ros.validateString)(properties.geographicRegionBId));
    errors.collect(ros.propertyValidator('geographicRegionAId', ros.requiredValidator)(properties.geographicRegionAId));
    if (properties.geographicRegionAId && (typeof properties.geographicRegionAId) !== 'object') {
        errors.collect(ros.propertyValidator('geographicRegionAId', ros.validateAllowedValues)({
            data: properties.geographicRegionAId,
            allowedValues: ["China", "North-America", "Asia-Pacific", "Europe", "Australia"],
        }));
    }
    errors.collect(ros.propertyValidator('geographicRegionAId', ros.validateString)(properties.geographicRegionAId));
    if (properties.pricingCycle && (typeof properties.pricingCycle) !== 'object') {
        errors.collect(ros.propertyValidator('pricingCycle', ros.validateAllowedValues)({
            data: properties.pricingCycle,
            allowedValues: ["Month", "Year"],
        }));
    }
    errors.collect(ros.propertyValidator('pricingCycle', ros.validateString)(properties.pricingCycle));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('bandwidth', ros.requiredValidator)(properties.bandwidth));
    if (properties.bandwidth && (typeof properties.bandwidth) !== 'object') {
        errors.collect(ros.propertyValidator('bandwidth', ros.validateRange)({
            data: properties.bandwidth,
            min: 2,
            max: undefined,
        }));
    }
    errors.collect(ros.propertyValidator('bandwidth', ros.validateNumber)(properties.bandwidth));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    if (properties.autoRenewDuration && (typeof properties.autoRenewDuration) !== 'object') {
        errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateAllowedValues)({
            data: properties.autoRenewDuration,
            allowedValues: [1, 2, 3, 6],
        }));
    }
    errors.collect(ros.propertyValidator('autoRenewDuration', ros.validateNumber)(properties.autoRenewDuration));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthPackageProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackage` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackage` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackagePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCenBandwidthPackagePropsValidator(properties).assertSuccess();
    }
    return {
        Bandwidth: ros.numberToRosTemplate(properties.bandwidth),
        GeographicRegionAId: ros.stringToRosTemplate(properties.geographicRegionAId),
        GeographicRegionBId: ros.stringToRosTemplate(properties.geographicRegionBId),
        AutoPay: ros.booleanToRosTemplate(properties.autoPay),
        AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
        AutoRenewDuration: ros.numberToRosTemplate(properties.autoRenewDuration),
        BandwidthPackageChargeType: ros.stringToRosTemplate(properties.bandwidthPackageChargeType),
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
        Period: ros.numberToRosTemplate(properties.period),
        PricingCycle: ros.stringToRosTemplate(properties.pricingCycle),
    };
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthPackage`
 */
class RosCenBandwidthPackage extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackage`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenBandwidthPackage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenBandwidthPackageId = ros.Token.asString(this.getAtt('CenBandwidthPackageId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.bandwidth = props.bandwidth;
        this.geographicRegionAId = props.geographicRegionAId;
        this.geographicRegionBId = props.geographicRegionBId;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.autoRenewDuration = props.autoRenewDuration;
        this.bandwidthPackageChargeType = props.bandwidthPackageChargeType;
        this.description = props.description;
        this.name = props.name;
        this.period = props.period;
        this.pricingCycle = props.pricingCycle;
    }
    get rosProperties() {
        return {
            bandwidth: this.bandwidth,
            geographicRegionAId: this.geographicRegionAId,
            geographicRegionBId: this.geographicRegionBId,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            autoRenewDuration: this.autoRenewDuration,
            bandwidthPackageChargeType: this.bandwidthPackageChargeType,
            description: this.description,
            name: this.name,
            period: this.period,
            pricingCycle: this.pricingCycle,
        };
    }
    renderProperties(props) {
        return rosCenBandwidthPackagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenBandwidthPackage = RosCenBandwidthPackage;
/**
 * The resource type name for this resource class.
 */
RosCenBandwidthPackage.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackage";
/**
 * Determine whether the given properties match those of a `RosCenBandwidthPackageAssociationProps`
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageAssociationProps`
 *
 * @returns the result of the validation.
 */
function RosCenBandwidthPackageAssociationPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('cenBandwidthPackageId', ros.requiredValidator)(properties.cenBandwidthPackageId));
    errors.collect(ros.propertyValidator('cenBandwidthPackageId', ros.validateString)(properties.cenBandwidthPackageId));
    return errors.wrap('supplied properties not correct for "RosCenBandwidthPackageAssociationProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackageAssociation` resource
 *
 * @param properties - the TypeScript properties of a `RosCenBandwidthPackageAssociationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenBandwidthPackageAssociation` resource.
 */
// @ts-ignore TS6133
function rosCenBandwidthPackageAssociationPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCenBandwidthPackageAssociationPropsValidator(properties).assertSuccess();
    }
    return {
        CenBandwidthPackageId: ros.stringToRosTemplate(properties.cenBandwidthPackageId),
        CenId: ros.stringToRosTemplate(properties.cenId),
    };
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenBandwidthPackageAssociation`
 */
class RosCenBandwidthPackageAssociation extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CEN::CenBandwidthPackageAssociation`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenBandwidthPackageAssociation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenBandwidthPackageId = props.cenBandwidthPackageId;
        this.cenId = props.cenId;
    }
    get rosProperties() {
        return {
            cenBandwidthPackageId: this.cenBandwidthPackageId,
            cenId: this.cenId,
        };
    }
    renderProperties(props) {
        return rosCenBandwidthPackageAssociationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenBandwidthPackageAssociation = RosCenBandwidthPackageAssociation;
/**
 * The resource type name for this resource class.
 */
RosCenBandwidthPackageAssociation.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenBandwidthPackageAssociation";
/**
 * Determine whether the given properties match those of a `RosCenInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosCenInstancePropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCenInstanceProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstance` resource.
 */
// @ts-ignore TS6133
function rosCenInstancePropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCenInstancePropsValidator(properties).assertSuccess();
    }
    return {
        Description: ros.stringToRosTemplate(properties.description),
        Name: ros.stringToRosTemplate(properties.name),
    };
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenInstance`
 */
class RosCenInstance extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CEN::CenInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCenId = ros.Token.asString(this.getAtt('CenId'));
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.description = props.description;
        this.name = props.name;
    }
    get rosProperties() {
        return {
            description: this.description,
            name: this.name,
        };
    }
    renderProperties(props) {
        return rosCenInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenInstance = RosCenInstance;
/**
 * The resource type name for this resource class.
 */
RosCenInstance.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstance";
/**
 * Determine whether the given properties match those of a `RosCenInstanceAttachmentProps`
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceAttachmentProps`
 *
 * @returns the result of the validation.
 */
function RosCenInstanceAttachmentPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('childInstanceType', ros.requiredValidator)(properties.childInstanceType));
    if (properties.childInstanceType && (typeof properties.childInstanceType) !== 'object') {
        errors.collect(ros.propertyValidator('childInstanceType', ros.validateAllowedValues)({
            data: properties.childInstanceType,
            allowedValues: ["VPC", "VBR", "CCN"],
        }));
    }
    errors.collect(ros.propertyValidator('childInstanceType', ros.validateString)(properties.childInstanceType));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('childInstanceOwnerId', ros.validateNumber)(properties.childInstanceOwnerId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.requiredValidator)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.validateString)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.requiredValidator)(properties.childInstanceRegionId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.validateString)(properties.childInstanceRegionId));
    return errors.wrap('supplied properties not correct for "RosCenInstanceAttachmentProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstanceAttachment` resource
 *
 * @param properties - the TypeScript properties of a `RosCenInstanceAttachmentProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::CenInstanceAttachment` resource.
 */
// @ts-ignore TS6133
function rosCenInstanceAttachmentPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosCenInstanceAttachmentPropsValidator(properties).assertSuccess();
    }
    return {
        CenId: ros.stringToRosTemplate(properties.cenId),
        ChildInstanceId: ros.stringToRosTemplate(properties.childInstanceId),
        ChildInstanceRegionId: ros.stringToRosTemplate(properties.childInstanceRegionId),
        ChildInstanceType: ros.stringToRosTemplate(properties.childInstanceType),
        ChildInstanceOwnerId: ros.numberToRosTemplate(properties.childInstanceOwnerId),
    };
}
/**
 * A ROS template type:  `ALIYUN::CEN::CenInstanceAttachment`
 */
class RosCenInstanceAttachment extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CEN::CenInstanceAttachment`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosCenInstanceAttachment.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.childInstanceId = props.childInstanceId;
        this.childInstanceRegionId = props.childInstanceRegionId;
        this.childInstanceType = props.childInstanceType;
        this.childInstanceOwnerId = props.childInstanceOwnerId;
    }
    get rosProperties() {
        return {
            cenId: this.cenId,
            childInstanceId: this.childInstanceId,
            childInstanceRegionId: this.childInstanceRegionId,
            childInstanceType: this.childInstanceType,
            childInstanceOwnerId: this.childInstanceOwnerId,
        };
    }
    renderProperties(props) {
        return rosCenInstanceAttachmentPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosCenInstanceAttachment = RosCenInstanceAttachment;
/**
 * The resource type name for this resource class.
 */
RosCenInstanceAttachment.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::CenInstanceAttachment";
/**
 * Determine whether the given properties match those of a `RosRouteEntryProps`
 *
 * @param properties - the TypeScript properties of a `RosRouteEntryProps`
 *
 * @returns the result of the validation.
 */
function RosRouteEntryPropsValidator(properties) {
    if (!ros.canInspect(properties)) {
        return ros.VALIDATION_SUCCESS;
    }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('childInstanceType', ros.requiredValidator)(properties.childInstanceType));
    if (properties.childInstanceType && (typeof properties.childInstanceType) !== 'object') {
        errors.collect(ros.propertyValidator('childInstanceType', ros.validateAllowedValues)({
            data: properties.childInstanceType,
            allowedValues: ["VPC", "VBR"],
        }));
    }
    errors.collect(ros.propertyValidator('childInstanceType', ros.validateString)(properties.childInstanceType));
    errors.collect(ros.propertyValidator('cenId', ros.requiredValidator)(properties.cenId));
    errors.collect(ros.propertyValidator('cenId', ros.validateString)(properties.cenId));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.requiredValidator)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('destinationCidrBlock', ros.validateString)(properties.destinationCidrBlock));
    errors.collect(ros.propertyValidator('childInstanceRouteTableId', ros.requiredValidator)(properties.childInstanceRouteTableId));
    errors.collect(ros.propertyValidator('childInstanceRouteTableId', ros.validateString)(properties.childInstanceRouteTableId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.requiredValidator)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceId', ros.validateString)(properties.childInstanceId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.requiredValidator)(properties.childInstanceRegionId));
    errors.collect(ros.propertyValidator('childInstanceRegionId', ros.validateString)(properties.childInstanceRegionId));
    return errors.wrap('supplied properties not correct for "RosRouteEntryProps"');
}
/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CEN::RouteEntry` resource
 *
 * @param properties - the TypeScript properties of a `RosRouteEntryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CEN::RouteEntry` resource.
 */
// @ts-ignore TS6133
function rosRouteEntryPropsToRosTemplate(properties, enableResourcePropertyConstraint) {
    if (!ros.canInspect(properties)) {
        return properties;
    }
    if (enableResourcePropertyConstraint) {
        RosRouteEntryPropsValidator(properties).assertSuccess();
    }
    return {
        CenId: ros.stringToRosTemplate(properties.cenId),
        ChildInstanceId: ros.stringToRosTemplate(properties.childInstanceId),
        ChildInstanceRegionId: ros.stringToRosTemplate(properties.childInstanceRegionId),
        ChildInstanceRouteTableId: ros.stringToRosTemplate(properties.childInstanceRouteTableId),
        ChildInstanceType: ros.stringToRosTemplate(properties.childInstanceType),
        DestinationCidrBlock: ros.stringToRosTemplate(properties.destinationCidrBlock),
    };
}
/**
 * A ROS template type:  `ALIYUN::CEN::RouteEntry`
 */
class RosRouteEntry extends ros.RosResource {
    /**
     * Create a new `ALIYUN::CEN::RouteEntry`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint) {
        super(scope, id, { type: RosRouteEntry.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cenId = props.cenId;
        this.childInstanceId = props.childInstanceId;
        this.childInstanceRegionId = props.childInstanceRegionId;
        this.childInstanceRouteTableId = props.childInstanceRouteTableId;
        this.childInstanceType = props.childInstanceType;
        this.destinationCidrBlock = props.destinationCidrBlock;
    }
    get rosProperties() {
        return {
            cenId: this.cenId,
            childInstanceId: this.childInstanceId,
            childInstanceRegionId: this.childInstanceRegionId,
            childInstanceRouteTableId: this.childInstanceRouteTableId,
            childInstanceType: this.childInstanceType,
            destinationCidrBlock: this.destinationCidrBlock,
        };
    }
    renderProperties(props) {
        return rosRouteEntryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
exports.RosRouteEntry = RosRouteEntry;
/**
 * The resource type name for this resource class.
 */
RosRouteEntry.ROS_RESOURCE_TYPE_NAME = "ALIYUN::CEN::RouteEntry";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VuLmdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNlbi5nZW5lcmF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHlEQUF5RDs7O0FBRXpELDhDQUE4QztBQTRCOUM7Ozs7OztHQU1HO0FBQ0gsU0FBUyxrQ0FBa0MsQ0FBQyxVQUFlO0lBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1FBQUUsT0FBTyxHQUFHLENBQUMsa0JBQWtCLENBQUM7S0FBRTtJQUNuRSxNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDOUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0csTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENB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QUFDLG9CQUFvQixDQUFDO0lBQzNELENBQUM7SUFHRCxJQUFjLGFBQWE7UUFDdkIsT0FBTztZQUNILEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCx5QkFBeUIsRUFBRSxJQUFJLENBQUMseUJBQXlCO1lBQ3pELGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtTQUNsRCxDQUFDO0lBQ04sQ0FBQztJQUNTLGdCQUFnQixDQUFDLEtBQTJCO1FBQ2xELE9BQU8sK0JBQStCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7O0FBNUVMLHNDQTZFQztBQTVFRzs7R0FFRztBQUNvQixvQ0FBc0IsR0FBRyx5QkFBeUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuXG5pbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aExpbWl0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0NlbkJhbmR3aWR0aExpbWl0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aExpbWl0OiBUaGUgYmFuZHdpZHRoIGNvbmZpZ3VyZWQgZm9yIHRoZSBpbnRlcmNvbm5lY3RlZCByZWdpb25zIGNvbW11bmljYXRpb24uIE1pbmltYWwgdmFsdWU6IDFcbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGhMaW1pdDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbklkOiBUaGUgSUQgb2YgdGhlIENFTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGxvY2FsUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgbG9jYWwgcmVnaW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxvY2FsUmVnaW9uSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBvcHBvc2l0ZVJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIG90aGVyIGludGVyY29ubmVjdGVkIHJlZ2lvbi5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHBvc2l0ZVJlZ2lvbklkOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDZW5CYW5kd2lkdGhMaW1pdFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignb3Bwb3NpdGVSZWdpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5vcHBvc2l0ZVJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdvcHBvc2l0ZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm9wcG9zaXRlUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoTGltaXQnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuYmFuZHdpZHRoTGltaXQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmJhbmR3aWR0aExpbWl0ICYmICh0eXBlb2YgcHJvcGVydGllcy5iYW5kd2lkdGhMaW1pdCkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoTGltaXQnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5iYW5kd2lkdGhMaW1pdCxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogdW5kZWZpbmVkLFxuICAgICAgICAgIH0pKTtcbiAgICB9XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGhMaW1pdCcsIHJvcy52YWxpZGF0ZU51bWJlcikocHJvcGVydGllcy5iYW5kd2lkdGhMaW1pdCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignbG9jYWxSZWdpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5sb2NhbFJlZ2lvbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdsb2NhbFJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmxvY2FsUmVnaW9uSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhMaW1pdGAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhMaW1pdGAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDZW5CYW5kd2lkdGhMaW1pdFByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBCYW5kd2lkdGhMaW1pdDogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYW5kd2lkdGhMaW1pdCksXG4gICAgICBDZW5JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZW5JZCksXG4gICAgICBMb2NhbFJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmxvY2FsUmVnaW9uSWQpLFxuICAgICAgT3Bwb3NpdGVSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5vcHBvc2l0ZVJlZ2lvbklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aExpbWl0YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ2VuQmFuZHdpZHRoTGltaXQgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNFTjo6Q2VuQmFuZHdpZHRoTGltaXRcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoTGltaXQ6IFRoZSBiYW5kd2lkdGggY29uZmlndXJlZCBmb3IgdGhlIGludGVyY29ubmVjdGVkIHJlZ2lvbnMgY29tbXVuaWNhdGlvbi4gTWluaW1hbCB2YWx1ZTogMVxuICAgICAqL1xuICAgIHB1YmxpYyBiYW5kd2lkdGhMaW1pdDogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbklkOiBUaGUgSUQgb2YgdGhlIENFTiBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VuSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBsb2NhbFJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIGxvY2FsIHJlZ2lvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgbG9jYWxSZWdpb25JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG9wcG9zaXRlUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgb3RoZXIgaW50ZXJjb25uZWN0ZWQgcmVnaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyBvcHBvc2l0ZVJlZ2lvbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhMaW1pdGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBAcGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogQHBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NlbkJhbmR3aWR0aExpbWl0LlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5iYW5kd2lkdGhMaW1pdCA9IHByb3BzLmJhbmR3aWR0aExpbWl0O1xuICAgICAgICB0aGlzLmNlbklkID0gcHJvcHMuY2VuSWQ7XG4gICAgICAgIHRoaXMubG9jYWxSZWdpb25JZCA9IHByb3BzLmxvY2FsUmVnaW9uSWQ7XG4gICAgICAgIHRoaXMub3Bwb3NpdGVSZWdpb25JZCA9IHByb3BzLm9wcG9zaXRlUmVnaW9uSWQ7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFuZHdpZHRoTGltaXQ6IHRoaXMuYmFuZHdpZHRoTGltaXQsXG4gICAgICAgICAgICBjZW5JZDogdGhpcy5jZW5JZCxcbiAgICAgICAgICAgIGxvY2FsUmVnaW9uSWQ6IHRoaXMubG9jYWxSZWdpb25JZCxcbiAgICAgICAgICAgIG9wcG9zaXRlUmVnaW9uSWQ6IHRoaXMub3Bwb3NpdGVSZWdpb25JZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuQmFuZHdpZHRoTGltaXRQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNFTjo6Q2VuQmFuZHdpZHRoUGFja2FnZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBpbiBNYnBzIG9mIHRoZSBiYW5kd2lkdGggcGFja2FnZS4gVGhlIGJhbmR3aWR0aCBjYW5ub3QgYmUgbGVzcyB0aGFuIDIgTWJwcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGg6IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBnZW9ncmFwaGljUmVnaW9uQUlkOiBUaGUgb3RoZXIgYXJlYSBBIHRvIGNvbm5lY3QuXG4gICAgICogVmFsaWQgdmFsdWU6IENoaW5hIHwgTm9ydGgtQW1lcmljYSB8IEFzaWEtUGFjaWZpYyB8IEV1cm9wZSB8IEF1c3RyYWxpYVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdlb2dyYXBoaWNSZWdpb25BSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBnZW9ncmFwaGljUmVnaW9uQklkOiBUaGUgb3RoZXIgYXJlYSBCIHRvIGNvbm5lY3QuXG4gICAgICogVmFsaWQgdmFsdWU6IENoaW5hIHwgTm9ydGgtQW1lcmljYSB8IEFzaWEtUGFjaWZpYyB8IEV1cm9wZSB8IEF1c3RyYWxpYVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdlb2dyYXBoaWNSZWdpb25CSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgcGF5IHRoZSBiaWxsLiBWYWxpZCB2YWx1ZTpcbiAgICAgKiB0cnVlXG4gICAgICogZmFsc2UgKERlZmF1bHQpXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1BheT86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1JlbmV3OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcmVuZXdhbCBpcyBlbmFibGVkLiBWYWxpZCB2YWx1ZXM6dHJ1ZTogQXV0b21hdGljIHJlbmV3YWwgaXMgZW5hYmxlZC5mYWxzZTogQXV0b21hdGljIHJlbmV3YWwgaXMgbm90IGVuYWJsZWQuIFlvdSBtdXN0IHJlbmV3IHRoZSBpbnN0YW5jZSBtYW51YWxseS5EZWZhdWx0IHZhbHVlOiBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXc/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ld0R1cmF0aW9uOiBEdXJhdGlvbiBvZiBlYWNoIGF1dG9tYXRpYyByZW5ld2Fscy4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gQXV0b1JlbmV3IGlzIHRydWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3RHVyYXRpb24/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoUGFja2FnZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZC4gVmFsaWQgdmFsdWU6IFBSRVBBWSwgUE9TVFBBWSAoRGVmYXVsdClcbiAgICAgKi9cbiAgICByZWFkb25seSBiYW5kd2lkdGhQYWNrYWdlQ2hhcmdlVHlwZT86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBiYW5kd2lkdGggcGFja2FnZS5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2FuIGNvbnRhaW4gWzIsMjU2XSBjaGFyYWN0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcywgYW5kIGh5cGhlbnMsIGFuZCB0aGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggRW5nbGlzaCBsZXR0ZXJzLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmlwdGlvbj86IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gMi0xMjggY2hhcmFjdGVycyBpbmNsdWRpbmcgYS16LCBBLVosIDAtOSwgcGVyaW9kcywgdW5kZXJsaW5lcywgYW5kIGh5cGhlbnMuIEl0IG11c3Qgc3RhcnQgd2l0aCBFbmdsaXNoIGxldHRlcnMsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hbWU/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBUaGUgcHVyY2hhc2UgcGVyaW9kLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IG51bWJlcjtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFRoZSBwcmljaW5nIGN5Y2xlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHByaWNpbmdDeWNsZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdkZXNjcmlwdGlvbicsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5kZXNjcmlwdGlvbikpO1xuICAgIGlmKHByb3BlcnRpZXMuYmFuZHdpZHRoUGFja2FnZUNoYXJnZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGhQYWNrYWdlQ2hhcmdlVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlBSRVBBWVwiLFwiUE9TVFBBWVwiXSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnZW9ncmFwaGljUmVnaW9uQklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25CSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25CSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25CSWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dlb2dyYXBoaWNSZWdpb25CSWQnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5nZW9ncmFwaGljUmVnaW9uQklkLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkNoaW5hXCIsXCJOb3J0aC1BbWVyaWNhXCIsXCJBc2lhLVBhY2lmaWNcIixcIkV1cm9wZVwiLFwiQXVzdHJhbGlhXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ2VvZ3JhcGhpY1JlZ2lvbkJJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5nZW9ncmFwaGljUmVnaW9uQklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdnZW9ncmFwaGljUmVnaW9uQUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25BSWQpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25BSWQgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25BSWQpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2dlb2dyYXBoaWNSZWdpb25BSWQnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5nZW9ncmFwaGljUmVnaW9uQUlkLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIkNoaW5hXCIsXCJOb3J0aC1BbWVyaWNhXCIsXCJBc2lhLVBhY2lmaWNcIixcIkV1cm9wZVwiLFwiQXVzdHJhbGlhXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZ2VvZ3JhcGhpY1JlZ2lvbkFJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5nZW9ncmFwaGljUmVnaW9uQUlkKSk7XG4gICAgaWYocHJvcGVydGllcy5wcmljaW5nQ3ljbGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpY2luZ0N5Y2xlJywgcm9zLnZhbGlkYXRlQWxsb3dlZFZhbHVlcykoe1xuICAgICAgICAgIGRhdGE6IHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIk1vbnRoXCIsXCJZZWFyXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncHJpY2luZ0N5Y2xlJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLnByaWNpbmdDeWNsZSkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0b1JlbmV3Jywgcm9zLnZhbGlkYXRlQm9vbGVhbikocHJvcGVydGllcy5hdXRvUmVuZXcpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2JhbmR3aWR0aCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5iYW5kd2lkdGgpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmJhbmR3aWR0aCAmJiAodHlwZW9mIHByb3BlcnRpZXMuYmFuZHdpZHRoKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdiYW5kd2lkdGgnLCByb3MudmFsaWRhdGVSYW5nZSkoe1xuICAgICAgICAgICAgZGF0YTogcHJvcGVydGllcy5iYW5kd2lkdGgsXG4gICAgICAgICAgICBtaW46IDIsXG4gICAgICAgICAgICBtYXg6IHVuZGVmaW5lZCxcbiAgICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYmFuZHdpZHRoJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmJhbmR3aWR0aCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcigncGVyaW9kJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLnBlcmlvZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignYXV0b1BheScsIHJvcy52YWxpZGF0ZUJvb2xlYW4pKHByb3BlcnRpZXMuYXV0b1BheSkpO1xuICAgIGlmKHByb3BlcnRpZXMuYXV0b1JlbmV3RHVyYXRpb24gJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmF1dG9SZW5ld0R1cmF0aW9uKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdhdXRvUmVuZXdEdXJhdGlvbicsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmF1dG9SZW5ld0R1cmF0aW9uLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFsxLDIsMyw2XSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2F1dG9SZW5ld0R1cmF0aW9uJywgcm9zLnZhbGlkYXRlTnVtYmVyKShwcm9wZXJ0aWVzLmF1dG9SZW5ld0R1cmF0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuQmFuZHdpZHRoUGFja2FnZVByb3BzXCInKTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VgIHJlc291cmNlXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlYCByZXNvdXJjZS5cbiAqL1xuLy8gQHRzLWlnbm9yZSBUUzYxMzNcbmZ1bmN0aW9uIHJvc0NlbkJhbmR3aWR0aFBhY2thZ2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcGVydGllczogYW55LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbik6IGFueSB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcHJvcGVydGllczsgfVxuICAgIGlmKGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KSB7XG4gICAgICAgIFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBCYW5kd2lkdGg6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYmFuZHdpZHRoKSxcbiAgICAgIEdlb2dyYXBoaWNSZWdpb25BSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZ2VvZ3JhcGhpY1JlZ2lvbkFJZCksXG4gICAgICBHZW9ncmFwaGljUmVnaW9uQklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmdlb2dyYXBoaWNSZWdpb25CSWQpLFxuICAgICAgQXV0b1BheTogcm9zLmJvb2xlYW5Ub1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuYXV0b1BheSksXG4gICAgICBBdXRvUmVuZXc6IHJvcy5ib29sZWFuVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmF1dG9SZW5ldyksXG4gICAgICBBdXRvUmVuZXdEdXJhdGlvbjogcm9zLm51bWJlclRvUm9zVGVtcGxhdGUocHJvcGVydGllcy5hdXRvUmVuZXdEdXJhdGlvbiksXG4gICAgICBCYW5kd2lkdGhQYWNrYWdlQ2hhcmdlVHlwZTogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5iYW5kd2lkdGhQYWNrYWdlQ2hhcmdlVHlwZSksXG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgICAgUGVyaW9kOiByb3MubnVtYmVyVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLnBlcmlvZCksXG4gICAgICBQcmljaW5nQ3ljbGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMucHJpY2luZ0N5Y2xlKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlIGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VcIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQEF0dHJpYnV0ZSBDZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IFRoZSBJRCBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IGFueTtcblxuICAgIHB1YmxpYyBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGJhbmR3aWR0aDogVGhlIGJhbmR3aWR0aCBpbiBNYnBzIG9mIHRoZSBiYW5kd2lkdGggcGFja2FnZS4gVGhlIGJhbmR3aWR0aCBjYW5ub3QgYmUgbGVzcyB0aGFuIDIgTWJwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgYmFuZHdpZHRoOiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZ2VvZ3JhcGhpY1JlZ2lvbkFJZDogVGhlIG90aGVyIGFyZWEgQSB0byBjb25uZWN0LlxuICAgICAqIFZhbGlkIHZhbHVlOiBDaGluYSB8IE5vcnRoLUFtZXJpY2EgfCBBc2lhLVBhY2lmaWMgfCBFdXJvcGUgfCBBdXN0cmFsaWFcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2VvZ3JhcGhpY1JlZ2lvbkFJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGdlb2dyYXBoaWNSZWdpb25CSWQ6IFRoZSBvdGhlciBhcmVhIEIgdG8gY29ubmVjdC5cbiAgICAgKiBWYWxpZCB2YWx1ZTogQ2hpbmEgfCBOb3J0aC1BbWVyaWNhIHwgQXNpYS1QYWNpZmljIHwgRXVyb3BlIHwgQXVzdHJhbGlhXG4gICAgICovXG4gICAgcHVibGljIGdlb2dyYXBoaWNSZWdpb25CSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBhdXRvUGF5OiBXaGV0aGVyIHRvIGF1dG9tYXRpY2FsbHkgcGF5IHRoZSBiaWxsLiBWYWxpZCB2YWx1ZTpcbiAgICAgKiB0cnVlXG4gICAgICogZmFsc2UgKERlZmF1bHQpXG4gICAgICovXG4gICAgcHVibGljIGF1dG9QYXk6IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGUgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYXV0b1JlbmV3OiBJbmRpY2F0ZXMgd2hldGhlciBhdXRvbWF0aWMgcmVuZXdhbCBpcyBlbmFibGVkLiBWYWxpZCB2YWx1ZXM6dHJ1ZTogQXV0b21hdGljIHJlbmV3YWwgaXMgZW5hYmxlZC5mYWxzZTogQXV0b21hdGljIHJlbmV3YWwgaXMgbm90IGVuYWJsZWQuIFlvdSBtdXN0IHJlbmV3IHRoZSBpbnN0YW5jZSBtYW51YWxseS5EZWZhdWx0IHZhbHVlOiBmYWxzZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0b1JlbmV3OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGF1dG9SZW5ld0R1cmF0aW9uOiBEdXJhdGlvbiBvZiBlYWNoIGF1dG9tYXRpYyByZW5ld2Fscy4gSXQgdGFrZXMgZWZmZWN0IHdoZW4gQXV0b1JlbmV3IGlzIHRydWUuXG4gICAgICovXG4gICAgcHVibGljIGF1dG9SZW5ld0R1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgYmFuZHdpZHRoUGFja2FnZUNoYXJnZVR5cGU6IFRoZSBiaWxsaW5nIG1ldGhvZC4gVmFsaWQgdmFsdWU6IFBSRVBBWSwgUE9TVFBBWSAoRGVmYXVsdClcbiAgICAgKi9cbiAgICBwdWJsaWMgYmFuZHdpZHRoUGFja2FnZUNoYXJnZVR5cGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBiYW5kd2lkdGggcGFja2FnZS5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gY2FuIGNvbnRhaW4gWzIsMjU2XSBjaGFyYWN0ZXJzLCBudW1iZXJzLCB1bmRlcnNjb3JlcywgYW5kIGh5cGhlbnMsIGFuZCB0aGUgbmFtZSBtdXN0IHN0YXJ0IHdpdGggRW5nbGlzaCBsZXR0ZXJzLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgYmFuZHdpZHRoIHBhY2thZ2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGNvbnRhaW4gMi0xMjggY2hhcmFjdGVycyBpbmNsdWRpbmcgYS16LCBBLVosIDAtOSwgcGVyaW9kcywgdW5kZXJsaW5lcywgYW5kIGh5cGhlbnMuIEl0IG11c3Qgc3RhcnQgd2l0aCBFbmdsaXNoIGxldHRlcnMsIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgcGVyaW9kOiBUaGUgcHVyY2hhc2UgcGVyaW9kLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAxLlxuICAgICAqL1xuICAgIHB1YmxpYyBwZXJpb2Q6IG51bWJlciB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBwcmljaW5nQ3ljbGU6IFRoZSBwcmljaW5nIGN5Y2xlLlxuICAgICAqL1xuICAgIHB1YmxpYyBwcmljaW5nQ3ljbGU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0NlbkJhbmR3aWR0aFBhY2thZ2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNlbkJhbmR3aWR0aFBhY2thZ2VJZCA9IHJvcy5Ub2tlbi5hc1N0cmluZyh0aGlzLmdldEF0dCgnQ2VuQmFuZHdpZHRoUGFja2FnZUlkJykpO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5iYW5kd2lkdGggPSBwcm9wcy5iYW5kd2lkdGg7XG4gICAgICAgIHRoaXMuZ2VvZ3JhcGhpY1JlZ2lvbkFJZCA9IHByb3BzLmdlb2dyYXBoaWNSZWdpb25BSWQ7XG4gICAgICAgIHRoaXMuZ2VvZ3JhcGhpY1JlZ2lvbkJJZCA9IHByb3BzLmdlb2dyYXBoaWNSZWdpb25CSWQ7XG4gICAgICAgIHRoaXMuYXV0b1BheSA9IHByb3BzLmF1dG9QYXk7XG4gICAgICAgIHRoaXMuYXV0b1JlbmV3ID0gcHJvcHMuYXV0b1JlbmV3O1xuICAgICAgICB0aGlzLmF1dG9SZW5ld0R1cmF0aW9uID0gcHJvcHMuYXV0b1JlbmV3RHVyYXRpb247XG4gICAgICAgIHRoaXMuYmFuZHdpZHRoUGFja2FnZUNoYXJnZVR5cGUgPSBwcm9wcy5iYW5kd2lkdGhQYWNrYWdlQ2hhcmdlVHlwZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLm5hbWUgPSBwcm9wcy5uYW1lO1xuICAgICAgICB0aGlzLnBlcmlvZCA9IHByb3BzLnBlcmlvZDtcbiAgICAgICAgdGhpcy5wcmljaW5nQ3ljbGUgPSBwcm9wcy5wcmljaW5nQ3ljbGU7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFuZHdpZHRoOiB0aGlzLmJhbmR3aWR0aCxcbiAgICAgICAgICAgIGdlb2dyYXBoaWNSZWdpb25BSWQ6IHRoaXMuZ2VvZ3JhcGhpY1JlZ2lvbkFJZCxcbiAgICAgICAgICAgIGdlb2dyYXBoaWNSZWdpb25CSWQ6IHRoaXMuZ2VvZ3JhcGhpY1JlZ2lvbkJJZCxcbiAgICAgICAgICAgIGF1dG9QYXk6IHRoaXMuYXV0b1BheSxcbiAgICAgICAgICAgIGF1dG9SZW5ldzogdGhpcy5hdXRvUmVuZXcsXG4gICAgICAgICAgICBhdXRvUmVuZXdEdXJhdGlvbjogdGhpcy5hdXRvUmVuZXdEdXJhdGlvbixcbiAgICAgICAgICAgIGJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlOiB0aGlzLmJhbmR3aWR0aFBhY2thZ2VDaGFyZ2VUeXBlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICBwZXJpb2Q6IHRoaXMucGVyaW9kLFxuICAgICAgICAgICAgcHJpY2luZ0N5Y2xlOiB0aGlzLnByaWNpbmdDeWNsZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuQmFuZHdpZHRoUGFja2FnZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25gXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNlbkJhbmR3aWR0aFBhY2thZ2VJZDogVGhlIElEIG9mIHRoZSBiYW5kd2lkdGggcGFja2FnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uUHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2VuSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2VuSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbkJhbmR3aWR0aFBhY2thZ2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jZW5CYW5kd2lkdGhQYWNrYWdlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbkJhbmR3aWR0aFBhY2thZ2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5CYW5kd2lkdGhQYWNrYWdlSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uUHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNFTjo6Q2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uYCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25Qcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25gIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uUHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25Qcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2VuQmFuZHdpZHRoUGFja2FnZUlkKSxcbiAgICAgIENlbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlbklkKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIEEgUk9TIHRlbXBsYXRlIHR5cGU6ICBgQUxJWVVOOjpDRU46OkNlbkJhbmR3aWR0aFBhY2thZ2VBc3NvY2lhdGlvbmBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VBc3NvY2lhdGlvbiBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25cIjtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2VuQmFuZHdpZHRoUGFja2FnZUlkOiBUaGUgSUQgb2YgdGhlIGJhbmR3aWR0aCBwYWNrYWdlLlxuICAgICAqL1xuICAgIHB1YmxpYyBjZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGNlbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q0VOOjpDZW5CYW5kd2lkdGhQYWNrYWdlQXNzb2NpYXRpb25gLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc0NlbkJhbmR3aWR0aFBhY2thZ2VBc3NvY2lhdGlvblByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2VuQmFuZHdpZHRoUGFja2FnZUFzc29jaWF0aW9uLlJPU19SRVNPVVJDRV9UWVBFX05BTUUsIHByb3BlcnRpZXM6IHByb3BzIH0pO1xuXG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcbiAgICAgICAgdGhpcy5jZW5CYW5kd2lkdGhQYWNrYWdlSWQgPSBwcm9wcy5jZW5CYW5kd2lkdGhQYWNrYWdlSWQ7XG4gICAgICAgIHRoaXMuY2VuSWQgPSBwcm9wcy5jZW5JZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW5CYW5kd2lkdGhQYWNrYWdlSWQ6IHRoaXMuY2VuQmFuZHdpZHRoUGFja2FnZUlkLFxuICAgICAgICAgICAgY2VuSWQ6IHRoaXMuY2VuSWQsXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc0NlbkJhbmR3aWR0aFBhY2thZ2VBc3NvY2lhdGlvblByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wcywgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q0VOOjpDZW5JbnN0YW5jZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSb3NDZW5JbnN0YW5jZVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgMi0yNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IGNhbiBzdGFydCB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIsIGxvd2VyY2FzZSBsZXR0ZXIsIG9yIENoaW5lc2UgY2hhcmFjdGVyLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKSwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgbmFtZTogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqIFRoZSBuYW1lIGNhbiBiZSAyLTEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aC4gSXQgY2FuIHN0YXJ0IHdpdGggYW4gdXBwZXJjYXNlIGxldHRlciwgbG93ZXJjYXNlIGxldHRlciwgb3IgQ2hpbmVzZSBjaGFyYWN0ZXIuIEl0IGNhbiBjb250YWluIG51bWJlcnMsIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLCBidXQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBnaXZlbiBwcm9wZXJ0aWVzIG1hdGNoIHRob3NlIG9mIGEgYFJvc0Nlbkluc3RhbmNlUHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Nlbkluc3RhbmNlUHJvcHNgXG4gKlxuICogQHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgdmFsaWRhdGlvbi5cbiAqL1xuZnVuY3Rpb24gUm9zQ2VuSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzOiBhbnkpOiByb3MuVmFsaWRhdGlvblJlc3VsdCB7XG4gICAgaWYgKCFyb3MuY2FuSW5zcGVjdChwcm9wZXJ0aWVzKSkgeyByZXR1cm4gcm9zLlZBTElEQVRJT05fU1VDQ0VTUzsgfVxuICAgIGNvbnN0IGVycm9ycyA9IG5ldyByb3MuVmFsaWRhdGlvblJlc3VsdHMoKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc2NyaXB0aW9uJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc2NyaXB0aW9uKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCduYW1lJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLm5hbWUpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuSW5zdGFuY2VQcm9wc1wiJyk7XG59XG5cbi8qKlxuICogUmVuZGVycyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5JbnN0YW5jZWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zQ2VuSW5zdGFuY2VQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5JbnN0YW5jZWAgcmVzb3VyY2UuXG4gKi9cbi8vIEB0cy1pZ25vcmUgVFM2MTMzXG5mdW5jdGlvbiByb3NDZW5JbnN0YW5jZVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zQ2VuSW5zdGFuY2VQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBEZXNjcmlwdGlvbjogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5kZXNjcmlwdGlvbiksXG4gICAgICBOYW1lOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLm5hbWUpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNFTjo6Q2VuSW5zdGFuY2VgXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3NDZW5JbnN0YW5jZSBleHRlbmRzIHJvcy5Sb3NSZXNvdXJjZSB7XG4gICAgLyoqXG4gICAgICogVGhlIHJlc291cmNlIHR5cGUgbmFtZSBmb3IgdGhpcyByZXNvdXJjZSBjbGFzcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFJPU19SRVNPVVJDRV9UWVBFX05BTUUgPSBcIkFMSVlVTjo6Q0VOOjpDZW5JbnN0YW5jZVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBAQXR0cmlidXRlIENlbklkOiBUaGUgSUQgb2YgdGhlIHJlcXVlc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDZW5JZDogYW55O1xuXG4gICAgcHVibGljIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICogVGhlIG5hbWUgY2FuIGJlIDItMjU2IGNoYXJhY3RlcnMgaW4gbGVuZ3RoLiBJdCBjYW4gc3RhcnQgd2l0aCBhbiB1cHBlcmNhc2UgbGV0dGVyLCBsb3dlcmNhc2UgbGV0dGVyLCBvciBDaGluZXNlIGNoYXJhY3Rlci4gSXQgY2FuIGNvbnRhaW4gbnVtYmVycywgdW5kZXJzY29yZXMgKF8pLCBhbmQgaHlwaGVucyAoLSksIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOi8vIG9yIGh0dHBzOi8vLlxuICAgICAqL1xuICAgIHB1YmxpYyBkZXNjcmlwdGlvbjogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKiBUaGUgbmFtZSBjYW4gYmUgMi0xMjggY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IGNhbiBzdGFydCB3aXRoIGFuIHVwcGVyY2FzZSBsZXR0ZXIsIGxvd2VyY2FzZSBsZXR0ZXIsIG9yIENoaW5lc2UgY2hhcmFjdGVyLiBJdCBjYW4gY29udGFpbiBudW1iZXJzLCB1bmRlcnNjb3JlcyAoXyksIGFuZCBoeXBoZW5zICgtKSwgYnV0IGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6Ly8gb3IgaHR0cHM6Ly8uXG4gICAgICovXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDRU46OkNlbkluc3RhbmNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDZW5JbnN0YW5jZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbikge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQsIHsgdHlwZTogUm9zQ2VuSW5zdGFuY2UuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG4gICAgICAgIHRoaXMuYXR0ckNlbklkID0gcm9zLlRva2VuLmFzU3RyaW5nKHRoaXMuZ2V0QXR0KCdDZW5JZCcpKTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBwcm9wcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcHMubmFtZTtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuSW5zdGFuY2VQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNFTjo6Q2VuSW5zdGFuY2VBdHRhY2htZW50YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvc0Nlbkluc3RhbmNlQXR0YWNobWVudFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2VuSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGlsZEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgbmV0d29yayB0byBhdHRhY2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hpbGRJbnN0YW5jZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hpbGRJbnN0YW5jZVJlZ2lvbklkOiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgbmV0d29yayBpcyBsb2NhdGVkLiBUaGUgSUQgb2YgdGhlIHJlZ2lvbiB3aGVyZSB0aGUgbmV0d29yayBpcyBsb2NhdGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoaWxkSW5zdGFuY2VSZWdpb25JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoaWxkSW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yayB0byBhdHRhY2guIFN1cHBvcnQgVlBDLCBWQlIgb3IgQ0NOLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoaWxkSW5zdGFuY2VUeXBlOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hpbGRJbnN0YW5jZU93bmVySWQ6IFRoZSBhY2NvdW50IElEIHRvIHdoaWNoIHRoZSBuZXR3b3JrIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hpbGRJbnN0YW5jZU93bmVySWQ/OiBudW1iZXI7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIGdpdmVuIHByb3BlcnRpZXMgbWF0Y2ggdGhvc2Ugb2YgYSBgUm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc0Nlbkluc3RhbmNlQXR0YWNobWVudFByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSByZXN1bHQgb2YgdGhlIHZhbGlkYXRpb24uXG4gKi9cbmZ1bmN0aW9uIFJvc0Nlbkluc3RhbmNlQXR0YWNobWVudFByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXM6IGFueSk6IHJvcy5WYWxpZGF0aW9uUmVzdWx0IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiByb3MuVkFMSURBVElPTl9TVUNDRVNTOyB9XG4gICAgY29uc3QgZXJyb3JzID0gbmV3IHJvcy5WYWxpZGF0aW9uUmVzdWx0cygpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZVR5cGUnLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVR5cGUpKTtcbiAgICBpZihwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VUeXBlICYmICh0eXBlb2YgcHJvcGVydGllcy5jaGlsZEluc3RhbmNlVHlwZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVBbGxvd2VkVmFsdWVzKSh7XG4gICAgICAgICAgZGF0YTogcHJvcGVydGllcy5jaGlsZEluc3RhbmNlVHlwZSxcbiAgICAgICAgICBhbGxvd2VkVmFsdWVzOiBbXCJWUENcIixcIlZCUlwiLFwiQ0NOXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZU93bmVySWQnLCByb3MudmFsaWRhdGVOdW1iZXIpKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZU93bmVySWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoaWxkSW5zdGFuY2VJZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jaGlsZEluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoaWxkSW5zdGFuY2VJZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jaGlsZEluc3RhbmNlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoaWxkSW5zdGFuY2VSZWdpb25JZCcsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jaGlsZEluc3RhbmNlUmVnaW9uSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoaWxkSW5zdGFuY2VSZWdpb25JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jaGlsZEluc3RhbmNlUmVnaW9uSWQpKTtcbiAgICByZXR1cm4gZXJyb3JzLndyYXAoJ3N1cHBsaWVkIHByb3BlcnRpZXMgbm90IGNvcnJlY3QgZm9yIFwiUm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNFTjo6Q2VuSW5zdGFuY2VBdHRhY2htZW50YCByZXNvdXJjZVxuICpcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIC0gdGhlIFR5cGVTY3JpcHQgcHJvcGVydGllcyBvZiBhIGBSb3NDZW5JbnN0YW5jZUF0dGFjaG1lbnRQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIHByb3BlcnRpZXMgb2YgYW4gYEFMSVlVTjo6Q0VOOjpDZW5JbnN0YW5jZUF0dGFjaG1lbnRgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXM6IGFueSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pOiBhbnkge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHByb3BlcnRpZXM7IH1cbiAgICBpZihlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCkge1xuICAgICAgICBSb3NDZW5JbnN0YW5jZUF0dGFjaG1lbnRQcm9wc1ZhbGlkYXRvcihwcm9wZXJ0aWVzKS5hc3NlcnRTdWNjZXNzKCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBDZW5JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jZW5JZCksXG4gICAgICBDaGlsZEluc3RhbmNlSWQ6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZUlkKSxcbiAgICAgIENoaWxkSW5zdGFuY2VSZWdpb25JZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGlsZEluc3RhbmNlUmVnaW9uSWQpLFxuICAgICAgQ2hpbGRJbnN0YW5jZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVR5cGUpLFxuICAgICAgQ2hpbGRJbnN0YW5jZU93bmVySWQ6IHJvcy5udW1iZXJUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZU93bmVySWQpLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNFTjo6Q2VuSW5zdGFuY2VBdHRhY2htZW50YFxuICovXG5leHBvcnQgY2xhc3MgUm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50IGV4dGVuZHMgcm9zLlJvc1Jlc291cmNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgcmVzb3VyY2UgdHlwZSBuYW1lIGZvciB0aGlzIHJlc291cmNlIGNsYXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUk9TX1JFU09VUkNFX1RZUEVfTkFNRSA9IFwiQUxJWVVOOjpDRU46OkNlbkluc3RhbmNlQXR0YWNobWVudFwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIGNlbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hpbGRJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIG5ldHdvcmsgdG8gYXR0YWNoLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlsZEluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGlsZEluc3RhbmNlUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSBuZXR3b3JrIGlzIGxvY2F0ZWQuIFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSBuZXR3b3JrIGlzIGxvY2F0ZWQuXG4gICAgICovXG4gICAgcHVibGljIGNoaWxkSW5zdGFuY2VSZWdpb25JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoaWxkSW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgbmV0d29yayB0byBhdHRhY2guIFN1cHBvcnQgVlBDLCBWQlIgb3IgQ0NOLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlsZEluc3RhbmNlVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoaWxkSW5zdGFuY2VPd25lcklkOiBUaGUgYWNjb3VudCBJRCB0byB3aGljaCB0aGUgbmV0d29yayBiZWxvbmdzLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlsZEluc3RhbmNlT3duZXJJZDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNFTjo6Q2VuSW5zdGFuY2VBdHRhY2htZW50YC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIEBwYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBAcGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSb3NDZW5JbnN0YW5jZUF0dGFjaG1lbnRQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc0Nlbkluc3RhbmNlQXR0YWNobWVudC5ST1NfUkVTT1VSQ0VfVFlQRV9OQU1FLCBwcm9wZXJ0aWVzOiBwcm9wcyB9KTtcblxuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG4gICAgICAgIHRoaXMuY2VuSWQgPSBwcm9wcy5jZW5JZDtcbiAgICAgICAgdGhpcy5jaGlsZEluc3RhbmNlSWQgPSBwcm9wcy5jaGlsZEluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuY2hpbGRJbnN0YW5jZVJlZ2lvbklkID0gcHJvcHMuY2hpbGRJbnN0YW5jZVJlZ2lvbklkO1xuICAgICAgICB0aGlzLmNoaWxkSW5zdGFuY2VUeXBlID0gcHJvcHMuY2hpbGRJbnN0YW5jZVR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGRJbnN0YW5jZU93bmVySWQgPSBwcm9wcy5jaGlsZEluc3RhbmNlT3duZXJJZDtcbiAgICB9XG5cblxuICAgIHByb3RlY3RlZCBnZXQgcm9zUHJvcGVydGllcygpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ICB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjZW5JZDogdGhpcy5jZW5JZCxcbiAgICAgICAgICAgIGNoaWxkSW5zdGFuY2VJZDogdGhpcy5jaGlsZEluc3RhbmNlSWQsXG4gICAgICAgICAgICBjaGlsZEluc3RhbmNlUmVnaW9uSWQ6IHRoaXMuY2hpbGRJbnN0YW5jZVJlZ2lvbklkLFxuICAgICAgICAgICAgY2hpbGRJbnN0YW5jZVR5cGU6IHRoaXMuY2hpbGRJbnN0YW5jZVR5cGUsXG4gICAgICAgICAgICBjaGlsZEluc3RhbmNlT3duZXJJZDogdGhpcy5jaGlsZEluc3RhbmNlT3duZXJJZCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbmRlclByb3BlcnRpZXMocHJvcHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4gcm9zQ2VuSW5zdGFuY2VBdHRhY2htZW50UHJvcHNUb1Jvc1RlbXBsYXRlKHByb3BzLCB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICB9XG59XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRU46OlJvdXRlRW50cnlgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUm9zUm91dGVFbnRyeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2Ugd2hlcmUgdGhlIHJvdXRlIGVudHJ5IGlzIHB1Ymxpc2hlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjZW5JZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoaWxkSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBhdHRhY2hlZCBuZXR3b3JrIChWUEMgb3IgVkJSKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjaGlsZEluc3RhbmNlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGlsZEluc3RhbmNlUmVnaW9uSWQ6IFRoZSBJRCBvZiB0aGUgcmVnaW9uIHdoZXJlIHRoZSBhdHRhY2hlZCBWQlIgb3IgVlBDIGlzIGxvY2F0ZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hpbGRJbnN0YW5jZVJlZ2lvbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hpbGRJbnN0YW5jZVJvdXRlVGFibGVJZDogVGhlIHJvdXRlIHRhYmxlIG9mIHRoZSBhdHRhY2hlZCBWQlIgb3IgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNoaWxkSW5zdGFuY2VSb3V0ZVRhYmxlSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGlsZEluc3RhbmNlVHlwZTogVGhlIHR5cGUgb2YgdGhlIG5ldHdvcmssIHZhbHVlOiBWUEMgVkJSXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2hpbGRJbnN0YW5jZVR5cGU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBkZXN0aW5hdGlvbkNpZHJCbG9jazogVGhlIGRlc3RpbmF0aW9uIENJRFIgYmxvY2sgb2YgdGhlIHJvdXRlIGVudHJ5IHRvIHB1Ymxpc2guXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzdGluYXRpb25DaWRyQmxvY2s6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgZ2l2ZW4gcHJvcGVydGllcyBtYXRjaCB0aG9zZSBvZiBhIGBSb3NSb3V0ZUVudHJ5UHJvcHNgXG4gKlxuICogQHBhcmFtIHByb3BlcnRpZXMgLSB0aGUgVHlwZVNjcmlwdCBwcm9wZXJ0aWVzIG9mIGEgYFJvc1JvdXRlRW50cnlQcm9wc2BcbiAqXG4gKiBAcmV0dXJucyB0aGUgcmVzdWx0IG9mIHRoZSB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBSb3NSb3V0ZUVudHJ5UHJvcHNWYWxpZGF0b3IocHJvcGVydGllczogYW55KTogcm9zLlZhbGlkYXRpb25SZXN1bHQge1xuICAgIGlmICghcm9zLmNhbkluc3BlY3QocHJvcGVydGllcykpIHsgcmV0dXJuIHJvcy5WQUxJREFUSU9OX1NVQ0NFU1M7IH1cbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgcm9zLlZhbGlkYXRpb25SZXN1bHRzKCk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGlsZEluc3RhbmNlVHlwZScsIHJvcy5yZXF1aXJlZFZhbGlkYXRvcikocHJvcGVydGllcy5jaGlsZEluc3RhbmNlVHlwZSkpO1xuICAgIGlmKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVR5cGUgJiYgKHR5cGVvZiBwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VUeXBlKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGlsZEluc3RhbmNlVHlwZScsIHJvcy52YWxpZGF0ZUFsbG93ZWRWYWx1ZXMpKHtcbiAgICAgICAgICBkYXRhOiBwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VUeXBlLFxuICAgICAgICAgIGFsbG93ZWRWYWx1ZXM6IFtcIlZQQ1wiLFwiVkJSXCJdLFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZVR5cGUnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVR5cGUpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NlbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNlbklkKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjZW5JZCcsIHJvcy52YWxpZGF0ZVN0cmluZykocHJvcGVydGllcy5jZW5JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignZGVzdGluYXRpb25DaWRyQmxvY2snLCByb3MucmVxdWlyZWRWYWxpZGF0b3IpKHByb3BlcnRpZXMuZGVzdGluYXRpb25DaWRyQmxvY2spKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2Rlc3RpbmF0aW9uQ2lkckJsb2NrJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmRlc3RpbmF0aW9uQ2lkckJsb2NrKSk7XG4gICAgZXJyb3JzLmNvbGxlY3Qocm9zLnByb3BlcnR5VmFsaWRhdG9yKCdjaGlsZEluc3RhbmNlUm91dGVUYWJsZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VSb3V0ZVRhYmxlSWQpKTtcbiAgICBlcnJvcnMuY29sbGVjdChyb3MucHJvcGVydHlWYWxpZGF0b3IoJ2NoaWxkSW5zdGFuY2VSb3V0ZVRhYmxlSWQnLCByb3MudmFsaWRhdGVTdHJpbmcpKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVJvdXRlVGFibGVJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZUlkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZUlkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VJZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZVJlZ2lvbklkJywgcm9zLnJlcXVpcmVkVmFsaWRhdG9yKShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VSZWdpb25JZCkpO1xuICAgIGVycm9ycy5jb2xsZWN0KHJvcy5wcm9wZXJ0eVZhbGlkYXRvcignY2hpbGRJbnN0YW5jZVJlZ2lvbklkJywgcm9zLnZhbGlkYXRlU3RyaW5nKShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VSZWdpb25JZCkpO1xuICAgIHJldHVybiBlcnJvcnMud3JhcCgnc3VwcGxpZWQgcHJvcGVydGllcyBub3QgY29ycmVjdCBmb3IgXCJSb3NSb3V0ZUVudHJ5UHJvcHNcIicpO1xufVxuXG4vKipcbiAqIFJlbmRlcnMgdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBwcm9wZXJ0aWVzIG9mIGFuIGBBTElZVU46OkNFTjo6Um91dGVFbnRyeWAgcmVzb3VyY2VcbiAqXG4gKiBAcGFyYW0gcHJvcGVydGllcyAtIHRoZSBUeXBlU2NyaXB0IHByb3BlcnRpZXMgb2YgYSBgUm9zUm91dGVFbnRyeVByb3BzYFxuICpcbiAqIEByZXR1cm5zIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgcHJvcGVydGllcyBvZiBhbiBgQUxJWVVOOjpDRU46OlJvdXRlRW50cnlgIHJlc291cmNlLlxuICovXG4vLyBAdHMtaWdub3JlIFRTNjEzM1xuZnVuY3Rpb24gcm9zUm91dGVFbnRyeVByb3BzVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzOiBhbnksIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuKTogYW55IHtcbiAgICBpZiAoIXJvcy5jYW5JbnNwZWN0KHByb3BlcnRpZXMpKSB7IHJldHVybiBwcm9wZXJ0aWVzOyB9XG4gICAgaWYoZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpIHtcbiAgICAgICAgUm9zUm91dGVFbnRyeVByb3BzVmFsaWRhdG9yKHByb3BlcnRpZXMpLmFzc2VydFN1Y2Nlc3MoKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIENlbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNlbklkKSxcbiAgICAgIENoaWxkSW5zdGFuY2VJZDogcm9zLnN0cmluZ1RvUm9zVGVtcGxhdGUocHJvcGVydGllcy5jaGlsZEluc3RhbmNlSWQpLFxuICAgICAgQ2hpbGRJbnN0YW5jZVJlZ2lvbklkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VSZWdpb25JZCksXG4gICAgICBDaGlsZEluc3RhbmNlUm91dGVUYWJsZUlkOiByb3Muc3RyaW5nVG9Sb3NUZW1wbGF0ZShwcm9wZXJ0aWVzLmNoaWxkSW5zdGFuY2VSb3V0ZVRhYmxlSWQpLFxuICAgICAgQ2hpbGRJbnN0YW5jZVR5cGU6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuY2hpbGRJbnN0YW5jZVR5cGUpLFxuICAgICAgRGVzdGluYXRpb25DaWRyQmxvY2s6IHJvcy5zdHJpbmdUb1Jvc1RlbXBsYXRlKHByb3BlcnRpZXMuZGVzdGluYXRpb25DaWRyQmxvY2spLFxuICAgIH07XG59XG5cbi8qKlxuICogQSBST1MgdGVtcGxhdGUgdHlwZTogIGBBTElZVU46OkNFTjo6Um91dGVFbnRyeWBcbiAqL1xuZXhwb3J0IGNsYXNzIFJvc1JvdXRlRW50cnkgZXh0ZW5kcyByb3MuUm9zUmVzb3VyY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSByZXNvdXJjZSB0eXBlIG5hbWUgZm9yIHRoaXMgcmVzb3VyY2UgY2xhc3MuXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBST1NfUkVTT1VSQ0VfVFlQRV9OQU1FID0gXCJBTElZVU46OkNFTjo6Um91dGVFbnRyeVwiO1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICBwdWJsaWMgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjZW5JZDogVGhlIElEIG9mIHRoZSBDRU4gaW5zdGFuY2Ugd2hlcmUgdGhlIHJvdXRlIGVudHJ5IGlzIHB1Ymxpc2hlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2VuSWQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBQcm9wZXJ0eSBjaGlsZEluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgYXR0YWNoZWQgbmV0d29yayAoVlBDIG9yIFZCUikuXG4gICAgICovXG4gICAgcHVibGljIGNoaWxkSW5zdGFuY2VJZDogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGNoaWxkSW5zdGFuY2VSZWdpb25JZDogVGhlIElEIG9mIHRoZSByZWdpb24gd2hlcmUgdGhlIGF0dGFjaGVkIFZCUiBvciBWUEMgaXMgbG9jYXRlZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgY2hpbGRJbnN0YW5jZVJlZ2lvbklkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hpbGRJbnN0YW5jZVJvdXRlVGFibGVJZDogVGhlIHJvdXRlIHRhYmxlIG9mIHRoZSBhdHRhY2hlZCBWQlIgb3IgVlBDLlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlsZEluc3RhbmNlUm91dGVUYWJsZUlkOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBAUHJvcGVydHkgY2hpbGRJbnN0YW5jZVR5cGU6IFRoZSB0eXBlIG9mIHRoZSBuZXR3b3JrLCB2YWx1ZTogVlBDIFZCUlxuICAgICAqL1xuICAgIHB1YmxpYyBjaGlsZEluc3RhbmNlVHlwZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQFByb3BlcnR5IGRlc3RpbmF0aW9uQ2lkckJsb2NrOiBUaGUgZGVzdGluYXRpb24gQ0lEUiBibG9jayBvZiB0aGUgcm91dGUgZW50cnkgdG8gcHVibGlzaC5cbiAgICAgKi9cbiAgICBwdWJsaWMgZGVzdGluYXRpb25DaWRyQmxvY2s6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDRU46OlJvdXRlRW50cnlgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogQHBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIEBwYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJvc1JvdXRlRW50cnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW4pIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7IHR5cGU6IFJvc1JvdXRlRW50cnkuUk9TX1JFU09VUkNFX1RZUEVfTkFNRSwgcHJvcGVydGllczogcHJvcHMgfSk7XG5cbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuICAgICAgICB0aGlzLmNlbklkID0gcHJvcHMuY2VuSWQ7XG4gICAgICAgIHRoaXMuY2hpbGRJbnN0YW5jZUlkID0gcHJvcHMuY2hpbGRJbnN0YW5jZUlkO1xuICAgICAgICB0aGlzLmNoaWxkSW5zdGFuY2VSZWdpb25JZCA9IHByb3BzLmNoaWxkSW5zdGFuY2VSZWdpb25JZDtcbiAgICAgICAgdGhpcy5jaGlsZEluc3RhbmNlUm91dGVUYWJsZUlkID0gcHJvcHMuY2hpbGRJbnN0YW5jZVJvdXRlVGFibGVJZDtcbiAgICAgICAgdGhpcy5jaGlsZEluc3RhbmNlVHlwZSA9IHByb3BzLmNoaWxkSW5zdGFuY2VUeXBlO1xuICAgICAgICB0aGlzLmRlc3RpbmF0aW9uQ2lkckJsb2NrID0gcHJvcHMuZGVzdGluYXRpb25DaWRyQmxvY2s7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgZ2V0IHJvc1Byb3BlcnRpZXMoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSAge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2VuSWQ6IHRoaXMuY2VuSWQsXG4gICAgICAgICAgICBjaGlsZEluc3RhbmNlSWQ6IHRoaXMuY2hpbGRJbnN0YW5jZUlkLFxuICAgICAgICAgICAgY2hpbGRJbnN0YW5jZVJlZ2lvbklkOiB0aGlzLmNoaWxkSW5zdGFuY2VSZWdpb25JZCxcbiAgICAgICAgICAgIGNoaWxkSW5zdGFuY2VSb3V0ZVRhYmxlSWQ6IHRoaXMuY2hpbGRJbnN0YW5jZVJvdXRlVGFibGVJZCxcbiAgICAgICAgICAgIGNoaWxkSW5zdGFuY2VUeXBlOiB0aGlzLmNoaWxkSW5zdGFuY2VUeXBlLFxuICAgICAgICAgICAgZGVzdGluYXRpb25DaWRyQmxvY2s6IHRoaXMuZGVzdGluYXRpb25DaWRyQmxvY2ssXG4gICAgICAgIH07XG4gICAgfVxuICAgIHByb3RlY3RlZCByZW5kZXJQcm9wZXJ0aWVzKHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gIHtcbiAgICAgICAgcmV0dXJuIHJvc1JvdXRlRW50cnlQcm9wc1RvUm9zVGVtcGxhdGUocHJvcHMsIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgIH1cbn1cbiJdfQ==