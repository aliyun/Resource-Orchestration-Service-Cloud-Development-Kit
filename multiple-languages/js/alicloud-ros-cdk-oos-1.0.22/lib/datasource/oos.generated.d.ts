import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosPatchBaselines`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export interface RosPatchBaselinesProps {
    /**
     * @Property operationSystem: Operating system type.
     */
    readonly operationSystem?: string | ros.IResolvable;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName?: string | ros.IResolvable;
    /**
     * @Property shareType: Patch baseline sharing type.
     */
    readonly shareType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::PatchBaselines`, which is used to query patch baselines.
 * @Note This class does not contain additional functions, so it is recommended to use the `PatchBaselines` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaselines
 */
export declare class RosPatchBaselines extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::PatchBaselines";
    /**
     * @Attribute PatchBaselineNames: The list of patch baseline names.
     */
    readonly attrPatchBaselineNames: ros.IResolvable;
    /**
     * @Attribute PatchBaselines: The list of patch baselines.
     */
    readonly attrPatchBaselines: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property operationSystem: Operating system type.
     */
    operationSystem: string | ros.IResolvable | undefined;
    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    patchBaselineName: string | ros.IResolvable | undefined;
    /**
     * @Property shareType: Patch baseline sharing type.
     */
    shareType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselinesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSecretParameters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export interface RosSecretParametersProps {
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    readonly secretParameterName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::OOS::SecretParameters`, which is used to query encryption parameters.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecretParameters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-secretparameters
 */
export declare class RosSecretParameters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::OOS::SecretParameters";
    /**
     * @Attribute SecretParameterNames: The list of secret parameter names.
     */
    readonly attrSecretParameterNames: ros.IResolvable;
    /**
     * @Attribute SecretParameters: The list of secret parameters.
     */
    readonly attrSecretParameters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secretParameterName: The name of the encryption parameter.
     */
    secretParameterName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParametersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
