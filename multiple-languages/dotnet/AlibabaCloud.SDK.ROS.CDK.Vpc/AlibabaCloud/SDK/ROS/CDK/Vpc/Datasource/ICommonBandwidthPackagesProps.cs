using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `CommonBandwidthPackages`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICommonBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackagesProps")]
    public interface ICommonBandwidthPackagesProps
    {
        /// <summary>Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.</summary>
        [JsiiProperty(name: "commonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommonBandwidthPackageId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.</summary>
        [JsiiProperty(name: "commonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommonBandwidthPackageName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CommonBandwidthPackages`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICommonBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.CommonBandwidthPackagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.ICommonBandwidthPackagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "commonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommonBandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "commonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommonBandwidthPackageName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
