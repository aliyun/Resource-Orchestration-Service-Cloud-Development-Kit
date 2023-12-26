using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ResourceGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceGroupProps")]
    public interface IResourceGroupProps
    {
        /// <summary>Property displayName: The display name of the resource group.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property name: The unique identifier of the resource group.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `ResourceGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property displayName: The display name of the resource group.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property name: The unique identifier of the resource group.</summary>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
