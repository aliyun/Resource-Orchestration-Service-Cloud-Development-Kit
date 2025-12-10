using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdt
{
    /// <summary>Properties for defining a `RosResourcePackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosResourcePackageProps), fullyQualifiedName: "@alicloud/ros-cdk-cdt.RosResourcePackageProps")]
    public interface IRosResourcePackageProps
    {
        /// <remarks>
        /// <strong>Property</strong>: capacity: The capacity of the specified CDT resource package.
        /// </remarks>
        [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Capacity
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
        /// </remarks>
        [JsiiProperty(name: "pack", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Pack
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: region: The region of the specified CDT resource package.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Region
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: isp: The ISP of the specified CDT resource package.
        /// </remarks>
        [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosResourcePackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosResourcePackageProps), fullyQualifiedName: "@alicloud/ros-cdk-cdt.RosResourcePackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdt.IRosResourcePackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: capacity: The capacity of the specified CDT resource package.
            /// </remarks>
            [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Capacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pack: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
            /// </remarks>
            [JsiiProperty(name: "pack", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Pack
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: region: The region of the specified CDT resource package.
            /// </remarks>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Region
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: isp: The ISP of the specified CDT resource package.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
