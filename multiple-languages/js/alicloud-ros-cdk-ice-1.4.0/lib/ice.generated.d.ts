import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosSearchLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export interface RosSearchLibProps {
    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    readonly searchLibName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ICE::SearchLib`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SearchLib` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export declare class RosSearchLib extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ICE::SearchLib";
    /**
     * @Attribute SearchLibName: The name of the Search Lib.
     */
    readonly attrSearchLibName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property searchLibName: The name of the Search Lib.
     */
    searchLibName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSearchLibProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
