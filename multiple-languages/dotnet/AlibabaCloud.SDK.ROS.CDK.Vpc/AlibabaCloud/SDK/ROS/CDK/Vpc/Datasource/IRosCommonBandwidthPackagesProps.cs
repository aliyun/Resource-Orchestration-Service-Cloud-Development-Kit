using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VPC::CommonBandwidthPackages`.</summary>
    [JsiiInterface(nativeType: typeof(IRosCommonBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosCommonBandwidthPackagesProps")]
    public interface IRosCommonBandwidthPackagesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: commonBandwidthPackageId: The ID of the Internet shared bandwidth.
        /// </remarks>
        [JsiiProperty(name: "commonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommonBandwidthPackageId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
        /// </remarks>
        [JsiiProperty(name: "commonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CommonBandwidthPackageName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VPC::CommonBandwidthPackages`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosCommonBandwidthPackagesProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.datasource.RosCommonBandwidthPackagesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.Datasource.IRosCommonBandwidthPackagesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: commonBandwidthPackageId: The ID of the Internet shared bandwidth.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commonBandwidthPackageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommonBandwidthPackageId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "commonBandwidthPackageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CommonBandwidthPackageName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
