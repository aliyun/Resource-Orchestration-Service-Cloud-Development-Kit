using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae.Datasource
{
    /// <summary>Properties for defining a `RosApplications`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationsProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.RosApplicationsProps")]
    public interface IRosApplicationsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: appName: The name of application.
        /// </remarks>
        [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AppName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fieldType: Set the dimension of the filter application. Valid values:
        /// appName: The application name.
        /// appIds: App IDs.
        /// slbIps: SLB IP address.
        /// instanceIps: Instance IP address.
        /// </remarks>
        [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FieldType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
        /// </remarks>
        [JsiiProperty(name: "fieldValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FieldValue
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaceId: The ID of namespace.
        /// </remarks>
        [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? NamespaceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplications`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-applications
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationsProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.RosApplicationsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.IRosApplicationsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: appName: The name of application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "appName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AppName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldType: Set the dimension of the filter application. Valid values:
            /// appName: The application name.
            /// appIds: App IDs.
            /// slbIps: SLB IP address.
            /// instanceIps: Instance IP address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fieldType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FieldType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fieldValue: Enter the application name, application ID, SLB IP address, or instance IP address of the target application.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fieldValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FieldValue
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaceId: The ID of namespace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? NamespaceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
