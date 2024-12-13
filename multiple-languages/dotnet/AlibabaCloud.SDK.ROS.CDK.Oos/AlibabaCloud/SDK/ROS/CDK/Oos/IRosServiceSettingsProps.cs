using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `RosServiceSettings`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosServiceSettingsProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosServiceSettingsProps")]
    public interface IRosServiceSettingsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: deliveryOssBucketName: OSS bucket name.
        /// </remarks>
        [JsiiProperty(name: "deliveryOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryOssBucketName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature. Defaults to false.
        /// </remarks>
        [JsiiProperty(name: "deliveryOssEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryOssEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deliveryOssKeyPrefix: OSS storage space directory, such as "oos\/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".
        /// </remarks>
        [JsiiProperty(name: "deliveryOssKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryOssKeyPrefix
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature. Defaults to false.
        /// </remarks>
        [JsiiProperty(name: "deliverySlsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliverySlsEnabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: deliverySlsProjectName: SLS project name.
        /// </remarks>
        [JsiiProperty(name: "deliverySlsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliverySlsProjectName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rdcEnterpriseId: Enterprise ID.
        /// </remarks>
        [JsiiProperty(name: "rdcEnterpriseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdcEnterpriseId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosServiceSettings`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosServiceSettingsProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.RosServiceSettingsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IRosServiceSettingsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryOssBucketName: OSS bucket name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryOssBucketName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature. Defaults to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryOssEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryOssEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deliveryOssKeyPrefix: OSS storage space directory, such as "oos\/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryOssKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryOssKeyPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature. Defaults to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliverySlsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliverySlsEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: deliverySlsProjectName: SLS project name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliverySlsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliverySlsProjectName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rdcEnterpriseId: Enterprise ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdcEnterpriseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdcEnterpriseId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
