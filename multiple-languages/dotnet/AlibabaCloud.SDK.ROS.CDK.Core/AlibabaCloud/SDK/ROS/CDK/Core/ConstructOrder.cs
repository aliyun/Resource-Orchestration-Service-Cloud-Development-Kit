using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>In what order to return constructs.</summary>
    [JsiiEnum(nativeType: typeof(ConstructOrder), fullyQualifiedName: "@alicloud/ros-cdk-core.ConstructOrder")]
    public enum ConstructOrder
    {
        /// <summary>Depth-first, pre-order.</summary>
        [JsiiEnumMember(name: "PREORDER")]
        PREORDER,
        /// <summary>Depth-first, post-order (leaf nodes first).</summary>
        [JsiiEnumMember(name: "POSTORDER")]
        POSTORDER
    }
}
