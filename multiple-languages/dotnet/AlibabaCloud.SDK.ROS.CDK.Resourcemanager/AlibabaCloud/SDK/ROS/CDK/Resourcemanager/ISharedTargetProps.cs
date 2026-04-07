using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `SharedTarget`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISharedTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.SharedTargetProps")]
    public interface ISharedTargetProps
    {
        /// <summary>Property resourceShareId: The ID of the resource share.</summary>
        [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceShareId
        {
            get;
        }

        /// <summary>Property targetId: The ID of the principal.</summary>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SharedTarget`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-sharedtarget
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISharedTargetProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.SharedTargetProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.ISharedTargetProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property resourceShareId: The ID of the resource share.</summary>
            [JsiiProperty(name: "resourceShareId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceShareId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetId: The ID of the principal.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
