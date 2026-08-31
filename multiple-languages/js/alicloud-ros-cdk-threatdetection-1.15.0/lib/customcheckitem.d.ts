import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomCheckItem } from './threatdetection.generated';
export { RosCustomCheckItem as CustomCheckItemProperty };
/**
 * Properties for defining a `CustomCheckItem`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
export interface CustomCheckItemProps {
    /**
     * Property checkRule: Check Item Check Rules.
     */
    readonly checkRule: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
    /**
     * Property checkShowName: Check item display name.
     */
    readonly checkShowName: string | ros.IResolvable;
    /**
     * Property instanceSubType: Asset subtype to which the check item belongs.
     */
    readonly instanceSubType: string | ros.IResolvable;
    /**
     * Property instanceType: Asset type to which the check item belongs.
     */
    readonly instanceType: string | ros.IResolvable;
    /**
     * Property riskLevel: Risk level of inspection items.
     */
    readonly riskLevel: string | ros.IResolvable;
    /**
     * Property sectionIds: CHECK SECTION OF INSPECTIONS.
     */
    readonly sectionIds: Array<number | ros.IResolvable> | ros.IResolvable;
    /**
     * Property status: Check item status. Values:
     * EDIT: Editing in progress
     * RELEASE: Published
     */
    readonly status: string | ros.IResolvable;
    /**
     * Property vendor: Vendor to which the item belongs.
     */
    readonly vendor: string | ros.IResolvable;
    /**
     * Property assistInfo: Check Item Description Help Information.
     */
    readonly assistInfo?: RosCustomCheckItem.AssistInfoProperty | ros.IResolvable;
    /**
     * Property description: Check item description information.
     */
    readonly description?: RosCustomCheckItem.DescriptionProperty | ros.IResolvable;
    /**
     * Property remark: Remarks.
     */
    readonly remark?: string | ros.IResolvable;
    /**
     * Property solution: Check Item Solution.
     */
    readonly solution?: RosCustomCheckItem.SolutionProperty | ros.IResolvable;
}
/**
 * Represents a `CustomCheckItem`.
 */
export interface ICustomCheckItem extends ros.IResource {
    readonly props: CustomCheckItemProps;
    /**
     * Attribute AssistInfo: Check Item Description Help Information.
     */
    readonly attrAssistInfo: ros.IResolvable | string;
    /**
     * Attribute CheckId: The first ID of the resource.
     */
    readonly attrCheckId: ros.IResolvable | string;
    /**
     * Attribute CheckRule: Check Item Check Rules.
     */
    readonly attrCheckRule: ros.IResolvable | string;
    /**
     * Attribute CheckShowName: Check item display name.
     */
    readonly attrCheckShowName: ros.IResolvable | string;
    /**
     * Attribute Description: Check item description information.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute InstanceSubType: Asset subtype to which the check item belongs.
     */
    readonly attrInstanceSubType: ros.IResolvable | string;
    /**
     * Attribute InstanceType: Asset type to which the check item belongs.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute Remark: Remarks.
     */
    readonly attrRemark: ros.IResolvable | string;
    /**
     * Attribute RiskLevel: Risk level of inspection items.
     */
    readonly attrRiskLevel: ros.IResolvable | string;
    /**
     * Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
     */
    readonly attrSectionIds: ros.IResolvable | string;
    /**
     * Attribute Solution: Check Item Solution.
     */
    readonly attrSolution: ros.IResolvable | string;
    /**
     * Attribute Vendor: Vendor to which the item belongs.
     */
    readonly attrVendor: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::CustomCheckItem`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomCheckItem`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-customcheckitem
 */
export declare class CustomCheckItem extends ros.Resource implements ICustomCheckItem {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CustomCheckItemProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AssistInfo: Check Item Description Help Information.
     */
    readonly attrAssistInfo: ros.IResolvable | string;
    /**
     * Attribute CheckId: The first ID of the resource.
     */
    readonly attrCheckId: ros.IResolvable | string;
    /**
     * Attribute CheckRule: Check Item Check Rules.
     */
    readonly attrCheckRule: ros.IResolvable | string;
    /**
     * Attribute CheckShowName: Check item display name.
     */
    readonly attrCheckShowName: ros.IResolvable | string;
    /**
     * Attribute Description: Check item description information.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute InstanceSubType: Asset subtype to which the check item belongs.
     */
    readonly attrInstanceSubType: ros.IResolvable | string;
    /**
     * Attribute InstanceType: Asset type to which the check item belongs.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute Remark: Remarks.
     */
    readonly attrRemark: ros.IResolvable | string;
    /**
     * Attribute RiskLevel: Risk level of inspection items.
     */
    readonly attrRiskLevel: ros.IResolvable | string;
    /**
     * Attribute SectionIds: CHECK SECTION OF INSPECTIONS.
     */
    readonly attrSectionIds: ros.IResolvable | string;
    /**
     * Attribute Solution: Check Item Solution.
     */
    readonly attrSolution: ros.IResolvable | string;
    /**
     * Attribute Vendor: Vendor to which the item belongs.
     */
    readonly attrVendor: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomCheckItemProps, enableResourcePropertyConstraint?: boolean);
}
