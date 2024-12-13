import * as ros from '@alicloud/ros-cdk-core';
import { RosSearchLib } from './ice.generated';
export { RosSearchLib as SearchLibProperty };
/**
 * Properties for defining a `SearchLib`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export interface SearchLibProps {
    /**
     * Property searchLibName: The name of the Search Lib.
     */
    readonly searchLibName: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ICE::SearchLib`, which is used to create a search library.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSearchLib`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ice-searchlib
 */
export declare class SearchLib extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: SearchLibProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute SearchLibName: The name of the Search Lib.
     */
    readonly attrSearchLibName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SearchLibProps, enableResourcePropertyConstraint?: boolean);
}
