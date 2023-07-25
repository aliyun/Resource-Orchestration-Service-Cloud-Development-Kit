using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dns.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::DNS::DomainGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IDomainGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.DomainGroupsProps")]
    public interface IDomainGroupsProps
    {
        /// <summary>Property keyWord: The keyword for searches in "%KeyWord%" mode.</summary>
        /// <remarks>
        /// The value is not case-sensitive.
        /// </remarks>
        [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyWord
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property lang: The language type.</summary>
        [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Lang
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::DNS::DomainGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDomainGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-dns.datasource.DomainGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dns.Datasource.IDomainGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property keyWord: The keyword for searches in "%KeyWord%" mode.</summary>
            /// <remarks>
            /// The value is not case-sensitive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyWord", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyWord
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property lang: The language type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "lang", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Lang
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
