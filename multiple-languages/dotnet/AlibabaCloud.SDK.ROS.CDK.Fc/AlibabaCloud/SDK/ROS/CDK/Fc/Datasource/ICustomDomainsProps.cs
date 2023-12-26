using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fc.Datasource
{
    /// <summary>Properties for defining a `CustomDomains`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ICustomDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.CustomDomainsProps")]
    public interface ICustomDomainsProps
    {
        /// <summary>Property prefix: Qualified returned custom domain names must be prefixed with Prefix.</summary>
        /// <remarks>
        /// For example, if the Prefix is "a", the returned custom domain names should be started with "a".
        /// </remarks>
        [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Prefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `CustomDomains`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fc-customdomains
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ICustomDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-fc.datasource.CustomDomainsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fc.Datasource.ICustomDomainsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property prefix: Qualified returned custom domain names must be prefixed with Prefix.</summary>
            /// <remarks>
            /// For example, if the Prefix is "a", the returned custom domain names should be started with "a".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "prefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Prefix
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
