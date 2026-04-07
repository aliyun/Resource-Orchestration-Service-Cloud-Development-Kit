using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Properties for defining a `Route`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RouteProps")]
    public interface IRouteProps
    {
        /// <summary>Property destinationCidr: The CIDR blocks of the destination-based route.</summary>
        [JsiiProperty(name: "destinationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestinationCidr
        {
            get;
        }

        /// <summary>Property networkId: The ID of the network resource to which the route belongs.</summary>
        [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkId
        {
            get;
        }

        /// <summary>Property dwResourceGroupId: ID of the resource group to which the route belongs.</summary>
        [JsiiProperty(name: "dwResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DwResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Route`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRouteProps), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.RouteProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IRouteProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destinationCidr: The CIDR blocks of the destination-based route.</summary>
            [JsiiProperty(name: "destinationCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestinationCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkId: The ID of the network resource to which the route belongs.</summary>
            [JsiiProperty(name: "networkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dwResourceGroupId: ID of the resource group to which the route belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dwResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DwResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
