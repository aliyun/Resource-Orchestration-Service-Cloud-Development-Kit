using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Construction properties for {@link Resource}.</summary>
    [JsiiInterface(nativeType: typeof(IResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-core.ResourceProps")]
    public interface IResourceProps
    {
        /// <summary>The Alibaba Cloud account ID this resource belongs to.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - the resource is in the same account as the stack it belongs to
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

        /// <summary>ARN to deduce region and account from.</summary>
        /// <remarks>
        /// The ARN is parsed and the account and region are taken from the ARN.
        /// This should be used for imported resources.
        ///
        /// Cannot be supplied together with either <c>account</c> or <c>region</c>.
        ///
        /// <strong>Default</strong>: - take environment from `account`, `region` parameters, or use Stack environment.
        /// </remarks>
        [JsiiProperty(name: "environmentFromArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnvironmentFromArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>The value passed in by users to the physical name prop of the resource.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><c>undefined</c> implies that a physical name will be allocated during deployment.</description>
        /// <description>a concrete value implies a specific physical name</description>
        /// <description><c>PhysicalName.GENERATE_IF_NEEDED</c> is a marker that indicates that a physical will only be generated
        /// by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</description>
        /// </list>
        ///
        /// <strong>Default</strong>: - The physical name will be allocated at deployment time
        /// </remarks>
        [JsiiProperty(name: "physicalName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PhysicalName
        {
            get
            {
                return null;
            }
        }

        /// <summary>The Alibaba Cloud region this resource belongs to.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - the resource is in the same region as the stack it belongs to
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

        /// <summary>Construction properties for {@link Resource}.</summary>
        [JsiiTypeProxy(nativeType: typeof(IResourceProps), fullyQualifiedName: "@alicloud/ros-cdk-core.ResourceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IResourceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The Alibaba Cloud account ID this resource belongs to.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - the resource is in the same account as the stack it belongs to
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "account", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Account
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>ARN to deduce region and account from.</summary>
            /// <remarks>
            /// The ARN is parsed and the account and region are taken from the ARN.
            /// This should be used for imported resources.
            ///
            /// Cannot be supplied together with either <c>account</c> or <c>region</c>.
            ///
            /// <strong>Default</strong>: - take environment from `account`, `region` parameters, or use Stack environment.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "environmentFromArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnvironmentFromArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>The value passed in by users to the physical name prop of the resource.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><c>undefined</c> implies that a physical name will be allocated during deployment.</description>
            /// <description>a concrete value implies a specific physical name</description>
            /// <description><c>PhysicalName.GENERATE_IF_NEEDED</c> is a marker that indicates that a physical will only be generated
            /// by the CDK if it is needed for cross-environment references. Otherwise, it will be allocated.</description>
            /// </list>
            ///
            /// <strong>Default</strong>: - The physical name will be allocated at deployment time
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "physicalName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PhysicalName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>The Alibaba Cloud region this resource belongs to.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - the resource is in the same region as the stack it belongs to
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
