using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `TransitRouter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITransitRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterProps")]
    public interface ITransitRouterProps
    {
        /// <summary>Property cenId: CenId.</summary>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <summary>Property transitRouterDescription: TransitRouterDescription.</summary>
        [JsiiProperty(name: "transitRouterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property transitRouterName: TransitRouterName.</summary>
        [JsiiProperty(name: "transitRouterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `TransitRouter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITransitRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.TransitRouterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.ITransitRouterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cenId: CenId.</summary>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property transitRouterDescription: TransitRouterDescription.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property transitRouterName: TransitRouterName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
