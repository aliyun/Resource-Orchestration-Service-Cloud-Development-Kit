using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway
{
    /// <summary>Properties for defining a `StorageBundle`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IStorageBundleProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.StorageBundleProps")]
    public interface IStorageBundleProps
    {
        /// <summary>Property storageBundleName: The name of the gateway cluster.</summary>
        /// <remarks>
        /// The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "storageBundleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object StorageBundleName
        {
            get;
        }

        /// <summary>Property description: The description of the gateway cluster.</summary>
        /// <remarks>
        /// The description must be 0 to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `StorageBundle`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-storagebundle
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IStorageBundleProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudstoragegateway.StorageBundleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudstoragegateway.IStorageBundleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property storageBundleName: The name of the gateway cluster.</summary>
            /// <remarks>
            /// The name must be 1 to 60 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "storageBundleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object StorageBundleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the gateway cluster.</summary>
            /// <remarks>
            /// The description must be 0 to 128 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
