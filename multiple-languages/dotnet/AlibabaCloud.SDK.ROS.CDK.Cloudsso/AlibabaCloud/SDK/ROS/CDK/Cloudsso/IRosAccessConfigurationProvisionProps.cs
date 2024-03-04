using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudsso
{
    /// <summary>Properties for defining a `RosAccessConfigurationProvision`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAccessConfigurationProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProvisionProps")]
    public interface IRosAccessConfigurationProvisionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accessConfigurationId: The ID of the access configuration.
        /// </remarks>
        [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccessConfigurationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: directoryId: The ID of the directory.
        /// </remarks>
        [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DirectoryId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetId: The ID of the task object.
        /// </remarks>
        [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
        /// </remarks>
        [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetType
        {
            get;
        }

        /// <summary>Properties for defining a `RosAccessConfigurationProvision`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudsso-accessconfigurationprovision
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAccessConfigurationProvisionProps), fullyQualifiedName: "@alicloud/ros-cdk-cloudsso.RosAccessConfigurationProvisionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cloudsso.IRosAccessConfigurationProvisionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accessConfigurationId: The ID of the access configuration.
            /// </remarks>
            [JsiiProperty(name: "accessConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccessConfigurationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: directoryId: The ID of the directory.
            /// </remarks>
            [JsiiProperty(name: "directoryId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DirectoryId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetId: The ID of the task object.
            /// </remarks>
            [JsiiProperty(name: "targetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetType: The type of the task object. Set the value to RD-Account, which specifies the accounts in the resource directory.
            /// </remarks>
            [JsiiProperty(name: "targetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetType
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
