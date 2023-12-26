using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cen
{
    /// <summary>Properties for defining a `RosTransitRouter`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTransitRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterProps")]
    public interface IRosTransitRouterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cenId: CenId
        /// </remarks>
        [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CenId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterDescription: TransitRouterDescription
        /// </remarks>
        [JsiiProperty(name: "transitRouterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: transitRouterName: TransitRouterName
        /// </remarks>
        [JsiiProperty(name: "transitRouterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TransitRouterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTransitRouter`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouter
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTransitRouterProps), fullyQualifiedName: "@alicloud/ros-cdk-cen.RosTransitRouterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cen.IRosTransitRouterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cenId: CenId
            /// </remarks>
            [JsiiProperty(name: "cenId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CenId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterDescription: TransitRouterDescription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: transitRouterName: TransitRouterName
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "transitRouterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TransitRouterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
