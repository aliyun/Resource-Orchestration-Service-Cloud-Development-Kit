using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos
{
    /// <summary>Properties for defining a `ServiceSettings`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServiceSettingsProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ServiceSettingsProps")]
    public interface IServiceSettingsProps
    {
        /// <summary>Property deliveryOssBucketName: OSS bucket name.</summary>
        [JsiiProperty(name: "deliveryOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryOssBucketName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature.</summary>
        /// <remarks>
        /// Defaults to false.
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

        /// <summary>Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos\/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".</summary>
        [JsiiProperty(name: "deliveryOssKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliveryOssKeyPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature.</summary>
        /// <remarks>
        /// Defaults to false.
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

        /// <summary>Property deliverySlsProjectName: SLS project name.</summary>
        [JsiiProperty(name: "deliverySlsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeliverySlsProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rdcEnterpriseId: Enterprise ID.</summary>
        [JsiiProperty(name: "rdcEnterpriseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdcEnterpriseId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ServiceSettings`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oos-servicesettings
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServiceSettingsProps), fullyQualifiedName: "@alicloud/ros-cdk-oos.ServiceSettingsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.IServiceSettingsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property deliveryOssBucketName: OSS bucket name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryOssBucketName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryOssBucketName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deliveryOssEnabled: Whether to enable the OSS delivery template execution logging feature.</summary>
            /// <remarks>
            /// Defaults to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryOssEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryOssEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deliveryOssKeyPrefix: OSS storage space directory, such as "oos\/execution", pass "" to indicate that no directory is needed, if set before set again do not need directory can be cleared by passing "".</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deliveryOssKeyPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliveryOssKeyPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deliverySlsEnabled: Whether to enable the SLS delivery template execution logging feature.</summary>
            /// <remarks>
            /// Defaults to false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deliverySlsEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliverySlsEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deliverySlsProjectName: SLS project name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deliverySlsProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeliverySlsProjectName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rdcEnterpriseId: Enterprise ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rdcEnterpriseId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdcEnterpriseId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
