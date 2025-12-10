using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cdt
{
    /// <summary>Properties for defining a `ResourcePackage`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourcePackageProps), fullyQualifiedName: "@alicloud/ros-cdk-cdt.ResourcePackageProps")]
    public interface IResourcePackageProps
    {
        /// <summary>Property capacity: The capacity of the specified CDT resource package.</summary>
        [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Capacity
        {
            get;
        }

        /// <summary>Property pack: The pack of the specified CDT resource package.</summary>
        /// <remarks>
        /// It can be obtained from the <c>components</c> field in the payload of the <c>getPrice</c> network request on the CDT common buy page.
        /// </remarks>
        [JsiiProperty(name: "pack", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Pack
        {
            get;
        }

        /// <summary>Property region: The region of the specified CDT resource package.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Region
        {
            get;
        }

        /// <summary>Property isp: The ISP of the specified CDT resource package.</summary>
        [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Isp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ResourcePackage`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdt-resourcepackage
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourcePackageProps), fullyQualifiedName: "@alicloud/ros-cdk-cdt.ResourcePackageProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cdt.IResourcePackageProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property capacity: The capacity of the specified CDT resource package.</summary>
            [JsiiProperty(name: "capacity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Capacity
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pack: The pack of the specified CDT resource package.</summary>
            /// <remarks>
            /// It can be obtained from the <c>components</c> field in the payload of the <c>getPrice</c> network request on the CDT common buy page.
            /// </remarks>
            [JsiiProperty(name: "pack", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Pack
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property region: The region of the specified CDT resource package.</summary>
            [JsiiProperty(name: "region", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Region
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property isp: The ISP of the specified CDT resource package.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "isp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Isp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
