using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiInterface(nativeType: typeof(IArnComponents), fullyQualifiedName: "@alicloud/ros-cdk-core.ArnComponents")]
    public interface IArnComponents
    {
        /// <summary>Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name.</summary>
        [JsiiProperty(name: "resource", typeJson: "{\"primitive\":\"string\"}")]
        string Resource
        {
            get;
        }

        /// <summary>The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram').</summary>
        [JsiiProperty(name: "service", typeJson: "{\"primitive\":\"string\"}")]
        string Service
        {
            get;
        }

        /// <summary>The ID of the ACS account that owns the resource, without the hyphens.</summary>
        /// <remarks>
        /// For example, 123456789012. Note that the ARNs for some resources don't
        /// require an account number, so this component might be omitted.
        ///
        /// <strong>Default</strong>: The account the stack is deployed to.
        /// </remarks>
        [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Account
        {
            get
            {
                return null;
            }
        }

        /// <summary>The specific ARN format to use for this ARN value.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - uses value of `sep` as the separator for formatting,
        /// `ArnFormat.SLASH_RESOURCE_NAME` if that property was also not provided
        /// </remarks>
        [JsiiProperty(name: "arnFormat", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ArnFormat\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.ArnFormat? ArnFormat
        {
            get
            {
                return null;
            }
        }

        /// <summary>The partition that the resource is in.</summary>
        /// <remarks>
        /// <strong>Default</strong>: acs
        /// </remarks>
        [JsiiProperty(name: "partition", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Partition
        {
            get
            {
                return null;
            }
        }

        /// <summary>The region the resource resides in.</summary>
        /// <remarks>
        /// Note that the ARNs for some resources
        /// do not require a region, so this component might be omitted.
        ///
        /// <strong>Default</strong>: The region the stack is deployed to.
        /// </remarks>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as ``"*"``. This is service-dependent.</summary>
        [JsiiProperty(name: "resourceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceName
        {
            get
            {
                return null;
            }
        }

        [JsiiTypeProxy(nativeType: typeof(IArnComponents), fullyQualifiedName: "@alicloud/ros-cdk-core.ArnComponents")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IArnComponents
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Resource type (e.g. "instance", "functions", "role"). For some resource types, e.g. OSS buckets, this field defines the bucket name.</summary>
            [JsiiProperty(name: "resource", typeJson: "{\"primitive\":\"string\"}")]
            public string Resource
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The service namespace that identifies the ACS product (for example, 'ecs', 'fc', 'ram').</summary>
            [JsiiProperty(name: "service", typeJson: "{\"primitive\":\"string\"}")]
            public string Service
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The ID of the ACS account that owns the resource, without the hyphens.</summary>
            /// <remarks>
            /// For example, 123456789012. Note that the ARNs for some resources don't
            /// require an account number, so this component might be omitted.
            ///
            /// <strong>Default</strong>: The account the stack is deployed to.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Account
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The specific ARN format to use for this ARN value.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - uses value of `sep` as the separator for formatting,
            /// `ArnFormat.SLASH_RESOURCE_NAME` if that property was also not provided
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arnFormat", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ArnFormat\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.ArnFormat? ArnFormat
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ArnFormat?>();
            }

            /// <summary>The partition that the resource is in.</summary>
            /// <remarks>
            /// <strong>Default</strong>: acs
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "partition", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Partition
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The region the resource resides in.</summary>
            /// <remarks>
            /// Note that the ARNs for some resources
            /// do not require a region, so this component might be omitted.
            ///
            /// <strong>Default</strong>: The region the stack is deployed to.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Resource name or path within the resource (i.e. OSS bucket object key) or a wildcard such as ``"*"``. This is service-dependent.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceName
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
