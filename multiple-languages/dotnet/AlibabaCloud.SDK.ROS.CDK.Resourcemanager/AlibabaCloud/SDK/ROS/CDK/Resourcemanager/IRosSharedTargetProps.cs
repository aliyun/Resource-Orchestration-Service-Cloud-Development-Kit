using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosSharedTarget`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSharedTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosSharedTargetProps")]
    public interface IRosSharedTargetProps
    {
        /// <remarks>
        /// <strong>Property</strong>: resourceShareId: The ID of the resource share.
        /// </remarks>
        [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceShareId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetId: The ID of the principal.
        /// </remarks>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSharedTarget`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSharedTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosSharedTargetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosSharedTargetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceShareId: The ID of the resource share.
            /// </remarks>
            [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceShareId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetId: The ID of the principal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
