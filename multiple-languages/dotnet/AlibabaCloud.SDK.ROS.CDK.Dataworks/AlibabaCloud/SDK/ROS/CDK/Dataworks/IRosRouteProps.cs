using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `RosRoute`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosRouteProps")]
    public interface IRosRouteProps
    {
        /// <remarks>
        /// <strong>Property</strong>: destinationCidr: The CIDR blocks of the destination-based route.
        /// </remarks>
        [JsiiProperty(name: "destinationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidr
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkId: The ID of the network resource to which the route belongs.
        /// </remarks>
        [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dwResourceGroupId: ID of the resource group to which the route belongs.
        /// </remarks>
        [JsiiProperty(name: "dwResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DwResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosRoute`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RosRouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IRosRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: destinationCidr: The CIDR blocks of the destination-based route.
            /// </remarks>
            [JsiiProperty(name: "destinationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkId: The ID of the network resource to which the route belongs.
            /// </remarks>
            [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dwResourceGroupId: ID of the resource group to which the route belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dwResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DwResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
