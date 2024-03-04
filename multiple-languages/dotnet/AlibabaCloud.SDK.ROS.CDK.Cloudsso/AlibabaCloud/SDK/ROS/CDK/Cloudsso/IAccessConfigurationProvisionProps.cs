using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `AccessConfigurationProvision`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccessConfigurationProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps")]
    public interface IAccessConfigurationProvisionProps
    {
        /// <summary>Property accessConfigurationId: The ID of the access configuration.</summary>
        [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessConfigurationId
        {
            get;
        }

        /// <summary>Property directoryId: The ID of the directory.</summary>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <summary>Property targetId: The ID of the task object.</summary>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <summary>Property targetType: The type of the task object.</summary>
        /// <remarks>
        /// Set the value to RD-Account, which specifies the accounts in the resource directory.
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Properties for defining a `AccessConfigurationProvision`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccessConfigurationProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.AccessConfigurationProvisionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IAccessConfigurationProvisionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accessConfigurationId: The ID of the access configuration.</summary>
            [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessConfigurationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property directoryId: The ID of the directory.</summary>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetId: The ID of the task object.</summary>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetType: The type of the task object.</summary>
            /// <remarks>
            /// Set the value to RD-Account, which specifies the accounts in the resource directory.
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
