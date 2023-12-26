using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosResourceGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps")]
    public interface IRosResourceGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: displayName: The display name of the resource group
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The unique identifier of the resource group
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Name
        {
            get;
        }

        /// <summary>Properties for defining a `RosResourceGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosResourceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosResourceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: The display name of the resource group
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The unique identifier of the resource group
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Name
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
